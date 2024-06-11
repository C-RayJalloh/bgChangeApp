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
  const [cardBackground, setCardBackground] = useState(["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]);

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let containerColor = "#";
    let cardColors = [];

    for (let i = 0; i < 6; i++) {
      containerColor += hexRange[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      let cardColor = "#";
      for (let j = 0; j < 6; j++) {
        cardColor += hexRange[Math.floor(Math.random() * 16)];
      }
      cardColors.push(cardColor);
    }
    
    setContainerBackground(containerColor);
    setCardBackground(cardColors);
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
      <View style={styles.gridLayout}>
        {cardBackground.map((color, index) => (
          <View key={index} style={[styles.card1, {backgroundColor: color, margin: 5}]}></View>
        ))}
      </View>
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
  card1:{
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  gridLayout: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
