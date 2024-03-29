var m = {t:250,r:50,b:250,l:50},
	width = document.getElementById('plot').clientWidth - m.l - m.r,
	height = document.getElementById('plot').clientHeight - m.t - m.b;

// this is the area that does not move, it is the window at any size
var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+m.l+m.r)
	.attr('height',height+m.t+m.b)
	.append('g').attr('class','canvas')
	.attr('transform','translate('+m.l+','+m.t+')');
	
//this is the first plot, it is connected to the script_plot. 
//Anything you add to script_plot in 'function drawPlot1(data) 
//will show up in the area designated to this plot
var plot1 = plot.append('g')
	.attr('width',width+m.l+m.r)
	.attr('height',height+m.t+m.b)
	.attr('class','plot1')
	.attr('id', 'plot1');
	.attr('transform','translate('+m.l+','+m.t+')');

//Create scrollController
//Step 1: create a global scroll controller
var scrollController = new ScrollMagic.Controller({
		globalSceneOptions:{
			triggerHook:'onLeave'
		}
	});

//Step2: create scenes
var scene1 = new ScrollMagic.Scene({
		duration:document.getElementById('scene-1').clientHeight, //controlled by height of the #scene-1 <section>, as specified in CSS
		triggerElement:'#scene-1',
		reverse:true //should the scene reverse, scrolling up?
	})
	.on('enter',function(){
		console.log('Enter Scene 1');
		plot1.attr('visibility', 'hidden');
		//this selects the empty h3 element in the div .canvas#plot of html file and keeps it empty
		var text = d3.select('#plot')
			text.select('h3').html("")

	})
	.addTo(scrollController);

var scene2 = new ScrollMagic.Scene({
		duration:document.getElementById('scene-2').clientHeight, //controlled by height of the #scene-1 <section>, as specified in CSS
		triggerElement:'#scene-2',
		reverse:true //should the scene reverse, scrolling up?
	})
	.on('enter',function(){
		console.log('Enter Scene 2');
		d3.select('#plot').transition().style('background','rgb(220,220,220)');
		plot1.attr('visibility', 'hidden');
		//this selects the empty h3 element in the div .canvas#plot of html file and adds text
		var text = d3.select('#plot')
			text.select('h3').html("90% of graduates from Northeastern University are offered full-time jobs within 1 year after graduation")
	})
	.on('leave',function(){
		console.log('Enter Scene 2');
		d3.select('#plot').transition().style('background','rgb(220,220,220)');
		

	})
	.addTo(scrollController);

var scene3 = new ScrollMagic.Scene({
		duration:document.getElementById('scene-3').clientHeight, //controlled by height of the #scene-1 <section>, as specified in CSS
		triggerElement:'#scene-3',
		reverse:true //should the scene reverse, scrolling up?
	})
	.on('enter',function(){
		console.log('Enter Scene 3');
		d3.select('#plot').transition().style('background','rgb(240,240,240)');

		plot1.attr('visibility', 'visible');
	})
	// .on('leave', function(){
	// 	plot1.attr('visibility', 'hidden');
	// })



	.addTo(scrollController);


var scene4 = new ScrollMagic.Scene({
		duration:document.getElementById('scene-4').clientHeight, //controlled by height of the #scene-1 <section>, as specified in CSS
		triggerElement:'#scene-4',
		reverse:true //should the scene reverse, scrolling up?
	})
	.on('enter',function(){
		console.log('Enter Scene 4');
	})
	.on('progress',function(e){
		console.log('Scene 4 progress ' + e.progress);
		plot1.attr('visibility', 'visible');
		var text = d3.select('#plot')
			text.select('h3').html("scene 4 text")
		//e.progress = 0 at the start of scene; 1 at the end of the scene
		// ball.attr('cx',e.progress*width);
	})
	.addTo(scrollController);

