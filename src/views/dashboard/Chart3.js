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
                    <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="29.9999" height="12.1875" rx="6.09373" fill="#EE3C30" />
                        <path
                            d="M9.8054 8.83523V3.92045H10.9205V8.83523H9.8054ZM7.90554 6.93537V5.82031H12.8203V6.93537H7.90554ZM19.4654 10.0994C18.954 10.0994 18.4995 10.0118 18.1017 9.83665C17.7064 9.66146 17.3939 9.41761 17.1642 9.10511C16.9346 8.79261 16.8127 8.43158 16.7985 8.02202H18.1337C18.1455 8.21851 18.2106 8.39015 18.329 8.53693C18.4474 8.68134 18.6048 8.7938 18.8013 8.87429C18.9978 8.95478 19.218 8.99503 19.4618 8.99503C19.7222 8.99503 19.9531 8.95005 20.1543 8.86009C20.3555 8.76776 20.513 8.63991 20.6266 8.47656C20.7402 8.31321 20.7959 8.125 20.7935 7.91193C20.7959 7.69176 20.7391 7.49763 20.623 7.32955C20.507 7.16146 20.339 7.03007 20.1188 6.93537C19.901 6.84067 19.6382 6.79332 19.3304 6.79332H18.6877V5.7777H19.3304C19.5837 5.7777 19.8051 5.7339 19.9945 5.64631C20.1863 5.55871 20.3366 5.43561 20.4455 5.27699C20.5544 5.116 20.6077 4.93016 20.6053 4.71946C20.6077 4.51349 20.5615 4.33475 20.4668 4.18324C20.3745 4.02936 20.2431 3.9098 20.0726 3.82457C19.9045 3.73935 19.7069 3.69673 19.4796 3.69673C19.257 3.69673 19.0511 3.73698 18.8617 3.81747C18.6723 3.89796 18.5196 4.01278 18.4036 4.16193C18.2876 4.30871 18.226 4.4839 18.2189 4.6875H16.9512C16.9606 4.2803 17.0778 3.92282 17.3027 3.61506C17.53 3.30492 17.833 3.06345 18.2118 2.89062C18.5906 2.71544 19.0156 2.62784 19.4867 2.62784C19.972 2.62784 20.3934 2.71899 20.7509 2.90128C21.1107 3.0812 21.3889 3.32386 21.5854 3.62926C21.7819 3.93466 21.8801 4.27202 21.8801 4.64134C21.8825 5.0509 21.7618 5.39418 21.5179 5.67116C21.2765 5.94815 20.9592 6.12926 20.5662 6.21449V6.27131C21.0776 6.34233 21.4694 6.53172 21.7417 6.83949C22.0163 7.14489 22.1524 7.52486 22.15 7.9794C22.15 8.3866 22.034 8.75118 21.802 9.07315C21.5724 9.39276 21.2551 9.6437 20.8503 9.82599C20.4479 10.0083 19.9862 10.0994 19.4654 10.0994Z"
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
                    <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="29.9999" height="12.1875" rx="6.09373" fill="#EE3C30" />
                        <path
                            d="M8.8054 8.83523V3.92045H9.92045V8.83523H8.8054ZM6.90554 6.93537V5.82031H11.8203V6.93537H6.90554ZM15.8553 10V9.0483L18.3801 6.57315C18.6216 6.32931 18.8229 6.11269 18.9838 5.9233C19.1448 5.7339 19.2656 5.55043 19.3461 5.37287C19.4266 5.19531 19.4668 5.00592 19.4668 4.80469C19.4668 4.57505 19.4147 4.37855 19.3105 4.2152C19.2064 4.04948 19.0632 3.92164 18.8809 3.83168C18.6986 3.74171 18.4914 3.69673 18.2594 3.69673C18.0203 3.69673 17.8108 3.74645 17.6309 3.84588C17.4509 3.94294 17.3113 4.08144 17.2118 4.26136C17.1148 4.44129 17.0662 4.65554 17.0662 4.90412H15.8127C15.8127 4.44247 15.918 4.04119 16.1287 3.70028C16.3394 3.35937 16.6294 3.09541 16.9988 2.90838C17.3704 2.72135 17.7966 2.62784 18.2772 2.62784C18.7649 2.62784 19.1934 2.71899 19.5627 2.90128C19.932 3.08357 20.2185 3.33333 20.4221 3.65057C20.628 3.9678 20.731 4.33002 20.731 4.73722C20.731 5.00947 20.6789 5.27699 20.5748 5.53977C20.4706 5.80256 20.2871 6.09375 20.0243 6.41335C19.7639 6.73295 19.3981 7.12003 18.927 7.57457L17.6735 8.84943V8.89915H20.8411V10H15.8553Z"
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
                                <td>2023.3.28 13:20</td>
                            </tr>
                            <tr style={{ height: '33%' }}></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart3;
