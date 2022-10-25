import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import clipboard from "../../../assets/clipboard.png";
import logo from "../../../assets/logo.png";
import plus from "../../../assets/plus.png";
import { styles } from "./styles";

export function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleTodoAdd() {}

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={logo} />
      </View>

      <View style={styles.containerForm}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            onChangeText={setTodo}
            value={todo}
          />

          <TouchableOpacity style={styles.button} onPress={handleTodoAdd}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerNumberTasks}>
          <View style={styles.containerNumber}>
            <Text style={styles.textCreated}>Criadas</Text>
            <Text style={styles.numberTasksContainer}>0</Text>
          </View>

          <View style={styles.containerNumber}>
            <Text style={styles.textDone}>Concluídas</Text>
            <Text style={styles.numberTasksContainer}>0</Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image style={styles.listEmptyImage} source={clipboard} />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
          renderItem={({ item }) => <Text>Teste</Text>}
        />
      </View>
    </View>
  );
}
