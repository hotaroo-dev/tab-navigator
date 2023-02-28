import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Header from './components/header'
import HomeScreen from './screens/homeScreen'
import AwayScreen from './screens/awayScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />
        }}
      >
        <Tab.Screen component={HomeScreen} name="Home screen" />
        <Tab.Screen component={AwayScreen} name="Away screen" />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
