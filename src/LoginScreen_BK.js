import React from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AsyncStorage,
    Alert,
    Text,
    Image,
    View,
    ScrollView
} from 'react-native'


const LoginScreen = () => {

onLonginPressed = (props)=>{
    porps.navigation.navigate('Home')
}
onRegisterPressed = ()=>{
    Alert.alert("Register")
    this.props.navigation.navigate('Register')
}
    return (
        
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image
                source={require('./imgs/login_icon1.png')}
                resizeMode={'center'}
                style={styles.banner}
                />

                <TextInput
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                autoCorrect={false}
                style={styles.input}
                placeholder={"Username"}
                />

                <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                style={styles.input}
                secureTextEntry={true}
                placeholder={"Password"}/>
                
                <TouchableHighlight
                onPress = {onLonginPressed}
                    style={styles.loginButton}
                >
                    <Text style={styles.loginButtonText}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                underlayColor={"#FF0"}
                onPress={this.onRegisterPressed.bind(this)}
                    style={styles.registerButton}
                >
                    <Text style={styles.registerButtonText}>
                        Don't have an account. Register?
                    </Text>
                </TouchableHighlight>

            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 30,
        paddingTop: 80
    },
    banner: {
        height: 90,
        width: '100%'
    },
    input: {
        height: 50,
        width: '100%',
        marginTop: 10,
        padding: 4,
        borderRadius: 5,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec33'
    },
    loginButton: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    registerButton: {
        height: 50,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    registerButtonText: {
        fontSize: 18,
        color: '#0007',
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
        marginBottom: 40
    },
    error: {
        color: 'red',
        paddingTop: 10
    },
    success: {
        color: 'green',
        paddingTop: 10
    },
    loader: {
        marginTop: 20
    }
});

export default LoginScreen
