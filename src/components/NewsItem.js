import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description} = this.props;
        return (
            <div>
                 <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.24.co.za/files/Cms/General/d/11538/05ee13176ec84fa2947c8f8f9c214d2b.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    }
}
