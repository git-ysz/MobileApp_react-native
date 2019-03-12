import React, { Component } from 'react';
import { View, Text, Icon, Button, Col, Row, Grid } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import { RNCamera } from "react-native-camera"
import CameraItem from '../../component/CameraItem';
import { basic, style } from '../../config';

// 摄像头布局
export default class CameraPage extends Component {
  static navigationOptions = ({navigation}) => ({
    tabBarVisible: false,
    // gesturesEnabled: true,
    tabBarIcon: ({focused, tintColor}) => (
      <CameraItem
        tintColor={tintColor}
        focused={focused}
        icon={"camera"}
        onPress={() => {
          navigation.navigate("CameraPage")
          return false
        }}
      />
    ),
    header: null,
    // 禁掉TabNavigator跳转方式
    tabBarOnPress: ({previousScene,scene,jumpToIndex}) => {
      // console.log(previousScene,scene)
      // jumpToIndex(scene.index)
      navigation.navigate("CameraPage")
      return false
    },
  })
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }

  _takePicture = async () => {
    if (!this.camera) {
      console.log('相机没有准备好')
      return false;
    }
    const options = {
      quality: 0.6, //图片质量
      jpegQuality: 50,
      base64: true,
      fixOrientation: true, //解决安卓图片被旋转问题
      // doNotSave: true, //不缓存
      pauseAfterCapture: true, //拍照后暂停
    };
    const data = await this.camera.takePictureAsync(options)
    this._sendPicture(data)
    console.log(data)
  }
  // 请求数据
  _sendPicture = ()=> {

    setTimeout(() => {
      this._resetCamera()
    }, 1500)
  }
  // 数据返回后恢复摄像头
  _resetCamera = ()=> {
    this.camera.resumePreview() //恢复摄像头预览
  }
  
  render() {
    return (
      <View style={[styles.container]}>
        {/* <StatusBar 
          hidden={true}
        /> */}
        <RNCamera
          ref={(camera) => {
            this.camera = camera
          }}
          onCameraReady={() => {
            console.log("相机准备好了！")
          }}
          autoFocus="on"
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }}
          type={RNCamera.Constants.Type.back} // 前后摄像头选择
          flashMode={RNCamera.Constants.FlashMode.auto} // 闪光灯模式
          permissionDialogTitle={'允许使用相机'} //申请权限标题
          permissionDialogMessage={'我们需要您的许可才能使用您的手机拍照'} //申请权限内容
          // onGoogleVisionBarcodesDetected={({ barcodes }) => { // 条形码检测
          //   console.log(barcodes)
          // }}
          // onTextRecognized={(text) => { //文字识别
          //   console.log(text)
          // }}
        />
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }}>

          <Button rounded info onPress={() => {
            this.props.navigation.goBack()
          }}>
            <Icon name="md-arrow-round-back" />
          </Button>
          <Button rounded info onPress={() => {
            this._takePicture()
          }}>
            <Icon name="camera" />
          </Button>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    // position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
});