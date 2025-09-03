export const recipes = [
    {
        id: "error",
        title: "Συνταγή",
        link: null,
        description: "Κανονικά θα έπρεπε να βλέπεις μια συνταγή. Αλλά κάτι πήγε στραβά!",
        time: "0 min",
        portion: 0,
        servings: 0,
        servingsName: "Errors",
        picture: "https://img.freepik.com/premium-vector/chef-hat-logo-illustration_746614-100.jpg", // Tha ginei to logo tou site eventually
        tags: [],
        ingredients: [
            { id: "error", amount: 0, unit: "pc", label: "Για το Μείγμα" }
        ],
        steps: [
            { text: "Πολύ κρίμα που δεν υπάρχει καμιά συνταγή εδώ.", pic: null },
            { text: "Και τώρα τι;", pic: null },
            { text: "Πάνε πίσω στην αρχική να βρεις καμιά άλλη που δουλεύει.", pic: null },
        ]
    },
    {
        id: "koulourakia_me_portokali",
        title: "Κουλουράκια με Πορτοκάλι",
        link: "https://grec.homerenovation.space/%ce%b5%ce%be%ce%b1%ce%b9%cf%81%ce%b5%cf%84%ce%b9%ce%ba%ce%ac-%ce%ba%ce%bf%cf%85%ce%bb%ce%bf%cf%85%cf%81%ce%ac%ce%ba%ce%b9%ce%b1-%cf%80%ce%bf%ce%bb%cf%8d-%ce%bd%cf%8c%cf%83%cf%84%ce%b9%ce%bc%ce%b1/",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, facilis delectus. Eos quod nesciunt dolor soluta, voluptas dolorem tempora, nulla praesentium molestias ratione quibusdam accusantium quia magni adipisci perferendis incidunt!", /* TEMP */
        time: "40 λεπτά",
        portion: 1,
        servings: 26,
        servingsName: "Κουλουράκια",
        picture: "https://grec.homerenovation.space/wp-content/uploads/2025/01/464698757_934281512066155_1944707135533568616_n.jpg",
        tags: [ "Cookies", "Snack", "Dessert", "Easy", "Quick", "Everyday" ],
        ingredients: [
            { id: "str_yogurt",     amount: 200,    unit: "g",          label: "Για τη Ζύμη" },   // ingredient ID links to ingredient database
            { id: "seed_oil",       amount: 0.5,    unit: "kesedaki",   label: "Για τη Ζύμη" },
            { id: "sugar",          amount: 1,      unit: "cup",        label: "Για τη Ζύμη" },
            { id: "egg",            amount: 2,      unit: "pc",         label: "Για τη Ζύμη" },   /* TEMP (To Για τη Ζύμη na to kano "gia tin zimi"?) */
            { id: "vanilla",        amount: 2,      unit: "pc",         label: "Για τη Ζύμη" },
            { id: "orange_peel",    amount: 1,      unit: "scrape",     label: "Για τη Ζύμη" },
            { id: "baking_powder",  amount: 1,      unit: "tsp",        label: "Για τη Ζύμη" },
            { id: "a_p_flour",      amount: 400,    unit: "g",          label: "Για τη Ζύμη" }
        ],
        steps: [
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Σπορέλαιο, τη Ζάχαρη, τα Αυγά, τις Βανίλιες, το Ξύσμα Πορτοκαλιού, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά, ρίχνουμε το Αλεύρι και ανακατεύουμε.", pic: null },
            { text: "Πλάθεις σε ό,τι σχήμα θέλεις.", pic: null },
            { text: "Αλήφεις με αυγό χτυπημένο.", pic: null },
            { text: "Ψήνεις στους 180° με αέρα για 20-25 λεπτά.", pic: null }
        ]
    },
    {
        id: "tiropita_xoris_fillo",
        title: "Τυρόπιτα Χωρίς Φύλλο",
        link: "https://www.daddy-cool.gr/sintages/i-efkoli-pita-gia-archaries.html",
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "50 λεπτά",
        portion: 1,
        servings: 15,
        servingsName: "Κομμάτια",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535022.jpg",
        tags: [ "Pie", "Breakfast", "Dinner", "Easy", "Quick", "Kid-Friendly" ], 
        ingredients: [
            { id: "str_yogurt",     amount: 1,      unit: "cup",    label: "Για τη Ζύμη" },
            { id: "milk",           amount: 1,      unit: "cup",    label: "Για τη Ζύμη" },
            { id: "water",          amount: 1,      unit: "cup",    label: "Για τη Ζύμη" },
            { id: "sunflower_oil",  amount: 1,      unit: "cup",    label: "Για τη Ζύμη" },
            { id: "egg",            amount: 4,      unit: "pc",     label: "Για τη Ζύμη" },
            { id: "salt",           amount: 1,      unit: "pinch",  label: "Για τη Ζύμη" },   /* TEMP (To Για τη Ζύμη na to kano "gia tin zimi"?) */
            { id: "pepper",         amount: 1,      unit: "pinch",  label: "Για τη Ζύμη" },
            { id: "baking_powder",  amount: 1,      unit: "pc",     label: "Για τη Ζύμη" },
            { id: "feta_cheese",    amount: 300,    unit: "g",      label: "Για τη Ζύμη" },
            { id: "a_p_flour",      amount: 4,      unit: "cup",    label: "Για τη Ζύμη" }
        ],
        steps: [
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Γάλα, το Νερό, το Ηλιέλαιο, τα Αυγά, το Αλάτι, το Πιπέρι, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Αλεύρι και μετά το Τυρί και ανακατεύουμε.", pic: null },
            { text: "Βάζεις το μείγμα σε ταψί νούμερο 24.", pic: null },
            { text: "Ρίχνεις από πάνω Σουσάμι.", pic: null },
            { text: "Ψήνεις στους 200° με αέρα για 35 λεπτά.", pic: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535030.jpg" },
        ]
    },
    {
        id: "gliko_ioannas",
        title: "Γλυκό Ιωάννας",
        link: null,
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "1 ώρα & 15 λεπτά",
        portion: 1,
        servings: 20,
        servingsName: "Κομμάτια",
        picture: null, /* TEMP */
        tags: [ "Dessert", "Easy", "Everyday", "Holiday" ],
        ingredients: [
            { id: "butter",   amount: 3,      unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "sugar",          amount: 14,     unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "egg",            amount: 4,      unit: "pc",     label: "Για το Μείγμα" },
            { id: "milk",           amount: 14,     unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "vanilla",        amount: 2,      unit: "pc",     label: "Για το Μείγμα" },
            { id: "cocoa",          amount: 4,      unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "a_p_flour",          amount: 14,     unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "baking_powder",  amount: 1,      unit: "pc",     label: "Για το Μείγμα" },
            { id: "sugar",          amount: 1.5,    unit: "cup",     label: "Για το σιρόπι"   },
            { id: "water",          amount: 1.5,    unit: "cup",     label: "Για το σιρόπι"   },
            { id: "couverture",     amount: 125,    unit: "g",     label: "Για τον Γλάσο"   },
            { id: "milk_cream",          amount: 150,    unit: "g",     label: "Για τον Γλάσο"   }
        ],
        steps: [
            { text: "Σε ένα μπολ, ρίχνουμε το Βούτυρο, τη Ζάχαρη, τα Αυγά, το Γάλα, τις Βανίλιες και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Κακάο και το Μπέικιν στο Αλεύρι και ανακατεύουμε.", pic: null },
            { text: "Ρίχνουμε το Κακάο με το Μπέικιν και το Αλεύρι στο μείγμα και ανακατεύουμε.", pic: null },
            { text: "Ψήνουμε στους 180° με αέρα για 50 λεπτά.", pic: null },
            { text: "Για το σιρόπι: Βράζεις για 5 λεπτά την Ζάχαρη με το Νερό. Αν θες, ρίχνεις μια κουταλιά λεμόνι.", pic: null },
            { text: "Μόλις το βγάζουμε από τον φούρνο, ρίχνουμε το σιρόπι.", pic: null },
            { text: "Λιώνουμε την Κουβερτούρα με την Κρέμα Γάλακτος και όταν κρυώσει, τα ρίχνουμε από πάνω.", pic: null }
        ]
    },
    {
        id: "gliko_ntinas",
        title: "Γλυκό Ντίνας",
        link: null,
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "10 λεπτά",
        portion: 1,
        servings: 18,
        servingsName: "Κομμάτια",
        picture: null,
        tags: [ "Dessert", "Easy", "Quick", "Everyday", "Summer" ],
        ingredients: [
            { id: "biscuit",   amount: 300,      unit: "g",   label: "Για το Μείγμα" },
            { id: "evap_milk",          amount: 400,     unit: "g",   label: "Για το Μείγμα" },
            { id: "milk_cream",            amount: 500,      unit: "g",     label: "Για το Μείγμα" },
            { id: "cocoa",           amount: 2,     unit: "tbsp",   label: "Για το Μείγμα" },
            { id: "morfat",        amount: 250,      unit: "g",     label: "Για το Μείγμα" }
        ],
        steps: [
            { text: "Με ένα Μίξερ, χτυπάς το Ζαχαρούχο, την Κρέμα Γάλακτος και το Μόρφατ.", pic: null },
            { text: "Σε ένα τάπερ, στρώνεις τα Μπισκότα και ρίχνεις το μισό μείγμα.", pic: null },
            { text: "Από πάνω στρώνεις κι άλλα Μπισκότα", pic: null },
            { text: "Στο άλλο υπόλοιπο μισό του μείγματος, ρίχνεις το Κακάο και ανακατεύεις.", pic: null },
            { text: "Ρίχνεις το υπόλοιπο μείγμα πάνω στα Μπισκότα.", pic: null },
            { text: "Από πάνω ρίχνεις τριμμένα Μπισκότα.", pic: null },
            { text: "Βάζεις το γλυκό στο ψυγείο.", pic: null },
        ]
    },
    {
        id: "psaronefri_me_saltsa_moustardas",
        title: "Ψαρονέφρι με Σάλτσα Μουστάρδας",
        link: null, /* TEMP */
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "50 λεπτά", /* TEMP */
        portion: 1,
        servings: 15, /* TEMP */
        servingsName: "Κομμάτια", /* TEMP */
        picture: null, /* TEMP */
        tags: [ "Pie", "Breakfast", "Dinner", "Easy", "Quick", "Kid-Friendly" ],  /* TEMP */
        ingredients: [
            { id: "pork_tenderloin",   amount: 0.5,      unit: "kg",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "mushroom",          amount: 200,     unit: "g",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "tomato",            amount: 2,      unit: "pc",     label: "Για το Μείγμα" }, /* TEMP */
            { id: "milk_cream",           amount: 0.5,     unit: "pc",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "mustard",        amount: 2,      unit: "tbsp",     label: "Για το Μείγμα" },   /* TEMP (To Για το Μείγμα na to kano "gia to meigma"?) */
            { id: "salt",          amount: 1,      unit: "pinch",   label: "Για το Μείγμα" },
            { id: "pepper",          amount: 1,     unit: "pinch",   label: "Για το Μείγμα" }, /* TEMP (AP FLOUR?) */
            { id: "olive_oil",  amount: 1,      unit: "pc",     label: "Για το Μείγμα" },
            { id: "vodka",          amount: 1,    unit: "cup",     label: "Για το Μείγμα"   } /* TEMP (1.5 ti?) */
        ],
        steps: [    /* TEMP */
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Γάλα, το Νερό, το Ηλιέλαιο, τα Αυγά, το Αλάτι, το Πιπέρι, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Αλεύρι και μετά το Τυρί και ανακατεύουμε.", pic: null },
            { text: "Βάζεις το μείγμα σε ταψί νούμερο 24.", pic: null },
            { text: "Ρίχνεις από πάνω Σουσάμι.", pic: null },
            { text: "Ψήνεις στους 200° με αέρα για 35 λεπτά.", pic: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535030.jpg" },
        ]
    },
    {
        id: "keik_banana",
        title: "Κέικ Μπανάνα",
        link: null, /* TEMP */
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "50 λεπτά", /* TEMP */
        portion: 1,
        servings: 15, /* TEMP */
        servingsName: "Κομμάτια", /* TEMP */
        picture: null, /* TEMP */
        tags: [ "Pie", "Breakfast", "Dinner", "Easy", "Quick", "Kid-Friendly" ],  /* TEMP */
        ingredients: [
            { id: "egg",   amount: 2,      unit: "pc",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "seed_oil",          amount: 0.5,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "milk",            amount: 0.5,      unit: "cup",     label: "Για το Μείγμα" }, /* TEMP */
            { id: "sugar",           amount: 1,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "banana",        amount: 2,      unit: "pc",     label: "Για το Μείγμα" },   /* TEMP (To Για το Μείγμα na to kano "gia to meigma"?) */
            { id: "farinap",          amount: 2,      unit: "cup",   label: "Για το Μείγμα" },
            { id: "baking_powder",          amount: 1,     unit: "pc",   label: "Για το Μείγμα" }, /* TEMP (AP FLOUR?) */
            { id: "couverture",  amount: 1,      unit: "pc",     label: "Για το Μείγμα" }
        ],
        steps: [    /* TEMP */
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Γάλα, το Νερό, το Ηλιέλαιο, τα Αυγά, το Αλάτι, το Πιπέρι, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Αλεύρι και μετά το Τυρί και ανακατεύουμε.", pic: null },
            { text: "Βάζεις το μείγμα σε ταψί νούμερο 24.", pic: null },
            { text: "Ρίχνεις από πάνω Σουσάμι.", pic: null },
            { text: "Ψήνεις στους 200° με αέρα για 35 λεπτά.", pic: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535030.jpg" },
        ]
    },
    {
        id: "koulourakia_politika",
        title: "Κουλουράκια Πολίτικα",
        link: null, /* TEMP */
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "50 λεπτά", /* TEMP */
        portion: 1,
        servings: 15, /* TEMP */
        servingsName: "Κομμάτια", /* TEMP */
        picture: null, /* TEMP */
        tags: [ "Pie", "Breakfast", "Dinner", "Easy", "Quick", "Kid-Friendly" ],  /* TEMP */
        ingredients: [
            { id: "flour",   amount: 3,      unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "milk",          amount: 0.5,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "corn_oil",            amount: 0.25,      unit: "cup",     label: "Για το Μείγμα" }, /* TEMP */
            { id: "melted_butter",           amount: 0.5,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "baking_powder",        amount: 1,      unit: "tsp",     label: "Για το Μείγμα" },   /* TEMP (To Για το Μείγμα na to kano "gia to meigma"?) */
            { id: "mahleb",          amount: 1,      unit: "tsp",   label: "Για το Μείγμα" },
            { id: "sugar",          amount: 2,     unit: "tbsp",   label: "Για το Μείγμα" }, /* TEMP (AP FLOUR?) */
            { id: "salt",  amount: 1,      unit: "tsp",     label: "Για το Μείγμα" },
            { id: "egg",          amount: 1,     unit: "pc",   label: "Για το Μείγμα" },
            { id: "egg_yolk",          amount: 1,     unit: "pc",   label: "Για το Μείγμα" },
            { id: "black_sesame",          amount: 1,     unit: "pc",   label: "Για την Επικάλυψη" }
        ],
        steps: [    /* TEMP */
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Γάλα, το Νερό, το Ηλιέλαιο, τα Αυγά, το Αλάτι, το Πιπέρι, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Αλεύρι και μετά το Τυρί και ανακατεύουμε.", pic: null },
            { text: "Βάζεις το μείγμα σε ταψί νούμερο 24.", pic: null },
            { text: "Ρίχνεις από πάνω Σουσάμι.", pic: null },
            { text: "Ψήνεις στους 200° με αέρα για 35 λεπτά.", pic: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535030.jpg" },
        ]
    },
    {
        id: "kokoras_krasatos",
        title: "Κόκορας Κρασάτος",
        link: null, /* TEMP */
        description: "πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτπιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ πιταπιταπιταπιταπιτ", /* TEMP */
        time: "50 λεπτά", /* TEMP */
        portion: 1,
        servings: 15, /* TEMP */
        servingsName: "Κομμάτια", /* TEMP */
        picture: null, /* TEMP */
        tags: [ "Pie", "Breakfast", "Dinner", "Easy", "Quick", "Kid-Friendly" ],  /* TEMP */
        ingredients: [
            { id: "rooster",   amount: 1,      unit: "pc",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "milk",          amount: 0.5,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "corn_oil",            amount: 0.25,      unit: "cup",     label: "Για το Μείγμα" }, /* TEMP */
            { id: "melted_butter",           amount: 0.5,     unit: "cup",   label: "Για το Μείγμα" }, /* TEMP */
            { id: "baking_powder",        amount: 1,      unit: "tsp",     label: "Για το Μείγμα" },   /* TEMP (To Για το Μείγμα na to kano "gia to meigma"?) */
            { id: "mahleb",          amount: 1,      unit: "tsp",   label: "Για το Μείγμα" },
            { id: "sugar",          amount: 2,     unit: "tbsp",   label: "Για το Μείγμα" }, /* TEMP (AP FLOUR?) */
            { id: "salt",  amount: 1,      unit: "tsp",     label: "Για το Μείγμα" },
            { id: "egg",          amount: 1,     unit: "pc",   label: "Για το Μείγμα" },
            { id: "egg_yolk",          amount: 1,     unit: "pc",   label: "Για το Μείγμα" },
            { id: "black_sesame",          amount: 1,     unit: "pc",   label: "Για την Επικάλυψη" }
        ],
        steps: [    /* TEMP */
            { text: "Σε ένα μπολ, ρίχνουμε το Γιαούρτι, το Γάλα, το Νερό, το Ηλιέλαιο, τα Αυγά, το Αλάτι, το Πιπέρι, το Μπέικιν και ανακατεύουμε.", pic: null },
            { text: "Μετά ρίχνουμε το Αλεύρι και μετά το Τυρί και ανακατεύουμε.", pic: null },
            { text: "Βάζεις το μείγμα σε ταψί νούμερο 24.", pic: null },
            { text: "Ρίχνεις από πάνω Σουσάμι.", pic: null },
            { text: "Ψήνεις στους 200° με αέρα για 35 λεπτά.", pic: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535030.jpg" },
        ]
    }
];
