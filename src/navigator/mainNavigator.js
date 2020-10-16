import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList145404Navigator from '../features/NotificationList145404/navigator';
import Maps145403Navigator from '../features/Maps145403/navigator';
import UserProfile145402Navigator from '../features/UserProfile145402/navigator';
import Maps145383Navigator from '../features/Maps145383/navigator';
import Settings145361Navigator from '../features/Settings145361/navigator';
import Settings145346Navigator from '../features/Settings145346/navigator';
import NotificationList145345Navigator from '../features/NotificationList145345/navigator';
import Maps145344Navigator from '../features/Maps145344/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList145404: { screen: NotificationList145404Navigator },
Maps145403: { screen: Maps145403Navigator },
UserProfile145402: { screen: UserProfile145402Navigator },
Maps145383: { screen: Maps145383Navigator },
Settings145361: { screen: Settings145361Navigator },
Settings145346: { screen: Settings145346Navigator },
NotificationList145345: { screen: NotificationList145345Navigator },
Maps145344: { screen: Maps145344Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
