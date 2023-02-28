import { useContext } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { MenuContext } from '../context'

export default function Header({ navigation }) {
  const { toggleMenu } = useContext(MenuContext)
  const state = navigation.getState()

  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{state.routes[state.index].name}</Text>
      <Pressable onPress={toggleMenu}>
        <Text>menu</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  heading: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
    paddingLeft: 36.3
  }
})
