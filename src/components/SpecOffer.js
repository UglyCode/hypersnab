import React from 'react';

const SpecOffer = (props) => {

    return(
        <article className='bb b--black-60 ma2'>
            <a className="link w-100" href="#0">
                <div className="w3 center">
                    <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100" alt='spec img'/>
                </div>
                <div className="v-top pl2 tc">
                    <h1 className="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
                    <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                    <dl className="mt2 f6">
                        <dt className="clip">Price</dt>
                        <dd className="ml0">$75.00</dd>
                    </dl>
                </div>
            </a>
        </article>
    )
};

export default SpecOffer