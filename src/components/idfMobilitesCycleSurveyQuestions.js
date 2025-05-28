export const idfMobilitesCycleSurveyQuestions = [
    // S1: Gare d'interrogation
    {
        id: "S1",
        text: "Gare d'interrogation :",
        type: 'singleChoice', // Interviewer selects this
        options: [
            { id: 1, text: "Chanteloup-les-vignes", next: "AGE" },
            { id: 2, text: "Marcel Semblat", next: "AGE" },
            { id: 3, text: "Puteaux", next: "AGE" },
            { id: 4, text: "Stade de France", next: "AGE" },
            { id: 5, text: "Vitry-sur-Seine", next: "AGE" },
            { id: 6, text: "Houilles", next: "AGE" },
            { id: 7, text: "Bois-Colombes", next: "AGE" },
            { id: 8, text: "Le Blanc Mesnil", next: "AGE" }
        ]
    },

    // Part A – Usages de la gare et du stationnement vélo en gare

    {
        id: "AGE",
        text: "Quel âge avez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "15-17", next: "end" },
            { id: 2, text: "18-24", next: "VELO" },
            { id: 3, text: "25-34", next: "VELO" },
            { id: 4, text: "35-49", next: "VELO" },
            { id: 5, text: "50-64", next: "VELO" },
            { id: 6, text: "65+", next: "VELO" }
        ]
    },

    // VELO (Observation de l'enquêteur)
    {
        id: "VELO",
        text: "L'Enquêté a-t-il un vélo avec lui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui un vélo classique ou à assistance électrique", next: "S2" },
            { id: 2, text: "Oui, un vélo pliable", next: "S2" },
            { id: 3, text: "Oui, un autre type de vélo", next: "VELO_PRECISION" },
            { id: 4, text: "Non", next: "S2" }
        ]
    },
    {
        id: "VELO_PRECISION",
        text: "Préciser quel autre type de vélo :",
        type: 'freeText',
        freeTextPlaceholder: "Type de vélo...",
        next: "S2"
    },

    // S2: Comment êtes-vous arrivé en gare ? (POSER A TOUS)
    {
        id: "S2",
        text: "Comment êtes-vous arrivé en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "A vélo", next: "S3" },
            { id: 2, text: "En voiture", next: "S3" },
            { id: 3, text: "En RER", next: "S3" },
            { id: 4, text: "En train (Transilien)", next: "S3" },
            { id: 5, text: "En métro", next: "S3" },
            { id: 6, text: "En tramway", next: "S3" },
            { id: 7, text: "En bus", next: "S3" },
            { id: 8, text: "A pied", next: "end" },
            { id: 9, text: "Autrement", next: "end" }
        ]
    },

    // S3: Quel mode de transport allez-vous utiliser maintenant ? (POSER A TOUS)
    {
        id: "S3",
        text: "Quel mode de transport allez-vous utiliser maintenant ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Le vélo", next: "S4" },
            { id: 2, text: "La voiture", next: "S4" },
            { id: 3, text: "Le RER", next: "S4" },
            { id: 4, text: "Le train (Transilien)", next: "S4" },
            { id: 5, text: "Le métro", next: "S4" },
            { id: 6, text: "Le tramway", next: "S4" },
            { id: 7, text: "En bus", next: "S4" },
            { id: 8, text: "La marche", next: "end" },
            { id: 9, text: "Un autre mode", next: "end" }
        ]
    },

    {
        id: "S4",
        text: "Avez-vous emporté votre vélo dans les transports en commun ou prévoyez-vous de le faire sur ce trajet ?",
        type: 'singleChoice',
        condition: "VELO == 1 AND ((S2 >= 2 AND S2 <= 7) OR (S3 >= 2 AND S3 <= 7))",
        options: [
            { id: 1, text: "Oui", next: "S5" },
            { id: 2, text: "Non", next: "S5" }
        ],
        conditionalNext: [
            {
                condition: "S4 == 1",
                next: "S7"
            }
        ],
        next: "S6",
        fallbackNext: "S5"
    },

    {
        id: "S5",
        text: "Pour quelles raisons fréquentez-vous cette gare à vélo ?",
        type: 'multipleChoice',
        condition: "S2 == 1 OR S3 == 1",
        options: [
            { id: 1, text: "Pour aller à mon travail / lieu d'études" },
            { id: 2, text: "Pour aller faire mes courses" },
            { id: 3, text: "Pour aller à mes loisirs" },
            { id: 4, text: "Pour un autre motif", next_if_selected: "S5_PRECISION" }
        ],
        conditionalNext: [
            {
                condition: "S4 == 1",
                next: "S7"
            }
        ],
        next: "S6",
        fallbackNext: "S5bis"
    },
    {
        id: "S5_PRECISION",
        text: "Pour un autre motif, précisez :",
        type: 'freeText',
        next: "S6"
    },

    {
        id: "S6",
        text: "En général, combien de temps stationnez-vous votre vélo à cette gare ?",
        type: 'singleChoice',
        condition: "(S2 == 1 OR S3 == 1) AND (S4 == 2 OR VELO == 3)",
        options: [
            { id: 1, text: "Toute la journée" },
            { id: 2, text: "Quelques heures (4 heures max), plutôt le matin" },
            { id: 3, text: "Quelques heures (4 heures max), plutôt l'après-midi" },
            { id: 4, text: "En soirée" },
            { id: 5, text: "Toute la nuit" },
            { id: 6, text: "Autre", next: "S6_PRECISION" }
        ],
        next: "S7",
        fallbackNext: "S7"
    },
    {
        id: "S6_PRECISION",
        text: "Autre durée de stationnement, précisez :",
        type: 'freeText',
        next: "S7"
    },

    {
        id: "S7",
        text: "A quelle fréquence utilisez-vous votre vélo pour vous rendre en gare ?",
        type: 'singleChoice',
        condition: "S2 == 1 OR S3 == 1",
        options: [
            { id: 1, text: "Tous les jours de la semaine (travaillés ou non)" },
            { id: 2, text: "Tous les jours travaillés" },
            { id: 3, text: "3 à 4 fois / semaine" },
            { id: 4, text: "1 à 2 fois / semaine" },
            { id: 5, text: "1 à 3 fois / mois" },
            { id: 6, text: "Moins souvent" }
        ],
        next: "S8",
        fallbackNext: "S5bis"
    },
    {
        id: "S7_PRECISION",
        text: "Autre, précisez :",
        type: 'freeText',
        next: "S8"
    },

    {
        id: "S8",
        text: "Lorsque vous n'utilisez pas votre vélo pour repartir de la gare, quel(s) autre(s) mode(s) de transport utilisez-vous ?",
        type: 'multipleChoice',
        condition: "S2 == 1 OR S3 == 1",
        conditionalText: {
            condition: "S4",
            routes: [
                { value: 1, text: "Lorsque vous n'utilisez pas votre vélo pour repartir de la gare, quel(s) autre(s) mode(s) de transport utilisez-vous ?" }
            ]
        },
        options: [
            { id: 1, text: "La marche à pied" },
            { id: 2, text: "Une trottinette ou un autre engin de déplacement personnel similaire" },
            { id: 3, text: "Les transports collectifs / les transports en commun" },
            { id: 4, text: "Une voiture personnelle" },
            { id: 5, text: "Le covoiturage" },
            { id: 6, text: "Un deux-roues motorisé" },
            { id: 7, text: "Un autre mode", next_if_selected: "S8_PRECISION" }
        ],
        next: "S9",
        fallbackNext: "S5bis"
    },
    {
        id: "S8_PRECISION",
        text: "Autre mode, précisez :",
        type: 'freeText',
        next: "S9"
    },

    {
        id: "S9",
        text: "Êtes-vous satisfait des solutions de stationnement existantes à cette gare ?",
        type: 'multipleChoice',
        condition: "S2 == 1 OR S3 == 1",
        options: [
            { id: 1, text: "Non, il manque d'arceaux en libre accès" },
            { id: 2, text: "Non, il manque des places sécurisées en consignes fermées" },
            { id: 3, text: "Non, les équipements de bonne qualité sont trop loin de la gare" },
            { id: 4, text: "Oui" }
        ],
        next: "S10",
        fallbackNext: "S5bis"
    },

    {
        id: "S10",
        text: "Si de meilleures solutions de stationnement existaient, viendriez-vous plus souvent à la gare à vélo ?",
        type: 'singleChoice',
        condition: "S2 == 1 OR S3 == 1",
        options: [
            { id: 1, text: "Oui", next: "S11" },
            { id: 2, text: "Non", next: "S11" }
        ],
        fallbackNext: "S5bis"
    },

    {
        id: "S11",
        text: "Pour quelles raisons emportez-vous votre vélo dans les transports ?",
        type: 'multipleChoice',
        condition: "S4 == 1",
        options: [
            { id: 1, text: "Je n'ai pas d'autre option pour finir mon déplacement après ma gare d'arrivée" },
            { id: 2, text: "Les solutions de stationnement à ma gare de départ ne sont pas satisfaisantes" },
            { id: 3, text: "Les solutions de stationnement à ma gare d'arrivée ne sont pas satisfaisantes" },
            { id: 4, text: "J'ai un vélo pliable, c'est le plus pratique" },
            { id: 5, text: "Je n'ai pas de vélo pliable mais pas de difficulté à trouver une place pour mon vélo" },
            { id: 6, text: "Autre", next_if_selected: "S11_PRECISION" }
        ],
        next: "S12",
        fallbackNext: "S13"
    },
    {
        id: "S11_PRECISION",
        text: "Autre raison, précisez :",
        type: 'freeText',
        next: "S12"
    },

    {
        id: "S12",
        text: "Quelles difficultés ressentez-vous principalement dans l'emport de votre vélo dans les transports ?",
        type: 'multipleChoice',
        condition: "S4 == 1",
        options: [
            { id: 1, text: "La circulation en gare avec le vélo" },
            { id: 2, text: "L'accès au quai ou à l'arrêt" },
            { id: 3, text: "L'identification d'un espace pour laisser son vélo dans les transports" },
            { id: 4, text: "La compréhension et le respect des règles d'emport" },
            { id: 5, text: "L'identification des lignes et moyens de transport pour lesquels c'est possible ou facile et ceux pour lesquels ça ne l'est pas" },
            { id: 6, text: "Autre", next_if_selected: "S12_PRECISION" }
        ],
        next: "S13",
        fallbackNext: "S13"
    },
    {
        id: "S12_PRECISION",
        text: "Autre difficulté, précisez :",
        type: 'freeText',
        next: "S13"
    },

    {
        id: "S5bis",
        text: "Pour quelles raisons passez-vous par cette gare ?",
        type: 'multipleChoice',
        condition: "((S2 == 2 OR S2 == 3 OR S2 == 4 OR S2 == 5 OR S2 == 6 OR S2 == 7) AND S3 != 1) OR (S2 != 1 AND (S3 == 2 OR S3 == 3 OR S3 == 4 OR S3 == 5 OR S3 == 6 OR S3 == 7))",
        options: [
            { id: 1, text: "Pour aller à mon travail / lieu d'études" },
            { id: 2, text: "Pour aller faire mes courses" },
            { id: 3, text: "Pour aller à mes loisirs" },
            { id: 4, text: "Pour un autre motif", next_if_selected: "S5bis_PRECISION" }
        ],
        next: "S6bis",
        fallbackNext: "S13"
    },
    {
        id: "S5bis_PRECISION",
        text: "Autre motif, précisez :",
        type: 'freeText',
        next: "S6bis"
    },

    {
        id: "S6bis",
        text: "Vous arrive-t-il de venir à vélo à cette gare ?",
        type: 'singleChoice',
        condition: "((S2 == 2 OR S2 == 3 OR S2 == 4 OR S2 == 5 OR S2 == 6 OR S2 == 7) AND S3 != 1) OR (S2 != 1 AND (S3 == 2 OR S3 == 3 OR S3 == 4 OR S3 == 5 OR S3 == 6 OR S3 == 7))",
        options: [
            { id: 1, text: "Oui, souvent", next: "S7bis" },
            { id: 2, text: "Oui, parfois", next: "S7bis" },
            { id: 3, text: "Non, jamais", next: "S7bis" }
        ],
        fallbackNext: "S13"
    },

    {
        id: "S7bis",
        text: "Considérez-vous le manque de solutions de stationnement de qualité des vélos comme une raison importante vous empêchant d'y venir à vélo ?",
        type: 'singleChoice',
        condition: "((S2 == 2 OR S2 == 3 OR S2 == 4 OR S2 == 5 OR S2 == 6 OR S2 == 7) AND S3 != 1) OR (S2 != 1 AND (S3 == 2 OR S3 == 3 OR S3 == 4 OR S3 == 5 OR S3 == 6 OR S3 == 7))",
        options: [
            { id: 1, text: "Oui, c'est la principale raison", next: "S13" },
            { id: 2, text: "Oui, c'est une des raisons", next: "S13" },
            { id: 3, text: "Non, mon choix n'est pas en lien avec les solutions de stationnement", next: "S13" }
        ],
        fallbackNext: "S13"
    },

    {
        id: "S13",
        text: "Connaissez-vous le service Parking Vélos Île-de-France Mobilités ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, vous êtes actuellement abonné(e)", next: "S14" },
            { id: 2, text: "Oui, vous l'avez déjà utilisé par le passé", next: "S14" },
            { id: 3, text: "Oui, mais vous ne l'avez jamais utilisé", next: "S14" },
            { id: 4, text: "Non, vous ne connaissez pas le service", next: "S14" }
        ]
    },

    {
        id: "S14",
        text: "Si une consigne fermée Parking Vélos Île-de-France Mobilités existait à proximité immédiate de votre gare, seriez-vous intéressé(e) pour vous abonner ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui", next: "S15" },
            { id: 2, text: "Non, jamais", next: "S15" },
            { id: 3, text: "Je ne sais pas", next: "S15" }
        ]
    },

    {
        id: "S15",
        text: "Vous êtes…",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Un homme", next: "S16" },
            { id: 2, text: "Une femme", next: "S16" }
        ]
    },

    {
        id: "S16",
        text: "Quel est le code postal de votre domicile ?",
        type: 'freeText',
        freeTextPlaceholder: "_____ (5 chiffres)",
        validation: "numeric",
        next: "S17"
    },

    {
        id: "S17",
        text: "Disposez-vous d'un abonnement aux transports en commun pour vos déplacements en Île-de-France ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, un abonnement Navigo mensuel", next: "end" },
            { id: 2, text: "Oui, un abonnement Navigo annuel", next: "end" },
            { id: 3, text: "Oui, un abonnement imagine R", next: "end" },
            { id: 4, text: "Oui, un abonnement Navigo Senior", next: "end" },
            { id: 5, text: "Oui, un autre type d'abonnement", next: "S17_PRECISION" },
            { id: 6, text: "Non, je n'ai pas d'abonnement", next: "end" }
        ]
    },
    {
        id: "S17_PRECISION",
        text: "Autre type d'abonnement (S17), précisez :",
        type: 'freeText',
        next: 'end'
    }
]; 