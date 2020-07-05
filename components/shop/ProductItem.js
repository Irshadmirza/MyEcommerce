import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, Image, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21 ) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return ( 
            <React.Fragment>
                <View style={styles.product}>
                <ImageBackground source={{ uri: props.image}} style={styles.image}>

                    <View style={[ styles.viewDetails, styles.viewDetailsOn]}>
                    <View style={styles.action}>
                            {props.children}
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.title}>{props.title}</Text>
                                <Text style={styles.price}>{props.price}</Text>
                            </View>
                    </View>

                </ImageBackground>

                </View>

            </React.Fragment>
       
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 5, 
        elevation: 7,
        borderRadius: 15,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    image: { 
        width: '100%',
        height: '100%',
        borderRadius: 15,
        left: 0,
        top: 0
      
    },
    title: { 
        fontSize: 18,
        marginVertical: 10
    },
    price: {
        fontSize: 15,
        color: '#34495e'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        width: '70%'
        
    },
    viewDetails: {
        width: '80%',
        height: 120,
        alignItems: 'center'
    },
    viewDetailsOn: {
        position: 'absolute',
        borderRadius: 15,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        left: 25
    }
});

export default ProductItem;