import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  PixelRatio,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import Button from 'antd-mobile/lib/button'

import { NavigationActions } from '../utils'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  },
  content: {
    flex: 1,
    backgroundColor: '#eee'
  },


})


@connect()
class ThisComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      // <ScrollView
      //   contentContainerStyle={styles.container}
      //   automaticallyAdjustContentInsets={true}
      //   scrollEventThrottle={500}
      // >
        <View style={styles.content}>
        </View>

      // </ScrollView>
    )
  }
}

export default ThisComponent
