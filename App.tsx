import * as React from 'react';
import { Text, View,StyleSheet,ActivityIndicator ,SafeAreaView,ScrollView, Image} from 'react-native';
import Card from './screens/winScoreCard';
import Runner from './screens/runPlayerCard';
import Winner from './screens/winPlayerCard';
import Score from './screens/runScoreCard'
import { inputStyle } from './style';

const styles = StyleSheet.create(inputStyle);

  export interface Player{
      country:string;
      id:string;
      name:string;
      scores1:any;
      scores2:any;
      image?:string;
      flag?:string;
      seed?:string;
      profileURL?:string;
  }
  export interface PlayersData{
    team1:Player[];
    team2:Player[];
  }
  export interface State{
    isLoading:any,
    dataSource:any,
    dataSource2:any,
    dates:any
  }

  class App extends React.Component{
    state={
      isLoading:true,
      dataSource:[],
      dataSource2:[],
      dates:[]
    }  

    player: Player={
      country:'',
      id:'',
      name:'',
      scores1:[],
      scores2:[],
    
    }

  componentDidMount(){
    return fetch('https://private-10425-bmm12.apiary-mock.com/questions')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson[0].singles,
        dataSource2:responseJson[0].doubles
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  renderItems=():any=>{
  
    let choices:any=[];
    this.state.dataSource.map((val:any,key:any)=>{
    choices.push(
      <ScrollView style={{flexDirection:'column'}} key={key}>
          <View>
              <Text>{''}</Text>
              <Text style={styles.date}>{val.date}</Text>
              <Text>{''}</Text>
              <Text style={styles.game}>{val.game}</Text><Text>{val.title}</Text><Text>{val.time}</Text>
              <Text>{''}</Text>
          </View>
          <View key={key} style={{flexDirection:'row'}}  >
              <Score><Image source={{uri:val.image1}} style={{width:33,height:49}}/><Image source={{uri:val.cou1}} style={{width:25,height:15,translateY:-60,marginVertical:45,borderWidth:3,borderRadius:16}}/></Score>
              <Runner><Text style={styles.namesingles}>{val.players.name1}[{val.seed1}]</Text></Runner>
              <Score><Text style={styles.score}>{val.scores1.set1}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set2}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set3}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set4}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set5}</Text></Score>
          </View>
          <View style={{flexDirection:'row'}} >
            <Score><Image source={{uri:val.image2}} style={{width:33,height:49}}/><Image source={{uri:val.cou2}} style={{width:25,height:15,translateY:-60,marginVertical:45,borderWidth:3,borderRadius:16}}/></Score>
              <Winner><Text style={styles.namewinsingles}>{val.players.name2}[{val.seed2}]</Text></Winner>
              <Card><Text style={styles.scorewin}>{val.scores2.set1}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores2.set2}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores2.set3}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores2.set4}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores1.set5}</Text></Card>
          </View> 
      </ScrollView>
    )
  })
  return choices
  }
  renderItems1=():any=>{
    let choices1:any=[];
    this.state.dataSource2.map((val:any,key:any)=>{
    choices1.push(
      <ScrollView style={{flexDirection:'column'}} key={key}>
          <Text>{''}</Text>
          <Text style={styles.date}>{val.date}</Text>
          <Text>{''}</Text>
          <Text style={styles.game}>{val.game}</Text><Text>{val.title}</Text><Text>{val.time}</Text>
          <Text>{''}</Text>
          <View key={key} style={{flexDirection:'row'}} >
          <Score><Image source={{uri:val.image11}} style={{width:25,height:15,marginHorizontal:3,marginVertical:5}}/><Image source={{uri:val.image12}} style={{width:25,height:15,marginVertical:3,marginHorizontal:3}}/></Score>
              <Runner><View style={styles.namedoubles}><Text key={key} >{val.team11}</Text><Text>{val.team12}</Text></View></Runner>
              <Score><Text style={styles.score}>{val.scores1.set1}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set2}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set3}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set4}</Text></Score>
              <Score><Text style={styles.score}>{val.scores1.set5}</Text></Score>
          </View>
          <View style={{flexDirection:'row'}} >
          <Score><Image source={{uri:val.image21}} style={{width:25,height:15,marginHorizontal:3,marginVertical:5}}/><Image source={{uri:val.image22}} style={{width:25,height:15,marginVertical:3,marginHorizontal:3}}/></Score>
              <Winner >
                <View style={styles.doubleview}>
                <Text style={styles.doubleswin} >{val.team21}</Text>
                <Text style={styles.doubleswin}>{val.team22}</Text>
                </View>
              </Winner>
              <Card><Text style={styles.scorewin}>{val.scores2.set1}</Text></Card> 
              <Card><Text style={styles.scorewin}>{val.scores2.set2}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores2.set3}</Text></Card>
              <Card><Text style={styles.scorewin}>{val.scores2.set4}</Text></Card>
              <Card><Text style={styles.scorewin} >{val.scores2.set5}</Text></Card>
          </View> 
      </ScrollView>
    )
  })
  return choices1
  }
  render(){
          if(this.state.isLoading){
            return(
              <View style={styles.container}>
                <ActivityIndicator/>
              </View>
            )
            }
          else{
            return  <SafeAreaView style={{marginLeft:8,marginRight:4}}>
                      <ScrollView >
                          {this.renderItems()}
                          {this.renderItems1()}
                      </ScrollView>
                    </SafeAreaView>
              }
            }
  }

export default App