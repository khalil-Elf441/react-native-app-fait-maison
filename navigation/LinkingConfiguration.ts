/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          LoginScreen: 'login'
        }
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              Menu: 'one',
            },
          },
          TabTwo: {
            screens: {
              DispoScreen: 'two',
            },
          }, 
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          }, 
          TabFour: {
            screens: {
              TabFourScreen: 'Four',
            },
          },
          TabFive: {
            screens: {
              TabFiveScreen: 'Five',
            },
          },
        },
      },
      // Root2: {
      //   screens: {
      //     TabOne: {
      //       screens: {
      //         Menu: 'one2',
      //       },
      //     },
      //     TabTwo: {
      //       screens: {
      //         TabTwoScreen: 'two2',
      //       },
      //     },
      //     TabThree: {
      //       screens: {
      //         TabThreeScreen: 'three2',
      //       },
      //     },
      //     TabFour: {
      //       screens: {
      //         TabFourScreen: 'Four2',
      //       },
      //     },
      //     TabFive: {
      //       screens: {
      //         TabFiveScreen: 'Five2',
      //       },
      //     },
      //   },
      // },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
