// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //
import axios from 'axios';

const conversionRate = [];
const accumulateUsers = [];
const newUsers = [];
const day = [];
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase2?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
            console.log(data);
            data.forEach((item) => {
                // 각 배열 요소에서 필요한 데이터 추출
                let m = item.created_date.slice(5, 7);
                let d = item.created_date.slice(8, 10);
                if (m[0] == '0') {
                    m = m.slice(1, 2);
                }
                if (d[0] == '0') {
                    d = d.slice(1, 2);
                }
                conversionRate.unshift(item.conversion_rate);
                accumulateUsers.unshift(item.accumulate_users);
                newUsers.unshift(item.new_users);
                day.unshift(m + '.' + d);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
fetchData();
const monthData = {
    height: 250,
    type: 'line',
    options: {
        chart: {
            id: 'line-chart',
            stacked: false,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 130,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            line: {
                horizontal: false,
                columewidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: day
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: '누적가입자',
            data: accumulateUsers
        },
        {
            name: '신규가입자',
            data: newUsers
        },
        {
            name: '전환율',
            data: conversionRate
        }
    ]
};
export default monthData;
