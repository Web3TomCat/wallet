import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Clipboard,
} from 'react-native'

import { pubS,DetailNavigatorStyle } from '../../styles/'
import { setScaleText, scaleSize } from '../../utils/adapter'
import { TextInputComponent,Btn } from '../../components/'
import Modal from 'react-native-modal'
import Toast from 'react-native-root-toast'
class Collection extends Component{
  constructor(props){
    super(props)
    this.state={
        visible: true,
        payTotalVal: '',
        addressText: '0x121212121212121'
    }

  }

  componentWillUnmount(){
    this.getContent()

  }
  async getContent(){
    let a= await Clipboard.getString()
  }

  onChangePayTotal = (val) => {
    this.setState({
      payTotalVal: val,
    })
  }

  onPressCopyBtn = () => {
      Clipboard.setString(this.state.addressText)
      let t1 = Toast.show('复制地址成功~')
      setTimeout(function () {
          Toast.hide(t1)
      }, 3000)
  }

  onHide = () => {
    this.setState({
      visible: false
    })
  }
  backupBtn = () => {
    this.setState({
      visible: false
    })
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
    const { payTotalVal,visible } = this.state
    return(
      <View style={[pubS.container,{paddingTop: scaleSize(35)}]}>
        <TextInputComponent
          placeholder={'请输入收款金额(选填)'}
          value={payTotalVal}
          onChangeText={this.onChangePayTotal}
        >
        </TextInputComponent>
        <View style={{height: scaleSize(400),width: scaleSize(400),marginTop: scaleSize(125),borderWidth:1,alignSelf:'center'}}>

        </View>
        <Text style={[pubS.font24_2,{marginTop: scaleSize(19),alignSelf:'center'}]}>{this.state.addressText}</Text>
        <Btn
          btnPress={this.onPressCopyBtn}
          btnText={'复制收款地址'}
          btnMarginTop={scaleSize(100)}
        />


      <Modal
        isVisible={visible}
        onBackButtonPress={this.onHide}
        onBackdropPress={this.onHide}
        style={styles.modalView}
        backdropOpacity={.8}
      >
        <Image source={require('../../images/xhdpi/img_collectionnobackup.png')} style={styles.modalImageStyle}/>
        <View style={[{alignItems:'center'}]}>
            <View style={styles.blueView}>
                <Text style={[pubS.font36_3,{marginTop: scaleSize(32)}]}>请先备份账户</Text>
                <Text style={[pubS.font22_2,{marginTop: scaleSize(27),width: '75%'}]} numberOfLines={9}>
                    区块链账户不同于传统网站账户，它是基于密
                    码学的去中心化账户系统。你必须自己保管好
                    账户的私钥和交易密码，任何意外发生将会导
                    致资产丢失。我们建议先做双重备份，再打入
                    小额测试，最后开始愉快使用。
                </Text>
            </View>
            <View style={styles.whileView}>
                <Text style={[pubS.font30_2,{marginTop: scaleSize(50)}]}>{`--  备份助记词 --`}</Text>
                <Text style={pubS.font24_2}>丢失账户或密码时，可帮助恢复账户</Text>
                <Text style={[pubS.font30_2,{marginTop: scaleSize(46)}]}>{`--  备份Keystore文件  --`}</Text>
                <Text style={pubS.font24_2}>官方账户格式，交易密码保护的私钥文件</Text>
                <TouchableOpacity activeOpacity={.7} onPress={this.backupBtn} style={[styles.backupBtnStyle,pubS.center]}>
                  <Text style={pubS.font28_2}>立即备份</Text>
                </TouchableOpacity>
            </View>
      </View>
      </Modal>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  modalImageStyle:{
    height: scaleSize(121),
    width: scaleSize(107),
    zIndex:999,
    position:'absolute',
    top:0,
    left: scaleSize(226.5),
  },
  backupBtnStyle:{
    height: scaleSize(70),
    width: scaleSize(500),
    borderWidth: 1,
    borderColor: '#2B8AFF',
    borderRadius: scaleSize(35),
    marginTop: scaleSize(30),
  },
  whileView:{
      height: scaleSize(390),
      backgroundColor:'#fff',
      width:'100%',
      alignItems:'center',
      borderBottomLeftRadius :scaleSize(10),
      borderBottomRightRadius :scaleSize(10),
  },
  blueView: {
    height: scaleSize(325),
    backgroundColor:'#2B8AFF',
    width:'100%',
    alignItems:'center',
    borderTopLeftRadius: scaleSize(10),
    borderTopRightRadius: scaleSize(10),
    marginTop: scaleSize(84)
  },
  modalView:{
    width: scaleSize(560),
    height: scaleSize(805),
    position: 'absolute',
    top: scaleSize(59),
    alignSelf: 'center',
    backgroundColor:'transparent',
    // borderColor:'#fff',
    // borderWidth:1,

  }
})
export default Collection
