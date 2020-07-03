import * as React from 'react';
import {
      View,
      StyleSheet,
      ActivityIndicator,
      SafeAreaView,
      ScrollView, 
    }from 'react-native';
import ScoreCards from './scorecards';
import WinScoreCards from './winscorecards';
import DoublesWinScoreCards from './doubleswinscorecard';
import DoublesScoreCards from './doublescorecard';
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
  }

  class App extends React.Component{
    state={
      isLoading:true,
      dataSource:[],
      dataSource2:[],
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
        dataSource2:responseJson[0].doubles,
        })

    })
    .catch((error)=>{
      console.log(error)
    })
    
  }
 
  
  renderItems=():any=>{
  
    let choices:any=[];
    this.state.dataSource.map((val:any,key:any)=>{
      if(val.win=='2'){
    choices.push(
      <ScoreCards data={val}  key={key}/>
    )}
    else{
      choices.push(
        <WinScoreCards data={val} key={key} />
      )}
    })
  return choices
  }

  renderItems1=():any=>{
    let choices1:any=[];
    this.state.dataSource2.map((val:any,key:any)=>{
      if(val.winteam=='team22'){
    choices1.push(
      <DoublesWinScoreCards data={val} key={key}/>
    )}
    else{
    choices1.push(
      <DoublesScoreCards data={val} key={key} />
    )}
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
            
            return  <SafeAreaView style={styles.safearea}>
                      <ScrollView >
                          {this.renderItems()}
                          {this.renderItems1()}
                      </ScrollView>
                    </SafeAreaView>
              }
            }
  }

export default App