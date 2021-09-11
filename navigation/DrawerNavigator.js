import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';
import CustomSidebarMenu from '../screens/CustomSideBarMenu';
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#F7E8F7',
          itemStyle: { marginVertical: 5 },
          backgroundColor:"#581845"
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    );
  }
}
