import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, images } from '../constants';
import { Ionicons } from '@expo/vector-icons'; // Import thư viện icon

const Details = ({ route, navigation }) => {
  const { carInfo } = route.params;

  const handleAccept = () => {
    // Xử lý khi tài xế chấp nhận thuê xe
    console.log('Chấp nhận thuê xe');
  };

  return (
    <View style={styles.container}>
      {/* Nút quay về trang Home */}
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.black} />
      </TouchableOpacity>

      {/* Hình ảnh xe */}
      <Image source={images.car1} resizeMode="cover" style={styles.carImage} />

      {/* Thông tin chi tiết */}
      <View style={styles.detailsContainer}>
        <Text style={styles.carName}>{carInfo.name}</Text>
        <Text style={styles.description}>{carInfo.description}</Text>
        <Text style={styles.pricePerHour}>Giá thuê theo giờ: ${carInfo.pricePerHour}/hour</Text>
      </View>

      {/* Nút Chấp nhận */}
      <TouchableOpacity style={styles.acceptButtonContainer} onPress={handleAccept}>
        <View style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Chấp nhận thuê</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  carName: {
    ...FONTS.h2,
    marginBottom: 10,
  },
  description: {
    ...FONTS.body2,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  pricePerHour: {
    ...FONTS.body2,
    color: COLORS.primary,
  },
  acceptButtonContainer: {
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 5,
  },
  acceptButtonText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Details;
