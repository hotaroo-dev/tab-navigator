import { useCallback, useState } from 'react'
import {
  StyleSheet,
  useWindowDimensions,
  Text,
  SafeAreaView
} from 'react-native'
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeOut,
  FadeOutLeft
} from 'react-native-reanimated'
import { MenuContext } from './context'
import TabNavigator from './tabNavigator'

export default function App() {
  const { height } = useWindowDimensions()
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = useCallback(() => {
    setOpenMenu(prev => !prev)
  }, [openMenu])

  const visible = openMenu && { backfaceVisibility: 'visible' }

  return (
    <MenuContext.Provider value={{ toggleMenu }}>
      <SafeAreaView style={styles.container}>
        <TabNavigator />
        {openMenu && (
          <Animated.View
            entering={FadeIn.stiffness(100).damping(18)}
            exiting={FadeOut.stiffness(100).damping(18).delay(250)}
            style={[styles.overlay, { height, opacity: 1 }, visible]}
            onTouchStart={e => {
              if (e.target === e.currentTarget) {
                setOpenMenu(false)
              }
            }}
          >
            <Animated.View
              entering={FadeInLeft.stiffness(100).damping(18)}
              exiting={FadeOutLeft.stiffness(100).damping(18)}
              style={[styles.menu, { transform: [{ translateX: 0 }] }]}
            >
              <Text style={{ color: '#fff' }}>dropdown</Text>
            </Animated.View>
          </Animated.View>
        )}
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
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000a',
    opacity: 0,
    backfaceVisibility: 'hidden',
    zIndex: 10
  },
  menu: {
    width: 285,
    height: '100%',
    paddingTop: 80,
    paddingHorizontal: 40,
    backgroundColor: '#75507B'
  }
})
