import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import * as cartActions from '../../store/actions/cart';


const ProductsDetailsScreen = ({ navigation, route }) => {
    const { productId } = route.params;
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();
    
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff'}}>
        <ImageBackground source={{ uri: selectedProduct.imageUrl}} style={styles.image}>
        <View style={styles.backContainer}>
            <View style={styles.action}>
                <Button title="Add to cart" onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct));
                }}/>
            </View>
        
        <Text style={styles.price}>${selectedProduct.price}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
        </ImageBackground>
    
    
    </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
    },
    action: {
        marginVertical: 20,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 40
    },
    backContainer: {
        marginVertical: 380,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: '#ffffff'
        
    }
});

export default ProductsDetailsScreen;