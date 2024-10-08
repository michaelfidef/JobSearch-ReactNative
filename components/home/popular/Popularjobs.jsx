import { useState } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native';

import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch(
    'search', {
      query: 'js developer in Jakarta,Indonesia',
    page: '1',
    num_pages: '1',
    date_posted: 'week'
    })

    const{selectedJob} = useState(null);

    const handlerCardPress = (item) => {
      router.push(item.job_apply_link)
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
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
            selectedJob={selectedJob}
            handlerCardPress={handlerCardPress}
            />
          )}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
            />
        )}
      </View>
    </View>
  )
}

export default Popularjobs