import React, { Component } from "react";

import "./App.css";

import Location from "./components/Location";

import Search from "./components/Search";

import Counters from "./components/Counters";

import Navbar from "./components/Navbar";

const welcome = {
  Introduction: "Tell me more about you and let's stay connected",
  Intro2: "and remain friends.",
};

function getTitle(title) {
  return title;
}

const stories = [
  {
    title: "Git Repesotories",
    url: "https://github.com/Rxklamdji?tab=repositories",
    author: "Github",
    num_comments: "1.",
    points: 4,
    objectID: 0,
  },

  {
    title: "Youtube",
    url: "https://www.youtube.com",
    author: "Youtube",
    num_comments: "2.",
    points: 4,
    objectID: 0,
  },
];

const Story = (props) =>
  props.list.map((item) => (
    <div key={item.objectID}>
      <span>{item.num_comments}</span>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
    </div>
  ));

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <div className="App">
            <h1>Welcome To My World</h1>

            <p>
              {welcome.Introduction} {welcome.Intro2}
            </p>

            <h2>1. {getTitle("Location")}</h2>

            <p>
              <Location name="Cabot, Arkansas, USA" />
            </p>

            <hr />

            <Story list={stories} />

            <Search />

            <hr />

            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
