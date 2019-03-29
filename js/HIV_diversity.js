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
            currentPatient,
            currentABDPi = [],
            currentHIVDPi = [],
            currentTimePoint = [];

        //This affects the dropdown menu
        for (var i = 0; i < allPatientIDs.length; i++) {
            if (listofPatients.indexOf(allPatientIDs[i]) === -1) {
                listofPatients.push(allPatientIDs[i]);
            }
        }
        listofPatients.push("All Patients")

        var trace1 = [];

        function getPatientData(chosenPatient) {
            currentHIVDPi = [];
            currentTimePoint = [];
            trace1 = [];
            for (var i = 0; i < allPatientIDs.length; i++) {
                switch (chosenPatient) {
                    case "1":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;
                    case "2":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "3":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;
                    case "4":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "5":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "6":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "7":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "8":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "9":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "10":
                        if (allPatientIDs[i] === chosenPatient) {
                            currentHIVDPi.push(allHIV_div[i]);
                            currentTimePoint.push(allTimePoints[i]);
                        }
                        trace1 = {
                            x: currentTimePoint,
                            y: currentHIVDPi,
                            mode: 'lines+markers',
                            type: 'scatter',
                            connectgaps: true,
                            line: {
                                color: 'rgb(255,127,80)',
                            },
                            marker: {
                                size: 12,
                                opacity: 0.5
                            },
                        }
                        break;

                    case "All Patients":
                        trace1 = {
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
                        }
                        break;
                }
            }
        };


        // Default Patient 1 Data
        setBubblePlot('1');

        //
        function setBubblePlot(chosenPatient) {
            getPatientData(chosenPatient);

            var data = [trace1];

            var layout = {
                title: 'HIV Diversity of Patient ' + chosenPatient,
                titlefont: {
                    family: 'Poppins, sans-serif',
                },
                xaxis: {
                    title: 'Estimated Time Since Infection (years)',
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

            Plotly.newPlot('plotdiv_1', data, layout, { showSendToCloud: true, responsive: true });
        };

        var innerContainer = document.querySelector('[data-num="0"'),
            plotEl = innerContainer.querySelector('.plot1'),
            patientSelector = innerContainer.querySelector('.patientdata');

        function assignOptions(textArray, selector) {
            for (var i = 0; i < textArray.length; i++) {
                var currentOption = document.createElement('option');
                currentOption.text = textArray[i];
                selector.appendChild(currentOption);
            }
        }

        assignOptions(listofPatients, patientSelector);

        function updatePatient() {
            setBubblePlot(patientSelector.value);
        }

        patientSelector.addEventListener('change', updatePatient, false);
    });