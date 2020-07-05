import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetails from '../screens/shop/ProductDetails';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import HomeScreen from '../screens/shop/HomeScreen';

const Stack = createStackNavigator();

function ShopStack({ navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="All Products" component={HomeScreen} 
                 
      />
      <Stack.Screen name="Details" component={ProductDetails}   
                    options={({ route }) => ({ 
                        title: route.params.productName,
                        headerStyle: {
                              backgroundColor: 'white'
                          },
                          headerTintColor: 'black'
                      })} />
        <Stack.Screen name="CartItems" component={CartScreen} options={{ title: 'Your Cart'}}/>
    </Stack.Navigator>
    
  );
}

const OrderStack = createStackNavigator();

function OrdersScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} options={{
          title: 'Your Orders',
        }}/>
      
    </OrderStack.Navigator>
  );
}


const UserStack = createStackNavigator();

function UserProductStack() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Users" component={UserProductScreen} options={{
          title: 'Your Products'
        }}/>
         <UserStack.Screen name="Edit" component={EditProductScreen} options={{
          title: 'Edit Products',
        }}/>   
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2f3640'
      }}
    >
      <Tab.Screen
        name="Home"
        component={ShopStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={UserProductStack}
        options={{
          tabBarLabel: 'Admin',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-create" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}



export default MyTabs;