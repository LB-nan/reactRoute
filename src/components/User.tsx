import React from 'react';
import { RouteComponentProps } from '../react-router-dom';

type Props = RouteComponentProps & {

}

export default class extends React.Component<Props> {
  render() {
    console.log(this.props)
    return (
      <div>User</div>
    )
  }
}
