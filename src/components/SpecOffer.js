import React from 'react';

const SpecOffer = (props) => {

    return(
        <article className='bb b--black-60 ma2'>
            <a className="link w-100" href="#0">
                <div style={{width: '175px'}} className='center'>
                    <img src={require('../static/spec.jpg')} className="db" alt='spec img'/>
                </div>
                <div className="v-top pl2 tc">
                    <h2 className="f6 fw4 mt2 mb0 black-60 b">
                        {'Фонарь аккумуляторный "Прожектор" 19 светодиодов'}
                    </h2>
                    <dl className="mt2 f6">
                        <dt className="clip">Цена</dt>
                        <dd className="ml0">1031,25 руб.</dd>
                    </dl>
                </div>
            </a>
        </article>
    )
};

export default SpecOffer