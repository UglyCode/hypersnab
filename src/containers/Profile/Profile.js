import React from 'react';
import './profile.css'
import ENV from "../../settings/env";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {},
            showPassAlert: false
        }
    }

    componentDidMount() {
        this.getDataByInn(this.props.inn, this.props.loggedIn)
            .then(res => res.json())
            .then(userData => {
                this.setState({user: userData})
            })
            .then(newData => document.getElementById('name').focus())
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
            if (this.state.user.password){
                this.createUser(this.state.user)
            } else {
                this.setState({showPassAlert: true});
                return;
            }
        }
        this.closeProfile();
    };

    updateUser = (userObj) => {
        fetch(`${ENV.server}/profile/${userObj.inn}`, {
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
        fetch(`${ENV.server}/register`, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userObj)
        })
        //     .then(resp => {
        //     if (resp.status === 200 || resp.status === 304){
        //         this.props.setUserStatus('passwordRequired', userObj.inn);
        //     }
        // })
        .then( resp => {
            if (resp.status === 200 || resp.status === 304){
                fetch(`${ENV.server}/signIn`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        inn: userObj.inn,
                        password: userObj.password
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.inn && data.success === 'true') {
                            window.localStorage.setItem('token', data.token);
                            this.props.setUserStatus('loggedIn', data.inn);
                        }
                    })
        }}
        ).catch( err => console.log);
    };

    closeProfile = (event) => {
        if (event && !this.props.loggedIn){
            alert('Вы отменили создание профиля');
        }
        this.props.toggleProfile();
    };

    handleEnterPress = (event) =>{
        if (event.key === 'Enter') {
            this.onProfileSubmit();
        }
    };

    render() {
        const {user} = this.state;
        return (
            <div className='profile-modal' >
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80" onKeyPress={this.handleEnterPress}>
                        <h1>{user.name}</h1>
                        <hr />
                        <div className="mt3">
                            <label htmlFor="companyName">Имя компании:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="name"
                                id="name"
                                placeholder={'название организации'}
                                value={user.name}
                            ></input>

                            <label htmlFor="inn">ИНН:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="inn"
                                id="inn"
                                placeholder={'ИНН'}
                                value={user.inn}
                            ></input>

                            <label htmlFor="kpp">КПП:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="kpp"
                                id="kpp"
                                placeholder={'КПП'}
                                value={user.kpp}
                            ></input>

                            <label htmlFor="management">Контактное лицо:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder={'контактное лицо'}
                                value={user.contact}
                            ></input>

                            <label htmlFor="management">Адрес:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="address"
                                id="address"
                                placeholder={'адрес'}
                                value={user.address}
                            ></input>

                            <label htmlFor="email">E-mail:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={'email'}
                                value={user.email}
                            ></input>

                            <label htmlFor="phone">Телефон:</label>
                            <input
                                onChange={this.onFormChange}
                                className="pa2 b--black-10 w-100"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder={'телефон'}
                                value={user.phone}
                            ></input>

                            {/*{this.props.loggedIn ||*/}
                                <div className="pv2">
                                    <label htmlFor="password">Пароль*:</label>
                                    <input
                                        onChange={this.onFormChange}
                                        className={`pa2 b--black-10 w-100 ${(this.props.loggedIn) ? '' : 'bg-washed-red'}`}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder={'введите пароль'}
                                    ></input>
                                </div>
                            {/*}*/}


                        </div>
                        <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <button
                                className={'b pa2 pointer grow hover-white w-40 bg-light-green b--black-30'}
                                onClick={() => this.onProfileSubmit()}
                            >
                                {this.props.loggedIn ? 'Сохранить' : 'Создать'}
                            </button>
                            <button className={'b pa2 pointer grow hover-white w-40 bg-light-red b--black-30'}
                                    onClick={this.closeProfile}>
                                Отмена
                            </button>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
};

export default Profile;
