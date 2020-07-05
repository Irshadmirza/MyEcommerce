import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../../components/shop/ProductCard';
import MainContainer from '../../components/shop/MainContainer';

const HomeScreen = ({ navigation, route }) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        navigation.navigate('Details', {
            productId: id,
            productName: title
        })
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

      const splitArray = arr => {
        const { length } = arr;
        const half = length / 2;
        const firstHalf = arr.slice(0, half);
        const secondHalf = arr.slice(half, length);
        return { firstHalf, secondHalf };
      };

    return (
        <View style={styles.container}>
        
        <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 45,
          margin: 10
        }}
      >
       
        <View style={{ flex: 1 }}>
        
                    <View style={styles.mainContainer}>
                    
                        <View style={{ marginBottom: 10}}>
                        
                        {splitArray(products).firstHalf.map((product) => (
                            <ProductCard image={product.imageUrl} 
                            name={product.title} 
                            price={product.price}
                            onViewDetails={() => {
                                selectItemHandler(product.id, product.title)
                             }}
                             key={product.id}
                             addTocart={() => {
                                dispatch(cartActions.addToCart(product))
                             }}
                            />
                        ))}
                        </View>
                        <View>
                        {splitArray(products).secondHalf.map(product => (
                            <ProductCard image={product.imageUrl} 
                            name={product.title} 
                            price={product.price}
                            onViewDetails={() => {
                                selectItemHandler(product.id, product.title)
                             }}
                             key={product.id}
                             addTocart={() => {
                                dispatch(cartActions.addToCart(product))
                             }}
                            />
                        ))}
                        </View>
                    </View>
        </View>
    </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1, 
        backgroundColor: '#f1f2f6'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20, 
        position: 'absolute',
        left: 20,
        top: 10,
        bottom: 20
    }
})

export default HomeScreen;