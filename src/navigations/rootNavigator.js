import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OnboardNavigator } from '.'
import { CorperateAccount, Login, SignUpChoice } from '../screens'

const Stack = createStackNavigator()

const renderScreen = ({ name, component, options = {}, path }, index) => {
  return (
    <Stack.Screen
      name={name}
      key={index}
      options={options}
      path={path}
      component={component}
    />
  )
}

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Onboard'}>
    {routes.map((item, index) => {
      return renderScreen(item, index)
    })}
  </Stack.Navigator>
  )
}

const routes = [
  {
    name: 'Onboard',
    component: OnboardNavigator,
    options: { headerShown: false }
  },
  {
    name: 'SignUpChoice',
    component: SignUpChoice
  },
  {
    name: 'SignUpCorperate',
    component: CorperateAccount
  },
  {
    name: 'Login',
    component: Login
  },
]

export { RootNavigator as default}
