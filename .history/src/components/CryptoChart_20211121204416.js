import React, { useState, useEffect } from 'react'
import { ResponsiveContainer ,AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function CryptoChart(props) {
    // const [dateSet, setDateSet] = useState([])

    // let filteredCoinData = props.chartData && props.chartData.filter((coin, index) => {
    //     return(
    //         index % ((props.chartData.length/8).toFixed()) === 0
    //     )
    // })

    // let mappedCoinPrices = filteredCoinData && filteredCoinData.map((array) => {
    //     return (array[1])
    // })

    // const chartDateSet = () => {
    //     let dividedNumberOfDays = (Number(props.chartData.length)/8).toFixed()
    //     let dateArr = []
    //     for (let i=1; i<9; i++) {
    //         dateArr.push(dividedNumberOfDays * i)
    //     }
    //     setDateSet(dateArr)
    // }

    // useEffect(() => {
    //     chartDateSet()
    // }, [props.chartData])

    const [chartData, setChartData] = useState([])

    const cryptoChartCalculator = () => {
        const mapData = chartData && chartData.map((day, index) => {
            let months = Math.floor(((chartData.length + 1) - index) / 30)
            const date = new Date()
            let itemDate = (Number(date.getFullYear) - Math.floor(months/12))
            `2019-03`
        })
    }

    useEffect(() => {
        cryptoChartCalculator()
    }, [props.results])

    console.log(chartData)

    return (
        <div className='inflationChart' ref={props.chartRef}>
            <ResponsiveContainer width="100%" height='70%'>
                <AreaChart data={chartData} >

                    <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset="0%" stopColor='#4D4E52' stopOpacity={1}/>
                            <stop offset="75%" stopColor='#4D4E52' stopOpacity={0.15}/>
                        </linearGradient>
                    </defs>

                    <Area dataKey="CPI_index_value" fill='url(#color)' stroke='black'/>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={item => {
                        const months = [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ];
                      
                        let monthNum = Number(item.slice(5, 7)) - 1;
                        let yearNum = item.slice(0, 4);
                        return(
                            `${months[monthNum]} - ${yearNum}`
                        )
                    }}/>
                    <YAxis dataKey="CPI_index_value" axisLine={false} tickLine={false} tickCount={10} />
                    <Tooltip />
                    <CartesianGrid vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CryptoChart;
