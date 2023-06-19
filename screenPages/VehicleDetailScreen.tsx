import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import MapView from 'react-native-maps';

const VehicleDetailScreen = ({ route }) => {
    const { vehicle } = route.params;

    const handleCallDriver = () => {
        Linking.openURL(`tel:${vehicle.phone_number}`);
    };

    const handleSendMessage = () => {
        const message = encodeURIComponent(
            'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'
        );
        Linking.openURL(`whatsapp://send?phone=${vehicle.phone_number}&text=${message}`);
    };

    return (
        <View>
            <MapView
                style={{ height: 450 }}
                initialRegion={{
                    latitude: Number(vehicle.latitude),
                    longitude: Number(vehicle.longitude),
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            />
            <View style={{marginTop: 40 }}>
            <Text>Категория ТС: {vehicle.category}</Text>
            <Text>Имя водителя: {vehicle.name}</Text>
            <Text>Контактный номер водителя: {vehicle.phone_number}</Text>
            <Button title="Позвонить" onPress={handleCallDriver} />
            <Button title="Написать" onPress={handleSendMessage} />
            </View>
        </View>
    );
};

export default VehicleDetailScreen;