import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList.jsx'; // 10.3

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => { // 10.3
    return (
        <View style={styles.container}>
            <RepositoryList />
        </View>
    );
};

export default Main;