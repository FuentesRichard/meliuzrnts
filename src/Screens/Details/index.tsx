import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import api from '../../Services/api';

import { IListStoreDetails } from '../../Types'

const Details: React.FC = () => {
    const [storeValue, setStoreValue] = useState(1);
    const [storeData, setStoreData] = useState<IListStoreDetails>({} as IListStoreDetails);

    useEffect(() => {
        api
            .get(`discounts?store=1${storeValue}`)
            .then(response => {
                api
                    .get(`stores/${storeValue}`)
                    .then(response => {
                        setStoreData({ ...response.data[0], storeDetails: response.data })
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    }, [storeValue]);

    const dateParse = (value: Date) => {
        return Intl.DateTimeFormat('pt-BR').format(new Date(value))
    }

    return (
        <View style={styles.default}>
          <Text style={styles.title}>{storeData.storeDetails?.label}</Text>
          <Image source={require('../../Assets/images/desconto.png')} />
          <Text style={styles.discountLabel}>{storeData.value}% de desconto</Text>
          <Text style={styles.infoDetails}>
            Válido até {storeData?.expires_in && dateParse(storeData?.expires_in)}
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleDetails: {
        alignItems: 'center',
    },
    title: {
        fontWeigth: 'bold',
        fontSize: 25,
        color: 'red',
    },
    discountLabel: {
        fontWeigth: 'bold',
        fontSize: 35,
        color: 'red',
    },
    infoDetails: {
        fontSize: 20,
    }
})

export default Details;