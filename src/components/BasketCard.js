import React, {useState,useEffect} from 'react';

class BasketCard extends React.Component{

    constructor(props){
        super(props)
    }

    basketPressHandler = ()=>{
        this.props.onRouteChange('basket');
    };

    // const [sum, setSum] = useState(100);
    //
    // useEffect(()=>{
    //     document.title = `React hooks says: ${sum}`;
    //     return ()=> alert(`${sum} : ORLY?`);
    // });

    render(){
        return(
            <div className='w-20 items-center tc pl3 f6 br3 br--left bg-lightest-blue'>
                <div className='flex justify-center content-center ma2'>
                    <div className='w-20 pointer' onClick={this.basketPressHandler}>
                        <img src={require('../static/cart.png')} className='mw-100 pointer link dim'></img>
                    </div>
                    <div className = 'w-80 tc flex flex-column justify-center'
                    // onClick={()=>setSum(sum+11)}
                    >
                        <p className='ma1 b'>{`Позиций: ${this.props.goodsAmount}`}</p>
                        <p className='ma1 b'>{`Сумма: ${this.props.orderSum}`}</p>
                    </div>
                </div>

            </div>
        )
    }

};

export default BasketCard;