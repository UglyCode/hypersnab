import React from 'react';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

const CurrPage = ({route}) => {
    console.log(route);
    return(
        <div className="br3 ma2 bw-2 shadow-5-l tc bg-white pa3">
            {(() => {
                switch(route) {
                    case 'about':
                        return <AboutPage/>;
                        break;
                    case 'contacts':
                        return <ContactPage/>;
                        break;
                    case 'catalog':
                        return null;
                    default:
                        return null;
                }
            })()}
        </div>
    )
};

export default CurrPage;