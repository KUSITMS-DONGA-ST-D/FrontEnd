import { Modal } from './Modal';
import React, { useState } from 'react';
import './Chart4.css';
import ModalBasic from './ModalBasic';

function Chart4() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="chart4-1">
            콘텐츠 분석
            <div className="chart4-2">
                <div className="chart4-2-1">조회수</div>
                <Modal/>
            </div>
            <div className="chart4-3">
                <table width="100%" height="90%">
                    <tr style={{ color: '#979797' }}>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>영상분야</th>
                        <th>관심수</th>
                        <th>댓글수</th>
                    </tr>
                    <tr>
                        <td>썸넬</td>
                        <td>어쩌구</td>
                        <td>영상분야</td>
                        <td>6</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>썸넬</td>
                        <td>어쩌구</td>
                        <td>영상분야</td>
                        <td>6</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>썸넬</td>
                        <td>어쩌구</td>
                        <td>영상분야</td>
                        <td>6</td>
                        <td>4</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Chart4;