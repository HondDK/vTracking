import React from 'react';
import {Button, Linking, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useTranslation} from "react-i18next";
const VehicleDetailScreen = ({route}) => {
    // Здесь находится весь код для экрана деталей ТС
    // Он отображает карту с маркером выбранного ТС и информацию о нем.
    // Также здесь есть функции для звонка водителю и отправки сообщения.
    const { t, i18n } = useTranslation();
    const {vehicle} = route.params;

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
                style={{height: 450}}
                initialRegion={{
                    latitude: Number(vehicle.latitude),
                    longitude: Number(vehicle.longitude),
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                key={vehicle.id}
                coordinate={{
                    latitude: Number(vehicle.latitude),
                    longitude: Number(vehicle.longitude),
                }}
            />
            </MapView>
            <View style={{marginTop: 40}}>
                <Text>{t("detailScreen.category")} {vehicle.category}</Text>
                <Text>{t("detailScreen.driverName")} {vehicle.name}</Text>
                <Text>{t("detailScreen.driverNumber")} {vehicle.phone_number}</Text>
                <Button title={t("listScreen.callButton")} onPress={handleCallDriver}/>
                <Button title={t("listScreen.messageButton")} onPress={handleSendMessage}/>
            </View>
        </View>
    );
};

export default VehicleDetailScreen;