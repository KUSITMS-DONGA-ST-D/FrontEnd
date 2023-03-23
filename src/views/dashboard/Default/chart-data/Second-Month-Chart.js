// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //
import axios from 'axios';

const conversionRate = [];
const accumulateUsers = [];
const newUsers = [];
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase2?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
            console.log(data);
            data.forEach((item) => {
                // 각 배열 요소에서 필요한 데이터 추출
                conversionRate.unshift(item.conversion_rate);
                accumulateUsers.unshift(item.accumulate_users);
                newUsers.unshift(item.new_users);
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
            categories: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31'
            ]
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
