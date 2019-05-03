import React from 'react'

const withAuthenticate =  LambdaTimesPage => LoginPage =>
    class extends React.Component {

        render(){
            if(localStorage.getItem('user')){
                return <LambdaTimesPage />

            }
            else {
                return <LoginPage />
            }
        }
    }

export default withAuthenticate; 