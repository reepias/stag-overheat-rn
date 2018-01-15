import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Actions,
  Scene,
  Router,
  Switch,
  Modal
} from 'react-native-router-flux';
import { Icon } from 'native-base';
import {
  About,
  Question,
  QuestionDetail
} from './scenes'

class TabIcon extends Component {
  render(){
    const title = this.props.title;
    let icon = "";
    if(title == "Questions"){
      icon = "help-circle";
    }else if(title == "About"){
      icon = "person";
    }
    return (
      <Icon name={icon} style={{color: this.props.selected ? '#057ce4' : '#afafa4'}}/>
    );
  }
}

export default class App extends Component<{}> {
  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key="root" tabs={true}>
        <Scene key="menus">
          <Scene key="tabbar" tabs={true}>
            <Scene key="Questions" component={Question} title="Questions" icon={TabIcon} hideNavBar={true}/>
            <Scene key="About" component={About} title="About" icon={TabIcon} hideNavBar={true}/>
          </Scene>
          <Scene key="QuestionDetail" component={QuestionDetail} title="Question Detail" hideNavBar={true}/>
        </Scene>
      </Scene>
    );
  }
  render() {
    return <Router scenes={this.scenes}/>
  }
}
