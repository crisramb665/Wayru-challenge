import React from "react";

const ElementList = ({elements}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Stars</th>
                    <th>Languaje</th>
                    <th>Forks</th>
                </tr>
            </thead>
            <tbody>
                {elements.map(element => (
                    <tr key={element.languaje}>
                        <th>{element.rank}</th>
                        <th>{element.stars}</th>
                        <th>{element.languaje}</th>
                        <th>{element.forks}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ElementList;