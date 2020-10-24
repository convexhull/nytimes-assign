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
                        <button className={classes["article__buy-btn"]}>BUY</button>
                    </div>
                </div>
                <div className={classes["info"]}>
                    <p className={classes["article__abstract"]}>{this.props.article.abstract && this.props.article.abstract.slice(0,100) + "..." || "Some abstract..."}</p>
                    <p className={classes["article__subtitle"]}>September 11 | 9:30PM</p>
                    <p className={classes["article__subtitle"]}>{this.props.article.source}</p>
                    <div className={classes["article__footer"]}>
                        <p className={classes["article__cost"]}>Free</p>
                        <p className={classes["article__like-btn"]}><i class="far fa-heart"></i></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Article;