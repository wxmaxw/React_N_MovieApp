import {
    View,
    Text,
    Dimensions,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

import { styles, theme } from "../theme";
import MovieList from "../components/movieList";
import Loading from "../components/loading";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? " " : "my-3";

export default function PersonScreen({ navigation }) {
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const [personMovies, setPersonMovies] = useState([
        "pm1",
        "pm2",
        "pm3",
        "pm4",
        "pm5",
        "pm6",
    ]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
    },[item])

    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            {/* back buttn */}
            <SafeAreaView
                className={
                    "z-20 w-full flex-row justify-between items-center px-4 " +
                    verticalMargin
                }
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.background}
                    className="rounded-xl p-1"
                >
                    <ChevronLeftIcon
                        size="28"
                        strokeWidth={2.5}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                    <HeartIcon size="35" color={isFavorite ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}

            {loading ? (
                <Loading />
            ) : (
                <View>
                    <View
                        className="flex-row justify-center"
                        style={{
                            shadowColor: "gray",
                            shadowRadius: 50,
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 1,
                        }}
                    >
                        <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                            <Image
                                source={require("../assets/images/castImage1.png")}
                                style={{
                                    height: height * 0.43,
                                    width: width * 0.74,
                                }}
                            />
                        </View>
                    </View>
                    <View className="mt-6">
                        <Text className="text-3xl text-white font-bold text-center">
                            Keanu Reeves
                        </Text>
                        <Text className="text-base text-neutral-500 font-bold text-center">
                            London, United Kingdom
                        </Text>
                    </View>
                    <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">
                                Gender
                            </Text>
                            <Text className="text-neutral-500 font-sm">
                                Male
                            </Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">
                                Birthday
                            </Text>
                            <Text className="text-neutral-500 font-sm">
                                1964-09-27
                            </Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">
                                Knowing for
                            </Text>
                            <Text className="text-neutral-500 font-sm">
                                Acting
                            </Text>
                        </View>
                        <View className="  px-2 items-center">
                            <Text className="text-white font-semibold">
                                Popularity
                            </Text>
                            <Text className="text-neutral-500 font-sm">
                                64.23
                            </Text>
                        </View>
                    </View>
                    <View className="my-6  mx-4 space-y-2">
                        <Text className="text-white text-lg">Biography</Text>
                        <Text className="text-neutral-400 tracking-wide">
                            kdlfjssajdfgj aksdlfjkfdajkg kdfsljlkgfdf dklsdfkfdj
                            lkdjsflkjdfg lksdfjnlkdfj lkdjfslksjdf kldjsfkljfd
                            kncdfkfsdjf ldfsjlfs
                        </Text>
                        <View className="pb-2"></View>

                        {/* movies */}
                        
                    </View>
                </View>
            )}
        </ScrollView>
    );
}
/* <MovieList
                            title="His Movie"
                            hideSeeAll={true}
                            data={personMovies}
                        />*/