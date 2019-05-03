import React from 'react'
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import './CSS/mainTimes.css'

class MainTimes extends React.Component {

    // logoutSubmit = () => {
    //     // console.log(event.target+ 'i was clicked');
    //     localStorage.removeItem('user')
    //     window.location.reload();
    //     // this.setState({
    //     //   this.props.isLoggedIn
    //     // })
    //   }

    render() {
        return(
        <div className="App">
            
            <TopBar />
            {/* <button onClick={this.logoutSubmit}>Logout 👈</button> */}
            <Header />
            <Content />
        </div>
        )
    }
}

export default MainTimes