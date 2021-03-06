import React from 'react';
import './Bill.css';
import html2pdf from 'html2pdf.js';

class Bill extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        // let html2pdf = ()=> 0;
        const element = document.getElementById('bill_to_print');
        // const script = document.createElement("script");
        // script.src = require('../../static/html2pdf.bundle.min');
        // script.async = true;
        // document.head.appendChild(script);
        const worker = html2pdf().from(element).save(`Счет №${this.props.id} от ${this.props.date}.pdf`);
    }


    number_to_string = (_number) => {
            let _arr_numbers = new Array();
            _arr_numbers[1] = new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать');
            _arr_numbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто');
            _arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот');
            function number_parser(_num, _desc) {
                let _string = '';
                let _num_hundred = '';
                if (_num.length == 3) {
                    _num_hundred = _num.substr(0, 1);
                    _num = _num.substr(1, 3);
                    _string = _arr_numbers[3][_num_hundred] + ' ';
                }
                if (_num < 20) _string += _arr_numbers[1][parseFloat(_num)] + ' ';
                else {
                    let _first_num = _num.substr(0, 1);
                    let _second_num = _num.substr(1, 2);
                    _string += _arr_numbers[2][_first_num] + ' ' + _arr_numbers[1][_second_num] + ' ';
                }
                let _last_num;
                switch (_desc){
                    case 0:
                        _last_num = parseFloat(_num.substr(-1));
                        if (_last_num == 1) _string += 'рубль';
                        else if (_last_num > 1 && _last_num < 5) _string += 'рубля';
                        else _string += 'рублей';
                        break;
                    case 1:
                        _last_num = parseFloat(_num.substr(-1));
                        if (_last_num == 1) _string += 'тысяча ';
                        else if (_last_num > 1 && _last_num < 5) _string += 'тысячи ';
                        else _string += 'тысяч ';
                        _string = _string.replace('один ', 'одна ');
                        _string = _string.replace('два ', 'две ');
                        break;
                    case 2:
                        _last_num = parseFloat(_num.substr(-1));
                        if (_last_num == 1) _string += 'миллион ';
                        else if (_last_num > 1 && _last_num < 5) _string += 'миллиона ';
                        else _string += 'миллионов ';
                        break;
                    case 3:
                        _last_num = parseFloat(_num.substr(-1));
                        if (_last_num == 1) _string += 'миллиард ';
                        else if (_last_num > 1 && _last_num < 5) _string += 'миллиарда ';
                        else _string += 'миллиардов ';
                        break;
                }
                _string = _string.replace('  ', ' ');
                return _string;
            }
            function decimals_parser(_num) {
                let _first_num = _num.substr(0, 1);
                let _second_num = parseFloat(_num.substr(1, 2));
                let _string = ' ' + _first_num + _second_num;
                if (_second_num == 1) _string += ' копейка';
                else if (_second_num > 1 && _second_num < 5) _string += ' копейки';
                else _string += ' копеек';
                return _string;
            }
            if (!_number || _number == 0) return false;
            if (typeof _number !== 'number') {
                _number = _number.replace(',', '.');
                _number = parseFloat(_number);
                if (isNaN(_number)) return false;
            }
            _number = _number.toFixed(2);
            let _number_decimals;
            if(_number.indexOf('.') != -1) {
                let _number_arr = _number.split('.');
                _number = _number_arr[0];
                _number_decimals = _number_arr[1];
            }
            let _number_length = _number.length;
            let _string = '';
            let _num_parser = '';
            let _count = 0;
            for (let _p = (_number_length - 1); _p >= 0; _p--) {
                let _num_digit = _number.substr(_p, 1);
                _num_parser = _num_digit +  _num_parser;
                if ((_num_parser.length == 3 || _p == 0) && !isNaN(parseFloat(_num_parser))) {
                    _string = number_parser(_num_parser, _count) + _string;
                    _num_parser = '';
                    _count++;
                }
            }
            if (_number_decimals) _string += decimals_parser(_number_decimals);
            _string = _string.charAt(0).toUpperCase() + _string.substring(1);
            return _string;
        };

        render(){

            const {id, date, orderedGoods, userData} = this.props;

            const totalSum = orderedGoods.reduce((accum, elem) => {
                return accum += Number(elem.sum);
            }, 0).toFixed(2);

            return (
                <div className='bill tl bg-white pa3' id='bill_to_print'>
                    <table className='w-100'>
                        <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td style={{width: "205mm"}} className='tc'>
                                <div style={{width: "205mm"}}>
                                    Внимание! Оплата данного счета означает согласие с условиями поставки товара. Уведомление об оплате обязательно, в противном случае не гарантируется наличие товара на складе. Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.
                                </div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                    <table style={{width:"100%", cellPadding:"2", cellSpacing:"2"}} className="invoice_bank_rekv">
                        <tbody>
                        <tr>
                            <td colSpan="2" rowSpan="2" style={{minHeight:"13mm", width:"105mm"}}>
                                <table style={{width:"100%", border:"0", cellPadding:"0", cellSpacing:"0", height: "13mm"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{verticalAlign:"top"}}>
                                            <div>ПАО СБЕРБАНК Г. МОСКВА</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{verticalAlign:"bottom", height: "3mm"}}>
                                            <div style={{fontSize:"10pt"}} >Банк получателя</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{minHeight:"7mm", height:"auto", width: "25mm"}}>
                                <div>БИK</div>
                            </td>
                            <td rowSpan="2" style={{verticalAlign: "top", width: "60mm"}}>
                                <div style={{height: "7mm", lineHeight: "7mm", verticalAlign: "middle"}}>044525225</div>
                                <div>30101810400000000225</div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "25mm"}}>
                                <div>Сч. №</div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{minHeight:"6mm", height:"auto", width: "50mm"}}>
                                <div>ИНН 7710939479</div>
                            </td>
                            <td style={{minHeight:"6mm", height:"auto", width: "50mm"}}>
                                <div>КПП 771001001</div>
                            </td>
                            <td rowSpan="2" style={{minHeight:"19mm", height:"auto", verticalAlign: "top", width: "25mm"}}>
                                <div>Сч. №</div>
                            </td>
                            <td rowSpan="2"style={{minHeight:"19mm", height:"auto", verticalAlign: "top", width: "25mm"}}>
                                <div>40702810638000125833</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{minHeight:"13mm", height:"auto"}}>
                                <table style={{border:"0", cellPadding:"0", cellSpacing:"0", height: "13mm", width: "105mm"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{verticalAlign:"top"}}>
                                            <div>ООО "ТК "ГИПЕРСНАБ"</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{verticalAlign:"top", height: "3mm"}} >
                                            <div style={{fontSize: "9pt"}}>Получатель</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <br/>
                    <div style={{fontWeight: "bold", fontSize: "16pt", paddingLeft:"5px"}}>
                        {`Счет № ${id} от ${date}`}
                    </div>
                    <br/>

                    <div style={{backgroundColor:"#000000", width:"100%", fontSize:"1px", height:"2px"}}>&nbsp;</div>

                    <table className='w-100'>
                        <tbody>
                        <tr>
                            <td style={{width: "30mm"}}>
                                <div style={{paddingLeft:"2px"}}>Поставщик:</div>
                            </td>
                            <td>
                                <div style={{fontWeight:"bold", paddingLeft:"2px"}}>
                                    Общество с ограниченной ответственностью "Торговая компания "ГИПЕРСНАБ", ИНН 7710939479,
                                    КПП 771001001, 123056, г. Москва, Электрический пер., д. 12, подвал, пом.II, комн.6, тел.: (495)
                                    669-40-40
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "30mm"}}>
                                <div style={{paddingLeft:"2px"}}>Грузоотправитель:</div>
                            </td>
                            <td>
                                <div style={{fontWeight:"bold", paddingLeft:"2px"}}>
                                    Общество с ограниченной ответственностью "Торговая компания "ГИПЕРСНАБ", ИНН 7710939479,
                                    КПП 771001001, 123056, г. Москва, Электрический пер., д. 12, подвал, пом.II, комн.6, тел.: (495)
                                    669-40-40
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "30mm"}}>
                                <div style={{paddingLeft: "2px"}}>Покупатель:</div>
                            </td>
                            <td>
                                <div style={{fontWeight: "bold", paddingLeft:"2px", paddingTop:"5px"}}>
                                    {userData}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "30mm"}}>
                                <div style={{paddingLeft: "2px"}}>Грузополучатель:</div>
                            </td>
                            <td>
                                <div style={{fontWeight: "bold", paddingLeft:"2px", paddingTop:"5px"}}>
                                    {userData}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="invoice_items w-100 mt2" cellPadding="2" cellSpacing="2">
                        <thead className='tc'>
                        <tr>
                            <th style={{width:"13mm"}}>№</th>
                            {/*<th style={{width:"20mm"}}>Код</th>*/}
                            <th>Товар</th>
                            <th style={{width:"20mm"}}>Кол-во</th>
                            <th style={{width:"17mm"}}>Ед.</th>
                            <th style={{width:"27mm"}}>Цена</th>
                            <th style={{width:"27mm"}}>Сумма</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orderedGoods.map((elem, i) => {
                                return(
                                    <tr>
                                        <th className='tc normal' style={{width:"13mm"}}>{i+1}</th>
                                        {/*<th className='tc'style={{width:"20mm"}}>{elem.good}</th>*/}
                                        <th className='tl normal'>{elem.description}</th>
                                        <th className='tr normal' style={{width:"20mm"}}>{elem.amount}</th>
                                        <th className='tl normal'style={{width:"17mm"}}>{elem.measure}</th>
                                        <th className='tr normal' style={{width:"27mm"}}>{elem.price}</th>
                                        <th className='tr normal' style={{width:"27mm"}}>{elem.sum}</th>
                                    </tr>);
                            })
                        }
                        </tbody>
                    </table>

                    <table className='w-100' cellPadding="1" cellSpacing="1">
                        <tbody>
                        <tr>
                            <td></td>
                            <td style={{width:"27mm", fontWeight:"bold", textAlign:"right"}}>Итого:</td>
                            <td style={{width:"27mm", fontWeight:"bold", textAlign:"right"}}>{totalSum}</td>
                        </tr>
                        </tbody>
                    </table>

                    <br/>
                    <div>
                        {`Всего наименований ${orderedGoods.length} на сумму ${totalSum} руб.`}<br/>
                        <b>{`${this.number_to_string(totalSum)}`}</b>
                    </div>
                    <br/>

                    <br/>
                    <div style={{backgroundColor:"#000000", width:"100%", fontSize:"1px", height:"2px"}}>&nbsp;</div>
                    <br/>

                    <div>Руководитель ______________________ (Расковский B. B.)</div>
                    <br/>

                    <div>Главный бухгалтер ______________________ (Расковский B. B.)</div>
                    <br/>

                    <div style={{width: "85mm", textAlign:"center"}}>М.П.</div>
                    <br/>

                    <div style={{width:"800px",textAlign:"left",fontSize:"10pt"}}>
                        Счет действителен к оплате в течении трех дней.
                    </div>
                </div>)
    }
}

export default Bill;