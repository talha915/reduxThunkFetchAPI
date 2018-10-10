import React, {Component} from 'react';

class Table extends Component {

    render() {
        console.log("Props from Table", this.props.data.users);
        return(
            <table className={"table table-bordered"}>
                <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.data.users.map((index)=>{
                    return(
                        <tr key={Math.random()}>
                            <td>
                                {index.id}
                            </td>
                            <td>
                                {index.name}
                            </td>
                            <td>
                                {index.email}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

export default Table;