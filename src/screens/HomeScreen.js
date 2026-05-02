import { View, Text, FlatList } from 'react-native';
import { categorias } from '../data/mock';


export default function HomeScreen() {
  return (
    <View>
      <Text>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  );
}

