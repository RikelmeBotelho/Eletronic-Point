import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    paddingTop: '10%', 
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
  title: {
    fontSize: 24,
    marginTop: -50,
    marginBottom: 60, 
    padding: 25,
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 8,
    bottom: '6%', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  textBoxContainer: {
    width: '100',
    backgroundColor: 'white',
    borderColor: 'orange',
    textAlign: 'center',
    height: 40,
    borderRadius: 30,
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 5,
    marginRight: 5,
    borderWidth: 2,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  /*
  flexBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute', 
    bottom: '50%', 
  },
  flexBoxItem: {
    width: '100%',
    padding: 5, 
    borderWidth: 1,
    borderColor: 'orange',
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  */
  bottomButtonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 5,
    padding: 10,
  },
  
  orangeBall: {
    width: 500,
    height: 500,
    borderRadius: 500,
    backgroundColor: 'orange',
    left: '40%',
    top: '70%',
    zIndex: -1,
    position: 'absolute',
  },
  secondBall: {
    zIndex: 0,
    backgroundColor: "#ff8624",
    width: 500,
    height: 500,
    borderRadius: 500,
    right: '20%',
    top: '80%',
    position: 'absolute',
  },
  version: {
    zIndex: 4,
    color: '#151716',
    bottom: '5%',
    position: 'absolute',
  }
  
  });
export default styles;
