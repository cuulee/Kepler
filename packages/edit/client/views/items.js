
Template.item_place_edit.onRendered(function() {
	
	var self = this;

	self.$('.btn-placedel').btsConfirmButton(function(e) {
		Meteor.call('removePlace', self.data.id, function(err,res) {
			K.Map.removeItem(K.placeById(self.data.id));
			//Router.go('root');
		});			
	});
});
