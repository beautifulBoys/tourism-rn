import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { Button } from '../components'

import { NavigationActions } from '../utils'
import DynamicItem from '../components/dynamic_item'
import homeData from '../json/home.json'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  },
  icon: {
    width: 25,
    height: 25,
  },
  v1: {
    height: 100,
    marginBottom: 10
  },
  headerTitleView: {
    width: 70,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerTitleText: {
    fontSize: 18,
    color: '#fff'
  },
  headerSideView: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerSideText: {
    fontSize: 18,
    color: '#fff'
  },
  li: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  headerRightImage: {
    width: 25,
    height: 30
  }
})


@connect()
class ThisComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: homeData.list
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/bottom_icon1.png')}
      />
    ),
    tabBarLabel: '动态',
    headerLeft: (
      <View style={styles.headerSideView}></View>
    ),
    headerTitle: (
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitleText}>旅游圈</Text>
      </View>
    ),
    headerRight: (
      <View style={styles.headerSideView}>
        <Image style={styles.headerRightImage} source={require('../images/list.png')} />
      </View>
    ),
    headerStyle: {
      backgroundColor: '#35baff'
    }
  }

  _flatItemKey = (item, index) => index
  _renderItem = ({ item }) => {
    return (
      <View style={styles.li} key={item.id}>
        <DynamicItem data={item}></DynamicItem>
      </View>
    )
  }
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'} translucent={true} />
        <ScrollView
          contentContainerStyle={styles.container}
          automaticallyAdjustContentInsets={true}
          scrollEventThrottle={500}
        >

          {
            this.state.list.map((item, index) => (
              <View style={styles.li} key={index}>
                <DynamicItem data={item}></DynamicItem>
              </View>
            ))
          }
        </ScrollView>
      </View>

    )
  }
}

export default ThisComponent
