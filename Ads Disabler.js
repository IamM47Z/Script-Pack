// ==UserScript==
// @name         Ads Disabler
// @version      2.5
// @author       M47Z
// @match        *://animesonline.cc/*
// @updateURL    https://rawcdn.githack.com/imM47Z/animesonline.cc-Script-Pack/f2cacd4301b4281c47e6a926a0d7cbff8e2b8ebb/Ads Disabler.js
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

        if ( adsElementsId == null )
            return false;

        for( ; document.getElementById( adsElementsId ) != null; )
            document.getElementById( adsElementsId ).remove( );

        return true;
    }

    var RemoveAdsScripts = ( ) => {
        var scriptsArray = document.getElementsByTagName( "script" );
        var scriptsRemoved = 0;
        for( var i = 0; i < scriptsArray.length; i++ )
        {
            if ( !scriptsArray[ i ].src.includes( "online.js" ) && !scriptsArray[ i ].src.includes( "click" ) && !scriptsArray[ i ].src.includes( "popads" )
                && !scriptsArray[ i ].src.includes( "stremanp" ) )
                continue;

            scriptsArray[ i ].remove( );
            scriptsRemoved++;
        }

        for( i = 0; i < scriptsArray.length; i++ )
        {
            if( !scriptsArray[ i ].nextElementSibling )
                continue;

            if( scriptsArray[ i ].nextElementSibling.id != "playex" )
                continue;

            scriptsArray[ i ].remove( );
            scriptsRemoved++;
        }

        return scriptsRemoved == 0;
    }

    var RemoveAdsIFrames = ( ) => {
        var iFramesArray = document.getElementsByTagName( "iframe" );
        var iFramesRemoved = 0;
        for( var i = 0; i < iFramesArray.length; i++ )
        {
            if( !iFramesArray[ i ].src.includes( "stremanp" ) )
                continue;

            iFramesArray[ i ].remove( );
            iFramesRemoved++;
        }

        return iFramesRemoved == 0;
    }

    // Simple Hook that does not disturbe the website flow
    window.document.addEventListener = ( type, listener, useCapture ) => {
        return true;
    }

    window.addEventListener = window.document.addEventListener;

    // This will crash a few popup ads
    var oCreateElement = window.document.createElement;
    window.document.createElement = ( localName ) => {
        if( localName != "script" )
            return oCreateElement( localName );

        console.log( localName );
        return null;
    }

    WaitForPage( ( ) => {
        var adsBannersInterval = setInterval( ( ) => {
            if ( RemoveAdsBanners( ) )
                clearInterval( adsBannersInterval );
        }, 500);

        var adsScriptsInterval = setInterval( ( ) => {
            if ( RemoveAdsScripts( ) )
                clearInterval( adsScriptsInterval );
        }, 500);

        var adsiFramesInterval = setInterval( ( ) => {
            if ( RemoveAdsIFrames( ) )
                clearInterval( adsiFramesInterval );
        }, 500);
    });
})();
