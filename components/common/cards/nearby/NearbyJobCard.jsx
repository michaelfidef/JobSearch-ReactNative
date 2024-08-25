import { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job , handlerNavigation}) => {
  console.log("job in NearbyJobCard:", job);

  return (
    <TouchableOpacity style={[styles.container]} onPress={handlerNavigation}>
      <View style={styles.textContainer}>
        
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title} 
        </Text>
        <Text style={styles.jobType}>{job.location}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard