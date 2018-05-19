import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
    headerRight: (
      <View style={{
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 18,
          color: '#fff'
        }}>操作</Text>
      </View>
    ),
    headerTitle: (
      <View style={{
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
        <Text style={{
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold'
        }}>旅游圈</Text>
      </View>
    ),
    headerLeft: (
      <View style={{
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 18,
          color: '#fff'
        }}>返回</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#0997F7'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  gotoMine = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Mine' }))
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
        onScroll={() => { console.log('onScroll!') }}
        scrollEventThrottle={200}
      >
        {
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => (
            <View key={index} style={styles.v1}>
              <Text>第{index}行</Text>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  icon: {
    width: 32,
    height: 32,
  },
  v1: {
    height: 100,
    marginBottom: 10,
    backgroundColor: 'green'
  }
})

export default Home
