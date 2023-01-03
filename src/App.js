import "./App.css";

import React from "react";

class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
      homeworld: null,
    };
  }

  getnewCharacter() {
    const randomNumber = Math.round(Math.random() * 82);
    let url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,
          species: data.species,
          homeworld: data.homeworld,
          loadedCharacter: true,
        });
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.loadedCharacter && (
          <div className="child">
            <img src={this.state.image} alt="img" className="my_image" />
            <h2>Name: {this.state.name}</h2>
            <h2>Height: {this.state.height}cm</h2>
            <h2>Species: {this.state.species}</h2>
            <h5>
              <a href={this.state.homeworld}>Homeworld</a>
            </h5>
          </div>
        )}
        <button
          type="button"
          onClick={() => this.getnewCharacter()}
          className="btn"
        >
          Random Character
        </button>
      </div>
    );
  }
}

export default Starwars;
