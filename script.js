// ==UserScript==
// @name         Animesonline.cc Ads Disabler
// @version      0.1
// @author       M47Z
// @match        *://animesonline.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var IsPageLoad = ( ) => {
        return document.getElementById( "contenedor" ) != null;
    }
    var WaitForPage = ( callbackFunction ) => {
        if ( !IsPageLoad( ) )
            setTimeout( () => WaitForPage( callbackFunction ), 1000 );

        callbackFunction( );
    }

    WaitForPage( ( ) => {
        var adsElement = document.getElementsByClassName( "abc" )[0].nextElementSibling;
        adsElement.parentElement.removeChild( adsElement );

        var scriptsArray = document.getElementsByTagName( "script" );
        for( var i = 0; i < scriptsArray.length; i++ )
        {
            if( !scriptsArray[ i ].src.includes( "online.js" ) )
                continue;

            scriptsArray[ i ].parentElement.removeChild( scriptsArray[ i ] );
        }

        console.log( "GG Ads Removida!" );
    });
})();
