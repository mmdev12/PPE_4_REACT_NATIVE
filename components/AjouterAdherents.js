import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Adherent from './Adherent';

export default class League extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            AdherentArray: [],
            AdherentLeague: '',
            AdherentCategorie: '',
            Abonnement:''
        }
    }

    render() {

        let Adherents = this.state.AdherentArray.map((val, key) => {
            return <Adherent key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteAdherent(key)}
            />
        })


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Liste des Adherents</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {Adherents}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(AdherentLeague) => this.setState({ AdherentLeague })}
                        value={this.state.AdherentLeague}
                        placeholder='Nouveau Adherent'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={(AdherentCategorie) => this.setState({ AdherentCategorie })}
                        value={this.state.AdherentCategorie}
                        placeholder='Categorie'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(Abonnement) => this.setState({ Abonnement })}
                        value={this.state.Abonnement}
                        placeholder="Prix de l'abonnement"
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addNouveauAdherent.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Ajouter</Text>
                </TouchableOpacity>

            </View>
        );
    }
    addNouveauAdherent() {
        if (this.state.AdherentLeague) {
            var date = new Date();

            this.state.AdherentArray.push({
               'date' : date.getFullYear()+
               '/' +(date.getMonth() + 1)+
               '/' + date.getDate(),
               'Adherent':this.state.AdherentLeague
            });

            this.setState({AdherentArray: this.state.AdherentArray});
            this.setState({AdherentLeague:this.state.AdherentLeague});
        }
    }

    deleteAdherent(key){
        this.state.AdherentArray.splice(key,1);
        this.setState({AdherentArray:this.state.AdherentArray});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3933FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 20,
        borderBottomColor: '#ddd',
        top: 20,

    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 20,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#3933FF',
        width: 90,
        top: 400,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});