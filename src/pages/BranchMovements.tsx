import { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { globalStyles } from "../global/styles";

export function BranchMovements() {

    const [movements, setMovements] = useState([])
    
    useEffect(() => {
        axios.get(process.env.EXPO_PUBLIC_API_URL + '/movements')
        .then((response) => {
            setMovements(response.data)
        })
        .catch((error) => {
            Alert.alert('Não foi possível buscar as movimentações')
            console.log(error)
        })
    }, [])

    function renderMovements({item}) {
        return (
            <View style={[globalStyles.productCard, {backgroundColor: '#4682B4', borderWidth:2}]}>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style={[globalStyles.cardText, {fontWeight:'600', color:'#FFFFFF'}]}>#1</Text>
                </View>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Origem: <Text style={globalStyles.cardDescription}>{item.origem}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Destino: <Text style={globalStyles.cardDescription}>{item.destino}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Produto: <Text style={globalStyles.cardDescription}>{item.produto} - {item.quantidade} unid.</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600'}]}>Status: <Text style={globalStyles.cardDescription}>{item.status}</Text></Text>
            </View>
        )
    }

    const arrayTeste = [
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
        {origem: 'Farmacia', destino: 'Farmacia Y', produto: 'remedio XYZ', quantidade: 10, status: 'aguardando coleta'},
    ]

    return (

        <SafeAreaView style={globalStyles.safe}>

            <TouchableOpacity style={[globalStyles.button, {paddingVertical:10, alignSelf:'center'}]}>
                <Text style={[globalStyles.buttonText, {fontSize: 15}]}>Adicionar Movimentação</Text>
            </TouchableOpacity>

            <FlatList
            data={arrayTeste}
            renderItem={renderMovements}/>

        </SafeAreaView>

    )
}