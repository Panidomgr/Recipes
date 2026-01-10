/* --- INGREDIENTS DATABASE --- */
/* Used primarily for the Search Filter Menu to get the correct names */
export const ingredients = [
    { id: "error", name: "Υλικό", plural: "Υλικά" },
    { id: "str_yogurt", name: "Στραγγιστό Γιαούρτι", plural: null },
    { id: "seed_oil", name: "Σπορέλαιο", plural: null },
    { id: "sugar", name: "Ζάχαρη", plural: null },
    { id: "egg", name: "Αυγό", plural: "Αυγά" },
    { id: "vanilla", name: "Βανίλια", plural: "Βανίλιες" },
    { id: "orange_peel", name: "Φλούδα Πορτοκαλιού", plural: null },
    { id: "baking_powder", name: "Μπέικιν", plural: null },
    { id: "a_p_flour", name: "Αλεύρι Γ.Ο.Χ.", plural: null },
    { id: "milk", name: "Γάλα", plural: null },
    { id: "water", name: "Νερό", plural: null },
    { id: "sunflower_oil", name: "Ηλιέλαιο", plural: null },
    { id: "salt", name: "Αλάτι", plural: null },
    { id: "pepper", name: "Πιπέρι", plural: null },
    { id: "feta_cheese", name: "Τυρί", plural: "Τυριά" },
    { id: "butter", name: "Βούτυρο", plural: null },
    { id: "cocoa", name: "Κακάο", plural: null },
    { id: "couverture", name: "Κουβερτούρα", plural: "Κουβερτούρες" },
    { id: "biscuit", name: "Μπισκότο", plural: "Μπισκότα" },
    { id: "evap_milk", name: "Ζαχαρούχο", plural: "Ζαχαρούχα" },
    { id: "milk_cream", name: "Κρέμα Γάλακτος", plural: null },
    { id: "morfat", name: "Μόρφατ", plural: null },
    { id: "tomato", name: "Ντομάτα", plural: "Ντομάτες" },
    { id: "mustard", name: "Μουστάρδα", plural: null },
    { id: "olive_oil", name: "Ελαιόλαδο", plural: null },
    { id: "egg_yolk", name: "Κρόκος Αυγού", plural: "Κρόκοι Αυγού" },
    { id: "lemon_juice", name: "Χυμός Λεμόνι", plural: null },
    { id: "sesame", name: "Σουσάμι", plural: null },
    { id: "beef_neck", name: "Μοσχαρίσιος Λαιμός", plural: null },
    { id: "onion", name: "Μέλι", plural: null },
    { id: "potato", name: "Μέλι", plural: null },
    { id: "red_pepper", name: "Μέλι", plural: null },
    { id: "green_pepper", name: "Μέλι", plural: null },
    { id: "garlic", name: "Μέλι", plural: null },
    { id: "tomato_paste", name: "Μέλι", plural: null },
    { id: "thyme", name: "Μέλι", plural: null },
    { id: "paprika", name: "Μέλι", plural: null },
    { id: "bay_leaves", name: "Μέλι", plural: null },
    { id: "dry_yeast", name: "Μέλι", plural: null },
    { id: "pizza_sauce", name: "Μέλι", plural: null },
    { id: "ham_shoulder", name: "Μέλι", plural: null },
    { id: "gouda_cheese", name: "Μέλι", plural: null },
    { id: "mozarella_cheese", name: "Μέλι", plural: null }
];

/* --- ORIGINAL RECIPES (Displayed in recipe.html) --- */
export const originalRecipes = [
    {
        id: "gliko_ioannas",
        title: "Γλυκό Ιωάννας",
        description: "Σιροπιαστό σοκολατένιο γλυκό με γλάσο, πλούσιο και απολαυστικό",
        time: "1 ώρα & 15 λεπτά",
        servings: 20,
        servingsName: "Κομμάτια",
        picture: null,
        tags: ["Dessert", "Easy", "Everyday", "Holiday"],
        ingredients: [
            { id: "butter", amount: 3, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "sugar", amount: 14, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "egg", amount: 4, unit: "", label: "Για το Μείγμα" }, /* Empty unit for pieces/count */
            { id: "milk", amount: 14, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "vanilla", amount: 2, unit: "", label: "Για το Μείγμα" },
            { id: "cocoa", amount: 4, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "a_p_flour", amount: 14, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "baking_powder", amount: 1, unit: "", label: "Για το Μείγμα" },
            { id: "sugar", amount: 1.5, unit: "κούπα", label: "Για το Σιρόπι" },
            { id: "water", amount: 1.5, unit: "κούπα", label: "Για το Σιρόπι" },
            { id: "lemon_juice", amount: 1, unit: "κ.γ.", label: "Για το Σιρόπι" },
            { id: "couverture", amount: 125, unit: "γρ.", label: "Για τον Γλάσο" },
            { id: "milk_cream", amount: 150, unit: "γρ.", label: "Για τον Γλάσο" }
        ],
        steps: [
            { text: "Σε μπολ χτυπάμε Βούτυρο, Ζάχαρη, Αυγά, Γάλα και Βανίλιες.", pic: null },
            { text: "Σε άλλο μπολ ανακατεύουμε Αλεύρι, Κακάο και Μπέικιν.", pic: null },
            { text: "Προσθέτουμε τα στεγνά υλικά στο μείγμα και ομογενοποιούμε.", pic: null },
            { text: "Ψήνουμε στους 180°C με αέρα για 50 λεπτά.", pic: null },
            { text: "Ετοιμάζουμε σιρόπι βράζοντας Ζάχαρη και Νερό για 5 λεπτά (προαιρετικά με λίγο Λεμόνι).", pic: null },
            { text: "Μόλις βγει από τον φούρνο, περιχύνουμε με το σιρόπι.", pic: null },
            { text: "Λιώνουμε Κουβερτούρα με Κρέμα Γάλακτος, αφήνουμε να κρυώσει και απλώνουμε από πάνω.", pic: null }
        ]
    },
    {
        id: "gliko_ntinas",
        title: "Γλυκό Ντίνας",
        description: "Δροσερό γλυκό ψυγείου με μπισκότα και σοκολατένια κρέμα.",
        time: "10 λεπτά",
        servings: 18,
        servingsName: "Κομμάτια",
        picture: null,
        tags: ["Dessert", "Easy", "Quick", "Everyday", "Summer"],
        ingredients: [
            { id: "biscuit", amount: 300, unit: "γρ.", label: "Για το Μείγμα" },
            { id: "evap_milk", amount: 400, unit: "γρ.", label: "Για το Μείγμα" },
            { id: "milk_cream", amount: 500, unit: "γρ.", label: "Για το Μείγμα" },
            { id: "cocoa", amount: 2, unit: "κ.σ.", label: "Για το Μείγμα" },
            { id: "morfat", amount: 250, unit: "γρ.", label: "Για το Μείγμα" }
        ],
        steps: [
            { text: "Χτυπάμε με μίξερ το Ζαχαρούχο, την Κρέμα Γάλακτος και το Μόρφατ.", pic: null },
            { text: "Σε τάπερ στρώνουμε Μπισκότα και ρίχνουμε το μισό μείγμα.", pic: null },
            { text: "Καλύπτουμε με δεύτερη στρώση Μπισκότα.", pic: null },
            { text: "Στο υπόλοιπο μείγμα προσθέτουμε το Κακάο και ανακατεύουμε.", pic: null },
            { text: "Απλώνουμε το σοκολατένιο μείγμα πάνω από τα Μπισκότα.", pic: null },
            { text: "Πασπαλίζουμε με τριμμένα Μπισκότα.", pic: null },
            { text: "Βάζουμε στο ψυγείο να παγώσει.", pic: null },
        ]
    }
];

/* --- EXTERNAL RECIPES (Link to other sites) --- */
export const externalRecipes = [
    {
        // id: "koulourakia_me_portokali",
        title: "Κουλουράκια με Πορτοκάλι",
        link: "https://www.xrysessyntages.gr/εξαιρετικά-κουλουράκια-πολύ-νόστιμα/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2020/08/117931567_180662550100638_5982672690733936817_o.jpg.webp",
        tags: ["Cookies", "Snack", "Dessert", "Easy"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        // id: "tiropita_xoris_fillo",
        title: "Τυρόπιτα Χωρίς Φύλλο",
        link: "https://www.daddy-cool.gr/sintages/i-efkoli-pita-gia-archaries.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535022.jpg",
        tags: ["Pie", "Breakfast", "Easy"],
        ingredients: ["str_yogurt", "milk", "water", "sunflower_oil", "egg", "salt", "pepper", "a_p_flour", "baking_powder", "feta_cheese", "butter", "sesame"]
    },
    {
        // id: "mosxaraki_eksoxiko",
        title: "Μοσχαράκι Εξοχικό στη Λαδόκολλα",
        link: "https://www.facebook.com/watch/?ref=saved&v=522237107524617",
        type: "facebook",
        picture: "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/489928578_1311435503676999_5795426143933572115_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AgLSiE9-_GoQ7kNvwFslKwV&_nc_oc=Adl0Lqv1w8yIZ2atmajoyw_dIMo60PmvYiBer9rZUQkw5BZyjHUrU5qwFrSmnaRzZNPuFBU51n2e9Oyl-1JTXfE-&_nc_zt=23&_nc_ht=scontent.fskg1-1.fna&_nc_gid=SELhUqFM_fWJezVMb2_VZw&oh=00_AfpB08HAz4wXWNqqRXzj3g_E1b4RBwN74mXgvH2rcw8e8g&oe=69689112",
        tags: ["Pie", "Breakfast", "Easy"],
        ingredients: ["beef_neck", "onion", "tomato", "potato", "red_pepper", "green_pepper", "garlic", "tomato_paste", "mustard", "olive_oil", "water", "salt", "thyme", "paprika", "pepper", "bay_leaves"]
    },
    {
        // id: "tiropita_xoris_fillo",
        title: "Πίτσα της Τεμπέλας",
        link: "https://youtu.be/WjlTfn8fjYU",
        type: "youtube",
        picture: "https://i.ytimg.com/vi/WjlTfn8fjYU/hqdefault.jpg",
        tags: ["Pie", "Breakfast", "Easy"],
        ingredients: ["a_p_flour", "water", "dry_yeast", "butter", "salt", "sugar", "olive_oil", "pizza_sauce", "red_pepper", "ham_shoulder", "gouda_cheese", "mozarella_cheese"]
    }/*,
    {
        // id: "psaronefri",
        title: "Ψαρονέφρι με Μουστάρδα",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Dinner", "Meat"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        // id: "keik_banana",
        title: "Κέικ Μπανάνα",
        link: "https://google.com",
        type: "youtube",
        picture: null,
        tags: ["Cake", "Fruit"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        // id: "koulourakia_politika",
        title: "Κουλουράκια Πολίτικα",
        link: "https://google.com",
        type: "facebook",
        picture: null,
        tags: ["Traditional", "Snack"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        // id: "kokoras_krasatos",
        title: "Κόκορας Κρασάτος",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Traditional", "Dinner"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        // id: "melomakarona",
        title: "Μελομακάρονα",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Christmas", "Dessert"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    }*/
];