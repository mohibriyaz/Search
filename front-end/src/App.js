import { useState } from "react";
import AdCard from "./components/AdCard";
import SearchBox from "./components/SearchBox/SearchBox";
import ErrorComponent from './components/ErrorComponent';
import AdService from "./network/AdService";
import { OTD } from "./helpers";

const App = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState("");

  const onSearch = (searchText) => {
    AdService.searchAds(searchText)
      .then((res) => {
        if(res.status === 200) {
          setAds(OTD(res.data))
        }else{
          setError(res.message);
        }
      })
      .catch((error) => setError(error.messgae));
  };

  return (
    <div className="container pt-4">
      <SearchBox onSearch={onSearch} />
      {error && <ErrorComponent error={error} />}
      <div class="row row-cols-1 row-cols-md-3 g-3">
        {Array.isArray(ads) && ads.map((item) => <AdCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default App;
