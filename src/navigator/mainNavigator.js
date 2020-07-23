import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49276Navigator from '../features/BlankScreen49276/navigator';
import BlankScreen39275Navigator from '../features/BlankScreen39275/navigator';
import BlankScreen29273Navigator from '../features/BlankScreen29273/navigator';
import BlankScreen19265Navigator from '../features/BlankScreen19265/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49276: { screen: BlankScreen49276Navigator },
BlankScreen39275: { screen: BlankScreen39275Navigator },
BlankScreen29273: { screen: BlankScreen29273Navigator },
BlankScreen19265: { screen: BlankScreen19265Navigator },

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
