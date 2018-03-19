import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native'

import { pubS,DetailNavigatorStyle } from '../../styles/'
import { setScaleText, scaleSize } from '../../utils/adapter'
import { TextInputComponent,Btn } from '../../components/'
class CreateAccount extends Component{
  constructor(props){
      super(props)
      this.state = {
        userNmaeVal: '',
        psdVal: '',
        repeadPsdVal: '',
        promptVal: '',
      }
  }
  onChangeUseNameText = (val) => {
    this.setState({
      userNmaeVal: val
    })
  }
  onPressBtn = () => {
    this.props.navigator.push({
      screen: 'create_account_success',
      title: '',
      navigatorStyle: DetailNavigatorStyle,
    })
  }
  onChangPsdText = (val) => {
    this.setState({
      psdVal: val,
    })
  }
  onChangeRepeatText = (val) => {
    this.setState({
      repeadPsdVal: val,
    })
  }
  onChangePromptText = (val) => {
    this.setState({
      promptVal: val,
    })
  }
  render(){
    const { userNmaeVal, psdVal, repeadPsdVal, promptVal, } = this.state
    return(
      <View style={pubS.container}>
        <View style={[styles.warningView,pubS.paddingRow_24]}>
          <Text style={pubS.font22_1}>
            不存储用户密码，无法提供找回或重置功能，密码必须要自己备份好，密码用于加密保护私钥，强度也非常重要。
          </Text>
        </View>
        <View style={{paddingTop:10,}}>
          <TextInputComponent
            placeholder={'用户名'}
            value={userNmaeVal}
            onChangeText={this.onChangeUseNameText}
            warningText={'请输入账户名'}
          />
          <TextInputComponent
            placeholder={'密码'}
            value={psdVal}
            onChangeText={this.onChangPsdText}
            secureTextEntry={true}
          />
          <TextInputComponent
            placeholder={'重复密码'}
            value={repeadPsdVal}
            onChangeText={this.onChangeRepeatText}
            secureTextEntry={true}
          />
          <TextInputComponent
            placeholder={'密码提示信息(可不填)'}
            value={promptVal}
            onChangeText={this.onChangePromptText}
          />
          <Btn
            btnMarginTop={scaleSize(60)}
            btnPress={this.onPressBtn}
            btnText={'创建账户'}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  warningView:{
    height: scaleSize(110),
    backgroundColor:'#FFE186',
    justifyContent:'center',

  },
})
export default CreateAccount
