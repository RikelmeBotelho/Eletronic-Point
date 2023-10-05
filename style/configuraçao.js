import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    paddingLeft: 10,
  },
  fixed: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    paddingLeft: 10,
  },
  fixed1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  botao: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileImageContainer: {
    backgroundColor: 'orange',
    borderRadius: 100,
    padding: 10,
    marginBottom: '10%',
    position: 'fixed',
  },
  profileImage: {
    width: '40%', 
    aspectRatio: 1, 
    borderRadius: 100,
  },
  bottomButtonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: 'orange',
  },
  });

export default styles;
