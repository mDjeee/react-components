import Cards from '../../containers/Cards/Cards';
import SearchBar from '../Search-bar/Search-bar';
import './Home.css';

function Home() {
  return (
    <div className="main__contaier polka">
      <SearchBar />
      <Cards />
    </div>
  );
}

export default Home;
