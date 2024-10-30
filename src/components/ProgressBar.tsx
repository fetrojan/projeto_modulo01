import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function ProgressBar({ status }) {
    let progress = '0%';
    let icon = null;

    if (status === 'created') {
        progress = '0%';
        icon = <Icon name="medkit-sharp" size={24} color="#1C4E80" />;
    } else if (status === 'em transito') {
        progress = '50%';
        icon = <Icon name="medkit-sharp" size={24} color="#1C4E80" />;
    } else if (status === 'Coleta finalizada') {
        progress = '100%';
        icon = <Icon name="checkmark-circle" size={24} color="#1C4E80" />;
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            
            <View style={{ width: '100%', height: 10, backgroundColor: '#C2C2C2', borderRadius: 5, overflow: 'hidden' }}>
                <View style={{ width: progress, height: '100%', backgroundColor: '#1C4E80' }} />
            </View>

            <View style={{ position: 'absolute', left: progress, top: -7 }}>{icon}</View>
        </View>
    );
}
