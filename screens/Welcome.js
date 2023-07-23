import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/car1.png")}
                        style={{
                            height: windowHeight * 0.15,
                            width: windowHeight * 0.15,
                            borderRadius: 20,
                            position: "absolute",
                            top: windowHeight * 0.02,
                            transform: [
                                { translateX: windowWidth * 0.05 },
                                { translateY: windowHeight * 0.05 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/car3.jpeg")}
                        style={{
                            height: windowHeight * 0.15,
                            width: windowHeight * 0.15,
                            borderRadius: 20,
                            position: "absolute",
                            top: -windowHeight * 0.04,
                            left: windowWidth * 0.4,
                            transform: [
                                { translateX: windowWidth * 0.1 },
                                { translateY: windowHeight * 0.05 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/car4.jpg")}
                        style={{
                            width: windowHeight * 0.15,
                            height: windowHeight * 0.15,
                            borderRadius: 20,
                            position: "absolute",
                            top: windowHeight * 0.18,
                            left: -windowHeight * 0.1,
                            transform: [
                                { translateX: windowWidth * 0.1 },
                                { translateY: windowHeight * 0.05 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/car2.png")}
                        style={{
                            height: windowHeight * 0.25,
                            width: windowHeight * 0.25,
                            borderRadius: 20,
                            position: "absolute",
                            top: windowHeight * 0.16,
                            left: windowWidth * 0.4,
                            transform: [
                                { translateX: windowWidth * 0.1 },
                                { translateY: windowHeight * 0.05 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: windowWidth * 0.05,
                    position: "absolute",
                    top: windowHeight * 0.45,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.1,
                        fontWeight: '800',
                        color: COLORS.white
                    }}>Chào mừng đến</Text>
                    <Text style={{
                        fontSize: windowWidth * 0.092,
                        fontWeight: '800',
                        color: COLORS.white
                    }}>Hệ thống gọi xe</Text>

                    <View style={{ marginVertical: windowHeight * 0.022 }}>
                        <Text style={{
                            fontSize: windowWidth * 0.032,
                            color: COLORS.white,
                            marginVertical: windowHeight * 0.008
                        }}>Nhanh gọn nhẹ</Text>
                        <Text style={{
                            fontSize: windowWidth * 0.032,
                            color: COLORS.white,
                        }}>Uy tín chất lượng trong từng chuyến đi</Text>
                    </View>

                    <Button
                        title="Thử Ngay"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: windowHeight * 0.022,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: windowHeight * 0.012,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: windowWidth * 0.032,
                            color: COLORS.white
                        }}>Đã có tài khoản?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: windowWidth * 0.032,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: windowWidth * 0.008
                            }}>Đăng nhập</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome;
