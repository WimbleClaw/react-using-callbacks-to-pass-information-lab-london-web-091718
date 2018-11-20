import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    console.log(super())
    this.state = {
      color: ""
    }
  }

  setColor = (hex) => {
    console.log(`before setState: ${this.state.color}`)
    this.setState({
      color: hex
    })
    console.log(`after setState: ${this.state.color}`)
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}  currentColour={this.currentColour}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  currentColour = () => {
    console.log("Current colour called")
    return this.state.color
  }

  render() {
    console.log(Component)
    return (
      <div id="app">
        <ColorSelector setColour={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
