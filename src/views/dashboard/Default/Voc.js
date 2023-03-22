import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';

/*function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('ec2-43-200-98-143.ap-northeast-2.compute.amazonaws.com:80/all-data').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.username}</CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Voc() {
  const item = GetData();

  return (<>
    <CommonTable headersName={['글번호', '제목', '작성자', '등룍일']}>
      {item}
    </CommonTable>
  </>);
}
  
export default Voc;*/
const Voc = props => {
    return (
      <>
        <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
          <CommonTableRow>
            <CommonTableColumn>1</CommonTableColumn>
            <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
            <CommonTableColumn>6</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>2</CommonTableColumn>
            <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
            <CommonTableColumn>5</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>3</CommonTableColumn>
            <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
            <CommonTableColumn>1</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>4</CommonTableColumn>
            <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
            <CommonTableColumn>2</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>5</CommonTableColumn>
            <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
            <CommonTableColumn>4</CommonTableColumn>
          </CommonTableRow>
        </CommonTable>
      </>
    )
  }
  
  export default Voc;