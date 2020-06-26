import * as React from 'react';
import { Text, View,StyleSheet,ActivityIndicator ,SafeAreaView,ScrollView, Image} from 'react-native';
import Card from './screens/winScoreCard';
import Runner from './screens/runPlayerCard';
import Winner from './screens/winPlayerCard';
import Score from './screens/runScoreCard'

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
          <View key={key} style={{flexDirection:'row'}} >
              <Score><Image source={{uri:val.image1}} style={{width:30,height:40}}/></Score>
              <Runner><Text key={key}>{val.players.name1}[{val.seed1}]</Text></Runner>
              <Score><Text>{val.scores1.set1}</Text></Score>
              <Score><Text>{val.scores1.set2}</Text></Score>
              <Score><Text>{val.scores1.set3}</Text></Score>
              <Score><Text>{val.scores1.set4}</Text></Score>
              <Score><Text>{val.scores1.set5}</Text></Score>
          </View>
          <View style={{flexDirection:'row'}} >
            <Score><Image source={{uri:val.image2}} style={{width:30,height:40}}/></Score>
              <Winner><Text style={styles.win}>{val.players.name2}[{val.seed2}]</Text></Winner>
              <Card><Text style={styles.win}>{val.scores2.set1}</Text></Card>
              <Card><Text style={styles.win}>{val.scores2.set2}</Text></Card>
              <Card><Text style={styles.win}>{val.scores2.set3}</Text></Card>
              <Card><Text style={styles.win}>{val.scores2.set4}</Text></Card>
              <Card><Text style={styles.win}>{val.scores1.set5}</Text></Card>
          </View> 
      </ScrollView>
    )
  })
  return choices
  }
  renderItems1=():any=>{
    console.log(this.state.dataSource)
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
          <Score><Image source={{uri:val.image1}} style={{width:25,height:15}}/><Image source={{uri:val.image2}} style={{width:25,height:15,marginVertical:3}}/></Score>
              <Runner><Text key={key}>{val.team11}</Text><Text>{val.team12}</Text></Runner>
              <Score><Text>{val.scores1.set1}</Text></Score>
              <Score><Text>{val.scores1.set2}</Text></Score>
              <Score><Text>{val.scores1.set3}</Text></Score>
              <Score><Text>{val.scores1.set4}</Text></Score>
              <Score><Text>{val.scores1.set5}</Text></Score>
          </View>
          <View style={{flexDirection:'row'}} >
          <Score><Image source={{uri:val.image1}} style={{width:25,height:15}}/><Image source={{uri:val.image2}} style={{width:25,height:15,marginVertical:3}}/></Score>
              <Winner >
                <Text style={styles.win}>{val.team21}</Text>
                <Text style={styles.win}>{val.team22}</Text>
              </Winner>
              <Card><Text style={styles.win}>{val.scores2.set1}</Text></Card> 
              <Card><Text style={styles.win}>{val.scores2.set2}</Text></Card>
              <Card><Text style={styles.win}>{val.scores2.set3}</Text></Card>
              <Card><Text style={styles.win}>{val.scores2.set4}</Text></Card>
              <Card><Text style={styles.win} >{val.scores2.set5}</Text></Card>
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

  const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  win:{
    color:'#ffff',
    fontWeight:'bold',
    fontSize:14,
    lineHeight:18
  },
  lose:{
    color:'#ffff',
    fontSize:14,
    lineHeight:18
  },
  game:{
    color:'#639080',
    fontWeight:'bold'
  },
  date:{
    fontWeight:'bold',
    textAlign:'center'
  }
});

export default App