import {createStackNavigator} from 'react-navigation-stack';
import UserScreen from '../screen/UserScreen';
import userChatScreen from '../screen/userChatScreen';


export default  createStackNavigator({
    Home:{
      screen:UserScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    UserChat:userChatScreen
  
  })