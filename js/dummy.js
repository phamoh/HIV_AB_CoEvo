/* JAVASCRIPT CODE GOES HERE */

Plotly.d3.csv("https://raw.githubusercontent.com/phamoh/HIV_AB_CoEvo/phamoh-patch-1/dataset_031519.csv",
    function(err, rows) {

        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        var allPatientIDs = unpack(rows, 'patient_id'),
            allTimePoints = unpack(rows, 'time_point'),
            allABDPi = unpack(rows, 'ab_diversity_pi'),
            allHIV_div = unpack(rows, 'hiv_diversity_pi'),
            listofPatients = [],
            listofDataViz = ["Antibody Diversity", "HIV Diversity"],
            currentPatient,
            currentABDPi = [],
            currentHIVPi = [],
            currentTimePoint = [];

        //This affects the dropdown menu
        for (var i = 0; i < allPatientIDs.length; i++) {
            if (listofPatients.indexOf(allPatientIDs[i]) === -1) {
                listofPatients.push(allPatientIDs[i]);
            }
        }

        //This function gets the data from the patient chosen on the dropdown


        var data = [{
            type: 'scatter',
            mode: 'lines+markers',
            x: allTimePoints,
            y: allABDPi,
            connectgaps: true,
            text: allPatientIDs,
            transforms: [{
                type: 'groupby',
                groups: allPatientIDs,
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