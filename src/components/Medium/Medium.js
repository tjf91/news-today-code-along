import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {connect} from 'react-redux'
import {requestArticles} from '../../ducks/mediumReducer'
class Medium extends Component {
  constructor(props) {
    super(props);
    }
  componentDidMount(){
    this.props.requestArticles()
  }
  render() {
    const articles = this.props.medium.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.medium.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {requestArticles}) (Medium);

const styles = {
  logo: { width: '250px' }
}