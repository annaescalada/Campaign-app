import React, { Component } from 'react'
import campaignService from '../service/campaign-service';
import styled from 'styled-components'
import CircularUnderLoad from '../components/CircularUnderLoad';
import CampaignTable from '../components/CampaignTable';

const CampaignContainerSC = styled.div`
    background: red;
`


class CampaignList extends Component {
    state = {
        isLoading: true,
        campaigns: [],
    }

    componentDidMount() {
        campaignService.getCampaigns()
            .then((campaigns) => {
                this.setState({
                    isLoading: false,
                    campaigns
                })
            })
        .catch ((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <CampaignContainerSC>

                {this.state.isLoading?
                CircularUnderLoad()
                : 
                <CampaignTable></CampaignTable>
            }
            </CampaignContainerSC>
        )
    }
}

export default CampaignList;

