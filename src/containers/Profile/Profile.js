import React from 'react';
import './profile.css'
import ENV from "../../settings/env";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.getDataByInn(this.props.inn, this.props.loggedIn)
            .then(res => res.json())
            .then(userData => {
                this.setState({user: userData})
            })
            .catch(console.log)
    }

    getDataByInn(inn, userExists) {
       console.log(window.localStorage.getItem('token'));
       return  fetch(`${ENV.server}/${userExists ? 'profile' : 'data'}/${inn}`,{
           method : 'GET',
           headers : {
               'Authorization': window.localStorage.getItem('token')
           }
       })
    }

    onFormChange = (event) =>{
        let stateObj = {};
        stateObj[event.target.name] = event.target.value;
        this.setState({user: Object.assign(this.state.user,stateObj)});
        console.log(event.target.name, event.target.value, stateObj)
    };

    onProfileSubmit = () => {
        if (this.props.loggedIn){
            this.updateUser(this.state.user)
        } else {
            this.createUser(this.state.user)
        }
        this.closeProfile();
    };

    updateUser = (userObj) => {
        fetch(`http://localhost:3001/profile/${userObj.inn}`, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify({formInput: userObj})
        }).then(resp => {
            if (resp.status === 200 || resp.status === 304){
                this.props.userUpdate({...this.props.user, ...userObj});
            }
        }).catch( err => console.log);
    };

    createUser = (userObj) => {
        console.log(userObj)
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userObj)
        }).then(resp => {
            if (resp.status === 200 || resp.status === 304){
                this.props.setUserStatus('passwordRequired', userObj.inn);
            }
        }).catch( err => console.log);
    };

    closeProfile = (event) => {
        this.props.toggleProfile();
    };

    render() {
        const {user} = this.state;
        return (
            <div className='profile-modal'>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80">
                        <h1>{user.name}</h1>
                        <hr />
                        <div className="mt3">
                            <label htmlFor="companyName">Company:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="name"
                                id="name"
                                placeholder={'company name'}
                                value={user.name}
                            ></input>

                            <label htmlFor="inn">INN:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="inn"
                                id="inn"
                                placeholder={'company name'}
                                value={user.inn}
                            ></input>

                            <label htmlFor="kpp">KPP:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="kpp"
                                id="kpp"
                                placeholder={'KPP'}
                                value={user.kpp}
                            ></input>

                            <label htmlFor="management">contact:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder={'contact'}
                                value={user.contact}
                            ></input>

                            <label htmlFor="management">address:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="address"
                                id="address"
                                placeholder={'address'}
                                value={user.address}
                            ></input>

                            <label htmlFor="email">email:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={'email'}
                                value={user.email}
                            ></input>

                            <label htmlFor="phone">phone:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder={'phone'}
                                value={user.phone}
                            ></input>

                            {this.props.loggedIn ||
                                <div className="pv2">
                                    <label htmlFor="password">password:</label>
                                    <input
                                        onChange={this.onFormChange}
                                        className="pa2 b--black-10 w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder={'new password'}
                                    ></input>
                                </div>
                            }


                        </div>
                        <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <button
                                className={'b pa2 pointer grow hover-white w-40 bg-light-green b--black-30'}
                                onClick={() => this.onProfileSubmit()}
                            >
                                {this.props.loggedIn ? 'Save' : 'Create'}
                            </button>
                            <button className={'b pa2 pointer grow hover-white w-40 bg-light-red b--black-30'}
                                    onClick={this.closeProfile}>
                                Cancel
                            </button>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
};

export default Profile;
