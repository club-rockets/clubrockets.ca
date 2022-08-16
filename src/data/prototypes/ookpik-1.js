export default {
    id: 'ookpik-1',
    name: {
        fr: 'Ookpik',
        iu: 'ᐅᒃᐱᒃ',
    },
    sections: [
        {
            id: 'summary',
            side: 'left',
            title: { en: 'Summary', fr: 'Résumé' },
            rows: [
                [
                    {
                        key: { en: 'Name', fr: 'Nom' },
                        value: 'Ookpik'
                    },
                    {
                        key: { en: 'Year', fr: 'Année' },
                        value: '2018'
                    }
                ],
                [
                    {
                        key: { en: 'Status', fr: 'Statut' },
                        value: { en: 'Lost to the dunes', fr: 'Shai-Hulud' }
                    }
                ],
                [
                    {
                        key: { en: 'Peak Altitude', fr: 'Altitude maximale' },
                        value: { en: '30 576 [ft]', fr: '30 576 [pi]' }
                    },
                    {
                        key: { en: 'Peak Velocity', fr: 'Vélocité maximale' },
                        value: { en: '1760 [ft/s]', fr: '1760 [pi/s]' }
                    }
                ]
            ]
        },
        {
            id: 'airframe',
            side: 'left',
            title: { en: 'Airframe', fr: 'Aérostructure' },
            subtitle: { en: 'Student built', fr: 'Fabrication étudiante' },
            rows: [
                [
                    {
                        key: { en: 'Main tube material', fr: 'Matériau du tube principal' },
                        value: 'Cycom 5320 Carbon Fiber\nS2 Fiberglass'
                    },
                ],
                [
                    {
                        key: { en: 'Booster tube material', fr: 'Matériau du tube secondaire' },
                        value: 'Cycom 5320 Carbon Fiber\nS2 Fiberglass'
                    },
                ],
                [
                    {
                        key: { en: 'External Diameter', fr: 'Diamètre externe' },
                        value: { en: '4.20 [in]', fr: '4.20 [po]' }
                    },
                    {
                        key: { en: 'Internal Diameter', fr: 'Diamètre interne' },
                        value: { en: '4.00 [in]', fr: '4.00 [po]' }
                    }
                ],
                [
                    {
                        key: { en: 'Fuselage length', fr: 'Longueur du fuselage' },
                        value: { en: '156.5 [in]', fr: '156.5 [po]' }
                    },
                ]
            ]
        },
        {
            id: 'avionics',
            side: 'left',
            title: { en: 'Avionics', fr: 'Avionique' },
            subtitle: { en: 'Student built', fr: 'Fabrication étudiante' },
            rows: [
                [
                    {
                        key: { en: 'Module Dimensions', fr: 'Dimensions du module' },
                        value: { en: '2.8 [in] × 12.5 [in]', fr: '2.8 [po] × 12.5 [po]' }
                    },
                    {
                        key: { en: 'Gyropscope Range', fr: 'Interval du gyroscope' },
                        value: '2000 [°/s]'
                    }
                ],
                [
                    {
                        key: { en: 'Telemtry Range', fr: 'Portée de la télémétrie' },
                        value: { en: '40 000 [ft]', fr: '40 000 [pi]' }
                    },
                    {
                        key: { en: 'Accelerometer', fr: 'Accéléromètre' },
                        value: '16 [g]'
                    }
                ],
                [
                    {
                        key: { en: 'Broadcasting module', fr: 'Modem radio' },
                        value: 'RFD900+ 900 [MHz]'
                    },
                ],
                [
                    {
                        key: { en: 'Redundacy Altimeter', fr: 'Altimètre redondant' },
                        value: 'Stratologger CF'
                    },
                ],
                [
                    {
                        key: 'Payload',
                        value: 'RPi Fish Eye Camera'
                    },
                ],
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
                        value: { en: 'Single-piece fin canister', fr: 'Monopièce / cuisson unique' }
                    }
                ],
                [
                    {
                        key: { en: 'Fin flutter', fr: 'Vélocité maximale'},
                        value: '2.37 [Mach]'
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
                        value: 'Rocketry Warehouse'
                    }
                ],
                [
                    {
                        key: 'Type',
                        value: 'Von Karman 5:!'
                    }
                ],
                [
                    {
                        key: { en: 'Material', fr: 'Matériaux'},
                        value: { en: 'Fiberglass', fr: 'Fibre de verre' }
                    }
                ],
                [
                    {
                        key: 'Payload',
                        value: { en: 'Accelerometer', fr: 'Accéléromètre' }
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
                        value: 'Disk Gap Band',
                    }
                ],
                [
                    {
                        key: { en: 'Diameter', fr: 'Diamètre' },
                        value: { en: '84 [in]', fr: '84 [po]' }
                    },
                    {
                        key: { en: 'Main Deployment', fr: 'Déploiment principal' },
                        value: { en: '1500 [ft]', fr: '1500 [po]' }
                    }
                ],
                [
                    {
                        key: { en: 'Descent speed', fr: 'Vitesse de descente' },
                        value: { en: '20.2 [ft/s]', fr: '20.2 [pi/s]' }
                    }
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
                        value: 'PRO 98 19318N3301-P'
                    }
                ],
                [
                    {
                        key: { en: 'Maximum thrust', fr: 'Poussée maximale' },
                        value: '1141.1 [lb]'
                    },
                    {
                        key: { en: 'Total impulse', fr: 'Impulsion totale' },
                        value: '4342.64 [lb/s]'
                    }
                ],
                [
                    {
                        key: { en: 'Burn time', fr: 'Temps de combustion' },
                        value: '5.86 [s]'
                    }
                ]
            ]
        }
    ]
};