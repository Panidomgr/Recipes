/* --- INGREDIENTS DATABASE --- */
/* Used primarily for the Search Filter Menu to get the correct names */
export const ingredients = [
    { id: "error", name: "Υλικό", plural: "Υλικά" },
    
    /* --- Dairy & Eggs --- */
    { id: "str_yogurt", name: "Στραγγιστό Γιαούρτι", plural: null },
    { id: "yogurt", name: "Γιαούρτι", plural: null },
    { id: "goat_yogurt", name: "Κατσικίσιο Γιαούρτι", plural: null },
    { id: "milk", name: "Γάλα", plural: null },
    { id: "evap_milk", name: "Ζαχαρούχο", plural: "Ζαχαρούχα" },
    { id: "milk_cream", name: "Κρέμα Γάλακτος", plural: null }, /* General or light */
    { id: "heavy_cream", name: "Κρέμα Γάλακτος (35%)", plural: null },
    { id: "butter", name: "Βούτυρο", plural: null },
    { id: "milk_butter", name: "Βούτυρο Γάλακτος", plural: null },
    { id: "margarine", name: "Μαργαρίνη", plural: null },
    { id: "melted_margarine", name: "Λιωμένη Μαργαρίνη", plural: null },
    { id: "egg", name: "Αυγό", plural: "Αυγά" },
    { id: "egg_yolk", name: "Κρόκος Αυγού", plural: "Κρόκοι Αυγού" },
    { id: "egg_white", name: "Ασπράδι Αυγού", plural: "Ασπράδια Αυγού" },

    /* --- Cheeses --- */
    { id: "feta", name: "Τυρί (Φέτα)", plural: "Τυριά" }, /* Renamed for clarity if it's meant to be Feta */
    { id: "cheese", name: "Τυρί", plural: "Τυριά" }, /* Generic */
    { id: "gouda", name: "Γκούντα", plural: null },
    { id: "edam", name: "Ένταμ", plural: null },
    { id: "regato", name: "Ρεγκάτο", plural: null },
    { id: "parmesan", name: "Παρμεζάνα", plural: null },
    { id: "graviera", name: "Γραβιέρα", plural: null },
    { id: "grated_graviera", name: "Γραβιέρα Τριμμένη", plural: null },
    { id: "kefalotyri", name: "Κεφαλοτύρι", plural: null },
    { id: "kefalograviera", name: "Κεφαλογραβιέρα", plural: null },
    { id: "mozzarella", name: "Μοτσαρέλα", plural: null },
    { id: "cream_cheese", name: "Τυρί Κρέμα", plural: null },
    { id: "cheese_mix", name: "Μείγμα Τυριών", plural: null },
    { id: "grated_cheese", name: "Τριμμένο Τυρί", plural: null },

    /* --- Meats --- */
    { id: "beef_neck", name: "Μοσχαρίσιος Λαιμός", plural: null },
    { id: "ground_beef", name: "Μοσχαρίσιος Κιμάς", plural: null },
    { id: "pork", name: "Χοιρινό", plural: null },
    { id: "ground_pork", name: "Χοιρινός Κιμάς", plural: null },
    { id: "ham_shoulder", name: "Χοιρινή Ωμοπλάτη", plural: null },
    { id: "ham", name: "Ζαμπόν", plural: null },
    { id: "shredded_ham", name: "Ζαμπόν Τριμμένο", plural: null },
    { id: "chopped_ham", name: "Ζαμπόν Ψιλοκομμένο", plural: null },
    { id: "bacon", name: "Μπέικον", plural: null },
    { id: "frankfurt_sausage", name: "Λουκάνικο Φρανκφούρτης", plural: "Λουκάνικα Φρανκφούρτης" },
    { id: "chicken", name: "Κοτόπουλο", plural: null },
    { id: "chicken_breast", name: "Στήθος Κοτόπουλο", plural: null },
    { id: "goat", name: "Κατσίκι", plural: null },
    { id: "lamb_thigh", name: "Αρνίσιο Μπούτι", plural: null },
    { id: "pork_knuckle", name: "Χοιρινό Κότσι", plural: "Χοιρινά Κότσια" },

    /* --- Produce (Vegetables/Fruits) --- */
    { id: "tomato", name: "Ντομάτα", plural: "Ντομάτες" },
    { id: "cherry_tomato", name: "Ντοματίνι", plural: "Ντοματίνια" },
    { id: "onion", name: "Κρεμμύδι", plural: "Κρεμμύδια" },
    { id: "potato", name: "Πατάτα", plural: "Πατάτες" },
    { id: "baby_potato", name: "Πατάτα Baby", plural: "Πατάτες Baby" },
    { id: "garlic", name: "Σκόρδο", plural: "Σκόρδα" },
    { id: "leek", name: "Πράσο", plural: "Πράσα" },
    { id: "carrot", name: "Καρότο", plural: "Καρότα" },
    { id: "eggplant", name: "Μελιτζάνα", plural: "Μελιτζάνες" },
    { id: "mushroom", name: "Μανιτάρι", plural: "Μανιτάρια" },
    { id: "corn", name: "Καλαμπόκι", plural: null },
    { id: "red_pepper", name: "Κόκκινη Πιπεριά", plural: "Κόκκινες Πιπεριές" },
    { id: "green_pepper", name: "Πράσινη Πιπεριά", plural: "Πράσινες Πιπεριές" },
    { id: "florina_pepper", name: "Πιπεριά Φλωρίνης", plural: "Πιπεριές Φλωρίνης" }, /* Unified ID */
    { id: "florina_peppers", name: "Πιπεριές Φλωρίνης", plural: null }, /* Kept for compatibility if used */
    { id: "orange", name: "Πορτοκάλι", plural: "Πορτοκάλια" },
    { id: "orange_peel", name: "Φλούδα Πορτοκαλιού", plural: null },
    { id: "orange_zest", name: "Ξύσμα Πορτοκαλιού", plural: null },
    { id: "orange_juice", name: "Χυμός Πορτοκάλι", plural: null },
    { id: "lemon_juice", name: "Χυμός Λεμόνι", plural: null },
    { id: "olive", name: "Ελιά", plural: "Ελιές" },

    /* --- Pantry & Baking --- */
    { id: "a_p_flour", name: "Αλεύρι Γ.Ο.Χ.", plural: null },
    { id: "s_r_flour", name: "Αλεύρι που Φουσκώνει Μόνο Του (Φαρίνα)", plural: null },
    { id: "bread_flour", name: "Αλεύρι για Τσουρέκι/Ψωμί (Σκληρό)", plural: null },
    { id: "whole_wheat_flour", name: "Αλεύρι Ολικής", plural: null },
    { id: "flour", name: "Αλεύρι", plural: null }, /* Generic */
    { id: "corn_flour", name: "Κορν Φλάουρ", plural: null },
    { id: "sugar", name: "Ζάχαρη", plural: null },
    { id: "powdered_sugar", name: "Ζάχαρη Άχνη", plural: null },
    { id: "baking_powder", name: "Μπέικιν", plural: null },
    { id: "baking_soda", name: "Μαγειρική Σόδα", plural: null },
    { id: "dry_yeast", name: "Ξηρή Μαγιά", plural: null },
    { id: "instant_yeast", name: "Μαγιά Στιγμής", plural: null },
    { id: "vanilla", name: "Βανίλια", plural: "Βανίλιες" },
    { id: "cocoa", name: "Κακάο", plural: null },
    { id: "couverture", name: "Κουβερτούρα", plural: "Κουβερτούρες" },
    { id: "milk_chocolate", name: "Σοκολάτα Γάλακτος", plural: null },
    { id: "chocolate_drops", name: "Σταγόνες Σοκολάτας", plural: null },
    { id: "merenda", name: "Μερέντα", plural: null },
    { id: "morfat", name: "Μόρφατ", plural: null },
    { id: "whipped_topping_mix", name: "Σκόνη Σαντιγί (Garni)", plural: null },
    { id: "biscuit", name: "Μπισκότο", plural: "Μπισκότα" },
    { id: "breadcrumbs", name: "Φρυγανιά Τριμμένη", plural: null },
    { id: "rice", name: "Ρύζι", plural: null },
    { id: "phyllo_dough", name: "Φύλλο Κρούστας", plural: "Φύλλα Κρούστας" },
    { id: "puff_pastry_sheet", name: "Φύλλο Σφολιάτας", plural: "Φύλλα Σφολιάτας" },
    { id: "kadaifi", name: "Φύλλο Κανταΐφι", plural: null },
    { id: "pizza_sauce", name: "Σως Πίτσας", plural: null },
    { id: "tomato_paste", name: "Τοματοπολτός", plural: null },
    { id: "tomato_sauce", name: "Σάλτσα Ντομάτας", plural: null },
    { id: "mayo", name: "Μαγιονέζα", plural: null },
    { id: "mustard", name: "Μουστάρδα", plural: null },
    { id: "vinegar", name: "Ξίδι", plural: null },
    { id: "red_vinegar", name: "Κόκκινο Ξίδι", plural: null },
    { id: "balsamic_vinegar", name: "Βαλσαμικό Ξίδι", plural: null },
    { id: "apple_cider_vinegar", name: "Μηλόξιδο", plural: null },
    { id: "olive_oil", name: "Ελαιόλαδο", plural: null },
    { id: "seed_oil", name: "Σπορέλαιο", plural: null },
    { id: "sunflower_oil", name: "Ηλιέλαιο", plural: null },
    { id: "vegetable_oil", name: "Φυτικό Λάδι", plural: null },
    { id: "oil", name: "Λάδι", plural: null },
    { id: "water", name: "Νερό", plural: null },
    { id: "white_wine", name: "Λευκό Κρασί", plural: null },
    { id: "cognac", name: "Κονιάκ", plural: null },
    { id: "chicken_cube", name: "Κύβος Κοτόπουλου", plural: "Κύβοι Κοτόπουλου" },
    { id: "cube", name: "Κύβος Ζωμού", plural: "Κύβοι Ζωμού" },
    { id: "bread", name: "Ψωμί", plural: "Ψωμιά" },
    { id: "pickle", name: "Αγγουράκι Τουρσί", plural: "Αγγουράκια Τουρσί" },
    { id: "pickles", name: "Τουρσί", plural: null },

    /* --- Herbs, Spices & Nuts --- */
    { id: "salt", name: "Αλάτι", plural: null },
    { id: "pepper", name: "Πιπέρι", plural: null },
    { id: "oregano", name: "Ρίγανη", plural: null },
    { id: "thyme", name: "Θυμάρι", plural: null },
    { id: "paprika", name: "Πάπρικα", plural: null },
    { id: "cinnamon", name: "Κανέλα", plural: null },
    { id: "cinnamon_stick", name: "Ξύλο Κανέλας", plural: "Ξύλα Κανέλας" },
    { id: "whole_clove", name: "Γαρίφαλο (Ολόκληρο)", plural: "Γαρίφαλα (Ολόκληρα)" },
    { id: "ground_clove", name: "Γαρίφαλο Σκόνη", plural: null },
    { id: "cumin", name: "Κύμινο", plural: null },
    { id: "turmeric", name: "Κουρκουμάς", plural: null },
    { id: "cardamom", name: "Κακουλέ", plural: null },
    { id: "makhlepi", name: "Μαχλέπι", plural: null },
    { id: "mastic_powder", name: "Μαστίχα Σκόνη", plural: null },
    { id: "sweet_chili_flakes", name: "Μπούκοβο", plural: null },
    { id: "bay_leaves", name: "Φύλλο Δάφνης", plural: "Φύλλα Δάφνης" },
    { id: "parsley", name: "Μαϊντανός", plural: null },
    { id: "dill", name: "Άνηθος", plural: null },
    { id: "spearmint", name: "Δυόσμος", plural: null },
    { id: "basil", name: "Βασιλικός", plural: null },
    { id: "rosemary", name: "Δενδρολίβανο", plural: null },
    { id: "sesame", name: "Σουσάμι", plural: null },
    { id: "nuts", name: "Ξηροί Καρποί", plural: null },
    { id: "shredded_coconut", name: "Ινδοκάρυδο", plural: null },
    { id: "chopped_walnut", name: "Καρύδι Ψιλοκομμένο", plural: "Καρύδια Ψιλοκομμένα" },
    { id: "chopped_almonds", name: "Αμύγδαλο Ψιλοκομμένο", plural: "Αμύγδαλα Ψιλοκομμένα" },
    { id: "black_raisin", name: "Μαύρη Σταφίδα", plural: "Μαύρες Σταφίδες" }
];

/* --- ORIGINAL RECIPES --- */
export const originalRecipes = [
    {
        id: "gliko_ioannas",
        title: "Γλυκό Ιωάννας",
        description: "Σιροπιαστό σοκολατένιο γλυκό με γλάσο, πλούσιο και απολαυστικό",
        time: "1 ώρα & 15 λεπτά",
        servings: 20,
        servingsName: "Κομμάτια",
        picture: null,
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα"],
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
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα"],
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
        title: "Κουλουράκια με Πορτοκάλι",
        link: "https://www.xrysessyntages.gr/εξαιρετικά-κουλουράκια-πολύ-νόστιμα/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2020/08/117931567_180662550100638_5982672690733936817_o.jpg.webp",
        tags: ["Σνακ", "Γλυκά", "Εύκολα", "Γρήγορα", "Καθημερινά"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        title: "Τυρόπιτα Χωρίς Φύλλο",
        link: "https://www.daddy-cool.gr/sintages/i-efkoli-pita-gia-archaries.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535022.jpg",
        tags: ["Πίτες", "Εύκολα", "Γρήγορα", "Σνακ", "Καθημερινά"],
        ingredients: ["str_yogurt", "milk", "water", "sunflower_oil", "egg", "salt", "pepper", "a_p_flour", "baking_powder", "feta", "butter", "sesame"]
    },
    {
        title: "Μοσχαράκι Εξοχικό στη Λαδόκολλα",
        link: "https://live-kitchen.gr/mosxari-laxanika-saltsa/",
        type: "generic",
        picture: "https://live-kitchen.gr/wp-content/uploads/2025/05/enhanced_P1025587-00_03_50_14-Still003s.jpg",
        tags: ["Εύκολα", "Φαγητά", "Κυριακάτικα"],
        ingredients: ["beef_neck", "onion", "tomato", "potato", "red_pepper", "green_pepper", "garlic", "tomato_paste", "mustard", "olive_oil", "water", "salt", "thyme", "paprika", "pepper", "bay_leaves", "parsley"]
    },
    {
        title: "Πίτσα της Τεμπέλας",
        link: "https://youtu.be/WjlTfn8fjYU",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_2_pjkh6k.png",
        tags: ["Εύκολα", "Γρήγορα", "Σνακ", "Καθημερινά"],
        ingredients: ["a_p_flour", "water", "dry_yeast", "butter", "salt", "sugar", "olive_oil", "pizza_sauce", "red_pepper", "ham_shoulder", "gouda", "mozzarella"]
    },
    {
        title: "Μπιφτέκια με Πατάτες στο Φούρνο",
        link: "https://www.argiro.gr/recipe/mpiftekia-me-patates-sto-fourno/",
        type: "generic",
        picture: "https://www.argiro.gr/wp-content/uploads/2022/01/mpiftekia-afrata-lemonates-patates-fournou-1.jpg",
        tags: ["Φαγητά", "Κυριακάτικα", "Μέτριας Δυσκολίας"],
        ingredients: ["ground_beef", "onion", "tomato", "bread", "red_vinegar", "olive_oil", "oregano", "salt", "pepper", "potato", "mustard", "lemon_juice", "water"]
    },
    {
        title: "Χοιρινή Πρασοτηγανιά",
        link: "https://www.facebook.com/watch/?ref=saved&v=755730117157153",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_3_ig7cdh.png",
        tags: ["Φαγητά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["pork", "olive_oil", "white_wine", "oregano", "sweet_chili_flakes", "leek", "garlic", "salt", "pepper", "water", "lemon_juice", "mustard"]
    },
    {
        title: "Μπισκότα Μερέντας",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0kfyBaqN2vGMgV4nzbFUVePYfDmo24xKg1Nw7kSVYJy9h9HbRH3DAk5JhW1Yk2xcSl&id=100040746672864",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745239/619994648_1746551283379744_7761617620979344561_n_m14phx.jpg",
        tags: ["Μπισκότα", "Γλυκά", "Εύκολα", "Καθημερινά", "Γρήγορα"],
        ingredients: ["a_p_flour", "baking_powder", "egg", "merenda"]
    },
    {
        title: "Νηστίσιμα Μαλακά Μπισκοτάκια",
        link: "https://www.facebook.com/spitikakaiapla/posts/pfbid0GCPHRtWMBh1gPeqc3TTn5L3UnzZoKFEVJW4VVwH9kgcCA5oVEv8wsYxdtZ2iBHF2l",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745239/621839541_18097469380930281_4524938771556702393_n_rxxnxy.jpg",
        tags: ["Μπισκότα", "Γλυκά", "Εύκολα"],
        ingredients: ["a_p_flour", "vanilla", "baking_soda", "salt", "cocoa", "margarine", "sugar", "cognac", "chocolate_drops", "vinegar"]
    },
    {
        title: "Τυροπιτάκια Κρουασάν",
        link: "https://www.facebook.com/watch/?ref=saved&v=1557595822248375",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_4_agaazt.png",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "sugar", "dry_yeast", "egg_white", "vegetable_oil", "salt", "a_p_flour", "cheese", "egg_yolk", "sesame"]
    },
    {
        title: "Αφράτα Αλμυρά Κουλουράκια",
        link: "https://www.facebook.com/watch/?ref=saved&v=2150281822131092",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745241/Screenshot_5_y9evku.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["s_r_flour", "salt", "paprika", "regato", "vegetable_oil", "water", "egg_yolk"]
    },
    {
        title: "Ατομικά Τσουρεκάκια με Σοκολάτα",
        link: "https://youtu.be/RHPx_b4WbG4",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745241/Screenshot_6_u2bsyi.png",
        tags: ["Γλυκά", "Σνακ", "Μέτριας Δυσκολίας"],
        ingredients: ["bread_flour", "sugar", "dry_yeast", "milk", "butter", "egg", "salt", "orange", "makhlepi", "mastic_powder", "vanilla", "milk_chocolate", "sesame"]
    },
    {
        title: "Ζαμπονοκασεροπιτάκια",
        link: "https://www.facebook.com/watch/?ref=saved&v=1545210256661302",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_7_in8ptn.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["s_r_flour", "egg", "str_yogurt", "olive_oil", "salt", "grated_graviera", "shredded_ham", "egg_yolk", "milk", "sesame"]
    },
    {
        title: "Τραγανές Πλεξούδες Σφολιάτας με Τυρί",
        link: "https://www.facebook.com/watch/?ref=saved&v=1302980468148219",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_9_w9f5ql.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["feta", "gouda", "puff_pastry_sheet", "olive_oil", "egg"]
    },
    {
        title: "Μαλακά Κριτσίνια Καρότου",
        link: "https://www.facebook.com/watch/?ref=saved&v=1444783603455339",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745247/Screenshot_10_ok9be3.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["carrot", "goat_yogurt", "olive_oil", "whole_wheat_flour", "baking_powder", "salt"]
    },
    {
        title: "Μελιτζάνες στον Φούρνο Γεμιστές με Τυριά",
        link: "https://www.facebook.com/watch/?ref=saved&v=1683365348990499",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_11_zotvmi.png",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα"],
        ingredients: ["eggplant", "salt", "olive_oil", "cream_cheese", "cheese_mix", "pepper", "tomato_sauce", "basil", "cheese"]
    },
    {
        title: "Σιροπιαστό Γλυκό με Καρύδα και Κρέμα",
        link: "https://www.facebook.com/watch/?ref=saved&v=702620759194370",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745247/Screenshot_12_eibinl.png",
        tags: ["Γλυκά", "Μέτριας Δυσκολίας"],
        ingredients: ["egg", "shredded_coconut", "breadcrumbs", "vegetable_oil", "sugar", "oil", "baking_powder", "water", "lemon_juice", "milk", "corn_flour", "vanilla", "whipped_topping_mix", "nuts"]
    },
    {
        title: "Πασχαλινό Κατσικάκι",
        link: "https://www.daddy-cool.gr/sintages/paschalino-katsikaki-me-tragani-petsa-sto-fourno.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2025/04/12/paschalino-katsikaki-me-tragani-petsa-sto-fourno_1744462375.jpg",
        tags: ["Φαγητά", "Δύσκολα", "Γιορτινά"],
        ingredients: ["goat", "salt", "pepper", "garlic", "water", "milk_butter"]
    },
    {
        title: "Γεμιστές Κόκκινες Πιπεριές με Τυρί",
        link: "https://live-kitchen.gr/kokkines-gemistes-piperies-me-tyri-ston-fourno/",
        type: "generic",
        picture: "https://live-kitchen.gr/wp-content/uploads/2022/07/%CE%A3%CF%84%CE%B9%CE%B3%CE%BC%CE%B9%CF%8C%CF%84%CF%85%CF%80%CE%BF-%CE%BF%CE%B8%CF%8C%CE%BD%CE%B7%CF%82-2022-06-29-171602.00_00_13_00.Still005.jpg",
        tags: ["Φαγητά", "Εύκολα"],
        ingredients: ["red_pepper", "feta", "graviera", "yogurt", "olive_oil", "garlic", "parsley", "spearmint", "oregano", "tomato", "pepper", "balsamic_vinegar"]
    },
    {
        title: "Ζαμπονοτυρόπιτα",
        link: "https://www.daddy-cool.gr/sintages/zamponotyropita-sti-forma-tou-keik-gia-to-paschalino-trapezi.html",
        type: "general",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2024/04/23/zamponotyropita-sti-forma-tou-keik-gia-to-paschalino-trapezi_1713873119.jpg",
        tags: ["Πίτες", "Σνακ", "Εύκολα", "Κυριακάτικα"],
        ingredients: ["egg", "milk", "str_yogurt", "pepper", "phyllo_dough", "butter", "gouda", "ham", "mozzarella", "feta"]
    },
    {
        title: "Νηστίσιμα Ελιόψωμα",
        link: " https://youtu.be/N09KPgfsefE",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745248/Screenshot_13_zpwn6w.png",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["flour", "water", "dry_yeast", "salt", "sugar", "olive_oil", "olive", "sesame"]
    },
    {
        title: "Πορτοκαλόπιτα",
        link: "https://www.facebook.com/watch/?ref=saved&v=545006551438440",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_14_chtvuu.png",
        tags: ["Γλυκά", "Κυριακάτικα", "Μέτριας Δυσκολίας"],
        ingredients: ["water", "sugar", "orange_juice", "cinnamon", "phyllo_dough", "egg", "sunflower_oil", "vanilla", "baking_powder", "yogurt", "orange_zest"]
    },
    {
        title: "Πανεύκολο Γλυκό με Φύλλα και Ινδοκάρυδο",
        link: "https://www.xrysessyntages.gr/πανεύκολο-γλυκό-με-φύλλα-και-ινδοκάρυ/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2019/03/MAKRY-1.jpg.webp",
        tags: ["Γλυκά", "Καθημερινά", "Εύκολα"],
        ingredients: ["phyllo_dough", "shredded_coconut", "melted_margarine", "water", "sugar"]
    },
    {
        title: "Ρολό Κιμά Γεμιστό με Τυριά και Πιπεριά",
        link: "https://paxxi.gr/syntages/rolo-kima-gemisto-me-tyria-ke-piperia",
        type: "general",
        picture: "https://paxxi.gr/wp-content/uploads/2023/12/Rolo-kima-gemisto-me-tyria.jpg",
        tags: ["Φαγητά", "Κυριακάτικα", "Γιορτινά", "Μέτριας Δυσκολίας"],
        ingredients: ["ground_beef", "ground_pork", "onion", "tomato", "parsley", "breadcrumbs", "egg", "mustard", "olive_oil", "cumin", "salt", "pepper", "feta", "edam", "florina_peppers", "potato", "lemon_juice", "oregano"]
    },
    {
        title: "Λουκανικόπιτα της Γκόλφω",
        link: "https://www.xrysessyntages.gr/η-απίθανη-λουκανικόπιτα-της-γκόλφω-πο/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2022/10/%CE%97-%CE%B1%CF%80%CE%AF%CE%B8%CE%B1%CE%BD%CE%B7-%CE%BB%CE%BF%CF%85%CE%BA%CE%B1%CE%BD%CE%B9%CE%BA%CF%8C%CF%80%CE%B9%CF%84%CE%B1-%CF%84%CE%B7%CF%82-%CE%93%CE%BA%CF%8C%CE%BB%CF%86%CF%89-%CF%80%CE%BF%CF%85-%CF%80%CE%B9%CE%BF-%CE%B5%CF%8D%CE%BA%CE%BF%CE%BB%CE%B7-%CE%94%CE%95%CE%9D-%CF%85%CF%80%CE%AC%CF%81%CF%87%CE%B5%CE%B9.png.webp",
        tags: ["Πίτες", "Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "frankfurt_sausage", "mozzarella", "parmesan", "green_pepper", "red_pepper", "tomato", "oregano", "pepper", "paprika", "olive_oil", "egg_white", "egg_yolk", "egg", "breadcrumbs"]
    },
    {
        title: "Σφολιατίνια με Τυρί Κρέμα και Ένταμ",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02heuRUjd9K23jhdyNTqBVVgziorETpw5rWkLCxTUrBH8Md8giYQzB1xqCbZHAENMRl&id=100057038966319",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/484135805_1155800146331273_3661966295487467335_n_gikonn.jpg",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "cream_cheese", "edam", "gouda", "cheese", "egg", "milk"]
    },
    {
        title: "Αφράτα Σταφιδόψωμα Χωρίς Μίξερ",
        link: "https://www.facebook.com/watch/?ref=saved&v=1373650264015223",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_15_z54mqw.png",
        tags: ["Σνακ", "Γλυκά", "Εύκολα"],
        ingredients: ["water", "instant_yeast", "sunflower_oil", "str_yogurt", "egg", "sugar", "makhlepi", "vanilla", "salt", "flour", "black_raisin"]
    },
    {
        title: "Σάλτσα Μανιταριών για Σνίτσελ και Μακαρόνια",
        link: "https://www.daddy-cool.gr/sintages/saltsa-manitarion-gia-snitsel-kai-makaronia.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2024/01/16/saltsa-manitarion-gia-snitsel-kai-makaronia_1705412235.jpg",
        tags: ["Φαγητά", "Εύκολα"],
        ingredients: ["mushroom", "onion", "garlic", "florina_pepper", "salt", "pepper", "paprika", "parsley", "heavy_cream", "water", "corn_flour", "butter", "cognac", "olive_oil"]
    },
    {
        title: "Χριστουγεννιάτικες Τυρομπουκίτσες",
        link: "https://www.facebook.com/watch/?ref=saved&v=1416050679357818",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_16_wyhiiv.png",
        tags: ["Σνακ", "Γιορτινά", "Εύκολα"],
        ingredients: ["seed_oil", "milk", "egg", "salt", "pepper", "grated_cheese", "baking_powder", "flour"]
    },
    {
        title: "Αλμυρή Τάρτα με Μανιτάρια και Κοτόπουλο",
        link: "https://www.konstantinas-kitchen.gr/almyri-tarta-me-manitaria-kai-kotopou/",
        type: "generic",
        picture: "https://www.konstantinas-kitchen.gr/wp-content/uploads/2023/07/%CE%91%CE%BB%CE%BC%CF%85%CF%81%CE%AE-%CE%A4%CE%AC%CF%81%CF%84%CE%B1-%CE%BC%CE%B5-%CE%BC%CE%B1%CE%BD%CE%B9%CF%84%CE%AC%CF%81%CE%B9%CE%B1-%CE%BA%CE%B1%CE%B9-%CE%BA%CE%BF%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF-konstantinas-kitchen.jpg",
        tags: ["Πίτες", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "mushroom", "chicken_breast", "red_pepper", "onion", "parsley", "egg", "white_wine", "olive_oil", "kefalotyri", "salt", "pepper"]
    },
    {
        title: "Πατατοσαλάτα σε Σχήμα Δώρο για την Πρωτοχρονιά",
        link: "https://www.daddy-cool.gr/dear-santa/patatosalata-se-schima-doro-gia-tin-protochronia.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/12/27/patatosalata-se-schima-doro-gia-tin-protochronia_1703684849.jpg",
        tags: ["Σαλάτες", "Εύκολα", "Γιορτινά"],
        ingredients: ["potato", "bacon", "pickle", "red_pepper", "green_pepper", "parsley", "onion", "kefalograviera", "salt", "pepper", "cream_cheese", "mayo", "mustard", "olive_oil", "vinegar", "lemon_juice"]
    },
    {
        title: "Γιαννιώτικο Γλυκό με Φύλλο και Καρύδια",
        link: "https://www.syntagesmou.gr/2024/12/blog-post_99.html?m=1",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiklil_4s5J5niFV1PTIk-z2tRFinvu17u3Bp4fnpRzmEOb2bnopSTjsWNSIwBsI6Vs14pawv95iUNLU2588YHjlzmqF4IALQ4NPTvMt3uZPOCBIy8sxxfOqXjPobDzPDGB0G6ir66bdukKG14i7a1u8IsB81JmnBFUhsDHP3B4WPcC60Z-ITg6nO5eivo/w640-h572-rw/IMG_4247.webp",
        tags: ["Γλυκά", "Γιορτινά", "Εύκολα"],
        ingredients: ["phyllo_dough", "chopped_walnut", "kadaifi", "chopped_almonds", "cinnamon", "ground_clove", "melted_margarine", "butter", "sugar", "water", "cinnamon_stick", "whole_clove", "lemon_juice"]
    },
    {
        title: "Γιορτινό Γκιούλμπασι με Χοιρινό Κότσι και Αρνίσιο Μπούτι",
        link: "https://www.koutalitsa.gr/giortino-gkioylmpasi-me-choirino-kotsi-kai-arnisio-mpoyti-gia-to-christoygenniatiko-i-to-protochroniatiko-trapezi",
        type: "generic",
        picture: "https://www.koutalitsa.gr/wp-content/uploads/2021/12/gkioulmpasi-stin-ladokolla-gia-to-giortino-trapezi_1640345424.jpg",
        tags: ["Φαγητά", "Γιορτινά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["lamb_thigh", "pork_knuckle", "salt", "thyme", "pepper", "olive_oil", "garlic", "carrot", "lemon_juice", "oregano"]
    },  //  APO EDO KAI KATO DES NA VALEIS TA ILIKA LIL BROOOOOOOOOO
    {
        title: "Μανιτάρια Πλευρώτους στον Φούρνο με Πατάτες",
        link: "https://www.koutalitsa.gr/manitaria-pleyrotoys-ston-foyrno-me-patates-loykoymaki-sketo",
        type: "generic",
        picture: "https://www.koutalitsa.gr/wp-content/uploads/2024/05/jhnmnhgn.jpg",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα"],
        ingredients: ["mushroom", "potato", "water", "lemon_juice", "olive_oil", "mustard", "turmeric", "salt", "pepper", "cube", "rosemary"]
    },
    {
        title: "Ρολό Σφολιάτας",
        link: "https://www.facebook.com/reel/4069121996666156/",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745256/Screenshot_17_mkcuaz.png",
        tags: ["Πίτες", "Σνακ", "Κυριακάτικα", "Εύκολα", "Γρήγορα"],
        ingredients: ["puff_pastry_sheet", "mozzarella", "chopped_ham", "pickles", "egg", "egg_yolk"]
    },
    {
        title: "Κοτόπουλο Λεμονάτο με Πατάτες στο Φούρνο",
        link: "https://petrosmaounatzis.com/κοτόπουλο-λεμονάτο-με-πατάτες-στο-φού",
        type: "generic",
        picture: "https://petrosmaounatzis.com/wp-content/uploads/2024/12/%CE%BA%CE%BF%CF%84%CE%BF%CF%80%CE%BF%CF%85%CE%BB%CE%BF_%CE%BB%CE%B5%CE%BC%CE%BF%CE%BD%CE%B1%CF%84%CE%BF_%CF%80%CE%B1%CF%84%CE%B1%CF%84%CE%B5%CF%82_%CE%A0%CE%B5%CF%84%CF%81%CE%BF%CF%82_%CE%9C%CE%B1%CE%BF%CF%85%CE%BD%CE%B1%CF%84%CE%B6%CE%B7%CF%82.png",
        tags: ["Φαγητά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["baby_potato", "olive_oil", "lemon_juice", "garlic", "paprika", "salt", "pepper"]
    },
    {
        title: "Αυγοσαλάτα Δροσερή και Πεντανόστιμη",
        link: "https://www.facebook.com/watch/?ref=saved&v=557093463730470",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745256/Screenshot_18_fmcd4v.png",
        tags: ["Σαλάτες", "Γιορτινά", "Εύκολα"],
        ingredients: ["potato", "egg", "onion", "carrot", "cherry_tomato", "corn", "olive_oil", "salt", "pickle", "mayo", "str_yogurt", "dill", "pepper", "apple_cider_vinegar"]
    },
    {
        title: "Μίνι Τηγανίτες (Pancakes) σε 5 Λεπτά",
        link: "https://xrysoskoufaki.gr/μίνι-τηγανίτεςpancakes-σε-5-λεπτά",
        type: "generic",
        picture: "https://xrysoskoufaki.gr/wp-content/uploads/2024/10/tiganites_gty.jpg",
        tags: ["Γλυκά", "Σνακ", "Καθημερινά", "Εύκολα", "Γρήγορα"],
        ingredients: ["egg", "sugar", "vanilla", "oil", "str_yogurt", "milk", "a_p_flour", "baking_powder", "salt", "powdered_sugar"]
    },
    {
        title: "Κοτόπουλο με Ρύζι στο Φούρνο",
        link: "https://mpaxarikkanela.blogspot.com/2024/06/blog-post_97.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0cULROGwSSHZCWt_zR-7ug_DIUDTO2PZqMsEgKixquCIx95zBy0stPocit_aRRKmFiM0aFdmWqDMZMWqTuX3RqwzweRIrKmMMyJroUvfO2omwL-RTCYGlqvO40zy4ls5mW6lJbCE8_9gCctriL-1Bm68w95XNv7mG4P8CASWn9JcdM2uRNBLJyrKR9YE/s16000/1000004219-01.jpeg",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα"],
        ingredients: ["chicken", "salt", "pepper", "thyme", "paprika", "oregano", "olive_oil", "water", "rice", "chicken_cube"]
    },
    {
        title: "Γρήγορη Ζαμπονοκασερόπιτα για τον Γιορτινό Μπουφέ",
        link: "https://www.daddy-cool.gr/dear-santa/grigori-zamponokaseropita-gia-ton-giortino-mpoufe.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2022/12/22/zamponokaseropita-gia-ton-giortino-mpoufe_1671712393.jpg",
        tags: ["Πίτες", "Σνακ", "Γιορτινά", "Εύκολα", "Γρήγορα"],
        ingredients: ["puff_pastry_sheet", "gouda", "ham", "green_pepper", "red_pepper", "tomato_sauce", "egg_yolk", "water", "sesame"]
    },
    {
        title: "Εύκολη Γιορτινή Σαλάτα σε 5 Λεπτά",
        link: "https://mageirikhkaisuntages.blogspot.com/2022/12/5_7.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVxby1FNBMPRKM79WqXMHW9V4XIymPtsc4xqNI0nrzLfyZ_MIuLk8bR9NAQDUSfXoEV-hCIYcSb-OMUUMZj7T4o8Gng4I9Uy1UVmyQqkUjjdfeEOlifFpSLAIry9MYGLSv8ex12TWv6gn9IcvirZSO84KJl4a4dGAXxKq-93eOtQ5FEWmXorAbw-vv/s900/page.jpg",
        tags: ["Σαλάτες", "Γιορτινά", "Γρήγορα", "Εύκολα"],
        ingredients: ["str_yogurt", "mayo", "potato", "onion", "carrot", "salt", "pepper", "egg"]
    },
    {
        title: "Κουλούρια Αφρός",
        link: "https://mageirikhkaisuntages.blogspot.com/2021/11/blog-post_44.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/a/AVvXsEjw-Z6kJfFiiOZjWwL7gWpcT9uDAhpS8NpBgti6QEeaGeaazJQiXwG79OjwagW3ToZjxU_2DaWU3dOO4vT7a9E42qUwW1TCrFjH7j0-yyV9oBDvEZOE6WpDNIHsWrt9Y6N6DT8hFwRMIcm1s3c0ynDD9YveCOPgCnk2c6_FyEHx8WxTRih8H9JlUy1M=s956",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "water", "dry_yeast", "sugar", "salt", "egg_yolk", "seed_oil", "flour"]
    },
    {
        title: "Τυροκούλουρα με Ζαμπόν για το Σχολείο",
        link: "https://www.daddy-cool.gr/sintages/tyrokouloura-me-zampon-gia-to-scholeio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/10/13/tyrokouloura-me-zampon-kai-tyri-gia-to-scholeio_1697194064.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["a_p_flour", "egg_white", "milk", "water", "seed_oil", "dry_yeast", "sugar", "salt", "gouda", "ham", "egg_yolk", "egg", "sesame"]
    },
    {
        title: "Αφράτα Ατομικά Τσουρεκάκια Χωρίς Ζύμωμα",
        link: "https://www.daddy-cool.gr/sintages/afrata-atomika-tsourekakia-choris-zymoma-idanika-kai-gia-kolatsio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/02/09/ta-pio-afrata-kai-eukola-atomika-tsourekakia.jpg",
        tags: ["Γλυκά", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "dry_yeast", "sugar", "butter", "egg", "salt", "makhlepi", "cardamom", "bread_flour"]
    },
    {
        title: "Αφράτα Τυροκούλουρα με Φέτα και Γιαούρτι",
        link: "https://www.daddy-cool.gr/sintages/afrata-tyrokouloura-me-feta-kai-giaourti-idanika-gia-kolatsio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/03/20/daddy-cool-2020-03-20_730034-e1584705433327.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "dry_yeast", "sugar", "egg", "egg_white", "sunflower_oil", "s_r_flour", "salt", "egg_yolk", "sesame", "feta", "yogurt", "pepper"]
    },
    {
        title: "Μαλακά Ψωμάκια Γεμιστά με Φέτα",
        link: "https://www.daddy-cool.gr/sintages/syntagi-gia-psomakia-gemista-me-feta-malaka-san-vamvaki.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/06/04/daddy-cool-2020-06-04_283590-e1591251736643.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "sugar", "dry_yeast", "seed_oil", "egg", "salt", "bread_flour", "feta", "sesame"]
    },
    {
        title: "Πιτάκια Στριφτά με Φέτα",
        link: "https://www.daddy-cool.gr/sintages/pitakia-strifta-apo-live-kitchen.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2021/02/27/syntagi-gia-stryftopitaria-apo-to-live-kitchen-vinteo_1614429511-e1614425944301.jpg",
        tags: ["Πίτες", "Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["water", "sunflower_oil", "milk", "dry_yeast", "sugar", "salt", "egg_white", "bread_flour", "feta", "olive_oil", "egg_yolk", "egg"]
    }
    
    
    
    
    /*,
    {
        title: "Ψαρονέφρι με Μουστάρδα",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Dinner", "Meat"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        title: "Κέικ Μπανάνα",
        link: "https://google.com",
        type: "youtube",
        picture: null,
        tags: ["Cake", "Fruit"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        title: "Κουλουράκια Πολίτικα",
        link: "https://google.com",
        type: "facebook",
        picture: null,
        tags: ["Traditional", "Snack"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    
        title: "Κόκορας Κρασάτος",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Traditional", "Dinner"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    },
    {
        title: "Μελομακάρονα",
        link: "https://google.com",
        type: "generic",
        picture: null,
        tags: ["Christmas", "Dessert"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour"]
    }*/
];
