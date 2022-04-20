import { View, TextInput } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import Checkbox from '../Checkbox'
interface todopros{
    todo:{
    id: string,
    content:string,
    isCompleted: boolean,
    }
    onSubmit: ()=> void,

}
const ToDoItem = ({todo,onSubmit}: todopros) => {
  const[value,setValue]=useState(false)
  const[content,setContent]=useState('');

  const input = useRef(null)
  useEffect(()=>{
    if(!todo) return 
    setValue(todo.isCompleted)
    setContent(todo.content)
  },[todo])
  useEffect(()=>{
    if(input.current){
    input.current.focus();
    }
  },[input])

  const onKeyPress = ({nativeEvent})=> 
  {
    if(nativeEvent.key === 'Backspace' && content===""){
      console.log(nativeEvent.key)
      console.warn("Deleted");
      
    }
  }
  return (
      <View style={{flexDirection:'row', alignItems:'center', marginVertical:3}}>
        <Checkbox isChecked={value} onPress={ ()=>{setValue(!value)}}/>
      <TextInput 
      ref={input}
      value={content}
      onChangeText={setContent}
      style={{
        flex:1,
        fontSize:18,
        color:"white",
        marginLeft:12
      }}
      multiline
      onSubmitEditing={onSubmit}
      blurOnSubmit
      onKeyPress={onKeyPress}

      />
    
      </View>

  )
}

export default ToDoItem