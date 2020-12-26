// ==UserScript==
// @name         Popup Remover
// @version      1.2
// @author       M47Z
// @match        *://animeshouse.net/episodio/*
// @match        *://animeshouse.biz/v/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.open = ( link, target ) =>
    {
        return true;
    };

    let oAppendChild = document.body.appendChild.bind( document.body );
    document.body.appendChild = ( elem ) =>
    {
        if ( elem.tagName.toLowerCase( ) != "script" )
            return oAppendChild( elem );

        return true;
    }
})();
