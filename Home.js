import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import { View ,Text, Button} from 'react-native';
import Details from './Details';

const Home = ({ navigation }) => {

  const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState([]);


const handleSearch = (event) => {
  let value = event.target.value.toLowerCase();
  let result = [];
  console.log(value);
  result = allData.filter((data) => {
  return data.code.search(value) !== -1;
  
  });
  setFilteredData(result);
  }

  
  useEffect(() => {
    axios('https://hungry-skinny-cappelletti.glitch.me/tenants')
    .then(response => {
    console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

    return(
      <View >
      <View style={{ margin: '0 auto', marginTop: '10%' }}>
      <Text>Search:</Text>
      <input type="text" onChange={(event) =>handleSearch(event)} />
      </View>
      <View style={{padding:10}}>
      {filteredData.map((value,index)=>{
      return(  
      <View key={value.id}>
      <View style={styles}>
      {value.code}
      </View>
      </View>
      )
      })}
      </View>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('details',{data:value})}
      />
      </View>
    )
  
  
} 
export default Home;


const styles = {
  display:'inline',
  width:'30%',
  height:50,
  float:'left',
  padding:5,
  border:'0.5px solid black',
  marginBottom:10,
  marginRight:10
  }