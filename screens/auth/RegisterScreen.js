import {
   ImageBackground,
   Keyboard,
   KeyboardAvoidingView,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

export const RegisterScreen = ({ navigation }) => {
   const [isShowPassword, setIsShowPassword] = useState(true);
   const [inputsBordersColor, setInputpsBordersColor] = useState({
      login: false,
      email: false,
      password: false,
   });
   const [isKeyboardShow, setIsKeyboardShow] = useState(false);
   const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

   useEffect(() => {
      const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () =>
         setIsKeyboardShow(true)
      );
      const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () =>
         setIsKeyboardShow(false)
      );

      return () => {
         keyboardDidShow.remove();
         keyboardDidHide.remove();
      };
   }, []);

   const onFocus = (input) => {
      switch (input) {
         case 'login':
            setInputpsBordersColor({
               login: true,
               email: false,
               password: false,
            });
            break;
         case 'email':
            setInputpsBordersColor({
               login: false,
               email: true,
               password: false,
            });
            break;
         case 'password':
            setInputpsBordersColor({
               login: false,
               email: false,
               password: true,
            });
            break;
         default:
            return null;
      }
      setIsKeyboardShow(true);
   };

   const onPressContainer = () => {
      onBlur();
      Keyboard.dismiss();
   };

   return (
      <View style={styles.container}>
         <TouchableWithoutFeedback onPress={onPressContainer}>
            <ImageBackground
               source={require('../../assets/PhotoBG.jpg')}
               style={styles.img}
            >
               <KeyboardAvoidingView
               // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
               // style={{ flex: 1 }}
               >
                  <View style={styles.form}>
                     <View style={{ marginTop: 92 }}>
                        <Text style={styles.text}>Регистрация</Text>
                     </View>
                     <View style={styles.inputBox}>
                        <TextInput
                           style={{
                              ...styles.input,
                              borderColor: inputsBordersColor.login
                                 ? '#FF6C00'
                                 : '#E8E8E8',
                           }}
                           placeholder="Логин"
                           placeholderTextColor="#BDBDBD"
                           onFocus={() => onFocus('login')}
                           onChangeText={(name) =>
                              setInputs((prev) => ({ ...prev, name }))
                           }
                           value={inputs.name}
                        />
                        <TextInput
                           style={{
                              ...styles.input,
                              borderColor: inputsBordersColor.email
                                 ? '#FF6C00'
                                 : '#E8E8E8',
                           }}
                           placeholder="Адрес электронной почты"
                           placeholderTextColor="#BDBDBD"
                           keyboardType="email-address"
                           onFocus={() => onFocus('email')}
                           onChangeText={(email) =>
                              setInputs((prev) => ({
                                 ...prev,
                                 email,
                              }))
                           }
                           value={inputs.email}
                        />
                        <View style={{ position: 'relative' }}>
                           <TextInput
                              style={{
                                 ...styles.input,
                                 borderColor: inputsBordersColor.password
                                    ? '#FF6C00'
                                    : '#E8E8E8',
                              }}
                              placeholder="Пароль"
                              placeholderTextColor="#BDBDBD"
                              secureTextEntry={isShowPassword}
                              onFocus={() => onFocus('password')}
                              onChangeText={(password) =>
                                 setInputs((prev) => ({
                                    ...prev,
                                    password,
                                 }))
                              }
                              value={inputs.password}
                           />
                           <TouchableOpacity
                              style={styles.show}
                              onPress={() => setIsShowPassword((prev) => !prev)}
                           >
                              <Text
                                 style={{
                                    ...styles.text,
                                    fontSize: 16,
                                    color: '#1B4371',
                                 }}
                              >
                                 Показать
                              </Text>
                           </TouchableOpacity>
                        </View>
                     </View>

                     <TouchableOpacity
                        style={styles.btn}
                        onPress={() => console.log(inputs)}
                     >
                        <Text
                           style={{
                              ...styles.text,
                              fontSize: 16,
                              color: 'white',
                           }}
                        >
                           Зарегистрироваться
                        </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={{
                           ...styles.login,
                           marginBottom: isKeyboardShow ? -120 : 78,
                        }}
                     >
                        <Text
                           style={{
                              ...styles.text,
                              fontSize: 16,
                              color: '#1B4371',
                           }}
                           onPress={() => navigation.navigate('Login')}
                        >
                           Уже есть аккаунт? Войти
                        </Text>
                     </TouchableOpacity>

                     <View style={styles.box}>
                        <EvilIcons
                           name="plus"
                           size={30}
                           style={styles.icon}
                        />
                     </View>
                  </View>
               </KeyboardAvoidingView>
            </ImageBackground>
         </TouchableWithoutFeedback>
      </View>
   );
};

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
      backgroundColor: 'white',
      alignItems: 'center',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: 16,
      position: 'relative',
   },
   text: {
      fontFamily: 'Manrope',
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
      fontSize: 16,
      fontFamily: 'Manrope',
   },
   show: {
      position: 'absolute',
      top: 14,
      right: 16,
   },
   btn: {
      backgroundColor: '#FF6C00',
      borderRadius: 100,
      paddingVertical: 16,
      width: '100%',
      alignItems: 'center',
      marginTop: 43,
      fontFamily: 'Manrope',
   },
   login: {
      paddingVertical: 16,
      fontFamily: 'Manrope',
   },
   box: {
      position: 'absolute',
      top: -60,
      borderRadius: 16,
      width: 120,
      height: 120,
      backgroundColor: '#F6F6F6',
   },
   icon: {
      position: 'absolute',
      bottom: 14,
      right: -15,
      color: '#FF6C00',
   },
});
