import React, { useLayoutEffect, useEffect } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SecondScreen({route, navigation}) {
    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message);
        }
        BackHandler.addEventListener('hardwareBackPress',close);
            return() => {
                BackHandler.removeEventListener('hardwareBackPress',close);
        }
    }, [])

    function close() {
        navigation.goBack(null);
        return true;
    }

useLayoutEffect(() => {
    navigation.setOptions({
        headerStyle: {
            backgroundColor: '#f0f0f0'
        }
    })
}, [navigation])

return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
    }
});