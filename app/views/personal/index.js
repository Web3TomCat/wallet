
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { pubS,DetailNavigatorStyle } from '../../styles/'
import { setScaleText, scaleSize } from '../../utils/adapter'

class ArrowToDetail extends Component {
  render(){
    const { arrowText, arrowIcon, arrowOnPress, } = this.props
    return(
      <TouchableOpacity activeOpacity={.7} onPress={arrowOnPress} style={[styles.arrowViewStyle,pubS.rowCenterJus,pubS.paddingRow40,pubS.bottomStyle]}>
        <View style={pubS.rowCenter}>
          <Image source={arrowIcon} style={styles.arrowIconStyle}/>
          <Text style={[pubS.font32_1,{marginLeft: scaleSize(31)}]}>{arrowText}</Text>
        </View>
        <Image source={require('../../images/xhdpi/btn_ico_payment_select_def.png')} style={{width: scaleSize(16),height: scaleSize(30)}}/>
      </TouchableOpacity>
    )
  }
}
class Personal extends Component{



  toAccountManage = () => {
    this.props.navigator.push({
      screen: 'account_manage',
      title:'账户管理',
      navigatorStyle: DetailNavigatorStyle,
    })
  }

  toHelpCenter = () => {
    this.props.navigator.push({
      screen: 'help_center',
      title:'帮助中心',
      navigatorStyle: DetailNavigatorStyle,
    })
  }

  toContactService = () => {
    this.props.navigator.push({
      screen: 'contact_service',
      title:'联系客服',
      navigatorStyle: DetailNavigatorStyle,
    })
  }

  render(){
    return(
      <View style={[pubS.container,{backgroundColor:'#F5F7FB',}]}>
          <Image source={require('../../images/xhdpi/bg_personalcenter.png')} style={{height: scaleSize(300),width: scaleSize(750)}}/>
          <ArrowToDetail
            arrowText={'账户管理'}
            arrowIcon={require('../../images/xhdpi/ico_personalcenter_accountmanagement_def.png')}
            arrowOnPress={this.toAccountManage}
          />
          <View style={{marginTop:scaleSize(40)}}>
            <ArrowToDetail
              arrowText={'帮助中心'}
              arrowIcon={require('../../images/xhdpi/ico_personalcenter_helpcenter_def.png')}
              arrowOnPress={this.toHelpCenter}
            />
            <ArrowToDetail
              arrowText={'联系客服'}
              arrowIcon={require('../../images/xhdpi/ico_personalcenter_contact_def.png')}
              arrowOnPress={this.toContactService}
            />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  arrowIconStyle: {
    height: scaleSize(44),
    width: scaleSize(48),
  },
  arrowViewStyle: {
    height: scaleSize(120),
    width: scaleSize(750),
    backgroundColor:'#fff',
  },
})
export default Personal
