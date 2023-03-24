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
import Voc from './Voc';
import Chart4 from './Chart4';
import NewVisitorCard from './peopleCard/NewVisitorCard';
import AgainVisitorCard from './peopleCard/AgainVisitorCard';
import TotalVisitorCard from './peopleCard/TotalVisitorCard';
import NewUsers from './peopleCard/NewUsersCard';
import AccumulateUserCard from './peopleCard/AccumulateUsersCard';
import ConversionRateCard from './peopleCard/ConversionRateCard';
import ViewNumberCard from './peopleCard/ViewNumberCard';
import SessionTimeCard from './peopleCard/SessionTimeCard';

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
                    <Grid item lg={6} md={7} sm={6} xs={12}>
                        <Calendarz isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <Voc />
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
                        <Chart4 />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid
                    container
                    spacing={gridSpacing}
                    sx={{ marginTop: '3px', marginLeft: '1px', backgroundColor: '#FFFFFF', padding: '0px' }}
                >
                    <Grid sx={{ display: 'flex', height: '80px', width: '100%' }}>
                        <NewVisitorCard />
                        <AgainVisitorCard />
                        <TotalVisitorCard />
                    </Grid>
                    <Grid item xs={12} md={8} lg={12}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid sx={{ display: 'flex', height: '80px', width: '100%' }}>
                        <NewUsers />
                        <AccumulateUserCard />
                        <ConversionRateCard />
                    </Grid>
                    <Grid item xs={12} md={8} lg={12}>
                        <SecondChart isLoading={isLoading} />
                    </Grid>
                    <Grid sx={{ display: 'flex', height: '80px', width: '100%' }}>
                        <ViewNumberCard />
                        <SessionTimeCard />
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
