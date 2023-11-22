import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TextInput, Image, Alert } from "react-native";
import { Actions } from "react-native-router-flux";



export default class LoginView extends Component {
    constructor(props) {
        super(props);
        // Agregamos el estado para guardar los valores de los campos de texto
        this.state = {
            email: "",
            password: ""
        };
    }

    // Función de validación de contraseña
    validatePassword = (password) => {
        // Al menos 8 caracteres
        if (password.length < 8) {
            return false;
        }
        // Mayúsculas y minúsculas
        if (!(/[A-Z]/.test(password) && /[a-z]/.test(password))) {
            return false;
        }
        // Al menos 1 carácter especial
        if (!/[@#$%^&+=]/.test(password)) {
            return false;
        }
        return true;
    }

    // Creamos una función para validar los campos de texto y mostrar una alerta con el resultado
    validate = () => {
        // Obtenemos los valores del estado
        const { email, password } = this.state;
        // Verificamos si los campos están vacíos
        if (email === "" || password === "") {
            Alert.alert("Error", "Debes llenar todos los campos");
        } else {
            // Verificamos si el email tiene un formato válido
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                Alert.alert("Error", "El email no es válido");
            } else {
                // Validamos la contraseña
                if (!this.validatePassword(password)) {
                    Alert.alert("Error", "La contraseña no cumple con los requisitos");
                } else {
                    // Si todo está bien, mostramos un mensaje de éxito
                    Alert.alert("Éxito", "Bienvenido");
                    Actions.home();
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Agregamos una imagen de logo */}
                <Image source={require("./Logo.png")} style={styles.logo} />
                {/* Agregamos un campo de texto para el email con una etiqueta */}
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu email"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({ email: text })}
                />
                {/* Agregamos un campo de texto para la contraseña con una etiqueta */}
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                {/* Agregamos un botón para validar los campos de texto */}
                <Button
                    title="Ingresar"
                    onPress={this.validate}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
});
