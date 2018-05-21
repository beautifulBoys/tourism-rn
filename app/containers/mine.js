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
import DynamicItem from '../components/dynamic_item'
import mineData from '../json/mine.json'
import menuData from './menu_config'

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
  icon1: {
    width: 40,
    height: 40
  },
  textBox: {
    marginTop: 12
  },
  buttonBox: {
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 400
  },
  itemBox: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewActive: {
    backgroundColor: '#fff'
  }



})


@connect()
class ThisComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: mineData.data,
      menu: menuData
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
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={500}
      >
        <View style={styles.header}>
          <View style={styles.avatarBox}>
            <Image style={styles.avatar} source={{uri: this.state.data.avatar}}/>
          </View>
          <Text style={styles.usernameText}>{this.state.data.username}</Text>
          <Text style={styles.descText}>{this.state.data.desc}</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>关注（{this.state.data.followingNum}）</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>好友（{this.state.data.friendNum}）</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>粉丝（{this.state.data.followNum}）</Text>
          </View>
        </View>
        {
          this.state.menu.map((item, index) => (
            <View key={index} style={styles.menu}>
              <View style={styles.title}><Text style={styles.titleText}>{item.title}</Text></View>
              <View style={styles.content}>
                <Grid 
                  data={item.arr} columnNum={3} 
                  renderItem={dataItem => {
                    let status = false
                    let i = 1
                    return (
                        <View 
                          style={[styles.itemBox]}
                          onClick={() => {
                            this.listItemClickEvent(dataItem)
                          }}
                        >
                          <Image source={{uri: dataItem.icon}} style={styles.icon1}/>
                          <View style={styles.textBox}>
                            <Text style={{fontSize: 16}}>{dataItem.text}</Text>
                          </View>
                        </View>
                    )}
                  }
                />
              </View>
            </View>
          ))
        }
        <View style={styles.buttonBox}>
          <Button type="primary" style={styles.btn}>退出登录</Button>
        </View>
        
        
      </ScrollView>
      
    )
  }
}

export default ThisComponent

