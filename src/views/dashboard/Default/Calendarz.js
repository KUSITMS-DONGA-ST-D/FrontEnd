import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendarz.css';
import dayjs from 'dayjs';
import moment from 'moment';
/*const [mark, setMark] = useState([]);

  const { data } = useQuery(
    ["logDate", month],
    async () => {
      const result = await axios.get(
        `/api/`
      );
      return result.data;
    },
    {
      onSuccess: (data: any) => {
        setMark(data);
       // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
      },
    }
  );*/

function getMonthName(month) {
    return moment().month(month).format('MMMM');
}
function Calendarz() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} formatDay={(locale, date) => dayjs(date).format('DD')} value={value} />
        </div>
    );
}

export default Calendarz;
