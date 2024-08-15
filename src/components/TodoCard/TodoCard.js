import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './TodoCard.style'
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoCard = ({ text, todoDone, onDelete }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={todoDone}>
          <Text style={[styles.text, { textDecorationLine: text.isDone ? 'line-through' : 'none' }]}>
            {text.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Icon name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
    );
  };
export default TodoCard