import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../../components/shop/ProductCard';

const ProductsOverviewScreen = ({ navigation, route }) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        navigation.navigate('Details', {
            productId: id,
            productName: title
        })
    };
    const splitArray = arr => {
        const { length } = arr;
        const half = length / 2;
        const firstHalf = arr.slice(0, half);
        const secondHalf = arr.slice(half, length);
        return { firstHalf, secondHalf };
      };


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                 
                <View style={{ marginRight: 10 }}>
                    <Ionicons name="md-cart" size={28} onPress={() => {
                        navigation.navigate('CartItems')
                    }}/>
                </View>
            ),
        });
      }, [navigation]);

    return (
        cosole.log(products.title)
        // <FlatList 
        //     data={products} 
        //     renderItem={ itemData => 
        //         // <ProductItem 
        //         //     image={itemData.item.imageUrl}
        //         //     title={itemData.item.title}
        //         //     price={itemData.item.price}
        //         //     onViewDetails={() => {
        //         //         selectItemHandler(itemData.item.id, itemData.item.title)
        //         //     }}
                   
        //         // >
        //         //        <TouchableOpacity onPress={() => {
        //         //         selectItemHandler(itemData.item.id, itemData.item.title)
        //         //     }}>
        //         //                 <Image source={require('../../assets/view.png')} style={{ width: 28, height: 28}}  />
        //         //             </TouchableOpacity>
        //         //             <TouchableOpacity onPress={() => {
        //         //         dispatch(cartActions.addToCart(itemData.item));
        //         //     }}>
        //         //                 <Image source={require('../../assets/cart.png')} style={{ width: 28, height: 28}} />
        //         //             </TouchableOpacity>
        //         // </ProductItem>
        //     }
        // />
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default ProductsOverviewScreen;