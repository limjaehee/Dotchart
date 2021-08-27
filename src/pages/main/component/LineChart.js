import { Line, mixins } from 'vue-chartjs';
import zoom from 'chartjs-plugin-zoom';
import chartjsPluginAnnotation from 'chartjs-plugin-annotation';
const { reactiveProp } = mixins;

export default {
	extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.addPlugin(zoom);
    	this.addPlugin([chartjsPluginAnnotation])
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options);
    }
};

//https://vue-chartjs.org/
//https://github.com/apertureless/vue-chartjs

/*
vue-chart-js: ^3.5.0
chart.js: ^2.9.3
chartjs-plugin-zoom: ^0.7.7
*/