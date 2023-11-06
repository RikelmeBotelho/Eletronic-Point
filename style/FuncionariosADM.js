import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    
  },
  profileImageContainer: {
    backgroundColor: 'orange',
    borderRadius: 300,
    padding: 10,
    position: 'fixed',
    marginBottom: -45,
    height: 220,
    width: 220,
    margin: 70,
    top: -70
  },
  profileImage: {
      height: 200,
      width: 200, 
      aspectRatio: 1, 
      borderRadius: 100,
  },
  textBoard: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 3,
    marginBottom: 10,
  },
  label: {
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 80,
    padding: 7,
    marginTop: 2,
    color: '#1f1f1e',
    paddingLeft: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  flex1: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 5,
    alignItems: 'center',
    paddingTop: 13,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    bottom: -12,
    padding: 10,
  
  },
});

export default styles;