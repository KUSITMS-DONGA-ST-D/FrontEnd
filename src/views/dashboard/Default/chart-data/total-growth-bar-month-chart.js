// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //
import axios from 'axios';

const newVisitor = [];
const againVisitor = [];
const totalVisitor = [];
const day = [];
const fetchData = async () => {
    axios
        .get('/totalgrowthbarchart-phase1?day=30')
        .then((response) => {
            const data = response.data; // 받은 데이터
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
                newVisitor.unshift(item.new_visitors);
                againVisitor.unshift(item.again_visitors);
                totalVisitor.unshift(item.total_visitors);
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
                columewidth: '50%',
                strokeWidth: 1
            }
        },
        xaxis: {
            type: 'category',
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            name: '신규방문자',
            data: newVisitor
        },
        {
            name: '재방문자',
            data: againVisitor
        },
        {
            name: '총 방문자',
            data: totalVisitor
        }
    ]
};
export default monthData;
