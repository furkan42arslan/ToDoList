import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.style';


const Header = (props) => {
    return(
        <View style={styles.header_container}>
            <Text style={styles.header_title}>Yapılacaklar</Text>
            {/* Görev Sayısı */}
            <Text style={styles.header_counter}>{props.count}</Text>
        </View>
    )
}


export default Header
