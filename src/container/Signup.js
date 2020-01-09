import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Third from './Dashboard';

class Signup extends React.Component {
    static navigationOptions = {
        title: 'Signup',
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Sign up Screen</Text>
                <Button
                    title="Alert Only for call"
                    onPress={() => alert(this.props.navigation.getParam('id'))}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Third')}
                />
            </View>
        );
    }

}

export default Signup;
