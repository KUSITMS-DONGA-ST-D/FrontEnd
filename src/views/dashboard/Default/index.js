import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import Calendarz from './Calendarz';
import Chart3 from '../Chart3';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={6}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={7} md={6} sm={6} xs={12}>
                        <Calendarz isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={5} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} md={6} lg={12}>
                        <Chart3 />
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8} lg={12}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={8} lg={12}>
                        <SecondChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={8} lg={12}>
                        <ThirdChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Dashboard;
