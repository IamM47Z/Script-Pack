// ==UserScript==
// @name         Right Click Enabler
// @version      0.1
// @author       M47Z
// @match        *://borutoexplorer.com.br/*
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
