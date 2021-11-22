import React, { useState, useEffect } from 'react'
import { ResponsiveContainer ,AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function InflationChart(props) {
    const [chartData, setChartData] = useState([])
    const [headerDate, setHeaderDate] = useState('')


    const inflationChartCalculator = () => {
        const indexValue = (props.result && props.result.date )&& (12 * (2021 - Number(props.result.date.slice(6, 10)))) + (11 - Number(props.result.date.slice(3, 5)))
        let inflationSlice = props.inflation.data && props.inflation.data.slice(0, indexValue)
        const chartData = inflationSlice && inflationSlice.map(data => {
            return(
                {
                    date: data[0].toString(),
                    CPI_index_value: data[1]
                }
            )
        })
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
        ]; 03-03-2000
        let inputDate = props.result.date
        let monthNum = Number(inputDate.slice(3, 5)) - 1;
        let yearNum = item.slice(6, 10);
        setHeaderDate(`${months[monthNum]}, ${yearNum}`)
        chartData && chartData.reverse()
        setChartData(chartData)
    }

    useEffect(() => {
        inflationChartCalculator()
    }, [props.result])

    console.log(chartData)

    return (
        <div className='inflationChart' ref={props.chartRef}>
            <h1>CPI Index Value since {headerDate}</h1>
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

export default InflationChart
