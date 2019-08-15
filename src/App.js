import React, { Component } from 'react'
import Navbar from "./components/navbar"
import Header from "./components/header"
import Card from "./components/card"
import Wrapper from "./components/wrapper"
import dinos from "./dinos.json"
class App extends Component {
  state = {
    message: "Click any image to start",
    dinos,
    score: 0,
    topscore: 0,
  }

  handleClick = (id) => {
    const dinos = this.state.dinos
    const clickedDino = dinos.filter(dino => dino.id === id)

    if(clickedDino[0].clicked) {
      for (let i = 0; i > dinos.length; i++) {
        dinos[i].clicked = false;
      }
      this.setState({
        message: "You already clicked that one, now you have to start over",
        score: 0,
        dinos: dinos
      })
    }
    else if (this.state.topscore < 6) {
      clickedDino[0].clicked = true

      dinos.sort(function(a,b){return 0.5 - Math.random()})

      this.setState({
        dinos: dinos,
        score: this.state.score + 1,
        message: "Great, that one was not clicked on, keep going!"
      }, () => {
        if(this.state.score > this.state.topscore) {
          this.setState({
            topscore: this.state.score
          })
        }
      })
    }
    else {
      clickedDino[0].clicked = true

      for(let i = 0; i < dinos.length; i++) {
        dinos[i].clicked = false;
      }
      dinos.sort(function(a,b){return 0.5 - Math.random()})

      this.setState({
        dinos: dinos,
        score: 0,
        topscore: 6,
        message: "CONGRADULATIONS!, now try doing that again"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Navbar message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
          <Header />
          {this.state.dinos.map(dino => (
            <Card
              handleClick={this.handleClick}
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
