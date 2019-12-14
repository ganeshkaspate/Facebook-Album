import React, {Component} from 'react'
import FaceBookLogin from 'react-facebook-login'


class LoginWithFb extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isloggedIn : false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        }
    }

    componentClicked = () => {
        console.log("clicked")
    }

    responseFacebook = (response) => {
        console.log(response);
    }


    render() {
        let fbcontent;
        if(this.state.isloggedIn) {
            fbcontent = null;
        } else {
            fbcontent =  (
                <FaceBookLogin 
                appId="2034786006667200"
                autoLoad={true}
                fields="name,email,picture"
                onclick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        return (
            <div>
                {fbcontent}
            </div>
        )
    }

}

export default LoginWithFb;