import React from 'react';
import './Bill.css';

const Bill = (props) => {

    return (
        <div className='bill tl'>
            <table className='w-100 ma2'>
                <tr>
                    <td>&nbsp;</td>
                    <td style={{width: "205mm"}} className='tc'>
                        <div style={{width: "205mm"}}>
                            Внимание! Оплата данного счета означает согласие с условиями поставки товара. Уведомление об оплате обязательно, в противном случае не гарантируется наличие товара на складе. Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.
                        </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>

            <table style={{width:"100%", cellPadding:"2", cellSpacing:"2"}} className="invoice_bank_rekv">
                <tr>
                    <td colSpan="2" rowSpan="2" style={{minHeight:"13mm", width:"105mm"}}>
                        <table style={{width:"100%", border:"0", cellPadding:"0", cellSpacing:"0", height: "13mm"}}>
                            <tr>
                                <td style={{verticalAlign:"top"}}>
                                    <div>Укажите название банка</div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign:"bottom", height: "3mm"}}>
                                    <div style={{fontSize:"10pt"}} >Банк получателя</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style={{minHeight:"7mm", height:"auto", width: "25mm"}}>
                        <div>БИK</div>
                    </td>
                    <td rowSpan="2" style={{verticalAlign: "top", width: "60mm"}}>
                        <div style={{height: "7mm", lineHeight: "7mm", verticalAlign: "middle"}}>Бик банка</div>
                        <div>Счет банка</div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: "25mm"}}>
                        <div>Сч. №</div>
                    </td>
                </tr>
                <tr>
                    <td style={{minHeight:"6mm", height:"auto", width: "50mm"}}>
                        <div>ИНН 0000000</div>
                    </td>
                    <td style={{minHeight:"6mm", height:"auto", width: "50mm"}}>
                        <div>КПП 0000000</div>
                    </td>
                    <td rowSpan="2" style={{minHeight:"19mm", height:"auto", verticalAlign: "top", width: "25mm"}}>
                        <div>Сч. №</div>
                    </td>
                    <td rowSpan="2"style={{minHeight:"19mm", height:"auto", verticalAlign: "top", width: "25mm"}}>
                        <div>Расчетный счет</div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{minHeight:"13mm", height:"auto"}}>
                        <table style={{border:"0", cellPadding:"0", cellSpacing:"0", height: "13mm", width: "105mm"}}>
                            <tr>
                                <td style={{verticalAlign:"top"}}>
                                    <div>Название организации</div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign:"top", height: "3mm"}} >
                                    <div style={{fontSize: "10pt"}}>Получатель</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <br/>
            <div style={{fontWeight: "bold", fontSize: "16pt", paddingLeft:"5px"}}>
                Счет № 0 от 05.03.2020
            </div>
            <br/>

            <div style={{backgroundColor:"#000000", width:"100%", fontSize:"1px", height:"2px"}}>&nbsp;</div>

            <table className='w-100'>
                <tr>
                    <td style={{width: "30mm"}}>
                        <div style={{paddingLeft:"2px"}}>Поставщик:</div>
                    </td>
                    <td>
                        <div style={{fontWeight:"bold", paddingLeft:"2px"}}>
                            Укажите полной название продающей организации
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: "30mm"}}>
                        <div style={{paddingLeft: "2px"}}>Покупатель:</div>
                    </td>
                    <td>
                        <div style={{fontWeight: "bold", paddingLeft:"2px"}}>
                            Укажите полной название покупающей организации
                        </div>
                    </td>
                </tr>
            </table>

            <table className="invoice_items w-100" cellPadding="2" cellSpacing="2">
                <thead>
                <tr>
                    <th style={{width:"13mm"}}>№</th>
                    <th style={{width:"20mm"}}>Код</th>
                    <th>Товар</th>
                    <th style={{width:"20mm"}}>Кол-во</th>
                    <th style={{width:"17mm"}}>Ед.</th>
                    <th style={{width:"27mm"}}>Цена</th>
                    <th style={{width:"27mm"}}>Сумма</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

            <table className='w-100' cellPadding="1" cellSpacing="1">
                <tr>
                    <td></td>
                    <td style={{width:"27mm", fontWeight:"bold", textAlign:"right"}}>Итого:</td>
                    <td style={{width:"27mm", fontWeight:"bold", textAlign:"right"}}>0.00</td>
                </tr>
            </table>

            <br/>
            <div>
                Всего наименований 0 на сумму 0.00 рублей.<br/>
                Ноль рублей 00 копеек
            </div>
            <br/>

            <br/>
            <div style={{backgroundColor:"#000000", width:"100%", fontSize:"1px", height:"2px"}}>&nbsp;</div>
            <br/>

            <div>Руководитель ______________________ (Фамилия И.О.)</div>
            <br/>

            <div>Главный бухгалтер ______________________ (Фамилия И.О.)</div>
            <br/>

            <div style={{width: "85mm", textAlign:"center"}}>М.П.</div>
            <br/>

            <div style={{width:"800px",textAlign:"left",fontSize:"10pt"}}>
                Счет действителен к оплате в течении трех дней.
            </div>
        </div>)
};

export default Bill;