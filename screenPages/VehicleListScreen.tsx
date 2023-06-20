import React, {useEffect, useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import VehicleItem from '../components/VehicleItem';
import useFetchData, {FetchDataResponse} from '../hooks/useFetchData';
import type {IVehicle} from '../models/IVehicle';
import {useNavigation} from '@react-navigation/native';



const VehicleListScreen = () => {
    // Здесь находится весь код для экрана списка ТС
    // Он отображает список ТС, фильтрует их по категории и обрабатывает навигацию к экрану VehicleDetailScreen.

    const {data}: FetchDataResponse<IVehicle[]> = useFetchData('https://6490611e1e6aa71680cb24ca.mockapi.io/TS');
    const dataArray: IVehicle[] = data || [];

    const navigation = useNavigation();

    const [filteredData, setFilteredData] = useState<IVehicle[]>(dataArray);
    const [category, setCategory] = useState<string>('');

    const handleFilter = (selectedCategory: string) => {
        const filteredArray = dataArray.filter((item) => item.category === selectedCategory);
        setFilteredData(filteredArray);
    };

    useEffect(() => {
        setFilteredData(dataArray);
    }, [dataArray]);


    const categories = Array.from(new Set(dataArray.map((item) => item.category)));

    return (
        <View style={{flex: 1}}>
            <ScrollView horizontal style={styles.categoryContainer}>
                {categories.map((categoryName, index) => (
                    <Button
                        key={index}
                        title={categoryName}
                        onPress={() => setCategory(categoryName)}
                        color={category === categoryName ? 'black' : 'grey'}
                    />
                ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button title="Применить" onPress={() => handleFilter(category)}/>
            </View>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryContainer: {
        flexDirection: 'row',
        maxHeight: 40,
    },
    buttonContainer: {
        width: "100%",
        marginBottom: 10,
    },
});

export default VehicleListScreen;
