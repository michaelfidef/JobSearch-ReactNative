import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils";

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job , handlerNavigation}) => {
console.log("job in NearbyJobCard:", job);

const imageUrl = checkImageURL(job.employer_logo) ? job.employer_logo : defaultLogo;
const defaultLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg1jwv3mc0IzreWl9Rhg99E1WoSfFn51ynzLu&s=0.jpg'

  return (
    <TouchableOpacity style={[styles.container]} onPress={handlerNavigation}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
        source={{
          uri:imageUrl }}
        resizeMethod="contain"
        style={styles.logoImage}>
        </Image>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title} 
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard