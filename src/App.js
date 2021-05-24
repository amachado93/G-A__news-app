import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'


import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsSource: "",
      apiKey: "",
      news: [],
      headlines:[]
    }
  }
  

  //https://newsapi.org/v2/top-headlines?country=us&apiKey=5d52e2f5800d49198b0bc4b3569aac07

  async componentDidMount() {
    // do an axios call to get top stories
    //axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5d52e2f5800d49198b0bc4b3569aac07')
    // update state with the response
    // .then(data => {
    //   console.log(data)
    //   this.setState({
    //     news: data.data.articles
    //   })
    // })

  // Make first two requests
  const [firstResponse, secondResponse] = await Promise.all([
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5d52e2f5800d49198b0bc4b3569aac07'),
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5d52e2f5800d49198b0bc4b3569aac07')
  ]);

  

  // Update state once with all 3 responses
  this.setState({
    news: firstResponse.data.articles,
    headlines: secondResponse.data.articles
  });


    // .catch(err => {
    //   console.log(err);
    //   this.setState({
    //     errorText: "Loading..."
    //   })
    // })
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <main>
          <Articles news={this.state.news} />
          <Sidebar headlines={this.state.headlines} />
          { this.state.errorText && <p>{this.state.errorText}</p> }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
