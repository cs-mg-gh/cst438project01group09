import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WEATHERSTACK_KEY = '60d4f513a2ea228a580264bbb7df7f60';

const SearchByRegionScreen = () => {
    const navigation = useNavigation();
    const [regionName, setRegionName] = useState('');
    const [citiesInRegion, setCitiesInRegion] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch cities based on region name
    const fetchCitiesByRegion = async (region: string) => {
        if (region) {
            setLoading(true);
            setCitiesInRegion([]); // Clear previous search results

            try {
                const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_KEY}&query=${region}`;

                const response = await fetch(url);
                const json = await response.json();

                if (json && json.location) {
                    const city = json['location']['name'];
                    const region = json['location']['region'];
                    const country = json['location']['country'];
                    const location = `${city}, ${region}, ${country}`;

                    // Set new cities found in the region
                    setCitiesInRegion([location]); 
                } else {
                    setCitiesInRegion([]); // No result found
                }
            } catch (error) {
                console.error('Error fetching city data:', error);
                setCitiesInRegion([]); // Handle any errors
            } finally {
                setLoading(false);
            }
        }
    };

    // Trigger API call when regionName is updated
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (regionName) {
                fetchCitiesByRegion(regionName);
            }
        }, 500); // Delay search by 500ms to reduce API calls

        return () => clearTimeout(delayDebounceFn);
    }, [regionName]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Cities by Region</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter city name & region"
                value={regionName}
                onChangeText={setRegionName}
            />

            {/* Display loading spinner or search results */}
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : citiesInRegion.length > 0 ? (
                <ScrollView>
                    {citiesInRegion.map((city, index) => (
                        <View key={index} style={styles.cityItem}>
                            <Text style={styles.cityText}>{city}</Text>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => navigation.navigate('ViewCity', { city })} // Pass the city name to ViewCity screen
                            >
                                <Text style={styles.buttonText}>View</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            ) : (
                regionName && !loading && <Text style={styles.noResultText}>No cities found in this region</Text>
            )}

            {/* Button to go back to the Home screen */}
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        width: '60%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    noResultText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    },
    cityItem: {
        backgroundColor: 'lightgray',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
        alignItems: 'center',
        width: '100%',
    },
    cityText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default SearchByRegionScreen;
