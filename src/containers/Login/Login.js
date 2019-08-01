import React from 'react';
import ENV from '../../settings/env';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isDroppedDown: false,
            advice: 'введите ваш ИНН',
            user: {},
            toggleLeft: 0
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
            this.setState({advice: 'идет обработка ИНН...'});
            fetch(`${ENV.server}/info/${inn}`)
                .then(res => res.json())
                .then(innInfo => {
                    if (innInfo.userExists) {
                        this.setState({advice: 'введите пароль'});
                        this.props.setUserStatus('passwordRequired', innInfo.inn);
                    } else {
                        this.props.toggleProfile(inn)
                    }
                })
        } else {
            this.setState(
                {advice: 'некорректный ИНН'}
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

    logOut = () =>{
        window.localStorage.removeItem('token');
        this.props.setUserStatus('loggedOut');
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
                                <div className='f5 flex justify-between ma2 content-center b'>
                                    <p id='innSign' className='center'
                                       onClick={this.toggleMenu}>
                                        {`ИНН: ${inn}`}
                                    </p>
                                    <div className='w-20 pointer' onClick={this.toggleMenu}>
                                        <img src={require('../../static/building.png')} className='mw-100 pointer link dim'></img>
                                    </div>
                                </div>
                            );
                        case 'passwordRequired':
                            return (
                                    <div className = 'f6 flex justify-between ma2'>
                                        <div className='flex=column content-center w-80'>
                                            <input
                                                className="tc ma0 w-80" key="pwd"
                                                placeholder="пароль" type="password" id="password">
                                            </input>
                                            <p className="ma0">{'введиете пароль и нажмите =>'}</p>
                                        </div>
                                        <div className='w-20 pointer' onClick={this.submitPassword}>
                                            <img src={require('../../static/building.png')} className='mw-100 link dim'></img>
                                        </div>
                                    </div>
                            );
                        default: //loggedOut
                            return (
                                    <div className = 'f6 flex ma2 justify-between'>
                                        <div className='flex-column justify-between content-center w-80'>
                                            <input
                                                onChange={this.handleInnInput}
                                                className="tc ma0 w-80" key="inn"
                                                placeholder="ИНН" type="text" id="inn">
                                            </input>
                                            <p className="ma1">{this.state.advice}</p>
                                        </div>
                                        <div className='w-20 ma0 pa0 br3 pointer flex-column content-start' onClick={this.submitInn}>
                                            <img src={require('../../static/building.png')} className='mw-100 link dim'></img>
                                        </div>
                                    </div>
                            );
                    }
                })()}

                {this.state.isDroppedDown &&
                    <ul id='dropdown'
                        className="absolute pa0"
                        style={{top: el.offsetTop, listStyleType: "none", backgroundColor:'rgba(255,255,255,0.8)'}}>
                        <li className='ma3 pointer underline-hover'
                        onClick={this.logOut}>
                            Log out </li>
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