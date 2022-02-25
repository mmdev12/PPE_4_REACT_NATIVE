import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Adherent extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.Adherent}>
                <Text style={styles.AdherentLeague}>{this.props.val.date}</Text>
                <Text style={styles.AdherentLeague}>{this.props.val.Adherent}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.AdherentDelete}>

                    <Text style={styles.AdherentJoueurLeague}>Supprimer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Adherent: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    AdherentLeague: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    AdherentDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    AdherentJoueurLeague: {
        color: 'white',
    }
})