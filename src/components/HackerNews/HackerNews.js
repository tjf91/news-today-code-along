import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {requestArticles} from '../../ducks/hackerNewsReducer'

class HackerNews extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount(){
    this.props.requestArticles()
  }
  
  render() {
    console.log(this.props)
    const articles = this.props.hacker.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.hacker.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default  connect(mapStateToProps,{requestArticles})(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}