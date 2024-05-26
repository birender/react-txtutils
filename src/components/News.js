import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalresult : 0,
            pagenation : 0,

        };
    }

    async fetchNewsAPI() {
        this.setState({ loading: true });
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1aafdb26827c468ba763e89b7a6828e8&page='+this.state.page;
        let data = await fetch(url);
        let parseData = await data.json();
         
        this.setState({ articles: parseData.articles, loading: false ,totalResults : parseData.totalResults,pagenation:Math.ceil(this.state.totalResults / this.state.articles.length)});
    }

    componentDidMount() {
        this.fetchNewsAPI();
    }

    handleNextNews = async ()=>{   
        this.setState({page:1,loading: true}) ; 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1aafdb26827c468ba763e89b7a6828e8&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parseData = await data.json(); 
        console.log( parseData.totalResults );
        this.setState({ 
            articles: parseData.articles,
            loading: false,
            page:this.state.page + 1,
            pagenation : Math.ceil(this.state.totalResults / this.state.articles.length)
         });
    }

    handlePrevNews = async ()=>{
        if( this.state.page > 1){
            this.setState({page:1,loading: true}) ;
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1aafdb26827c468ba763e89b7a6828e8&page=${this.state.page-1}`;
            let data = await fetch(url);
            let parseData = await data.json();        
            this.setState({ 
                articles: parseData.articles,
                loading: false,
                page:this.state.page - 1,
                pagenation : Math.ceil(this.state.totalResults / this.state.articles.length)
            });
        }else{
            this.setState({page:1,loading: true}) ;
        }
    }

    render() {
        return (
            <>
                <h2>Top headlines</h2>                
                <div className="Container">
                { this.state.loading && (<Spinner/>)}
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevNews} className="btn btn-dark">&larr;Previous</button>
                        <button disabled={this.state.page >= this.state.pagenation} type="button" onClick={this.handleNextNews} className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        let title = element.title == null ? '' : element.title;
                        let description = element.description == null ? element.title : element.description;
                        let imageURL = element.urlToImage == null ? '' : element.urlToImage;
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={title} description={description} urlImage={imageURL} />
                            </div>
                        );
                    })}
                </div>
                
            </>
        );
    }
}

export default News;
