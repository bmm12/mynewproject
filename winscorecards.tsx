import * as React from 'react';
import {
      Text, 
      View,
      StyleSheet,
      ScrollView, 
      Image 
    }from 'react-native';
import Card from './screens/winScoreCard';
import Runner from './screens/runPlayerCard';
import Score from './screens/runScoreCard'
import styles from './style';


export default function WinScoreCards(props:any){
    return (
    <ScrollView style={styles.colcards} >
          <View>
              <Text>{''}</Text>
              <Text style={styles.date}>{props.data.date}</Text>
              <Text>{''}</Text>
              <Text style={styles.game}>{props.data.game}</Text>
              <Text>{props.data.title}</Text><Text>{props.data.time}</Text>
              <Text>{''}</Text>
          </View>
          <View style={styles.cards}  >
              <Score>
                <Image source={{uri:props.data.image1}} style={styles.playerimage}/>
                <Image source={{uri:props.data.cou1}} style={styles.singlesimages}/>
              </Score>
              <Runner>
              <View style={styles.playercard1}>
                <Text style={styles.namewinsingles}>{props.data.players.name1}[{props.data.seed1}]</Text>
                </View>
              </Runner>
              <Card><Text style={styles.scorewin}>{props.data.scores1.set1===''?'-':props.data.scores1.set1}</Text></Card>
              <Card><Text style={styles.scorewin}>{props.data.scores1.set2===''?'-':props.data.scores1.set2}</Text></Card>
              <Card><Text style={styles.scorewin}>{props.data.scores1.set3===''?'-':props.data.scores1.set3}</Text></Card>
              <Card><Text style={styles.scorewin}>{props.data.scores1.set4===''?'-':props.data.scores1.set4}</Text></Card>
              <Card><Text style={styles.scorewin}>{props.data.scores1.set5===''?'-':props.data.scores1.set5}</Text></Card>
          </View>
          <View style={styles.cards} >
            <Score>
              <Image source={{uri:props.data.image2}} style={styles.playerimage}/>
              <Image source={{uri:props.data.cou2}} style={styles.singlesimages}/>
            </Score>
              <Runner>
                  <View style={styles.playercard2}>
                <Text style={styles.namesingles}>{props.data.players.name2}[{props.data.seed2}]</Text>
                </View>
              </Runner>
              <Score><Text style={styles.score}>{props.data.scores2.set1===''?'-':props.data.scores2.set1}</Text></Score>
              <Score><Text style={styles.score}>{props.data.scores2.set2===''?'-':props.data.scores2.set2}</Text></Score>
              <Score><Text style={styles.score}>{props.data.scores2.set3===''?'-':props.data.scores2.set3}</Text></Score>
              <Score><Text style={styles.score}>{props.data.scores2.set4===''?'-':props.data.scores2.set4}</Text></Score>
              <Score><Text style={styles.score}>{props.data.scores2.set5===''?'-':props.data.scores2.set5}</Text></Score>
          </View> 
      </ScrollView>
    )
}
