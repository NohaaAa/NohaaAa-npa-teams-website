import Header from './header/header';
import Subscribe from './subscribe/subscribe';
import Highlights from './highlights/highlights';
import NextChampion from './next-champions/next-champions';

const Home = () => {
    return (
        <div className="App">

            <Header />
            <Subscribe />
            <Highlights />
            <NextChampion />
        </div>
    )
}

export default Home;