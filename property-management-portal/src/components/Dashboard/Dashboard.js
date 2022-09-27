import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { get10LatestProperties, getSumRentTypeProperties, getSumSellTypeProperties, getTotalApplications } from 'services/ReportService';
import './Dashboard.scss';

const Dashboard = () => {
    const dispatch = useDispatch();
    const totalApplications = useSelector((state) => state.report.totalApplications);
    const sumSellTypeProperties = useSelector((state) => state.report.sumSellTypeProperties);
    const sumRentTypeProperties = useSelector((state) => state.report.sumRentTypeProperties);
    const tenLatestProperties = useSelector((state) => state.report.tenLatestProperties);

    const [tenLatestPropertiesChartOption, setTenLatestPropertiesChartOption] = useState({});

    useEffect(() => {
        dispatch(getTotalApplications());
        dispatch(getSumSellTypeProperties());
        dispatch(getSumRentTypeProperties());
        dispatch(get10LatestProperties());
    }, [dispatch]);

    const option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    useEffect(() => {
        if (tenLatestProperties) {
            const data = tenLatestProperties.reduce((p, c) =>                       {
                const city = c.location.city;

                if (!p.hasOwnProperty(city)) {
                    p[city] = 0;
                }

                p[city]++;

                return p;
            }, {});

            console.log(data);
            setTenLatestPropertiesChartOption({
                xAxis: {
                    type: 'category',
                    data: Object.keys(data)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: Object.values(data),
                        type: 'bar'
                    }
                ]
            })
        }
    }, [tenLatestProperties]);

    return (
        <div className="container dashboard">
            <h2>Dashboard</h2>
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
                                        {totalApplications}
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
                                        Sell
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        <NumericFormat value={sumSellTypeProperties} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
                                        Rent
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        <NumericFormat value={sumRentTypeProperties} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
            <div className="row">
                <div className="col">
                    <h4>10 latest properties</h4>
                    <ReactEcharts option={tenLatestPropertiesChartOption} />
                </div>
            </div>
            <ReactEcharts option={option} />
        </div>
    );
};

export default Dashboard;