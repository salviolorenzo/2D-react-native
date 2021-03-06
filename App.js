import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import LevelOne from './src/entities/LevelOne';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GameEngine
        ref={'engine'}
        style={styles.game}
        systems={[]}
        entities={LevelOne()}
      >
        <StatusBar hidden={false} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: '#000'
  }
});
