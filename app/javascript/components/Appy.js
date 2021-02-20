import React from 'react'

class Appy extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Yo'
    }
  }

  clickHandler() {
    console.log("howdy!")
  }


  clickHandlerTwo() {
    this.setState({
      message: 'Goodbye!'
    })
    console.log(this)
  }

  clickHandlerThree() {
    this.setState({
      message: 'woof!'
    })
    console.log(this)
  }


  render () {
    return (
      <div>
        <div>{this.state.message}</div>
        <div><button onClick={this.clickHandler}>hello m8!</button></div>
        <div><button onClick={this.clickHandlerTwo.bind(this)}>waddup</button></div>
        <div><button onClick={this.clickHandlerThree.bind(this)}>waddup</button></div>
      </div>
    )
  }
}

export default Appy
