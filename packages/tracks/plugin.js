
K.Plugin({
	name: 'tracks',
	templates: {
		tabPlace: 'tabPlace_tracks',
		popupPlace: 'popupPlace_tracks'
	},
	settings: {
		"public": {
			"map": {
				"styles": {
					"tracks": { "color": "#66f", "weight": 8, "opacity": 0.7 }
				}	
			},
			"tracks": {
				"limit": 5,
				"caching": true,	//cache response by OSM overpass		
				"maxDistance": 800,
				"typesByTags": {
				//osm tags classification
					"highway=path": "path",
					"highway=track": "path",
					"highway=footway": "path",
					"highway=pedestrian": "path"
				}			
			}
		}
	}
});
