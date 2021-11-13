// unit.test.js

const { expect } = require('@jest/globals');

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
///////////////////////////////////////////// phone # tru
test('Phone Number 6612108190 is a phone number', () => {
    expect(functions.isPhoneNumber('661-210-8190')).toBe(true);
  });

test('Phone number 3235338221 is a phone number', () => {
    expect(functions.isPhoneNumber('323-533-8221')).toBe(true);
  });
//////////////////////////////////////////////////////////////// phone # false
test('Phone number 8008135 is not a phone number', () => {
    expect(functions.isPhoneNumber('8008135')).toBe(false);
  });

test('Phone number ?6969? is not a phone number', () => {
    expect(functions.isPhoneNumber('?6969?')).toBe(false);
  });
///////////////////////////////////////////// is email tru
test('email hi@gmail.com is a email', () => {
    expect(functions.isEmail('hi@gmail.com')).toBe(true);
  });

test('email hello@gmail.com is an email', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
  });
//////////////////////////////////////////////////////////////// is email  false
test('email potato is not an email', () => {
    expect(functions.isEmail('potato')).toBe(false);
  });

test('email carrot is not an email', () => {
    expect(functions.isEmail('carrot')).toBe(false);
  });
///////////////////////////////////////////// is strong pass tru
test('password ganiMa543_ is a strong password', () => {
    expect(functions.isStrongPassword('ganiMa543_')).toBe(true);
  });

test('password A65_3ddyo_ is a strong password', () => {
    expect(functions.isStrongPassword('A65_3ddyo_')).toBe(true);
  });
////////////////////////////////////////////////////////////////  is stron pass false
test('password !password is not a strong password', () => {
    expect(functions.isStrongPassword('!password')).toBe(false);
  });

test('password !notyours is not a strong password', () => {
    expect(functions.isStrongPassword('!notyours')).toBe(false);
  });
///////////////////////////////////////////// is date tru
test('date 04/08/2021 is a date', () => {
    expect(functions.isDate('4/8/2021')).toBe(true);
  });

test('date 12/25/2021 is a date', () => {
    expect(functions.isDate('12/25/2021')).toBe(true);
  });
//////////////////////////////////////////////////////////////// is date false
test('date 3 is not a date', () => {
    expect(functions.isDate('3')).toBe(false);
  });

test('date fart is not a date', () => {
    expect(functions.isDate('fart')).toBe(false);
  });
///////////////////////////////////////////// is hex color tru
test('hexcolor #000000 is a hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
  });

test('hex color #321321 is a hex color', () => {
    expect(functions.isHexColor('#321321')).toBe(true);
  });
//////////////////////////////////////////////////////////////// is hex color false
test('hex color 8008135 is not a hex color', () => {
    expect(functions.isHexColor('8008135')).toBe(false);
  });

test('hex color fart is not a hex color', () => {
    expect(functions.isHexColor('fart')).toBe(false);
  });

