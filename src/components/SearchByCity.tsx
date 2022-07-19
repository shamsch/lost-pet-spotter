import { StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { Colors } from '../utils/constant';

interface SearchByCityProps {
  search: string|undefined;
  setSearch: (query:string) => void
}

const SearchByCity = ({search, setSearch}:SearchByCityProps) => {
 
  return (
    <Searchbar
      placeholder="Search by city"
      onChangeText={(query) => setSearch(query)}
      value={search?search:''}
      style={styles.searchbar}
    />
  );
}

export default SearchByCity

const styles = StyleSheet.create({
  searchbar: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: Colors.grayDark
  },
})