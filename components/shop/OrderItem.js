import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CartItem from '../../components/shop/CartItem';

const OrderItem = props => {
    const [ showDetails, setShowDetails ] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.total}>${props.total.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>   
            </View>
                <Button color='#2f3640' 
                        title={ showDetails ? "Hide Details" : "Show Details"} 
                        onPress={ () => {
                            setShowDetails(preState => !preState);
                }}/>
                {showDetails && (
                    <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                        key={cartItem.productId}
                        quantity={cartItem.quantity}
                        amount={cartItem.sum}
                        title={cartItem.productTitle}
                        />
                    ))}
                    </View>
                )}
        </View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 5, 
        elevation: 7,
        borderRadius: 15,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    total: {
        fontSize: 16,
        color: '#353b48'
    },
    date: {
        fontSize: 16,
        color: '#273c75'
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItem;