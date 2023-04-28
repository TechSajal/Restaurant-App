 import { createAppContainer } from "react-navigation";
 import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ReasultShowScreen from "./src/screens/ResultShowScreen";
const navigator = createStackNavigator({
   Search:SearchScreen,
   ResultShow:ReasultShowScreen
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
     title:"Business Search"
  }
})

export default createAppContainer(navigator);