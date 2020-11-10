import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook-sdk';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="211061256406337">
        <Comments href="https://varo.design/"/>
      </FacebookProvider>
    );
  }
}