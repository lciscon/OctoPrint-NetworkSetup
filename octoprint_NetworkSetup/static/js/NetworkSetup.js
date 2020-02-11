/*
 * View model for OctoPrint-NetworkSetup
 *
 * Author: Larry Ciscon
 * License: AGPLv3
 */
$(function() {
    function NetworksetupViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];
        self.control = parameters[1];
        self.system = parameters[2];
        self.loginState = parameters[3];
        self.printerProfiles = parameters[4];

        // TODO: Implement your plugin's view model here.
//        self.hostname = parameters[0].networksetup_hostname;
//        self.ssid = parameters[0].networksetup_ssid;
        self.defaultHostname = "hostname0";
        self.defaultSSID = "ssid0";
        self.defaultPasskey = "passkey0";
        self.ssid = ko.observable(self.defaultSSID);
        self.hostname = ko.observable(self.defaultHostname);
        self.passkey = ko.observable(self.defaultPasskey);

        self.ssid_list = ko.observable([
            {key: "default", name: gettext("default")},
            {key: "red", name: gettext("red")},
            {key: "orange", name: gettext("orange")},
            {key: "yellow", name: gettext("yellow")},
            {key: "green", name: gettext("green")},
            {key: "blue", name: gettext("blue")},
            {key: "violet", name: gettext("violet")},
            {key: "black", name: gettext("black")},
            {key: "white", name: gettext("white")},
        ]);

    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
      NetworksetupViewModel,
      ["settingsViewModel", "controlViewModel", "systemViewModel", "loginStateViewModel", "printerProfilesViewModel"],
      ["#tab_plugin_NetworkSetup"]
    });
});
