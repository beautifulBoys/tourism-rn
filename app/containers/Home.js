import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'
import DynamicItem from '../components/dynamic_item'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  },
  icon: {
    width: 28,
    height: 28,
  },
  v1: {
    height: 100,
    marginBottom: 10
  },
  headerTitleView: {
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerTitleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  headerSideView: {
    width: 70,
    height: 60,
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
  }
})


@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/bottom_icon1.png')}
      />
    ),
    tabBarLabel: '动态',
    headerLeft: (
      <View style={styles.headerSideView}>
        <Text style={styles.headerSideText}>返回</Text>
      </View>
    ),
    headerTitle: (
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitleText}>旅游圈</Text>
      </View>
    ),
    headerRight: (
      <View style={styles.headerSideView}>
        <Text style={styles.headerSideText}>操作</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#20a0ff'
    }
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  gotoMine = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Mine' }))
  }

  _flatItemKey = (item, index) => item
  _renderItem = ({ item }) => {
    return (
      <View style={styles.li} key={item}>
        <DynamicItem  key={item}></DynamicItem>
      </View>
    )
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={500}
      >
        <FlatList
          data={[1,2,3,4,5]}
          extraData={this.state}
          keyExtractor={this._flatItemKey}
          renderItem={this._renderItem}
        />
      </ScrollView>
    )
  }
}

export default Home
