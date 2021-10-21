import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerNull: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  card: {
    backgroundColor: '#3490dc',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 20,
  },
  cardTop: {
    backgroundColor: 'blue',
    marginBottom: 20,
  },
  cardBottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    margin: 'auto',
    marginBottom: 20,
    backgroundColor: '#bbdefb',
    borderRadius: 5,
  },
  cardBottomSame: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '12 %',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  recentTransactions: {
    backgroundColor: 'white',
    width: '100%',
  },

  plusButton: {
    backgroundColor: '#bbdefb',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#7a42f4',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  buttontext: {
    color: 'grey',
      fontSize: 10,
  }
});