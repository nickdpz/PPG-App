import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
  } from 'react-native';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Text>Nombre:</Text>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Register;