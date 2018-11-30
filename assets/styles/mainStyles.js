import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: '15%',
        alignItems: 'center',
    },
    headerImage: {
        width: 350,
        resizeMode: 'contain',
    },
    mainTextContainer: {
        alignItems: 'center',
        marginHorizontal: 25,
        paddingTop: 30,
    },
    mainHeader: {
        fontSize: 30,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 30,
        textAlign: 'center',
        paddingBottom: '15%',
    },
    mainText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        paddingBottom: 15,
    },
    pageHeader: {
        fontSize: 24,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        paddingBottom: '15%',
    },
    selectorBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
    },
    fishContainer: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center'
    },
    fishBlock: {
        marginHorizontal: 10
    },
    fishImage: {
        width: 48,
        height: 48,
        marginBottom: '5%'
    },
    fishText: {
        paddingBottom: 25,
    },
    resultsContainer: {
        paddingTop: '15%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
    },
    resultBlocks: {
        marginRight: '5%',
        marginLeft: '5%',
        textAlign: 'center',
        alignItems: 'center'
    },
    resultHeader: {
        fontSize: 24,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        paddingBottom: '5%',
    },
    quality: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
});