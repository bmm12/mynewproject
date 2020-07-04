import * as React from 'react';
import {
      Text, 
      View,
      ScrollView, 
      Image 
    }from 'react-native';
import Card from './screens/winScoreCard';
import Runner from './screens/runPlayerCard';
import Score from './screens/runScoreCard'
import styles from './style';


export default function ScoreCards(props:any){
    return (
        <ScrollView style={styles.colcards}>
          <Text>{''}</Text>
          <Text style={styles.date}>{props.data.date}</Text>
          <Text>{''}</Text>
          <Text style={styles.game}>{props.data.game}</Text>
          <Text>{props.data.title}</Text><Text>{props.data.time}</Text>
          <Text>{''}</Text>
          <View style={styles.cards} >
          <Score>
            <Image source={{uri:props.data.image11}} style={styles.doublesimages}/>
            <Image source={{uri:props.data.image12}} style={styles.doublesimages}/>
          </Score>
              <Runner>
              <View style={styles.playercard1}>
                <View style={styles.doubleview}>
                  <Text style={styles.doublesnamewin}>{props.data.team11}</Text>
                  <Text style={styles.doublesnamewin}>{props.data.team12}</Text>
                </View>
                </View>
              </Runner>
              <Card>
                    <View style={styles.tieview}>
                        <Text style={styles.doubleswin}>{props.data.scores1.set1===''?'-':props.data.scores1.set1}</Text>
                        <Text style={styles.doubleswintie}>{props.data.scores1.tie1}</Text>
                        
                    </View>
              </Card>
              <Card>
                    <View style={styles.tieview}>
                        <Text style={styles.doubleswin}>{props.data.scores1.set2===''?'-':props.data.scores1.set2}</Text>
                        <Text style={styles.doubleswintie}>{props.data.scores1.tie2}</Text>
                        
                    </View>
              </Card>
              <Card>
                    <View style={styles.tieview}>
                        <Text style={styles.doubleswin}>{props.data.scores1.set3===''?'-':props.data.scores1.set3}</Text>
                        <Text style={styles.doubleswintie}>{props.data.scores1.tie3}</Text>
                        
                    </View>
              </Card>
              <Card>
                    <View style={styles.tieview}>
                        <Text style={styles.doubleswin}>{props.data.scores1.set4===''?'-':props.data.scores1.set4}</Text>
                        <Text style={styles.doubleswintie}>{props.data.scores1.tie4}</Text>
                        
                    </View>
              </Card>
              <Card>
                    <View style={styles.tieview}>
                        <Text style={styles.doubleswin}>{props.data.scores1.set5===''?'-':props.data.scores1.set5}</Text>
                        <Text style={styles.doubleswintie}>{props.data.scores1.tie5}</Text>
                        
                    </View>
              </Card>
          </View>
          <View style={styles.cards} >
          <Score>
            <Image source={{uri:props.data.image21}} style={styles.doublesimages}/>
            <Image source={{uri:props.data.image22}} style={styles.doublesimages}/>
          </Score>
              <Runner >
                  <View style={styles.playercard2}>
                <View style={styles.namedoubles}>
                <Text >{props.data.team21}</Text>
                <Text >{props.data.team22}</Text>
                </View>
                </View>
              </Runner>
              <Score>
                    <View style={styles.tieview}>
                        <Text style={styles.doublebase}>{props.data.scores2.set1===''?'-':props.data.scores2.set1}</Text>
                        <Text style={styles.doubletie}>{props.data.scores2.tie1}</Text>
                        
                    </View>
              </Score>
              <Score>
                    <View style={styles.tieview}>
                        <Text style={styles.doublebase}>{props.data.scores2.set2===''?'-':props.data.scores2.set2}</Text>
                        <Text style={styles.doubletie}>{props.data.scores2.tie2}</Text>
                        
                    </View>
              </Score>
              <Score>
                    <View style={styles.tieview}>
                        <Text style={styles.doublebase}>{props.data.scores2.set3===''?'-':props.data.scores2.set3}</Text>
                        <Text style={styles.doubletie}>{props.data.scores2.tie3}</Text>
                        
                    </View>
              </Score>
              <Score>
                    <View style={styles.tieview}>
                        <Text style={styles.doublebase}>{props.data.scores2.set4===''?'-':props.data.scores2.set4}</Text>
                        <Text style={styles.doubletie}>{props.data.scores2.tie4}</Text>
                        
                    </View>
              </Score>
              <Score>
                    <View style={styles.tieview}>
                        <Text style={styles.doublebase}>{props.data.scores2.set5===''?'-':props.data.scores2.set5}</Text>
                        <Text style={styles.doubletie}>{props.data.scores2.tie5}</Text>
                        
                    </View>
              </Score>
          </View> 
      </ScrollView>
    )
}
