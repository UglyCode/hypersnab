import React from 'react';
import ENV from '../settings/env';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isDroppedDown: false,
            passwordEntering: false,
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

    openRegisterationForm = (inn) =>{
        if (this.checkINN(inn)){
            fetch(`${ENV.server}/info/${inn}`)
                .then(res => res.json())
                .then(innInfo => {
                    if (innInfo.newUser) {
                        this.props.toggleProfile(innInfo)
                    } else {
                        this.setState({passwordEntering: true})
                    }
                })
        } else {
            this.setState(prevState => ({
                ...prevState,
                advice: 'wrong INN format'
            }));
        }
    };

    handleInnInput = (event) => {
        this.openRegisterationForm(event.target.value);
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

    handlePasswordInput = (event) => {

    };

    onSubmitPress = () => {

    };

    componentDidMount() {
        if (this.props.isSignedIn) {
            this.updateUser()
        }
    }

    updateUser = () => {
        const token = window.sessionStorage.getItem('token');
        fetch(`${ENV.server}/userData`, {
            method: 'GET',
            headers : {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
            .then(res => res.json())
            .then( userData =>{
                if (userData && userData.inn){
                    this.setState({user: userData});
                }
            })
    };

    render() {
        const el = document.querySelector('#innSign');
        const userInn = this.props.inn;

        return(
            <div className='w-20 pr3 flex items-center justify-end bg-lightest-blue br3 br--right'>
                { this.props.isSignedIn ?
                    <p id='innSign' className='pointer f5 underline-hover dark-blue'
                       onClick={this.toggleMenu}>
                        {this.props.inn}
                    </p> :
                    <div className = 'f5 flex-column ma2'>
                        <div className='flex'>
                        {   this.props.inn ?
                                <input
                                    className="tc ma0"
                                    placeholder="password" type="text" name="password">
                                </input>
                            :
                            <input
                                onChange={this.handleInnInput}
                                className="tc ma0"
                                placeholder="INN" type="text" name="INN">
                            </input>
                        }
                            <button
                                id='submitButton'
                                className='tc ma0'
                                onClick={this.onSubmitPress}
                            >
                                {'B'}
                            </button>
                        </div>
                        <p className="ma0">{this.state.advice}</p>
                    </div>
                }
                {this.state.isDroppedDown &&
                    <ul id='dropdown'
                        className="absolute pa0"
                        style={{top: el.offsetTop, listStyleType: "none", backgroundColor:'rgba(255,255,255,0.8)'}}>
                        <li className='ma3 pointer underline-hover'> Log out </li>
                        <li className='ma3 pointer underline-hover'
                        onClick={this.props.toggleProfile(this.state.user)}>
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