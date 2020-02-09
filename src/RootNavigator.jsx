import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'react-native-paper'

import { StackNavigator } from './stack'
import { DrawerContent } from './DrawerContent'

const Drawer = createDrawerNavigator()

export const RootNavigator = () => {
  const theme = useTheme()
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
