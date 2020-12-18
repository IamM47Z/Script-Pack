// ==UserScript==
// @name         Right Click Enabler
// @version      1.1
// @author       M47Z
// @match        *://borutoexplorer.com.br/*
// @updateURL    https://raw.githubusercontent.com/IamM47Z/Script-Pack/master/right_click_enabler.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let original_event_listener = document.addEventListener;

    document.addEventListener = ( type, handle, useCapture=false ) => {
        if ( type == "contextmenu" )
            return false;

        return original_event_listener( type, handle, useCapture );
    };

    setInterval( ( ) => {
        document.oncontextmenu = null;
    }, 100 );
})();
