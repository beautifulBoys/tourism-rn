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
import Grid from 'antd-mobile/lib/grid'

import Toast, {DURATION} from 'react-native-easy-toast'

import { NavigationActions } from '../utils'
import persionalData from '../json/persional.json'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  }, 
  icon: {
    width: 28,
    height: 28,
  },
  header: {
    backgroundColor: '#20a0ff',
    paddingTop: 40,
    paddingBottom: 40
  },
  avatarBox: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 120
  },
  usernameText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  descText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5
  },
  tab: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    display: 'flex',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItemText: {
    fontSize: 16
  },
  menu: {
    backgroundColor: '#fff',
    marginTop: 10
  },
  title: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleText: {
    lineHeight: 40,
    fontSize: 16
  },
  content: {
    flex: 1,
    backgroundColor: '#eee'
  },
  dynamic: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  dynamic_head: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dynamic_head_left: {
    width: 42,
    height: 42,
    marginRight: 10
  },
  dynamic_head_left_img: {
    width: 42,
    height: 42,
    borderRadius: 42,
  },
  dynamic_head_center: {

  },
  dynamic_head_center_name: {
    color: '#333',
    fontSize: 16
  },
  dynamic_head_center_desc: {
    color: '#888',
    fontSize: 14
  },
  dynamic_content: {
    marginBottom: 15,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -3,
    marginLeft: -3
  },
  dynamic_content_item_box: {
    position: 'relative',
    width: '25%',
    height: 0,
    margin: 0,
    paddingTop: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dynamic_content_item: {
    position: 'absolute',
    width: 108,
    height: 108
  }




})


@connect()
class ThisComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: persionalData.data.postList,
      userInfo: persionalData.data.userInfo
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/bottom_icon3.png')}
      />
    ),
    tabBarLabel: '动态',
    headerStyle: {
      backgroundColor: '#20a0ff',
      height: 0
    }
  }
  listItemClickEvent(item) {

  }
  render() {
    const state = this.state
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={500}
      >
        <View style={styles.header}>
          <View style={styles.avatarBox}>
            <Image style={styles.avatar} source={{uri: this.state.userInfo.avatar}}/>
          </View>
          <Text style={styles.usernameText}>{this.state.userInfo.username}</Text>
          <Text style={styles.descText}>{this.state.userInfo.desc}</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>关注</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>加好友</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>站内信</Text>
          </View>
        </View>
        <View style={styles.content}>
          {
            this.state.postList.map((item, index) => (
                <View key={index} style={styles.dynamic}>

                  <View style={styles.dynamic_head}>
                    <View style={styles.dynamic_head_left}>
                      <Image style={styles.dynamic_head_left_img} source={{uri: this.state.userInfo.avatar}}/>
                    </View>
                    <View style={styles.dynamic_head_center}>
                      <Text style={styles.dynamic_head_center_name}>{this.state.userInfo.username}</Text>
                      <Text style={styles.dynamic_head_center_desc}>{item.postTime}</Text>
                    </View>
                  </View>
                  <View style={styles.dynamic_content}>
                    {
                      item.urls.map((imageItem, index) => (
                        <View key={index} style={styles.dynamic_content_item_box}>
                          <Image source={{uri: imageItem.url}} style={styles.dynamic_content_item} />
                        </View>
                      ))
                    }
                  </View>

                </View>
            ))
          }
        </View>
        
        
      </ScrollView>
      
    )
  }
}

export default ThisComponent

