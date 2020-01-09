import * as React from 'react';
import {Button, View, Text} from 'react-native';

class Dashboard extends React.Component {

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Dashboard Screen</Text>
                <Text onPress={() => alert('call')}> {'Username ' +this.props.navigation.getParam('username')}</Text>

            </View>
        );
    }

}
export default Dashboard;
