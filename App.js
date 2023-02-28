import { useCallback, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  useWindowDimensions,
  Text,
  Animated,
  SafeAreaView
} from 'react-native'
import { MenuContext } from './context'
import TabNavigator from './tabNavigator'

const transition = {
  stiffness: 100,
  damping: 18,
  useNativeDriver: true
}

export default function App() {
  const { height } = useWindowDimensions()
  const [openMenu, setOpenMenu] = useState(false)
  const motionValue = useRef(new Animated.Value(0)).current
  const translateX = motionValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0]
  })

  useEffect(() => {
    if (openMenu) {
      Animated.spring(motionValue, {
        toValue: 1,
        ...transition
      }).start()
    } else {
      Animated.spring(motionValue, {
        toValue: 0,
        ...transition
      }).start()
    }
  }, [openMenu])

  const toggleMenu = useCallback(() => {
    setOpenMenu(prev => !prev)
  }, [openMenu])

  return (
    <MenuContext.Provider value={{ toggleMenu }}>
      <SafeAreaView style={styles.container}>
        <TabNavigator />
        <Animated.View
          style={[styles.overlay, { height, transform: [{ translateX }] }]}
        >
          <Text style={{ color: '#fff' }}>dropdown</Text>
        </Animated.View>
      </SafeAreaView>
    </MenuContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    width: 300,
    transform: [{ translateX: '100%' }],
    paddingTop: 80,
    paddingHorizontal: 40,
    backgroundColor: '#75507B',
    position: 'absolute',
    zIndex: 1
  }
})
