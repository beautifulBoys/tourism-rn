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
    width: 25,
    height: 25,
  },
  header: {
    backgroundColor: '#35baff',
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
    lineHeight: 35,
    fontSize: 14
  },
  icon1: {
    width: 30,
    height: 30
  },
  textBox: {
    marginTop: 5
  },
  buttonBox: {
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 300
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: -1 / PixelRatio.get(),
    marginRight: -1 / PixelRatio.get()
  },
  itemBox: {
    width: '33.45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1 / PixelRatio.get(),
    marginLeft: -1 / PixelRatio.get(),
    paddingTop: 14,
    paddingBottom: 14
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
      backgroundColor: '#35baff',
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

                {
                  item.arr.map((dataItem, itemIndex) => {
                    return (
                      <View
                        key={itemIndex}
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
                    )
                  })
                }

                {/* <Grid
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
                /> */}
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
