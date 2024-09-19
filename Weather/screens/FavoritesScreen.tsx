import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WEATHERSTACK_KEY = 'dsfasdfadsf'; 

const FavoritesScreen = () => {
    const navigation = useNavigation();
    const [cityName, setCityName] = useState('');
    const [favorites, setFavorites] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch weather data based on city name
    const fetchCityWeather = async (city: string) => {
        if (city) {
            setLoading(true);
            try {
                const url = new URL('http://api.weatherstack.com/current');
                url.searchParams.append('access_key', WEATHERSTACK_KEY);
                url.searchParams.append('query', city);

                const response = await fetch(url.toString());
                const json = await response.json();

                if (json && json.location) {
                    const city = json['location']['name'];
                    const region = json['location']['region'];
                    const country = json['location']['country'];
                    const location = `${city}, ${region}, ${country}`;

                    setSearchResult(location); // Set the search result
                } else {
                    setSearchResult(null); // No result found
                }
            } catch (error) {
                console.error('Error fetching city data:', error);
                setSearchResult(null);
            } finally {
                setLoading(false);
            }
        }
    };

    // Add city to favorites
    const addCityToFavorites = () => {
        if (searchResult && !favorites.includes(searchResult)) {
            setFavorites([...favorites, searchResult]);
            setSearchResult(null); // Clear search result after adding
            setCityName(''); // Reset input field
        }
    };

    // Trigger API call when cityName is updated
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (cityName) {
                fetchCityWeather(cityName);
            }
        }, 500); // Delay search by 500ms to reduce API calls

        return () => clearTimeout(delayDebounceFn);
    }, [cityName]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Favorite Cities</Text>

            {/* Input to search and add a city */}
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={cityName}
                onChangeText={setCityName}
            />

            {/* Display search result */}
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : searchResult ? (
                <View style={styles.searchResultContainer}>
                    <Text style={styles.cityText}>{searchResult}</Text>
                    <TouchableOpacity style={styles.addButton} onPress={addCityToFavorites}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                cityName && !loading && <Text style={styles.noResultText}>No city found</Text>
            )}

            {/* Display favorite cities in a horizontal scrollable row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.favoritesRow}>
                {favorites.map((city, index) => (
                    <View key={index} style={styles.favoriteItem}>
                        <Text style={styles.cityText}>{city}</Text>
                        <TouchableOpacity 
                            style={styles.viewButton} 
                            onPress={() => navigation.navigate('ViewCity', { city })}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>


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
    favoritesRow: {
        justifyContent: 'center',
        paddingVertical: 20,
    },
    favoriteItem: {
        backgroundColor: 'lightgray',
        padding: 15,
        borderRadius: 5,
        marginRight: 15,
        alignItems: 'center',
        width: 150,
    },
    cityText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    viewButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    searchResultContainer: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    noResultText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    }
});

export default FavoritesScreen;
