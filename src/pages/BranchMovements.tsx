import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { globalStyles } from "../global/styles";
import { useFocusEffect } from "@react-navigation/native";

export function BranchMovements({navigation}) {

    const [movements, setMovements] = useState([])
    
    useFocusEffect(
        React.useCallback(() => {
            axios.get(process.env.EXPO_PUBLIC_API_URL + '/movements')
            .then((response) => {
                setMovements(response.data);
            })
            .catch((error) => {
                Alert.alert('Não foi possível buscar as movimentações');
                console.log(error);
            });
        }, [])
    );

    function navigateToNewMovement() {
        navigation.navigate('NewMovement')
    }

    function renderMovements({item}) {
        return (
            <View style={[globalStyles.productCard, {backgroundColor: '#4682B4', borderWidth:2}]}>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style={[globalStyles.cardText, {fontWeight:'600', color:'#FFFFFF'}]}>#{item.id}</Text>
                </View>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Origem: <Text style={globalStyles.cardDescription}>{item.origem.nome}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Destino: <Text style={globalStyles.cardDescription}>{item.destino.nome}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Produto: <Text style={globalStyles.cardDescription}>{item.produto.nome} - {item.quantidade} unid.</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600'}]}>Status: </Text>
                {item.historico.map((historicoItem) => (
                    <View key={historicoItem.id} style={{ marginLeft: 10 }}>
                        <Text style={globalStyles.cardDescription}>
                            {historicoItem.descricao} - {historicoItem.data}
                        </Text>
                    </View>
                ))}
            </View>
        )
    }

    return (

        <SafeAreaView style={globalStyles.safe}>

            <TouchableOpacity onPress={navigateToNewMovement} style={[globalStyles.button, {paddingVertical:10, alignSelf:'center'}]}>
                <Text style={[globalStyles.buttonText, {fontSize: 15}]}>Adicionar Movimentação</Text>
            </TouchableOpacity>

            <FlatList
            data={movements}
            renderItem={renderMovements}
            />

        </SafeAreaView>

    )
}