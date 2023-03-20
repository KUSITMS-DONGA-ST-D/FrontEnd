import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import React from 'react';
import './Default/chart-data/Chart3.css';

function Chart3() {
    return (
        <div className="cc">
            오늘의 일정
            <div className="cc1">
                <div className="cc2-1">
                    콘텐츠 업로드
                    <div className="cc3">내용</div>
                </div>
                <div className="cc2-2">
                    Live 일정
                    <div className="cc3">내용</div>
                </div>
            </div>
        </div>
    );
}

export default Chart3;
