import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Button } from 'react-native';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

function ArtScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={art} style={styles.cityImg} />
      <Button info style={styles.button} title="More Information" onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')}>
        More Information
      </Button>
    </View>
  );
}

function MileScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={mile} style={styles.cityImg} />
      <Button info style={styles.button} title="More Information" onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}>
        More Information
      </Button>
    </View>
  );
}

function PierScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={pier} style={styles.cityImg} />
      <Button info style={styles.button} title="More Information" onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')}>
        More Information
      </Button>
    </View>
  );
}

function WaterScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={water} style={styles.cityImg} />
      <Button info style={styles.button} title="More Information" onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwat')}>
        More Information
      </Button>
    </View>
  );
}

function WillisScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={willis} style={styles.cityImg} />
      <Button info style={styles.button} title="More Information" onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')}>
        More Information
      </Button>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
        <Drawer.Screen name="Magnificient Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityImg: {
    width: 240,
    height: 360,
    marginBottom: 20,
  },
});
