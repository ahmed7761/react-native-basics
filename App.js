import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>Hello Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.d</Text>
      <TouchableOpacity onPress={() => Alert.alert('my title', 'message',[{text: 'yes', onPress: () => console.log('yes press')}, {text: 'no'}])}>
        <Image source={{ height:300, width:200, uri: "https://picsum.photos/200" }} />
          <View style={{ backgroundColor: 'dodgerblue', flex: 2 }} />
          <View style={{ backgroundColor: 'gold', flex: 1 }} />
          <View style={{ backgroundColor: 'tomato', flex: 1 }} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
