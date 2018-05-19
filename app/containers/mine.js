import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Mine extends Component {
  static navigationOptions = {
    title: 'Mine',
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
