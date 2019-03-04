import SomeMath from './some_module.js';
import 'jquery';
import 'bootstrap';
require('../index.html');
console.log('hello webpack');
console.log(SomeMath.avg(3,6,9,123,5));
console.log(SomeMath.max(3,6,9));
console.log(SomeMath.merge({a: 222}, {b: 33}));