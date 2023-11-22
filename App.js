import React, { Component } from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} hideNavBar />
  </Scene>
)

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}