import React from 'react';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';
import Platform from './platform';
import Mario from './mario';

Matter.Common.isElement = () => false;

const { width, height } = Dimensions.get('window');
const scale = Math.min(width, 430) / 375;
const cx = width / 2;
const cy = height / 2;
const offsetY = (height - 465) / 2 - 35;
const platformWidth = Math.min(width, 430);

export const LevelOne = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  world.gravity = { x: 0, y: 2 };

  return {
    physics: { engine: engine, world: world },

    platform1: Platform(
      world,
      { x: cx, y: offsetY + 35 },
      0,
      platformWidth * 0.25
    ),
    platform2: Platform(
      world,
      { x: cx - 15, y: offsetY + 100 },
      0,
      platformWidth * 0.8
    ),
    platform3: Platform(
      world,
      { x: cx + 15, y: offsetY + 165 },
      -0.07,
      platformWidth * 0.8
    ),
    platform4: Platform(
      world,
      { x: cx - 15, y: offsetY + 240 },
      0.07,
      platformWidth * 0.8
    ),
    platform5: Platform(
      world,
      { x: cx + 15, y: offsetY + 315 },
      -0.07,
      platformWidth * 0.8
    ),
    platform6: Platform(
      world,
      { x: cx - 15, y: offsetY + 390 },
      0.07,
      platformWidth * 0.8
    ),
    platform7: Platform(
      world,
      { x: cx, y: offsetY + 465 },
      0,
      platformWidth * 0.9
    ),

    mario: Mario(world, { x: cx, y: offsetY + 465 - 20 / 2 - 20 })
  };
};
