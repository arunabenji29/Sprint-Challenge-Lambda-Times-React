import React, { Component } from 'react';
// import TopBar from './components/TopBar';
// import Header from './components/Header';
// import Content from './components/Content/Content';

import withAuthenticate from './authentication/withAuthenticate'
import MainTimes from './MainTimes';
import Login from './components/Login'

const ComponentWithAuthenticate = withAuthenticate(MainTimes)(Login)

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn:false,
    }
  }

  componentDidMount(){
    this.setState({
      isLoggedIn:true
    })
  }

  render(){
    return(
      <div>
        <ComponentWithAuthenticate />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <TopBar />
//       <Header />
//       <Content />
//     </div>
//   );
// }

export default App;
