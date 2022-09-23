import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import './Home.scss';

const Home = () => {
    return (
        <div className="container-fluid home">
            <Carousel>
                <Paper>
                    <img src="/slider-1.jpeg" alt="slider-1" />
                </Paper>
                <Paper>
                    <img src="/slider-2.jpg" alt="slider-1" />
                </Paper>
            </Carousel>
        </div>
    );
};

export default Home;