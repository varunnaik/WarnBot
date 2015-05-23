var warnBot = warnBot || {};

warnBot.popup = function(database, popupUI) {
	
	return {
		show: function(sessionTime, totalTime) {
			var message = database.getRandomMessage() || "Don't you have something better to do right now?";
			popupUI.show(message, sessionTime, totalTime);
		},
		hide: function() {
			popupUI.hide();
		}
	};
};

warnBot.popupUI = {};

warnBot.popupUI.chrome = function() {
	var changeMessageText = function(messageText) {
		
	};
	var changeTime = function(newTime) {
		
	};
	
	return {
		show: function() {
			
		},
		hide: function() {
			
		},
		updateTime: function(sessionTime, totalTime) {
			this.changeTime(sessionTime, totalTime);
		}
	};
};