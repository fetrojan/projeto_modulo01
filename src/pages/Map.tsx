import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Map({navigation, route}) {
  const [movements, setMovements] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const movementId = route.params?.movementId
  
  useEffect(() => {
      console.log('id retornado', movementId)
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/movements`)
      .then((response) => {
        setMovements(response.data);
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.log('Não foi possível carregar as movimentações', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isDataLoaded ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: movements[movementId - 1]?.origem.latitude,
            longitude: movements[movementId - 1]?.origem.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
          <Marker
                coordinate={{
                    latitude: movements[movementId - 1].origem.latitude,
                    longitude: movements[movementId - 1].origem.longitude,
                }}
                title={movements[movementId - 1].origem.nome}
                description="Origem"
            />
            <Marker
                coordinate={{
                    latitude: movements[movementId - 1].destino.latitude,
                    longitude: movements[movementId - 1].destino.longitude,
                }}
                title={movements[movementId - 1].destino.nome}
                description="Destino"
                pinColor="blue"
            />
             <Polyline
            coordinates={[
              {
                latitude: movements[movementId - 1].origem.latitude,
                longitude: movements[movementId - 1].origem.longitude,
              },
              {
                latitude: movements[movementId - 1].destino.latitude,
                longitude: movements[movementId - 1].destino.longitude,
              },
            ]}
            strokeColor="#0000FF" 
            strokeWidth={2} 
          />
        </MapView>
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
