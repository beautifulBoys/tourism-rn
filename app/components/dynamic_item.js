import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  PixelRatio,
  TouchableNativeFeedback
} from 'react-native'

import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'


const styles = StyleSheet.create({
  dynamic: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff'
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
    borderWidth: 1,
    borderColor: '#fff'
  },
  dynamic_head_center: {

  },
  dynamic_head_center_name: {
    color: '#555',
    fontSize: 15
  },
  dynamic_head_center_desc: {
    color: '#999',
    fontSize: 13
  },
  ImageList: {
    height: 100,
    flexDirection: 'row',
    display: 'flex',
  },
  ImageListItem: {
    width: 160,
    height: 100,
    marginRight: 10,
  },
  ImageListItem_img: {
    height: 100,
    borderRadius: 3
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#ddd',

  },
  titleText: {
    fontSize: 15,
    color: '#666'
  },
  dateText: {
    fontSize: 13,
    color: '#999'
  },
  control: {
    flexDirection: 'row',
    display: 'flex',
  },
  controlLeft: {
    marginBottom: 8,
    marginTop: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    height: 35
  },
  controlRight: {
    marginBottom: 8,
    marginTop: 8,
    flexDirection: 'row',
    display: 'flex',
    width: 75,
    height: 35
  },
  controlRightImg: {
    width: 25,
    height: 25
  },
  starListItem: {
    width: 35,
    height: 35,
    marginLeft: -5
  },
  starListItem_img: {
    height: 35,
    width: 35,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 35,
    marginLeft: 8
  }

})


@connect()
class DynamicItem extends Component {


  gotoPersional () {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Persional' }))
  }

  gotoDynamic () {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Dynamic' }))
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
        <TouchableNativeFeedback
          onPress={this.gotoDynamic.bind(this)}>
          <View style={styles.dynamic_head}>
            <View style={styles.dynamic_head_left}>
              <Image style={styles.dynamic_head_left_img} source={{uri: data.userInfo.avatar}}/>
            </View>
            <View style={styles.dynamic_head_center}>
              <Text style={styles.dynamic_head_center_name}>{data.userInfo.username}</Text>
              <Text style={styles.dynamic_head_center_desc}>{data.userInfo.desc || '这个人很懒，还没有填写'}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>

          <ScrollView
            contentContainerStyle={[styles.ImageList]}
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
