import PropTypes from 'prop-types';
import axios from 'axios';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { CookieOutlined } from '@mui/icons-material';
import { useEffect } from 'react';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#FF6060',
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    margin: '15px 0px  5px 10px',
    height: '90%',
    width: '33%'
}));

let totalVisitor = 0;
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase1?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
            totalVisitor = data[0].total_visitors;
        })
        .catch((error) => {
            console.log(error);
        });
};
fetchData();
// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalVisitorCard = ({ isLoading }) => {
    // const theme = useTheme();
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2, backgroundColor: '#FF6060' }}>
                        <div>총 방문자수</div>
                        <div style={{ display: 'flex', float: 'right' }}>
                            <div style={{ fontSize: '33px' }}>{/*totalVisitor*/}400</div>
                            <div style={{ paddingTop: '6px' }}>명</div>
                        </div>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TotalVisitorCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalVisitorCard;
