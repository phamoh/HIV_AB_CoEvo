/* JAVASCRIPT CODE GOES HERE */

Plotly.d3.csv("https://raw.githubusercontent.com/phamoh/HIV_AB_CoEvo/phamoh-patch-1/antibodyHIVdata.csv",
	function (err, rows) {

		function unpack(rows, key) {
			return rows.map(function (row) {
				return row[key];
			});
		}

		var data = [{
			type: 'scatter',
			mode: 'lines+markers',
			x: unpack(rows, 'time_point'),
			y: unpack(rows, 'ab_diversity_pi'),
			connectgaps: true,
			text: unpack(rows, 'patient_id'),
			transforms: [{
				type: 'groupby',
				groups: unpack(rows, 'patient_id'),

			}]
		}]
		var layout = {
			titlefont: {
				family: 'Poppins, sans-serif',
			},
			xaxis: {
				title: 'Estimated Time Since Infection (days)',
				titlefont: {
					family: 'Poppins, sans-serif',
				},
			},

			yaxis: {
				title: 'Diversity (pi)',
				titlefont: {
					family: 'Poppins, sans-serif',
				},
			}

		};

		Plotly.plot('plotdiv', data, layout)
	}
);