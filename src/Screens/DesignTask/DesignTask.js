import {View, Text, Alert} from 'react-native';
import React from 'react';
import Draggable from 'react-native-draggable';

const DesignTask = () => {
  return (
    <View>
      <Draggable
        x={70}
        y={100}
        renderSize={56}
        renderColor="black"
        renderText="A"
        isCircle
        shouldReverse={false}
        onShortPressRelease={() => Alert.alert('touched!!')}
        children={<Text style={{padding: 40, color: 'white'}}>Hi</Text>}
      />
      <Draggable x={200} y={300} renderColor="red" renderText="B" />
      <Draggable />
      <Draggable x={180} y={500}>
        <View style={{padding: 30, backgroundColor: 'red', borderRadius: 20}}>
          <Text>Ali</Text>
        </View>
      </Draggable>
    </View>
  );
};

export default DesignTask;
