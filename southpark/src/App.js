import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Cards from "./components/Cards";
import images from './images.json';

class App extends Component {

  state = {
    highScore: 0,
    score: 0,
    message: "Click an image to begin!",
    imageArr: images,
    clicked: [],
    didLose: false
  }

  guess = (id) => {    
    if(this.state.clicked.indexOf(id) === -1){
        this.setState({ 
          didLose: false,
          clicked: this.state.clicked.concat([id]) ,
          message: "You guessed correctly!",
          score: this.state.score + 1
        });
        this.randomize();
    }
    else {
        this.lost();
    }
  };

  lost = () => {
    this.state.score > this.state.highScore ? 
      this.setState({
        message: "New highscore!",
        highScore: this.state.score,
        score: 0,
        clicked: [],
        didLose: true
      }) :
      this.setState({
        message: "Sorry, you lost.",
        score: 0,
        clicked: [],
        didLose: true
      })
  }

  randomize = () => {
    this.setState({ imageArr: this.state.imageArr.sort(function(a, b){return 0.5 - Math.random()})});
  };

  render() {
    let cardWrapperClasses = "wrapperDiv mx-auto d-flex justify-content-center flex-wrap animated";
    if(this.state.didLose){ cardWrapperClasses += " shake"};
    return (
      <Wrapper>
        <Header message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        
        <div className={cardWrapperClasses}>
          {this.state.imageArr.map(image => (
            <Cards key={image.id} id={image.id} link={image.link} onClick={() => this.guess(image.id)} />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
