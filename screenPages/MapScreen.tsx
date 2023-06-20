import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useFetchData, { FetchDataResponse } from '../hooks/useFetchData';
import type { IVehicle } from '../models/IVehicle';
import {useNavigation} from "@react-navigation/native";

const MapScreen = () => {
    // Здесь находится весь код для экрана с картой всех доступных ТС
    // Он отображает карту с маркерами всех ТС и обрабатывает навигацию к экрану VehicleDetailScreen при выборе маркера.
    const navigation = useNavigation();
    const { data }: FetchDataResponse<IVehicle[]> = useFetchData(
        'https://6490611e1e6aa71680cb24ca.mockapi.io/TS'
    );
    const dataArray: IVehicle[] = data || [];

    const [mapRegion, setMapRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        // Обновление координат центра карты, чтобы показать все ТС на карте
        if (dataArray.length > 0) {
            const latitudes = dataArray.map((vehicle) => parseFloat(vehicle.latitude));
            const longitudes = dataArray.map((vehicle) => parseFloat(vehicle.longitude));
            const maxLat = Math.max(...latitudes);
            const minLat = Math.min(...latitudes);
            const maxLng = Math.max(...longitudes);
            const minLng = Math.min(...longitudes);
            const latitudeDelta = maxLat - minLat;
            const longitudeDelta = maxLng - minLng;
            const centerLat = (maxLat + minLat) / 2;
            const centerLng = (maxLng + minLng) / 2;

            setMapRegion({
                latitude: centerLat,
                longitude: centerLng,
                latitudeDelta,
                longitudeDelta,
            });
        }
    }, [dataArray]);
    function renderMarkerIcon(category: string)  {
        switch (category) {
            case 'Minivan':
                return require('../assets/delivery-car-svgrepo-com.png');
            case 'Hatchback':
                return require('../assets/car-svgrepo-com.png');
            // Можно добавить новые изображения под новые категории
            default: // дефолтное изображение
                return require('../assets/car1-svgrepo-com.png');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} region={mapRegion}>
                {dataArray.map((vehicle) => (
                    <Marker
                        key={vehicle.id}
                        coordinate={{
                            latitude: parseFloat(vehicle.latitude),
                            longitude: parseFloat(vehicle.longitude),
                        }}
                        title={vehicle.name}
                        description={vehicle.category}
                        onPress={() => navigation.navigate(`VehicleDetail`, {vehicle: vehicle})}
                    >
                      <Image source={renderMarkerIcon(vehicle.category)} />
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default MapScreen;
