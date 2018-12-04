import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: '10%',
        alignItems: 'center',
    },
    headerImage: {
        width: '80%',
        resizeMode: 'contain',
    },
    mainTextContainer: {
        alignItems: 'center',
        width: '80%',
        paddingTop: '5%',
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
        paddingBottom: '5%'
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
        paddingBottom: '5%'
    },
    fishContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'flex-start'
    },
    fishBlock: {
        marginHorizontal: '2%',
        maxWidth: '20%',
        minWidth: '20%',
        paddingBottom: '15%',
    },
    fishImage: {
        width: 48,
        height: 48,
        paddingTop: '15%',
    },
    fishText: {
        paddingTop: '15%',
        maxWidth: '100%',
        textAlign: 'center',
        flexWrap: 'wrap',
        flex: 1
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