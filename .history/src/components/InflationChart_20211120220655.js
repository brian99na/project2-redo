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
        const indexValue = props.inputValue.date && (12 * (2021 - Number(props.inputValue.date.slice(6, 10)))) + (9 - Number(props.inputValue.date.slice(3, 5)))
        let indexArr = [indexValue]
        if (indexValue < 8) {
            for (let i=0; i<(indexValue); i++) {
                indexArr.unshift(1 * i)
            }
        } else {
            for (let i=0; i<(indexValue/7); i++) {
                indexArr.unshift(indexValue/8 * i)
            }
        }
        let inflationSlice = props.inflation.data && props.inflation.data.slice(0, indexValue)
        const chartData = inflationSlice.filter((data, index) => {
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
        
    }, [props.jsx])
    console.log(chartData)

    return (
        <div>
            <ResponsiveContainer width='100%' height={400}>
                <AreaChart data={chartData} >
                
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default InflationChart
