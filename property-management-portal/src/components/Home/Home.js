import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import './Home.scss';
import SearchWidget from '../SearchWidget/SearchWidget';

const Home = () => {
    return (
        <div className="container-fluid home">
            <Carousel
                fullHeightHover={false}>
                <Paper>
                    <img src="/slider-1.jpeg" alt="slider-1" />
                </Paper>
                <Paper>
                    <img src="/slider-2.jpg" alt="slider-1" />
                </Paper>
            </Carousel>
            <SearchWidget />
        </div>
    );
};

export default Home;