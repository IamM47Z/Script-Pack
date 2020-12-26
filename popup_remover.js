// ==UserScript==
// @name         Popup Remover
// @version      1.1
// @author       M47Z
// @match        *://animeshouse.net/episodio/*
// @match        *://animeshouse.biz/v/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let oAppendChild = document.body.appendChild.bind( document.body );
    document.body.appendChild = ( elem ) =>
    {
        if ( elem.tagName.toLowerCase( ) != "script" )
            return oAppendChild( elem );

        return true;
    }
})();
