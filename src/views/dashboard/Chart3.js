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
                    콘텐츠 업로드{' '}
                    <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="13" rx="6.09373" fill="#EE3C30" />
                        <path
                            d="M9.8054 9.83523V4.92045H10.9205V9.83523H9.8054ZM7.90554 7.93537V6.82031H12.8203V7.93537H7.90554ZM17.1216 11L20.2147 4.87784V4.82812H16.6245V3.72727H21.5783V4.85298L18.4888 11H17.1216Z"
                            fill="white"
                        />
                    </svg>
                    <div className="cc3">
                        <table width="95%" height="100%">
                            <tr style={{ color: '#979797' }}>
                                <th>썸네일</th>
                                <th>제목</th>
                                <th>업로드 날짜 및 시간</th>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=882" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1679561110분당차병원 정상윤 교수 썸네일 파트2.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>혈청음성 척추관절염2</td>
                                <td>2023.3.28 14시</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=881" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1679561029분당차병원 정상윤 교수 썸네일 파트1.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>혈청음성 척추관절염1</td>
                                <td>2023.3.28 17시</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=880" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1679560627경희대병원 김원 교수 썸네일 파트1.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>동맥경화 조기진단2</td>
                                <td>2023.3.28 20시</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="cc2-2">
                    Live 일정{' '}
                    <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="13" rx="6.09373" fill="#EE3C30" />
                        <path
                            d="M9.8054 9.83523V4.92045H10.9205V9.83523H9.8054ZM7.90554 7.93537V6.82031H12.8203V7.93537H7.90554ZM17.1216 11L20.2147 4.87784V4.82812H16.6245V3.72727H21.5783V4.85298L18.4888 11H17.1216Z"
                            fill="white"
                        />
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
                                    <a href="https://mediflix.co.kr/live/detail?id=455" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/background/1677486989홍승노 교수님 썸네일_파트1.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>비염의 수술적 관리1</td>
                                <td>2023.3.28 13:20</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://mediflix.co.kr/live/detail?id=456" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/background/1677487016홍승노 교수님 썸네일_파트2.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>비염의 수술적 관리2</td>
                                <td>2023.3.29 13:20</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://mediflix.co.kr/live/detail?id=457" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/background/1677487052김인재 썸네일 파트1.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>심부전 진단 및 치료</td>
                                <td>2023.3.30 13:20</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart3;
