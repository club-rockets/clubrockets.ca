export default [
    {
        id: 'amarok-2',
        name: {
            fr: 'Amarok II',
            iu: 'ᐊᒪᕋᒃ II'
        },
        image: "",
        sections: [],
    },
    {
        id: 'amarok-3',
        name: {
            fr: 'Amarok III',
            iu: 'ᐊᒪᕋᒃ III'
        },
        image: "",
        sections: [],
    },
    {
        id: 'ookpik-1',
        name: {
            fr: 'Ookpik',
            iu: 'ᐅᒃᐱᒃ'
        },
        image: "",
        sections: [],
    },
    {
        id: 'aarluk-1',
        name: {
            fr: 'Aarluk',
            iu: 'ᐋᕐᓗᒃ'
        },
        image: "",
        sections: [],
    },
    {
        id: 'aarluk-3',
        name: {
            fr: 'Aarluk III',
            iu: 'ᐋᕐᓗᒃ III',
        },
        image: "",
        sections: [
            {
                id: 'summary',
                side: "left",
                title: { en: "Summary", fr: "Résumé" },
                rows: [
                    [
                        {
                            key: { en: "Name", fr: "Nom" },
                            value: "Aarluk"
                        },
                        {
                            key: { en: "Year", fr: "Année" },
                            value: "2019"
                        }
                    ],
                    [
                        {
                            key: { en: "Status", fr: "Statut" },
                            value: { en: "Recovered", fr: "Récupérée" }
                        }
                    ],
                    [
                        {
                            key: { en: "Peak Altitude", fr: "Altitude maximale" },
                            value: { en: "25 261 ft", fr: "25 261pi" }
                        },
                        {
                            key: { en: "Peak Velocity", fr: "Vélocité maximale" },
                            value: "TBD ft/s"
                        }
                    ]
                ]
            },
            {
                id: 'avionics',
                side: "left",
                title: { en: "Avionics / ᐊᓂᕐᓂᕐᒃ", fr: "Avionique / ᐊᓂᕐᓂᕐᒃ" },
                subtitle: { en: "Student built", fr: "Fabrication étudiante" },
                rows: [
                    [
                        {
                            key: { en: "Module designs", fr: "Modules" },
                            value: "ACQUI / COMM / MISSION / MOTHERBOARD"
                        }
                    ],
                    [
                        {
                            key: { en: "Microcontroller", fr: "Microcontrôleur" },
                            value: "STM32F405"
                        },
                        {
                            key: "RTOS",
                            value: "FreeRTOS"
                        }
                    ],
                    [
                        {
                            key: { en: "Radio Modem", fr: "Modem radio" },
                            value: "RFD900x"
                        },
                        {
                            key: "IMU",
                            value: "XSens MTi-3"
                        }
                    ],
                    [
                        {
                            key: { en: "Power supply", fr: "Alimentation" },
                            value: "8 × LG 18650HE4"
                        },
                    ],
                    [
                        {
                            key: { en: "Wireless Activation", fr: "Activation sans-fil" },
                            value: "Bluetooth (Rigado R41Z)"
                        },
                    ],
                ]
            },
            {
                id: 'payload',
                side: 'left',
                title: { en: 'Timmiaq / ᑎᒻᒥᐊᖅ', fr: 'Timmiaq / ᑎᒻᒥᐊᖅ' },
                subtitle: { en: 'Student built payload', fr: 'Payload de fabrication étudiante' },
                rows: [
                    [
                        {
                            key: { en: 'Objectives', fr: 'Objectif' },
                            value: { en: 'Guided descent with Bezier curves', fr: 'Descente guidée par courbes de Bézier' }
                        }
                    ],
                    [
                        {
                            key: { en: 'Ejection', fr: 'Éjection' },
                            value: { en: 'Apogee separation\nReefed paraglider', fr: 'Séparation à l\'apogée\nParapente retenu' }
                        }
                    ],
                    [
                        {
                            key: { en: 'Form factor', fr: 'Dimensions' },
                            value: '3U+ CubeSat'
                        },
                        {
                            key: { en: 'Weight', fr: 'Poids' },
                            value: '4 kg'
                        }
                    ]
                ]
            },
            {
                id: 'fins',
                side: 'left',
                title: { en: 'Fins', fr: 'Ailettes' },
                subtitle: { en: 'Student built', fr: 'Fabrication étudiante' },
                rows: [
                    [
                        {
                            key: { en: 'Material', fr: 'Matériaux'},
                            value: 'Cycom 5320 Carbon Fiber'
                        }
                    ],
                    [
                        {
                            key: { en: 'Manufacturing Process', fr: 'Procédés de fabrication'},
                            value: { en: 'Single-piece fin canister', fr: 'euh...' }
                        }
                    ],
                    [
                        {
                            key: { en: 'Fin shape', fr: 'Forme'},
                            value: { en: 'Clipped Delta', fr: 'Delta tronquée' }
                        },
                        {
                            key: { en: 'Fin flutter', fr: 'Vélocité maximale'},
                            value: '2.25 Mach'
                        },
                    ],
                ]
            },
            {
                id: 'nosecode',
                side: 'right',
                title: { en: 'Nose Cone', fr: 'Pointe'},
                subtitle: { en: 'Student modified', fr: 'Modification étudiante' },
                rows: [
                    [
                        {
                            key: { en: 'Manufacturer', fr: 'Fabricant' },
                            value: 'MadCow Rocketry'
                        }
                    ],
                    [
                        {
                            key: 'Type',
                            value: 'Ogive 4:1'
                        }
                    ],
                    [
                        {
                            key: { en: 'Material', fr: 'Matériaux'},
                            value: { en: 'Fiberglass', fr: 'Fibre de verre' }
                        }
                    ]
                ]
            },
            {
                id: 'recovery',
                side: 'right',
                title: { en: 'Recovery System', fr: 'Récupération' },
                subtitle: { en: 'Student modified', fr: 'Modification étudiante' },
                rows: [
                    [
                        {
                            key: { en: 'Recovery Method', fr: 'Principe de récupération' },
                            value: { en: 'Single Deployment\nReefed State', fr: 'Déploiment unique\nParachute retenu' }
                        }
                    ],
                    [
                        {
                            key: { en: 'Ejection System', fr: 'Système d\'éjection' },
                            value: { en: 'Airbag inflators', fr: 'Gonfleur pour coussin de sécurité' }
                        }
                    ],
                    [
                        {
                            key: { en: 'Parachute Design', fr: 'Design du parachute' },
                            value: 'Iris Ultra Compact'
                        }
                    ],
                    [
                        {
                            key: { en: 'Diameter', fr: 'Diamètre' },
                            value: '96 in'
                        },
                        {
                            key: { en: 'Main Deployment', fr: 'Déploiment principal' },
                            value: '450 m'
                        }
                    ],
                    [
                        {
                            key: { en: 'Descent speed', fr: 'Vitesse de descente' },
                            value: '17.7 ft/s'
                        }
                    ]
                ]
            },
            {
                id: 'airframe',
                side: 'right',
                title: { en: 'Airframe', fr: 'Aérostructure' },
                subtitle: { en: 'Student built', fr: 'Fabrication étudiante' },
                rows: [
                    [
                        {
                            key: { en: 'Main tube material', fr: 'Matériau du tube principal' },
                            value: 'Cycom 5320 Carbon Fiber\nE761 7781 E-Glass Fiberglass'
                        },
                    ],
                    [
                        {
                            key: { en: 'Booster tube material', fr: 'Matériau du tube secondaire' },
                            value: 'Cycom 5320 Carbon Fiber'
                        },
                    ],
                    [
                        {
                            key: { en: 'External Diameter', fr: 'Diamètre externe' },
                            value: '6.16 in'
                        },
                        {
                            key: { en: 'Internal Diameter', fr: 'Diamètre interne' },
                            value: '6.0 in'
                        }
                    ],
                    [
                        {
                            key: { en: 'Fuselage length', fr: 'Longueur du fuselage' },
                            value: '10.3 ft'
                        },
                    ]
                ]
            },
            {
                id: 'booster',
                side: 'right',
                title: { en: 'Engine', fr: 'Propulsion' },
                subtitle: { en: 'Commercial', fr: 'Commercial' },
                rows: [
                    [
                        {
                            key: 'Cesaroni Technology',
                            value: 'PRO 98 21062O3400-P'
                        }
                    ],
                    [
                        {
                            key: { en: 'Maximum thrust', fr: 'Poussée maximale' },
                            value: '4750.3 N'
                        },
                        {
                            key: { en: 'Total impulse', fr: 'Impulsion totale' },
                            value: '21062.2 Ns'
                        }
                    ],
                    [
                        {
                            key: { en: 'Burn time', fr: 'Temps de combustion' },
                            value: '6.16 s'
                        },
                        {
                            key: { en: 'Max G', fr: 'G Max' },
                            value: '14.5 g'
                        }
                    ]
                ]
            }
        ]
    },
]