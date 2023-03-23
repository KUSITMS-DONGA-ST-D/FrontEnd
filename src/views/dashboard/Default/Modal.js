import { useState } from 'react';

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
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    /*스크롤이 되도 모달창이 고정 되도록 position:fixed*/
    position: fixed;
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
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 200px;
    height: 100px;
    border-radius: 1rem;
    background-color: white;
    > .close-btn {
        // X 버튼을 화면 정중앙으로 정렬
        position: absolute;
        // 중앙에서 위로 10px 이동
        top: 10px;
        cursor: pointer;
    }
`;

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>{isOpen ? 'Opened!' : 'Click Me'}</ModalBtn>
                {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalView>
                            <div className="close-btn">&times;</div>모달창
                        </ModalView>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>
        </>
    );
};
export default Modal;
