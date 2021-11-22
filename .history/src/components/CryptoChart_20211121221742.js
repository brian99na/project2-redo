import React, { useState, useEffect } from 'react'
import { ResponsiveContainer ,AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function CryptoChart(props) {
    const [chartData, setChartData] = useState([{date: 'x', price: 'y'}])
    const [headerDate, setHeaderDate

    const cryptoChartCalculator = () => {
        const newArr = props.cryptoData && props.cryptoData.reverse()
        console.log(newArr)
        const date = new Date()
        const mapData = newArr && newArr.map((day, index) => {
            let year = date.getFullYear()
            let month = date.getMonth()
            for (let i=0; i<(Math.floor(index/30)); i++) {
                month -= 1
                if (month === 0) {
                    year -= 1
                    month = 12
                }
            }
            return (
                {
                    date: `${year}-${month}`,
                    price: day[1]
                }
            )
        })
        setChartData(mapData.reverse())
    }

    useEffect(() => {
        cryptoChartCalculator()
    }, [props.results])

    console.log(chartData)

    return (
        <div className='inflationChart' ref={props.chartRef}>
            <h1>Price of {props.results.coin} since {props.results.date}</h1>
            <ResponsiveContainer width="100%" height='70%'>
                <AreaChart data={chartData} >
                    <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset="0%" stopColor='#4D4E52' stopOpacity={1}/>
                            <stop offset="75%" stopColor='#4D4E52' stopOpacity={0.15}/>
                        </linearGradient>
                    </defs>

                    <Area dataKey="price" fill='url(#color)' stroke='black'/>
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
                    <YAxis dataKey="price" axisLine={false} tickLine={false} tickCount={10} />
                    <Tooltip />
                    <CartesianGrid vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CryptoChart;
