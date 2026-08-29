import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('Hola');

  /*
   * useEffect sin arreglo de dependencias
   * Este useEffect se ejecuta después de cada render del componente.
   * Se usa cuando necesitamos ejecutar una acción cada vez
   * que el componente se actualiza, sin depender de una variable específica.
   */
  useEffect(() => {
    console.log('El componente se ha renderizado');
  });

  /*
   * useEffect con arreglo de dependencias
   * Este useEffect se ejecuta cuando cambia el valor de contador.
   * Lo usamos cuando queremos ejecutar una acción al cambiar
   * una variable específica del componente.
   */
  useEffect(() => {
    console.log(`El contador ha cambiado: ${contador}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarea useEffect</Text>

      <Text style={styles.contador}>
        Contador: {contador}
      </Text>

      <Button
        title="Incrementar"
        onPress={() => setContador(contador + 1)}
      />

      <View style={styles.botonMensaje}>
        <Button
          title="Cambiar mensaje"
          onPress={() =>
            setMensaje(mensaje === 'Hola' ? 'Bienvenido' : 'Hola')
          }
        />
      </View>

      <Text style={styles.mensaje}>
        Mensaje: {mensaje}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  contador: {
    fontSize: 20,
    marginBottom: 20,
  },

  botonMensaje: {
    marginTop: 15,
  },

  mensaje: {
    fontSize: 18,
    marginTop: 20,
  },
});