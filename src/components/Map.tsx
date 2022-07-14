import { useState } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker} from 'react-native-maps'
import { MapData } from '../typescript/types'

interface MapProps {

}

const Map = () => {
  const [selectedLocation, setSelectedLocation]= useState<MapData|null>()

  const region = {
    latitude: 61.4978, //defaults to Tampere, Finland
    longitude: 23.7610,
    latitudeDelta: 0.0922, // zoom level, this works
    longitudeDelta: 0.0421,
  }

  const handleMapPress = (e: any) => {
    setSelectedLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    })
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker
            title='Selected Location'
            coordinate={{
              latitude: Number(selectedLocation.lat),
              longitude: Number(selectedLocation.lng),
            }}
          />
        )}
      </MapView>
    </>
  )
}

export default Map