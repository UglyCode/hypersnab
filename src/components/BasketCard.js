import React, {useState,useEffect} from 'react';

const BasketCard = (props) => {

    const [sum, setSum] = useState(100);

    useEffect(()=>{
        document.title = `React hooks says: ${sum}`;
        return ()=> alert(`${sum} : ORLY?`);
    });

    return(
        <div className='w-20 items-center tc pl3 f5 br3 bg-lightest-blue'>
            <div className='flex-column ma2'>
                <div>{'CART: '}</div>
                <div className = ''
                onClick={()=>setSum(sum+11)}>
                    {`(11)${sum}RUR`}
                </div>
            </div>

        </div>
    )
};

export default BasketCard;