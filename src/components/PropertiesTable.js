import React from 'react';
import "./components.css";

const PropertiesTable = ({properties}) => {
    console.log(properties);

    if (properties.length){
        return (
            <table className="collapse ba br2 b--black-10 pv2 ph3 ma2 tl">
                <tr className="striped--light-gray">
                    <th className="pv2 ph3 tl f6 fw6 ttu">Параметр</th>
                    <th className="tr f6 ttu fw6 pv2 ph3">Значение</th>
                </tr>
                <tbody>
                {properties.reduce((accum, elem) => {
                   accum.push(
                       <tr className="striped--lightest-blue">
                           <td className="pv2 ph3">{elem.attr}</td>
                           <td className="pv2 ph3">{elem.value}</td>
                       </tr>);
                    return accum;
                },[])}
                </tbody>
            </table>
        )
    } else {
        return <p></p>;
    }

};

export default PropertiesTable;