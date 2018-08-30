import React, { Component } from 'react';
// 引入路由模块
import { Route , Switch ,HashRouter} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
//这是和vue一样都是用app为主渲染的,vue 使用 view-router,使用的是routes数组对应的每一个路由规则
// 而react 使用Switch,在Switch里面使用route定义规则
import Pay from "./pages/pay/pay"
class App extends Component {
  render() {
    return (

      <div className="App">
         <Switch>
				<Route path="*" component={Pay}></Route>
				<Route></Route>
         </Switch>
      </div>
    );
  }
}
// 第二部度定义route方式
let routes = (
		<HashRouter>
			<App></App>
		</HashRouter>
	)
export default routes;
