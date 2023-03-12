import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TREND_DATA = [
  {
    id: '1',
    name: 'React Native',
    postCount: '10.2K',
  },
  {
    id: '2',
    name: 'JavaScript',
    postCount: '15.6K',
  },
  {
    id: '3',
    name: 'Node.js',
    postCount: '8.7K',
  },
];

const POST_DATA = [
  {
    id: '1',
    name: 'John Doe',
    username: '@johndoe',
    post_content: 'Hello sunmoon!',
  },
  {
    id: '2',
    name: 'Jane Doe',
    username: '@janedoe',
    post_content: 'Hello React Native!',
  },
  {
    id: '3',
    name: 'Bob Smith',
    username: '@bobsmith',
    post_content: 'Hello World!',
  },
];

export default function App() {
  const [selectedTrend, setSelectedTrend] = React.useState(null);

  const handlePress = (trend) => {
    setSelectedTrend(trend);
  };

  const handleBack = () => {
    setSelectedTrend(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.trend} onPress={() => handlePress(item)}>
      <Text style={styles.trendName}>{item.name}</Text>
      <Text style={styles.trendPostCount}>{item.postCount} 게시글 수</Text>
    </TouchableOpacity>
  );

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postName}>{item.name}</Text>
      <Text style={styles.postUsername}>{item.username}</Text>
      <Text style={styles.postText}>{item.post}</Text>
    </View>
  );

  if (selectedTrend) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>{"< 뒤로가기"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{selectedTrend.name}</Text>
        <FlatList
          data={POST_DATA}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
      </View>
      
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>무엇이 궁금하신가요?</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="지금 당장 검색하기"
          placeholderTextColor="#555"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>검색</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={TREND_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
       <View style={styles.container2}>
      <TouchableOpacity style={styles.button2}>
        <Feather name="home" size={24} color="#657786" />
        <Text style={styles.label}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Feather name="search" size={24} color="#1DA1F2" />
        <Text style={styles.label}>검색하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Feather name="image" size={24} color="#657786" />
        <Text style={styles.label}>프로필</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Feather name="bell" size={24} color="#657786" />
        <Text style={styles.label}>알림</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Feather name="mail" size={24} color="#657786" />
        <Text style={styles.label}>메세지</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#111',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trend: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  trendName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  trendPostCount: {
    fontSize: 16,
    color: '#555',
  },
  post: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  postName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postUsername: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  postText: {
    fontSize: 16,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#1DA1F2',
    fontSize: 18,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button2: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    color: '#657786',
  },
});