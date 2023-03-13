import React, { useState } from 'react';
import { View, Image, Text, Button, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.uri) {
        setImage(response);
      }
    });
  };

  const handleStatusMessage = (text) => {
    setStatusMessage(text);
  };

  const images = [{ url: image?.uri }];

  if (image) {
    return (
      <View style={{flex: 1}}>
        <ImageViewer imageUrls={images} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./profile.png')} style={{width: 100, height: 100, borderRadius: 50, marginBottom: 16}} />
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>John Doe</Text>
      <TextInput placeholder="Enter your status message" value={statusMessage} onChangeText={handleStatusMessage} style={{fontSize: 16, marginBottom: 16}} />
      <Button title="Upload Image" onPress={handleImagePicker} />
    </View>
  );
};

export default ProfilePage;