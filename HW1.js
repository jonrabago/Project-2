import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: (
      <p>
        "Welcome, traveler! How would you like to get to your destination?",
        <img
          src="https://cdn.shopify.com/s/files/1/1017/2183/t/19/assets/live-preview-potato.png?4148"
          width="200"
          alt="yeah"
        />
        ,
      </p>
    ),
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: "Why are you taking a ship?",
    leftLabel: "Okay, I'll take the train",
    rightLabel: "Really? Train? Why?",
    leftPage: "onthetrain",
    rightPage: "onthetrain"
  },
  death: {
    text: "You're sitting next to a shady man",
    leftLabel: "Sit next to him",
    rightLabel: "97C",
    leftPage: "shank",
    rightPage: "life"
  },
  life: {
    text: "You're sitting next to a nice old lady",
    leftLabel: "Sit next to her",
    rightLabel: "12E",
    leftPage: "candy",
    rightPage: "death"
  },
  shank: {
    text: "The shady man pulls out a knife and demands for your valuables",
    leftLabel: "Give them to him",
    rightLabel: "Put out a fight",
    leftPage: "stabs",
    rightPage: "fight"
  },
  candy: {
    text: "The sweet old lady offers you some purse candy",
    leftLabel: "Accept candy",
    rightLabel: "Politely refuse",
    leftPage: "goodTrip",
    rightPage: "needle"
  },
  stabs: {
    text: "You hand over your valuables and he stabs you anyways",
    leftLabel: "You're dead.",
    rightLabel: "Start Over",
    leftPage: "start",
    rightPage: "start"
  },
  fight: {
    text: "As he swings his knife at you, you block and...",
    leftLabel: "headbutt him",
    rightLabel: "snap his arm",
    leftPage: "tackle",
    rightPage: "rolling"
  },
  goodTrip: {
    text: "As you're sucking on the candy, the world around you starts to spin",
    leftLabel: "Spit the candy out",
    rightLabel: "Continue sucking",
    leftPage: "wonder",
    rightPage: "enjoy"
  },
  needle: {
    text:
      "Grandma gets offended, gets her knitting needle out, and threatens to poke you",
    leftLabel: "Poke her back",
    rightLabel: "Take the candy",
    leftPage: "poke",
    rightPage: "goodTrip"
  },
  tackle: {
    text:
      "After you headbutt him, he holds on to his face and you tackle him to the floor",
    leftLabel: "Call out for help",
    rightLabel: "Call out for help",
    leftPage: "rolling",
    rightPage: "rolling"
  },
  rolling: {
    text: "An officer comes and takes the shady man away to train jail",
    leftLabel: "enjoy the rest of your trip",
    rightLabel: "enjoy the rest of your trip",
    leftPage: "enjoy",
    rightPage: "enjoy"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <p>{pageData.text}</p>
        {/*{imageElement}
         <p>
        <img src={pageData.image} width="200" alt="page-specific 1.image." /> */}
        <p>
          <button onClick={() => this.goToPage(pageData.leftPage)}>
            {pageData.leftLabel}
          </button>
          <button onClick={() => this.goToPage(pageData.rightPage)}>
            {pageData.rightLabel}
          </button>
        </p>
      </div>
    );
  }
}

export default App;
