import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        Random date
        <br />
        <br />
        <input
          type="date"
          value={getData("date")}
          onChange={event => setData("date", event.target.value)}
        />
        Give me a adjective:
        <br />
        <br />
        <input
          type="text"
          value={getData("adjective")}
          onChange={event => setData("adjective", event.target.value)}
        />
        Give me a noun:
        <br />
        <br />
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
        <br />
        <br />
        Give me a verb ending in 'ing':
        <br />
        <br />
        <input
          type="text"
          value={getData("verb")}
          onChange={event => setData("verb", event.target.value)}
        />
        Give me a noun:
        <br />
        <br />
        <input
          type="text"
          value={getData("noun2")}
          onChange={event => setData("noun2", event.target.value)}
        />
        Give me a verb ending in 'ing':
        <br />
        <br />
        <input
          type="text"
          value={getData("verb2")}
          onChange={event => setData("verb2", event.target.value)}
        />
        Give me a noun:
        <br />
        <br />
        <input
          type="text"
          value={getData("noun3")}
          onChange={event => setData("noun3", event.target.value)}
        />
        body part:
        <br />
        <br />
        <input
          type="text"
          value={getData("bodyPart")}
          onChange={event => setData("bodyPart", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "story" }]
  },
  story: {
    content: (getData, setName) => (
      <p>
        On {getData("date")}, a {getData("adjective")} Florida {getData("noun")}{" "}
        was found {getData("verb")} a {getData("noun2")}. Reports say that the{" "}
        {getData("noun")} was only able to be tranquilized by {getData("verb2")}{" "}
        a {getData("noun3")} on its {getData("bodyPart")}.
      </p>
    ),
    buttons: [{ label: "Try Again", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
