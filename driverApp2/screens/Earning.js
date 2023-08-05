import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Earning = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tổng Thu Nhập</Text>
        <Text style={styles.earningAmount}>$1500</Text>
      </View>
      
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'history' ? styles.activeTab : null]}
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, activeTab === 'history' ? styles.activeTabText : null]}>Lịch sử các chuyến đi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'completed' ? styles.activeTab : null]}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={[styles.tabText, activeTab === 'completed' ? styles.activeTabText : null]}>Chuyến đi đã hoàn thành</Text>
        </TouchableOpacity>
      </View>
      
      {/* Placeholder content based on activeTab */}
      {activeTab === 'history' && (
        <View style={styles.content}>
          <Text>Lịch sử các chuyến đi</Text>
          {/* Add your content here */}
        </View>
      )}
      
      {activeTab === 'completed' && (
        <View style={styles.content}>
          <Text>Chuyến đi đã hoàn thành</Text>
          {/* Add your content here */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  earningAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTab: {
    borderColor: 'blue',
  },
  activeTabText: {
    color: 'blue',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Earning;
