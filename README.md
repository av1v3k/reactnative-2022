
Learned 

1. <Text> tag
2. How to add styles using Stylesheets.create method
3. Tried using,

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(f) => f.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.listStyle}>{item.name}</Text>
            }}
        />
4.