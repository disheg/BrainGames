#!/usr/bin/env node
import userName from '..';

const name = userName();
console.log('Welcome to the Brain Games\n');
console.log(`May I have your name? ${name}`);
console.log(`Hello, ${name}`);
