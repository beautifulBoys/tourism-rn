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
    paddingTop: 30,
    paddingBottom: 30
  },
  avatarBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 80
  },
  usernameText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  descText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5
  },
  tab: {
    height: 45,
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
    fontSize: 15
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
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginTop: 10
  },
  dynamic_head: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row'
  },
  dynamic_head_left: {
    width: 38,
    height: 38,
    marginRight: 8
  },
  dynamic_head_left_img: {
    width: 38,
    height: 38,
    borderRadius: 38,
  },
  dynamic_head_center: {

  },
  dynamic_head_center_name: {
    color: '#333',
    fontSize: 15
  },
  dynamic_head_center_desc: {
    color: '#888',
    fontSize: 13
  },
  dynamic_content: {
    marginBottom: 10,
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
    alignItems: 'center',
    overflow: 'hidden'
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
