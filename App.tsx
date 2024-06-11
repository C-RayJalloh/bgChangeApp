import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [containerBackground, setContainerBackground] = useState("#ffffff");
  
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let containerColor = "#";
   

    for (let i = 0; i < 6; i++) {
      containerColor += hexRange[Math.floor(Math.random() * 16)];
    }

    
    setContainerBackground(containerColor);
  
  }

  return (
    <>
    <StatusBar backgroundColor={containerBackground}/>
    <View style={[styles.container, {backgroundColor: containerBackground}] }>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#e31616",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default App;
