import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  PixelRatio
} from 'react-native'

import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'


const styles = StyleSheet.create({
  dynamic: {
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
  ImageList: {
    height: 120,
    flexDirection: 'row',
    display: 'flex',
  },
  ImageListItem: {
    width: 200,
    height: 120,
    marginRight: 15,
  },
  ImageListItem_img: {
    height: 120,
    borderRadius: 5
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#ddd',

  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  dateText: {
    fontSize: 14,
    color: '#888'
  },
  control: {
    flexDirection: 'row',
    display: 'flex',
  },
  controlLeft: {
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    height: 40
  },
  controlRight: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    width: 95,
    height: 40
  },
  controlRightImg: {
    width: 30,
    height: 30
  },
  starListItem: {
    width: 40,
    height: 40,
    marginLeft: -10
  },
  starListItem_img: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff'
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 40,
    marginLeft: 5
  }

})


@connect()
class DynamicItem extends Component {


  toUserPageEvent () {

  }

  _flatItemKey (item, index) {
    return item.id
  }

  _flatStarItemKey (item, index) {
    return index + 1
  }

  _renderItem ({ item }) {
    return (
      <View key={item.id} style={styles.ImageListItem}>
        <Image style={styles.ImageListItem_img} source={{uri: item.url}}/>
      </View>
    )
  }

  _renderStarItem ({ item }) {
    return (
      <View key={item.id} style={styles.starListItem}>
        {/* <Image style={styles.starListItem_img} source={{uri: item.avatar}}/> */}
      </View>
    )
  }
  render () {
    let { data } = this.props

    return (
      <View style={styles.dynamic}>
        <View style={styles.dynamic_head}>
          <View style={styles.dynamic_head_left} onClick={this.toUserPageEvent.bind(this)}>
            <Image style={styles.dynamic_head_left_img} source={{uri: data.userInfo.avatar}}/>
          </View>
          <View style={styles.dynamic_head_center} onClick={this.toUserPageEvent.bind(this)}>
            <Text style={styles.dynamic_head_center_name}>{data.userInfo.username}</Text>
            <Text style={styles.dynamic_head_center_desc}>{data.userInfo.desc || '这个人很懒，还没有填写'}</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.ImageList}
          automaticallyAdjustContentInsets={true}
          scrollEventThrottle={500}
        >
          {
            data.urls.map((item, index) => (
              <View key={index} style={styles.ImageListItem}>
                <Image style={styles.ImageListItem_img} source={{uri: item.url}}/>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.title}><Text style={styles.titleText}>{data.title}</Text></View>
          <View style={styles.date}><Text style={styles.dateText}>{data.postTime}</Text></View>
        </View>
        
        <View style={styles.control}>
          <View style={styles.controlLeft}>
            {
              data.starList.map((item, index) => {
                if (index > 4) return
                return (
                  <View key={index} style={styles.starListItem}>
                    <Image style={styles.starListItem_img} source={{uri: item.avatar}}/>
                  </View>
                )
              })
            }
            <Text style={styles.text}>{data.starList.length}人喜欢</Text>
          </View>
          <View style={styles.controlRight}>
            <Image source={require('../images/travel_star.png')} style={[styles.controlRightImg, {marginLeft: 5, marginTop: 5}]}/>
            <Image source={require('../images/travel_msg.png')} style={[styles.controlRightImg, {marginLeft: 20, marginTop: 5}]}/>
          </View>
        </View>
     
      </View>
    )
  }
}

export default DynamicItem
