import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state={
    Fullname: "Walter H. White",
    bio: "Nothing much to talk about, just watch Breaking Bad lol",
    imgSrc: "/Walter_White_S5B.png",
    profession: "Chemistry Nobel Prize winner, highschool chemistry teacher and Meth Kingpin",
    shows: false,
    seconds: 0,
 
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState(previous => ({
         seconds: previous.seconds+1
      }))

    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  handleClick = () => { this.setState({shows:!this.state.shows}) }
  render() {
    return (
      <div>
        <p>the last component was rendered {this.state.seconds} seconds ago</p>
        <button onClick={this.handleClick}>Show Profile</button>
        {this.state.shows ? 
          <div>           
            <img src={this.state.imgSrc} alt="" />
            <h1>{this.state.Fullname}</h1>
            <h4>{this.state.bio}</h4>
            <p>{this.state.profession}</p>

          </div>
          : ''
        }

      </div>
    )
  }
}


export default App;
