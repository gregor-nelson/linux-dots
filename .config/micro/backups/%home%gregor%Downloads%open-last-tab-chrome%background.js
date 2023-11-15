var mru = [];
var slowSwitchOngoing = false;
var fastSwitchOngoing = false;
var intSwitchCount = 0;
var lastIntSwitchIndex = 0;
var altPressed = false;
var wPressed = false;

var isDomLoaded = false
var quickActive = 0;
var slowActive = 0;

var prevTimestamp = 0;
var slowTimerValue = 1500;
var fastTimerValue = 200;
var timer;

var slowSwitchForward = false;

var initialized = false;

var loggingOn = false;

var OLTlog = function (str) {
    if (loggingOn) {
        console.log(str);
    }
};

function onInstall() {
    OLTlog("Extension Installed");
    browser.tabs.create({url: "http://url/installed.html"});
}

function onUpdate() {
    OLTlog("Extension Updated");
    browser.tabs.create({url: "http://url/updated.html"});
}

function getVersion() {
    var details = browser.runtime.getManifest();
    return details.version;
}

// Check if the version has changed.
var currVersion = getVersion();
var prevVersion = localStorage['version']
OLTlog("prev version: " + prevVersion);
OLTlog("curr version: " + currVersion);

if (currVersion != prevVersion) {
    // Check if we just installed this extension.
    if (typeof prevVersion == 'undefined') {
        onInstall();
    } else {
        onUpdate();
    }
    localStorage['version'] = currVersion;
}

var processCommand = function (command) {
    OLTlog('Command recd:' + command);

    var fastSwitch = true;
    slowSwitchForward = false;
    if (command == "alt_switch_fast") {
        fastSwitch = true;
        quickSwitchActiveUsage();
    } else if (command == "alt_switch_slow_backward") {
        fastSwitch = false;
        slowSwitchForward = false;
        slowSwitchActiveUsage();
    } else if (command == "alt_switch_slow_forward") {
        fastSwitch = false;
        slowSwitchForward = true;
        slowSwitchActiveUsage();
    }

    if (!slowSwitchOngoing && !fastSwitchOngoing) {

        if (fastSwitch) {
            fastSwitchOngoing = true;
        } else {
            slowSwitchOngoing = true;
        }
        OLTlog("OLT::START_SWITCH");
       intSwitchCount = 0;
               doIntSwitch();
       
           } else if ((slowSwitchOngoing && !fastSwitch) || (fastSwitchOngoing && fastSwitch)) {
               OLTlog("OLT::DO_INT_SWITCH");
               doIntSwitch();
       
           } else if (slowSwitchOngoing && fastSwitch) {
               endSwitch();
               fastSwitchOngoing = true;
               OLTlog("OLT::START_SWITCH");
               intSwitchCount = 0;
               doIntSwitch();
       
           } else if (fastSwitchOngoing && !fastSwitch) {
               endSwitch();
               slowSwitchOngoing = true;
               OLTlog("OLT::START_SWITCH");
               intSwitchCount = 0;
               doIntSwitch();
           }
       
           if (timer) {
               if (fastSwitchOngoing || slowSwitchOngoing) {
                   clearTimeout(timer);
               }
           }
           if (fastSwitch) {
               timer = setTimeout(function () {
                   endSwitch()
               }, fastTimerValue);
           } else {
               timer = setTimeout(function () {
                   endSwitch()
               }, slowTimerValue);
           }
       
       };
       
       browser.commands.onCommand.addListener(processCommand);
       
       browser.browserAction.onClicked.addListener(function (tab) {
           OLTlog('Click recd');
               processCommand('alt_switch_fast');
           
           });
           
           browser.runtime.onStartup.addListener(function () {
               OLTlog("on startup");
               initialize();
           
           });
           
           browser.runtime.onInstalled.addListener(function () {
               OLTlog("on startup");
               initialize();
           
           });
           
           
           var doIntSwitch = function () {
               OLTlog("OLT:: in int switch, intSwitchCount: " + intSwitchCount + ", mru.length: " + mru.length);
               if (intSwitchCount < mru.length && intSwitchCount >= 0) {
                   var tabIdToMakeActive;
                   //check if tab is still present
                   //sometimes tabs have gone missing
                   var invalidTab = true;
                   var thisWindowId;
                   if (slowSwitchForward) {
                       decrementSwitchCounter();
                   } else {
                       incrementSwitchCounter();
                   }
                   tabIdToMakeActive = mru[intSwitchCount];
                   browser.tabs.get(tabIdToMakeActive, function (tab) {
                       if (tab) {
                           thisWindowId = tab.windowId;
                           invalidTab = false;
           
                           browser.windows.update(thisWindowId, {focused: true});
                           browser.tabs.update(tabIdToMakeActive, {active: true});
                           lastIntSwitchIndex = int
                           SwitchCount;
                                           //break;
                                       } else {
                                           OLTlog("OLT:: in int switch, >>invalid tab found.intSwitchCount: " + intSwitchCount + ", mru.length: " + mru.length);
                                           removeItemAtIndexFromMRU(intSwitchCount);
                                           if (intSwitchCount >= mru.length) {
                                               intSwitchCount = 0;
                                           }
                                           doIntSwitch();
                                       }
                                   });
                           
                           
                               }
                           };
                           
                           var endSwitch = function () {
                               OLTlog("OLT::END_SWITCH");
                           
                               slowSwitchOngoing = false;
                               fastSwitchOngoing = false;
                               var tabId = mru[lastIntSwitchIndex];
                               putExistingTabToTop(tabId);
                               printMRUSimple();
                           };
                           
                           browser.tabs.onActivated.addListener(function (activeInfo) {
                               if (!slowSwitchOngoing && !fastSwitchOngoing) {
                                   var index = mru.indexOf(activeInfo.tabId);
                           
                                   //probably should not happen since tab created gets called first than activated for new tabs,
                                   // but added as a backup behavior to avoid orphan tabs
                                   if (index == -1) {
                                       OLTlog("Unexpected scenario hit with tab(" + activeInfo.tabId + ").")
                                       addTabToMRU
                                                                              addTabToMRU


