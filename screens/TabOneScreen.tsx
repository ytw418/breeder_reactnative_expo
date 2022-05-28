import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { BackHandler, Linking, ActivityIndicator,  StatusBar, SafeAreaView } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    return (
      <WebView 
      style={styles.root}
      source={{ uri: 'https://breeder.today' }}
    />
  );
}


const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
