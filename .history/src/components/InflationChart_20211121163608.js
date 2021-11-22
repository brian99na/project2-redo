import React, { useState, useEffect } from 'react'
import { ResponsiveContainer ,AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function InflationChart(props) {
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
        chartData && chartData.reverse()
        setChartData(chartData)
    }

    useEffect(() => {
        inflationChartCalculator()
    }, [props.result])

    console.log(chartData)

    return (
        <div className='inflationChart'>
            <ResponsiveContainer width="90%" height={300}>
                <AreaChart data={chartData} >

                    <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset="0%" stopColor='#495880' stopOpacity={0.4}/>
                            <stop offset="75%" stopColor='#495880' stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>

                    <Area dataKey="CPI_index_value" fill='url(#color)' stroke='black'/>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} scale='date' type="number" domain={['auto', 'auto']} interval={'preserveStartEnd'} tickCount={5}/>
                    <YAxis dataKey="CPI_index_value" axisLine={false} tickLine={false} tickCount={10}/>
                    <Tooltip />
                    <CartesianGrid vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default InflationChart
