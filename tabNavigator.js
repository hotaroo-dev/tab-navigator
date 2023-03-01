import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from './components/header'
import HomeScreen from './screens/homeScreen'
import AwayScreen from './screens/awayScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => <Header title={route.name} />,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              'Home screen': 'home',
              'Away screen': 'access-point'
            }
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            )
          },
          tabBarActiveTintColor: '#75507B'
        })}
      >
        <Tab.Screen component={HomeScreen} name="Home screen" />
        <Tab.Screen component={AwayScreen} name="Away screen" />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
