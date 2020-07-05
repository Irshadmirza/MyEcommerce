import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';



const CartScreen = () => {

    const cartTotal = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
            const transformedCartItems = [];
            for (const key in state.cart.items) {
                transformedCartItems.push({
                    productId : key,
                    productTitle: state.cart.items[key].productTitle,
                    productPrice: state.cart.items[key].productPrice,
                    sum: state.cart.items[key].sum,
                    quantity: state.cart.items[key].quantity,
                    imageUr: state.cart.items[key].imageUr,
                })
            }
            return transformedCartItems.sort((a, b) => 
                a.productId > b.productId ? 1 : -1
            );
    });

    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText} >
                    Total: <Text style={styles.amount}>{cartTotal.toFixed(2)}</Text>
                </Text>
                <View style={styles.but}>
                <Button title= "Order Now" 
                        color="#841584"
                        disabled={cartItems.length === 0} 
                        onPress={ () => {
                            dispatch(ordersActions.addOrder(cartItems, cartTotal))
                        }}
                        
                />
                </View>
            </View>

            <FlatList data={cartItems} 
                      keyExtractor={item => item.productId}
                      renderItem={itemData =>
                            <CartItem 
                                image={itemData.item.imageUr}
                                quantity={itemData.item.quantity}
                                title={itemData.item.productTitle}
                                amount={itemData.item.sum}
                                deletable
                                onRemove={() => {
                                    dispatch(cartActions.removeFromCart(itemData.item.productId))
                                }}
                            />
                 
                         }

            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 5, 
        elevation: 7,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    summaryText: {
        fontSize: 18,
        marginLeft: 20
    },
    amount: {
        color: 'black'
    },
    but: {
        width: '30%',
        borderRadius: 25,
        backgroundColor: 'black'
    }
});

export default CartScreen;