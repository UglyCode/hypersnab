import React from 'react';

const Login = (props) => {
    return(
        <div className='w-25 pr3 flex items-center justify-end bg-lightest-blue br3'>
            <div className = 'f5'>
                <label htmlFor="INN">{"INN: "}</label>
                <input
                    className="tc"
                    placeholder="INN" type="text" name="INN">
                </input>
            </div>
            <button className="ma1">{"Proceed"}</button>
        </div>
    )
};

export default Login;