import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import classes from "./ArticlesManualLoader.module.css";
import Article from "../Article/Article";
import * as actions from "../../store/articles/actionCreators";
import Spinner from "../../assets/images/spinner.gif";

class ArticlesManualLoader extends Component {


  constructor(props) {
    super(props);
    this.loaderRef = React.createRef();
    this.pageNum = 1;
  }


  intersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      this.props.onLoadArticles(this.pageNum++);
    }
  };


  componentDidMount() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    let observer = new IntersectionObserver(
      this.intersectionObserverCallback,
      options
    );
    observer.observe(this.loaderRef.current);
  }


  render() {
    let articlesToDisplay = this.props.articles;
    articlesToDisplay = articlesToDisplay.map((article) => (
      <div className={classes["article"]}>
        <Article article={article} />
      </div>
    ));
    return (
      <Fragment>
        {/* <button onClick={this.props.onLoadArticles}>Load!</button> */}
        <div className={classes["Loader"]}>{articlesToDisplay}</div>
        <div ref={this.loaderRef}>
          <img src={Spinner} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articlesToDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadArticles: (pageNum) => dispatch(actions.asyncFetchArticlesStart(pageNum)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesManualLoader);
