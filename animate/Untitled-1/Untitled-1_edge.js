/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'black-g22',
                            type: 'image',
                            rect: ['315px', '0px', '472px', '704px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"black-g2.png",'0px','0px']
                        },
                        {
                            id: 'beenice_title2',
                            display: 'block',
                            type: 'image',
                            rect: ['422px', '442px', '267px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"beenice_title.png",'0px','0px']
                        },
                        {
                            id: 'beenice_logo_only2',
                            display: 'block',
                            type: 'image',
                            rect: ['416px', '157px', '280px', '280px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"beenice_logo_only.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['424px', '496px', '142px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Bee Hive datas",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextHoneyD',
                            type: 'text',
                            rect: ['575px', '496px', '116px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Honey datas",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'warning',
                            type: 'image',
                            rect: ['489px', '122px', '124px', '99px', 'auto', 'auto'],
                            opacity: '0.2871887703252',
                            fill: ["rgba(0,0,0,0)",im+"warning.jpg",'0px','0px']
                        },
                        {
                            id: 'honey12',
                            type: 'image',
                            rect: ['574px', '389px', '107px', '107px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"honey1.png",'0px','0px']
                        },
                        {
                            id: 'careful_text',
                            type: 'text',
                            rect: ['419px', '222px', '274px', '103px', 'auto', 'auto'],
                            opacity: '0',
                            text: "\"Bee\" careful you're hydration level on B.H is critical",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hiveFlat',
                            type: 'image',
                            rect: ['437px', '388px', '106px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hiveFlat.png",'0px','0px']
                        },
                        {
                            id: 'decibel',
                            type: 'image',
                            rect: ['476px', '392px', '150px', '150px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"decibel.jpg",'0px','0px']
                        },
                        {
                            id: 'foodFlat',
                            display: 'none',
                            type: 'image',
                            rect: ['573px', '277px', '106px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"foodFlat.png",'0px','0px']
                        },
                        {
                            id: 'thermo',
                            display: 'none',
                            type: 'image',
                            rect: ['434px', '114px', '106px', '269px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"thermo.png",'0px','0px']
                        },
                        {
                            id: 'thermliquide',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '301px', '13px', '19px', 'auto', 'auto'],
                            fill: ["rgba(239,45,36,1.00)"],
                            stroke: [1,"rgba(0,0,0,0.00)","solid"]
                        },
                        {
                            id: 'honey13',
                            type: 'image',
                            rect: ['431px', '284px', '251px', '251px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"honey1.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['416px', '545px', '278px', '47px', 'auto', 'auto'],
                            fill: ["rgba(216,121,3,1)"],
                            stroke: [1,"rgba(0, 0, 0, 0)","solid"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['506px', '554px', '90px', '32px', 'auto', 'auto'],
                            text: "Home",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1024px', '768px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3118,
                    autoPlay: true,
                    labels: {
                        "home": 0,
                        "1": 676,
                        "honey": 1249,
                        "miel": 2184
                    },
                    data: [
                        [
                            "eid356",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${foodFlat}",
                            '573px',
                            '573px'
                        ],
                        [
                            "eid252",
                            "left",
                            676,
                            324,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '709px',
                            '575px'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${honey12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            500,
                            0,
                            "linear",
                            "${honey12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            676,
                            0,
                            "linear",
                            "${honey12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${honey12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            0,
                            0,
                            "linear",
                            "${warning}",
                            'none',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            500,
                            0,
                            "linear",
                            "${warning}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            676,
                            0,
                            "linear",
                            "${warning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${warning}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "left",
                            676,
                            324,
                            "easeInQuad",
                            "${Text}",
                            '330px',
                            '424px'
                        ],
                        [
                            "eid347",
                            "display",
                            0,
                            0,
                            "linear",
                            "${thermo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid350",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${thermo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid372",
                            "display",
                            2184,
                            0,
                            "linear",
                            "${thermo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid307",
                            "top",
                            676,
                            324,
                            "easeInQuad",
                            "${honey12}",
                            '388px',
                            '389px'
                        ],
                        [
                            "eid378",
                            "display",
                            0,
                            0,
                            "linear",
                            "${honey13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            2184,
                            0,
                            "linear",
                            "${honey13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            3118,
                            0,
                            "linear",
                            "${honey13}",
                            'block',
                            'block'
                        ],
                        [
                            "eid269",
                            "opacity",
                            676,
                            324,
                            "easeInOutBounce",
                            "${warning}",
                            '0.287189',
                            '1'
                        ],
                        [
                            "eid248",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextHoneyD}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            500,
                            0,
                            "linear",
                            "${TextHoneyD}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            676,
                            0,
                            "linear",
                            "${TextHoneyD}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${TextHoneyD}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${beenice_title2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid344",
                            "left",
                            1653,
                            0,
                            "linear",
                            "${thermliquide}",
                            '480px',
                            '480px'
                        ],
                        [
                            "eid290",
                            "top",
                            676,
                            0,
                            "linear",
                            "${hiveFlat}",
                            '390px',
                            '390px'
                        ],
                        [
                            "eid289",
                            "left",
                            676,
                            324,
                            "linear",
                            "${hiveFlat}",
                            '295px',
                            '437px'
                        ],
                        [
                            "eid346",
                            "display",
                            0,
                            0,
                            "linear",
                            "${thermliquide}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${thermliquide}",
                            'none',
                            'block'
                        ],
                        [
                            "eid371",
                            "display",
                            2184,
                            0,
                            "linear",
                            "${thermliquide}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "top",
                            676,
                            324,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '396px',
                            '496px'
                        ],
                        [
                            "eid309",
                            "width",
                            1000,
                            0,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '116px',
                            '116px'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            500,
                            "linear",
                            "${beenice_logo_only2}",
                            '157px',
                            '213px'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            676,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "height",
                            1000,
                            0,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid193",
                            "top",
                            500,
                            0,
                            "linear",
                            "${beenice_title2}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid370",
                            "opacity",
                            1249,
                            751,
                            "linear",
                            "${decibel}",
                            '0.031821999698877335',
                            '1'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${beenice_title2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            500,
                            0,
                            "linear",
                            "${beenice_title2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            676,
                            0,
                            "linear",
                            "${beenice_title2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid330",
                            "height",
                            1250,
                            450,
                            "linear",
                            "${thermliquide}",
                            '19px',
                            '161px'
                        ],
                        [
                            "eid332",
                            "height",
                            1700,
                            300,
                            "linear",
                            "${thermliquide}",
                            '161px',
                            '77px'
                        ],
                        [
                            "eid363",
                            "display",
                            0,
                            0,
                            "linear",
                            "${decibel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid364",
                            "display",
                            500,
                            0,
                            "linear",
                            "${decibel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            1249,
                            0,
                            "linear",
                            "${decibel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${decibel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            2184,
                            0,
                            "linear",
                            "${decibel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "width",
                            1000,
                            0,
                            "easeInQuad",
                            "${Text}",
                            '142px',
                            '142px'
                        ],
                        [
                            "eid357",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${foodFlat}",
                            '277px',
                            '277px'
                        ],
                        [
                            "eid306",
                            "left",
                            676,
                            324,
                            "linear",
                            "${honey12}",
                            '710px',
                            '574px'
                        ],
                        [
                            "eid313",
                            "font-size",
                            1000,
                            0,
                            "easeInQuad",
                            "${Text}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            500,
                            "linear",
                            "${beenice_logo_only2}",
                            '701px',
                            '416px'
                        ],
                        [
                            "eid314",
                            "height",
                            1000,
                            0,
                            "easeInQuad",
                            "${Text}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid240",
                            "opacity",
                            676,
                            324,
                            "easeInQuad",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${careful_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            500,
                            0,
                            "linear",
                            "${careful_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            676,
                            0,
                            "linear",
                            "${careful_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid317",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${careful_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "opacity",
                            676,
                            324,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid331",
                            "top",
                            1250,
                            403,
                            "linear",
                            "${thermliquide}",
                            '301px',
                            '187px'
                        ],
                        [
                            "eid338",
                            "top",
                            1653,
                            47,
                            "linear",
                            "${thermliquide}",
                            '187px',
                            '162px'
                        ],
                        [
                            "eid333",
                            "top",
                            1700,
                            300,
                            "linear",
                            "${thermliquide}",
                            '162px',
                            '246px'
                        ],
                        [
                            "eid284",
                            "opacity",
                            676,
                            324,
                            "easeInOutBounce",
                            "${careful_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "opacity",
                            676,
                            324,
                            "linear",
                            "${honey12}",
                            '0.027185000479221344',
                            '1'
                        ],
                        [
                            "eid310",
                            "top",
                            1000,
                            0,
                            "easeInQuad",
                            "${Text}",
                            '496px',
                            '496px'
                        ],
                        [
                            "eid348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${foodFlat}",
                            'none',
                            'none'
                        ],
                        [
                            "eid351",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${foodFlat}",
                            'none',
                            'block'
                        ],
                        [
                            "eid373",
                            "display",
                            2184,
                            0,
                            "linear",
                            "${foodFlat}",
                            'block',
                            'none'
                        ],
                        [
                            "eid354",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${thermo}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid345",
                            "width",
                            1653,
                            0,
                            "linear",
                            "${thermliquide}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid355",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${thermo}",
                            '114px',
                            '114px'
                        ],
                        [
                            "eid194",
                            "left",
                            0,
                            500,
                            "linear",
                            "${beenice_title2}",
                            '139px',
                            '422px'
                        ],
                        [
                            "eid285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hiveFlat}",
                            'none',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            500,
                            0,
                            "linear",
                            "${hiveFlat}",
                            'none',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            676,
                            0,
                            "linear",
                            "${hiveFlat}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${hiveFlat}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "font-size",
                            1000,
                            0,
                            "easeInQuad",
                            "${TextHoneyD}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid288",
                            "opacity",
                            676,
                            324,
                            "linear",
                            "${hiveFlat}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${beenice_logo_only2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${beenice_logo_only2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            500,
                            0,
                            "linear",
                            "${beenice_logo_only2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            676,
                            0,
                            "linear",
                            "${beenice_logo_only2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-62598042");
