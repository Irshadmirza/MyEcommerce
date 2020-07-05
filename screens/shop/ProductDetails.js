import React from 'react';
import { StatusBar, View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux'


// const getHeight = () =>
//   Layout.window.height <= 667
//     ? Layout.window.height / 2.8
//     : Layout.window.height / 2.3;


const ProductDetails = ({ navigation, route }) => {
    const { productId } = route.params;
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId));
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
            <Swiper
              style={{ height: 400, marginBottom: 20 }}
              activeDotColor='white'
              dotColor='black'
            >
              <Image
                source={{
                  uri:
                    selectedProduct.imageUrl
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/564x/6e/90/41/6e90412772257e9d16b18f6449d0b141.jpg"
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/564x/48/8a/ce/488acec32b6c8cf86fc034476b17b2bc.jpg"
                }}
                style={styles.image}
              />
            </Swiper>
            <View style={styles.dataContainer}>
              <Text style={styles.timelocation}>Seoul, S. Korea • 2h ago</Text>
              <View style={styles.namePrice}>
                <Text style={styles.namePriceText}>MVMTH Watch</Text>
                <Text style={styles.namePriceText}>$49</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.description}>
                Selling my 2017 DJI Spark. Barely used, pretty new in condition and
                its the “Fly More Combo". No Negotiations please.
              </Text>
              <Text style={styles.description}>
                Seize the Moment. Meet Spark, a mini drone that features all of DJI's
                signature technologies, allowing you to seize the moment whenever you
                feel inspired.
                Seize the Moment. Meet Spark, a mini drone that features all of DJI's
                signature technologies, allowing you to seize the moment whenever you
                feel inspired.
                Seize the Moment. Meet Spark, a mini drone that features all of DJI's
                signature technologies, allowing you to seize the moment whenever you
                feel inspired.
                Seize the Moment. Meet Spark, a mini drone that features all of DJI's
                signature technologies, allowing you to seize the moment whenever you
                feel inspired.
                Seize the Moment. Meet Spark, a mini drone that features all of DJI's
                signature technologies, allowing you to seize the moment whenever you
                feel inspired.
              </Text>
              <Text style={styles.readMore}>Read More</Text>
            </View>
            
          </ScrollView>
                <View style={styles.bottomView}>
                  <Text style={styles.tex}>Add to Bag</Text>
                </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: 5
    },
    dataContainer: {
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 24,
        resizeMode: 'cover'
    },
    timelocation: {
        color: Colors.greyColor,
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 10
    },
    namePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    namePriceText: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: Colors.blackColor
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#dfe4ea',
        marginBottom: 25
    },
    description: {
        marginBottom: 25,
        color: Colors.greyColor
    },
    readMore: {
        color: Colors.blackColor,
        marginBottom: 40
    },
    bottomView: {
      width: '100%',
      height: 60,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      backgroundColor: 'grey',
      alignItems: 'center'
    },
    tex: {
      marginTop: 20
    }
})

export default ProductDetails;
