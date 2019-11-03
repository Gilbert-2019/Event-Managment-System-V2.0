import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class EventsTablesScreen extends Component {

    static navigationOptions = {
		title:"Shedule"
    }
    

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Event', 'Venue', 'Time', 'Date'],
      tableData: [
        ['Conference', 'Colombo', '3:00', '2/1/2018'],
        ['Sports', 'Colombo', '3:00', '2/1/2018'],
        ['Funtion', 'Colombo', '3:00', '2/1/2018'],
        ['Competition', 'Colombo', '3:00', '2/1/2018']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#6200EE' },
  text: { margin: 6, color:'#000000' }
});