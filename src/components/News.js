import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
        apikey:''
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apikey: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pagenation: 0,
            error : 0,
            errorCode :'',
            message : ''
        };
        document.title = this.capitalized(this.props.category) + ": News Monkey App";
    }

    capitalized = (sentence) => {
        if (!sentence) return ''; // Check for empty string
        return sentence.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    async fetchNewsAPI() {  
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json(); 
        if( parseData.status == "error") {            
            this.setState({ articles: [], loading: false, totalResults: 0, pagenation: 0,message : parseData.message,error: 201,errorCode:parseData.code });
        }else{
            this.setState({ articles: parseData.articles, loading: false, totalResults: parseData.totalResults, pagenation: Math.ceil(this.state.totalResults / this.state.articles.length),error:200 });
        }        
    }

    componentDidMount() {
       this.fetchNewsAPI();
    }

    handleNextNews = async () => {
        this.setState({ page: 1, loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData.articles);
        this.setState({
            articles: parseData.articles,
            loading: false,
            page: this.state.page + 1,
            error :200,
            pagenation: Math.ceil(this.state.totalResults / this.state.articles.length)
        });
    }

    handlePrevNews = async () => {
        if (this.state.page > 1) {
            this.setState({ page: 1, loading: true });
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=1aafdb26827c468ba763e89b7a6828e8&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                loading: false,
                page: this.state.page - 1,
                pagenation: Math.ceil(this.state.totalResults / this.state.articles.length)
            });
        } else {
            this.setState({ page: 1, loading: true });
        }
    }

    fetchMore = async () => { 
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        if( parseData.status == "error") {                        
            this.setState({ message : parseData.message,error: 201,errorCode:parseData.code,articles: [], loading: false, totalResults: 0, pagenation: 0 });
        }else{    
            this.setState({
                articles: this.state.articles.concat(parseData.articles),
                loading: false,
                page: this.state.page + 1,
                error :200,
                pagenation: Math.ceil(this.state.totalResults / this.state.articles.length)
            });
        }
    }

    render() {
        return (
            <>
                <h2>{this.capitalized(this.props.category)} Top headlines</h2>
                { this.state.error == 200 &&  <InfiniteScroll
                    dataLength={this.state.articles.length}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    next={this.fetchMore}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all the articles</b>
                        </p>
                    }>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                let title       = element.title == null ? '' : element.title;
                                let description = element.description == null ? element.title : element.description;
                                let imageURL    = element.urlToImage == null ? '' : element.urlToImage;
                                let readMeURL   = element.url;
                                let author      = element.author == null ? 'Unknown' : element.author;
                                let date        = element.publishedAt;
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem title={title} description={description} urlImage={imageURL} readMeURL={readMeURL} author={author} publishAt={date} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    </InfiniteScroll>
                }
                { this.state.error == 201 && <div className="container my-3">
                        <div className="row">
                        <div className="col-md-12">
                            <strong>Error Code :</strong> { this.state.errorCode } - { this.state.message }
                        </div>
                        </div>
                   </div>}     
            </>
        );
    }
}

export default News;
