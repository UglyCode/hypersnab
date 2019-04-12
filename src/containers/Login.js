import React from 'react';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isDroppedDown: false,
            userINN: 770011202
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
        this.setState({isDroppedDown: false})
        document.removeEventListener('click', this.closeMenu);
    };


    render() {
        const el = document.querySelector('#innSign');

        return(
            <div className='w-10 pr3 flex items-center justify-end bg-lightest-blue br3'>
                { this.state.userINN ?
                    <p id='innSign' className='pointer f5 underline-hover dark-blue'
                       onClick={this.toggleMenu}>
                        {this.state.userINN}
                    </p> :
                    <div className = 'f5'>
                        <label htmlFor="INN">{"INN: "}</label>
                        <input
                            className="tc"
                            placeholder="INN" type="text" name="INN">
                        </input>
                        <button className="ma1">{"Proceed"}</button>
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
};

export default Login;