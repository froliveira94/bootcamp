import { NavigationActions } from 'react-navigation';

class NavigationService {
  _navigatorRef = null;

  setNavigatorRef(navigationRef) {
    this._navigatorRef = navigationRef;
  }

  navigate(routeName, params) {
    this._navigatorRef.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
}

export default new NavigationService();
