/* eslint-disable react/prop-types */
// import React from 'react';
import { useEffect, useState } from "react";
import { VictoryChart, VictoryBar, VictoryTooltip } from "victory";


function Chart({ data, onClick }) {
    const [focus, setFocus] = useState(false)
    const [spent, setSpent] = useState(null)
    // console.log('Chart', data)
    useEffect(() => {
        expenses()
    }, [data])
    const expenses = function () {
        const arr = []
        data.forEach(item => {
            const spent = item.expenses
            let total = 0
            spent.forEach(exp => {
                total += exp.amount
            })
            arr.push({ x: item.x, y: total, expenses: spent })

        })
        setSpent(arr)
    }
    const handleBarClick = (event, barData) => {
        // console.log('bardata: ', barData.datum.expenses)
        onClick(barData.datum.expenses, barData.datum.x)
    };

    return (

        <div className="chart-container">
            {/* {expenses()} */}
            <VictoryChart
                width={500}
                domainPadding={{ x: [5, 35] }} // Adjust domain padding if needed
                axis={true}
            >
                {/* {spent ? spent.map(i => {
                    console.log(i)
                }) : null} */}
                <VictoryBar
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={8}
                            dx={0}
                            dy={-10}
                            flyoutPadding={8}
                        />
                    }
                    labels={spent ? spent.map((i) => {

                        return `${i.y}`
                    }) : null}
                    domain={{ x: [3, null] }}
                    cornerRadius={{ topLeft: 5, topRight: 5 }}
                    style={{
                        data: {
                            fill: "salmon",
                            width: 40
                        }
                    }}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: handleBarClick,
                            onMouseUp: () => {
                                return [
                                    {
                                        target: "data",
                                        mutation: () => {
                                            setFocus(prev => !prev)
                                            return { style: { fill: "rebeccapurple", width: 40 }, };
                                        }
                                    }
                                ];
                            },
                            onMouseEnter: () => {
                                return [
                                    {
                                        target: "data",
                                        mutation: () => {
                                            return { style: { fill: "royalblue", width: 40 } };
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: () => ({ active: true })
                                    }
                                ];
                            },
                            onMouseOut: () => {
                                return [
                                    {
                                        target: "data",
                                        mutation: () => {
                                            setFocus(false)
                                            return { style: { fill: `${focus !== false ? 'rebeccapurple' : 'salmon'}`, width: 40 } };
                                            // return { style: { fill: `${getColour()}`, width: 40 } };
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: () => ({ active: focus })
                                    }
                                ];
                            },
                        }
                    }]}
                    data={spent}
                />
            </VictoryChart>
        </div>



    );
}

export default Chart;

