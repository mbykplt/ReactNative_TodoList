import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NotData from './screens/NotData';

export default function App() {
  const [inputTodo, newInputTodo] = useState('');
  const [todo, newTodo] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const addTodo = () => {
    if (inputTodo.trim() == '') {
      return;
    }
    if (editMode) {
      updateTodo();
      return;
    }
    newTodo([
      ...todo,
      {
        name: inputTodo
      }
    ])
    newInputTodo('');
  }



  const startEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    newInputTodo(todo[index].name);
  };


  const updateTodo = () => {
    const updatedTodos = [...todo];
    updatedTodos[editIndex] = { name: inputTodo };
    newTodo(updatedTodos);
    setEditMode(false);
    setEditIndex(null);
    newInputTodo('');
  }

  const deleteTodo = (id) => {
    const newList = [...todo];
    newList.splice(id, 1);
    newTodo(newList);
  }

  return (
    <View style={{ marginTop: 25, padding: 10, flex: 1 }}>
      <View style={{ backgroundColor: 'purple', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 25 }}>
        <TextInput placeholder='Todo Giriniz' value={inputTodo}
          onChangeText={newInputTodo} style={{ backgroundColor: 'white', flex: 2 / 3, borderRadius: 15 }} />
        <Pressable onPress={addTodo} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}><Text style={{ color: 'white' }}>{editMode ? 'Güncelle' : 'Ekle'}</Text></Pressable>
      </View>
      <ScrollView>
        {todo.length !== 0 ?
          todo.
          slice().
          reverse().
          map((item, index) => {
            return (
              <View style={{ borderColor: 'black', borderWidth: 1, padding: 15, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} key={index}>
                <View style={{ flex: 2 / 3, flexDirection: 'row' }}>
                  <Text>{item.name}</Text>
                </View>
                <Pressable onPress={() => { startEdit(todo.length-1-index) }} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}><Text style={{ color: 'white' }}>Güncelle</Text></Pressable>
                <Pressable onPress={() => { deleteTodo(todo.length-1-index) }} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}><Text style={{ color: 'white' }}>Sil</Text></Pressable>
              </View>
            )
          })
          : <NotData/>
        }
      </ScrollView>

    </View>
  )
}