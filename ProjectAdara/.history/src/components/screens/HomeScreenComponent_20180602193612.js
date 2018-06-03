import { AppRegistry, StyleSheet, Text, ScrollView, View, Image, SafeAreaView } from 'react-native';

class HomeScreenComponent extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button 
                title="Go to Video"
                onPress{() =>
                    navigate('Video', { cameraName: 'Indoor Camera' })
                }
            />
        );
    }
}