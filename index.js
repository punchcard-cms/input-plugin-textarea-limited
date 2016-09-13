'use strict';

/**
 * textarea-limited Input Plugin
 *
 *
 * A simple limited textarea input type
 */
const validation = require('./lib/validation.js');

/**
 * Single textarea-limited Input Plugin
 * @module textareaLimitedInputPlugin
 */
module.exports = {
  name: 'textarea-limited',
  description: 'A simple limited textarea input type',
  validation: {
    textareaLimitedValidation: validation,
  },
  inputs: {
    textareaLimited: {
      validation: {
        function: 'textareaLimitedValidation',
        on: 'blur',
      },
      label: 'Please enter some text',
      type: 'textarea',
      placeholder: 'type here...',
      settings: {
        minlength: '50',
        maxlength: '200',
      },
    },
  },
  html: '<label for="{{textareaLimited.id}}">{{textareaLimited.label}}</label><textarea id="{{textareaLimited.id}}" maxlength="{{textareaLimited.settings.maxlength}}" minlength="{{textareaLimited.settings.minlength}}"name="{{textareaLimited.name}}" placeholder="{{textareaLimited.placeholder}}" />{{textareaLimited.value}}</textarea>',
};
