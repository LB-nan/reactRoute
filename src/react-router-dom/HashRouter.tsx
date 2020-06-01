import React from 'react';
import { Location } from '../history';
import RouterContext from './context'
import { ContextValue } from './';

interface Props {

}

interface State {
  location: Location
}

// 在此组件里定义一个location路径对象，然后通过上下文传递给它的子组件们
export default class extends React.Component<Props, State>{
  state = {
    location: {
      pathname: window.location.hash.slice(1)
    }
  }
  componentDidMount(){
    window.addEventListener('hashchange', (event: HashChangeEvent) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
    window.location.hash =  window.location.hash || '/';
  }
  render(){
    let contextValue: ContextValue = {
      location: this.state.location 
    }
    return (
      <RouterContext.Provider value={contextValue}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
