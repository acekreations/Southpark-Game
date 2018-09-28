import React, { Component } from 'react';
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import Card from "./components/Card";
import images from './images.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ContentWrapper>
          <Card images={images}></Card>
        </ContentWrapper>
      </div>
    );
  }
}

export default App;
