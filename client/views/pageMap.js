
Template.pageMap.onRendered(function() {
	
	console.log('pageMap rendered');

	Climbo.map.initMap(Meteor.settings.public.map, function(map) {
		console.log('Climbo.map.initMap callback');
		//Climbo.map.enableBBox();	//abilita caricamento markers
	});

});

Template.pageMap.onDestroyed(function() {
	console.log("pageMap.destroyed");
	Climbo.map.destroyMap();
});