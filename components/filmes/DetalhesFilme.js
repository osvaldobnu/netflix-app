import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const DetalhesFilme = ({ route }) => {
    const { filme } = route.params

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri : `https://image.tmdb.org/t/p/w500${filme.poster_path}`}} 
            style={styles.poster} />   

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{filme.title}</Text>
                <Text style={styles.overview}>{filme.overview}</Text>
                <Text style={styles.releaseDate}>
                    Data Lançamento: {filme.release_date}
                </Text>
                <Text style={styles.rating}>Nota: {filme.vote_average} / 10</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'black',
        padding : 16
    },
    poster : {
        width : '100%',
        aspectRatio: 2 / 3,
        borderRadius : 8,
        marginBottom : 16
    },
    infoContainer : {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding : 16,
        borderRadius : 8
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        color : 'white',
        marginBottom : 8
    },
    overview : {
        fontSize : 16,
        color : 'white',
        marginBottom: 8
    },
    releaseDate : {
        fontSize : 14,
        color: 'white',
        marginBottom : 4
    }, 
    rating : {
        fontSize : 14,
        color: 'white'
    }
})

export default DetalhesFilme