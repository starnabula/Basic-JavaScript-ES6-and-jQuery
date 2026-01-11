

import { sayHi,sayBye } from './say.js'

import * as say from './say.js'

import {sayHi as sh, sayBye as sb } from './say.js'

sayHi('john')
sayBye('john')

say.sayHi('john')
say.sayBye('john')

sh('john')
sb('john')


import User from './user.js'


const obj = new User('john')
console.log(obj.name);
obj.sayhi()