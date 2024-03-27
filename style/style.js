import { StyleSheet } from 'react-native';

export default  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 400,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },

  icon1: {
    position: 'absolute', 
    top: 14, 
    left: 140,

  }, 

  text1: {
    
    position: 'absolute', 
    top: 250, 
    left: 0,
    

  }, 

  text2: {
    fontSize: 20, 
    marginLeft: 20,
    
  },

  text3: {
    fontSize: 20, 
    marginLeft: 20,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    
  }, 

  text4: {
    fontSize: 20, 
    marginLeft: 20,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8, 
    alignItems: 'center', 
    backgroundColor: '#9BDDFF', 
    
  }, 




});