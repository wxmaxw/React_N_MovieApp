import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { image500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");
export default function TrendingMovies({ data }) {
    const navigation = useNavigation();
    console.log(data);

    const handleClick = (item) => {
        navigation.navigate("Movie", item);
    };

    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending </Text>
            <Carousel
                layout="default"
                data={data}
                renderItem={({ item }) => (
                    <MovieCard item={item} handleClick={handleClick} />
                )}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: "flex", alignItems: "center" }}
            />
        </View>
    );
}

const MovieCard = ({ item, handleClick }) => {
    //console.log("item.poster_path: ", item.poster_path);
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={{ uri: image500(item.poster_path)}}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
            />
        </TouchableWithoutFeedback>
    );
};
