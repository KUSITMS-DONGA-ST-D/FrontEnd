<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 1328745bebef1e834e23b3b4fa366e47651e2e07
import './Chart4.css';
import ModalBasic from './ModalBasic';

function Chart4() {
<<<<<<< HEAD
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="chart4-1">
            콘텐츠 분석
            <button  onClick={showModal}>필터</button>
                {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
            <div className="chart4-2">
                <div className="chart4-2-1">조회수</div>
                
=======
    let [modal, setModal] = useState(false);
    return (
        <div className="chart4-1">
            콘텐츠 분석
            <div className="chart4-2">
                <div className="chart4-2-1">조회수</div>
                <Modal />
>>>>>>> 1328745bebef1e834e23b3b4fa366e47651e2e07
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
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 1328745bebef1e834e23b3b4fa366e47651e2e07
}

export default Chart4;