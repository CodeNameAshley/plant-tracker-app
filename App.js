
import { StyleSheet, Text, View } from 'react-native';
import NavBar from "./components/NavBar";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";

export default function App() {
  return (
    <View styles={styles.container}>
        <View style={styles.styledText}>
            <Text>Plant Tracker</Text>
        </View>
        <View>
            <NavigationContainer>
                <NavBar home={HomeScreen} settings={SettingsScreen} />
            </NavigationContainer>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledText: {
      textAlign: 'center',
    margin: 2,
    paddingBottom: 675
  }
});
