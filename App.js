import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header/Header';
import TodoCard from './src/components/TodoCard/TodoCard';
import SaveCard from './src/components/SaveCard/SaveCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  // Görevler listesinin durumu, başlangıçta boş bir dizi
  const [todos, setTodos] = useState([]);
  
  // Yeni bir görev ekleyen fonksiyon
  const addTodo = async (text) => {
    const newTodo = {
      id: Date.now().toString(), // Her görev için benzersiz bir ID oluşturur
      text,
      isDone: false,
    };

    // Spread Operator (Yayılma Operatörü) Nedir?
    // Spread operatörü (...), bir diziyi (veya nesneyi) açarak, içindeki öğeleri tek tek almanıza olanak tanır. Bu, diziyi kopyalayıp yeni öğeler eklemek için kullanışlıdır.
    // [...todos]: Mevcut todos dizisini yayar ve içindeki tüm öğeleri yeni bir diziye kopyalar. Bu, mevcut todos dizisinin bir kopyasını oluşturur.
    // [...todos, newTodo]: Mevcut todos dizisinin kopyasının sonuna newTodo öğesini ekler.
    const updatedTodos = [...todos, newTodo]; // Yeni görevi listeye ekler.
    setTodos(updatedTodos);

    try {
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.error('Line-21:', error);
    }
  };


  useEffect(() => {
    const loadTodos = async () => { // async olarak tanımlayın
      try {
        const storedTodos = await AsyncStorage.getItem('todos'); // await kullanın
        if(storedTodos){
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadTodos();
  }, []);

  // Görev tamamlandığında işaretleyen veya işaretini kaldıran fonksiyon
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  // Görevi Silme
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const renderItem = ({ item }) => (
    <TodoCard
      text={item}
      todoDone={() => toggleTodo(item.id)} // Görev tamamlanma işlevi
      onDelete={() => handleDelete(item.id)}
    />
  )

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* todos stat'inin içindeki veriler sayar. */}
      <Header count={todos.length}/>
      
      <FlatList
       data={todos}
       renderItem={renderItem}
       keyExtractor={(item) => item.id}
      />
      
      <SaveCard 
      addTodo={addTodo} // Doğru prop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    marginTop:32,
  },
  
});
