import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, urlImage, readMeURL, author, publishAt } = this.props;
        const divStyle = {
            width: '18rem'
        };

        return (
            <div className='my-3'>
                <div className="card" style={divStyle}>
                    <img src={`${urlImage}`} className="card-img-top" alt={`${title}`} />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="badge text-bg-primary">New</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on { new Date(publishAt).toGMTString()}</small></p>
                        <a href={`${readMeURL}`} className="btn btn-dark btm-sm">Read More ...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
