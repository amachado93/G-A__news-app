import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import Footer from './components/Footer';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsSource: "",
      apiKey: "",
      news: []
    }
  }
  
  async componentDidMount() {
    // do an axios call to get top stories
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5d52e2f5800d49198b0bc4b3569aac07')
    // update state with the response
    .then(data => {
      console.log(data)
      this.setState({
        news: data.data.articles
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        errorText: "Loading..."
      })
    })
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <Articles news={this.state.news} />

        { this.state.errorText && <p>{this.state.errorText}</p> }
        <Footer />
      </div>
    );
  }
}

export default App;
