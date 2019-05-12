import React from 'react';
import ENV from '../settings/env';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isDroppedDown: false,
            advice: 'enter your INN',
            user: {}
        };
    }

    toggleMenu = (event)=>{
        event.preventDefault();
        this.setState(prevState => {
            if (!prevState.isDroppedDown) document.addEventListener('click', this.closeMenu);
            return {isDroppedDown: !prevState.isDroppedDown};
        });
    };

    closeMenu = (event) => {
        event.preventDefault();
        this.setState({isDroppedDown: false});
        document.removeEventListener('click', this.closeMenu);
    };

    handleInnInput = (event) => {
        this.processInn(event.target.value);
    };

    processInn = (inn) =>{
        if (this.checkINN(inn)){
            fetch(`${ENV.server}/info/${inn}`)
                .then(res => res.json())
                .then(innInfo => {
                    if (innInfo.userExists) {
                        this.setState({advice: 'Input your pwd'});
                        this.props.setUserStatus('passwordRequired', innInfo.inn);
                    } else {
                        this.props.toggleProfile(inn)
                    }
                })
        } else {
            this.setState(
                {advice: 'wrong INN format'}
            );
        }
    };

    checkINN = (INN) => {
            // проверка на число
            if (INN.match(/\D/)) {
                return false;
            }
            // проверка на 10 и 12 цифр
            if (INN.length !== 12 && INN.length !== 10) {
                return false;
            }
            // проверка по контрольным цифрам
            if (INN.length === 10) {
                const dgt10 = String(((
                    2 * INN[0] + 4 * INN[1] + 10 * INN[2] +
                    3 * INN[3] + 5 * INN[4] + 9 * INN[5] +
                    4 * INN[6] + 6 * INN[7] + 8 * INN[8]) % 11) % 10);
                return INN[9] === dgt10;
            }
            if (INN.length === 12) {
                const dgt11 = String(((
                    7 * INN[0] + 2 * INN[1] + 4 * INN[2] +
                    10 * INN[3] + 3 * INN[4] + 5 * INN[5] +
                    9 * INN[6] + 4 * INN[7] + 6 * INN[8] +
                    8 * INN[9]) % 11) % 10);
                const dgt12 = String(((
                    3 * INN[0] + 7 * INN[1] + 2 * INN[2] +
                    4 * INN[3] + 10 * INN[4] + 3 * INN[5] +
                    5 * INN[6] + 9 * INN[7] + 4 * INN[8] +
                    6 * INN[9] + 8 * INN[10]) % 11) % 10);
                return INN[10] === dgt11 && INN[11] === dgt12;
            }
    };

    submitInn = (event) => {
        const inn = document.querySelector('#inn').value;
        this.processInn(inn);
    };

    submitPassword = (event) => {

        console.log(JSON.stringify({
            inn: this.props.inn,
            password: document.querySelector('#password').value
        }));

        fetch(`${ENV.server}/signIn`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                inn: this.props.inn,
                password: document.querySelector('#password').value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.inn && data.success === 'true') {
                    this.saveAuthToken(data.token);
                    this.props.setUserStatus('loggedIn', data.inn);
                }
            })
    };

    saveAuthToken = (token) =>{
        window.localStorage.setItem('token', token);
    };

    componentDidMount() {

    }

    openProfile = (event) => {
        this.props.toggleProfile();
    }

    render() {
        const el = document.querySelector('#innSign');
        const {inn, userStatus} = this.props;

        return(
            <div className='w-20 pr3 flex items-center justify-end bg-lightest-blue br3 br--right'>

                {(()=>{
                    switch(userStatus){
                        case 'loggedIn':
                            return (
                                <p id='innSign' className='pointer f5 underline-hover dark-blue'
                                   onClick={this.toggleMenu}>
                                    {inn}
                                </p>
                            );
                        case 'passwordRequired':
                            return (
                                    <div className = 'f5 flex-column ma2'>
                                        <div className='flex'>
                                            <input
                                                className="tc ma0"
                                                placeholder="password" type="text" id="password">
                                            </input>
                                            <button onClick={this.submitPassword}>
                                                {'Go'}
                                            </button>
                                        </div>
                                        <p className="ma0">{this.state.advice}</p>
                                    </div>
                            );
                        default: //loggedOut
                            return (
                                    <div className = 'f5 flex-column ma2'>
                                        <div className='flex'>
                                            <input
                                                onChange={this.handleInnInput}
                                                className="tc ma0"
                                                placeholder="INN" type="text" id="inn">
                                            </input>
                                            <button onClick={this.submitInn}>
                                                {'Go'}
                                            </button>
                                        </div>
                                        <p className="ma0">{this.state.advice}</p>
                                    </div>
                            );
                    }
                })()}

                {this.state.isDroppedDown &&
                    <ul id='dropdown'
                        className="absolute pa0"
                        style={{top: el.offsetTop, listStyleType: "none", backgroundColor:'rgba(255,255,255,0.8)'}}>
                        <li className='ma3 pointer underline-hover'> Log out </li>
                        <li className='ma3 pointer underline-hover'
                        onClick={this.openProfile}>
                            Profile
                        </li>
                        <li className='ma3 pointer underline-hover'> Orders </li>
                    </ul>
                }

            </div>
        )
    }

}

export default Login;


//TODO
// replace fetch usr info to App