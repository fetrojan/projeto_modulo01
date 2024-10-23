import axios from "axios"
import {View, Text, Alert, FlatList, SafeAreaView, Image, TextInput} from 'react-native'
import { useState, useEffect } from 'react'
import { globalStyles } from "../global/styles"
import { Product } from "../interfaces/types"

export function Inventory() {

    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState('')

    const filteredProducts = products.filter(product => product.product_name.toLowerCase().includes(search.toLowerCase()) || product.branch_name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        axios.get(process.env.EXPO_PUBLIC_API_URL + '/products')
        .then((response) => {
            setProducts(response.data)
        })
        .catch((error) => {
            Alert.alert('Não foi possível obter a lista de produtos')
            console.log(error)
        })
    }, [])

    function renderProducts({item}) {
        return (
            <View style={globalStyles.productCard}>
                <Image style={globalStyles.productImage} source={{uri: item.image_url }}/>
                <Text style={globalStyles.cardTitle}>{item.product_name}</Text>
                <View style={[globalStyles.cardSection, {justifyContent:'space-around'}]}>
                    <Text style={[globalStyles.cardText, {color:'#FFFFFF'}]}>{item.branch_name}</Text>
                    <Text style={[globalStyles.cardText, {color:'#FFFFFF'}]}>{item.quantity} unid.</Text>
                </View>

                <Text style={[globalStyles.cardText, {color:'#FFFFFF', fontWeight:'300'}]}>{item.description}</Text>
            </View>
        )
    }

    return(

        <SafeAreaView style={globalStyles.safe}>

            <TextInput style={globalStyles.input} placeholder="Buscar produto ou filial" placeholderTextColor={'#4682B4'} value={search} onChangeText={setSearch}/>

            <Text style={globalStyles.cardText}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </Text>

            <FlatList
            data={filteredProducts}
            renderItem={renderProducts}/>

        </SafeAreaView>

    )
}