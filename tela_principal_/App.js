import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';





export default function App() {




  const hotel1 = {

    uri: 'https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.7278739.1680453974&semt=sph',

    width: 190,

    height: 80,

  };




  const [pessoas, setPessoas] = useState([

    { nome: 'Maria', comentario: 'Ótimo hotel, localização perfeita!', key: 1 },

    { nome: 'João', comentario: 'Quarto confortável e café da manhã delicioso.', key: 2 },

    { nome: 'Pedro', comentario: 'Atendimento excelente, recomendo!', key: 3, },

    { nome: 'Ana', comentario: 'Amei a piscina e a vista da varanda.', key: 4 },

    { nome: 'Lucas', comentario: 'Bom custo-benefício, voltarei com certeza.', key: 5 },

    { nome: 'Fernanda', comentario: 'Hotel muito bem localizado e com ótimas acomodações.', key: 6 },

    { nome: 'Rafael', comentario: 'BOT', key: 7 },

    { nome: 'Luiza', comentario: 'Funcionários muito atenciosos e prestativos.', key: 8 },

    { nome: 'Juliana', comentario: 'Café da manhã com muitas opções e de ótima qualidade.', key: 9 },

    { nome: 'Rodrigo', comentario: 'confortável', key: 10, },


  ]);


 



  const [condidesh1, setCondidesh1] = useState(false);

  const [condinotah1, setCondinotah1] = useState(false);

  const [condicomh1, setCondicomh1] = useState(false);






  const botaodesh1 = () => {

    setCondidesh1(true);

    setCondinotah1(false);

    setCondicomh1(false);




    if (condidesh1 == true) {

      setCondidesh1(false);

    }





  }




  const botaonotah1 = () => {

    setCondidesh1(false);

    setCondinotah1(true);

    setCondicomh1(false)




    if (condinotah1 == true) {

      setCondinotah1(false)

    }

  }




  const botaocomh1 = () => {

    setCondidesh1(false);

    setCondinotah1(false);

    setCondicomh1(true);




    if (condicomh1 == true) {

      setCondicomh1(false);

    }

  }








  return (

    <View style={styles.container}>




      <View style={styles.body}>




        <View style={styles.cabecalho}>




          <View style={styles.CVicone}>

            <AntDesign name="github" size={34} color="black" />

          </View>




          <View style={styles.CVtexto}>




            <Text style={styles.Ctexto}>VerseVenture</Text>




          </View>




          <View style={styles.CVprocurar}>




            <TextInput

              multiline

              maxLength={20}

              style={styles.Cprocurar}

              placeholder="Procurar"

            />




          </View>




        </View>





        <ScrollView style={styles.corpo} horizontal={true}>




          <View style={styles.h1}>




            <View style={styles.h1ti}>

              <Image source={hotel1} style={styles.h1f} />

              <Text style={styles.h1n}>Kastel Manibu {'\n'}<Text style={{ color: 'green' }}>R$</Text> 1.200 </Text>




            </View>




            <View style={{ flexDirection: 'row', marginTop: 5 }}>

              <FontAwesome name="star" size={15} color="#95989c" />

              <FontAwesome name="star" size={15} color="#95989c" />

              <FontAwesome name="star" size={15} color="#95989c" />

              <FontAwesome name="star" size={15} color="#95989c" />

              <FontAwesome name="star" size={15} color="white" />




              <Text style={{ color: '#fff', marginLeft: 4, paddingBottom: 3, fontSize: 12 }}>4,3</Text>

            </View>




            <View style={{ flexDirection: 'row' }}>




              <TouchableOpacity style={styles.h1botao} onPress={botaodesh1} >

                {

                  condidesh1 ?




                    <Text style={{ color: '#fff', marginLeft: 70, marginRight: 50, textDecorationLine: 'underline' }}>Descrição</Text>




                    :




                    <Text style={{ color: '#fff', marginTop: 0, marginLeft: 70, marginRight: 50, }} onPress={botaodesh1}>Descrição</Text>




                }




              </TouchableOpacity>







              <TouchableOpacity style={styles.h1botao} onPress={botaocomh1} >

                {

                  condicomh1 ?




                    <Text style={{ color: '#fff', marginTop: 0, marginLeft: 50, textDecorationLine: 'underline' }}>Comentarios</Text>




                    :




                    <Text style={{ color: '#fff', marginTop: 0, marginLeft: 50, }}>Comentarios</Text>






                }

              </TouchableOpacity>

            </View>




            {

              condidesh1 ?




                <Text style={{ color: '#fff', marginTop: 10, paddingHorizontal: 20, paddingVertical: 14, borderWidth: 1, borderColor: 'white', maxWidth: 370, }}>




                  Nosso hotel oferece quartos confortáveis com Wi-Fi gratuito {'\n'},banheiro privativo.

                  Desfrute do café da manhã continental {'\n'} e do nosso centro de fitness.





                </Text>




                :




                <Text></Text>




            }




            {

              condinotah1 ?




                <Text style={styles.h1texto}>


        {ratings.map((item, index) => (
          <View key={index}>
          <Text>{item.category}</Text>
          <TextInput
            value={item.note}
            onChangeText={(text) => handleNoteChange(index, text)}
            placeholder="Insira sua nota"
          />
          </View>))}



                </Text>




                :




                <Text></Text>




            }




            {

              condicomh1 ?






                <FlatList

                  data={pessoas}

                  keyExtractor={(item) => item.key.toString()}

                  renderItem={({ item }) => (

                    <View style={{
                      padding: 10,

                      borderBottomWidth: 1,

                      borderBottomColor: '#ccc',
                    }}>

                      <Text style={{

                        fontWeight: 'bold',

                        marginBottom: 5,

                        color: '#fff',

                      }}>

                        {item.nome}

                      </Text>

                      <View style={{

                        maxHeight: 100,

                        marginTop: 5,

                        borderWidth: 1,

                        borderColor: '#ccc',

                        borderRadius: 5,

                        padding: 5,

                      }}>

                        <ScrollView>

                          <Text style={{ color: '#fff', }}>{item.comentario}</Text>

                        </ScrollView>

                      </View>

                    </View>

                  )}




                />







                :




                <Text></Text>




            }















          </View>




        </ScrollView>





      </View>








    </View>

  );

}




const styles = StyleSheet.create({

  container: {




    backgroundColor: '#fff',






  },




  cabecalho: {




    flexDirection: 'row',

    paddingTop: 40,

    paddingBottom: 5,

    paddingHorizontal: 10,

    backgroundColor: '#57C5B6',





  },




  CVtexto: {




  },




  Ctexto: {

    marginLeft: 10,

    marginTop: 10,




  },





  CVprocurar: {

    marginLeft: 35,




  },




  Cprocurar: {




    borderWidth: 1,

    borderColor: '#fff',

    padding: 3,

    paddingHorizontal: 15,

    height: 35,




  },




  corpo: {

    marginTop: 20,

    backgroundColor: '#159895',

    borderRadius: 6,

    margin: 15,

    padding: 10,

    paddingTop: 10,

    paddingBottom: 0,




  },




  h1: {

    maxHeight: 415





  },




  h1botao: {

    marginBottom: 0,

    marginTop: 15,




  },




  h1n: {

    fontWeight: 'bold',

    color: '#fff',

    fontSize: 20,

    marginTop: 20,

    marginHorizontal: 20,




  },




  h1ti: {

    flexDirection: 'row',

  },




  h1f: {

    marginLeft: 0,

    borderRadius: 6,

  },






  item: {

    marginTop: 24,

    marginHorizontal: 50,

    padding: 30,

    backgroundColor: 'pink',

    fontSize: 24,




  },






});