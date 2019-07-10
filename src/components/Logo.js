import React from 'react';

const Logo = (props) => {
    return(
        <div className = 'flex justify-between br3 ma2 bw-2 shadow-5-l tc bg-white'>
            <div className='w-20 f4 ma0 pa2 flex-column justify-center content-center bg-lightest-blue'>
                <p className='ma0'>{'Контакты:'}</p>
                <p className='ma0 b'>{'+7(495)505-78-25'}</p>
                <p className='ma0 b'>{'6661758@mail.ru'}</p>
            </div>

            <div className='flex-column justify-center content-center w-80 ma0 pa2'>
                <p className='f2 ma0'>{'ГИПЕРСНАБ'}</p>
                <p className='f3 ma0'>{'Оперативность для профеcсионалов'}</p>
            </div>
            <div className='w-20 f4 ma0 flex-column justify-center content-center bg-lightest-blue pa2'>
                <p className='ma0'>{'Мы работаем только с'}</p>
                <p className='ma0 b'>{'юридическими лицами!'}</p>
            </div>
        </div>
    )
};

export default Logo;