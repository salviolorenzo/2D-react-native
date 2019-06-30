import Matter from 'matter-js';
import _ from 'lodash';
import { base, containsPosition, shift, distance, position } from './index.js';

const standing = (platform, other) => {
  let basePos = base(other);
  let min = other.body.bounds.min.x;
  let max = other.body.bounds.max.x;
};
