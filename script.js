// ==UserScript==
// @name         Animesonline.cc Ads Disabler
// @version      1.0
// @author       M47Z
// @match        *://animesonline.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var adsElementsId = null;

    var IsPageLoad = ( ) => {
        return document.getElementById( "dt_contenedor" ) != null;
    }

    var WaitForPage = ( callbackFunction ) => {
        if ( !IsPageLoad( ) )
            setTimeout( () => WaitForPage( callbackFunction ), 1000 );

        callbackFunction( );
    }

    var GetAdsBannersId = ( ) => {
        var adsElement = document.getElementsByClassName( "abc" )[0].nextElementSibling;
        if ( adsElement == null )
            return null;

        if( !adsElement.id.includes( "_yrw" ) )
            return null;

        return adsElement.id;
    }

    var RemoveAdsBanners = ( ) => {
        if ( adsElementsId == null )
            adsElementsId = GetAdsBannersId( );

        for( ; document.getElementById( adsElementsId ) != null; )
            document.getElementById( adsElementsId ).remove( );

        return;
    }

    var RemoveAdsScripts = ( ) => {
        var scriptsArray = document.getElementsByTagName( "script" );
        for( var i = 0; i < scriptsArray.length; i++ )
        {
            if( !scriptsArray[ i ].src.includes( "online.js" ) && !scriptsArray[ i ].src.includes( "propellerclick" ) )
                continue;

            scriptsArray[ i ].remove( );
        }
    }

    var oAddEventListener = window.document.addEventListener;
    window.document.addEventListener = ( type, listener, useCapture ) => {
        return true;
    }

    WaitForPage( ( ) => {
        var adsBannersInterval = setInterval( RemoveAdsBanners, 500);
        var adsScriptsInterval = setInterval( RemoveAdsScripts, 1000);

        setTimeout( ( ) => {
            clearInterval( adsScriptsInterval );
            clearInterval( adsBannersInterval );
        }, 1000);
    });
})();
