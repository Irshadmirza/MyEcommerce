import React from 'react';
import ProductCard from './ProductCard';
import { View, Text, StyleSheet, ScrollView} from 'react-native'


const splitArray = arr => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const MainContainer = (props) => {
  const { products } = props;
  return (
 
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 15
      }}
    >
      {props.children}
      <View style={styles.mainContainer}>
        <View>
          {splitArray(products).firstHalf.map(product => (
            <ProductCard
              image={product.image}
              price={product.price}
              name={product.name}
              key={product.name}
            />
          ))}
        </View>
        <View>
          {splitArray(products).secondHalf.map(product => (
            <ProductCard
              image={product.image}
              price={product.price}
              name={product.name}
              key={product.name}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})


export default MainContainer;
