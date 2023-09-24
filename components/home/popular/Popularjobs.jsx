import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'

import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from 'C:\\Users\\bratt\\Desktop\\liran\\tsAjs\\react-native-jobs\\components\\common\\cards\\popular\\PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error, reFetch } = useFetch('search', { query: 'React developer', page: 1, num_pages: 1 })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}

            renderItem={({ item }) =>
              <PopularJobCard
                item={item}
              />
            }
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs