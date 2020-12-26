// ==UserScript==
// @name         Popup Remover
// @version      1.5
// @author       M47Z
// @match        *://animeshouse.net/episodio/*
// @match        *://animeshouse.biz/v/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let o_addEventListener = document.addEventListener;
    document.addEventListener = ( type, listener, capture=false ) =>
    {
        if ( listener.name.indexOf( "onExecute" ) > -1 || type == "mousedown" || listener.toString( ).indexOf( "clearTimeout" ) > -1 )
            return true;

        return o_addEventListener( type, listener, capture );
    };

    let o_appendChild = document.body.appendChild.bind( document.body );
    document.body.appendChild = ( elem ) =>
    {
        if ( elem.tagName.toLowerCase( ) != "script" )
            return o_appendChild( elem );

        return true;
    }
})();
