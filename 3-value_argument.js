#!/usr/bin/node

const arg = process.argv[2];

if (arg === undefined) {
  console.log('No argument');
  console.log('School School');
} else {
  console.log(arg);
}
