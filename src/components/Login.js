import React from 'react';

const Login = (props) => {
    return(
        <div className='flex items-center justify-center outline w-25'>
            <div className = 'f4'>
                <label htmlFor="INN">{"INN: "}</label>
                <input
                    className="f6 f5-l tc"
                    placeholder="INN" type="text" name="INN" value="">
                </input>
            </div>
            <button className="ma2">{"Proceed"}</button>
        </div>
    )
};

export default Login;