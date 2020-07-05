import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import * as productActions from '../../store/actions/products';


import ProductItem from '../../components/shop/ProductItem';

const UserProductScreen = ({navigation, route}) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                 
                <View style={{ marginRight: 15 }}>
                    <Ionicons name="md-create" size={28} onPress={() => {
                        navigation.navigate('Edit')
                    }}/>
                </View>
            ),
        });
      }, [navigation]);


    return (
        <FlatList data={userProducts} renderItem={itemData => 
                            <ProductItem 
                                image={itemData.item.imageUrl}
                                title={itemData.item.title}
                                price={itemData.item.price}
                               
                            >
                                 <Button color='#2f3640' title="Edit" onPress={() => {
                                        navigation.navigate('Edit', {
                                            productId: itemData.item.id
                                        })
                                 }} />
                                    <Button
                                        color='#2f3640'
                                        title="Delete"
                                        onPress={() => {
                                            dispatch(productActions.deleteProduct(itemData.item.id))
                                        }}
                                    />

                            </ProductItem>}/>
    );
};

export default UserProductScreen;