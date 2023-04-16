import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

export default function App() {

  const [verlogin, setVerlogin] = useState('');
  const [versenha, setVersenha] = useState('');

  const clicarb = () =>{
    if((verlogin == 'admin' || verlogin=='admin@hotmail.com') && (versenha == '000')){
      window.alert("Logado com sucesso");

    }else if(verlogin == '' && versenha == ''){
      window.alert("Preencha todos os campos");
    

    }else{
      window.alert("Email ou senha incorretos");
    }
  }

  return (
    <View style={styles.container}>


      <View style={styles.cabecalho}>


        <View style={styles.CVicone}>

          <AntDesign name="github" size={34} color="black" />

        </View>




        <View style={styles.CVtexto}>

          <Text style={styles.Ctexto}>VerseVenture</Text>


        </View>

      </View>

      <View style={styles.corpo}>

        
          <Text style={styles.login}>
            Login
          </Text>

        



          <TextInput


            multiline

            maxLength={20}

            style={styles.caixatextol}

            placeholder="Email or Username"

            onChangeText={text => {
            setVerlogin(text);
            }}
            
          />

          <TextInput


            multiline

            maxLength={20}

            style={styles.caixatextoc}

            placeholder="Password"

            onChangeText={text2 => {
              setVersenha(text2);
              }}

          />

          <Button 
          title="Entrar"
          onPress={clicarb}
          color='grey'
          
          />
        







      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },

  cabecalho: {

    flexDirection: 'row',

    paddingTop: 45,

    paddingBottom: 5,

    paddingHorizontal: 10,

    backgroundColor: '#57C5B6',




  },

  Ctexto: {

    marginLeft: 5,

    marginTop: 7,


  },

  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',




  },

  login: {
    fontSize: 35,
    height:70,


  },

  caixatextol: {

    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 5,
  },

  caixatextoc: {

    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 5,
  },
});
