import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCiq0rGtNBokV8sEhFylq8ww0xNMQXAOKo",
      authDomain: "udemy-otpw.firebaseapp.com",
      databaseURL: "https://udemy-otpw.firebaseio.com",
      projectId: "udemy-otpw",
      storageBucket: "udemy-otpw.appspot.com",
      messagingSenderId: "102421273502"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
