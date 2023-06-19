import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import VehicleItem from '../components/VehicleItem';
import useFetchData, {FetchDataResponse} from "../hooks/useFetchData";
import type {IVehicle} from "../models/IVehicle";
import {useNavigation} from '@react-navigation/native';

const VehicleListScreen = () => {
    const {data}: FetchDataResponse<IVehicle[]> = useFetchData("https://6490611e1e6aa71680cb24ca.mockapi.io/TS");
    const dataArray: IVehicle[] = data || [];

    const navigation = useNavigation();

    const [filteredData, setFilteredData] = useState<IVehicle[]>(dataArray);

    const [category, setCategory] = useState<string>("");

    const handleFilter = (selectedCategory: string) => {
        const filteredArray = dataArray.filter((item) => item.category === selectedCategory);
        setFilteredData(filteredArray);

    };

    useEffect(() => {
        setFilteredData(dataArray);

    }, [dataArray]);

    // Get unique categories
    const categories = Array.from(new Set(dataArray.map((item) => item.category)));

    return (
        <View>
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                {categories.map((categoryName, index) => (
                    <Button
                        key={index}
                        title={categoryName}
                        onPress={() => setCategory(categoryName)}
                        color={category === categoryName ? 'black' : 'grey'}
                    />
                ))}
                <Button title="Применить" onPress={() => handleFilter(category)}/>
                <View style={styles.container}>
                    <FlatList
                        data={filteredData}
                        renderItem={({item}) => (
                            <VehicleItem
                                vehicle={item}
                                onPress={() => navigation.navigate(`VehicleDetail`, {vehicle: item})}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{

        // Дополнительные стили, которые вы хотите применить
    },

});


export default VehicleListScreen;
