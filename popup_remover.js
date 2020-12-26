// ==UserScript==
// @name         Popup Remover
// @version      1.3
// @author       M47Z
// @match        *://animeshouse.net/episodio/*
// @match        *://animeshouse.biz/v/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let oAddEventListener = document.addEventListener;
    document.addEventListener = ( type, listener, capture=false ) =>
    {
        if ( listener.name.indexOf( "onExecute" ) > -1 )
            return true;

        return oAddEventListener( type, listener, capture );
    };

    let oAppendChild = document.body.appendChild.bind( document.body );
    document.body.appendChild = ( elem ) =>
    {
        if ( elem.tagName.toLowerCase( ) != "script" )
            return oAppendChild( elem );

        return true;
    }
})();
