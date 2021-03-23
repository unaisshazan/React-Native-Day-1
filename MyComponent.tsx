import React from 'react'
import {Button ,View,Image, ScrollView} from 'react-native'
import  icon from './assets/icon.png';

export default function MyComponent() {
    return (
 
         
         <View >
             <ScrollView>
         <Button title="unais"> </Button> 
    
      <Image
       
        source={icon} style={{height:200 ,width:300}}
      />
      <Image
       
        source={{
          uri: 'https://images.ctfassets.net/pmwy92zqo6ar/2NZpyQZzP2vH3n4UovjH2j/399c0e952836c36906072801a5919aa0/image_2021-01-30_214149.png',
        }}
      />
    </ScrollView>
    </View>
    
    
    );
}
