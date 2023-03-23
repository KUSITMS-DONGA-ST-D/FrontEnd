import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartData from './chart-data/Second-Chart';
import weekData from './chart-data/Second-Week-Chart';
import monthData from './chart-data/Second-Month-Chart';

const status = [
    {
        value: 'today',
        label: '1 day'
    },
    {
        value: 'week',
        label: '7 days'
    },
    {
        value: 'month',
        label: '30 days'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const SecondChart = ({ isLoading }) => {
    const [value, setValue] = useState('today');
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const { navType } = customization;
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

    return (
        <>
            {/* {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : ( */}
            <MainCard>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <Typography variant="subtitle2"></Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3"></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    sx={{ height: '10px' }}
                                >
                                    {status.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        {value == 'today' ? <Chart {...chartData} /> : value == 'week' ? <Chart {...weekData} /> : <Chart {...monthData} />}
                    </Grid>
                </Grid>
            </MainCard>
            {/* )} */}
        </>
    );
};

SecondChart.propTypes = {
    isLoading: PropTypes.bool
};

export default SecondChart;
