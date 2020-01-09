import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TextInput
                    style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 15, padding: 10}}
                    onChangeText={(text) => this.setState({username: text})}
                />

                <TextInput
                    style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 15, padding: 10}}
                    placeholder="Raj"
                    placeholderTextColor="#DDCCDD"
                    onChangeText={(text) => this.setState({password: text})}
                />

                <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('Dashboard', {
                        'username': this.state.username,
                        'password': this.state.password,
                    })}
                />

                <Text onPress={() => this.redirectToSignup()}>Create account</Text>
            </View>
        );
    }

    redirectToSignup() {
        this.props.navigation.navigate('Signup');
    }
}

export default Home;
