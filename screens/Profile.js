import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Importamos Text de react-native
import FormItem from '../components/controls/FormItem';
import { Content, Header, Wrapper } from '../components/layout';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default function Profile() {
    return (
        <Wrapper backgroundColor={Colors.black}>
            <Header title="Perfil" showBack={true} />
            <Content>
                <FormItem label="Correo electronico" />
                <FormItem label="Nombre completo" />
                <FormItem label="Telefono" />

                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Username:</Text>
                    <Text style={styles.value}>Andrea López</Text>

                    <Text style={styles.label}>Information About:</Text>
                    <Text style={styles.value}>Se unio el 25/01/2025</Text>

                    <Text style={styles.label}>Name and LastName:</Text>
                    <Text style={styles.value}>Andrea Lopez Guerrero</Text>

                    <Text style={styles.label}>Correo/Numero de telefono:</Text>
                    <Text style={styles.value}>andlopsara25@mail.com</Text>
                </View>
            </Content>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        padding: 20,
    },
    label: {
        color: Colors.black,
        fontSize: Fonts.size.large,
        fontFamily: Fonts.family.bold,
        marginBottom: 5,
        marginTop: 15,
    },
    value: {
        color: Colors.black,
        fontSize: Fonts.size.normal,
        fontFamily: Fonts.family.regular,
        marginBottom: 10,
    },
});
