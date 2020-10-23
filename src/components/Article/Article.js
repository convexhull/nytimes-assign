import React, { Component } from 'react';

import classes from './Article.module.css';


class Article extends Component {

    state = {
        showOverlay: false
    }

    showOverlayHandler = () => {
        this.setState({
            showOverlay: true
        })
    }    

    hideOverlayHandler = () => {
        this.setState({
            showOverlay: false
        })
    }

    render() {

        let imgOverlayClasses = [classes["thumbnail__overlay"]];
        if(this.state.showOverlay){
            imgOverlayClasses.push(classes["thumbnail__overlay--show"])
        };
        let thumbnailImageUrl = (this.props.article.multimedia && this.props.article.multimedia[0] ? `https://static01.nyt.com/${this.props.article.multimedia[0].url}` :  "https://picsum.photos/seed/picsum/200/300");
        return (
            <div className={classes["Article"]} onMouseEnter={this.showOverlayHandler} onMouseLeave={this.hideOverlayHandler} >
                <div className={classes["thumbnail"]}>
                    <div className={classes["thumbnail__img"]}>
                        <img src={thumbnailImageUrl} />
                    </div>
                    <div class={imgOverlayClasses.join(' ')}>
                        <button>BUY</button>
                    </div>
                </div>
                <div className={classes["info"]}>
                    <p>{this.props.article.abstract.slice(0,100) + "..." || "Some abstract..."}</p>
                    <p>September 11 | 9:30PM</p>
                    <div>
                        <p>Free</p>
                        <p>H</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Article;