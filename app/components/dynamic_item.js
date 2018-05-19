import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, FlatList } from 'react-native'
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
    color: '#333',
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
    display: 'flex',
    flexDirection:'row',
  },
  ImageListItem: {
    width: 200,
    height: 120,
    marginRight: 15,
    flex: 1,
    backgroundColor: 'red',
    // flexWrap:'wrap'
  },
  ImageListItem_img: {
    height: 120,
    borderRadius: 5
  }
})


@connect()
class DynamicItem extends Component {


  toUserPageEvent () {

  }

  _flatItemKey (item, index) {
    return index
  }

  _renderItem ({ item }) {
    let imgurl = 'https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/firstSoft/picture/travel/3/c7.jpg'
    return (
      <View key={item} style={styles.ImageListItem}>
        <Image style={styles.ImageListItem_img} source={{uri: imgurl}}/>
      </View>
    )
  }

  render () {
    let avatar = 'https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/tourism-circle/avatar.png'

    return (
      <View style={styles.dynamic}>

        <View style={styles.dynamic_head}>
          <View style={styles.dynamic_head_left} onClick={this.toUserPageEvent.bind(this)}>
            <Image style={styles.dynamic_head_left_img} source={{uri: avatar}}/>
          </View>
          <View style={styles.dynamic_head_center} onClick={this.toUserPageEvent.bind(this)}>
            <Text style={styles.dynamic_head_center_name}>{'李鑫'}</Text>
            <Text style={styles.dynamic_head_center_desc}>{'这个人很懒，还没有填写'}</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.ImageList}
          automaticallyAdjustContentInsets={true}
          scrollEventThrottle={500}
        >
          <FlatList
            key={3}
            data={[11,22]}
            style={{width: 2 * 195}}
            extraData={this.state}
            keyExtractor={this._flatItemKey}
            renderItem={this._renderItem}
          />
        </ScrollView>
        {/* <View style="footer">
          <View style="info border-1px-bottom" @click="toContentEvent()">
            <Text style="title">{{data.title}}</Text>
            <Text style="date"><Text style="tag">● </Text> {{data.postTime}}</Text>
          </View>
          <View style="control">
            <View style="left">
              <Image v-for="(user, index) in data.starList" :src="user.avatar" :style="{se: index != 0}"/>
              <Text style="kan">{{data.starList.length}}人喜欢</Text>
            </View>
            <View style="right">
              <Text style="star" :style="{active: data.isStared}" @click="starEvent"></Text>
              <Text style="down" @click="$router.push({path: '/content/' + data.id, query: {sign: 1}})"></Text>
            </View>
          </View>
        </View> */}

      </View>
    )
  }
}

export default DynamicItem
