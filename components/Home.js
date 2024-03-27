import { useState } from 'react'
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import { 
    NBR_OF_DICES,
     NBR_OF_THROWS,
      MIN_SPOT, MAX_SPOT,
       BONUS_POINTS_LIMIT,
        BONUS_POINTS  } from '../constants/Game';

 import styles from '../style/style';

export default function Home({navigation}) {

const [playerName, setPlayerName ] = useState ('');
const [hasPlayerName, setHasplayerName] = useState (false);

const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasplayerName(true); 
      Keyboard.dismiss();
    }
}



  return (
    <>
    <Header />
    <View >

      <MaterialCommunityIcons
        name='information'
        size={90}
        color='steelblue'
        style={styles.icon1}
      />

     </View>

 <View style={styles.text1}>
      {!hasPlayerName ?
    <>

  
     <Text style={styles.text2}> For scoreboard enter your name...</Text>
     <TextInput 
      
       onChangeText={setPlayerName}
       autoFocus={true}
       style={styles.text3}
     />

      <Pressable 
      style={styles.text4}
      onPress={() => handlePlayerName(playerName)}>
        <Text>OK</Text>
      </Pressable>
      </>
      :
      
      <>
      <Text style={styles.text5} >Rules of the game</Text>
      <Text multiline="true"
      style={styles.text6}
      >
      THE GAME: Upper section of the classic Yahtzee 
      dice game. You have {NBR_OF_DICES} dices and 
      for the every dice you have 3     
      throws. After each throw you can keep dices in 
      order to get same dice spot counts as many as 
      possible. In the end of the turn you must select 
      your points from {MIN_SPOT} to {MAX_SPOT}. 
      Game ends when all points have been selected. 
      The order for selecting those is free.

      </Text>

      <Text style={styles.text7}>Good luck, {playerName} !</Text>

     <Pressable
     style={styles.text8}
      onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
       <Text>PLAY</Text>

     </Pressable>
     </>
      }

    </View>
    <Footer />
    </>
  )
}