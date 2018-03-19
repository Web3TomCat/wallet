import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'

import { pubS,DetailNavigatorStyle } from '../../styles/'
import { setScaleText, scaleSize } from '../../utils/adapter'

class ScanQrCode extends Component{
  render(){
    return(
      <View>
        <Text>ScanQrCode</Text>
      </View>
    )
  }
}
export default ScanQrCode
