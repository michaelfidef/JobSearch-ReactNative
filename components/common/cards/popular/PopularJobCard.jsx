import { useState } from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({item, selectedJob, handlerCardPress}) => {
  console.log("Item in PopularJobCard:", item);
  
  const salaryDisplay = item.salaryDisplay === "USD"
    ? `$${item.median_salary} ${item.salary_currency}/${item.salary_period}`
    : `Rp. ${item.median_salary} ${item.salary_currency}/${item.salary_period}`;

  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handlerCardPress(item)}>

      <Text style={styles.companyName}>Publish : {item.publisher_name}</Text>
      <View style={styles.infoContainer}>
        
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title} 
        </Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.salary}>{salaryDisplay}</Text>
      </View>

    </TouchableOpacity>
    
  )
}

export default PopularJobCard