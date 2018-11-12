import React, { Component } from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            profile_picture: "",
            loggedIn: sessionStorage.getItem('access-token') == null ? false : true
        }
    }

    componentWillMount() {
        if (this.state.loggedIn === true) {
            let that = this;
            let data = null;
            let xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    let response = JSON.parse(this.responseText).data;
                    that.setState({ profile_picture: response.profile_picture });
                }
            })
            xhr.open("GET", "https://api.instagram.com/v1/users/self/?access_token=" + sessionStorage.getItem('access-token'));
            xhr.send(data);
        }
    }

    userProfileClickHandler = () => {
        
    }

    render() {
        return (
            <header className="app-header">
                <span className="app-header-text"> Image Viewer </span>
                {this.state.loggedIn === true &&
                    <IconButton style={{
                        backgroundImage: 'url(' + this.state.profile_picture + ')',
                        backgroundSize: '45px 45px',
                        height: '45px',
                        width: '45px',
                        border: '1px solid #fff',
                        float: 'right',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        marginRight: '5px'
                    }} onClick={this.userProfileClickHandler}></IconButton>
                }
            </header>
        )
    }
}

export default Header;