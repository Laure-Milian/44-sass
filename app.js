(function() {

	var app = {
		init: function() {
			app.listeners();
		},

		listeners: function() {
			$('.logo').on('click', app.toggleMenu);
		},

		toggleMenu: function() {
			$(".panel").slideToggle("slow");
		}
	}

	app.init();

})();