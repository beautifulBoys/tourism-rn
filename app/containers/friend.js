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
import Toast, {DURATION} from 'react-native-easy-toast'

import { NavigationActions } from '../utils'
import DynamicItem from '../components/dynamic_item'
import friendData from '../json/friend.json'
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
    width: 70,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerSideText: {
    fontSize: 18,
    color: '#fff'
  },
  headerRightImage: {
    width: 25,
    height: 30
  },
  friend: {
    flex: 1,
  },
  titleRow: {
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    display: 'flex',
  },
  li: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  liActive: {
    backgroundColor: '#fefefe'
  },
  liLeft: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liLeftText: {
    fontSize: 15
  },
  avatarBox: {
    width: 40,
    marginLeft: 5,
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  liRight: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  userdesc: {
    fontSize: 13,
    color: '#888',
  },
})


@connect()
class ThisComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: friendData.list
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/bottom_icon2.png')}
      />
    ),
    tabBarLabel: '圈友',
    headerLeft: (
      <View style={styles.headerSideView}></View>
    ),
    headerTitle: (
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitleText}>我的圈友</Text>
      </View>
    ),
    headerRight: (
      <View style={styles.headerSideView}>
        <Image style={styles.headerRightImage} source={require('../images/list.png')} />
      </View>
    ),
    headerStyle: {
      backgroundColor: '#20a0ff'
    }
  }
  listItemClickEvent (item) {
    this.gotoPersional()
  }

  gotoPersional () {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Persional' }))
  }

  render() {
    return (
      <View style={styles.friend}>
        <ScrollView
          contentContainerStyle={styles.container}
          automaticallyAdjustContentInsets={true}
          scrollEventThrottle={500}
        >
          {
            this.state.list.map((item, index) => {
              let status = false
              return (
                <TouchableHighlight
                  key={index}
                  onPressIn={() => {status = true}}
                  onPressOut={() => {status = false}}
                  onPress={() => {
                    this.listItemClickEvent(item)
                  }}
                >
                  <View
                    style={[styles.li, status ? styles.liActive : {}]}
                  >
                    <View style={styles.liLeft}><Text style={styles.liLeftText}>{item.id}</Text></View>
                    <View style={styles.avatarBox}>
                      <Image source={{uri: item.avatar}} style={styles.avatar}/>
                    </View>
                    <View style={styles.liRight}>
                      <Text style={styles.username}>{item.username}</Text>
                      <Text style={styles.userdesc}>{item.desc || '这个人太懒了，还没有填写呢'}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            })
          }
        </ScrollView>
      </View>

    )
  }
}

export default ThisComponent
