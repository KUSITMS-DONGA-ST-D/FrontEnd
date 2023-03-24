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
                    콘텐츠 업로드       <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="31" height="13" rx="6.09373" fill="#EE3C30"/>
<path d="M9.8054 9.83523V4.92045H10.9205V9.83523H9.8054ZM7.90554 7.93537V6.82031H12.8203V7.93537H7.90554ZM17.1216 11L20.2147 4.87784V4.82812H16.6245V3.72727H21.5783V4.85298L18.4888 11H17.1216Z" fill="white"/>
</svg>

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
                                <td>밤의 불청객</td>
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
                    Live 일정        <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="31" height="13" rx="6.09373" fill="#EE3C30"/>
<path d="M9.8054 9.83523V4.92045H10.9205V9.83523H9.8054ZM7.90554 7.93537V6.82031H12.8203V7.93537H7.90554ZM17.1216 11L20.2147 4.87784V4.82812H16.6245V3.72727H21.5783V4.85298L18.4888 11H17.1216Z" fill="white"/>
</svg>

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
                                <td>밤의 불청객</td>
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
