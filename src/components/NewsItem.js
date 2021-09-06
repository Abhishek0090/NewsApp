import React, { Component } from "react";

export default class NewsItem extends Component {
    
  render() {
    let { title, description, imageUrl,newsUrl} = this.props; //setting our props
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://1721181113.rsc.cdn77.org/data/images/full/34888/science-times-twin-meteor-showers-dont-miss-this-weeks-occurrence-in-the-sky-that-could-produce-fireballs.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
