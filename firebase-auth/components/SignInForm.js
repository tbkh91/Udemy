import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-udemy-otpw.cloudfunctions.net';

class SignInForm extends Component {
    state = { phone: '', code: '', currentUser: null };

    handleSubmit = async () => {
        try {
            let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
            this.setState({ currentUser: response });
            console.log("response is");
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={(phone) => { this.setState({ phone }) }}
                    />
                    <FormLabel>Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={(code) => { this.setState({ code }) }}
                    />
                </View>
                <Button
                    title="Sign In"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}

export default SignInForm;