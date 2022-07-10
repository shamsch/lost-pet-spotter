import { View, Text} from 'react-native'
import { Post } from '../typescript/types'

interface MapViewProps {
    lat: Post['lat']
    lng: Post['lng']
}

const MapView = ({lat, lng}: MapViewProps) => {
  return (
    <View>
        <Text>MapView</Text>
        <Text>{lat} && {lng}</Text>
    </View>
  )
}

export default MapView