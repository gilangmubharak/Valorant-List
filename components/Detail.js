import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { judul, telpon, gambar } = route.params;

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.image} />
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.telp}>{telpon}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} color="#ff4655" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000', // Latar belakang hitam
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff', // Warna teks putih
    marginBottom: 10,
  },
  telp: {
    fontSize: 18,
    color: '#ff4655', // Warna merah Valorant
    marginBottom: 20,
  },
});

export default DetailScreen;
