import { useState, Component } from 'react';

import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 20px;
    /*스크롤 될 만큼의 크기를 위해 height설정*/
    /*모달창 x버튼의 부모를 전체 화면으로 주기 위해 상위 요소 relative처리*/
    position: relative;
    z-index: 9999;
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    /*스크롤이 되도 모달창이 고정 되도록 position:fixed*/
    position: fixed;
    left: 0;
    bottom: 0;
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위해 flex설정*/
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBtn = styled.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog'
}))`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 1rem;
    background-color: white;
    > .close-btn {
        // X 버튼을 화면 정중앙으로 정렬
        position: absolute;
        // 중앙에서 위로 10px 이동
        top: 10px;
        cursor: pointer;
    }
    .first {
        height: 400px;
        width: 80%;
        border: 1px solid red;
    }
    .date-set {
        text-align: left;
        border: 1px solid red;
        height: 20%;
        margin-top: 10px;
    }
    .check {
        position: absolute;
        bottom: 17px;
        width: 200px;
        background-color: red;
        font-weight: bold;
        color: white;
        height: 30px;
        border-radius: 20px;
    }
`;

export const Modal = () => {
    const STARTDAY = [
        { value: '2023-02-10', name: '2023-01-01' },
        { value: '2023-02-10', name: '2023-01-02' },
        { value: '2023-02-10', name: '2023-01-03' },
        { value: '2023-02-10', name: '2023-01-04' },
        { value: '2023-02-10', name: '2023-01-05' },
        { value: '2023-02-10', name: '2023-01-06' },
        { value: '2023-02-10', name: '2023-01-07' },
        { value: '2023-02-10', name: '2023-01-08' },
        { value: '2023-02-10', name: '2023-01-09' },
        { value: '2023-02-10', name: '2023-01-10' },
        { value: '2023-02-10', name: '2023-01-11' },
        { value: '2023-02-10', name: '2023-01-12' },
        { value: '2023-02-10', name: '2023-01-13' },
        { value: '2023-02-10', name: '2023-01-14' },
        { value: '2023-02-10', name: '2023-01-15' },
        { value: '2023-02-10', name: '2023-01-16' },
        { value: '2023-02-10', name: '2023-01-17' },
        { value: '2023-02-10', name: '2023-01-18' },
        { value: '2023-02-10', name: '2023-01-19' },
        { value: '2023-02-10', name: '2023-01-20' },
        { value: '2023-02-10', name: '2023-01-21' },
        { value: '2023-02-10', name: '2023-01-22' },
        { value: '2023-02-10', name: '2023-01-23' },
        { value: '2023-02-10', name: '2023-01-24' },
        { value: '2023-02-10', name: '2023-01-25' },
        { value: '2023-02-10', name: '2023-01-26' },
        { value: '2023-02-10', name: '2023-01-27' },
        { value: '2023-02-10', name: '2023-01-28' },
        { value: '2023-02-10', name: '2023-01-29' },
        { value: '2023-02-10', name: '2023-01-30' },
        { value: '2023-02-10', name: '2023-01-31' },
        { value: '2023-02-10', name: '2023-02-01' },
        { value: '2023-02-10', name: '2023-02-02' },
        { value: '2023-02-10', name: '2023-02-03' },
        { value: '2023-02-10', name: '2023-02-04' },
        { value: '2023-02-10', name: '2023-02-05' },
        { value: '2023-02-10', name: '2023-02-06' },
        { value: '2023-02-10', name: '2023-02-07' },
        { value: '2023-02-10', name: '2023-02-08' },
        { value: '2023-02-10', name: '2023-02-09' },
        { value: '2023-02-10', name: '2023-02-10' },
        { value: '2023-02-10', name: '2023-02-11' },
        { value: '2023-02-10', name: '2023-02-11' },
        { value: '2023-02-10', name: '2023-02-12' },
        { value: '2023-02-10', name: '2023-02-13' },
        { value: '2023-02-10', name: '2023-02-14' },
        { value: '2023-02-10', name: '2023-02-15' },
        { value: '2023-02-10', name: '2023-02-16' },
        { value: '2023-02-10', name: '2023-02-17' },
        { value: '2023-02-10', name: '2023-02-18' },
        { value: '2023-02-10', name: '2023-02-19' },
        { value: '2023-02-10', name: '2023-02-20' },
        { value: '2023-02-10', name: '2023-02-21' },
        { value: '2023-02-10', name: '2023-02-22' },
        { value: '2023-02-10', name: '2023-02-23' },
        { value: '2023-02-10', name: '2023-02-24' },
        { value: '2023-02-10', name: '2023-02-25' },
        { value: '2023-02-10', name: '2023-02-26' },
        { value: '2023-02-10', name: '2023-02-27' },
        { value: '2023-02-10', name: '2023-02-28' },
        { value: '2023-02-10', name: '2023-03-01' },
        { value: '2023-02-10', name: '2023-03-02' },
        { value: '2023-02-10', name: '2023-03-03' },
        { value: '2023-02-10', name: '2023-03-04' },
        { value: '2023-02-10', name: '2023-03-05' },
        { value: '2023-02-10', name: '2023-03-06' },
        { value: '2023-02-10', name: '2023-03-07' },
        { value: '2023-02-10', name: '2023-03-08' },
        { value: '2023-02-10', name: '2023-03-09' },
        { value: '2023-02-10', name: '2023-03-10' },
        { value: '2023-02-10', name: '2023-03-11' },
        { value: '2023-02-10', name: '2023-03-12' },
        { value: '2023-02-10', name: '2023-03-13' },
        { value: '2023-02-10', name: '2023-03-14' },
        { value: '2023-02-10', name: '2023-03-15' },
        { value: '2023-02-10', name: '2023-03-16' },
        { value: '2023-02-10', name: '2023-03-17' },
        { value: '2023-02-10', name: '2023-03-18' },
        { value: '2023-02-10', name: '2023-03-19' },
        { value: '2023-02-10', name: '2023-03-20' },
        { value: '2023-02-10', name: '2023-03-21' },
        { value: '2023-02-10', name: '2023-03-22' },
        { value: '2023-02-10', name: '2023-03-23' },
        { value: '2023-02-10', name: '2023-03-24' },
        { value: '2023-02-10', name: '2023-03-25' },
        { value: '2023-02-10', name: '2023-03-26' },
        { value: '2023-02-10', name: '2023-03-27' },
        { value: '2023-02-10', name: '2023-03-28' }
    ];
    const ENDDAY = [
        { value: '2023-04-10', name: '2023-01-01' },
        { value: '2023-04-10', name: '2023-01-02' },
        { value: '2023-04-10', name: '2023-01-03' },
        { value: '2023-04-10', name: '2023-01-04' },
        { value: '2023-04-10', name: '2023-01-05' },
        { value: '2023-04-10', name: '2023-01-06' },
        { value: '2023-04-10', name: '2023-01-07' },
        { value: '2023-04-10', name: '2023-01-08' },
        { value: '2023-04-10', name: '2023-01-09' },
        { value: '2023-04-10', name: '2023-01-10' },
        { value: '2023-04-10', name: '2023-01-11' },
        { value: '2023-04-10', name: '2023-01-12' },
        { value: '2023-04-10', name: '2023-01-13' },
        { value: '2023-04-10', name: '2023-01-14' },
        { value: '2023-04-10', name: '2023-01-15' },
        { value: '2023-04-10', name: '2023-01-16' },
        { value: '2023-04-10', name: '2023-01-17' },
        { value: '2023-04-10', name: '2023-01-18' },
        { value: '2023-04-10', name: '2023-01-19' },
        { value: '2023-04-10', name: '2023-01-20' },
        { value: '2023-04-10', name: '2023-01-21' },
        { value: '2023-04-10', name: '2023-01-22' },
        { value: '2023-04-10', name: '2023-01-23' },
        { value: '2023-04-10', name: '2023-01-24' },
        { value: '2023-04-10', name: '2023-01-25' },
        { value: '2023-04-10', name: '2023-01-26' },
        { value: '2023-04-10', name: '2023-01-27' },
        { value: '2023-04-10', name: '2023-01-28' },
        { value: '2023-04-10', name: '2023-01-29' },
        { value: '2023-04-10', name: '2023-01-30' },
        { value: '2023-04-10', name: '2023-01-31' },
        { value: '2023-04-10', name: '2023-02-01' },
        { value: '2023-04-10', name: '2023-02-02' },
        { value: '2023-04-10', name: '2023-02-03' },
        { value: '2023-04-10', name: '2023-02-04' },
        { value: '2023-04-10', name: '2023-02-05' },
        { value: '2023-04-10', name: '2023-02-06' },
        { value: '2023-04-10', name: '2023-02-07' },
        { value: '2023-04-10', name: '2023-02-08' },
        { value: '2023-04-10', name: '2023-02-09' },
        { value: '2023-04-10', name: '2023-02-10' },
        { value: '2023-04-10', name: '2023-02-11' },
        { value: '2023-04-10', name: '2023-02-11' },
        { value: '2023-04-10', name: '2023-02-12' },
        { value: '2023-04-10', name: '2023-02-13' },
        { value: '2023-04-10', name: '2023-02-14' },
        { value: '2023-04-10', name: '2023-02-15' },
        { value: '2023-04-10', name: '2023-02-16' },
        { value: '2023-04-10', name: '2023-02-17' },
        { value: '2023-04-10', name: '2023-02-18' },
        { value: '2023-04-10', name: '2023-02-19' },
        { value: '2023-04-10', name: '2023-02-20' },
        { value: '2023-04-10', name: '2023-02-21' },
        { value: '2023-04-10', name: '2023-02-22' },
        { value: '2023-04-10', name: '2023-02-23' },
        { value: '2023-04-10', name: '2023-02-24' },
        { value: '2023-04-10', name: '2023-02-25' },
        { value: '2023-04-10', name: '2023-02-26' },
        { value: '2023-04-10', name: '2023-02-27' },
        { value: '2023-04-10', name: '2023-02-28' },
        { value: '2023-04-10', name: '2023-03-01' },
        { value: '2023-04-10', name: '2023-03-02' },
        { value: '2023-04-10', name: '2023-03-03' },
        { value: '2023-04-10', name: '2023-03-04' },
        { value: '2023-04-10', name: '2023-03-05' },
        { value: '2023-04-10', name: '2023-03-06' },
        { value: '2023-04-10', name: '2023-03-07' },
        { value: '2023-04-10', name: '2023-03-08' },
        { value: '2023-04-10', name: '2023-03-09' },
        { value: '2023-04-10', name: '2023-03-10' },
        { value: '2023-04-10', name: '2023-03-11' },
        { value: '2023-04-10', name: '2023-03-12' },
        { value: '2023-04-10', name: '2023-03-13' },
        { value: '2023-04-10', name: '2023-03-14' },
        { value: '2023-04-10', name: '2023-03-15' },
        { value: '2023-04-10', name: '2023-03-16' },
        { value: '2023-04-10', name: '2023-03-17' },
        { value: '2023-04-10', name: '2023-03-18' },
        { value: '2023-04-10', name: '2023-03-19' },
        { value: '2023-04-10', name: '2023-03-20' },
        { value: '2023-04-10', name: '2023-03-21' },
        { value: '2023-04-10', name: '2023-03-22' },
        { value: '2023-04-10', name: '2023-03-23' },
        { value: '2023-04-10', name: '2023-03-24' },
        { value: '2023-04-10', name: '2023-03-25' },
        { value: '2023-04-10', name: '2023-03-26' },
        { value: '2023-04-10', name: '2023-03-27' },
        { value: '2023-04-10', name: '2023-03-28' }
    ];
    const AGE = [
        { value: '25', name: '20~29' },
        { value: '35', name: '30~39' },
        { value: '45', name: '40~49' },
        { value: '55', name: '50~59' },
        { value: '65', name: '60~69' },
        { value: '75', name: '70~79' }
    ];
    const MAN = [
        { value: 'MALE', name: '남자' },
        { value: 'FEMALE', name: '여자' }
    ];
    const MEDI = [
        { value: '내과학', name: '내과학' },
        { value: '외과학', name: '외과학' },
        { value: '임상계열', name: '임상계열' },
        { value: '기타', name: '기타' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };
    const buttonClick = () => {};
    const SelectBox = (props) => {
        function handleChange(e) {
            // event handler
            console.log(e.target.value);
        }
        return (
            <select onChange={handleChange}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };
    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>{isOpen ? 'Opened!' : '필터'}</ModalBtn>
                {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalView>
                            <div className="close-btn">&times;</div>
                            <button className="first" onClick={(event) => event.stopPropagation()}>
                                필터
                                <div className="date-set">
                                    시작 날짜 :<SelectBox options={STARTDAY}></SelectBox>
                                    종료 날짜 :<SelectBox options={ENDDAY}></SelectBox>
                                </div>
                                <div className="date-set">
                                    연령 :<SelectBox options={AGE}></SelectBox>
                                </div>
                                <div className="date-set">
                                    성별 :<SelectBox options={MAN}></SelectBox>
                                </div>
                                <div className="date-set">
                                    과 :<SelectBox options={MEDI}></SelectBox>
                                </div>
                            </button>
                            <button className="check" onClick={buttonClick}>
                                확인
                            </button>
                        </ModalView>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>
        </>
    );
};
export default Modal;
