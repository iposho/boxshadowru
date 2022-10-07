module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order"
  ],
  "customSyntax": require("postcss-scss"),
  "rules": {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "string-quotes": [
      "single",
      {
        message: "Должны использоваться одинарные кавычки"
      }
    ],
    "indentation": [
      2,
      {
        message: "Отступы должны быть кратны 2-м пробелам"
      }
    ],
    "color-hex-case": [
      "lower",
      {
        message: "Значения цветов ожидаются в нижнем регистре"
      }
    ],
    "declaration-block-semicolon-newline-after": [
      "always",
      {
        message: "Нужна новая строка после точки с запятой"
      }
    ],
    "declaration-block-trailing-semicolon": [
      "always",
      {
        message: "Каждое правило следует заканчивать точкой с запятой"
      }
    ],
    "declaration-block-single-line-max-declarations": [
      1,
      {
        message: "На строке должно быть только одно правило"
      }
    ],
    "number-leading-zero": [
      "never",
      {
        message: "В числовом значении перед точкой ноль не ожидается"
      }
    ],
    "selector-list-comma-newline-after": [
      "always",
      {
        message: "Каждый селектор должен быть на новой строке"
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        message: "Ожидается пустая строка перед правилом"
      }
    ],
    "max-nesting-depth": [
      3,
      {
        ignore: ["pseudo-classes"],
        message: "Максимальная вложенность равна 3"
      }
    ],
    "selector-max-type": [
      3,
      {
        message: "Максимальное количество селекторов в строке равно 3"
      }
    ],
    "no-duplicate-at-import-rules": [
      true,
      {
        message: "Найдены дублирующиеся импорты"
      }
    ],
    "comment-no-empty": [
      true,
      {
        message: "Найдены пустые комментарии"
      }
    ],
    "length-zero-no-unit": [
      true,
      {
        message: "Заданы единицы измерения у нулевого значения"
      }
    ]
  }
};
