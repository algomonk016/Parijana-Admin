import React, {
    useState,
    useRef,
    useCallback,
    useEffect
} from "react";
import {
    FlatList,
    Dimensions,
    View
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Carousel = ({ slideList = [], Slide = () => { } }) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        const isNoMansLand = 0.1 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 10,
        windowSize: 100,
        keyExtractor: useCallback(e => e.id, []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    // useEffect(() => {
    //     console.warn(index);
    // }, [index]);

    return (
        <FlatList
            data={slideList}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
                return <Slide data={item} ind={index} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            ItemSeparatorComponent={() => {
                return (
                    <View
                        style={{
                            width: 10,
                        }}
                    />
                );
            }}
            {...flatListOptimizationProps}
        />
    )
}

export default Carousel