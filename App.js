import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import { store } from './src/store/store';

export default function App() {

    return (
        <Provider store={store}>
            <View>
              <Text>Test Firebase</Text>
            </View>
        </Provider>
    );
}
