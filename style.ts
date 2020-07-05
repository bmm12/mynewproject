import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    safearea:{
      marginLeft:8,
      marginRight:4
    },
    cards:{
      flexDirection:'row'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#fff',
    },
    namewinsingles:{
      color:'#ffff',
      fontWeight:'bold',
      fontSize:14,
      lineHeight:18,
      marginVertical:14,
      marginHorizontal:4
    },
    namesingles:{
      marginHorizontal:4,
      marginVertical:14,
    },
    doublenameview:{
      marginVertical:4,
      marginHorizontal:4
    },
    doublesnamewin:{
      color:'#ffff',
      fontWeight:'bold',
    },
    doublesname:{
      color:'black'
    },
    doubleswintie:{
      color:'#ffff',
      fontWeight:'bold',
      fontSize:10,
      lineHeight:14,
    },
    doubletie:{
      lineHeight:14, 
      fontSize:10,
      
    },
    score:{
      marginVertical:14,
      marginHorizontal:10
    },
    scorewin:{
      marginVertical:14,
      marginHorizontal:10,
      color:'#ffff',
      fontWeight:'bold',
      fontSize:14,
      lineHeight:18,
    },
    game:{
      color:'#639080',
      fontWeight:'bold'
    },
    date:{
      fontWeight:'bold',
      textAlign:'center'
    },
    singlesimages:{
      width:25,
      height:15,
      transform: [{ translateY: -60 }],
      marginVertical:45,
      borderWidth:3,
      borderRadius:16,
      
    },
    tieview:{
      flexDirection:'row',
      marginTop:7,
      marginLeft:6
    },
    playerimage:{
      width:33,
      height:49
    },
    doublesimages:{
      width:25,
      height:15,
      marginHorizontal:3,
      marginVertical:5      
    },
    
    doublebase:{
      lineHeight:30,
      fontSize:14,
    },
    doublewinbase:{
      lineHeight:30,
      fontSize:14,
      color:'#ffff',
      fontWeight:'bold',
    },

    scorecard:{
      borderWidth:0.25,
      borderColor:'black',
      backgroundColor:'#fff',
      marginHorizontal:1,
      marginVertical:1,
      width:34,
      height:50
    },

    playercard:{
      borderWidth:0.25,
      borderColor:'black',
      backgroundColor:'#fff',
      marginHorizontal:1,
      marginVertical:1,
      width:128,
      height:50
    }
  })

export default styles;