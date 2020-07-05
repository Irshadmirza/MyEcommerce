import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const ProductCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onViewDetails}>
          <View style={styles.totalContainer}>
            <View style={styles.imageContainer}>
              <Image
                width={Layout.window.width / 2 - 30}
                source={{ uri: props.image}}
                style={{
                  borderRadius: 15,
                  height: 120,
                  width: 150,
                }}
              />
            </View>
           <View style={styles.textContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#2f3542'}}>{props.name}</Text>
            <Text style={{ fontWeight: 'normal', fontSize: 18, color: '#57606f'}}>{`$${props.price}`}</Text>
           </View>
             <TouchableOpacity style={styles.iconContainer} onPress={props.addTocart}>
             <MaterialCommunityIcons name="plus" size={20} color="white" />
             </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      );
}


  const styles = StyleSheet.create({
    container: {
        marginBottom: '20px',
    },
    imageContainer: {
        elevation: 5,
        borderRadius: 20,
        maxHeight: 200,
        position: 'absolute',
        top: -30
    },
    name: {
        color: Colors.greyColor,
        marginLeft: 10,
        marginBottom: 10
    },
    price: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: Colors.blackColor
    },
    totalContainer: {
      height: 180,
      width: 180,
      elevation: 8,
      backgroundColor: '#ffffff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginBottom: 60,
      alignItems: 'center'
    },
    textContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20
    },
    iconContainer: {
      height: 25,
      width: 25,
      position: 'absolute',
      bottom: 10,
      right: 10,
      elevation: 8,
      backgroundColor: '#3742fa',
      borderRadius: 25, 
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default ProductCard;
