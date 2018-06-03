class VideoScreenComponent extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Text>Hello</Text>
        );
    }
}