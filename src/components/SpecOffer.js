import React from 'react';

const SpecOffer = (props) => {

    return(
        <article className='bb b--black-60 ma2 pointer' onClick={()=>props.setSelectedItem(props.item)}>
            <a className="link w-100" href="#0">
                <div style={{width: '150px'}} className='w-100 center'>
                    <img src={(props.img).replace('3?size=50x50',`${props.item.code}?size=150x150`)} className="db" alt='spec img'/>
                </div>
                <div className="v-top pl2 tc">
                    <h2 className="f6 fw4 mt2 mb0 black-60 b">
                        {props.description}
                    </h2>
                    <dl className="mt2 f5">
                        <dt className="clip">Цена</dt>
                        <dd className="ml0">{`${props.price} руб.`}</dd>
                    </dl>
                </div>
            </a>
        </article>
    )
};

export default SpecOffer