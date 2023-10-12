import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    width: '92%',
    height: 40,
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 100,
    paddingLeft: 15,
  },
  fixed: {
    width: '50%',
    height: 40,
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 100,
    paddingLeft: 15,
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
    marginTop: 20,
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

  profileImageContainer: {
    backgroundColor: 'orange',
    borderRadius: 100,
    padding: 5,
    position: 'fixed',
    marginBottom: 40
   
  },
  profileImage: {
    height: 200,
    width: 100, 
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
  },
  });

export default styles;
