import React, { Component } from 'react'
import campaignService from '../service/campaign-service';
import styled from 'styled-components'
import CircularUnderLoad from '../components/CircularUnderLoad';
import CampaignTable from '../components/CampaignTable';

const LoadingContainerSC = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 0 50px;
    flex-direction:column;
    text-align:center;
    display:flex;
    justify-content: center;
`

const ErrorContainerSC = styled.div`
    background: #d0031b26;
    color: #d0031b;
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    font-size: 14px;
`

class CampaignList extends Component {
    state = {
        isLoading: true,
        campaigns: [],
        error:'',
    }

    componentDidMount() {
        campaignService.getCampaigns()
            .then((campaigns) => {
                this.setState({
                    campaigns,
                    isLoading: false,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    setError = (error) => {
        this.setState({
            error,
        })
    }

    render() {
        return (
            <>
                {this.state.isLoading ?
                    <LoadingContainerSC>
                        <p>Loading campaigns</p>
                        {CircularUnderLoad()}
                    </LoadingContainerSC>
                    :
                    <>
                        {this.state.error.length?
                        <ErrorContainerSC>
                            <i class="material-icons">warning</i>
                            <p>{this.state.error}</p>
                        </ErrorContainerSC>
                        : null}
                        <CampaignTable campaigns={this.state.campaigns} setError={this.setError}></CampaignTable>
                    </>
                }
            </>
        )
    }
}

export default CampaignList;


