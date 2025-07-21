const libraMenus = {
    temporada1: {
        name: "Temporada 1",
        categories: {
            "Tragos Fuertes": [
                { name: "Infernal"/*, type: "Light liquor", alcohol: 180, base: "Cola", flavors: "Fruity 80, Sour 20, Sweet 20, Energy 80", extras: "Hot Chocolate, Cream, Sugar, Froth", glass: "Lowball"*/ },
                { name: "Timebomb (Light)"/*, type: "Light liquor", alcohol: 190, base: "Soda", flavors: "Sweet 100", extras: "Coffee, Cream, Sugar, Froth", glass: "Cocktail"*/ },
                { name: "Timebomb (Red)"/*, type: "Red liquor", alcohol: 190, base: "Seltzer", flavors: "Fruity 40, Sour 100, Energy 20", extras: "Sugar, Foam", glass: "Stein"*/ },
                { name: "Deathnote"/*, type: "Dark liquor", alcohol: 180, base: "Soda", flavors: "Fruity 20, Sour 20, Sweet 20", extras: "Coffee, Cream, Sugar, Froth", glass: "Cocktail"*/ },
                { name: "Ectoplasma"/*, type: "Red liquor", alcohol: 160, base: "Soda", flavors: "Fruity 40, Sour 80, Sweet 20, Energy 100", extras: "-", glass: "Hurricane"*/ }
            ],
            "Tragos Medianos": [
                { name: "Jugo de Pixie"/*, type: "Red liquor", alcohol: 140, base: "Seltzer", flavors: "Fruity 80, Sweet 60, Energy 80", extras: "Coffee, Cream, Sugar, Froth", glass: "Margarita"*/ },
                { name: "Amanecer"/*, type: "Dark liquor", alcohol: 120, base: "Seltzer", flavors: "Fruity 60, Sour 40, Sweet 20, Energy 80", extras: "-", glass: "Snifter"*/ },
                { name: "Alastor"/*, type: "Red liquor", alcohol: 120, base: "Seltzer", flavors: "Fruity 60, Sour 40, Sweet 40, Energy 20", extras: "Cream, Sugar, Froth", glass: "Martini"*/ },
                { name: "Ballena Azul"/*, type: "Light liquor", alcohol: 100, base: "Cola", flavors: "Fruity 40, Sour 40, Sweet 100, Energy 60", extras: "Coffee, Cream, Sugar, Froth", glass: "Hurricane"*/ }
            ],
            "Tragos Suaves": [
                { name: "Semen de Pitufo"/*, type: "Light liquor", alcohol: 80, base: "Soda", flavors: "Fruity 40, Sour 60, Sweet 60, Energy 80", extras: "Hot Chocolate, Cream, Sugar, Froth", glass: "Cocktail"*/ },
                { name: "Cupcake"/*, type: "Red liquor", alcohol: 80, base: "Cola", flavors: "Fruity 100, Sour 60, Sweet 80, Energy 100", extras: "Ice, Coffee, Sugar, Froth", glass: "Snifter"*/ },
                { name: "Licuado de Ingeniero"/*, type: "Light liquor", alcohol: 80, base: "Cola", flavors: "Fruity 100, Sour 40, Sweet 20", extras: "Ice, Coffee, Sugar, Froth, Cream", glass: "Mug"*/ },
                { name: "Reflejo"/*, type: "Red liquor", alcohol: 60, base: "Seltzer", flavors: "Sour 20, Sweet 20, Energy 100", extras: "-", glass: "Flute"*/ }
            ],
            "Tragos Sin Alcohol": [
                { name: "Limones de Jinx"/*, alcohol: "-", base: "Soda", flavors: "Fruity 100, Sour 100, Energy 60", extras: "Coffee, Milk, Cream, Sugar, Foam", glass: "Shot"*/ },
                { name: "Limón 4k"/*, alcohol: "-", base: "Soda", flavors: "Fruity 100, Sour 100, Sweet 60, Energy 40", extras: "Ice, Coffee, Sugar, Cream, Hot Chocolate", glass: "Pint"*/ },
                { name: "Virus Azul"/*, alcohol: "-", base: "Soda", flavors: "Fruity 20, Sour 80, Sweet 100, Energy 100", extras: "Coffee, Cream, Sugar", glass: "Highball"*/ },
                { name: "Lágrima"/*, alcohol: "-", base: "Água", flavors: "-", extras: "-", glass: "Shot"*/ }
            ]
        }
    },
    temporada2: {
        name: "Temporada 2",
        categories: {
            "Tragos Fuertes": [
                { name: "Frenesi"/*, type: "Red liquor", alcohol: 190, base: "Seltzer", flavors: "Fruity 60, Sour 40, Sweet 40, Energy 20", extras: "Cream, Sugar, Froth", glass: "Martini"*/ },
                { name: "Alastor"/*, type: "Red liquor", alcohol: 190, base: "Seltzer", flavors: "Fruity 60, Sour 40, Sweet 40, Energy 20", extras: "Cream, Sugar, Froth", glass: "Martini"*/ },
                { name: "Death Note"/*, type: "Dark liquor", alcohol: 180, base: "Soda", flavors: "Fruity 20, Sour 20, Sweet 20", extras: "Coffee, Cream, Sugar, Froth", glass: "Cocktail"*/ },
                { name: "Torsión Testicular"/*, type: "Light liquor", alcohol: 190, base: "Soda", flavors: "Fruity 100, Sour 20, Sweet 20, Energy 60", extras: "Ice, Coffee, Milk, Hot Chocolate, Foam", glass: "Cocktail"*/ },
                { name: "Infernal"/*, type: "Light liquor", alcohol: 180, base: "Cola", flavors: "Fruity 80, Sour 20, Sweet 20, Energy 80", extras: "Hot Chocolate, Cream, Sugar, Froth", glass: "Lowball"*/ },
                { name: "El Pierde Nalgas"/*, type: "Light liquor", alcohol: 190, base: "Seltzer", flavors: "Energy 40, Sweet 60, Sour 100", extras: "-", glass: "Stein"*/ }
            ],
            "Tragos Medios": [
                { name: "Tu Falta de Querer"/*, type: "Red liquor", alcohol: 120, base: "Soda", flavors: "Fruity 80, Sour 40, Energy 100", extras: "Ice, Sugar, Hot Chocolate, Cream, Foam", glass: "Martini"*/ },
                { name: "El Andrés"/*, type: "Red liquor", alcohol: 140, base: "Soda", flavors: "Fruity 100, Sour 20", extras: "Cream, Foam", glass: "Pint"*/ },
                { name: "Leche de Coneja"/*, type: "Red liquor", alcohol: 140, base: "Soda", flavors: "Fruity 100, Sour 100, Energy 60", extras: "Milk, Foam", glass: "Stein"*/ },
                { name: "Semen de Pitufo"/*, type: "Light liquor", alcohol: 120, base: "Soda", flavors: "Fruity 40, Sour 60, Sweet 60, Energy 80", extras: "Hot Chocolate, Cream, Sugar, Froth", glass: "Cocktail"*/ }
            ],
            "Tragos Suaves": [
                { name: "El Santo Prepucio"/*, type: "Light liquor", alcohol: 80, base: "Soda", flavors: "Fruity 100, Sweet 60, Energy 20", extras: "Ice, Cream, Foam", glass: "Shot"*/ },
                { name: "Noche Estrellada"/*, type: "Dark liquor", alcohol: 80, base: "Soda", flavors: "Fruity 60, Sour 40, Sweet 100", extras: "Ice, Sugar, Foam", glass: "Flute"*/ },
                { name: "Un Millón de Primaveras"/*, type: "Red liquor", alcohol: 80, base: "Soda", flavors: "Fruity 60, Sour 40, Sweet 20, Energy 100", extras: "Ice, Cream, Sugar, Foam", glass: "Snifter"*/ },
                { name: "La Máscara"/*, type: "Red liquor", alcohol: 100, base: "Seltzer", flavors: "Fruity 60, Sour 100, Sweet 60, Energy 80", extras: "Ice, Coffee, Cream, Foam", glass: "Margarita"*/ }
            ],
            "Tragos Sin Alcohol": [
                { name: "Limones de Jinx"/*, alcohol: "-", base: "Soda", flavors: "Fruity 100, Sour 100, Energy 60", extras: "Coffee, Milk, Cream, Sugar, Foam", glass: "Shot"*/ },
                { name: "Cumeada de Miku"/*, alcohol: "-", base: "Seltzer", flavors: "Sour 20, Sweet 20, Energy 100", extras: "Ice, Sugar, Cream, Foam", glass: "Flute"*/ },
                { name: "Me la Suda"/*, alcohol: "-", base: "Cola", flavors: "Fruity 100, Sweet 40, Energy 80", extras: "Ice, Cream, Sugar", glass: "Pint"*/ },
                { name: "Guepardex"/*, alcohol: "-", base: "Soda", flavors: "Sour 100, Sweet 40, Energy 100", extras: "Ice, Coffee, Foam", glass: "-"*/ }
            ]
        }
    },
    gothic: {
        name: "Gothic Menu",
        categories: {
            "Tragos Fuertes": [
                { name: "Ultratumba"/*, type: "Dark liquor", alcohol: 190, base: "Seltzer", flavors: "-", extras: "Coffee, Hot Chocolate", glass: "Cocktail"*/ },
                { name: "El Pecado de Lilith"/*, type: "Red liquor", alcohol: 190, base: "Soda", flavors: "Fruity 60, Sour 60, Sweet 60, Energy 20", extras: "Ice, Cream, Sugar, Foam", glass: "Hurricane"*/ },
                { name: "Glucoso Amanecer"/*, type: "Red liquor", alcohol: 180, base: "Soda", flavors: "Fruity 80, Sour 20, Sweet 40", extras: "Sugar", glass: "Flute"*/ }
            ],
            "Tragos Medios": [
                { name: "El Traumado"/*, type: "Red liquor", alcohol: 140, base: "Soda", flavors: "Fruity 100, Sour 80, Sweet 100", extras: "Coffee, Foam", glass: "Hurricane"*/ },
                { name: "Velo de Nicte"/*, type: "Dark liquor", alcohol: 140, base: "Soda", flavors: "Fruity 60, Sour 60, Sweet 100", extras: "Ice, Coffee, Hot Chocolate, Cream, Sugar", glass: "Highball"*/ },
                { name: "Néctar del Olvido"/*, type: "Light liquor", alcohol: 140, base: "-", flavors: "Fruity 80, Sour 100, Sweet 100", extras: "Cream, Sugar, Froth", glass: "Lowball"*/ }
            ],
            "Tragos Suaves": [
                { name: "Corazón Delator"/*, type: "Beer", alcohol: 120, base: "Cola", flavors: "Sour 40, Sweet 100, Energy 100", extras: "Ice, Sugar, Cream", glass: "Margarita"*/ },
                { name: "Lado Oscuro"/*, type: "Dark liquor", alcohol: 120, base: "-", flavors: "Fruity 20, Sour 20, Sweet 20", extras: "Coffee, Hot Chocolate, Ice", glass: "Mug"*/ },
                { name: "Silencio Carmesí"/*, type: "Red liquor", alcohol: 100, base: "Soda", flavors: "Fruity 100, Energy 20", extras: "Ice, Sugar", glass: "Shot"*/ }
            ],
            "Tragos Sin Alcohol": [
                { name: "La Nalgona"/*, alcohol: "-", base: "Seltzer", flavors: "Fruity 60, Sour 20, Sweet 100", extras: "Sugar, Cream, Foam", glass: "Martini"*/ },
                { name: "Cruzificado"/*, alcohol: "-", base: "Seltzer", flavors: "Fruity 20, Sour 20, Sweet 20, Energy 20", extras: "Cream, Foam", glass: "Hurricane"*/ },
                { name: "Luna Melancólica"/*, alcohol: "-", base: "Soda", flavors: "Sweet 80", extras: "Milk, Sugar, Foam", glass: "Flute"*/ }
            ]
        }
    }
};