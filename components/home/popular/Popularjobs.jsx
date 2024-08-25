import { useState } from 'react'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native'

import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch(
    'estimated-salary', {
      job_title: 'js developer',
      location: 'new-york, ny, usa',
      radius: '100' 
    })

    console.log("API Data in Popularjobs:", data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?(
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ): error ?(
          <Text>Something wrong!!</Text>
        ): (
          <FlatList 
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard 
            item = {item}
            />
          )}
          keyExtractor={(item, index) => `${item.publisher_name}-${index}`}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
            />
        )}
      </View>
    </View>
  )
}

export default Popularjobs