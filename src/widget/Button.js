import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native'
// import { withNavigation } from 'react-navigation';

type Props = {
  onPress: Function,
  disabled: boolean,
  style: ViewPropTypes.style,
  title: string,
  titleStyle: ViewPropTypes.style,
  activeOpacity: number
}

class DefaultButton extends PureComponent<Props> {

  constructor(props) {
    super(props)
  }

  static defaultProps = {
    onPress: () => {},
    disabled: false,
    activeOpacity: 0.8
  }

  render() {
    let {onPress, disabled, style, titleStyle, title, activeOpacity, children} = this.props
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
      >
        <View>
          <Text style={titleStyle}>
            {title}
          </Text>
          {children}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default DefaultButton