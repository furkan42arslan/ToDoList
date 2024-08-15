import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        padding: 13,
        backgroundColor: "#7DA453",
        marginTop: 9,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center'
    },
    text:{
        fontSize: 18,
        color: "white",
    },
    deleteButton:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:'#F5004F',
        justifyContent:'center',
        alignItems:'center'

    },
    deleteButtonText:{
        fontSize:25,
        color:'white'
    }
});
