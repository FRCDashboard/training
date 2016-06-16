// This object contains a list of all the controls on the dashboard. If you add a new interactive element, you'll need to put it in this object.
var ui = {
	light: document.getElementById('light')
};

// Sets function to be called on NetworkTables connect. Commented out because it's usually not necessary.
// NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

// Sets function to be called when robot dis/connects. Commented out because it's not an essential thing to learn and you usually won't need to touch it.
// NetworkTables.addRobotConnectionListener(onRobotConnection, true);

// Sets function to be called when any NetworkTables key/value changes
NetworkTables.addGlobalListener(onValueChanged, true);

/**
 *  @param key {string} The name of the variable.
 *  @param value {*} The value of the variable.
 *  @param isNew {boolean} Has the value not yet been passed to this instance of the Dashboard?
 */
function onValueChanged(key, value, isNew) {
	// Sometimes, NetworkTables will pass booleans as strings. This corrects for that. You probably shouldn't have to touch this code.
	if (value == 'true') {
		value = true;
	} else if (value == 'false') {
		value = false;
	}

	// This switch statement chooses which UI element to update when a NetworkTables variable changes.
	// So, if the robot changes the value of a NetworkTables variable, the state of a control will change.
	switch (key) {
		case '/SmartDashboard/light':
			// Set the checkedness of this control element.
			ui.light.checked = value;
	}
	// In the real dashboard, there will be more code here to manage the Tuning section of the UI.
	// That code is not included in this example because it's very confusing and you usually don't need to modify it anyway.
}

// The folllowing functions are called when the user interacts with control elements.

ui.light.onclick = function() {
	// Set NetworkTables value to the new checked state of the checkbox.
	NetworkTables.setValue('/SmartDashboard/light', ui.light.checked);
};

ui.winch.onclick = function() {
    // Set the winch's openness to the opposite of what it currently is.
    NetworkTables.setValue('/SmartDashboard/winch', !NetworkTables.getValue('/SmartDashboard/winch'));
};