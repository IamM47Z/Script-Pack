// ==UserScript==
// @name         Subtitles Only
// @version      1.1
// @author       M47Z
// @match        *://animesonline.cc/episodio/*
// @updateURL    https://raw.githubusercontent.com/IamM47Z/Script-Pack/master/subtitles_only.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    function is_page_load( )
    {
        return document.getElementById( "dt_contenedor" ) != null;
    }

    function wait_for_page( callback_fn )
    {
        if ( !is_page_load( ) )
            setTimeout( () => wait_for_page( callback_fn ), 1000 );

        callback_fn( );
    }

    function click_on_subtitles( )
    {
        let li_array = document.getElementsByTagName( "li" );

        for ( let i = 0; i < li_array.length; i++ )
        {
            if( li_array[ i ].innerText != " Legendado" )
                continue;

            let a_elem = li_array[ i ].children[ 0 ];

            if( !a_elem.href.includes( window.location.href ) )
               continue;

            a_elem.click( );
            return true;
        }

        return false;
    }

    function main( )
    {
        let click_on_sub_interval = setInterval( ( ) => {
            if ( click_on_subtitles( ) )
                clearInterval( click_on_sub_interval );
        }, 500 );
    }

    wait_for_page( main );
})();
