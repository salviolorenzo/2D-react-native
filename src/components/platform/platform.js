import React, { useState, PureComponent } from 'react';
import Matter from 'matter-js';
import PlatformImage from './platform.png';
import Tile from '../../tile';
import { collisionsCategories } from '../common/constants';

export class Renderer extends PureComponent {
  render() {
    return (
      <Tile
        source={PlatformImage}
        size={this.props.size}
        position={this.props.body.position}
        angle={this.props.body.angle}
      />
    );
  }
}

export default function Platform(world, pos, angle, width, category = 0x0002) {
  let height = 20;
  let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
    isStatic: true,
    angle: angle,
    friction: 1,
    collisionFilter: {
      category: collisionsCategories.Platform,
      mask: collisionsCategories.barrel
    }
  });

  let vertices = [
    { x: pos.x - width / 2, y: pos.y - height / 2 },
    { x: pos.x + width / 2, y: pos.y - height / 2 },
    { x: pos.x - width / 2, y: pos.y + height / 2 },
    { x: pos.x + width / 2, y: pos.y + height / 2 }
  ];

  Matter.Vertices.rotate(vertices, body.angle, body.position);

  Matter.World.add(world, [body]);
  return {
    platform: { vertices },
    body,
    size: { width, height },
    renderer: <Renderer />
  };
}
