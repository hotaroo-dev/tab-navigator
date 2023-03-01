import { useContext } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { MenuContext } from '../context'

export default function Header({ title }) {
  const { toggleMenu } = useContext(MenuContext)
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{title}</Text>
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
