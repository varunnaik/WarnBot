// Script to inject into the webpage to display the popup bar
// Independent of the rest of the application

var warnBotContentScript = {
	updateTimeHandle: null, // Timeout handle for the function that updates time on site
	sessionTime: 0, // Time spent on site today
	totalTime: 0,	// Total time spent on site, ever
	messageContainer: null, // Refernce to the DOM node containing the message text, for effecient updates
	timeContainer: null, // Reference to the DOM node containing the time spent on site
	
	inject: function() {
		// Create the container of the script
		var container = document.createElement('div');
		container.setAttribute('style', 'display:none; background: #fff8dc; border-bottom: 1px solid #e0dcbf; color: #444; height: 1.5em; width: 100%; position: fixed; top: 0; left: 0; transform: translateZ(0)');
		
		// Add a container for the message
		this.messageContainer = document.createElement('div');
		this.messageContainer.setAttribute('style', 'font-family: sans-serif; font-size: 13px; margin: 3px;');
		container.appendChild(this.messageContainer);
		
		// Add a container for the time
		this.timeContainer = document.createElement('div');
		this.timeContainer.setAttribute('style', 'position: absolute; right: 5px');
		container.appendChild(this.timeContainer);
		
		// Append to body
		
		// Dispatch an event to the extension that all setup is complete
		
		// Set event listeners for show, hide
		
		// Onclick dispatch an event upwards into the extension so the extension can handle it as required
		container.addEventListener('click', function() {
			
		});
				
	},
	
	onHide: function() {
		this.stopTimeUpdate().call(this);
	},
	
	onShow: function(newMessage, newSessionTime, newTotalTime) {
		
		
		setInterval(this.updateTime.bind(this), 1000);
	},

	// Callback executed on interval	
	updateTime: function() {
		// Update the time
		this.sessionTime += 1000;
		this.totalTime += 1000;
		
		// Update the display with the new time
		this.timeContainer.innerHTML('Time on site: Today: '+ this.sessionTime + ' All-time: ' + this.totalTime);
	},
	
	stopTimeUpdate: function() {
		if (this.updateTimeHandle) {
			clearTimeout(this.updateTimeHandle);
			this.updateTimeHandle = null;
		}
	}
};

warnBotContentScript.inject();

// Create script container

// Get startTime and totalTime and message

// Write all to container

// Show container

// Set updater to update every 1 second

// Write listeners: New message, startTime, endTime

// Write listeners: hide; show