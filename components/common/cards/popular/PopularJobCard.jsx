import { useState } from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native';

import styles from './popularjobcard.style';
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({item, selectedJob, handlerCardPress}) => {
  console.log("Item in PopularJobCard:", item);
  
    const imageUrl = checkImageURL(item.employer_logo) ? item.employer_logo : defaultLogo;
    const defaultLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg1jwv3mc0IzreWl9Rhg99E1WoSfFn51ynzLu&s=0.jpg'

  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handlerCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
        source={{
          uri:imageUrl }}
        resizeMethod="contain"
        style={styles.logoImage}>
        </Image>
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title} 
        </Text>
        <Text style={styles.location}>{item.job_city}</Text>
      </View>

    </TouchableOpacity>
    
  )
}

export default PopularJobCard