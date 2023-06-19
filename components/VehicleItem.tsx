// VehicleItem.tsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {IVehicle} from "../models/IVehicle";


interface VehicleItemProps {
    vehicle: IVehicle,
    onPress: () => void;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.VehicleItem}>
                    <Text>{`ТС #${vehicle.id}`}</Text>
                    <Text>{`Имя водителя: ${vehicle.name}`}</Text>
                    <Text>{`Категория: ${vehicle.category}`}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    VehicleItem: {
        fontStyle: 'arial',
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 15,
        padding: 15,

        // Дополнительные стили, которые вы хотите применить
    },
});

export default VehicleItem;
