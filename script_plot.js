(function() {


var m = {t:250,r:50,b:250,l:50},
    width = document.getElementById('plot').clientWidth - m.l - m.r,
    height = document.getElementById('plot').clientHeight - m.t - m.b;






//---------------------------------------------------------------------
    function dataLoaded(err, data) {
        if (err) console.error(err);
console.log(data);
// draw(drawPlot1);

    }
//-----------------------------------------------------------QUEUE
    queue()

        .defer(d3.csv, "data/survey.csv", parseSurvey)
        .await(dataLoaded);


function parseSurvey(d){

    return {
        lat: (+d["LocationLatitude"] == "#NULL!" ? undefined: +d["LocationLatitude"]),
        lng: (+d["LocationLongitude"] == "#NULL!" ? undefined: +d["LocationLongitude"]),
        industry: (d["INDUSTRY"] == "#NULL!" ? undefined: d["INDUSTRY"]),
        // count_id: counter,
        lngLat: [+d.LocationLongitude, +d.LocationLatitude]


        }
}


}).call(this);