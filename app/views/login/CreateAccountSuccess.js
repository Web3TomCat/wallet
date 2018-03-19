

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
import { Btn } from '../../components/'
class CreateAccountSuccess extends Component{
  onPressBackUp = () => {
    this.props.navigator.push({
      screen: 'back_up_account',
      title: 'username',
      navigatorStyle: DetailNavigatorStyle,
      navigatorButtons: {
        rightButtons: [
          {
            title: '保存',
            id: 'save_back_up_info'
          }
        ]
      }
    })
  }
  render(){
    return(
      <View style={pubS.container}>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../images/xhdpi/ico_createaccount_succeed.png')} style={styles.imgStyle}/>
          <Text style={[pubS.font36_1,{marginTop: scaleSize(70)}]}>新账户创建成功</Text>
          <Text style={[pubS.font26_2,{width:'90%',marginTop: scaleSize(27),textAlign:'center',lineHeight:25,}]}>强烈建议您在使用前做好备份，导出助记词或keystore存储到安全的地方，然后开始尝试转入小额资产启用。</Text>
          <Btn
            btnMarginTop={scaleSize(97)}
            btnPress={this.onPressBackUp}
            btnText={'备份账户'}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imgStyle:{
    width: scaleSize(150),
    height: scaleSize(150),
    alignSelf:'center',
    marginTop: scaleSize(100),

  },
})
export default CreateAccountSuccess
