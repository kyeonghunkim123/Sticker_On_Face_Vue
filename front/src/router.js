// vue 파일을 만들 때 항상 고정적으로 쓰는 코드
import Vue from "vue";
// npm 통해 설치한 vue-router 에서 가져오기
import VueRouter from "vue-router"
// 컴포넌트 불러오기
// import SignUp from "./components/SignUp"

// Vue에서 VueRouter를 사용하겠다는 의미
Vue.use(VueRouter);

const routes = [
  // url path가 들어왔을 때 어디로 넘길지를 오브젝트 형식으로
  // { path:"/", component: SignUp}, // 기본 패스일 경우 Home컴포넌트를 로딩
  // { path:"/about", component: About }
]
// 라우터 정의
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // routers: routes를 짧게 표현
})

export default router;