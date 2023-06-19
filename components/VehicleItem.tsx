// VehicleItem.tsx
import React from 'react';
import { View, Text } from 'react-native';
import type {IVehicle} from "../models/IVehicle";


interface VehicleItemProps {
    vehicle: IVehicle;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
    return (
        <View>
            <Text>{`ТС #${vehicle.id}`}</Text>
            <Text>{`Имя водителя: ${vehicle.name}`}</Text>
            <Text>{`Категория: ${vehicle.category}`}</Text>
        </View>
    );
};

export default VehicleItem;
