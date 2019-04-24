import React from 'react';
import './profile.css'

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: props.user
        };
    }

    onFormChange = (event) =>{
        let stateObj = {};
        stateObj[event.target.name] = event.target.value;
        this.setState(stateObj);
    };

    onProfileSubmit = () => {

    };

    updateUser = (userObj) => {
        fetch(`http://localhost:3001/profile/${userObj.inn}`, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
                'Authorization': window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({formInput: userObj})
        }).then(resp => {
            if (resp.status === 200 || resp.status === 304){
                this.props.toggleProfile();
                this.props.userUpdate({...this.props.user, ...userObj});
            }
        }).catch( err => console.log);
    };

    createUser = (userObj) => {

    };

    render() {
        const {user} = this.state;
        console.log(user, this.props.user);
        return (
            <div className='profile-modal'>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80">
                        <h1>{user.companyName}</h1>
                        <hr />
                        <div className="mt3">
                            <label htmlFor="companyName">Company:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder={'company name'}
                                value={user.companyName}
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

                            <label htmlFor="management">management:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="management"
                                id="management"
                                placeholder={'management'}
                                value={user.management}
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
                                type="phone"
                                name="phone"
                                id="phone"
                                placeholder={'phone'}
                                value={user.phone}
                            ></input>

                        </div>
                        <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <button
                                className={'b pa2 pointer grow hover-white w-40 bg-light-green b--black-30'}
                                onClick={() => this.onProfileSubmit()}
                            >
                                {this.state.user.inn ? 'Save' : 'Create'}
                            </button>
                            <button className={'b pa2 pointer grow hover-white w-40 bg-light-red b--black-30'}
                                    onClick={this.props.toggleProfile}>
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

//TODO:
//  1. get inn from params, if it exists it does not changes
//  2. Register\save depend on inn existing
//  3. Register -> API register -> save token -> setInn in App
//  4. Save -> API update (authorization required)