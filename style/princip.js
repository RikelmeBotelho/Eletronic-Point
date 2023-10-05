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
    padding: 10,
    marginBottom: '4%',
    position: 'fixed',
  },
  profileImage: {
    width: '40%', 
    aspectRatio: 1, 
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    marginTop: -10,
    marginBottom: 80, 
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    position: 'absolute',
    bottom: '65%', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textBoxContainer: {
    width: '100',
    backgroundColor: 'white',
    borderColor: 'orange',
    textAlign: 'center',
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 6,
    paddingRight: 13,
    paddingBottom: 5,
    marginRight: 5,
    borderWidth: 4,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
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
  bottomButtonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 5,
    padding: 10,
    backgroundColor: 'orange',
  },
  
  });
export default styles;
