import React from 'react';
import ENV from "../settings/env";

class CatalogItem extends React.Component{
    constructor(props){
        super(props);
    }

    increaseAmount = (event) => {
        this.props.updateAmount(this.props.code,
            Number(event.currentTarget.nextSibling.value) + this.props.item.rate, this.props.item.rate);
    };

    decreaseAmount = (event) => {
        this.props.updateAmount(this.props.code,
            Number(event.currentTarget.previousSibling.value) - this.props.item.rate, this.props.item.rate);
    };

    handleAmountEnter = (event) => {
        this.props.updateAmount(this.props.code, event.target.value);
    };

    handleFocusOut = (event) => {
        this.props.updateAmount(this.props.code, event.target.value, this.props.item.rate);
    };

    handleFocus = (event) => event.target.select();

    openProductCard = (event) => {
        this.props.setSelectedItem(this.props.item);
    };

    handleCancelItem = (event) => {
      this.props.updateAmount(this.props.code,0);
    };

    render(){
        const {code, set, quantity, price, amount, measure} = this.props;
        const img = `${ENV.imgThumbPath}${code}.jpg`;
        const alert = window.sessionStorage.getItem(code);
        if (alert) {
            window.sessionStorage.removeItem(code);
            console.log(code, alert);
        }
        const rate = this.props.item.rate;
        const description = this.props.description + ((rate > 1) ? ` (по ${rate} ${measure})` : '');


        return (
            <div className={`flex bt items-center w-100 f5 items-center justify-between ${(set%2)?'':'bg-lightest-blue'}`}>
                <p className='w-10 ma0 pointer bg-white' onClick={this.openProductCard}><img className={'ma0'} src={img}/></p>
                <p className='w-20 ma0 pa2 pointer underline-hover tc' onClick={this.openProductCard}>{code}</p>
                <p className='w-100 ma0 pa2 pointer underline-hover tl'  onClick={this.openProductCard}>{description}</p>
                <div className='flex justify-between items-center w-20'>
                    <div className='w-20 pointer' onClick={this.increaseAmount}>
                        <img src={require('../static/plus.png')} className='mw-100'></img>
                    </div>
                    <input id={'amount'} className={'h-25 ba w-60 tc' + ((alert) ? ' bg-light-pink' : '')} type='number' value={Number(amount)}
                           onChange={this.handleAmountEnter}
                           onFocus={this.handleFocus}
                           onBlur={this.handleFocusOut}/>
                    <div className='w-20 pointer' onClick={this.decreaseAmount}>
                        <img src={require('../static/minus.png')} className='mw-100'></img>
                    </div>
                </div>
                <p className='w-20 ma0 pa2 tr'>{`${Number(price).toFixed(2)}`}</p>
                <p className='w-20 ma0'>{`${(amount*price).toFixed(2)}`}</p>
                <p className='w-20 ma0 pa2 tr'>{`${quantity} ${measure}`}</p>
                {this.props.showCancelButton &&
                <div className='w-10 pointer' onClick={this.handleCancelItem}>
                    ✖
                </div>}
            </div>
        );
    }
};

export default CatalogItem;