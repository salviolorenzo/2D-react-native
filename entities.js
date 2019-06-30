import React from 'react';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';
import Platform from './platform';
import Mario from './mario';

Matter.Common.isElement = () => false;

const { width, height } = Dimensions.get('window');
