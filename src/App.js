import React, { Component } from 'react';
import './styles/App.css';
import FlowerAdapter from './adapters/FlowerAdapter'
import { connect } from 'react-redux'
import { addFlowersToList } from './actions/FlowerActions'
import FlowerList from './components/FlowerList'
import Header from './components/Header'
import SelectedFlower from './components/SelectedFlower'
import Vase from './components/Vase'

class App extends Component {

  componentDidMount(){
    FlowerAdapter.index()
      .then(this.props.addFlowersToList)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FlowerList />
        <SelectedFlower />
        <Vase />
      </div>
    )
  }
}



export default connect(null, { addFlowersToList })(App);
