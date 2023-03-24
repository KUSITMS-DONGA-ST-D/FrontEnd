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
                    <div className="cc3">
                        <table width="95%" height="100%">
                            <tr style={{ color: '#979797' }}>
                                <th>썸네일</th>
                                <th>제목</th>
                                <th>업로드 날짜 및 시간</th>
                            </tr>
                            <tr>
                                <td><img src='https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png'></img></td>
                                <td>의료 상식</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                            <tr>
                                <td><img src='https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png'></img></td>
                                <td>건강하기 위해</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                            <tr>
                                <td><img src='https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png'></img></td>
                                <td>건강 챙기기 </td>
                                <td>2023.3.28 20시</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="cc2-2">
                    Live 일정
                    <div className="cc3">
                        <table width="100%" height="100%">
                            <tr style={{ color: '#979797' }}>
                                <th>썸네일</th>
                                <th>제목</th>
                                <th>업로드 날짜 및 시간</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png"
                                        alt="썸네일"
                                    ></img>
                                </td>
                                <td>의료 상식</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png"
                                        alt="썸네일"
                                    ></img>
                                </td>
                                <td>의료 상식</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://api.mediflix.co.kr/storage/live/thumb/1647845163%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%202-2.png"
                                        alt="썸네일"
                                    ></img>
                                </td>
                                <td>의료 상식</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart3;
