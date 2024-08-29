import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon , MagnifyingGlassIcon} from "react-native-heroicons/outline";


import {styles} from "../theme/index";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
    const [trending, setTrending] = useState([
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
        { id: 3, title: "Movie 3" },
      ]);
    const [upcoming, setUpcoming] = useState([
        { id: 4,  },
        { id: 5,  },
        { id: 6,  },
      ]);
    const [topRated, setTopRated] = useState([
        { id: 7, title: "topMovie 1" },
        { id: 8, title: "topMovie 2" },
        { id: 9, title: "topMovie 3" },
      ]);

      


    console.log("HomeScreen trending data:", trending); // Data'yı burada da kontrol et

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "-mb-2" : "-mb-3"}>
        {/*searchbar and logo*/}
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies 
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
          </TouchableOpacity> 
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
      >
        {/* Trending movies carousel*/ }
        <TrendingMovies data={trending}/>

        {/* upcoming movies row  */}
        <MovieList title="Upcoming" data={upcoming}/>

        {/* top rated movies row  */}
        <MovieList title="Top Rated" data={topRated}/>
      </ScrollView>
    </View>
  );
}
