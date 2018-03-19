import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'

import { pubS,DetailNavigatorStyle } from '../../styles/'
import { setScaleText, scaleSize } from '../../utils/adapter'

class MsgCenterList extends Component{
  render(){
    return(
      <View>
        <Text>消息中心</Text>
      </View>
    )
  }
}
export default MsgCenterList
