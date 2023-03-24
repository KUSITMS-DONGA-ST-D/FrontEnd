// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //
import axios from 'axios';

const viewNumber = [];
const sessionTime = [];
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase3?day=7')
        .then((response) => {
            const data = response.data; // 받은 데이터
            console.log(data);
            data.forEach((item) => {
                // 각 배열 요소에서 필요한 데이터 추출
                viewNumber.unshift(item.view_number);
                sessionTime.unshift(item.session_time);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
fetchData();
const weekData = {
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
                columewidth: '50%',
                strokeWidth: 1
            }
        },
        xaxis: {
            type: 'category',
            categories: ['3.22(Wed)', '3.23(Thu)', '3.24(Fri)', '3.25(Sat)', '3.26(Sun)', '3.27(Mon)', '3.28(Tue)']
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
            name: '평균 페이지 뷰 수',
            data: viewNumber
        },
        {
            name: '평균 세션 시간',
            data: sessionTime
        }
    ]
};
export default weekData;
