import * as React from 'react';
import {
      View,
      ActivityIndicator,
      SafeAreaView,
      ScrollView, 
    }from 'react-native';
import styles from './style';
import SingleCard from './singlecard';

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
    export interface State{
    isLoading:any,
    dataSource:any,
  }

   class App extends React.Component{
    state={
      isLoading:true,
      dataSource:[],
    }  



  componentDidMount(){
    return fetch('https://private-10425-bmm12.apiary-mock.com/questions')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson[0].singles.concat(responseJson[0].doubles),
        })

    })
    .catch((error)=>{
      console.log(error)
    })
    
  }
 
  
  renderItems=():any=>{
    var item = this.state.dataSource.sort((a:Object,b:Object)=>(Date.parse(a.date) > Date.parse(b.date)) ? -1:1)
    let choices:any=[];
    item.map((val:any,key:any)=>{
      if(val.win=='2'){
    choices.push(
        <SingleCard data={val}  key={key}/>
    )}
    else{
      choices.push(
        <SingleCard data={val} key={key} />
      )}
    })
  return choices
  }


  render(){

          if(this.state.isLoading){
            return(
              <View style={styles.container}>
                <ActivityIndicator size='large'/>
              </View>
            )
            }
          else{
            
            return  <SafeAreaView style={styles.safearea}>
                      <ScrollView >
                          {this.renderItems()}
                      </ScrollView>
                    </SafeAreaView>
              }
            }
  }

export default App