import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import './Dashboard.scss';

const Dashboard = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    const [month, setMonth] = React.useState(0);

    const onMonthChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <div className="container dashboard">
            <h2>Dashboard</h2>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={month}
                    label="Month"
                    onChange={onMonthChange}
                >
                    <MenuItem value={0}> <b>All</b> </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div className="row">
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <Card variant="outlined" className="card">
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        Applications
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        204
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <Card variant="outlined" className="card">
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        Rent
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        $51M
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <Card variant="outlined" className="card">
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        Sell
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        $709M
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Card variant="outlined" className="card big">
                        <CardContent>
                            <Typography className="card-title-block" sx={{fontSize: 14}} color="rgb(76, 215, 102)" gutterBottom>
                                <span className="card-title-text">21,425</span>
                            </Typography>
                            <div className="card-desc">
                                Properties for sale
                            </div>
                            <div className="card-details">
                                <div className="left-block">
                                    <span className="number">123,145</span>
                                    <span className="text">Total</span>
                                </div>
                                <div className="line">
                                    <span>&nbsp;</span>
                                </div>
                                <div className="right-block">
                                    <span className="number">68,127</span>
                                    <span className="text">Sold</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card variant="outlined" className="card big">
                        <CardContent>
                            <Typography className="card-title-block" sx={{fontSize: 14}} color="rgb(76, 215, 102)" gutterBottom>
                                <span className="card-title-text">44,954</span>
                            </Typography>
                            <div className="card-desc">
                                Properties for rent
                            </div>
                            <div className="card-details">
                                <div className="left-block">
                                    <span className="number">657,148</span>
                                    <span className="text">Total</span>
                                </div>
                                <div className="line">
                                    <span>&nbsp;</span>
                                </div>
                                <div className="right-block">
                                    <span className="number">145,453</span>
                                    <span className="text">Rented</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <ReactEcharts option={option} />
        </div>
    );
};

export default Dashboard;