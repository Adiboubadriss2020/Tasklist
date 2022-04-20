import { useState } from 'react';
import { StyleSheet,FlatList, TextInput,KeyboardAvoidingView,Platform, Keyboard,TouchableWithoutFeedback  } from 'react-native';
import { Text, View } from '../components/Themed';
import ToDoItem from '../components/ToDoItem';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [title,setTitle]= useState('');
  const [todos, setTodos]= useState([
    {
      id:'1',
      content:'Buy people',
      isCompleted:false,
    },
    {
      id:'2',
      content:'Buy Choco',
      isCompleted:true,
    },
    {
      id:'3',
      content:'Kill yourself',
      isCompleted:false,
    }

  ])
  const creatNewItem = (atIndex: number)=>{
    const newTodos = [...todos];
    newTodos.splice(atIndex,0,{
      id:'4',
      content:"",
      isCompleted:false,
    })
    setTodos(newTodos);
    
  }
  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
    style={{flex:1}}>
<View style={styles.container}>
      <TextInput 
      placeholder={'Title...'}
      value={title}
      onChangeText={setTitle}
      style={styles.title}/>

      <FlatList
      data={todos}
      renderItem={({item, index})=> <ToDoItem todo={item} onSubmit={()=>creatNewItem(index+1)}/>}
      style={{width:"100%"}}
      />
         </View>
    </KeyboardAvoidingView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    width:'100%',
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginBottom:12    
  },
  
});
