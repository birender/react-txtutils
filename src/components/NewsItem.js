import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description,urlImage} = this.props;
        const divStyle = {
            width: '18rem'
          };

        return (
            <div className='my-3'>
                <div className="card" style={divStyle}>
                    <img src={`${urlImage}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newdetail" className="btn btn-primary btm-sm">Read More ...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
