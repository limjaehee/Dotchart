<template>
    <Layout :isFooter="false">
        <LineChart
			:chart-data="datacollection"
			:styles="myStyles"
			:options="datacollection.options"></LineChart>
        <LineChart
			:chart-data="datacollection"
			:styles="myStyles"
			:options="datacollection.options"></LineChart>
    </Layout>
</template>

<script>
import LineChart from './component/LineChart'

export default {
	components:{
		LineChart,
	},
	data() {
		var marketing = ['1월', '2월'];
		var amount = [50, 70];
		// populate 'annotations' array dynamically based on 'marketing'
		var annotations = marketing.map(function(date, index) {
		return {
			type: 'line',
			id: 'vline' + index,
			mode: 'vertical',
			scaleID: 'x-axis-0',
			value: date,
			borderColor: 'green',
			borderWidth: 1,
			label: {
				enabled: true,
				position: "center",
				content: amount[index]
			}
		}
		});
		return {
			datacollection: {
               labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월'],
               datasets: [
                    {
                        borderColor: '#c5264f',
                        borderWidth: 1,
                        pointBackgroundColor: '#c5264f',
                        backgroundColor: 'rgba(197,38,79,0.1)',
                        data: [5, 27,52, 24, 37, 65, 50, 150],
						tension: 0.1
                    }
               ],
               options: {
					annotation: { 
						annotations: [{ 
							type: 'line', // 線を描画
							id: 'hLine', 
							mode: 'horizontal', // 線を水平に引く
							scaleID: 'y-axis-0', 
							value: 10, // 基準となる数値
							borderWidth: 2, // 基準線の太さ
							borderColor: 'red'  // 基準線の色
						}] 
					},
				   	plugins: {
						
						zoom: {
							// Container for pan options
							pan: {
								// Boolean to enable panning
								enabled: true,

								// Panning directions. Remove the appropriate direction to disable 
								// Eg. 'y' would only allow panning in the y direction
								mode: 'x'
							},

							// Container for zoom options
							zoom: {
								// Boolean to enable zooming
								enabled: true,

								// Zooming directions. Remove the appropriate direction to disable 
								// Eg. 'y' would only allow zooming in the y direction
								mode: 'x',
							}
						}
					},
					
                   legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    ///툴팁 css
                    tooltips: {
                        mode: "label",
                        xPadding: 15,
                        yPadding: 10,
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        bodyFontSize: 16,
                        cornerRadius: 2,
                        displayColors: false,
                        bodyFontStyle: "bold",
                        backgroundColor: "#fcfcfc",
                        titleFontColor: "#3a3938",
                        bodyFontColor: "#3a3938",
                        callbacks: {
                            // this adds the same suffix to all labels. I would like the same suffix of prefix value from the y-axis label
                            label: function(tooltipItems, data) {
                                return tooltipItems.yLabel;
                            },
                            title: function() {
                                return false;
                            },
                        }
                    }
                }
			}
		}
  	},
    computed: {
		myStyles () {
            return {
                width: '100%',
                height: `250px`,
                position: 'relative',
                marginTop: '4%'
            }
        }
    },
	mounted() {

	}
}
</script>


<style>

</style>