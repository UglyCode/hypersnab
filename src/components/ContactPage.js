import React, {useEffect} from 'react';

const ContactPage = (props) => {

    useEffect(()=>{
        const script = document.createElement("script");

        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A073d5308676f4e8bcc2546dc319ea3e0e27e85b381c46d6f18933e7e63543cd0&amp;width=750&amp;height=600&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        script.id = 'yandexScript';

        const scriptElem = document.querySelector('#yandexScript');

        if (!scriptElem){
            console.log('script: ' + scriptElem);
            const mapElem = document.querySelector('#yandexMap');
            mapElem.appendChild(script);
        }

    });

    return (
        <div className="flex-column">
            <div className="ma2 pa2">
                <address><strong translate="OFFICE" className="ng-scope">Офис</strong>
                    <br></br>г. Москва
                    <br></br>Астраханский пер., д. 5/9
                    стр.10
                    <br></br>Тел.:(495) 505-78-25</address>
            </div>
            <div className="ma2 pa2">
                <address><strong translate="STORAGE" className="ng-scope">Склад</strong>
                    <br></br>г. Москва
                    <br></br>ул. Ясеневая, вл. 14
                </address>
            </div>
            <div className="ma2 pa2" id='yandexMap'>

            </div>
        </div>
    )
};

export default ContactPage;