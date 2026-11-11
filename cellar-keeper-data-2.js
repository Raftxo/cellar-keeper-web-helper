// Cellar Keeper — Cellar 2 — canonical data with physical shelf layout
// Source: https://steamcommunity.com/sharedfiles/filedetails/?id=3821795288 by kaorukamiya1980
// Layout (pisos / columns_spec): user-provided physical measurements of the in-game shelves.
// Auto-generated — do not edit directly.
export const CELLAR_DATA_2 = {
  "meta": {
    "source_guide": "https://steamcommunity.com/sharedfiles/filedetails/?id=3821795288",
    "source_author": "kaorukamiya1980",
    "game": "Cellar Keeper (app 4935510)",
    "cellar": 2,
    "total_bottles": 4424,
    "total_varietals": 45,
    "layout_source": "User-provided physical shelf measurements (complete)",
    "schema_version": "2.0",
    "notes": [
      "Brands within each column are sorted alphabetically.",
      "Column order matches the physical left-to-right layout on the shelf.",
      "Each column has `pisos` (rows) of bottles. Default 5; some shelves have 4.",
      "Bottle count per brand per column is given by columns_spec.",
      "Right-hand shelves mirror the left-hand ones (columns_spec reversed, e.g. 3/9/3/3 -> 3/3/9/3).",
      "Varietals are listed alphabetically within each floor until the full physical order is provided."
    ]
  },
  "corrections_applied": {
    "varietal_renames": {
      "Bogazkere": "Boğazkere",
      "Carmenere": "Carménère",
      "Mourvedre": "Mourvèdre",
      "Okuzgozu": "Öküzgözü",
      "Semillon": "Sémillon",
      "Albarino": "Albariño",
      "Gewurztraminer": "Gewürztraminer",
      "Gruner Veltliner": "Grüner Veltliner"
    },
    "brand_renames": {
      "Astrea": "Astraea",
      "Aventino": "Aventine",
      "Bandcroft": "Bancroft",
      "Rust&Oak": "Rust & Oak",
      "Sirens Call": "Siren’s Call",
      "Thistlemer": "Thistlemere",
      "Vaguard Crest": "Vanguard Crest",
      "Virelline": "Virelune",
      ". Marrowstone": "Marrowstone"
    }
  },
  "varietals": [
    {
      "varietal": "Barbera",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "Italy (Piedmont)",
      "color_tag": "#4A1220",
      "pisos": 5,
      "columns_spec": [
        9,
        5,
        9,
        5
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Clockwork Cellars",
            "Crimson Vine",
            "Evercask",
            "Frostbite",
            "Kestrel Ridge"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 5,
          "brands": [
            "Aethelgard",
            "Astraea",
            "Auric Hollow",
            "Aventine",
            "Caelthorn"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Luminore",
            "Lunis",
            "Mediterranean Pearl",
            "Orivane",
            "Saturday"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 5,
          "brands": [
            "Thistlemere",
            "Thornback",
            "Valerius",
            "Vanguard Crest",
            "Volante"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Astraea",
        "Auric Hollow",
        "Aventine",
        "Caelthorn",
        "Clockwork Cellars",
        "Crimson Vine",
        "Evercask",
        "Frostbite",
        "Kestrel Ridge",
        "Luminore",
        "Lunis",
        "Mediterranean Pearl",
        "Orivane",
        "Saturday",
        "Thistlemere",
        "Thornback",
        "Valerius",
        "Vanguard Crest",
        "Volante"
      ]
    },
    {
      "varietal": "Boğazkere",
      "original_spelling_in_guide": "Bogazkere",
      "floor": 1,
      "type": "red",
      "origin": "Turkey",
      "color_tag": "#3B0E1A",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Crimson Vine",
            "Elysian",
            "Marrowstone"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bancroft",
            "Hearthside",
            "Saturday",
            "Timberloft"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Novafizz",
            "Siren’s Call",
            "Sunbliss",
            "Valerius"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Astraea",
        "Bancroft",
        "Crimson Vine",
        "Elysian",
        "Hearthside",
        "Marrowstone",
        "Novafizz",
        "Saturday",
        "Siren’s Call",
        "Sunbliss",
        "Timberloft",
        "Valerius"
      ]
    },
    {
      "varietal": "Cabernet Franc",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Loire)",
      "color_tag": "#3A0F1B",
      "pisos": 5,
      "columns_spec": [
        5,
        9,
        5,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 5,
          "brands": [
            "Bramblecrown",
            "Duskmere",
            "Embercask",
            "Evercask",
            "Ironbound"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Luminore",
            "Lunis",
            "Mediterranean Pearl",
            "Mythos",
            "Orivane"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 5,
          "brands": [
            "Timberloft",
            "Valerius",
            "Virelune",
            "Volante",
            "Zephyrhill"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Siren’s Call",
            "Sunbliss",
            "Sylvarrow",
            "Thistlemere",
            "Thornback"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Bramblecrown",
        "Duskmere",
        "Embercask",
        "Evercask",
        "Ironbound",
        "Luminore",
        "Lunis",
        "Mediterranean Pearl",
        "Mythos",
        "Orivane",
        "Siren’s Call",
        "Sunbliss",
        "Sylvarrow",
        "Thistlemere",
        "Thornback",
        "Timberloft",
        "Valerius",
        "Virelune",
        "Volante",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Cabernet Sauvignon",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Bordeaux)",
      "color_tag": "#2E0B14",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Amberglow",
            "Bellacord",
            "Celestia",
            "Lunis"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Clockwork Cellars",
            "Orchard Dew",
            "Sunbliss"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Mediterranean Pearl",
            "Solaria",
            "Sovereign Vine",
            "Timberloft"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Amberglow",
        "Aventine",
        "Bellacord",
        "Celestia",
        "Clockwork Cellars",
        "Lunis",
        "Mediterranean Pearl",
        "Orchard Dew",
        "Solaria",
        "Sovereign Vine",
        "Sunbliss",
        "Timberloft"
      ]
    },
    {
      "varietal": "Carménère",
      "original_spelling_in_guide": "Carmenere",
      "floor": 1,
      "type": "red",
      "origin": "France/Chile",
      "color_tag": "#4D1620",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Bellacord",
            "Frostbite",
            "Luminore"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bancroft",
            "Gilded Petal",
            "Mythos",
            "Sovereign Vine"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Meridian Sun",
            "Orchard Dew",
            "Rust & Oak",
            "Timberloft"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Aethelgard",
        "Bancroft",
        "Bellacord",
        "Frostbite",
        "Gilded Petal",
        "Luminore",
        "Meridian Sun",
        "Mythos",
        "Orchard Dew",
        "Rust & Oak",
        "Sovereign Vine",
        "Timberloft"
      ]
    },
    {
      "varietal": "Chardonnay",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "white",
      "origin": "France (Burgundy)",
      "color_tag": "#E0C76A",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Bellacord",
            "Celestia",
            "Lunis"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bancroft",
            "Deeproot",
            "Novafizz",
            "Sovereign Vine"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Mediterranean Pearl",
            "Orchard Dew",
            "Siren’s Call",
            "Thornback"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Astraea",
        "Bancroft",
        "Bellacord",
        "Celestia",
        "Deeproot",
        "Lunis",
        "Mediterranean Pearl",
        "Novafizz",
        "Orchard Dew",
        "Siren’s Call",
        "Sovereign Vine",
        "Thornback"
      ]
    },
    {
      "varietal": "Gamay",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Beaujolais)",
      "color_tag": "#7A2233",
      "pisos": 5,
      "columns_spec": [
        5,
        9,
        5,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 5,
          "brands": [
            "Bancroft",
            "Bramblecrown",
            "Bramblewood",
            "Celestia",
            "Clockwork Cellars"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Duskmere",
            "Embercask",
            "Ironbound",
            "Kestrel Ridge",
            "Luminore"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 5,
          "brands": [
            "Valerius",
            "Vanguard Crest",
            "Veloraine",
            "Wintervale",
            "Zephyrhill"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Lunis",
            "Mediterranean Pearl",
            "Meridian Sun",
            "Novafizz",
            "Oakhaven"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Bancroft",
        "Bramblecrown",
        "Bramblewood",
        "Celestia",
        "Clockwork Cellars",
        "Duskmere",
        "Embercask",
        "Ironbound",
        "Kestrel Ridge",
        "Luminore",
        "Lunis",
        "Mediterranean Pearl",
        "Meridian Sun",
        "Novafizz",
        "Oakhaven",
        "Valerius",
        "Vanguard Crest",
        "Veloraine",
        "Wintervale",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Glera",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "sparkling",
      "origin": "Italy (Prosecco)",
      "color_tag": "#F2E7B6",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Amberglow",
            "Bellacord",
            "Celestia",
            "Luminore",
            "Novafizz"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Astraea",
            "Gilded Petal",
            "Meridian Sun",
            "Solaria",
            "Whisperwood"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Orchard Dew",
            "Siren’s Call",
            "Verdant Drop",
            "Volante",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Amberglow",
        "Astraea",
        "Bellacord",
        "Celestia",
        "Gilded Petal",
        "Luminore",
        "Meridian Sun",
        "Novafizz",
        "Orchard Dew",
        "Siren’s Call",
        "Solaria",
        "Verdant Drop",
        "Volante",
        "Whisperwood",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Grenache",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "Spain/France",
      "color_tag": "#5A1A24",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Aethelgard",
            "Bramblewood",
            "Clockwork Cellars",
            "Deeproot",
            "Ironbound"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Astraea",
            "Crimson Vine",
            "Luminore",
            "Mythos",
            "Siren’s Call"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Lunis",
            "Marrowstone",
            "Oakhaven",
            "Rust & Oak",
            "Sovereign Vine"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Aethelgard",
        "Astraea",
        "Bramblewood",
        "Clockwork Cellars",
        "Crimson Vine",
        "Deeproot",
        "Ironbound",
        "Luminore",
        "Lunis",
        "Marrowstone",
        "Mythos",
        "Oakhaven",
        "Rust & Oak",
        "Siren’s Call",
        "Sovereign Vine"
      ]
    },
    {
      "varietal": "Malbec",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France/Argentina",
      "color_tag": "#3D0F1E",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Bellacord",
            "Bramblewood",
            "Deeproot",
            "Gilded Petal"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Luminore",
            "Orchard Dew",
            "Siren’s Call",
            "Timberloft",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Kestrel Ridge",
            "Meridian Sun",
            "Novafizz",
            "Rust & Oak",
            "Saturday"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Solaria",
            "Thornback",
            "Vanguard Crest",
            "Verdant Drop",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Bellacord",
        "Bramblewood",
        "Deeproot",
        "Gilded Petal",
        "Kestrel Ridge",
        "Luminore",
        "Meridian Sun",
        "Novafizz",
        "Orchard Dew",
        "Rust & Oak",
        "Saturday",
        "Siren’s Call",
        "Solaria",
        "Thornback",
        "Timberloft",
        "Vanguard Crest",
        "Verdant Drop",
        "Wilderberry",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Merlot",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Bordeaux)",
      "color_tag": "#5E1A2B",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Amberglow",
            "Aventine",
            "Bancroft",
            "Deeproot"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Astraea",
            "Celestia",
            "Ironbound",
            "Mythos"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Hearthside",
            "Lunis",
            "Marrowstone",
            "Oakhaven"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Amberglow",
        "Astraea",
        "Aventine",
        "Bancroft",
        "Celestia",
        "Deeproot",
        "Hearthside",
        "Ironbound",
        "Lunis",
        "Marrowstone",
        "Mythos",
        "Oakhaven"
      ]
    },
    {
      "varietal": "Mourvèdre",
      "original_spelling_in_guide": "Mourvedre",
      "floor": 1,
      "type": "red",
      "origin": "Spain/France",
      "color_tag": "#47121E",
      "pisos": 5,
      "columns_spec": [
        9,
        5,
        9,
        5
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Hearthside",
            "Marrowstone",
            "Moonharbor",
            "Novafizz",
            "Oakhaven"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 5,
          "brands": [
            "Amberglow",
            "Bellacord",
            "Cinderbloom",
            "Crimson Vine",
            "Elysian"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Orchard Dew",
            "Rust & Oak",
            "Saturday",
            "Solaria",
            "Sovereign Vine"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 5,
          "brands": [
            "Thornback",
            "Vanguard Crest",
            "Verdant Drop",
            "Virelune",
            "Volante"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Amberglow",
        "Bellacord",
        "Cinderbloom",
        "Crimson Vine",
        "Elysian",
        "Hearthside",
        "Marrowstone",
        "Moonharbor",
        "Novafizz",
        "Oakhaven",
        "Orchard Dew",
        "Rust & Oak",
        "Saturday",
        "Solaria",
        "Sovereign Vine",
        "Thornback",
        "Vanguard Crest",
        "Verdant Drop",
        "Virelune",
        "Volante"
      ]
    },
    {
      "varietal": "Muscat",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "white",
      "origin": "Ancient (Greece/Egypt)",
      "color_tag": "#E2C475",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Bancroft",
            "Bellacord",
            "Marrowstone",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Gilded Petal",
            "Oakhaven",
            "Vanguard Crest",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Siren’s Call",
            "Solaria",
            "Verdant Drop",
            "Volante",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Aethelgard",
        "Aventine",
        "Bancroft",
        "Bellacord",
        "Gilded Petal",
        "Marrowstone",
        "Meridian Sun",
        "Oakhaven",
        "Siren’s Call",
        "Solaria",
        "Vanguard Crest",
        "Verdant Drop",
        "Volante",
        "Wilderberry",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Nebbiolo",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "Italy (Piedmont)",
      "color_tag": "#6B1A22",
      "pisos": 5,
      "columns_spec": [
        5,
        9,
        5,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 5,
          "brands": [
            "Aethelgard",
            "Bellacord",
            "Celestia",
            "Clockwork Cellars",
            "Crimson Vine"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Deeproot",
            "Duskmere",
            "Ironbound",
            "Lunis",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 5,
          "brands": [
            "Sunbliss",
            "Timberloft",
            "Veloraine",
            "Virelune",
            "Wilderberry"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Moonharbor",
            "Mythos",
            "Orivane",
            "Rust & Oak",
            "Saturday"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Bellacord",
        "Celestia",
        "Clockwork Cellars",
        "Crimson Vine",
        "Deeproot",
        "Duskmere",
        "Ironbound",
        "Lunis",
        "Meridian Sun",
        "Moonharbor",
        "Mythos",
        "Orivane",
        "Rust & Oak",
        "Saturday",
        "Sunbliss",
        "Timberloft",
        "Veloraine",
        "Virelune",
        "Wilderberry"
      ]
    },
    {
      "varietal": "Öküzgözü",
      "original_spelling_in_guide": "Okuzgozu",
      "floor": 1,
      "type": "red",
      "origin": "Turkey",
      "color_tag": "#5B1F23",
      "pisos": 5,
      "columns_spec": [
        3,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Amberglow",
            "Aventine",
            "Bellacord",
            "Bramblewood",
            "Celestia"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Deeproot",
            "Ironbound",
            "Kestrel Ridge",
            "Mediterranean Pearl",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Frostbite",
            "Lunis",
            "Mythos",
            "Thornback",
            "Whisperwood"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Rust & Oak",
            "Solaria",
            "Vanguard Crest",
            "Volante",
            "Wilderberry"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 20,
      "brands": [
        "Amberglow",
        "Aventine",
        "Bellacord",
        "Bramblewood",
        "Celestia",
        "Deeproot",
        "Frostbite",
        "Ironbound",
        "Kestrel Ridge",
        "Lunis",
        "Mediterranean Pearl",
        "Meridian Sun",
        "Mythos",
        "Rust & Oak",
        "Solaria",
        "Thornback",
        "Vanguard Crest",
        "Volante",
        "Whisperwood",
        "Wilderberry"
      ]
    },
    {
      "varietal": "Palomino",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "white",
      "origin": "Spain (Jerez)",
      "color_tag": "#DCCB9E",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Elysian",
            "Kestrel Ridge",
            "Mediterranean Pearl",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Celestia",
            "Luminore",
            "Novafizz",
            "Thornback",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Saturday",
            "Solaria",
            "Valerius",
            "Verdant Drop",
            "Wintervale"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Astraea",
        "Celestia",
        "Elysian",
        "Kestrel Ridge",
        "Luminore",
        "Mediterranean Pearl",
        "Meridian Sun",
        "Novafizz",
        "Saturday",
        "Solaria",
        "Thornback",
        "Valerius",
        "Verdant Drop",
        "Wilderberry",
        "Wintervale"
      ]
    },
    {
      "varietal": "Pinot Grigio",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "white",
      "origin": "Italy",
      "color_tag": "#D9C29A",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Elysian",
            "Ironbound",
            "Kestrel Ridge",
            "Mediterranean Pearl",
            "Mythos"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Astraea",
            "Bellacord",
            "Bramblewood",
            "Celestia",
            "Crimson Vine"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Rust & Oak",
            "Saturday",
            "Thornback",
            "Valerius",
            "Wintervale"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Hearthside",
            "Luminore",
            "Orchard Dew",
            "Sovereign Vine",
            "Volante"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Astraea",
        "Bellacord",
        "Bramblewood",
        "Celestia",
        "Crimson Vine",
        "Elysian",
        "Hearthside",
        "Ironbound",
        "Kestrel Ridge",
        "Luminore",
        "Mediterranean Pearl",
        "Mythos",
        "Orchard Dew",
        "Rust & Oak",
        "Saturday",
        "Sovereign Vine",
        "Thornback",
        "Valerius",
        "Volante",
        "Wintervale"
      ]
    },
    {
      "varietal": "Pinot Meunier",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Champagne)",
      "color_tag": "#732731",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Celestia",
            "Clockwork Cellars",
            "Ironbound"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bellacord",
            "Gilded Petal",
            "Lunis",
            "Siren’s Call"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Luminore",
            "Mythos",
            "Saturday",
            "Solaria"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Aethelgard",
        "Bellacord",
        "Celestia",
        "Clockwork Cellars",
        "Gilded Petal",
        "Ironbound",
        "Luminore",
        "Lunis",
        "Mythos",
        "Saturday",
        "Siren’s Call",
        "Solaria"
      ]
    },
    {
      "varietal": "Pinot Noir",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France (Burgundy)",
      "color_tag": "#5E1521",
      "pisos": 4,
      "columns_spec": [
        9,
        5,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Astraea",
            "Bancroft",
            "Bellacord",
            "Crimson Vine"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 5,
          "brands": [
            "Deeproot",
            "Elysian",
            "Frostbite",
            "Ironbound"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Lunis",
            "Marrowstone",
            "Meridian Sun",
            "Oakhaven"
          ]
        }
      ],
      "total_bottles": 92,
      "brand_count": 12,
      "brands": [
        "Astraea",
        "Bancroft",
        "Bellacord",
        "Crimson Vine",
        "Deeproot",
        "Elysian",
        "Frostbite",
        "Ironbound",
        "Lunis",
        "Marrowstone",
        "Meridian Sun",
        "Oakhaven"
      ]
    },
    {
      "varietal": "Pinotage",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "South Africa",
      "color_tag": "#49121C",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Bancroft",
            "Clockwork Cellars",
            "Hearthside"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Gilded Petal",
            "Luminore",
            "Oakhaven"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Kestrel Ridge",
            "Mediterranean Pearl",
            "Mythos",
            "Rust & Oak"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Aethelgard",
        "Aventine",
        "Bancroft",
        "Clockwork Cellars",
        "Gilded Petal",
        "Hearthside",
        "Kestrel Ridge",
        "Luminore",
        "Mediterranean Pearl",
        "Mythos",
        "Oakhaven",
        "Rust & Oak"
      ]
    },
    {
      "varietal": "Pomegranate",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "fruit",
      "origin": "Fruit wine",
      "color_tag": "#7A0E1E",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Crimson Vine",
            "Deeproot",
            "Luminore",
            "Lunis"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Clockwork Cellars",
            "Kestrel Ridge",
            "Meridian Sun",
            "Solaria",
            "Whisperwood"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Mythos",
            "Novafizz",
            "Valerius",
            "Verdant Drop",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Astraea",
        "Clockwork Cellars",
        "Crimson Vine",
        "Deeproot",
        "Kestrel Ridge",
        "Luminore",
        "Lunis",
        "Meridian Sun",
        "Mythos",
        "Novafizz",
        "Solaria",
        "Valerius",
        "Verdant Drop",
        "Whisperwood",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Primitivo",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "Italy (Puglia)",
      "color_tag": "#4A0E18",
      "pisos": 4,
      "columns_spec": [
        9,
        5,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Lunis",
            "Meridian Sun",
            "Mythos",
            "Orchard Dew"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 5,
          "brands": [
            "Aethelgard",
            "Aventine",
            "Bellacord",
            "Celestia"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Rust & Oak",
            "Sovereign Vine",
            "Thornback",
            "Vanguard Crest"
          ]
        }
      ],
      "total_bottles": 92,
      "brand_count": 12,
      "brands": [
        "Aethelgard",
        "Aventine",
        "Bellacord",
        "Celestia",
        "Lunis",
        "Meridian Sun",
        "Mythos",
        "Orchard Dew",
        "Rust & Oak",
        "Sovereign Vine",
        "Thornback",
        "Vanguard Crest"
      ]
    },
    {
      "varietal": "Sauvignon Blanc",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "white",
      "origin": "France (Bordeaux)",
      "color_tag": "#D9C76A",
      "pisos": 5,
      "columns_spec": [
        9,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Bramblewood",
            "Celestia",
            "Crimson Vine",
            "Gilded Petal",
            "Ironbound"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Marrowstone",
            "Mediterranean Pearl",
            "Oakhaven",
            "Saturday",
            "Solaria"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 10,
      "brands": [
        "Bramblewood",
        "Celestia",
        "Crimson Vine",
        "Gilded Petal",
        "Ironbound",
        "Marrowstone",
        "Mediterranean Pearl",
        "Oakhaven",
        "Saturday",
        "Solaria"
      ]
    },
    {
      "varietal": "Sémillon",
      "original_spelling_in_guide": "Semillon",
      "floor": 1,
      "type": "white",
      "origin": "France (Bordeaux)",
      "color_tag": "#E8D9A8",
      "pisos": 5,
      "columns_spec": [
        9,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Aethelgard",
            "Amberglow",
            "Aventine",
            "Bancroft",
            "Bellacord"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Bramblewood",
            "Gilded Petal",
            "Hearthside",
            "Marrowstone",
            "Oakhaven"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Frostbite",
            "Ironbound",
            "Orchard Dew",
            "Sunbliss",
            "Volante"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Siren’s Call",
            "Sovereign Vine",
            "Timberloft",
            "Vanguard Crest",
            "Whisperwood"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Amberglow",
        "Aventine",
        "Bancroft",
        "Bellacord",
        "Bramblewood",
        "Frostbite",
        "Gilded Petal",
        "Hearthside",
        "Ironbound",
        "Marrowstone",
        "Oakhaven",
        "Orchard Dew",
        "Siren’s Call",
        "Sovereign Vine",
        "Sunbliss",
        "Timberloft",
        "Vanguard Crest",
        "Volante",
        "Whisperwood"
      ]
    },
    {
      "varietal": "Shiraz",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "France/Australia",
      "color_tag": "#3D0F1C",
      "pisos": 5,
      "columns_spec": [
        9,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Amberglow",
            "Astraea",
            "Aventine",
            "Celestia",
            "Clockwork Cellars"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Gilded Petal",
            "Hearthside",
            "Ironbound",
            "Mythos",
            "Rust & Oak"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 10,
      "brands": [
        "Amberglow",
        "Astraea",
        "Aventine",
        "Celestia",
        "Clockwork Cellars",
        "Gilded Petal",
        "Hearthside",
        "Ironbound",
        "Mythos",
        "Rust & Oak"
      ]
    },
    {
      "varietal": "Strawberry",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "fruit",
      "origin": "Fruit wine",
      "color_tag": "#C8304A",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Bancroft",
            "Bramblewood",
            "Gilded Petal",
            "Hearthside"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Crimson Vine",
            "Ironbound",
            "Sovereign Vine",
            "Whisperwood"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Mediterranean Pearl",
            "Mythos",
            "Valerius",
            "Volante",
            "Wintervale"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Astraea",
        "Aventine",
        "Bancroft",
        "Bramblewood",
        "Crimson Vine",
        "Gilded Petal",
        "Hearthside",
        "Ironbound",
        "Mediterranean Pearl",
        "Mythos",
        "Sovereign Vine",
        "Valerius",
        "Volante",
        "Whisperwood",
        "Wintervale"
      ]
    },
    {
      "varietal": "Touriga Nacional",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "Portugal",
      "color_tag": "#3F0E1A",
      "pisos": 4,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Bancroft",
            "Bellacord",
            "Crimson Vine"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Clockwork Cellars",
            "Ironbound",
            "Oakhaven"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Deeproot",
            "Lunis",
            "Mythos",
            "Rust & Oak"
          ]
        }
      ],
      "total_bottles": 60,
      "brand_count": 12,
      "brands": [
        "Aethelgard",
        "Aventine",
        "Bancroft",
        "Bellacord",
        "Clockwork Cellars",
        "Crimson Vine",
        "Deeproot",
        "Ironbound",
        "Lunis",
        "Mythos",
        "Oakhaven",
        "Rust & Oak"
      ]
    },
    {
      "varietal": "Zinfandel",
      "original_spelling_in_guide": null,
      "floor": 1,
      "type": "red",
      "origin": "USA (California)",
      "color_tag": "#4E101C",
      "pisos": 5,
      "columns_spec": [
        9,
        5,
        9,
        5
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Clockwork Cellars",
            "Elysian",
            "Embercask",
            "Frostbite",
            "Gilded Petal"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 5,
          "brands": [
            "Amberglow",
            "Auric Hollow",
            "Aventine",
            "Caelthorn",
            "Cinderbloom"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Ironbound",
            "Mediterranean Pearl",
            "Moonharbor",
            "Mythos",
            "Orivane"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 5,
          "brands": [
            "Rust & Oak",
            "Saturday",
            "Sylvarrow",
            "Thistlemere",
            "Timberloft"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Amberglow",
        "Auric Hollow",
        "Aventine",
        "Caelthorn",
        "Cinderbloom",
        "Clockwork Cellars",
        "Elysian",
        "Embercask",
        "Frostbite",
        "Gilded Petal",
        "Ironbound",
        "Mediterranean Pearl",
        "Moonharbor",
        "Mythos",
        "Orivane",
        "Rust & Oak",
        "Saturday",
        "Sylvarrow",
        "Thistlemere",
        "Timberloft"
      ]
    },
    {
      "varietal": "Aglianico",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "red",
      "origin": "Italy (Basilicata)",
      "color_tag": "#45101C",
      "pisos": 5,
      "columns_spec": [
        9,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Aethelgard",
            "Auric Hollow",
            "Aventine",
            "Bancroft",
            "Bramblecrown"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Bramblewood",
            "Clockwork Cellars",
            "Deeproot",
            "Gilded Petal",
            "Kestrel Ridge"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Celestia",
            "Frostbite",
            "Luminore",
            "Siren’s Call",
            "Whisperwood"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Mediterranean Pearl",
            "Orivane",
            "Solaria",
            "Thistlemere",
            "Wintervale"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Auric Hollow",
        "Aventine",
        "Bancroft",
        "Bramblecrown",
        "Bramblewood",
        "Celestia",
        "Clockwork Cellars",
        "Deeproot",
        "Frostbite",
        "Gilded Petal",
        "Kestrel Ridge",
        "Luminore",
        "Mediterranean Pearl",
        "Orivane",
        "Siren’s Call",
        "Solaria",
        "Thistlemere",
        "Whisperwood",
        "Wintervale"
      ]
    },
    {
      "varietal": "Albariño",
      "original_spelling_in_guide": "Albarino",
      "floor": 2,
      "type": "white",
      "origin": "Spain (Rías Baixas)",
      "color_tag": "#E3D08A",
      "pisos": 5,
      "columns_spec": [
        9,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Amberglow",
            "Astraea",
            "Auric Hollow",
            "Bancroft",
            "Bellacord"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Celestia",
            "Embercask",
            "Gilded Petal",
            "Moonharbor",
            "Orivane"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Deeproot",
            "Mediterranean Pearl",
            "Rust & Oak",
            "Vanguard Crest",
            "Wintervale"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Sovereign Vine",
            "Timberloft",
            "Verdant Drop",
            "Whisperwood",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Amberglow",
        "Astraea",
        "Auric Hollow",
        "Bancroft",
        "Bellacord",
        "Celestia",
        "Deeproot",
        "Embercask",
        "Gilded Petal",
        "Mediterranean Pearl",
        "Moonharbor",
        "Orivane",
        "Rust & Oak",
        "Sovereign Vine",
        "Timberloft",
        "Vanguard Crest",
        "Verdant Drop",
        "Whisperwood",
        "Wintervale",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Blackberry",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "fruit",
      "origin": "Fruit wine",
      "color_tag": "#1F0F4D",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aethelgard",
            "Astraea",
            "Celestia",
            "Frostbite",
            "Kestrel Ridge"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Amberglow",
            "Elysian",
            "Meridian Sun",
            "Siren’s Call",
            "Valerius"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Novafizz",
            "Orchard Dew",
            "Solaria",
            "Sovereign Vine",
            "Verdant Drop"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Aethelgard",
        "Amberglow",
        "Astraea",
        "Celestia",
        "Elysian",
        "Frostbite",
        "Kestrel Ridge",
        "Meridian Sun",
        "Novafizz",
        "Orchard Dew",
        "Siren’s Call",
        "Solaria",
        "Sovereign Vine",
        "Valerius",
        "Verdant Drop"
      ]
    },
    {
      "varietal": "Blueberry",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "fruit",
      "origin": "Fruit wine",
      "color_tag": "#2A1B6E",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Aventine",
            "Gilded Petal",
            "Hearthside",
            "Marrowstone",
            "Mediterranean Pearl"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bancroft",
            "Ironbound",
            "Saturday",
            "Timberloft",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Sunbliss",
            "Thornback",
            "Vanguard Crest",
            "Volante",
            "Wintervale"
          ]
        }
      ],
      "total_bottles": 75,
      "brand_count": 15,
      "brands": [
        "Aventine",
        "Bancroft",
        "Gilded Petal",
        "Hearthside",
        "Ironbound",
        "Marrowstone",
        "Mediterranean Pearl",
        "Saturday",
        "Sunbliss",
        "Thornback",
        "Timberloft",
        "Vanguard Crest",
        "Volante",
        "Wilderberry",
        "Wintervale"
      ]
    },
    {
      "varietal": "Chenin Blanc",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "white",
      "origin": "France (Loire)",
      "color_tag": "#E1CB7E",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Amberglow",
            "Celestia",
            "Elysian",
            "Hearthside",
            "Kestrel Ridge"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bancroft",
            "Frostbite",
            "Novafizz",
            "Thornback",
            "Vanguard Crest"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Orchard Dew",
            "Sunbliss",
            "Timberloft",
            "Valerius",
            "Whisperwood"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Amberglow",
        "Bancroft",
        "Celestia",
        "Elysian",
        "Frostbite",
        "Hearthside",
        "Kestrel Ridge",
        "Novafizz",
        "Orchard Dew",
        "Sunbliss",
        "Thornback",
        "Timberloft",
        "Valerius",
        "Vanguard Crest",
        "Whisperwood"
      ]
    },
    {
      "varietal": "Cherry",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "fruit",
      "origin": "Fruit wine",
      "color_tag": "#7A0F1F",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Celestia",
            "Luminore",
            "Marrowstone",
            "Novafizz",
            "Oakhaven"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Kestrel Ridge",
            "Meridian Sun",
            "Solaria",
            "Timberloft",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Sunbliss",
            "Thornback",
            "Vanguard Crest",
            "Verdant Drop",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Celestia",
        "Kestrel Ridge",
        "Luminore",
        "Marrowstone",
        "Meridian Sun",
        "Novafizz",
        "Oakhaven",
        "Solaria",
        "Sunbliss",
        "Thornback",
        "Timberloft",
        "Vanguard Crest",
        "Verdant Drop",
        "Wilderberry",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Gewürztraminer",
      "original_spelling_in_guide": "Gewurztraminer",
      "floor": 2,
      "type": "white",
      "origin": "France (Alsace)",
      "color_tag": "#E6CE86",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Gilded Petal",
            "Marrowstone",
            "Mediterranean Pearl",
            "Moonharbor",
            "Orivane"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aethelgard",
            "Astraea",
            "Bancroft",
            "Cinderbloom",
            "Frostbite"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Saturday",
            "Siren’s Call",
            "Thornback",
            "Veloraine",
            "Whisperwood"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Ironbound",
            "Meridian Sun",
            "Rust & Oak",
            "Sunbliss",
            "Verdant Drop"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Astraea",
        "Bancroft",
        "Cinderbloom",
        "Frostbite",
        "Gilded Petal",
        "Ironbound",
        "Marrowstone",
        "Mediterranean Pearl",
        "Meridian Sun",
        "Moonharbor",
        "Orivane",
        "Rust & Oak",
        "Saturday",
        "Siren’s Call",
        "Sunbliss",
        "Thornback",
        "Veloraine",
        "Verdant Drop",
        "Whisperwood"
      ]
    },
    {
      "varietal": "Grüner Veltliner",
      "original_spelling_in_guide": "Gruner Veltliner",
      "floor": 2,
      "type": "white",
      "origin": "Austria",
      "color_tag": "#DCE0A0",
      "pisos": 5,
      "columns_spec": [
        5,
        9,
        9,
        5
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 5,
          "brands": [
            "Aethelgard",
            "Amberglow",
            "Bellacord",
            "Bramblewood",
            "Caelthorn"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Celestia",
            "Cinderbloom",
            "Crimson Vine",
            "Deeproot",
            "Elysian"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Gilded Petal",
            "Marrowstone",
            "Moonharbor",
            "Oakhaven",
            "Orchard Dew"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 5,
          "brands": [
            "Rust & Oak",
            "Solaria",
            "Sovereign Vine",
            "Verdant Drop",
            "Whisperwood"
          ]
        }
      ],
      "total_bottles": 140,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Amberglow",
        "Bellacord",
        "Bramblewood",
        "Caelthorn",
        "Celestia",
        "Cinderbloom",
        "Crimson Vine",
        "Deeproot",
        "Elysian",
        "Gilded Petal",
        "Marrowstone",
        "Moonharbor",
        "Oakhaven",
        "Orchard Dew",
        "Rust & Oak",
        "Solaria",
        "Sovereign Vine",
        "Verdant Drop",
        "Whisperwood"
      ]
    },
    {
      "varietal": "Mead",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "mead",
      "origin": "Honey wine",
      "color_tag": "#C9962E",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Aethelgard",
            "Elysian",
            "Kestrel Ridge",
            "Marrowstone",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bellacord",
            "Luminore",
            "Oakhaven",
            "Thornback",
            "Wilderberry"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Solaria",
            "Sunbliss",
            "Timberloft",
            "Verdant Drop",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Aethelgard",
        "Bellacord",
        "Elysian",
        "Kestrel Ridge",
        "Luminore",
        "Marrowstone",
        "Meridian Sun",
        "Oakhaven",
        "Solaria",
        "Sunbliss",
        "Thornback",
        "Timberloft",
        "Verdant Drop",
        "Wilderberry",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Petit Verdot",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "red",
      "origin": "France (Bordeaux)",
      "color_tag": "#3C0D18",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Crimson Vine",
            "Embercask",
            "Evercask",
            "Kestrel Ridge",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Aethelgard",
            "Auric Hollow",
            "Bramblecrown",
            "Caelthorn",
            "Cinderbloom"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Mythos",
            "Orivane",
            "Thistlemere",
            "Veloraine",
            "Zephyrhill"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Duskmere",
            "Ironbound",
            "Moonharbor",
            "Sylvarrow",
            "Virelune"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Aethelgard",
        "Auric Hollow",
        "Bramblecrown",
        "Caelthorn",
        "Cinderbloom",
        "Crimson Vine",
        "Duskmere",
        "Embercask",
        "Evercask",
        "Ironbound",
        "Kestrel Ridge",
        "Meridian Sun",
        "Moonharbor",
        "Mythos",
        "Orivane",
        "Sylvarrow",
        "Thistlemere",
        "Veloraine",
        "Virelune",
        "Zephyrhill"
      ]
    },
    {
      "varietal": "Riesling",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "white",
      "origin": "Germany",
      "color_tag": "#D9C97A",
      "pisos": 5,
      "columns_spec": [
        9,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Amberglow",
            "Celestia",
            "Clockwork Cellars",
            "Deeproot",
            "Elysian"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Marrowstone",
            "Mediterranean Pearl",
            "Oakhaven",
            "Orchard Dew",
            "Saturday"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 10,
      "brands": [
        "Amberglow",
        "Celestia",
        "Clockwork Cellars",
        "Deeproot",
        "Elysian",
        "Marrowstone",
        "Mediterranean Pearl",
        "Oakhaven",
        "Orchard Dew",
        "Saturday"
      ]
    },
    {
      "varietal": "Sangiovese",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "red",
      "origin": "Italy (Tuscany)",
      "color_tag": "#6E1E22",
      "pisos": 5,
      "columns_spec": [
        9,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Bramblewood",
            "Crimson Vine",
            "Frostbite",
            "Kestrel Ridge",
            "Mediterranean Pearl"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Mythos",
            "Oakhaven",
            "Sunbliss",
            "Thornback",
            "Timberloft"
          ]
        }
      ],
      "total_bottles": 90,
      "brand_count": 10,
      "brands": [
        "Bramblewood",
        "Crimson Vine",
        "Frostbite",
        "Kestrel Ridge",
        "Mediterranean Pearl",
        "Mythos",
        "Oakhaven",
        "Sunbliss",
        "Thornback",
        "Timberloft"
      ]
    },
    {
      "varietal": "Tannat",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "red",
      "origin": "France (Madiran)",
      "color_tag": "#43101D",
      "pisos": 5,
      "columns_spec": [
        5,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 5,
          "brands": [
            "Thistlemere",
            "Timberloft",
            "Valerius",
            "Virelune",
            "Wilderberry"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Auric Hollow",
            "Bellacord",
            "Bramblewood",
            "Duskmere",
            "Embercask"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Aventine",
            "Caelthorn",
            "Hearthside",
            "Lunis",
            "Saturday"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Kestrel Ridge",
            "Luminore",
            "Moonharbor",
            "Novafizz",
            "Sovereign Vine"
          ]
        }
      ],
      "total_bottles": 100,
      "brand_count": 20,
      "brands": [
        "Auric Hollow",
        "Aventine",
        "Bellacord",
        "Bramblewood",
        "Caelthorn",
        "Duskmere",
        "Embercask",
        "Hearthside",
        "Kestrel Ridge",
        "Luminore",
        "Lunis",
        "Moonharbor",
        "Novafizz",
        "Saturday",
        "Sovereign Vine",
        "Thistlemere",
        "Timberloft",
        "Valerius",
        "Virelune",
        "Wilderberry"
      ]
    },
    {
      "varietal": "Tempranillo",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "red",
      "origin": "Spain (Rioja)",
      "color_tag": "#5C1722",
      "pisos": 5,
      "columns_spec": [
        6,
        9,
        6
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 6,
          "brands": [
            "Astraea",
            "Clockwork Cellars",
            "Crimson Vine",
            "Frostbite",
            "Gilded Petal"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Bellacord",
            "Deeproot",
            "Hearthside",
            "Mediterranean Pearl",
            "Timberloft"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 6,
          "brands": [
            "Ironbound",
            "Kestrel Ridge",
            "Mythos",
            "Solaria",
            "Volante"
          ]
        }
      ],
      "total_bottles": 105,
      "brand_count": 15,
      "brands": [
        "Astraea",
        "Bellacord",
        "Clockwork Cellars",
        "Crimson Vine",
        "Deeproot",
        "Frostbite",
        "Gilded Petal",
        "Hearthside",
        "Ironbound",
        "Kestrel Ridge",
        "Mediterranean Pearl",
        "Mythos",
        "Solaria",
        "Timberloft",
        "Volante"
      ]
    },
    {
      "varietal": "Trebbiano",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "white",
      "origin": "Italy",
      "color_tag": "#DFCF95",
      "pisos": 5,
      "columns_spec": [
        9,
        3,
        9,
        3
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 9,
          "brands": [
            "Bellacord",
            "Evercask",
            "Luminore",
            "Mythos",
            "Rust & Oak"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 3,
          "brands": [
            "Bancroft",
            "Bramblecrown",
            "Celestia",
            "Frostbite",
            "Hearthside"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 9,
          "brands": [
            "Sunbliss",
            "Thistlemere",
            "Timberloft",
            "Virelune",
            "Volante"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 3,
          "brands": [
            "Marrowstone",
            "Mediterranean Pearl",
            "Oakhaven",
            "Orchard Dew",
            "Saturday"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Bancroft",
        "Bellacord",
        "Bramblecrown",
        "Celestia",
        "Evercask",
        "Frostbite",
        "Hearthside",
        "Luminore",
        "Marrowstone",
        "Mediterranean Pearl",
        "Mythos",
        "Oakhaven",
        "Orchard Dew",
        "Rust & Oak",
        "Saturday",
        "Sunbliss",
        "Thistlemere",
        "Timberloft",
        "Virelune",
        "Volante"
      ]
    },
    {
      "varietal": "Vermentino",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "white",
      "origin": "Italy (Sardinia)",
      "color_tag": "#E0D394",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        9
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Ironbound",
            "Lunis",
            "Mediterranean Pearl",
            "Moonharbor",
            "Mythos"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Amberglow",
            "Astraea",
            "Aventine",
            "Clockwork Cellars",
            "Gilded Petal"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Sovereign Vine",
            "Sunbliss",
            "Timberloft",
            "Valerius",
            "Wilderberry"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 9,
          "brands": [
            "Luminore",
            "Meridian Sun",
            "Novafizz",
            "Sylvarrow",
            "Veloraine"
          ]
        }
      ],
      "total_bottles": 120,
      "brand_count": 20,
      "brands": [
        "Amberglow",
        "Astraea",
        "Aventine",
        "Clockwork Cellars",
        "Gilded Petal",
        "Ironbound",
        "Luminore",
        "Lunis",
        "Mediterranean Pearl",
        "Meridian Sun",
        "Moonharbor",
        "Mythos",
        "Novafizz",
        "Sovereign Vine",
        "Sunbliss",
        "Sylvarrow",
        "Timberloft",
        "Valerius",
        "Veloraine",
        "Wilderberry"
      ]
    },
    {
      "varietal": "Viognier",
      "original_spelling_in_guide": null,
      "floor": 2,
      "type": "white",
      "origin": "France (Rhône)",
      "color_tag": "#E4C97E",
      "pisos": 5,
      "columns_spec": [
        3,
        9,
        3,
        5
      ],
      "columns": [
        {
          "column_index": 0,
          "bottles_per_brand": 3,
          "brands": [
            "Astraea",
            "Bancroft",
            "Bellacord",
            "Deeproot",
            "Duskmere"
          ]
        },
        {
          "column_index": 1,
          "bottles_per_brand": 9,
          "brands": [
            "Auric Hollow",
            "Caelthorn",
            "Elysian",
            "Kestrel Ridge",
            "Meridian Sun"
          ]
        },
        {
          "column_index": 2,
          "bottles_per_brand": 3,
          "brands": [
            "Embercask",
            "Hearthside",
            "Luminore",
            "Lunis",
            "Rust & Oak"
          ]
        },
        {
          "column_index": 3,
          "bottles_per_brand": 5,
          "brands": [
            "Siren’s Call",
            "Sylvarrow",
            "Veloraine",
            "Wilderberry",
            "Zephyrhill"
          ]
        }
      ],
      "total_bottles": 100,
      "brand_count": 20,
      "brands": [
        "Astraea",
        "Auric Hollow",
        "Bancroft",
        "Bellacord",
        "Caelthorn",
        "Deeproot",
        "Duskmere",
        "Elysian",
        "Embercask",
        "Hearthside",
        "Kestrel Ridge",
        "Luminore",
        "Lunis",
        "Meridian Sun",
        "Rust & Oak",
        "Siren’s Call",
        "Sylvarrow",
        "Veloraine",
        "Wilderberry",
        "Zephyrhill"
      ]
    }
  ]
};
