import React, { Component } from 'react'
import MaterialTable from 'material-table';

export default class CampaignTable extends Component {
    state= {
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    }

    render() {
        return (
            <MaterialTable
                title="Campaign list"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data.push(newData);
                                this.setState({ ...this.state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data.splice(data.indexOf(oldData), 1);
                                this.setState({ ...this.state, data });
                            }, 600);
                        }),
                }}
            />
        )
    }
}