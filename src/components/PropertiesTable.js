import React from 'react';
import "./components.css";

const PropertiesTable = ({properties}) => {
    console.log(properties);

    if (properties.length){
        return (
            <table className="collapse ba br2 b--black-10 pv2 ph3 ma2 tl">
                <tr className="striped--lightest-blue">
                <th className="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th className="tr f6 ttu fw6 pv2 ph3">Rating</th>
            </tr>
                <tr className="striped--lightest-blue">
                    <td className="pv2 ph3">Jurassic Park</td>
                    <td className="pv2 ph3">5 stars</td>
                </tr>
                <tr className="striped--lightest-blue">
                    <td className="pv2 ph3">Back to the Future</td>
                    <td className="pv2 ph3">5 stars</td>
                </tr>
                <tr className="striped--lightest-blue">
                    <td className="pv2 ph3">Primer</td>
                    <td className="pv2 ph3">5 stars</td>
                </tr>
                <tr className="striped--lightest-blue">
                    <td className="pv2 ph3">Sunshine</td>
                    <td className="pv2 ph3">5 stars</td>
                </tr>
                <tr className="striped--lightest-blue">
                    <td className="pv2 ph3">Moon</td>
                    <td className="pv2 ph3">5 stars</td>
                </tr>
            </table>
        )
    } else {
        return <p>NOP!</p>;
    }

};

export default PropertiesTable;