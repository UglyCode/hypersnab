import React from 'react';
import ENV from '../settings/env';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isDroppedDown: false,
            userINN: null,
            advice: 'enter your INN'
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
        const INN = event.target.value;
        if (this.checkINN(INN)){
            fetch(`${ENV.server}/info/${INN}`)
                .then(console.log)
        } else {
            this.setState(prevState => ({
                ...prevState,
                advice: 'wrong INN format'
            }));
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


    render() {
        const el = document.querySelector('#innSign');

        return(
            <div className='w-20 pr3 flex items-center justify-end bg-lightest-blue br3'>
                { this.state.userINN ?
                    <p id='innSign' className='pointer f5 underline-hover dark-blue'
                       onClick={this.toggleMenu}>
                        {this.state.userINN}
                    </p> :
                    <div className = 'f5 flex-column ma2'>
                        {/*<label htmlFor="INN">{"INN: "}</label>*/}
                        <input
                            onChange={this.handleInnInput}
                            className="tc ma0"
                            placeholder="INN" type="text" name="INN">
                        </input>
                        <p className="ma0">{this.state.advice}</p>
                    </div>
                }
                {this.state.isDroppedDown &&
                    <ul id='dropdown'
                        className="absolute pa0"
                        style={{top: el.offsetTop, listStyleType: "none", backgroundColor:'rgba(255,255,255,0.8)'}}>
                        <li className='ma3 pointer underline-hover'> Log out </li>
                        <li className='ma3 pointer underline-hover'
                        onClick={this.props.toggleProfile}>
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