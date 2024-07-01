import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Kontak from './Kontak'; 

const Home = ({ navigation }) => {
  const contacts = [
    {
      id: 1,
      gambar: require('../Valorant_Breach.jpg'),
      judul: 'Breach',
      telpon: '01',
    },
    {
      id: 2,
      gambar: require('../Valorant_Brimm.jpg'),
      judul: 'Brimstone',
      telpon: '02',
    },
    {
      id: 3,
      gambar: require('../Valorant_Cypher.jpg'),
      judul: 'Chyper',
      telpon: '03',
    },
    {
      id: 4,
      gambar: require('../Valorant_Jett.jpg'),
      judul: 'Jett',
      telpon: '04',
    },
    {
      id: 5,
      gambar: require('../Valorant_Killjoy.jpg'),
      judul: 'KillJoy',
      telpon: '05',
    },
    {
      id: 6,
      gambar: require('../Valorant_Neon.jpg'),
      judul: 'Neon',
      telpon: '06',
    },
    {
      id: 7,
      gambar: require('../Valorant_Omen.jpg'),
      judul: 'Omen',
      telpon: '07',
    },
    {
      id: 8,
      gambar: require('../Valorant_Phoenix.jpg'),
      judul: 'Phoenix',
      telpon: '08',
    },
    {
      id: 9,
      gambar: require('../Valorant_Raze.jpg'),
      judul: 'Raze',
      telpon: '09',
    },
    {
      id: 10,
      gambar: require('../Valorant_Sage.jpg'),
      judul: 'Sage',
      telpon: '10',
    },
    {
      id: 11,
      gambar: require('../Valorant_Skye.jpg'),
      judul: 'Skye',
      telpon: '11',
    }, 
    {
      id: 12,
      gambar: require('../Valorant_Sova.jpg'),
      judul: 'Sova',
      telpon: '12',
    },  
  ];

  return (
    <ScrollView style={styles.container}>
      {contacts.map((contact) => (
        <Kontak
          key={contact.id}
          gambar={contact.gambar}
          judul={contact.judul}
          telpon={contact.telpon}
          onPress={() => navigation.navigate('Detail', { ...contact })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingTop: 30, 
  },
});

export default Home;
