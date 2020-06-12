import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';


import Home from './screens/containers/home';
import Header from './sections/components/header';

class AppLayout extends Component {
  async componentDidMount() {
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);