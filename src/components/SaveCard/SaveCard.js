import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './SaveCard.style';


const SaveCard = ({ addTodo }) => {

    const [todo, setTodo] = useState('');  // Metin kutusunun değerini saklar

    const handleChangeText = (inputText) => {
        setTodo(inputText);
    };

    // Kaydet butonuna tıkladığında çalışacak fonksiyon
    const handleAddTodo = () => {
        if(todo.trim()) { // eğer metin boş değilse
        addTodo(todo); // Metni addTodo fonksiyonuna gönderir
        setTodo(''); // Metin kutusunu temizler 
        }
    }


    return(
        <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={todo}
                    onChangeText={handleChangeText}
                    placeholder='Yeni görev ekle'
                    placeholderTextColor="#747778"
                />
                <TouchableOpacity
                    style={styles.saveButton }
                    onPress={handleAddTodo}
                >
                <Text style={styles.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
        </View>
    )
}



export default SaveCard