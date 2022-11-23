import { Text } from 'react-native'
import React from 'react'

const TextV = (props) => {
  return (
    <Text style={{color:"white"}}>
        {props.children}
    </Text>

    
  )
}

export default TextV