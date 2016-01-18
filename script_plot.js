(function() {

var survey_data;
var m = {t:250,r:50,b:250,l:50},
    width = document.getElementById('plot').clientWidth - m.l - m.r,
    height = document.getElementById('plot').clientHeight - m.t - m.b;

var scales= {};
scales.xscore = d3.scale.ordinal().range([10, 50, 110, 150]).domain(["Minimally prepared", "Somewhat prepared", "Very prepared", "Highly prepared"]);

function drawPlot1(data){
    console.log(data)
        plot1.selectAll('.scores')
        .data(data)
       // , function(d){ return d.all_prep}) //it only works with the circle opacity when I add function(d) return d.all_prep
        .enter()
            .append('circle')
            .attr('cx',function(d){ return scales.xscore(d.neu_prep);}) //without the line above for .data it doesn't know what d.all_prep is
            .attr('cy',height/2)
            .attr('r',20)
            .style('fill','blue')
            .style('fill-opacity', .009); // for example to make sure they work

    data.forEach(function(list_data){
        console.log(list_data["all_prep"]);
        
    })
    
        
}

//---------------------------------------------------------------------
function dataLoaded(err, data) {
    if (err) console.error(err);
    console.log(data);
    drawPlot1(data);
}
//-----------------------------------------------------------QUEUE

d3.csv("data/survey.csv", parse, dataLoaded)

function parse(d){
    return {
        lat: (+d["LocationLatitude"] == "#NULL!" ? undefined: +d["LocationLatitude"]),
        lng: (+d["LocationLongitude"] == "#NULL!" ? undefined: +d["LocationLongitude"]),
        industry: (d["INDUSTRY"] == "#NULL!" ? undefined: d["INDUSTRY"]),
        neu_prep:(d["NU_WELL_PREP"] == "#NULL!" ? undefined: d["NU_WELL_PREP"]),
        all_prep: (d["ALL_WELL_PREP"] == "#NULL!" ? undefined: d["ALL_WELL_PREP"]),
        // count_id: counter,
        lngLat: [+d.LocationLongitude, +d.LocationLatitude]
        }
}

}).call(this);