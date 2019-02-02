import React, { Component } from 'react';
import './styles/App.css';
import FlowerAdapter from './adapters/FlowerAdapter'
import { connect } from 'react-redux'
import { addFlowersToList } from './actions/FlowerActions'


class App extends Component {

  componentDidMount(){
    FlowerAdapter.index()
      .then(this.props.addFlowersToList)
  }

  render() {
    return (
      <div className="App">
        <h1>vase visualizer baby</h1>
      </div>
    )
  }
}



export default connect(null, { addFlowersToList })(App);
