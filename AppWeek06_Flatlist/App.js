import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import TabBarIcon from './src/components/tabBarIcon/TabBarIcon';
import TabBarIcon from './components/tabBarIcon/TabBarIcon';

import HomeScreen from './screens/HomeScreen.js';
import Screen_4a from './screens/Screen_4a.js';

const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } else if (route.name === 'Screen_4a') {
//               iconName = focused ? 'list' : 'list-outline';
//             }else if (route.name === 'Screen_4a') {
//               iconName = focused ? 'list' : 'list-outline';
//             }
//             return <Ionicons name={iconName} size={24} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarLabelStyle: { display: 'none' },
//           headerShown: false,
          
//         })} op>
//         <Tab.Screen name="Screen_4a" component={Screen_4a} />
//         <Tab.Screen name="Home" component={HomeScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
            <Tab.Navigator
                initialRouteName='HomeScreen'
                backBehavior='initialRoute'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIcon route={route} {...props} />
                    ),
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'rgba(27, 169, 255, 1)',
                    },
                })}
            >
                <Tab.Screen name='HomeScreen' component={HomeScreen} />
                <Tab.Screen name='Screen_4a' component={Screen_4a} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}

