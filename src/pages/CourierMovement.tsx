import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { globalStyles } from "../global/styles";
import Swiper from "react-native-deck-swiper";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage"


export function CourierMovement() {
    
    const [movements, setMovements] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [fileName, setFileName] = useState('')

    useEffect(() => {
        async function fetchName() {
            try {
                const storedName = await AsyncStorage.getItem('@name')
                if (storedName !== null) {
                    setName(storedName)
                }
            } catch (error) {
                console.log('Erro ao buscar o perfil', error)
            }
        }
        fetchName()
    }, [])


    async function getImageCamera(itemId) {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        
        if (permission.granted) {
            const imageInCamera = await ImagePicker.launchCameraAsync();
    
            if (!imageInCamera.canceled && imageInCamera.assets) {
                const asset = imageInCamera.assets[0];
                setImage(asset.uri);
                setType(asset.mimeType || 'image/jpeg');
                setFileName(asset.fileName || 'image.jpg');
                
                await uploadImage(asset.uri, asset.fileName || 'image.jpg', asset.mimeType || 'image/jpeg', itemId);
            } else {
                console.log("Câmera foi cancelada ou não retornou uma imagem.");
            }
        } else {
            console.log("Permissão para usar a câmera foi negada.");
        }
    }
    
    const uploadImage = async (uri, fileName, type, id) => {
        const dados = new FormData();
        dados.append('motorista', name);
        dados.append('file', {
            uri,
            name: fileName,
            type: type,
        });
    
        try {
            const response = await axios.put(process.env.EXPO_PUBLIC_API_URL + `/movements/${id}/start`, dados, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("DEU BOM NO UPLOAD", response.data);
            
            await fetchMovements();
        } catch (error) {
            console.error("DEU RUIM NO UPLOAD", error);
        }
    };
    
    const fetchMovements = async () => {
        try {
            const response = await axios.get(process.env.EXPO_PUBLIC_API_URL + '/movements');
            setMovements(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Não foi possível carregar as movimentações', error);
        }
    };
    
    useEffect(() => {
        fetchMovements();
    }, []);


    function renderCard(item) {
        if (!item || !item.produto) {
            return <Text>Loading...</Text>;
        }

        return (
            <View key={item.id} style={globalStyles.movementCard}>
                <Text style={{ alignSelf: 'flex-end', marginRight: 10}}>#{item.id}</Text>
                <View style={globalStyles.movementSection}>
                    <Image source={{uri: item.produto.imagem}} style={globalStyles.movementImage}/>
                    <View style={{width: '50%'}}>
                        <Text style={globalStyles.movementTitle}>{item.produto.nome}</Text>
                        <Text style={globalStyles.movementQuantity}>{item.quantidade} unidades</Text>
                    </View>
                </View>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20, marginTop: 25}]}>Origem: <Text style={[globalStyles.cardDescription, {color:'#4682B4'}]}>{item.origem.nome}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Destino: <Text style={[globalStyles.cardDescription, {color:'#4682B4'}]}>{item.destino.nome}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Status: <Text style={[globalStyles.cardDescription, {color:'#4682B4'}]}>{item.status}</Text></Text>
                <Text style={[globalStyles.cardText, {alignSelf:'flex-start', fontWeight:'600', marginBottom:20}]}>Histórico: <Text style={[globalStyles.cardDescription, {color:'#4682B4'}]}>{item.historico.descricao}</Text></Text>

                <View style={[globalStyles.movementSection, {marginTop:90}]}>
                    <TouchableOpacity style={globalStyles.movementButton} onPress={() => getImageCamera(item.id)}>
                        <Text style={globalStyles.movementButtonText}>Iniciar entrega</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.movementButton}>
                        <Text style={globalStyles.movementButtonText}>Mapa</Text>
                    </TouchableOpacity>
                </View>
    
            </View>
        )
    }

    function handleSwipe() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movements.length);
    }   

    return(
        <SafeAreaView style={globalStyles.safe}>

            <Text>Tela Movimentções Motorista</Text>

            {movements.length > 0 ? (
                <Swiper
                    cards={movements}
                    renderCard={renderCard}
                    backgroundColor={'#D3D3D3'}
                    stackSize={3}
                    infinite
                    disableTopSwipe
                    disableLeftSwipe
                    onSwiped={handleSwipe}
                    cardHorizontalMargin={35}
                    animateCardOpacity
                    
                />
            ) : (
                <Text>Carregando movimentações...</Text>
            )}

        </SafeAreaView>
    )
}