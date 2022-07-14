import { useState } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker, MapEvent } from 'react-native-maps'
import { string } from 'yup'
import { MapData } from '../typescript/types'

interface MapProps {
  latitude: number | null
  longitude: number | null
  setLatitude: React.Dispatch<React.SetStateAction<string | null>>
  setLongitude: React.Dispatch<React.SetStateAction<string | null>>
}

const Map = ({ latitude, longitude, setLatitude, setLongitude }: MapProps) => {
  const region = {
    latitude: latitude ? latitude : 61.4978, //defaults to Tampere, Finland
    longitude: longitude ? longitude : 23.7610,
    latitudeDelta: 0.0922, // zoom level, this works
    longitudeDelta: 0.0421,
  }

  const handleMapPress = (e: MapEvent) => {
    setLatitude(String(e.nativeEvent.coordinate.latitude));
    setLongitude(String(e.nativeEvent.coordinate.longitude));
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        onPress={handleMapPress}
      >
        {latitude && longitude ? (
          <Marker
            title='Selected Location'
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          />
        ) :
          null}

      </MapView>
    </>
  )
}

export default Map