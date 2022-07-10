import React from "react";

const ElementList = ({elements}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>rank</th>                   
                    <th>item</th>
                    <th>repo_name</th>
                    <th>stars</th>
                    <th>forks</th>                   
                    <th>language</th>
                    {/* <th>repo_url</th> */}
                    <th>username</th>
                    <th>issues</th>                   
                    <th>last_commit</th>
                    {/* <th>description</th> */}
                </tr>
            </thead>
            <tbody>
                {elements.map(element => (
                    <tr key={element.rank}>
                        <th>{element.rank}</th>
                        <th>{element.item}</th>
                        <th>{element.repo_name}</th>
                        <th>{element.stars}</th>
                        <th>{element.forks}</th>
                        <th>{element.language}</th>
                        {/* <th>{element.repo_url}</th> */}
                        <th>{element.username}</th>
                        <th>{element.issues}</th>
                        <th>{element.last_commit}</th>
                        {/* <th>{element.description}</th> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ElementList;