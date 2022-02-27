module.exports = grammar({
  name: 'q',

  rules: {
    source_file: $ => repeat($.statement),

    statement: $ => choice(
        $.assignment,
        $.expression
    ),

    assignment: $ => seq(
      $.identifier,
      ':',
      $.definition,
      ';'
    ),

    definition: $ => choice(
      // $.function,
      $.expression
    ),

    expression: $ => choice(
      $.atom,
      // $.binary_expression,
      // $.function_call
    ),

    atom: $ => choice(
      $.integer,
      // $.float,
      // $.string,
      // $.symbol
    ),

    integer: $ => /\d+/,

    identifier: $ => /[a-zA-Z]{1}[\d\w]*/
  }
});
