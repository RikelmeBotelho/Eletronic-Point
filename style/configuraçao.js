import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  edit: {
    width: '92%',
    height: 45,
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 100,
    paddingLeft: 15,
    fontSize: 16,
    color: 'grey'
  },
  fixed: {
    width: '50%',
    height: 45,
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 100,
    paddingLeft: 15,
    fontSize: 16,
    color: 'grey'
  },
  fixed1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  botao: {
    marginTop: 5,
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 50 ,
    width: 100,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButtonSalvar: {

    width: 100,
    borderWidth: 2,
    borderColor: 'orange',
    textAlign: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 25,
    color: 'white',
    fontSize: 15
  },

  profileImageContainer: {
    backgroundColor: 'orange',
    borderRadius: 100,
    padding: 5,
    position: 'fixed',
    marginBottom: -15,
    top: -50,
   
  },
  profileImage: {
    height: 200,
    width: 100, 
    aspectRatio: 1, 
    borderRadius: 100,
  },

  bottomButtonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    position: 'absolute',
    bottom: 10,
    padding: 0,
    
  },
  });

export default styles;
