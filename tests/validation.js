import test from 'ava';
import _ from 'lodash';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'textareaLimited',
    value: '',
  },
};

const settings = {
  target: {
    minlength: '10',
    maxlength: '20',
  },
};


// Valid input
test('empty input', t => {
  t.true(validation(input, settings), 'Empty input returns true');
});

// Valid input
test('valid input', t => {
  const ip = _.cloneDeep(input);
  ip.target.value = '1234567890';
  t.true(validation(ip, settings), 'Correct input returns true');
  ip.target.value = '12345678901234567890';
  t.true(validation(ip, settings), 'Correct input returns true');
});

// Under min input
test('under min input', t => {
  const ip = _.cloneDeep(input);
  ip.target.value = '123456789';
  t.is(validation(ip, settings), 'textareaLimited requires at least 10 characters', 'Incorrect input returns error');
});

// Over max input
test('over max input', t => {
  const ip = _.cloneDeep(input);
  ip.target.value = '123456789012345678901';

  t.is(validation(ip, settings), 'textareaLimited has a maximum of 20 characters', 'Incorrect input returns error');
});
