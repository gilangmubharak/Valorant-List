import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Kontak = ({ gambar, judul, telpon, onPress }) => {
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={onPress}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 100,
    padding: 10,
    backgroundColor: '#111', // Warna latar belakang kontak
    marginVertical: 5,
  },
  img: {
    margin: 20,
    width: 50,
    height: 50,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  telp: {
    fontSize: 20,
    color: '#ff4655', // Warna merah Valorant
  },
});

export default Kontak;
