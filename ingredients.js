export const measurements = [
    {
        id: "pc",
        name: "x",
        plural: null,
        space: false,
        system: "gb",
        alt: null,
        multipliable: true
    },
    {
        id: "pinch",
        name: "τσιμπιά",
        plural: "τσιμπιές",
        space: true,
        system: "gb",
        alt: null,
        multipliable: true
    },
    {
        id: "kesedaki",
        name: "κεσεδάκι",
        plural: "κεσεδάκια",
        space: true,
        system: "gb",
        alt: null,
        multipliable: true
    },
    {
        id: "cup",
        name: "κούπα",
        plural: "κούπες",
        space: true,
        system: "us",
        alt: "mL",
        multipliable: true
    },
    {
        id: "scrape",
        name: "ξύσμα",
        plural: null,
        space: true,
        system: "gb",
        alt: null,
        multipliable: true
    },
    {
        id: "tsp",
        name: "κ.γ.",
        plural: null,
        space: false,
        system: "us",
        alt: "mL",
        multipliable: true
    },
    {
        id: "tbsp",
        name: "κ.σ.",
        plural: null,
        space: false,
        system: "us",
        alt: "mL",
        multipliable: true
    },
    {
        id: "mL",
        name: "mL",
        plural: null,
        space: false,
        system: "me",
        alt: "tsp",
        multipliable: true
    },
    {
        id: "L",
        name: "λίτρο",
        plural: "λίτρα",
        space: true,
        system: "me",
        alt: "tsp",
        multipliable: true
    },
    {
        id: "g",
        name: "γρ.",
        plural: null,
        space: false,
        system: "me",
        alt: "tsp",
        multipliable: true
    },
    {
        id: "kg",
        name: "κιλό",
        plural: "κιλά",
        space: true,
        system: "me",
        alt: "tsp",
        multipliable: true
    },
];

export const conversions = {
    // Weight
    g: {
        kg: 0.001,
        kesedaki: 1 / 200,
        mL: 1,
        L: 0.001,
        tsp: 0.2,
        tbsp: 0.0666667,
        cup: 0.0041667
    },
    kg: {
        g: 1000,
        kesedaki: 5,
        mL: 1000,
        L: 1,
        tsp: 200,
        tbsp: 66.6667,
        cup: 4.1667
    },
    kesedaki: {
        g: 200,
        kg: 0.2,
        mL: 200,
        L: 0.2,
        tsp: 40,
        tbsp: 13.3333,
        cup: 0.8333
    },

    // Volume
    mL: {
        L: 0.001,
        tsp: 0.2,
        tbsp: 0.0666667,
        cup: 0.0041667,
        g: 1,
        kg: 0.001,
        kesedaki: 1 / 200
    },
    L: {
        mL: 1000,
        tsp: 200,
        tbsp: 66.6667,
        cup: 4.1667,
        g: 1000,
        kg: 1,
        kesedaki: 5
    },
    tsp: {
        mL: 5,
        tbsp: 1 / 3,
        cup: 1 / 48,
        L: 0.005,
        g: 5,
        kg: 0.005,
        kesedaki: 5 / 200
    },
    tbsp: {
        mL: 15,
        tsp: 3,
        cup: 1 / 16,
        L: 0.015,
        g: 15,
        kg: 0.015,
        kesedaki: 15 / 200
    },
    cup: {
        mL: 240,
        tbsp: 16,
        tsp: 48,
        L: 0.24,
        g: 240,
        kg: 0.24,
        kesedaki: 240 / 200
    },

    // Symbolic / non-convertible
    pc: { pc: 1 },
    scrape: { scrape: 1 }
};

export const ingredients = [
    {
        id: "error",            name: "Υλικό",                  plural: "Υλικά",    unit: null,     price: 0.00
    },
    {
        id: "str_yogurt",       name: "Στραγγιστό Γιαούρτι",    plural: null,       unit: "kg",     price: 2.59
    },
    {
        id: "seed_oil",         name: "Σπορέλαιο",              plural: null,       unit: "L",      price: 1.75
    },
    {
        id: "sugar",            name: "Ζάχαρη",                 plural: null,       unit: "kg",     price: 0.75
    },
    {
        id: "egg",              name: "Αυγό",                   plural: "Αυγά",     unit: "pc",     price: 0.30
    },
    {
        id: "vanilla",          name: "Βανίλια",                plural: "Βανίλιες", unit: "pc",     price: 0.10
    },
    {
        id: "orange_peel",      name: "Φλούδα Πορτοκαλιού",     plural: null,       unit: "scrape", price: 0.18
    },
    {
        id: "baking_powder",    name: "Μπέικιν",                plural: null,       unit: "g",      price: 0.0075
    },
    {
        id: "a_p_flour",        name: "Αλεύρι Γ.Ο.Χ.",          plural: null,       unit: "kg",     price: 0.70
    },
    {
        id: "milk",             name: "Γάλα",                   plural: null,       unit: "mL",     price: 0.00137
    },
    {
        id: "water",            name: "Νερό",                   plural: null,       unit: "mL",     price: 0.00
    },
    {
        id: "sunflower_oil",    name: "Ηλιέλαιο",               plural: null,       unit: "L",      price: 1.75
    },
    {
        id: "salt",             name: "Αλάτι",                  plural: null,       unit: "pinch",  price: 0.00 //  0.460 / kg
    },
    {
        id: "pepper",           name: "Πιπέρι",                 plural: null,       unit: "pinch",  price: 0.00 //  21.80 / kg
    },
    {
        id: "feta_cheese",      name: "Τυρί",                   plural: "Τυριά",    unit: "kg",     price: 5.69
    },
    {
        id: "butter",      name: "Βούτυρο",                   plural: null,    unit: "kg",     price: 11.96
    },
    {
        id: "flour",      name: "Αλεύρι",                   plural: null,    unit: "kg",     price: 0.70
    },
    {
        id: "cocoa",      name: "Κακάο",                   plural: null,    unit: "kg",     price: 17.90
    },
    {
        id: "couverture",      name: "Κουβερτούρα",                   plural: "Κουβερτούρες",    unit: "kg",     price: 15.92
    },
    {
        id: "biscuit",      name: "Μπισκότο",                   plural: "Μπισκότα",    unit: "kg",     price: 3.96
    },
    {
        id: "evap_milk",      name: "Ζαχαρούχο",                   plural: "Ζαχαρούχα",    unit: "kg",     price: 3.50
    },
    {
        id: "milk_cream",      name: "Κρέμα Γάλακτος",                   plural: null,    unit: "kg",     price: 5.80
    },
    {
        id: "morfat",      name: "Μόρφατ",                   plural: null,    unit: "kg",     price: 8.80
    },
    {
        id: "pork_tenderloin",      name: "Ψαρονέφρι",                   plural: null,    unit: "kg",     price: 10.50
    },
    {
        id: "mushroom",      name: "Μανιτάρι",                   plural: "Μανιτάρια",    unit: "kg",     price: 4.68
    },
    {
        id: "tomato",      name: "Ντομάτα",                   plural: "Ντομάτες",    unit: "kg",     price: 1.50
    },
    {
        id: "mustard",      name: "Μουστάρδα",                   plural: null,    unit: "kg",     price: 2.78
    },
    {
        id: "olive_oil",      name: "Ελαιόλαδο",                   plural: null,    unit: "L",     price: 6.85
    },
    {
        id: "vodka",      name: "Βότκα",                   plural: null,    unit: "L",     price: 21.57
    },
    {
        id: "banana",      name: "Μπανάνα",                   plural: "Μπανάνες",    unit: "pc",     price: 0.30   /* TEMP */
    },
    {
        id: "farinap",      name: "Φαρινάπ",                   plural: null,    unit: "kg",     price: 1.71
    },
    {
        id: "corn_oil",      name: "Αραβοσιτέλαιο",                   plural: null,    unit: "L",     price: 1.75
    },
    {
        id: "melted_butter",      name: "Βούτυρο Λιωμένο",                   plural: null,    unit: "kg",     price: 11.96
    },
    {
        id: "mahleb",      name: "Μαχλέπι",                   plural: null,    unit: "kg",     price: 123.75
    },
    {
        id: "egg_yolk",      name: "Κρόκος Αυγού",                   plural: "Κρόκοι Αυγού",    unit: "pc",     price: 0.30
    },
    {
        id: "black_sesame",      name: "Μαύρο Σουσάμι",                   plural: null,    unit: "kg",     price: 9.90
    }
];