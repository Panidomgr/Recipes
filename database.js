/* --- INGREDIENTS DATABASE --- */
/* Used primarily for the Search Filter Menu to get the correct names */
export const ingredients = [
    { id: "error", name: "Υλικό" },

    /* --- Dairy & Eggs --- */
    { id: "str_yogurt", name: "Στραγγιστό Γιαούρτι" },
    { id: "yogurt", name: "Γιαούρτι" },
    { id: "goat_yogurt", name: "Κατσικίσιο Γιαούρτι" },
    { id: "milk", name: "Γάλα" },
    { id: "evap_milk", name: "Ζαχαρούχο" },
    { id: "heavy_cream", name: "Κρέμα Γάλακτος" },
    { id: "heavy_cream_green", name: "Κρέμα Γάλακτος Πράσινη" },
    { id: "butter", name: "Βούτυρο" },
    { id: "milk_butter", name: "Βούτυρο Γάλακτος" },
    { id: "margarine", name: "Μαργαρίνη" },
    { id: "melted_margarine", name: "Λιωμένη Μαργαρίνη" },
    { id: "egg", name: "Αυγό" },
    { id: "egg_yolk", name: "Κρόκος Αυγού" },
    { id: "egg_white", name: "Ασπράδι Αυγού" },

    /* --- Pasta --- */
    { id: "spaghetti", name: "Μακαρόνια" },

    /* --- Cheeses --- */
    { id: "feta", name: "Τυρί Φέτα" },
    { id: "gouda", name: "Γκούντα" },
    { id: "edam", name: "Ένταμ" },
    { id: "regato", name: "Ρεγκάτο" },
    { id: "parmesan", name: "Παρμεζάνα" },
    { id: "graviera", name: "Γραβιέρα" },
    { id: "grated_graviera", name: "Γραβιέρα Τριμμένη" },
    { id: "kefalotyri", name: "Κεφαλοτύρι" },
    { id: "kefalograviera", name: "Κεφαλογραβιέρα" },
    { id: "mozzarella", name: "Μοτσαρέλα" },
    { id: "cream_cheese", name: "Τυρί Κρέμα" },
    { id: "cheese_mix", name: "Μείγμα Τυριών" },
    { id: "grated_cheese", name: "Τριμμένο Τυρί" },

    /* --- Meats --- */
    { id: "beef_neck", name: "Μοσχαρίσιος Λαιμός" },
    { id: "ground_beef", name: "Μοσχαρίσιος Κιμάς" },
    { id: "pork", name: "Χοιρινό" },
    { id: "ground_pork", name: "Χοιρινός Κιμάς" },
    { id: "ham_shoulder", name: "Χοιρινή Ωμοπλάτη" },
    { id: "ham", name: "Ζαμπόν" },
    { id: "shredded_ham", name: "Ζαμπόν Τριμμένο" },
    { id: "chopped_ham", name: "Ζαμπόν Ψιλοκομμένο" },
    { id: "bacon", name: "Μπέικον" },
    { id: "frankfurt_sausage", name: "Λουκάνικο Φρανκφούρτης" },
    { id: "chicken", name: "Κοτόπουλο" },
    { id: "chicken_breast", name: "Στήθος Κοτόπουλο" },
    { id: "goat", name: "Κατσίκι" },
    { id: "lamb_thigh", name: "Αρνίσιο Μπούτι" },
    { id: "pork_knuckle", name: "Χοιρινό Κότσι" },
    { id: "pork_tenderloin", name: "Ψαρονέφρι" },

    /* --- Produce (Vegetables/Fruits) --- */
    { id: "tomato", name: "Ντομάτα" },
    { id: "cherry_tomato", name: "Ντοματίνι" },
    { id: "onion", name: "Κρεμμύδι" },
    { id: "potato", name: "Πατάτα" },
    { id: "baby_potato", name: "Πατάτα Baby" },
    { id: "garlic", name: "Σκόρδο" },
    { id: "leek", name: "Πράσο" },
    { id: "carrot", name: "Καρότο" },
    { id: "eggplant", name: "Μελιτζάνα" },
    { id: "mushroom", name: "Μανιτάρι" },
    { id: "corn", name: "Καλαμπόκι" },
    { id: "red_pepper", name: "Κόκκινη Πιπεριά" },
    { id: "green_pepper", name: "Πράσινη Πιπεριά" },
    { id: "florina_pepper", name: "Πιπεριά Φλωρίνης" },
    { id: "orange", name: "Πορτοκάλι" },
    { id: "orange_peel", name: "Φλούδα Πορτοκαλιού" },
    { id: "orange_zest", name: "Ξύσμα Πορτοκαλιού" },
    { id: "orange_juice", name: "Χυμός Πορτοκάλι" },
    { id: "lemon_juice", name: "Χυμός Λεμόνι" },
    { id: "lemon_zest", name: "Ξύσμα Λεμονιού" },
    { id: "olive", name: "Ελιά" },
    { id: "banana", name: "Μπανάνα" },

    /* --- Pantry & Baking --- */
    { id: "a_p_flour", name: "Αλεύρι Γ.Ο.Χ." },
    { id: "s_r_flour", name: "Αλεύρι που Φουσκώνει Μόνο Του (Φαρίνα)" },
    { id: "bread_flour", name: "Αλεύρι για Τσουρέκι/Ψωμί (Σκληρό)" },
    { id: "whole_wheat_flour", name: "Αλεύρι Ολικής" },
    { id: "corn_flour", name: "Κορν Φλάουρ" },
    { id: "sugar", name: "Ζάχαρη" },
    { id: "powdered_sugar", name: "Ζάχαρη Άχνη" },
    { id: "baking_powder", name: "Μπέικιν" },
    { id: "baking_soda", name: "Μαγειρική Σόδα" },
    { id: "dry_yeast", name: "Ξηρή Μαγιά" },
    { id: "instant_yeast", name: "Μαγιά Στιγμής" },
    { id: "vanilla", name: "Βανίλια" },
    { id: "cocoa", name: "Κακάο" },
    { id: "nescafe", name: "Στιγμιαίος Καφές (Νες Καφέ)" },
    { id: "couverture", name: "Κουβερτούρα" },
    { id: "milk_chocolate", name: "Σοκολάτα Γάλακτος" },
    { id: "chocolate_drops", name: "Σταγόνες Σοκολάτας" },
    { id: "merenda", name: "Μερέντα" },
    { id: "morfat", name: "Μόρφατ" },
    { id: "whipped_topping_mix", name: "Σκόνη Σαντιγί (Garni)" },
    { id: "biscuit", name: "Μπισκότο" },
    { id: "ladyfingers", name: "Σαβουαγιάρ" },
    { id: "breadcrumbs", name: "Φρυγανιά Τριμμένη" },
    { id: "rice", name: "Ρύζι" },
    { id: "phyllo_dough", name: "Φύλλο Κρούστας" },
    { id: "puff_pastry_sheet", name: "Φύλλο Σφολιάτας" },
    { id: "kadaifi", name: "Φύλλο Κανταΐφι" },
    { id: "pizza_sauce", name: "Σως Πίτσας" },
    { id: "tomato_paste", name: "Τοματοπολτός" },
    { id: "tomato_sauce", name: "Σάλτσα Ντομάτας" },
    { id: "mayo", name: "Μαγιονέζα" },
    { id: "mustard", name: "Μουστάρδα" },
    { id: "vinegar", name: "Ξίδι" },
    { id: "red_vinegar", name: "Κόκκινο Ξίδι" },
    { id: "balsamic_vinegar", name: "Βαλσαμικό Ξίδι" },
    { id: "apple_cider_vinegar", name: "Μηλόξιδο" },
    { id: "olive_oil", name: "Ελαιόλαδο" },
    { id: "seed_oil", name: "Σπορέλαιο" },
    { id: "sunflower_oil", name: "Ηλιέλαιο" },
    { id: "vegetable_oil", name: "Φυτικό Λάδι" },
    { id: "oil", name: "Λάδι" },
    { id: "water", name: "Νερό" },
    { id: "white_wine", name: "Λευκό Κρασί" },
    { id: "retsina", name: "Ρετσίνα" },
    { id: "cognac", name: "Κονιάκ" },
    { id: "chicken_cube", name: "Κύβος Κοτόπουλου" },
    { id: "cube", name: "Κύβος Ζωμού" },
    { id: "bread", name: "Ψωμί" },
    { id: "pickle", name: "Αγγουράκι Τουρσί" },
    { id: "pickles", name: "Τουρσί" },
    { id: "custard_powder", name: "Κάστερ Πάουντερ" },

    /* --- Herbs, Spices & Nuts --- */
    { id: "salt", name: "Αλάτι" },
    { id: "pepper", name: "Πιπέρι" },
    { id: "oregano", name: "Ρίγανη" },
    { id: "thyme", name: "Θυμάρι" },
    { id: "paprika", name: "Πάπρικα" },
    { id: "cinnamon", name: "Κανέλα" },
    { id: "cinnamon_stick", name: "Ξύλο Κανέλας" },
    { id: "whole_clove", name: "Γαρίφαλο (Ολόκληρο)" },
    { id: "ground_clove", name: "Γαρίφαλο Σκόνη" },
    { id: "cumin", name: "Κύμινο" },
    { id: "turmeric", name: "Κουρκουμάς" },
    { id: "cardamom", name: "Κακουλέ" },
    { id: "makhlepi", name: "Μαχλέπι" },
    { id: "mastic_powder", name: "Μαστίχα Σκόνη" },
    { id: "sweet_chili_flakes", name: "Μπούκοβο" },
    { id: "bay_leaves", name: "Φύλλο Δάφνης" },
    { id: "parsley", name: "Μαϊντανός" },
    { id: "dill", name: "Άνηθος" },
    { id: "spearmint", name: "Δυόσμος" },
    { id: "basil", name: "Βασιλικός" },
    { id: "rosemary", name: "Δενδρολίβανο" },
    { id: "sesame", name: "Σουσάμι" },
    { id: "nuts", name: "Ξηροί Καρποί" },
    { id: "shredded_coconut", name: "Ινδοκάρυδο" },
    { id: "chopped_walnut", name: "Καρύδι Ψιλοκομμένο" },
    { id: "chopped_almonds", name: "Αμύγδαλο Ψιλοκομμένο" },
    { id: "black_raisin", name: "Μαύρη Σταφίδα" },
    { id: "curry", name: "Κάρι" },

    /* --- General --- */
    { id: "flour", name: "Αλεύρια" },
    { id: "cheese", name: "Τυριά/Κασέρια" },
    { id: "pasta", name: "Ζυμαρικά" },
    { id: "meat", name: "Κρεατικά" },
    { id: "vegetable", name: "Λαχανικά" },
];

/* --- ORIGINAL RECIPES --- */
export const originalRecipes = [
    {
        id: "gliko_ioannas",
        title: "Γλυκό Ιωάννας",
        description: "Η απόλυτη σιροπιαστή σοκολατόπιτα που μετριέται με το κουτάλι! Ένα ζουμερό και αφράτο κέικ κακάο που ποτίζεται με ελαφρύ σιρόπι και επικαλύπτεται με πλούσια, βελούδινη γκανάς σοκολάτας γάλακτος. Μια κολασμένη σοκολατένια απόλαυση.",
        picture: null,
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα", "Γιορτινά"],
        ingredients: [
            { id: "butter", text: "3κ.σ. Βιτάμ", for: "Για το Μείγμα (Ζεστό)" },
            { id: "sugar", text: "14κ.σ. Ζάχαρη", for: "Για το Μείγμα (Ζεστό)" },
            { id: "egg", text: "4x Αυγά", for: "Για το Μείγμα (Ζεστό)" },
            { id: "milk", text: "14κ.σ. Γάλα", for: "Για το Μείγμα (Ζεστό)" },
            { id: "vanilla", text: "2x Βανίλιες", for: "Για το Μείγμα (Ζεστό)" },
            { id: "cocoa", text: "4κ.σ. Κακάο", for: "Για το Μείγμα (Ζεστό)" },
            { id: "a_p_flour", text: "14κ.σ. Αλεύρι", for: "Για το Μείγμα (Ζεστό)" },
            { id: "baking_powder", text: "1x Μπέικιν", for: "Για το Μείγμα (Ζεστό)" },
            { id: "sugar", text: "1.5x κούπες Ζάχαρη", for: "Για το Σιρόπι (Κρύο)" },
            { id: "water", text: "1.5x κούπες Νερό", for: "Για το Σιρόπι (Κρύο)" },
            { id: "couverture", text: "1x Κουβερτούρα", for: "Για τον Γλάσο" },
            { id: "heavy_cream", text: "3/4 Κρέμα Γάλακτος", for: "Για τον Γλάσο" }
        ],
        hiddenIngredients: ["lemon_juice", "flour"],
        steps: [
            { text: "Σε μπολ χτυπάμε το Βιτάμ, τη Ζάχαρη, τα Αυγά, το Γάλα και τις Βανίλιες.", pic: null },
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
        description: "Ένα δροσερό και ανάλαφρο γλυκό ψυγείου που λιώνει στο στόμα. Στρώσεις από μπισκότα πτι-μπερ αγκαλιάζονται από μια αφράτη λευκή κρέμα και μια μους σοκολάτας, δημιουργώντας ένα απολαυστικό δίχρωμο επιδόρπιο για όλες τις ώρες.",
        picture: null,
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα"],
        ingredients: [
            { id: "biscuit", text: "2x Πακέτα Μπισκότα Πτι-Μπερ" },
            { id: "evap_milk", text: "1x Ζαχαρούχο" },
            { id: "heavy_cream", text: "1x Κρέμα Γάλακτος Πράσινη" },
            { id: "cocoa", text: "3κ.σ. Κακάο" },
            { id: "morfat", text: "1x Μόρφατ" }
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
    },
    {
        id: "banana-cake",
        title: "Κέικ Μπανάνα",
        description: "Ένα υπέροχα αφράτο και υγρό κέικ, γεμάτο με το φυσικό άρωμα ώριμων μπανανών και κομμάτια σοκολάτας που λιώνουν στο στόμα. Η τέλεια λύση για να αξιοποιήσετε τις μπανάνες που περίσσεψαν και το ιδανικό συνοδευτικό για τον πρωινό σας καφέ.",
        picture: null,
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα"],
        ingredients: [
            { id: "egg", text: "2x Αυγά" },
            { id: "seed_oil", text: "Μισή κούπα Σπορέλαιο" },
            { id: "milk", text: "Μισή κούπα Γάλα" },
            { id: "sugar", text: "1 κούπα Ζάχαρη" },
            { id: "banana", text: "2x Μπανάνες" },
            { id: "s_r_flour", text: "2 κούπες Φαρινάπ" },
            { id: "baking_powder", text: "1x Μπέικιν" },
            { id: "couverture", text: "1 Κουβερτούρα Τριμμένη" },
        ],
        hiddenIngredients: ["oil", "flour"],
        steps: [
            { text: "Σε ένα μπολ χτυπάμε τα Αυγά, το Σπορέλαιο, το Γάλα και τη Ζάχαρη μέχρι να αφρατέψουν.", pic: null },
            { text: "Προσθέτουμε σταδιακά το Φαρινάπ και το Μπέικιν Πάουντερ και ανακατεύουμε.", pic: null },
            { text: "Λιώνουμε τις Μπανάνες με ένα πιρούνι και τις προσθέτουμε στο μείγμα.", pic: null },
            { text: "Ρίχνουμε την τριμμένη Κουβερτούρα και ανακατεύουμε απαλά με μια μαρίζ να πάει παντού.", pic: null },
            { text: "Αδειάζουμε το μείγμα σε λαδωμένη φόρμα.", pic: null },
            { text: "Ψήνουμε σε προθερμασμένο φούρνο στους 170°C για περίπου 50 λεπτά.", pic: null }
        ]
    },
    {
        id: "koulourakia-politika",
        title: "Κουλουράκια Πολίτικα",
        description: "Τα αυθεντικά, παραδοσιακά σμυρναίικα κουλουράκια που μοσχοβολάνε βούτυρο και μαχλέπι. Τραγανά απ' έξω και αφράτα από μέσα, πλάθονται στις χαρακτηριστικές πλεξούδες και αποτελούν το απόλυτο βούτημα για το γάλα ή τον καφέ.",
        picture: null,
        tags: ["Κουλουράκια", "Εύκολα"],
        ingredients: [
            { id: "a_p_flour", text: "3 ποτήρια Αλεύρι", for: "Για το Μείγμα" },
            { id: "milk", text: "Μισό ποτήρι Γάλα", for: "Για το Μείγμα" },
            { id: "seed_oil", text: "1/4 ποτηριού Σπορέλαιο", for: "Για το Μείγμα" },
            { id: "butter", text: "Μισό ποτήρι Βούτυρο λιωμένο", for: "Για το Μείγμα" },
            { id: "baking_powder", text: "1κ.γ. Μπέικιν", for: "Για το Μείγμα" },
            { id: "makhlepi", text: "1κ.γ. Μαχλέπι", for: "Για το Μείγμα" },
            { id: "sugar", text: "2κ.σ. Ζάχαρη", for: "Για το Μείγμα" },
            { id: "salt", text: "λίγο Αλάτι", for: "Για το Μείγμα" },
            { id: "egg", text: "1x Αυγό", for: "Για το Μείγμα" },
            { id: "egg_yolk", text: "1x Κρόκος Αυγού", for: "Πάνω στα Κουλουράκια" },
            { id: "sesame", text: "Σουσάμι", for: "Πάνω στα Κουλουράκια" },
        ],
        hiddenIngredients: ["water", "flour", "oil"],
        steps: [
            { text: "Σε μια μεγάλη λεκάνη ρίχνουμε το Αλεύρι, το Μπέικιν, το Μαχλέπι, τη Ζάχαρη και το Αλάτι.", pic: null },
            { text: "Κάνουμε μια λακκούβα στη μέση και προσθέτουμε το Γάλα, το Σπορέλαιο, το λιωμένο Βούτυρο και το Αυγό.", pic: null },
            { text: "Ζυμώνουμε καλά μέχρι να έχουμε μια μαλακή ζύμη που δεν κολλάει στα χέρια.", pic: null },
            { text: "Πλάθουμε τα κουλουράκια σε πλεξούδες ή σαλιγκάρια και τα τοποθετούμε σε ταψί με λαδόκολλα.", pic: null },
            { text: "Χτυπάμε τον Κρόκο με λίγο νερό, αλείφουμε τα κουλουράκια και πασπαλίζουμε με Σουσάμι.", pic: null },
            { text: "Ψήνουμε στους 180°C (αντιστάσεις) για 15-20 λεπτά μέχρι να ροδίσουν.", pic: null }
        ]
    },
    {
        id: "krema-isaias",
        title: "Κρέμα Ησαΐας",
        description: "Μια νοσταλγική κρέμα βανίλιας κατσαρόλας, βελούδινη και απαλή, που ξυπνάει τις πιο γλυκές παιδικές αναμνήσεις. Ένα ελαφρύ, θρεπτικό και γρήγορο γλυκό που λατρεύουν μικροί και μεγάλοι, ειδικά όταν πασπαλιστεί με άφθονη κανέλα.",
        picture: null,
        tags: ["Κρέμες", "Γλυκά", "Γρήγορα"],
        ingredients: [
            { id: "milk", text: "1.5 λίτρο Γάλα" },
            { id: "sugar", text: "1 κούπα Ζάχαρη" },
            { id: "a_p_flour", text: "6κ.σ. Αλεύρι" },
            { id: "custard_powder", text: "3κ.σ. Κάστερ Πάουντερ" },
            { id: "egg_yolk", text: "2x Κρόκους Αυγού" },
            { id: "butter", text: "1κ.σ. Βούτυρο" }
        ],
        hiddenIngredients: ["cinnamon", "flour", "egg"],
        steps: [
            { text: "Σε μια κατσαρόλα βάζουμε το Γάλα (κρατώντας λίγο κρύο στην άκρη) να ζεσταθεί σε μέτρια φωτιά.", pic: null },
            { text: "Στο κρύο γάλα που κρατήσαμε, διαλύουμε το Αλεύρι και το Κάστερ Πάουντερ.", pic: null },
            { text: "Ρίχνουμε το μείγμα του αλευριού και τη Ζάχαρη στην κατσαρόλα με το ζεστό γάλα.", pic: null },
            { text: "Ανακατεύουμε συνεχώς με σύρμα μέχρι να δέσει και να πήξει η κρέμα.", pic: null },
            { text: "Κατεβάζουμε από τη φωτιά και προσθέτουμε αμέσως τους Κρόκους και το Βούτυρο, ανακατεύοντας γρήγορα.", pic: null },
            { text: "Προαιρετικά, σερβίρουμε σε μπολάκια και πασπαλίζουμε με κανέλα.", pic: null }
        ]
    }, //Apo do kai kato des ta ids ton ilikon, ki an boreis na ta kaneis array
    {
        id: "pastitsio",
        title: "Παστίτσιο",
        description: "Το απόλυτο κυριακάτικο φαγητό της ελληνικής οικογένειας και βασιλιάς του comfort food. Στρώσεις από χοντρά μακαρόνια και πλούσιο κιμά σιγομαγειρεμένο με αρωματικά, σκεπάζονται από μια γενναιόδωρη στρώση αφράτης, σπιτικής μπεσαμέλ που ροδίζει λαχταριστά στο φούρνο.",
        picture: null,
        tags: ["Φαγητά", "Κυριακάτικα", "Μέτριας Δυσκολίας"],
        ingredients: [
            { id: "spaghetti", text: "1 πακέτο Μακαρόνια (για παστίτσιο)" },
            { id: "cheese", text: "Τυρί τριμμένο" },
            { id: "milk", text: "1 λίτρο Γάλα", for: "Για την Μπεσαμέλ" },
            { id: "ground_beef", text: "1 κιλό Κιμά" },
            { id: "egg", text: "3x Αυγά" },
            { id: "egg_yolk", text: "Κρατάμε 1x Κρόκο από τα 3x Αυγού", for: "Για την Μπεσαμέλ" },
            { id: "s_r_flour", text: "7κ.σ. Αλεύρι που Φουσκώνει", for: "Για την Μπεσαμέλ" },
            { id: "bay_leaves", text: "3 Φύλλα Δάφνη" },
            { id: "butter", text: "200γρ. Βούτυρο", for: "Για την Μπεσαμέλ" },
            { id: "parsley", text: "Μαϊντανό" },
            { id: "tomato", text: "Ντομάτες (ή Σάλτσα)" },
            { id: "retsina", text: "Ρετσίνα" },
            { id: "onion", text: "1x Κρεμμύδι" },
            { id: "garlic", text: "1 σκελίδα Σκόρδο" },
            { id: "cinnamon", text: "Κανέλα" },
            { id: "salt", text: "Αλάτι" },
            { id: "pepper", text: "Πιπέρι" }
        ],
        hiddenIngredients: ["pasta", "flour", "tomato_sauce", "meat", "water", "egg_white"],
        steps: [
            { text: "Για τον κιμά: Σοτάρουμε το Κρεμμύδι και το Σκόρδο, προσθέτουμε τον Κιμά και τον καβουρδίζουμε.", pic: null },
            { text: "Προσθέτουμε αλάτι, πιπέρι, Κανέλα και σβήνουμε με τη Ρετσίνα.", pic: null },
            { text: "Ρίχνουμε τις Ντομάτες, τη Δάφνη, το Μαϊντανό και λίγο νερό και αφήνουμε να βράσει μέχρι να πιει τα υγρά του.", pic: null },
            { text: "Βράζουμε τα Μακαρόνια σε αλατισμένο νερό (al dente) και τα στραγγίζουμε.", pic: null },
            { text: "Λιώνουμε λίγο Βούτυρο στα ζεστά μακαρόνια και ανακατεύουμε με μπόλικο Τυρί τριμμένο.", pic: null },
            { text: "Αφού κρυώσουν λίγο τα μακαρόνια, χτυπάμε τα 2 ολόκληρα Αυγά και το 1 ασπράδι και τα ανακατεύουμε μέσα.", pic: null },
            { text: "Για την Μπεσαμέλ: Λιώνουμε το Βούτυρο, προσθέτουμε το Αλεύρι και ανακατεύουμε να ψηθεί λίγο.", pic: null },
            { text: "Προσθέτουμε το καυτό Γάλα σταδιακά, ανακατεύοντας συνεχώς με σύρμα για να μη σβολιάσει.", pic: null },
            { text: "Μόλις πήξει, κατεβάζουμε από τη φωτιά, ρίχνουμε τον Κρόκο, αλάτι, πιπέρι και Τυρί τριμμένο.", pic: null },
            { text: "Συναρμολόγηση: Στρώνουμε τα μισά μακαρόνια, από πάνω τον κιμά, μετά τα υπόλοιπα μακαρόνια και τέλος την μπεσαμέλ.", pic: null },
            { text: "Πασπαλίζουμε με Τυρί τριμμένο και ψήνουμε στους 200°C για 35-40 λεπτά μέχρι να ροδίσει.", pic: null }
        ]
    },
    {
        id: "serano",
        title: "Σεράνο",
        description: "Μια εντυπωσιακή σοκολατένια πανδαισία που θυμίζει τις κλασικές πάστες των παλιών ζαχαροπλαστείων. Ζουμερό σοκολατένιο παντεσπάνι σιροπιασμένο με κονιάκ, ενώνεται με βελούδινη κρέμα σοκολάτας και καλύπτεται από γυαλιστερό γλάσο.",
        picture: null,
        tags: ["Γλυκά", "Μέτριας Δυσκολίας"],
        ingredients: [
            { id: "egg", text: "6x Αυγά", for: "Για το Μείγμα" },
            { id: "sugar", text: "1 φλυτζάνι Ζάχαρη", for: "Για το Μείγμα" },
            { id: "sunflower_oil", text: "1 φλυτζάνι Ηλιέλαιο", for: "Για το Μείγμα" },
            { id: "s_r_flour", text: "1 φλυτζάνι Φαρινάπ", for: "Για το Μείγμα" },
            { id: "baking_powder", text: "1/2 Μπέικιν", for: "Για το Μείγμα" },
            { id: "vanilla", text: "1x Βανίλια", for: "Για το Μείγμα" },
            { id: "cocoa", text: "3κ.σ. Κακάο", for: "Για το Μείγμα" },
            { id: "sugar", text: "1 φλυτζάνι Ζάχαρη", for: "Για το Σιρόπι" },
            { id: "water", text: "2 φλυτζάνια Νερό", for: "Για το Σιρόπι" }
        ],
        hiddenIngredients: ["oil", "flour", "butter", "lemon_juice"],
        steps: [
            { text: "Χτυπάμε όλα τα υλικά για το κέικ (Αυγά, Ζάχαρη, Ηλιέλαιο, Φαρινάπ, Μπέικιν, Βανίλια, Κακάο) στο μίξερ.", pic: null },
            { text: "Αδειάζουμε το μείγμα σε βουτυρωμένο ταψί και ψήνουμε στους 180°C για 30 λεπτά.", pic: null },
            { text: "Αφήνουμε το κέικ να κρυώσει τελείως.", pic: null },
            { text: "Για το σιρόπι: Βράζουμε τη Ζάχαρη με το Νερό (και λίγο λεμόνι) για 7 λεπτά και σιροπιάζουμε το κρύο γλυκό με το καυτό σιρόπι.", pic: null },
            { text: "Για την επικάλυψη: Σε κατσαρολάκι λιώνουμε την Κουβερτούρα με το Γάλα, την Άχνη και το Βούτυρο.", pic: null },
            { text: "Περιχύνουμε το γλυκό με το γλάσο σοκολάτας και βάζουμε στο ψυγείο.", pic: null }
        ]
    },
    {
        id: "tiramisu",
        title: "Τιραμισού",
        description: "Η διάσημη ιταλική λιχουδιά σε μια εύκολη αλλά αυθεντική σπιτική εκδοχή. Μπισκότα σαβουαγιάρ βουτηγμένα σε δυνατό καφέ και λικέρ, εναλλάσσονται με μια πλούσια και αέρινη κρέμα μασκαρπόνε, δημιουργώντας ένα δροσερό και εκλεπτυσμένο επιδόρπιο.",
        picture: null,
        tags: ["Γλυκά", "Εύκολα", "Γρήγορα"],
        ingredients: [
            { id: "ladyfingers", text: "2 πακέτα Σαβουαγιάρ", for: "Για το Μείγμα" },
            { id: "sugar", text: "1 φλυτζανάκι του καφέ Ζάχαρη", for: "Για το Μείγμα" },
            { id: "water", text: "2 φλυτζανάκια Νερό χλιαρό", for: "Για το Μείγμα" },
            { id: "nescafe", text: "2κ.γ. Νες Καφέ", for: "Για το Μείγμα" },
            { id: "sugar", text: "3κ.σ. Ζάχαρη", for: "Για την Κρέμα" },
            { id: "heavy_cream_green", text: "1x Κρέμα Γάλακτος Πράσινη", for: "Για την Κρέμα" },
            { id: "cream_cheese", text: "1 συσκευασία Τυρί Κρέμα", for: "Για την Κρέμα" },
            { id: "egg_yolk", text: "2x Κρόκους Αυγού", for: "Για την Κρέμα" }
        ],
        hiddenIngredients: ["heavy_cream", "egg"],
        steps: [
            { text: "Διαλύουμε τον Νες Καφέ στο χλιαρό Νερό και προσθέτουμε το φλυτζανάκι Ζάχαρη να λιώσει.", pic: null },
            { text: "Για την κρέμα: Χτυπάμε στο μίξερ την Κρέμα Γάλακτος, το Τυρί Κρέμα, τη Ζάχαρη (3 κ.σ.) και τους Κρόκους μέχρι να αφρατέψουν.", pic: null },
            { text: "Βουτάμε ένα-ένα τα Σαβουαγιάρ γρήγορα στο μείγμα του καφέ (να μην μουλιάσουν πολύ).", pic: null },
            { text: "Στρώνουμε μια σειρά Σαβουαγιάρ στη βάση ενός πυρέξ.", pic: null },
            { text: "Απλώνουμε από πάνω τη μισή κρέμα.", pic: null },
            { text: "Επαναλαμβάνουμε με άλλη μια στρώση Σαβουαγιάρ και τελειώνουμε με την υπόλοιπη κρέμα.", pic: null },
            { text: "Πασπαλίζουμε την επιφάνεια με κακάο και αφήνουμε στο ψυγείο να παγώσει.", pic: null }
        ]
    }
];

/* --- EXTERNAL RECIPES (Link to other sites) --- */
export const externalRecipes = [
    {
        id: "koulourakia-me-portokali",
        title: "Κουλουράκια με Πορτοκάλι",
        link: "https://www.xrysessyntages.gr/εξαιρετικά-κουλουράκια-πολύ-νόστιμα/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2020/08/117931567_180662550100638_5982672690733936817_o.jpg.webp",
        tags: ["Σνακ", "Γλυκά", "Εύκολα", "Γρήγορα", "Καθημερινά"],
        ingredients: ["str_yogurt", "sugar", "seed_oil", "egg", "egg_yolk", "water", "vanilla", "orange_peel", "baking_powder", "a_p_flour", "oil", "flour"]
    },
    {
        id: "tiropita-xoris-fillo",
        title: "Τυρόπιτα Χωρίς Φύλλο",
        link: "https://www.daddy-cool.gr/sintages/i-efkoli-pita-gia-archaries.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/06/23/i-efkoli-pita-gia-archaries_1687535022.jpg",
        tags: ["Πίτες", "Εύκολα", "Γρήγορα", "Σνακ", "Καθημερινά"],
        ingredients: ["str_yogurt", "milk", "water", "sunflower_oil", "egg", "salt", "pepper", "a_p_flour", "baking_powder", "feta", "butter", "sesame", "oil", "flour"]
    },
    {
        id: "mosxaraki-eksoxiko-sti-ladokolla",
        title: "Μοσχαράκι Εξοχικό στη Λαδόκολλα",
        link: "https://live-kitchen.gr/mosxari-laxanika-saltsa/",
        type: "generic",
        picture: "https://live-kitchen.gr/wp-content/uploads/2025/05/enhanced_P1025587-00_03_50_14-Still003s.jpg",
        tags: ["Εύκολα", "Φαγητά", "Κυριακάτικα"],
        ingredients: ["beef_neck", "onion", "tomato", "potato", "red_pepper", "green_pepper", "garlic", "tomato_paste", "mustard", "olive_oil", "water", "salt", "thyme", "paprika", "pepper", "bay_leaves", "parsley", "oil", "meat", "vegetable"]
    },
    {
        id: "pitsa-tis-tebelas",
        title: "Πίτσα της Τεμπέλας",
        link: "https://youtu.be/WjlTfn8fjYU",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_2_pjkh6k.png",
        tags: ["Εύκολα", "Γρήγορα", "Σνακ", "Καθημερινά"],
        ingredients: ["a_p_flour", "water", "dry_yeast", "butter", "salt", "sugar", "olive_oil", "pizza_sauce", "red_pepper", "ham_shoulder", "gouda", "mozzarella", "oil", "flour", "meat", "vegetable"]
    },
    {
        id: "biftekia-me-patates-ston-fourno",
        title: "Μπιφτέκια με Πατάτες στο Φούρνο",
        link: "https://www.argiro.gr/recipe/mpiftekia-me-patates-sto-fourno/",
        type: "generic",
        picture: "https://www.argiro.gr/wp-content/uploads/2022/01/mpiftekia-afrata-lemonates-patates-fournou-1.jpg",
        tags: ["Φαγητά", "Κυριακάτικα", "Μέτριας Δυσκολίας"],
        ingredients: ["ground_beef", "onion", "tomato", "bread", "red_vinegar", "olive_oil", "oregano", "salt", "pepper", "potato", "mustard", "lemon_juice", "water", "oil", "meat", "vegetable"]
    },
    {
        id: "xoirini-prasotigania",
        title: "Χοιρινή Πρασοτηγανιά",
        link: "https://www.facebook.com/watch/?ref=saved&v=755730117157153",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_3_ig7cdh.png",
        tags: ["Φαγητά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["pork", "olive_oil", "white_wine", "oregano", "sweet_chili_flakes", "leek", "garlic", "salt", "pepper", "water", "lemon_juice", "mustard", "oil", "meat", "vegetable"]
    },
    {
        id: "biskota-merendas",
        title: "Μπισκότα Μερέντας",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0kfyBaqN2vGMgV4nzbFUVePYfDmo24xKg1Nw7kSVYJy9h9HbRH3DAk5JhW1Yk2xcSl&id=100040746672864",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745239/619994648_1746551283379744_7761617620979344561_n_m14phx.jpg",
        tags: ["Μπισκότα", "Γλυκά", "Εύκολα", "Καθημερινά", "Γρήγορα"],
        ingredients: ["a_p_flour", "baking_powder", "egg", "merenda", "flour"]
    },
    {
        id: "nistisima-malaka-biskotakia",
        title: "Νηστίσιμα Μαλακά Μπισκοτάκια",
        link: "https://www.facebook.com/spitikakaiapla/posts/pfbid0GCPHRtWMBh1gPeqc3TTn5L3UnzZoKFEVJW4VVwH9kgcCA5oVEv8wsYxdtZ2iBHF2l",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745239/621839541_18097469380930281_4524938771556702393_n_rxxnxy.jpg",
        tags: ["Μπισκότα", "Γλυκά", "Εύκολα", "Νηστίσιμα"],
        ingredients: ["a_p_flour", "vanilla", "baking_soda", "salt", "cocoa", "margarine", "sugar", "cognac", "chocolate_drops", "vinegar", "flour"]
    },
    {
        id: "tiropitakia-krouasan",
        title: "Τυροπιτάκια Κρουασάν",
        link: "https://www.facebook.com/watch/?ref=saved&v=1557595822248375",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/Screenshot_4_agaazt.png",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "sugar", "dry_yeast", "egg_white", "vegetable_oil", "salt", "a_p_flour", "cheese", "egg_yolk", "sesame", "oil", "flour", "egg"]
    },
    {
        id: "afrata-almira-koulourakia",
        title: "Αφράτα Αλμυρά Κουλουράκια",
        link: "https://www.facebook.com/watch/?ref=saved&v=2150281822131092",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745241/Screenshot_5_y9evku.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["s_r_flour", "salt", "paprika", "regato", "vegetable_oil", "water", "egg_yolk", "oil", "flour", "egg"]
    },
    {
        id: "atomika-tsourekakia-me-sokolata",
        title: "Ατομικά Τσουρεκάκια με Σοκολάτα",
        link: "https://youtu.be/RHPx_b4WbG4",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745241/Screenshot_6_u2bsyi.png",
        tags: ["Γλυκά", "Σνακ", "Μέτριας Δυσκολίας"],
        ingredients: ["bread_flour", "sugar", "dry_yeast", "milk", "butter", "egg", "salt", "orange", "makhlepi", "mastic_powder", "vanilla", "milk_chocolate", "sesame", "flour"]
    },
    {
        id: "zabonokaseropitakia",
        title: "Ζαμπονοκασεροπιτάκια",
        link: "https://www.facebook.com/watch/?ref=saved&v=1545210256661302",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_7_in8ptn.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["s_r_flour", "egg", "str_yogurt", "olive_oil", "salt", "grated_graviera", "shredded_ham", "egg_yolk", "milk", "sesame", "oil", "flour", "meat"]
    },
    {
        id: "traganes-pleksoudes-sfoliatas-me-tiri",
        title: "Τραγανές Πλεξούδες Σφολιάτας με Τυρί",
        link: "https://www.facebook.com/watch/?ref=saved&v=1302980468148219",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_9_w9f5ql.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["feta", "gouda", "puff_pastry_sheet", "olive_oil", "egg", "cheese", "oil"]
    },
    {
        id: "malaka-kritsinia-karotou",
        title: "Μαλακά Κριτσίνια Καρότου",
        link: "https://www.facebook.com/watch/?ref=saved&v=1444783603455339",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745247/Screenshot_10_ok9be3.png",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["carrot", "goat_yogurt", "olive_oil", "whole_wheat_flour", "baking_powder", "salt", "oil", "flour", "vegetable"]
    },
    {
        id: "melitzanes-ston-fourno-gemistes-me-tiria",
        title: "Μελιτζάνες στον Φούρνο Γεμιστές με Τυριά",
        link: "https://www.facebook.com/watch/?ref=saved&v=1683365348990499",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745246/Screenshot_11_zotvmi.png",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα"],
        ingredients: ["eggplant", "salt", "olive_oil", "cream_cheese", "cheese_mix", "pepper", "tomato_sauce", "basil", "cheese", "oil", "cheese", "vegetable"]
    },
    {
        id: "siropiasto-gliko-me-karida-kai-krema",
        title: "Σιροπιαστό Γλυκό με Καρύδα και Κρέμα",
        link: "https://www.facebook.com/watch/?ref=saved&v=702620759194370",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745247/Screenshot_12_eibinl.png",
        tags: ["Γλυκά", "Μέτριας Δυσκολίας"],
        ingredients: ["egg", "shredded_coconut", "breadcrumbs", "vegetable_oil", "sugar", "oil", "baking_powder", "water", "lemon_juice", "milk", "corn_flour", "vanilla", "whipped_topping_mix", "nuts", "oil", "flour"]
    },
    {
        id: "pasxalino-katsikaki",
        title: "Πασχαλινό Κατσικάκι",
        link: "https://www.daddy-cool.gr/sintages/paschalino-katsikaki-me-tragani-petsa-sto-fourno.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2025/04/12/paschalino-katsikaki-me-tragani-petsa-sto-fourno_1744462375.jpg",
        tags: ["Φαγητά", "Δύσκολα", "Γιορτινά"],
        ingredients: ["goat", "salt", "pepper", "garlic", "water", "milk_butter", "meat"]
    },
    {
        id: "gemistes-kokkines-piperies-me-tiri",
        title: "Γεμιστές Κόκκινες Πιπεριές με Τυρί",
        link: "https://live-kitchen.gr/kokkines-gemistes-piperies-me-tyri-ston-fourno/",
        type: "generic",
        picture: "https://live-kitchen.gr/wp-content/uploads/2022/07/%CE%A3%CF%84%CE%B9%CE%B3%CE%BC%CE%B9%CF%8C%CF%84%CF%85%CF%80%CE%BF-%CE%BF%CE%B8%CF%8C%CE%BD%CE%B7%CF%82-2022-06-29-171602.00_00_13_00.Still005.jpg",
        tags: ["Φαγητά", "Εύκολα"],
        ingredients: ["red_pepper", "feta", "graviera", "yogurt", "olive_oil", "garlic", "parsley", "spearmint", "oregano", "tomato", "pepper", "balsamic_vinegar", "oil", "cheese", "vegetable"]
    },
    {
        id: "zabonotiropita",
        title: "Ζαμπονοτυρόπιτα",
        link: "https://www.daddy-cool.gr/sintages/zamponotyropita-sti-forma-tou-keik-gia-to-paschalino-trapezi.html",
        type: "general",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2024/04/23/zamponotyropita-sti-forma-tou-keik-gia-to-paschalino-trapezi_1713873119.jpg",
        tags: ["Πίτες", "Σνακ", "Εύκολα", "Κυριακάτικα"],
        ingredients: ["egg", "milk", "str_yogurt", "pepper", "phyllo_dough", "butter", "gouda", "ham", "mozzarella", "feta", "cheese", "meat"]
    },
    {
        id: "nistisima-eliopsoma",
        title: "Νηστίσιμα Ελιόψωμα",
        link: " https://youtu.be/N09KPgfsefE",
        type: "youtube",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745248/Screenshot_13_zpwn6w.png",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα", "Νηστίσιμα"],
        ingredients: ["a_p_flour", "water", "dry_yeast", "salt", "sugar", "olive_oil", "olive", "sesame", "oil", "flour", "vegetable"]
    },
    {
        id: "portokalopita",
        title: "Πορτοκαλόπιτα",
        link: "https://www.facebook.com/watch/?ref=saved&v=545006551438440",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_14_chtvuu.png",
        tags: ["Γλυκά", "Κυριακάτικα", "Μέτριας Δυσκολίας"],
        ingredients: ["water", "sugar", "orange_juice", "cinnamon", "phyllo_dough", "egg", "sunflower_oil", "vanilla", "baking_powder", "yogurt", "orange_zest", "oil"]
    },
    {
        id: "panefkolo-gliko-me-filla-kai-indokarido",
        title: "Πανεύκολο Γλυκό με Φύλλα και Ινδοκάρυδο",
        link: "https://www.xrysessyntages.gr/πανεύκολο-γλυκό-με-φύλλα-και-ινδοκάρυ/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2019/03/MAKRY-1.jpg.webp",
        tags: ["Γλυκά", "Καθημερινά", "Εύκολα", "Νηστίσιμα"],
        ingredients: ["phyllo_dough", "shredded_coconut", "melted_margarine", "water", "sugar"]
    },
    {
        id: "rolo-kima-gemisto-me-tiria-kai-piperia",
        title: "Ρολό Κιμά Γεμιστό με Τυριά και Πιπεριά",
        link: "https://paxxi.gr/syntages/rolo-kima-gemisto-me-tyria-ke-piperia",
        type: "general",
        picture: "https://paxxi.gr/wp-content/uploads/2023/12/Rolo-kima-gemisto-me-tyria.jpg",
        tags: ["Φαγητά", "Κυριακάτικα", "Γιορτινά", "Μέτριας Δυσκολίας"],
        ingredients: ["ground_beef", "ground_pork", "onion", "tomato", "parsley", "breadcrumbs", "egg", "mustard", "olive_oil", "cumin", "salt", "pepper", "feta", "edam", "florina_pepper", "potato", "lemon_juice", "oregano", "oil", "cheese", "meat", "vegetable"]
    },
    {
        id: "loukanikopita-tis-gkolfo",
        title: "Λουκανικόπιτα της Γκόλφω",
        link: "https://www.xrysessyntages.gr/η-απίθανη-λουκανικόπιτα-της-γκόλφω-πο/",
        type: "generic",
        picture: "https://www.xrysessyntages.gr/wp-content/uploads/2022/10/%CE%97-%CE%B1%CF%80%CE%AF%CE%B8%CE%B1%CE%BD%CE%B7-%CE%BB%CE%BF%CF%85%CE%BA%CE%B1%CE%BD%CE%B9%CE%BA%CF%8C%CF%80%CE%B9%CF%84%CE%B1-%CF%84%CE%B7%CF%82-%CE%93%CE%BA%CF%8C%CE%BB%CF%86%CF%89-%CF%80%CE%BF%CF%85-%CF%80%CE%B9%CE%BF-%CE%B5%CF%8D%CE%BA%CE%BF%CE%BB%CE%B7-%CE%94%CE%95%CE%9D-%CF%85%CF%80%CE%AC%CF%81%CF%87%CE%B5%CE%B9.png.webp",
        tags: ["Πίτες", "Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "frankfurt_sausage", "mozzarella", "parmesan", "green_pepper", "red_pepper", "tomato", "oregano", "pepper", "paprika", "olive_oil", "egg_white", "egg_yolk", "egg", "breadcrumbs", "oil", "meat", "cheese", "vegetable"]
    },
    {
        id: "sfoliatinia-me-tiri-krema-kai-edam",
        title: "Σφολιατίνια με Τυρί Κρέμα και Ένταμ",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02heuRUjd9K23jhdyNTqBVVgziorETpw5rWkLCxTUrBH8Md8giYQzB1xqCbZHAENMRl&id=100057038966319",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745240/484135805_1155800146331273_3661966295487467335_n_gikonn.jpg",
        tags: ["Σνακ", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "cream_cheese", "edam", "gouda", "cheese", "egg", "milk"]
    },
    {
        id: "afrata-stafidopsoma-xoris-mixer",
        title: "Αφράτα Σταφιδόψωμα Χωρίς Μίξερ",
        link: "https://www.facebook.com/watch/?ref=saved&v=1373650264015223",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_15_z54mqw.png",
        tags: ["Σνακ", "Γλυκά", "Εύκολα"],
        ingredients: ["water", "instant_yeast", "sunflower_oil", "str_yogurt", "egg", "sugar", "makhlepi", "vanilla", "salt", "a_p_flour", "black_raisin", "oil", "flour"]
    },
    {
        id: "saltsa-manitarion-gia-snitsel-kai-makaronia",
        title: "Σάλτσα Μανιταριών για Σνίτσελ και Μακαρόνια",
        link: "https://www.daddy-cool.gr/sintages/saltsa-manitarion-gia-snitsel-kai-makaronia.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2024/01/16/saltsa-manitarion-gia-snitsel-kai-makaronia_1705412235.jpg",
        tags: ["Συνοδευτικά", "Σάλτσα", "Φαγητά", "Εύκολα"],
        ingredients: ["mushroom", "onion", "garlic", "florina_pepper", "salt", "pepper", "paprika", "parsley", "heavy_cream", "water", "corn_flour", "butter", "cognac", "olive_oil", "oil", "flour", "vegetable"]
    },
    {
        id: "xristougenniatikes-tiroboukitses",
        title: "Χριστουγεννιάτικες Τυρομπουκίτσες",
        link: "https://www.facebook.com/watch/?ref=saved&v=1416050679357818",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745253/Screenshot_16_wyhiiv.png",
        tags: ["Σνακ", "Γιορτινά", "Εύκολα"],
        ingredients: ["seed_oil", "milk", "egg", "salt", "pepper", "grated_cheese", "baking_powder", "a_p_flour", "oil", "flour", "cheese"]
    },
    {
        id: "almiri-tarta-me-manitaria-kai-kotopoulo",
        title: "Αλμυρή Τάρτα με Μανιτάρια και Κοτόπουλο",
        link: "https://www.konstantinas-kitchen.gr/almyri-tarta-me-manitaria-kai-kotopou/",
        type: "generic",
        picture: "https://www.konstantinas-kitchen.gr/wp-content/uploads/2023/07/%CE%91%CE%BB%CE%BC%CF%85%CF%81%CE%AE-%CE%A4%CE%AC%CF%81%CF%84%CE%B1-%CE%BC%CE%B5-%CE%BC%CE%B1%CE%BD%CE%B9%CF%84%CE%AC%CF%81%CE%B9%CE%B1-%CE%BA%CE%B1%CE%B9-%CE%BA%CE%BF%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF-konstantinas-kitchen.jpg",
        tags: ["Πίτες", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["puff_pastry_sheet", "mushroom", "chicken_breast", "red_pepper", "onion", "parsley", "egg", "white_wine", "olive_oil", "kefalotyri", "salt", "pepper", "oil", "meat", "vegetable"]
    },
    {
        id: "patatosalata-se-sxima-doro-gia-tin-protoxronia",
        title: "Πατατοσαλάτα σε Σχήμα Δώρο για την Πρωτοχρονιά",
        link: "https://www.daddy-cool.gr/dear-santa/patatosalata-se-schima-doro-gia-tin-protochronia.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/12/27/patatosalata-se-schima-doro-gia-tin-protochronia_1703684849.jpg",
        tags: ["Σαλάτες", "Εύκολα", "Γιορτινά"],
        ingredients: ["potato", "bacon", "pickle", "red_pepper", "green_pepper", "parsley", "onion", "kefalograviera", "salt", "pepper", "cream_cheese", "mayo", "mustard", "olive_oil", "vinegar", "lemon_juice", "oil", "cheese", "vegetable"]
    },
    {
        id: "gianniotiko-gliko-me-fillo-kai-karidia",
        title: "Γιαννιώτικο Γλυκό με Φύλλο και Καρύδια",
        link: "https://www.syntagesmou.gr/2024/12/blog-post_99.html?m=1",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiklil_4s5J5niFV1PTIk-z2tRFinvu17u3Bp4fnpRzmEOb2bnopSTjsWNSIwBsI6Vs14pawv95iUNLU2588YHjlzmqF4IALQ4NPTvMt3uZPOCBIy8sxxfOqXjPobDzPDGB0G6ir66bdukKG14i7a1u8IsB81JmnBFUhsDHP3B4WPcC60Z-ITg6nO5eivo/w640-h572-rw/IMG_4247.webp",
        tags: ["Γλυκά", "Γιορτινά", "Εύκολα", "Εν Δυνάμει Νηστίσιμο"],
        ingredients: ["phyllo_dough", "chopped_walnut", "kadaifi", "chopped_almonds", "cinnamon", "ground_clove", "melted_margarine", "butter", "sugar", "water", "cinnamon_stick", "whole_clove", "lemon_juice", "nuts"]
    },
    {
        id: "giortino-gkioulbasi-me-xroiino-kotsi-kai-arnisio-bouti",
        title: "Γιορτινό Γκιούλμπασι με Χοιρινό Κότσι και Αρνίσιο Μπούτι",
        link: "https://www.koutalitsa.gr/giortino-gkioylmpasi-me-choirino-kotsi-kai-arnisio-mpoyti-gia-to-christoygenniatiko-i-to-protochroniatiko-trapezi",
        type: "generic",
        picture: "https://www.koutalitsa.gr/wp-content/uploads/2021/12/gkioulmpasi-stin-ladokolla-gia-to-giortino-trapezi_1640345424.jpg",
        tags: ["Φαγητά", "Γιορτινά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["lamb_thigh", "pork_knuckle", "salt", "thyme", "pepper", "olive_oil", "garlic", "carrot", "lemon_juice", "oregano", "oil", "meat", "vegetable"]
    },
    {
        id: "manitaria-plevrotous-ston-fourno-me-patates",
        title: "Μανιτάρια Πλευρώτους στον Φούρνο με Πατάτες",
        link: "https://www.koutalitsa.gr/manitaria-pleyrotoys-ston-foyrno-me-patates-loykoymaki-sketo",
        type: "generic",
        picture: "https://www.koutalitsa.gr/wp-content/uploads/2024/05/jhnmnhgn.jpg",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα", "Νηστίσιμα"],
        ingredients: ["mushroom", "potato", "water", "lemon_juice", "olive_oil", "mustard", "turmeric", "salt", "pepper", "cube", "rosemary", "oil", "vegetable"]
    },
    {
        id: "rolo-sfoliatas",
        title: "Ρολό Σφολιάτας",
        link: "https://www.facebook.com/reel/4069121996666156/",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745256/Screenshot_17_mkcuaz.png",
        tags: ["Πίτες", "Σνακ", "Κυριακάτικα", "Εύκολα", "Γρήγορα"],
        ingredients: ["puff_pastry_sheet", "mozzarella", "chopped_ham", "pickles", "egg", "egg_yolk", "cheese", "meat", "vegetable"]
    },
    {
        id: "kotopoulo-lemonato-me-patates-ston-fourno",
        title: "Κοτόπουλο Λεμονάτο με Πατάτες στο Φούρνο",
        link: "https://petrosmaounatzis.com/κοτόπουλο-λεμονάτο-με-πατάτες-στο-φού",
        type: "generic",
        picture: "https://petrosmaounatzis.com/wp-content/uploads/2024/12/%CE%BA%CE%BF%CF%84%CE%BF%CF%80%CE%BF%CF%85%CE%BB%CE%BF_%CE%BB%CE%B5%CE%BC%CE%BF%CE%BD%CE%B1%CF%84%CE%BF_%CF%80%CE%B1%CF%84%CE%B1%CF%84%CE%B5%CF%82_%CE%A0%CE%B5%CF%84%CF%81%CE%BF%CF%82_%CE%9C%CE%B1%CE%BF%CF%85%CE%BD%CE%B1%CF%84%CE%B6%CE%B7%CF%82.png",
        tags: ["Φαγητά", "Κυριακάτικα", "Εύκολα"],
        ingredients: ["baby_potato", "olive_oil", "lemon_juice", "garlic", "paprika", "salt", "pepper", "oil", "vegetable"]
    },
    {
        id: "avgosalata-droseri-kai-pedanostimi",
        title: "Αυγοσαλάτα Δροσερή και Πεντανόστιμη",
        link: "https://www.facebook.com/watch/?ref=saved&v=557093463730470",
        type: "facebook",
        picture: "https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1770745256/Screenshot_18_fmcd4v.png",
        tags: ["Σαλάτες", "Γιορτινά", "Εύκολα"],
        ingredients: ["potato", "egg", "onion", "carrot", "cherry_tomato", "corn", "olive_oil", "salt", "pickle", "mayo", "str_yogurt", "dill", "pepper", "apple_cider_vinegar", "oil", "vegetable"]
    },
    {
        id: "mini-tiganites-pancakes-se-5-lepta",
        title: "Μίνι Τηγανίτες (Pancakes) σε 5 Λεπτά",
        link: "https://xrysoskoufaki.gr/μίνι-τηγανίτεςpancakes-σε-5-λεπτά",
        type: "generic",
        picture: "https://xrysoskoufaki.gr/wp-content/uploads/2024/10/tiganites_gty.jpg",
        tags: ["Γλυκά", "Σνακ", "Καθημερινά", "Εύκολα", "Γρήγορα"],
        ingredients: ["egg", "sugar", "vanilla", "oil", "str_yogurt", "milk", "a_p_flour", "baking_powder", "salt", "powdered_sugar", "flour"]
    },
    {
        id: "kotopoulo-me-rizi-sto-fourno",
        title: "Κοτόπουλο με Ρύζι στο Φούρνο",
        link: "https://mpaxarikkanela.blogspot.com/2024/06/blog-post_97.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0cULROGwSSHZCWt_zR-7ug_DIUDTO2PZqMsEgKixquCIx95zBy0stPocit_aRRKmFiM0aFdmWqDMZMWqTuX3RqwzweRIrKmMMyJroUvfO2omwL-RTCYGlqvO40zy4ls5mW6lJbCE8_9gCctriL-1Bm68w95XNv7mG4P8CASWn9JcdM2uRNBLJyrKR9YE/s16000/1000004219-01.jpeg",
        tags: ["Φαγητά", "Καθημερινά", "Εύκολα"],
        ingredients: ["chicken", "salt", "pepper", "thyme", "paprika", "oregano", "olive_oil", "water", "rice", "chicken_cube", "oil", "meat", "vegetable"]
    },
    {
        id: "grigori-zabonokaseropita-gia-ton-giortino-boufe",
        title: "Γρήγορη Ζαμπονοκασερόπιτα για τον Γιορτινό Μπουφέ",
        link: "https://www.daddy-cool.gr/dear-santa/grigori-zamponokaseropita-gia-ton-giortino-mpoufe.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2022/12/22/zamponokaseropita-gia-ton-giortino-mpoufe_1671712393.jpg",
        tags: ["Πίτες", "Σνακ", "Γιορτινά", "Εύκολα", "Γρήγορα"],
        ingredients: ["puff_pastry_sheet", "gouda", "ham", "green_pepper", "red_pepper", "tomato_sauce", "egg_yolk", "water", "sesame", "oil", "cheese", "meat", "vegetable", "egg"]
    },
    {
        id: "efkoli-giortini-salata-se-5-lepta",
        title: "Εύκολη Γιορτινή Σαλάτα σε 5 Λεπτά",
        link: "https://mageirikhkaisuntages.blogspot.com/2022/12/5_7.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVxby1FNBMPRKM79WqXMHW9V4XIymPtsc4xqNI0nrzLfyZ_MIuLk8bR9NAQDUSfXoEV-hCIYcSb-OMUUMZj7T4o8Gng4I9Uy1UVmyQqkUjjdfeEOlifFpSLAIry9MYGLSv8ex12TWv6gn9IcvirZSO84KJl4a4dGAXxKq-93eOtQ5FEWmXorAbw-vv/s900/page.jpg",
        tags: ["Σαλάτες", "Γιορτινά", "Γρήγορα", "Εύκολα"],
        ingredients: ["str_yogurt", "mayo", "potato", "onion", "carrot", "salt", "pepper", "egg", "vegetable"]
    },
    {
        id: "koulouria-afros",
        title: "Κουλούρια Αφρός",
        link: "https://mageirikhkaisuntages.blogspot.com/2021/11/blog-post_44.html",
        type: "generic",
        picture: "https://blogger.googleusercontent.com/img/a/AVvXsEjw-Z6kJfFiiOZjWwL7gWpcT9uDAhpS8NpBgti6QEeaGeaazJQiXwG79OjwagW3ToZjxU_2DaWU3dOO4vT7a9E42qUwW1TCrFjH7j0-yyV9oBDvEZOE6WpDNIHsWrt9Y6N6DT8hFwRMIcm1s3c0ynDD9YveCOPgCnk2c6_FyEHx8WxTRih8H9JlUy1M=s956",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "water", "dry_yeast", "sugar", "salt", "egg_yolk", "seed_oil", "a_p_flour", "oil", "flour", "egg"]
    },
    {
        id: "tirokouloura-me-zabon-gia-to-sxoleio",
        title: "Τυροκούλουρα με Ζαμπόν για το Σχολείο",
        link: "https://www.daddy-cool.gr/sintages/tyrokouloura-me-zampon-gia-to-scholeio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2023/10/13/tyrokouloura-me-zampon-kai-tyri-gia-to-scholeio_1697194064.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["a_p_flour", "egg_white", "milk", "water", "seed_oil", "dry_yeast", "sugar", "salt", "gouda", "ham", "egg_yolk", "egg", "sesame", "oil", "flour", "cheese", "meat"]
    },
    {
        id: "afrata-atomika-tsourekakia-xoris-zimoma",
        title: "Αφράτα Ατομικά Τσουρεκάκια Χωρίς Ζύμωμα",
        link: "https://www.daddy-cool.gr/sintages/afrata-atomika-tsourekakia-choris-zymoma-idanika-kai-gia-kolatsio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/02/09/ta-pio-afrata-kai-eukola-atomika-tsourekakia.jpg",
        tags: ["Γλυκά", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "dry_yeast", "sugar", "butter", "egg", "salt", "makhlepi", "cardamom", "bread_flour", "flour"]
    },
    {
        id: "afrata-tirokouloura-me-feta-kai-giaourti",
        title: "Αφράτα Τυροκούλουρα με Φέτα και Γιαούρτι",
        link: "https://www.daddy-cool.gr/sintages/afrata-tyrokouloura-me-feta-kai-giaourti-idanika-gia-kolatsio.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/03/20/daddy-cool-2020-03-20_730034-e1584705433327.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "dry_yeast", "sugar", "egg", "egg_white", "sunflower_oil", "s_r_flour", "salt", "egg_yolk", "sesame", "feta", "yogurt", "pepper", "oil", "flour", "vegetable", "cheese"]
    },
    {
        id: "malaka-psomakia-gemista-me-feta",
        title: "Μαλακά Ψωμάκια Γεμιστά με Φέτα",
        link: "https://www.daddy-cool.gr/sintages/syntagi-gia-psomakia-gemista-me-feta-malaka-san-vamvaki.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2020/06/04/daddy-cool-2020-06-04_283590-e1591251736643.jpg",
        tags: ["Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["milk", "sugar", "dry_yeast", "seed_oil", "egg", "salt", "bread_flour", "feta", "sesame", "oil", "flour", "cheese"]
    },
    {
        id: "pitakia-strifta-me-feta",
        title: "Πιτάκια Στριφτά με Φέτα",
        link: "https://www.daddy-cool.gr/sintages/pitakia-strifta-apo-live-kitchen.html",
        type: "generic",
        picture: "https://www.daddy-cool.gr/wp-content/uploads/2021/02/27/syntagi-gia-stryftopitaria-apo-to-live-kitchen-vinteo_1614429511-e1614425944301.jpg",
        tags: ["Πίτες", "Σνακ", "Καθημερινά", "Εύκολα"],
        ingredients: ["water", "sunflower_oil", "milk", "dry_yeast", "sugar", "salt", "egg_white", "bread_flour", "feta", "olive_oil", "egg_yolk", "egg", "oil", "flour", "cheese"]
    },
    {
        id: "psaronefri-me-manitaria",
        title: "Ψαρονέφρι με Μανιτάρια",
        link: "https://chefoulis.gr/ψαρονέφρι-με-μανιτάρια/",
        type: "generic",
        picture: "https://chefoulis.gr/wp-content/uploads/2025/01/Ψαρονέφρι-με-μανιτάρια.jpg",
        tags: ["Φαγητά", "Εύκολα", "Κυριακάτικα"],
        ingredients: ["pork_tenderloin", "mushroom", "onion", "garlic", "a_p_flour", "lemon_juice", "lemon_zest", "curry", "salt", "pepper", "olive_oil", "mustard", "white_wine", "chicken_cube", "water", "oil", "flour", "meat", "vegetable"]
    }
];
