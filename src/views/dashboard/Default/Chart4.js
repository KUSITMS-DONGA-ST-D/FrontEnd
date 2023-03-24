import { Modal } from './Modal';
import React, { useState } from 'react';
import './Chart4.css';
import ModalBasic from './ModalBasic';

function Chart4() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const isModal = () => {
        setModal(true);
    };

    return (
        <div className="chart4-1">
            콘텐츠 분석
            <div className="chart4-2">
                <div className="chart4-2-1">조회수</div>
                <Modal onClick={isModal} />
            </div>
            <div className="chart4-3">
                <table width="100%" height="90%">
                    <tr style={{ color: '#979797' }}>
                        <th>번호</th>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>영상분야</th>
                        <th>관심수</th>
                        <th>댓글수</th>
                    </tr>
                    {!Modal ? (
                        <>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=50" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/1664350595KDW 메인타이틀 2022.jpg"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>Korea disease week 2022</td>
                                <td>임상계열</td>
                                <td>30</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=12" target="_blank">
                                        <img
                                            src="https://api.mediflix.fifteenh.io/storage/series/thumb/1633074759KDW_대표 썸네일.jpeg"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>Korea disease week 2021</td>
                                <td>심장내과 계열</td>
                                <td>25</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=36" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/1644309370(재)의로운 클라스 대표.jpeg"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>공보의를 위한 의로운 클라쓰</td>
                                <td>제목</td>
                                <td>21</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=38" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/1655795853Frame 592.jpg"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>일타강사,이민영 원장과 함께...</td>
                                <td>일반</td>
                                <td>18</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=16" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/16341060950_20210820_신원철_대표썸네일.jpg"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>밤의 불청객</td>
                                <td>가정의학과</td>
                                <td>18</td>
                                <td>5</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=878" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1679024213강북삼성병원 이관호 교수 파트2.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>targeted therapy in breast cancer</td>
                                <td>외과</td>
                                <td>30</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=853" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1676599648KakaoTalk_Photo_2023-02-17-10-47-40 001.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>척주 주사 치료 요법</td>
                                <td>외과</td>
                                <td>25</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=49" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/1662430772초음파의정석 썸네일_어깨편_기본.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>근골격계 초음파(Musculoskeletal Ultrasound)</td>
                                <td>외과</td>
                                <td>21</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <a href="https://mediflix.co.kr/original/detail?id=53" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/series/thumb/1671605793KakaoTalk_Photo_2022-12-21-15-48-36 016.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>척추 닥터 김사부</td>
                                <td>외과</td>
                                <td>18</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <a href="https://mediflix.co.kr/vod/detail?id=798" target="_blank">
                                        <img
                                            src="https://api.mediflix.co.kr/storage/live/thumb/1668649647썸네일_김지완교수1.png"
                                            alt="썸네일"
                                        ></img>
                                    </a>
                                </td>
                                <td>골다공증성 고관절 골절의 치료 part.1</td>
                                <td>외과</td>
                                <td>18</td>
                                <td>5</td>
                            </tr>
                        </>
                    )}
                </table>
            </div>
        </div>
    );
}

export default Chart4;
