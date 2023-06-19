// VehicleItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type {IVehicle} from "../models/IVehicle";


interface VehicleItemProps {
    vehicle: IVehicle,
    onPress: () => void;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View>
            <Text>{`ТС #${vehicle.id}`}</Text>
            <Text>{`Имя водителя: ${vehicle.name}`}</Text>
            <Text>{`Категория: ${vehicle.category}`}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default VehicleItem;
