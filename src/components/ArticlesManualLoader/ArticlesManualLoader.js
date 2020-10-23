import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import classes from "./ArticlesManualLoader.module.css";
import Article from "../Article/Article";
import * as actions from "../../store/articles/actionCreators";

class ArticlesManualLoader extends Component {
  render() {
    let articlesToDisplay = this.props.articles;
    articlesToDisplay = articlesToDisplay.map((article) => (
        <div className={classes["article"]}>
            <Article article={article} />
        </div>
    ));
    return (
      <Fragment>
        <button onClick={this.props.onLoadArticles}>Load!</button>
        <div className={classes["Loader"]}>{articlesToDisplay}</div>
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
    onLoadArticles: () => dispatch(actions.asyncFetchArticlesStart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesManualLoader);
