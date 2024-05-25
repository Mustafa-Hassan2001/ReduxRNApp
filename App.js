import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

// Action Types
const UPDATE_VALUE = 'UPDATE_VALUE';
const UPDATE_V = 'UPDATE_V'; // Define the action type

// Action Creator
const updateValue = (value, actionType) => ({
  type: actionType,
  payload: value,
});

// Initial State
const initialState = {
  value: '',
  data: 'nfn',
  ashdkjas: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      console.log(action);
      return { ...state, value: action.payload };
    case UPDATE_V: // Use the defined action type
      console.log(action);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Main Component
const Main = () => {
  const value = useSelector((state) => state.value);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter a value:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => dispatch(updateValue(text, 'UPDATE_VALUE'))}
      />
      <Text style={styles.value}>Current Value: {value}</Text>

      <TextInput
        style={styles.input}
        value={data}
        onChangeText={(text) => dispatch(updateValue(text, 'UPDATE_V'))}
      />
      <Text style={styles.value}>Current Value: {data}</Text>
    </View>
  );
};

// App Component
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
    width: '100%',
  },
  value: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
  },
});
