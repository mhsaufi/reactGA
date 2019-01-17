import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { Button, Text, View , ImageBackground } from 'react-native';

const tracker1 = new GoogleAnalyticsTracker("UA-8146561-2");

class HomeOne extends React.Component {

  static navigationOptions = {
    title: 'R-T-A Screen-One',
  };


  _triggerGA(){
    
    tracker1.trackEvent("React-Test-App-Button-Click1","Click");
    alert("Your event has been recorded to GA");
  }

  _triggerFA(){

    alert('Coming soon!');
  }

  render(){

    tracker1.trackScreenView("React-Test-App-Screen-One");

    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
          <View style={{height: 180, marginTop: 5, paddingTop: 30, paddingLeft: 10, paddingRight: 10, backgroundColor: 'white'}}>
            <ImageBackground style={{ width: '100%', height: '100%'}} source={require('./logo.png')} />
          </View>
          <View style={{height: 50, marginTop: 5, paddingTop: 30, paddingLeft: 40, paddingRight: 40, backgroundColor: 'white'}}>
            <Button
              onPress={this._triggerGA}
              title="GA Event Trigger"
            />
          </View>
          <View style={{height: 50, marginTop: 20, paddingTop: 30, paddingLeft: 40, paddingRight: 40, backgroundColor: 'white'}}>
            <Button
              onPress={this._triggerFA}
              title="Firebase Event Trigger"
            />
          </View>
          <View style={{height: 70, marginTop: 20, paddingTop: 30, paddingLeft: 40, paddingRight: 40, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'}}>

            <Button
                onPress={() => this.props.navigation.navigate('Detail')}
                title="Screeen 2"
              />

            <Button
                onPress={() => this.props.navigation.navigate('Detail2')}
                title="Screeen 3"
              />
          </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'R-T-A Screen-Two',
  };

  render() {

    tracker1.trackScreenView("React-Test-App-Screen-Two");

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
          <View style={{height: 180, marginTop: 5, paddingTop: 30, paddingLeft: 10, paddingRight: 10, backgroundColor: 'white'}}>
            <ImageBackground style={{ width: '100%', height: '100%'}} source={require('./logo.png')} />
          </View>
          <View style={{height: 50, marginTop: 20, paddingTop: 30, paddingLeft: 40, paddingRight: 40, backgroundColor: 'white'}}>
          <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Back Home"
            />
          </View>
      </View>
    );
  }
}

class DetailsScreen2 extends React.Component {

  static navigationOptions = {
    title: 'R-T-A Screen-Three',
  };

  render() {

    tracker1.trackScreenView("React-Test-App-Screen-Three");

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
          <View style={{height: 180, marginTop: 5, paddingTop: 30, paddingLeft: 10, paddingRight: 10, backgroundColor: 'white'}}>
            <ImageBackground style={{ width: '100%', height: '100%'}} source={require('./logo.png')} />
          </View>
          <View style={{height: 50, marginTop: 20, paddingTop: 30, paddingLeft: 40, paddingRight: 40, backgroundColor: 'white'}}>
          <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Back Home"
            />
          </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home : HomeOne,
    Detail : DetailsScreen,
    Detail2 : DetailsScreen2
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default  createAppContainer(AppNavigator);
