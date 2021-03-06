import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button
} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props)
    if(props.route.params.origin==="register"){
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Main',
              params: { origin: 'main', key: props.route.params.key }
            }
          ],
        })
      )
    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <Text>Hola {this.props.userName}</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userAge: state.userAge
  }
}

export default connect(mapStateToProps)(Main)