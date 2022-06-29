import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInputFocusEventData,
  SafeAreaView,
  Alert,
  TouchableOpacity
} from 'react-native';

import foto from './assets/avatar.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';



const App = () => {

  function handleRedeSocial(redesSociais) {
    switch (redesSociais) {
      case 'github':
        Alert.alert('https://github.com/helenagodoy0')
        break

      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/helena-sgodoy')
        break

    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Helena Godoy</Text>
          <Text style={style.funcao}>Data Sciente Student</Text>
          <View style={style.redesSociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name='github' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name='linkedin' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Acadêmica">
          <Text style={style.cardContentText}>UNESP - Engenharia Mecânica</Text>
          <Text style={style.cardContentText}>UNIVESP - Ciência de Dados</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.cardContentText}>Experiência</Text>
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,

  },

  containerCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,

  },

  funcao: {
    color: '#939393',
    marginBottom: 10,

  },

  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },

  cardContentText: {
    color: '#939393',
    marginBottom: 10,
  },

})

export default App;