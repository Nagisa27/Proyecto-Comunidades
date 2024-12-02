import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
} from "react-native";
import { NativeBaseProvider, Box, Input } from "native-base";

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Calculadora IMC</Text>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://i.pinimg.com/280x280_RS/bb/a9/cb/bba9cb3083bc735565f61c5bdaecb7d9.jpg",
          }}
        ></Image>
        <Box alignItems="center">
          <Input
            value={peso}
            w="100%"
            onChangeText={(value) => setPeso(value)}
            placeholder="Value Controlled Input"
          />
        </Box>
        ;
        <TextInput
          placeholder="Ingrese su peso (Kg)"
          keyboardType="numeric"
          onChangeText={(value) => setPeso(value)}
        ></TextInput>
        <TextInput
          placeholder="Ingrese su altura (M)"
          keyboardType="numeric"
          onChangeText={(value) => setAltura(value)}
        ></TextInput>
        <Button
          title="Calcular"
          onPress={() => Alert.alert("Alerta", calcularNivelPeso(peso, altura))}
        ></Button>
      </View>
    </NativeBaseProvider>
  );
}

const calcularIMC = (peso, altura) => {
  let IMC = peso / (altura * altura);
  console.log(IMC);
  return IMC.toFixed(2);
};
const calcularNivelPeso = (peso, altura) => {
  let IMC = calcularIMC(peso, altura);
  let respuesta = "";
  if (IMC < 18.5) {
    respuesta = "Su IMC es: " + IMC + "Peso inferior al normal";
  }
  if (IMC >= 18.5 && IMC <= 24.9) {
    respuesta = "Su IMC es: " + IMC + "Normal";
  }
  if (IMC >= 25 && IMC <= 29.9) {
    respuesta = "Su IMC es: " + IMC + "Peso superior al normal";
  }
  if (IMC >= 30) {
    respuesta = "Su IMC es: " + IMC + "Obesidad";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 100,
    height: 100,
  },
});
