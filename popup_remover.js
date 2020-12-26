// ==UserScript==
// @name         Popup Remover
// @version      1.0
// @author       M47Z
// @match        *://animeshouse.net/episodio/*
// @match        *://animeshouse.biz/v/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ( !String.prototype.hasElemOfList )
    {
        Object.defineProperty( String.prototype, 'hasElemOfList', {
            get: ( ) => function( ...args )
            {
                let value = this.valueOf( );

                for ( let i = 0, l = args.length; i < l; i++ )
                    if ( value.indexOf( arguments[ i ] ) > -1 )
                        return true;

                return false;
            }
        } );
    }

    let oAppendChild = document.body.appendChild.bind( document.body );
    document.body.appendChild = ( elem ) =>
    {
        if ( elem.tagName.toLowerCase( ) != "script" ||
            ( elem.type.toLowerCase( ) != "text/javascript" && !elem.src.toLowerCase( ).hasElemOfList( "adsco", "displayvertising", "advertisers", "awaitcola" ) ) )
            return oAppendChild( elem );

        return true;
    }
})();
