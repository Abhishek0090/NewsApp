import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                    <NewsItem title="Cricket" description="Trying my first application"/>
                    </div>
                    <div className="col-md-3">
                    <NewsItem title="Cricket" description="Trying my first application"/>
                    </div>
                    <div className="col-md-3">
                    <NewsItem title="Cricket" description="Trying my first application"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
