import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/PhotoBG.jpg')}
                style={styles.img}
            >
                <View style={styles.form}>
                    <View style={{ marginTop: 92 }}>
                        <Text style={styles.text}>Регистрация</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Логин"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Адрес электронной почты"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Пароль"
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    form: {
        height: 545,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 30,
        fontWeight: 500,
    },
    inputBox: {
        width: '100%',
        marginTop: 33,
        gap: 16,
    },
    input: {
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        width: '100%',
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 16,
    },
});
