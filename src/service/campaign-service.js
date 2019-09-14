import axios from 'axios';

class CampaignService {
  constructor() {
    this.campaign = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true
    })
  }

  getCampaigns() {
    return this.campaign.get('/campaigns')
      .then(({ data }) => data);
  }

  createCampaign() {
    return this.campaign.post('/campaigns/create')
      .then(({ data }) => data);
  }

  deleteCampaign(id) {
    return this.campaign.delete(`/campaigns/${id}`)
      .then(({ data }) => data);
  }

}

const campaignService = new CampaignService();

export default campaignService;
