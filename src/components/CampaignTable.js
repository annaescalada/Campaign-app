import React, { Component } from 'react'
import MaterialTable from 'material-table';
import campaignService from '../service/campaign-service';

export default class CampaignTable extends Component {
    state = {
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Category', field: 'category', lookup: { travel: 'Travel', dating: 'Dating', lifestyle: 'Lifestyle', news: 'News' } },
            { title: 'URL', field: 'url' },
        ],
        data: this.props.campaigns,
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
                                campaignService.createCampaign(newData)
                                    .then(response => {
                                        console.log('Campaign created');
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data.splice(data.indexOf(oldData), 1);
                                this.setState({ ...this.state, data });
                                campaignService.deleteCampaign(oldData.id)
                                    .then(response => {
                                        console.log('Campaign deleted');
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            }, 600);
                        }),
                }}
            />
        )
    }
}