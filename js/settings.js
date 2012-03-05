function settings_load() {
	// Delegate for the settings closing event. 
	System.Gadget.onSettingsClosing = SettingsClosing;
	document.getElementById("ip").value = System.Gadget.Setting.readString("ip");
	document.getElementById("port").value = System.Gadget.Setting.readString("port");
}
// --------------------------------------------------------------------
// Handle the Settings dialog closing event.
// Parameters:
// event - event arguments.
// --------------------------------------------------------------------
function SettingsClosing(event)
{
	// Save the settings if the user clicked OK.
	if (event.closeAction == event.Action.commit)
	{
		var ip = document.getElementById("ip").value;
		var port = document.getElementById("port").value;
		System.Gadget.Settings.writeString(
			"ip", ip);
		System.Gadget.Settings.writeString(
			"port", port);
	}
	// Allow the Settings dialog to close.
	event.cancel = false;
}