import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { ActionSheetProvider } from './src/components/ActionSheet';
import { Provider } from 'react-redux';
import store from './src/lib/createStore';
import { ThemeContext } from './src/theme';
import {defaultTheme, newThemeState, subscribeTheme, unsubscribeTheme} from './src/utils/theme';
import AppContainer from './src/AppContainer';
import Toast from './src/components/Toast';
import Bugsnag from '@bugsnag/react-native'
import {supportSystemTheme} from "./src/utils/deviceInfo";
import UserPreferences from './src/lib/userPreferences';
import {THEME_PREFERENCES_KEY} from "./src/constants/cacheKeys";
import {appInit} from "./src/actions/app";


Bugsnag.start();

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.init();
        this.state = {
            showModal: false,
            theme: defaultTheme(),
            themePreferences: {
                currentTheme: supportSystemTheme() ? 'automatic' : 'light',
                darkLevel: 'dark'
            }
        };
    }

    componentWillUnmount() {
        unsubscribeTheme();
    }

    init = async() => {
        UserPreferences.getMapAsync(THEME_PREFERENCES_KEY).then(this.setTheme);
        store.dispatch(appInit());
    }

    setTheme = (newTheme = {}) => {
        // change theme state
        this.setState(prevState => newThemeState(prevState, newTheme), () => {
            const { themePreferences } = this.state;
            // subscribe to Appearance changes
            subscribeTheme(themePreferences, this.setTheme);
        });
    }

    render() {
        const { themePreferences, theme } = this.state;

        return (
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <Provider store={store}>
                  <ThemeContext.Provider
                      value={{
                          theme,
                          themePreferences,
                          setTheme: this.setTheme
                      }}
                  >
                      <ActionSheetProvider>
                          <AppContainer />
                          <Toast />
                      </ActionSheetProvider>
                  </ThemeContext.Provider>
              </Provider>
            </SafeAreaProvider>
        );
      }
}

