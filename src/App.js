import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((people) => this.setState({ characters: people.results }));
  }

  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1 className="main-title">Star Wars Rolodex</h1>
        <SearchBox
          placeHolder="search characters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
