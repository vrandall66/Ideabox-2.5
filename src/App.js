import React, { Component } from "react";
import Form from "./Form";
import Ideas from "./Ideas";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {
          id: 1,
          title: "Finish React pre-work",
          description:
            'Finish reading Tyler McGinnis" React tutorial, Asynchronous JS videos, and React Router reading'
        },
        {
          id: 2,
          title: "Meal prep for a week or two",
          description:
            "Thaw some chicken to slow cook. Make something with zucchini noodles and shrimp"
        },
        { id: 3, title: "Laundry", description: 'towels and regan"s stuff' }
      ]
    };
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
      </main>
    );
  }
}

export default App;
