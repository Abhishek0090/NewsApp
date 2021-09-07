import React, { Component } from "react";

export default class NewsItem extends Component {
    
  render() {
    let { title, description, imageUrl,newsUrl,author,date,source} = this.props; //setting our props
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:0
          }}>
        <span className="badge rounded-pill bg-danger " style={{left:'90%',zIndex:1}}>
             {source}</span>
          </div>
          <img src={!imageUrl?"https://1721181113.rsc.cdn77.org/data/images/full/34888/science-times-twin-meteor-showers-dont-miss-this-weeks-occurrence-in-the-sky-that-could-produce-fireballs.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
