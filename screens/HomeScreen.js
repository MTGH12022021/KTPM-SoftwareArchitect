import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    FlatList,
    Pressable,
} from "react-native";
import React, { useState } from 'react'
import tw from 'twrnc';
import { Image } from "@rneui/base";
import NavOptions from '../components/NavOptions';



const styles = StyleSheet.create({
    container: { flex: 1 },
    inputLabel: { marginLeft: 12, marginVertical: 5, fontSize: 12 },
    input: {
        height: 40,
        marginHorizontal: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    itemTextConatiner: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    textContainer: { marginLeft: 10, flexShrink: 1 },
    mainText: { fontWeight: "700" },
    country: { fontSize: 12 },
});


const HomeScreen = () => {
    const [input, setInput] = useState();
    const [data, setData] = useState();
    const [selectedItem, setSelectedItem] = useState(null);
    let typingTimer;

    const onChangeText = async (text) => {
        setInput(text);
        if (text.length === 0) return setData([]);
        if (text.length > 2) {
            clearTimeout(typingTimer);

            typingTimer = setTimeout(async () => {
                let endpoint = `https://api.locationiq.com/v1/search?key=pk.98ea5d4797e2df8fafe935d0149daae1&q=${text}&format=json`;
                const res = await fetch(endpoint);
                if (res) {
                    const data = await res.json();
                    if (data.length > 0) setData(data);
                }
            }, 2000); // 2 giây 

        }
    };

    const getItemText = (item) => {
        // let mainText = item.address.name;
        // if (item.type === "city" && item.address.state)
        //     mainText += ", " + item.address.state;

        return (
            <View style={styles.itemTextConatiner}>
                {/* <MaterialIcons
                    name={item.type === "city" ? "location-city" : "location-on"}
                    color={"black"}
                    size={30}
                /> */}
                <View style={styles.textContainer}>
                    {/* <Text style={styles.mainText}>{mainText}</Text> */}
                    <Text style={styles.country}>{item.display_name}</Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={tw`bg-blue-100 h-full`} >
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    // icon app
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />


                {selectedItem && <NavOptions someProp={selectedItem} />}
            </View>
            {/* search places */}
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.inputLabel}>Search Location</Text>
                    <TextInput
                        placeholder="Find Location"
                        value={input}
                        onChangeText={onChangeText}
                        style={styles.input}
                    />
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <Pressable
                                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                                onPress={() => {
                                    console.log("navigate passing" + JSON.stringify(item));
                                    setSelectedItem(item);
                                    // alert("navigate passing" + JSON.stringify(item))
                                }}
                            >
                                {getItemText(item)}
                            </Pressable>
                        )}
                        keyExtractor={(item, index) => item.osm_id + index}
                        showsVerticalScrollIndicator={false}
                    />
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    )
}

export default HomeScreen
