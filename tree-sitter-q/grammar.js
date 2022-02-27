module.exports = grammar({
  name: 'q',

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
        $.assignment,
        $.expression
    ),

    assignment: $ => seq(
      $.identifier,
      ':',
      $._definition,
      ';'
    ),

    identifier: $ => /[a-zA-Z]{1}[\d\w]*/,

    _definition: $ => choice(
      // $.function,
      $.expression
    ),

    expression: $ => choice(
      $._atom,
      $.binary_expression,
      // $.function_call
    ),

    _atom: $ => choice(
      $.number,
      $.string,
      $.symbol,
      $.date
    ),

    number: $ => /\d+\.?\d*/,
    string: $ => /".*"/,
    symbol: $ => /`.+/,
    date: $ => /\d{4}\.\d{2}\.\d{2}/,

    binary_expression: $ => choice(
      prec.right(seq($.expression, '*', $.expression)),
      prec.right(seq($.expression, '+', $.expression)),
      // ...
    ),
  }
});
