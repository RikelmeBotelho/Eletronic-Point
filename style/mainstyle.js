import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  TextEmail: {
    width: "100%",
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 200,
    zIndex: 3,
    top: '37%',
    position: 'absolute'
  },

  TextSenha: {
    width: "100%",
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 1,
    zIndex: 1,
    bottom: '53%',
    position: 'absolute',
  },

  btnCadastro: {
    width: '30%',
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'orange',
    bottom: '43%',
    zIndex: 3,
    position: 'absolute',
  },
  
  esqueciSenha: {
    justifyContent: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    bottom: '50%',
    position: 'absolute',
    zIndex: 3,
  },
  logoImage: {
    width: 100,
    height: 100,
    top: '0%',
    position: 'absolute',
    zIndex: 3,
  },
  orangeBall: {
    width: 450,
    height: 450,
    borderRadius: 500,
    backgroundColor: 'orange',
    left: '40%',
    top: '70%',
    zIndex: 0,
    position: 'absolute',
  },
  secondBall: {
    zIndex: 1,
    backgroundColor: "#ff8624",
    width: 450,
    height: 450,
    borderRadius: 500,
    right: '20%',
    top: '80%',
    position: 'absolute',
  },
  version: {
    zIndex: 4,
    color: '#151716',
    bottom: '3%',
    position: 'absolute',
  }
});


export default styles