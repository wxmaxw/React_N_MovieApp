import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions,Image} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");
export default function TrendingMovies({data,navigation}){
    console.log(data)
    
    const handleClick= (item) => {
        navigation.navigate("Movie", item);
    }
    
    return(
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>
            <Carousel 
            layout="default"
            data={data}
            renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display:"flex", alignItems:"center"}}/>
        </View>
    );
}

const MovieCard = ({item}) => {
    return(
        <TouchableWithoutFeedback>
            <Image 
            source={require("../assets/images/moviePoster1.png")}
            style={{
                width: width * 0.6,
                height: height * 0.4 }}/>
        </TouchableWithoutFeedback>
    );
};