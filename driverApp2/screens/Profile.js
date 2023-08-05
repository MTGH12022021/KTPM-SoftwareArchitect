import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { COLORS, FONTS, images } from '../constants';

const Profile = () => {
  const driverInfo = {
    name: 'Taxi driver',
    carModel: 'Toyota Camry',
    licensePlate: 'ABC123',
    rating: 4.8,
    nationality: 'Vietnam',
    language: 'English',
  };

  const achievements = [
    '1000+ trips completed',
    '5 years of safe driving',
    'Top-rated driver',
  ];

  const handleLogout = () => {
    // Xử lý khi tài xế đăng xuất
    console.log('Đăng xuất');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.name}>{driverInfo.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{driverInfo.rating}</Text>
            <Text style={styles.starIcon}>⭐</Text>
          </View>
        </View>

        {/* Đường kẻ */}
        <View style={styles.separator} />

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
          <Text style={styles.details}>Quốc tịch: {driverInfo.nationality}</Text>
          <Text style={styles.details}>Nói ngôn ngữ: {driverInfo.language}</Text>
          <Text style={styles.details}>Chuyên đón ở quán bar, khu mua sắm, quán cà phê, nhà hàng và công viên</Text>
          {/* Add more details */}
        </View>

        {/* Đường kẻ */}
        <View style={styles.separator} />

        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>Thành tựu</Text>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.achievementIcon}>🏆</Text>
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>

        {/* Đường kẻ */}
        <View style={styles.separator} />

        {/* Nút Đăng xuất */}
        <TouchableOpacity style={styles.logoutButtonContainer} onPress={handleLogout}>
          <View style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    ...FONTS.h1,
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.h2,
  },
  starIcon: {
    ...FONTS.h2,
    marginLeft: 5,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.black,
    marginVertical: 10,
  },
  sectionTitle: {
    ...FONTS.h3,
    marginBottom: 10,
    color: COLORS.primary,
  },
  infoContainer: {
    marginBottom: 20,
  },
  details: {
    ...FONTS.body2,
    marginBottom: 10,
  },
  achievementsContainer: {
    marginBottom: 20,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  achievementIcon: {
    ...FONTS.body3,
    marginRight: 5,
  },
  achievementText: {
    ...FONTS.body3,
  },
  logoutButtonContainer: {
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 5,
  },
  logoutButtonText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
