import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images, SIZES, FONTS } from '../constants'
import { Feather } from "@expo/vector-icons"
import { latestList, carList1 } from '../constants/data'

const Home = ({ navigation }) => {
  return (
   <SafeAreaView style={{
    flex: 1,
    backgroundColor: COLORS.white
   }}>
    
     <View style={{
        marginHorizontal: 22,
        marginTop: 12
     }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{
                width: 58,
                height: 22,
                marginRight: 10
              }}
            />
            <TouchableOpacity onPress={() => console.log('Navigate to Map')}>
              <Feather name="map" size={24} color={COLORS.black} />
            </TouchableOpacity>

        </View> 
        
        <ScrollView>
            <View style={{
            backgroundColor: COLORS.gray,
            borderRadius: 20,
            marginTop: SIZES.padding,
            width: SIZES.width - 44
          }}>

           
            <FlatList
              horizontal={true}
              data={carList1}
              keyExtractor={item=>item.id}
              renderItem={
                ({ item, index })=> (
                    <Image
                      source={item.cars}
                      resizeMode="contain"
                    />
                )
              }
            />

            <View style={{
                marginHorizontal: 12,
                marginVertical: SIZES.padding
            }}>
                <Text style={{...FONTS.h3}}>Di chuyển</Text>
                <Text style={{...FONTS.body4, marginVertical: 10}}>
                    Chúng tôi sẽ đưa bạn đến bất cứ đâu
                </Text>
            </View>

            {/* Thanh tìm kiếm */}
            <View style={{ marginTop: SIZES.padding }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.lightGray,
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}>
            <Feather name="search" size={20} color={COLORS.black} style={{ marginRight: 10 }} />
            <TextInput
              style={{
                flex: 1,
                height: 40,
                color: COLORS.black,
              }}
              placeholder="Tìm kiếm..."
              placeholderTextColor={COLORS.black}
            />
            <TouchableOpacity onPress={() => console.log('Search')}>
              <Feather name="arrow-right-circle" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>

            </View>

            <View style={{
                marginBottom: 120
            }}>
                <Text style={{
                    ...FONTS.h3,
                    marginVertical: SIZES.padding *2
                }}>Thêm nhiều cách để di chuyển</Text>

                <FlatList
                  horizontal={true}
                  data={latestList}
                  keyExtractor={item=>item.id}
                  renderItem={
                    ({ item, index })=>(
                        <View style={{
                            marginRight: SIZES.padding
                        }}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate("Details")}
                            >
                                <Image
                                 source={item.image}
                                 style={{
                                    height: 140,
                                    width: 140
                                 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                              onPress={()=>navigation.navigate("Details")}
                            >
                                <Text style={{
                                    fontSize: 14,
                                    color: COLORS.black,
                                    fontWeight: "bold"
                                }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 10,
                                color: COLORS.black
                            }}>
                                {item.category}
                            </Text>
                        </View>
                    )
                  }
                />
            </View>

        </ScrollView>
     </View>
   </SafeAreaView>
  )
}

export default Home
