import React from 'react'
import { View, Text, Image} from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      key={item.job_id}
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://via.placeholder.com/150'  }}
          resizeMode='cover'
          style={styles.logoImage}
          />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>
          {item.job_title}
        </Text>
      </View>
      <Text style={styles.location}>{item.job_country}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard