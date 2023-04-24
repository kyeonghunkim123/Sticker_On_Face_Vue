// main.js에서 import { createApp } from 'vue' 에러 발생방지
// vue-eslint-parser 에러 : App.vue가 Babel에 처리하는 형식으로 변한되지 않아서 발생.
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  // 일관된 코딩 스타일을 유지, product에 배포되어야 하지 않을 코드들을 사전에 warning으로 알려줌으로써 방지
  rules: {
    "no-console": "warn",//console.log 사용 시 경고
    "no-unused-vars": "warn",//할당되지 않은 변수 있을 시 경고
  },
}