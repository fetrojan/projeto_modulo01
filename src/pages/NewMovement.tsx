import { Text, TouchableOpacity, SafeAreaView, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { globalStyles } from "../global/styles";
import { useEffect, useState } from "react";
import { ProductOption, BranchOption } from "../interfaces/types";

export function NewMovement({navigation}) {

    const [branches, setBranches] = useState<BranchOption[]>([]);
    const [products, setProducts] = useState<ProductOption[]>([]);
    const [selectedOriginBranch, setSelectedOriginBranch] = useState("");
    const [selectedDestinationBranch, setSelectedDestinationBranch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [observations, setObservations] = useState("");
    const [filteredDestinationBranches, setFilteredDestinationBranches] = useState<BranchOption[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductOption[]>([])

    useEffect(() => {
        axios.get(process.env.EXPO_PUBLIC_API_URL + '/branches/options')
            .then((response) => {
                setBranches(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(process.env.EXPO_PUBLIC_API_URL + '/products/options')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        setFilteredDestinationBranches(branches.filter(branch => branch.id !== Number(selectedOriginBranch)))    
    }, [selectedOriginBranch, branches])

    useEffect(() => {
        setFilteredProducts(products.filter(product => product.branch_id === Number(selectedOriginBranch)))
    }, [selectedOriginBranch])

    useEffect(() => {
        if(quantity && selectedProduct) {
            const productFound = products.find(product => product.product_id === Number(selectedProduct))
            if(Number(quantity) > productFound.quantity) {
                console.log('Excedeu')
                Alert.alert('Quantidade disponível excedida!')
                setQuantity('')
            }
        }
    },[quantity, selectedProduct])

    function validateNewMovement() {
        axios.post(process.env.EXPO_PUBLIC_API_URL + '/movements', {
            originBranchId: selectedOriginBranch,
            destinationBranchId: selectedDestinationBranch,
            productId: selectedProduct,
            quantity:quantity
        })
        .then(() => {
            Alert.alert('Movimentação cadastrada com sucesso!')
            navigation.navigate('BranchMovements')
        })
        .catch((error) => {
            Alert.alert('Não foi possível cadastrar a movimentação')
            console.log(error)
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}  keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
                <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    <SafeAreaView style={globalStyles.safe}>
                        <Text style={[globalStyles.logoTitle, {marginTop:15}]}>Nova Movimentação</Text>
                        <Text style={globalStyles.pickerLabel}>Filial Origem</Text>
                        <View style={globalStyles.pickerContainer}>
                            <Picker
                                selectedValue={selectedOriginBranch}
                                onValueChange={(itemValue) => setSelectedOriginBranch(itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="Selecione uma filial" value="" />
                                {branches.map((branch:BranchOption) => (
                                    <Picker.Item key={branch.id} label={branch.name} value={branch.id} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={globalStyles.pickerLabel}>Filial Destino</Text>
                        <View style={globalStyles.pickerContainer}>
                            <Picker
                                selectedValue={selectedDestinationBranch}
                                onValueChange={(itemValue) => setSelectedDestinationBranch(itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="Selecione uma filial" value="" />
                                {filteredDestinationBranches.map((branch:BranchOption) => (
                                    <Picker.Item key={branch.id} label={branch.name} value={branch.id} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={globalStyles.pickerLabel}>Produto desejado</Text>
                        <View style={globalStyles.pickerContainer}>
                            <Picker
                                selectedValue={selectedProduct}
                                onValueChange={(itemValue) => setSelectedProduct(itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="Selecione um produto" value="" />
                                {filteredProducts.map((product: ProductOption) => (
                                    <Picker.Item key={product.product_id} label={`${product.product_name} - ${product.quantity} unid`} value={product.product_id} />
                                ))}
                            </Picker>
                        </View>

                        <View>
                            <Text style={globalStyles.pickerLabel}>Quantidade desejada</Text>
                            <TextInput
                                style={globalStyles.textInput}
                                keyboardType="numeric"
                                value={quantity}
                                onChangeText={(text) => setQuantity(text)}
                                placeholder="Digite a quantidade"
                            />
                        </View>
                    
                        <View>
                            <Text style={globalStyles.pickerLabel}>Observações</Text>
                            <TextInput
                                style={globalStyles.textInput}
                                value={observations}
                                onChangeText={(text) => setObservations(text)}
                                multiline
                            />
                        </View>
                    
                        <TouchableOpacity style={[globalStyles.loginButton, {alignSelf:'center'}]} onPress={validateNewMovement}>
                            <Text style={globalStyles.loginButtonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
