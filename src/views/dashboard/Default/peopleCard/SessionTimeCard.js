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
    width: '50%'
}));

let sessionTime = 0;
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase1?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
            SessionTime = data[0].session_time;
        })
        .catch((error) => {
            console.log(error);
        });
};
fetchData();
// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const SessionTimeCard = ({ isLoading }) => {
    // const theme = useTheme();
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2, backgroundColor: '#FF6060' }}>
                        <div>평균 세션 기간</div>
                        <div style={{ display: 'flex', float: 'right' }}>
                            <div style={{ fontSize: '33px' }}>{/*sessionTime*/}910</div>
                            <div style={{ paddingTop: '6px' }}>초</div>
                        </div>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

SessionTimeCard.propTypes = {
    isLoading: PropTypes.bool
};

export default SessionTimeCard;
