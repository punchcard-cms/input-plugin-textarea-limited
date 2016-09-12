import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'textareaLimited',
    value: 'foo bar baz',
  },
  all: {
    textareaLimited: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    textareaLimited: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
