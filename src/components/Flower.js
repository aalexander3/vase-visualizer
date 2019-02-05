import React, { Component } from 'react'

class Flower extends Component {

  state = {
    ctrl: false,
    shift: false,
    oldX: 0,
    oldY: 0,
    height: 45,
    width: 45,
    rotation: 0
  }

  componentDidMount(){
    document.addEventListener('keydown', this.keyDown)
    document.addEventListener('keyup', this.keyUp)
    document.addEventListener('mousemove', this.captureMouseMove)
  }

  captureMouseMove = e => {
    this.setState({
      oldX: e.pageX,
      oldY: e.pageY
    })
  }

  keyDown = (e) => {
    this.setState({
      shift: e.key === "Shift",
      ctrl: e.key === "Meta"
    })
  }

  keyUp = () => {
    this.setState({
      shift: false,
      ctrl: false
    })
  }

  trackDirection = (e) => {
    if ((e.pageX - this.state.oldX >= 0) && (e.pageY - this.state.oldY >= 0)) return "right down"
    if ((e.pageX - this.state.oldX >= 0) && (e.pageY - this.state.oldY <= 0)) return "right up"
    if ((e.pageX - this.state.oldX <= 0) && (e.pageY - this.state.oldY <= 0)) return "left up"
    if ((e.pageX - this.state.oldX <= 0) && (e.pageY - this.state.oldY >= 0)) return "left down"
  }

  grow = () => {
    this.setState(prevState => {
      return {
        height: prevState.height + .3,
        width: prevState.width + .3,
      }
    })
  }

  shrink = () => {
    this.setState(prevState => {
      return {
        height: prevState.height - .3,
        width: prevState.width - .3,
      }
    })
  }

  rotateLeft = () => {
    this.setState(prevState => {
      return {
        rotation: prevState.rotation - .3,
      }
    })
  }

  rotateRight = () => {
    this.setState(prevState => {
      return {
        rotation: prevState.rotation + .3,
      }
    })
  }

  dragStart = e => {
    let direction = this.trackDirection(e)
    if (this.state.ctrl) {
      switch (direction) {
        case "right down":
          this.grow()
          break
        case "left up":
          this.shrink()
          break
        default:
      }
    } else if (this.state.shift) {
      switch (direction) {
        case "right up": case "left down":
          this.rotateLeft()
          break
        case "left up": case "right down":
          this.rotateRight()
          break
        default:
      }
    } else {
        e.target.style.opacity = 0
    }
  }

  dragEnd = (e) => {
    if (this.state.ctrl) {

    } else if (this.state.shift) {

    } else {
      e.target.style.opacity = 1;
      e.target.style.top = e.pageY + "px"
      e.target.style.left = (e.pageX - this.state.width) + "px"
    }
    this.setState({
      shift: e.shiftKey,
      ctrl: e.metaKey
    })
  }

  getClass = () => {
    if (this.state.ctrl) {
      return "draggable-flower ctrl"
    } else if (this.state.shift) {
      return "draggable-flower shift"
    } else {
      return `draggable-flower`
    }
  }

  source = require(`./../assets/images/${this.props.name}.png`)

  render(){
    return (
      <img
        draggable
        onDrag={this.dragStart}
        onDragEnd={this.dragEnd}
        className={this.getClass()}
        style={{ height: this.state.height, width: this.state.width, transform: `rotate(${this.state.rotation}deg)` }}
        src={this.source}
        alt='rose' />
    )
  }
}

export default Flower
