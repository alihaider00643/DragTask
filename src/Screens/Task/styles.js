import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  mainCon: {
    flex: 1,
  },
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: Dimensions.get('window').width / 4 - 12,
    borderRadius: 10,
    width: Dimensions.get('window').width / 4 - 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  draggableBox: {
    width: Dimensions.get('window').width / 4 - 12,
    height: Dimensions.get('window').width / 4 - 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemSeparator: {
    height: 15,
  },
  draxListContainer: {
    padding: 5,
    height: 200,
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default styles;
