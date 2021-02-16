import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';


export default function App() {
  const [weight, setWeight] = useState('');
const [bottles, setBottles] = useState(1);
const [time, setTime] = useState(0.5);
const [gender, setGender] = useState('male');
const [promilles, setPromilles] = useState(0);

function calculate() {
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - burning * time;
  let result = 0;
  if (gender === 'male') {
    result = gramsLeft / (weight*0.7);
  }
  else {
    result = gramsLeft / (weight*0.6);
  }
  if (result < 0){
    result = 0;
  }
  setPromilles(result);
}

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weigth</Text>
        <TextInput keyboardType="numeric"
        placeholder="Enter weight"
        value={weight}
        onChangeText={text => setWeight(text)}
        >

        </TextInput>
      </View>
      <View style={styles.field,{zIndex:10}}>
        <Text>Bottles</Text>
        <Picker 
        style={{height: 40}}
        mode='dropdown'
        selectedValue={bottles}
        onValueChange={itemValue => setBottles(itemValue)}
        >
          <Picker.Item label="1 bottle" value="1" />
          <Picker.Item label="2 bottles" value="2" />
          <Picker.Item label="3 bottles" value="3" />
          <Picker.Item label="4 bottles" value="4" />
          <Picker.Item label="5 bottles" value="5" />
          <Picker.Item label="6 bottles" value="6" />
          <Picker.Item label="7 bottles" value="7" />
          <Picker.Item label="8 bottles" value="8" />
          <Picker.Item label="9 bottles" value="9" />
          <Picker.Item label="10 bottles" value="10" />

        </Picker>
      </View>
      <View style={styles.field,{zIndex:20}}>
        <Text>Time</Text>
        <Picker 
                style={{height: 40}}
                mode='dropdown'
                selectedValue={time}
                onValueChange={itemValue => setTime(itemValue)}
                >
          <Picker.Item label="30 minutes" value="0.5" />
          <Picker.Item label="1 hour" value="1" />
          <Picker.Item label="2 hours" value="2" />
          <Picker.Item label="3 hours" value="3" />
          <Picker.Item label="5 hours" value="5" />
          <Picker.Item label="8 hours" value="8" />
          <Picker.Item label="10 hours" value="10" />
          <Picker.Item label="15 hours" value="15" />
          <Picker.Item label="24 hours" value="24" />
        </Picker>
      </View>
      <View>
        <Text>Gender</Text>
        <RadioForm
      radio_props={[
        {label: 'Male',value: 'male'},
        {label: 'Female',value:'female'}
      ]}
      onPress={(value) => {setGender(value)}}
      >
      </RadioForm>
      </View>
      <View>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title='Calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
  },
  input: {
    marginTop: 10,
  },
  field: {
    margin: 10,
  },

});
