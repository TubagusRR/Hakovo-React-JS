/* eslint-disable no-undef */
const CracoLessPlugin = require("craco-less");
// const CracoAntd = require("craco-antd");


module.exports = {
	style: {
		postcss: {
			plugins: [
                require("tailwindcss"),
                require('autoprefixer')
            ]
		}
	}
}