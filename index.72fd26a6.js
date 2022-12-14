/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var A,g,C,B}}),yg="145",Mg=0,Ug=1,Kg=2,Ng=0,ug=1,Rg=2,Fg=3,Jg=100,dg=301,pg=302,qg=303,fg=304,Lg=306,Yg=1e3,Hg=1001,mg=1002,vg=1003,Tg=1004,xg=1005,bg=1006,Og=1007,Pg=1008,Zg=1009,Wg=1012,Vg=1014,jg=1015,zg=1016,_g=1020,Xg=1023,$g=1024,AC=1026,IC=1027,gC=1028,CC=1030,BC=33776,QC=33777,iC=33778,EC=33779,oC=35840,eC=35841,tC=35842,aC=35843,nC=37492,sC=37496,rC=37808,DC=37809,hC=37810,cC=37811,lC=37812,wC=37813,SC=37814,GC=37815,kC=37816,yC=37817,MC=37818,UC=37819,KC=37820,NC=37821,uC=36492,RC=2300,FC=2301,JC=2302,dC=2400,pC=2401,qC=2402,fC=2500,LC=3e3,YC=3001,HC=3200,mC=3201,vC="srgb",TC="srgb-linear",xC=7680,bC=35044,OC="300 es",PC=1035,ZC=function(){"use strict";function A(){e(this,A)}return r(A,[{key:"addEventListener",value:function(A,I){void 0===this._listeners&&(this._listeners={});var g=this._listeners;void 0===g[A]&&(g[A]=[]),-1===g[A].indexOf(I)&&g[A].push(I)}},{key:"hasEventListener",value:function(A,I){if(void 0===this._listeners)return!1;var g=this._listeners;return void 0!==g[A]&&-1!==g[A].indexOf(I)}},{key:"removeEventListener",value:function(A,I){if(void 0!==this._listeners){var g=this._listeners[A];if(void 0!==g){var C=g.indexOf(I);-1!==C&&g.splice(C,1)}}}},{key:"dispatchEvent",value:function(A){if(void 0!==this._listeners){var I=this._listeners[A.type];if(void 0!==I){A.target=this;for(var g=I.slice(0),C=0,B=g.length;C<B;C++)g[C].call(this,A);A.target=null}}}}]),A}(),WC=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],VC=1234567,jC=Math.PI/180,zC=180/Math.PI;
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
/**
 * postprocessing v6.29.1 build Thu Oct 27 2022
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2022 Raoul van Rüschen
 * @license Zlib