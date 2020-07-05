import React from 'react';
import { View, FlatList, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = ({ navigation, route }) => {
    const orders = useSelector(state => state.orders.orders)
    return (
            <View style={{ flex: 1, textAlign: 'center'}}>
            <FlatList data={orders} 
                      keyExtractor={item => item.id}
                      renderItem={ itemData => 
                            <OrderItem 
                                total={itemData.item.totalAmount} 
                                date={itemData.item.date}
                                items={itemData.item.items}    
                                />
                      } />
            </View>
    );
};

export default OrderScreen;