import Base from "./Base";

class AdService extends Base {
  searchAds(query) {
    return this.get(`/api/search`, {
      params: {
        query,
      },
    });
  }
}

export default new AdService();
