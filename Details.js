import React from 'react'
import { View ,Text, Button} from 'react-native';

const Details = ({props})=>{
    return(
        <View>
            <Text>
               Hi welcome to details page
               </Text>
               <Text> {props.data.id}  </Text>
               <Text>  {props.data.name} </Text>
               <Text> {props.data.description} </Text>
               <Text>  {props.data.code} </Text>
               <Text>  {props.data.type} </Text>
               <Text> {props.data.status} </Text>

            
        </View>
    )
}