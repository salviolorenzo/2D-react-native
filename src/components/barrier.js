import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Matter from 'matter-js';
import { collisionsCategories } from '../utils/constants';

export class Renderer extends Component {
  render() {
    const { width, height } = this.props.size;
    const body = this.props.body;
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
      <View
        style={[
          styles.barrier,
          this.props.size,
          {
            left: x,
            top: y
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  barrier: {
    position: 'absolute',
    backgroundColor: 'pink'
  }
});

export default (
  world,
  pos,
  height,
  mask = collisionsCategories.mario | collisionsCategories.barrel
) => {
  let width = 20;
  let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
    isStatic: true,
    friction: 0,
    collisionFilter: {
      category: collisionsCategories.barrier,
      mask: mask
    }
  });
  Matter.World.add(world, [body]);
  return {
    body,
    size: { width, height }
  };
};
