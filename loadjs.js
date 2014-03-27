/** 
 ******************************************************
 *                                                    *
 ** Copyright for Core Developer : © Mohamed Mbarki  **
 *                                                    *
 ******************************************************
 * @ TODO  : MUST  !  API Documentation for the Library
 * @ TODO  : Commonjs Implementation For the require Module
 * Core Library Definition
 
 * Licence  : MIT License
 * description : loadjs , a lighwight javascript library
 * to simplify loading local scripts , CSS stylesheets and Remote
 * scripts from CDNjs platform .
 ________    _____         ____         ______      _    __   _____
|  ____  |  |  __ \       / /\ \       |  __  \    | |  / /  |_____|
| |\  /| |  | |__) |     / /  \ \      | |__| |    | | / /     | |
| | \/ | |  |_____/     / /____\ \     |______/    | |/ /      | |
| |    | |  |  __ \    / /______\ \    | |  \ \    | |\ \      | |
| |    | |  | |__) |  / /        \ \   | |   \ \   | | \ \    _|_|_
|_|    |_|  |_____/  /_/          \_\  |_|    \_\  |_|  \_\  |_____|

 **/


// Preventing Global Scope   : 

(function() {


    var d = document,
        w = window;

    if ('undefined' === typeof Mbarki) {
        /* Library Class Definition */
        Mbarki = {};
        if ('undefined' !== typeof window) {
            window.MB = window.Mbarki = MB = Mbarki;
        }
    }

    /**
     * Define Library Informations
     **/

    Mbarki.VERSION = "1.0.0";
    Mbarki.AUTHOR = "Mohamed Mbarki";

    /** 
     * Helper Methods (used for development purposes )
     **/

    MB.error = function(err) {
        throw new Error(err);
    };

    /**
     * Loading a local script
     **/

    MB.loadJS = function(path) {
        if (typeof path !== "string") {
            this.error("please enter a valid path");
        } else {
            var i = d.getElementsByTagName("head")[0],
                k = d.createElement("script");
            k.src = path + ".js";
            k.type = "text/javascript";
            i.appendChild(k);
        }
    }

    /** 
     * load a css stylesheet file
     **/

    MB.loadCSS = function(path) {
        if (typeof path !== "string") {
            this.error("please enter a valid path");
        } else {
            var i = d.getElementsByTagName("head")[0],
                k = d.createElement("link");
            k.href = path + ".css";
            k.rel = "stylesheet";
            k.type = "text/css";
            i.appendChild(k);
        }
    }


    /** 
     * Used to load remote javascript libraries or scripts
     * usually from  CDNjs platform
     **/

    MB.loadCDN = function(a) {
        if (typeof a !== "string") {
            this.error("please enter a valid path");
        } else {
            var i = d.getElementsByTagName("head")[0],
                k = d.createElement("script");
            k.src = a;
            k.type = "text/javascript";
            i.appendChild(k);
        }
    }


    // @TODO   :  Adding support for popular cdn libraries in cdnjs.

})();