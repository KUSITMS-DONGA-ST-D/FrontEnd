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
const Voc = (props) => {
    return (
        <> 
            <CommonTable headersName={['글번호', '제목', '작성자', '날짜']}></CommonTable>
            <CommonTableRow>
                <CommonTableColumn>1</CommonTableColumn>
                <CommonTableColumn>큐시즘 27기 최고</CommonTableColumn>
                <CommonTableColumn>박형준{" "}{" "}</CommonTableColumn>
                <CommonTableColumn>2023-03-20</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>2</CommonTableColumn>
                <CommonTableColumn>동아 st D팀 최고.{" "}</CommonTableColumn>
                <CommonTableColumn>박형준{" "}{" "}</CommonTableColumn>
                <CommonTableColumn>2023-03-20</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>3</CommonTableColumn>
                <CommonTableColumn>모든 팀 고생 많았어요.</CommonTableColumn>
                <CommonTableColumn>박형준{" "}{" "}</CommonTableColumn>
                <CommonTableColumn>2023-03-20</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>4</CommonTableColumn>
                <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>박형준{" "}{" "}</CommonTableColumn>
                <CommonTableColumn>2023-03-20</CommonTableColumn>
            </CommonTableRow>
            
        </>
    );
};

export default Voc;
