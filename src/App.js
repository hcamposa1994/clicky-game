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
    const dinosCopy = this.state.dinos
    const clickedDino = dinosCopy.filter(dino => dino.id === id)

    if(clickedDino[0].clicked) {
      console.log(dinosCopy.length)
      for (let i = 0; i < dinosCopy.length; i++) {
        console.log(dinosCopy.length)
        dinosCopy[i].clicked = false;
      }
      this.setState({
        message: "You already clicked that one, now you have to start over",
        score: 0,
        dinos: dinosCopy
      })
    }
    else if (this.state.topscore < 6) {
      clickedDino[0].clicked = true

      dinosCopy.sort(function(a,b){return 0.5 - Math.random()})

      this.setState({
        dinos: dinosCopy,
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

      for(let i = 0; i < dinosCopy.length; i++) {
        dinosCopy[i].clicked = false;
      }
      dinosCopy.sort(function(a,b){return 0.5 - Math.random()})

      this.setState({
        dinos: dinosCopy,
        score: 0,
        topscore: 6,
        message: "CONGRADULATIONS!, now try doing that again"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
        <Header />
        <Wrapper>
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
