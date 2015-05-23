var warnBot = warnBot || {};

/* Abstraction for database interaction.
 * siteListChangeCallback: function to call when the list of sites is changed (eg. through user action)
 * backend: Pluggable storage backend to use. Should have get(), set(), delete() methods on it
 */
warnBot.database = function(siteListChangeCallback, backend) {
	return {
		
		getRandomMessage: function() {
			// Return a random inspirational message from the message list
			var messages = backend.get("messages"); // messages = array
			if (messages) {
				return messages[Math.floor(Math.random() * (messages.length - 1))];
			}
		},
		
		saveMessage: function(newMessage) {
			// Save a new message to the list of messages
			var messages = backend.get("messages"); // messages = array
			messages.append(newMessage);
			backend.set("messages", messages);
		},
		
		getSiteList: function() {
			// Get list of sites we should show our popup on
			return backend.get("blacklistedSites");
		},
		
		replaceSiteList: function(list) {
			// Replace the blacklisted site list with the provided list of sites
			backend.set("blacklistedSites", list);
			siteListChangeCallback(list);
		},
		
	};
	
};

warnBot.backend = {};

// Wrapper for Firefox local storage
warnBot.backend.firefox = function() {
	var ss = require("sdk/simple-storage");
	
	return {
		get: function(property) {
			return ss.storage[property];
		},
		set: function(property, value) {
			ss.storage[property] = value;
		},
		delete: function(property) {
			delete ss.storage[property];
		}
	};
};

// Wrapper for Google Chrome local storage
warnBot.backend.chrome = function() {
	var ss = chrome.storage.local;
	
	return {
		get: function(property) {
			return ss.get(property);
		},
		set: function(property, value) {
			ss.set({property: value});
		},
		delete: function(property) {
			ss.remove(property);
		}
	};
};