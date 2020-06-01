import React from 'react';
import RouterContext from './context';
interface Props {
  path: string;
  component: React.JSXElementConstructor<any>
}

// Route的核心作用是判断当前组件的path属性和浏览器的路径是否一致
export default class extends React.Component<Props>{
  // 如果一个类有 `static contextType` 属性，那么内部实现this.context = RouterContext.Provider.value
  // 如果没有static contextType，那么this.context就不存在
  static contextType = RouterContext;
  render() {
    let { path, component: RouterComponent } = this.props;
    // 通过this.context获取路径，然后去和Route.path比较
    let pathname = this.context.location.pathname;
    let routerProps = {
      location: this.context.location
    }
    // if(path === pathname){
    if(pathname.startsWith(path)){
      return <RouterComponent {...routerProps} />;
    }
    return null;
  }
}