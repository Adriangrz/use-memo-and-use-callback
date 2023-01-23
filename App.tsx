import { useCallback, useMemo, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Test from './Test';

export default function App() {
  const [numberToPowerOfTen, setNumberToPowerOfTen] = useState(0)
  const [numberToPowerOfFive, setNumberToPowerOfFive] = useState(0)
  const [results, setResult] = useState<string[]>([]);
    
  const clear = useCallback(()=> { setResult([]) }, []);


  const toPowerOfTen = (count:number)=> {
    console.log("power of ten");
    return count * count * count * count * count * count * count * count * count * count;
  }
  // const resultOfTenthPower = toPowerOfTen(numberToPowerOfTen)
  const resultOfTenthPower = useMemo(()=> {
    return toPowerOfTen(numberToPowerOfTen)
  }, [numberToPowerOfTen])

  const toPowerOfFive = (count:number)=> {
    console.log("power of five");
    const result = count * count * count * count * count;
    setResult([...results,`${count} to power of five = ${result}`])
    return result;
  }
  // const resultOfFifthPower = toPowerOfFive(numberToPowerOfFive)
  const resultOfFifthPower = useMemo(()=> {
    return toPowerOfFive(numberToPowerOfFive)
  }, [numberToPowerOfFive])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          <Text>Result to power of ten: {resultOfTenthPower}</Text>
          <TextInput
           style={styles.input}
           onChangeText={(value)=>setNumberToPowerOfTen(Number(value))}
           value={numberToPowerOfTen.toString()}
           placeholder="number"
           keyboardType="numeric"
         />
          <Text>Result to power of five: {resultOfFifthPower}</Text>
          <TextInput
           style={styles.input}
           onChangeText={(value)=>setNumberToPowerOfFive(Number(value))}
           value={numberToPowerOfFive.toString()}
           placeholder="number"
           keyboardType="numeric"
         />
         <Test results={results} clear={clear}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
