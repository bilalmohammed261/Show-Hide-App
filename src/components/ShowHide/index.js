// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  changeFirstState = () => {
    this.setState(prevState =>
      prevState.firstname ? {firstname: false} : {firstname: true},
    )
  }

  changeLastState = () => {
    this.setState(prevState =>
      prevState.lastname ? {lastname: false} : {lastname: true},
    )
  }

  render() {
    const {firstname, lastname} = this.state
    console.log(lastname)

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <button
            type="button"
            className="button"
            onClick={this.changeFirstState}
          >
            Show/Hide Firstname
          </button>
          <button
            type="button"
            className="button"
            onClick={this.changeLastState}
          >
            Show/Hide Lastname
          </button>
        </div>
        <div className="buttons-container">
          {firstname ? <p className="container">Joe</p> : <p> </p>}
          {lastname ? <p className="container">Jonas</p> : <p> </p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
