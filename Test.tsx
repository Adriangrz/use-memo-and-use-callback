import React, { useState } from "react";
import { Button, FlatList, Text, StyleSheet, View } from "react-native";

type Props = {
    results: string[];
    clear: ()=>void;
};

const Test = (props:Props) => {
    console.log("render test");
    return(
        <View style={styles.container}>
            <Text>Test</Text>
            <FlatList
                    data={props.results}
                    renderItem={({ item }) => <Text >{item}</Text>}
                />
            <Button onPress={()=>props.clear()} title="Clear" />  
        </View>
    );
};
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
export default React.memo(Test);