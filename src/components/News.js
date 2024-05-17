import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        };
    }

    async fetchNewsAPI() {
        this.setState({ loading: true });
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1aafdb26827c468ba763e89b7a6828e8';
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, loading: false });
    }

    componentDidMount() {
        this.fetchNewsAPI();
    }

    render() {
        return (
            <>
                <h2>Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
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
