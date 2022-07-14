import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Friend 1#"},
        {name: "Friend 2#"},
        {name: "Friend 3#"},
        {name: "Friend 4#"},
        {name: "Friend 5#"},
        {name: "Friend 6#"},
        {name: "Friend 7#"},
        {name: "Friend 8#"},
        {name: "Friend 9#"},
        {name: "Friend 10#"}
    ];
    return (<View>
        <Text style={styles.text}>List - Screen</Text>
        <Text style={styles.subText}>Here, goes my Lists</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(f) => f.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.listStyle}>{item.name}</Text>
            }}
        />
    </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        borderColor: "green",
        borderStyle: "solid",
        borderWidth: 5
    },
    subText: {
        fontSize: 20,
        color: "red"
    },
    listStyle: {
        marginVertical: 50,
        color:"grey"
    }
});

export default ListScreen;
