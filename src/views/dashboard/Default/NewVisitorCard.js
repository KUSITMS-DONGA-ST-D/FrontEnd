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
    margin: '24px',
    height: '55px'
}));

let newVisitor = 0;
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase1?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
            newVisitor = data[0].new_visitors;
        })
        .catch((error) => {
            console.log(error);
        });
};
fetchData();
// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const NewVisitorCard = ({ isLoading }) => {
    // const theme = useTheme();
    useEffect(() => {
        console.log(newVisitor);
    }, [newVisitor]);
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2, backgroundColor: '#FF6060' }}>
                        <div>신규 방문자수</div>
                        <div style={{ float: 'right', textAline: 'right' }}>{newVisitor}명</div>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

NewVisitorCard.propTypes = {
    isLoading: PropTypes.bool
};

export default NewVisitorCard;
