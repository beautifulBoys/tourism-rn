import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Mine extends Component {
  static navigationOptions = {
    title: 'Mine',
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/bottom_icon3.png')}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>个人中心</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    width: '100%',
    height: 50,
    backgroundColor: '#0997F7',
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 50
  }
})

export default Mine
