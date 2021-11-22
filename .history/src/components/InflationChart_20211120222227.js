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
        const indexValue = (props.result && props.result.date )&& (12 * (2021 - Number(props.result.date.slice(6, 10)))) + (9 - Number(props.result.date.slice(3, 5)))
        console.log(indexValue)
        let indexArr = [indexValue]
        if (indexValue < 8) {
            for (let i=0; i<(indexValue); i++) {
                indexArr.unshift(1 * i)
            }
        } else {
            for (let i=0; i<8; i++) {
                indexArr.unshift(Math.floor(indexValue/8) * i)
            }
        }
        let inflationSlice = props.inflation.data && props.inflation.data.slice(0, indexValue)
        console.log(inflationSlice)
        console.log(indexArr)
        const chartData = inflationSlice && inflationSlice.filter((data, index) => {
            return(indexArr.includes(index))
        }).map(data => {
            return(
                {
                    date: data[0],
                    amount: data[1]
                }
            )
        })
        setChartData(chartData)
    }

    useEffect(() => {
        inflationChartCalculator()
    }, [props.result])

    console.log(chartData)

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={chartData} >
                    <Area dataKey="value"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default InflationChart
