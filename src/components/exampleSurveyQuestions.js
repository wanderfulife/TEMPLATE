// 📋 EXAMPLE SURVEY TEMPLATE
// Copy this file and modify it for your own surveys!

export const exampleSurveyQuestions = [
    // Simple single choice question
    {
        id: "AGE",
        text: "What is your age group?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Under 18", next: "end" }, // End survey for minors
            { id: 2, text: "18-24", next: "INTERESTS" },
            { id: 3, text: "25-34", next: "INTERESTS" },
            { id: 4, text: "35-49", next: "INTERESTS" },
            { id: 5, text: "50-64", next: "INTERESTS" },
            { id: 6, text: "65+", next: "INTERESTS" }
        ]
    },

    // Multiple choice question with precision
    {
        id: "INTERESTS",
        text: "What are your main interests? (Select all that apply)",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Sports and fitness" },
            { id: 2, text: "Technology and gadgets" },
            { id: 3, text: "Travel and adventure" },
            { id: 4, text: "Arts and culture" },
            { id: 5, text: "Food and cooking" },
            { id: 6, text: "Other", next_if_selected: "INTERESTS_OTHER" }
        ],
        next: "LOCATION"
    },

    // Precision question for "Other" option
    {
        id: "INTERESTS_OTHER",
        text: "Please specify your other interests:",
        type: 'freeText',
        freeTextPlaceholder: "Type your interests here...",
        next: "LOCATION"
    },

    // Commune selector (French municipalities)
    {
        id: "LOCATION",
        text: "What is your municipality?",
        type: 'commune',
        next: "TRANSPORT"
    },

    // Conditional question - only shows if age is 25+
    {
        id: "TRANSPORT",
        text: "What is your primary mode of transportation?",
        type: 'singleChoice',
        condition: "AGE >= 3", // Only show if age is 25+ (option 3+)
        options: [
            { id: 1, text: "Car", next: "SATISFACTION" },
            { id: 2, text: "Public transport", next: "STATION" },
            { id: 3, text: "Bicycle", next: "SATISFACTION" },
            { id: 4, text: "Walking", next: "SATISFACTION" },
            { id: 5, text: "Motorcycle/Scooter", next: "SATISFACTION" }
        ],
        fallbackNext: "SATISFACTION" // Skip to satisfaction if condition not met
    },

    // Station selector - only shows if they use public transport
    {
        id: "STATION",
        text: "What is your nearest train station?",
        type: 'gare',
        next: "SATISFACTION"
    },

    // Rating question using single choice
    {
        id: "SATISFACTION",
        text: "How satisfied are you with your current transportation?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Very dissatisfied", next: "IMPROVEMENT" },
            { id: 2, text: "Dissatisfied", next: "IMPROVEMENT" },
            { id: 3, text: "Neutral", next: "FREQUENCY" },
            { id: 4, text: "Satisfied", next: "FREQUENCY" },
            { id: 5, text: "Very satisfied", next: "FREQUENCY" }
        ]
    },

    // Conditional question - only for dissatisfied users
    {
        id: "IMPROVEMENT",
        text: "What improvements would you like to see?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Better reliability" },
            { id: 2, text: "Lower cost" },
            { id: 3, text: "More frequent service" },
            { id: 4, text: "Better accessibility" },
            { id: 5, text: "Other", next_if_selected: "IMPROVEMENT_OTHER" }
        ],
        next: "FREQUENCY"
    },

    // Precision for improvements
    {
        id: "IMPROVEMENT_OTHER",
        text: "Please specify other improvements:",
        type: 'freeText',
        freeTextPlaceholder: "Describe your suggestions...",
        next: "FREQUENCY"
    },

    // Usage frequency
    {
        id: "FREQUENCY",
        text: "How often do you use your primary transportation?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Daily", next: "GENDER" },
            { id: 2, text: "Several times a week", next: "GENDER" },
            { id: 3, text: "Once a week", next: "GENDER" },
            { id: 4, text: "Several times a month", next: "GENDER" },
            { id: 5, text: "Rarely", next: "GENDER" }
        ]
    },

    // Demographics
    {
        id: "GENDER",
        text: "What is your gender?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Male", next: "POSTAL_CODE" },
            { id: 2, text: "Female", next: "POSTAL_CODE" },
            { id: 3, text: "Other", next: "POSTAL_CODE" },
            { id: 4, text: "Prefer not to say", next: "POSTAL_CODE" }
        ]
    },

    // Postal code with numeric validation
    {
        id: "POSTAL_CODE",
        text: "What is your postal code?",
        type: 'freeText',
        freeTextPlaceholder: "Enter 5-digit postal code",
        validation: "numeric",
        next: "COMMENTS"
    },

    // Final optional comments
    {
        id: "COMMENTS",
        text: "Any additional comments or suggestions?",
        type: 'freeText',
        freeTextPlaceholder: "Optional - share your thoughts...",
        next: "end"
    }
];

/* 
🎯 QUESTION TYPES DEMONSTRATED:
- singleChoice: Age, Transport, Satisfaction, Frequency, Gender
- multipleChoice: Interests, Improvement  
- freeText: Interests_Other, Improvement_Other, Postal_Code, Comments
- commune: Location (French municipalities)
- gare: Station (Train stations)

🔀 ADVANCED FEATURES DEMONSTRATED:
- Conditional questions (Transport only shows for 25+)
- Precision questions (Other options leading to text fields)
- Multiple choice with next_if_selected
- Numeric validation (Postal code)
- Survey termination (Under 18 ends survey)
- Conditional routing (Dissatisfied → Improvement, Satisfied → Frequency)

📊 SURVEY FLOW:
AGE → INTERESTS → LOCATION → TRANSPORT* → STATION** → SATISFACTION → IMPROVEMENT*** → FREQUENCY → GENDER → POSTAL_CODE → COMMENTS → END

*Only if 25+
**Only if public transport
***Only if dissatisfied

This creates a realistic survey that demonstrates all the template's capabilities!
*/ 