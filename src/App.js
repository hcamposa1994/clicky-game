import React, { Component } from 'react'
import Navbar from "./components/navbar"
import Header from "./components/header"
import Card from "./components/card"
import Wrapper from "./components/wrapper"
import dinos from "./dinos.json"
class App extends Component {
  state = {
    message: "Click any image to start",
    dinos: dinos,
    score: 0,
    topscore: 0,
    alreadyClicked: []
  }


  render() {
    return (
      <div className="App">
        <Wrapper>
          <Navbar message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
          <Header />
          {this.state.dinos.map(dino => (
            <Card
              id={dino.id}
              key={dino.id}
              name={dino.name}
              image={dino.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App
