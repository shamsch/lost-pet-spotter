import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Map from '../components/Map'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typescript/types';
import IconButton from '../components/UI/IconButton';

type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'MapView'>;

const MapScreen = ({route, navigation}: MapScreenProps) => {
  const { latitude, longitude } = route.params

  const [screenLatitude, setScreenLatitude] = useState<string|null>(latitude? latitude : null)
  const [screenLongitude, setScreenLongitude] = useState<string|null>(longitude? longitude : null)

  useLayoutEffect(() => {
    screenLatitude && screenLongitude && 
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={() => navigation.navigate('AddPost', {
            latitude: screenLatitude,
            longitude: screenLongitude,
          })}
        />
      ),
    });
  }, [navigation, screenLatitude, screenLongitude]);

  return (
    <>
      <Map
        latitude={Number(screenLatitude)}
        longitude={Number(screenLongitude)}
        setLatitude={setScreenLatitude}
        setLongitude={setScreenLongitude}
      />
    </>
  )
}

export default MapScreen