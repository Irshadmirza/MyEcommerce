import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {  Ionicons } from '@expo/vector-icons';


const CartItem = ( props ) => {
    return (
        // <View style={styles.cartItem}>
        //     <View style={styles.itemData}>
        //         <Text style={styles.quantity}>{props.quantity} </Text>   
        //         <Text style={styles.title}>{props.title}</Text>
        //     </View>
        //     <View style={styles.itemData}>
        //         <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
        //         {props.deletable && (<TouchableOpacity onPress={props.onRemove} style={styles.deteleButton}>
        //             <Ionicons 
        //                 name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
        //                 size={23}
        //                 color="red"  
        //             />
        //         </TouchableOpacity>)}
        //     </View>

        // </View >
            
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Image source={{ uri: props.image }} style={styles.image}/>
                <Text style={styles.quantity}>{props.quantity} </Text>   
                <Text style={styles.title}>{props.title}</Text>
            </View>
        <View style={styles.itemData}>
         <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
                 {props.deletable && (<TouchableOpacity onPress={props.onRemove} style={styles.deteleButton}>
                     <Ionicons 
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="black"  
                    />
                </TouchableOpacity>)}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    quantity: {
        fontSize: 16,
        color: '#888'
    },
    title: {
        fontSize: 18,
        color: '#888'
    },
    amount: {
        fontSize: 16,
        color: '#888'
    },
    deteleButton: {
        marginLeft: 20
    },
    image: {
        width: 80,
        height: 40,
        resizeMode: 'contain'
    }
});

export default CartItem;