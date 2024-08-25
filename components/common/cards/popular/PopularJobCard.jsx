import { useState } from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handlerCardPress}) => {
  console.log("Item in PopularJobCard:", item);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.job_title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.salary}>${item.median_salary} {item.salary_currency}/{item.salary_period}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard