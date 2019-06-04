import React, {useState,useEffect} from 'react';

const BasketCard = (props) => {

    // const [sum, setSum] = useState(100);
    //
    // useEffect(()=>{
    //     document.title = `React hooks says: ${sum}`;
    //     return ()=> alert(`${sum} : ORLY?`);
    // });

    return(
        <div className='w-20 items-center tc pl3 f6 br3 br--left bg-lightest-blue'>
            <div className='flex justify-center content-center ma2'>
                <div className='w-20 pointer'>
                    <img src={require('../static/cart.png')} className='mw-100'></img>
                </div>
                <div className = 'w-80 tc flex flex-column justify-center'
                // onClick={()=>setSum(sum+11)}
                >
                    <p className='ma1'>{`Позиций: ${props.goodsAmount}`}</p>
                    <p className='ma1'>{`Сумма: ${props.orderSum}`}</p>
                </div>
            </div>

        </div>
    )
};

export default BasketCard;