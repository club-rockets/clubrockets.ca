export default {
    id: 'amarok-2',
    name: {
        fr: 'Amarok II',
        iu: 'ᐊᒪᕈᒃ II',
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
                        value: 'Amarok II'
                    },
                    {
                        key: { en: 'Year', fr: 'Année' },
                        value: '2017'
                    }
                ],
                [
                    {
                        key: { en: 'Status', fr: 'Statut' },
                        value: { en: 'Recovered', fr: 'Récupérée' }
                    }
                ],
                [
                    {
                        key: { en: 'Peak Altitude', fr: 'Altitude maximale' },
                        value: { en: '9466 [ft]', fr: '9466 [pi]' }
                    },
                    {
                        key: { en: 'Peak Velocity', fr: 'Vélocité maximale' },
                        value: { en: '899 [ft/s]', fr: '899 [pi/s]' }
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
                        value: 'S2 Fiberglass'
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
                        value: { en: '5.16 [in]', fr: '5.16 [po]' }
                    },
                    {
                        key: { en: 'Internal Diameter', fr: 'Diamètre interne' },
                        value: { en: '5.00 [in]', fr: '5.00 [po]' }
                    }
                ],
                [
                    {
                        key: { en: 'Fuselage length', fr: 'Longueur du fuselage' },
                        value: { en: '171 [in]', fr: '171 [po]' }
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
                        value: { en: '3.5 [in] × 16 [in]', fr: '3.5 [po] × 16 [po]' }
                    },
                    {
                        key: { en: 'Telemtry Range', fr: 'Portée radio' },
                        value: { en: '40 000 [ft]', fr: '40 000 [pi]' }
                    }
                ],
                [
                    {
                        key: { en: 'Radio module', fr: 'Modem radio' },
                        value: 'RFD900+ 900 [MHz]'
                    },
                ],
                [
                    {
                        key: { en: 'Battery', fr: 'Batteries' },
                        value: 'L[i]F[e]P[o]'
                    },
                    {
                        key: { en: 'Power supply', fr: 'Alimentation' },
                        value: '24 [hrs]'
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
                        key: 'Inertial Station MTi-1 Series from XSens',
                        value: 'Roll/Pitch (Dynamic) 1.0° [RMS]\nYaw (Dynamic) 2° [RMS]'
                    },
                ],
                [
                    {
                        key: { en: 'Gyropscope Range', fr: 'Interval du gyroscope' },
                        value: '2000 [°/s]'
                    },
                    {
                        key: { en: 'Accelerometer', fr: 'Accéléromètre' },
                        value: '16 [g]'
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
                        key: { en: 'Fin flutter', fr: 'Vélocité maximale'},
                        value: '2.425 [Mach]'
                    },
                    {
                        key: { en: 'Binding agent', fr: 'Agent de liaison'},
                        value: 'Epoxy'
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
                        value: 'Von Karman 5.5:1'
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
                        value: { en: '360° Camera\nCalibration Mass', fr: 'Caméra 360°\nMasses de calibrations' }
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
                        value: { en: 'Airbag inflators', fr: 'Dispositif de gonflage' }
                    }
                ],
                [
                    {
                        key: { en: 'Parachute Design', fr: 'Design du parachute' },
                        value: 'Icarus Canopies Nano 106',
                    }
                ],
                [
                    {
                        key: { en: 'Area', fr: 'Aire' },
                        value: { en: '106 [in²]', fr: '106 [po²]' }
                    },
                    {
                        key: { en: 'Main Deployment', fr: 'Déploiment principal' },
                        value: { en: '2000 [ft]', fr: '2000 [po]' }
                    }
                ],
                [
                    {
                        key: { en: 'Descent speed', fr: 'Vitesse de descente' },
                        value: { en: '19.0 [ft/s]', fr: '19.0 [pi/s]' }
                    },
                    {
                        key: { en: 'Max load', fr: 'Charge maximale' },
                        value: '140 [lb]'
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
                        value: 'PRO 98N2850-P'
                    }
                ],
                [
                    {
                        key: { en: 'Maximum thrust', fr: 'Poussée maximale' },
                        value: '759 [lb]'
                    },
                    {
                        key: { en: 'Total impulse', fr: 'Impulsion totale' },
                        value: '3094.94 [lb/s]'
                    }
                ],
                [
                    {
                        key: { en: 'Burn time', fr: 'Temps de combustion' },
                        value: '4.9 [s]'
                    }
                ]
            ]
        }
    ]
};