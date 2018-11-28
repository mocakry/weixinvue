// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0, //代码缩进
    'no-trailing-spaces': 0, //禁用行尾空格
    'semi': 0, //要求或禁止使用分号代替 ASI
    'space-before-function-paren': 0, //强制在 function的左括号之前使用一致的空格
    'keyword-spacing': 0,//强制在关键字前后使用一致的空格
    'space-before-blocks': 0,//强制在块之前使用一致的空格
    'spaced-comment': 0, //强制在注释中 // 或 /* 使用一致的空格
    'no-eval': 0, //禁用 eval()
    'no-unused-vars': 0, //禁止出现未使用过的变量
    'block-spacing': 0, //禁止或强制在代码块中开括号前和闭括号后有空格
    'eol-last': 0, //要求或禁止文件末尾存在空行
    'object-property-newline': 0, //强制将对象的属性放在不同的行上
    'quotes': 0,//强制使用一致的反勾号、双引号或单引号
    'padded-blocks': 0,//要求或禁止块内填充
    'operator-linebreak': 0,//强制操作符使用一致的换行符
    'key-spacing': 0,//强制在对象字面量的属性中键和值之间使用一致的间距
    'no-multiple-empty-lines': 0,//禁止出现多行空行
    'comma-spacing': 0,//强制在逗号前后使用一致的空格
    'comma-dangle': 0,//要求或禁止末尾逗号
    'object-curly-newline': 0,//强制大括号内换行符的一致性
    'object-curly-spacing': 0,//强制在大括号中使用一致的空格
    'no-sequences': 0,//禁用逗号操作符
    'space-infix-ops': 0,//要求操作符周围有空格
    'no-multi-spaces': 0,//禁止使用多个空格
    'semi-spacing': 0,//强制分号之前和之后使用一致的空格
    'camelcase': 0,//强制使用骆驼拼写法命名约定
    'eqeqeq': 0,//要求使用 === 和 !==
    'no-tabs': 0,//禁用 tab
    'no-mixed-spaces-and-tabs': 0, //禁止空格和 tab 的混合缩进
    'no-useless-escape': 0,//禁用不必要的转义字符
  }
};
