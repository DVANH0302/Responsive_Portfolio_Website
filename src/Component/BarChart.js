import React from "react";
import Chart from "react-apexcharts";
import mydata from '../MyInfo.json';

function BarChart(){
    return(
        <React.Fragment>
            <div className="container-fluid mb-5 containerht"> 
        
                <Chart 
                type = "bar"
                width = {1200}
                height = {600}
                
                series = {[
                    {name: "out of 10",
                    data: mydata.data
                }
                ]
                }
                options = {
                    {       
                            plotOptions: {
                                bar:{
                                    horizontal: true
                                }

                            },
                            xaxis: {
                                categories: mydata.categories,
                        
                            },
                            yaxis: {
                                max: 10,
                            }
                    }
                }
                >
                    
                </Chart>

            </div>
        </React.Fragment>
    )
} 
export default BarChart;