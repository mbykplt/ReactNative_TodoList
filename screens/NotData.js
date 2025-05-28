import { View, Text } from 'react-native'
import React from 'react'

const NotData = () => {
  return (
      <View style={{ marginTop: 20, alignItems: 'center', backgroundColor:'#fcba03', padding:10}}>
      <Text style={{fontSize:20, textAlign:'center'}}>Şu an için bir To-Do Bulunmuyor. Yukarıdan bir ToDO girip ekleyebilir, güncelleyebilir veya silebilirsiniz.</Text>
    </View>
  )
}

export default NotData