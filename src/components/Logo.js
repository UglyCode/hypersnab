import React from 'react';

const Logo = (props) => {
    return(
        <div className = 'flex justify-between br3 ma2 bw-2 shadow-5-l tc bg-white'>
            <div className='w-20 f4 ma0 pa2 flex-column justify-center content-center bg-lightest-blue'>
                <p className='ma0'>{'Контакты:'}</p>
                <p className='ma0 b'>{'+7(499)502-23-78'}</p>
                <p className='ma0 b'>{'114@6694040.info'}</p>
            </div>

            <div className='flex-column justify-center content-center w-80 ma0 pa2'>
                <p className='f2 ma0'>{'ООО «ТК «ГИПЕРСНАБ»'}</p>
                <p className='f3 ma0'>{'Оперативность для профеcсионалов'}</p>
            </div>
            <div className='w-20 f5 ma0 flex-column justify-center content-center bg-lightest-blue pa2'>
                <p className='ma0'>{'Мы отгружаем продукцию ИСКЛЮЧИТЕЛЬНО '}</p>
                <p className='ma0 b'>{'c юридическим лицам и индивидуальным предпринимателям!'}</p>
            </div>
        </div>
    )
};

export default Logo;