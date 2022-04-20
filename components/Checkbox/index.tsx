import { View, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Checkboxprops{
    isChecked: boolean,
    onPress:()=>void
}
const Checkbox = (props: Checkboxprops) => {
    const {onPress, isChecked}= props;
    const name = props.isChecked ? "checkbox-marked-outline" : "checkbox-blank-outline"
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons name={name} size={24} color="white" />
    </Pressable>
  )
}

export default Checkbox