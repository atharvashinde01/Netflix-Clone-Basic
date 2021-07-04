const moviesContainer = [
  {
    id: 0,
    name: "NETFLIX ORIGINALS",
    movies: [
      {
        id: "0a",
        name: "money heist",
        displayPoster:
          "https://streamsflix.com/wp-content/uploads/2019/09/MONEY-HEIST.jpg",
        bigPoster:
          "https://img.buzzfeed.com/buzzfeed-static/static/2020-04/7/23/asset/c8c315f07563/sub-buzz-118-1586302584-7.jpg?crop=1080%3A1033%3B0%2C0&downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
        trailerUrl: "https://youtu.be/p_PJbmrX4uk",
        description:
          " Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain",
      },
      {
        id: "0b",
        name: "sacred games",
        displayPoster:
          "https://images-na.ssl-images-amazon.com/images/I/91kN9Bba8fL._SL1500_.jpg",
        bigPoster:
          "https://www.whats-on-netflix.com/wp-content/uploads/2018/09/sacred-games-season-2-netflix.jpg",
        trailerUrl: "https://youtu.be/w-Xe8gLBc5I",
        description:
          "When police officer Sartaj Singh receives an anonymous tip about the location of criminal overlord Ganesh Gaitonde, he embarks on a chase around Mumbai in what becomes a dangerous cat-and-mouse game. Amidst the chaos, trappings of a corrupt underworld are revealed. After being removed from the Gaitonde case, Singh begins his own investigation as he works to save Mumbai from impending doom. Flashbacks reveal some of the crimes that Gaitonde has committed through the years.",
      },
      {
        id: "0c",
        name: "narcos",
        displayPoster:
          "https://www.wallpapertip.com/wmimgs/6-69213_narcos-poster.jpg",
        bigPoster:
          "https://c4.wallpaperflare.com/wallpaper/947/482/363/narcos-horacio-carrillo-wallpaper-preview.jpg",
        trailerUrl: "https://youtu.be/xl8zdCY-abw",
        description:
          "Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late '80s in this raw, gritty original series. Also detailed are the actions taken by law enforcement as they battle in the war on drugs, targeting notorious and powerful figures that include drug lord Pablo Escobar. As efforts are made to control cocaine, one of the world's most valuable commodities, the many entities involved -- legal, political, police, military and civilian -- find themselves in conflict.",
      },
      {
        id: "0d",
        name: "dark",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        bigPoster: "https://wallpapercave.com/wp/wp4056401.png",
        trailerUrl: "https://youtu.be/rrwycJ08PSA",
        description:
          "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. 'Dark' represents the first German original series produced for Netflix.",
      },
      {
        id: "0e",
        name: "Ludo",
        displayPoster:
          "https://image.songsuno.com/movie-images/original/movie/ludo/ludo-poster-abhishek-bachchan.jpg",
        bigPoster:
          "https://m.media-amazon.com/images/M/MV5BMzVmYmM5OTEtNDYzYi00NGRhLThiZDgtOTIwMGQ2OTQ4ZWRjXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
        trailerUrl: "https://youtu.be/Srp90Hp0G70",
        description:
          "From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.",
      },
      {
        id: "0f",
        name: "extraction",
        displayPoster:
          "https://i.gadgets360cdn.com/large/extraction_poster_1586173758536.jpg",
        bigPoster:
          "https://images.hdqwalls.com/wallpapers/netflix-extraction-2020-4k-jc.jpg",
        trailerUrl: "https://youtu.be/L6P3nI6VnlY",
        description:
          "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.",
      },
      {
        id: "0g",
        name: "Gunjan saxena: the kargil girl",
        displayPoster:
          "https://i.gadgets360cdn.com/large/gunjan_saxena_poster_1591684471091.jpg",
        bigPoster:
          "https://www.kajrii.com/lifestyle-book/wp-content/uploads/2020/08/Gunjan-Saxena.jpg",
        trailerUrl: "https://youtu.be/rtGIq9Xjnrw",
        description:
          "An ambitious Gunjan Saxena eyes becoming a pilot after being drawn by the idea of a life in a cockpit. Despite facing reservations, she fulfils her dream and serves the country in the Kargil War.",
      },
      {
        id: "0h",
        name: "ghoul",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg",
        bigPoster:
          "https://m.media-amazon.com/images/M/MV5BNzJlNzZjNzctOGY1MS00MGE2LWIzY2MtMDM2ZjJhY2ZjYjk0XkEyXkFqcGdeQXVyNTE4ODU0NzA@._V1_.jpg",
        trailerUrl: "https://youtu.be/zg0N4L4mwFk",
        description:
          "When a new prisoner arrives at a military detention center exhibiting eerie behavior, young interrogator Nida Rahim searches for the truth. Her quest becomes a battle for survival when the prisoner, sect leader Ali Saeed, turns the tables on Nida and the other interrogators, exposing their most shameful secrets. Nida ultimately discovers a ghoul inhabiting Saeed and -- after telling her colleagues about it -- learns the alarming truth about what its presence reveals.",
      },
      {
        id: "0i",
        name: "mowgli: legend of the jungle",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_.jpg",
        bigPoster:
          "https://cdn3.movieweb.com/i/article/uuXyvI8OyZNjaGW9enGIN1NDZY9oCj/1200:100/Mowgli-Trailer-2-Andy-Serkis-Netflix.jpg",
        trailerUrl: "https://youtu.be/OVBjPpUlQrE",
        description:
          "Human child Mowgli is raised by a wolf pack in the jungles of India. As he learns the often harsh rules of the jungle, under the tutelage of a bear named Baloo and a panther named Bagheera, Mowgli becomes accepted by the animals of the jungle as one of their own, but the fearsome tiger Shere Khan doesn't take a liking to him. But there may be greater dangers lurking in the jungle, as Mowgli comes face to face with his human origins.",
      },
      {
        id: "0j",
        name: "betaal",
        displayPoster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Betaal_logo.jpg/250px-Betaal_logo.jpg",
        bigPoster:
          "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABctwiOZw8r15yIgU_QPUEorYe1nP5rrqiR-8fRX2okQkH0Rjsu3IiL1mmJeavGrZLcE5I1oN9eX_8cMyOiFfVrITeF2T.jpg?r=9bc",
        trailerUrl: "https://youtu.be/YSEVaVc-nOo",
        description:
          "Hired to displace tribal villagers, highway officials unearth an old curse and an army of British soldier-zombies. Betaal will be the fifth original series from India in 2020, after the Jharkhand-based phishing drama Jamtara in January",
      },
      {
        id: "0k",
        name: "The Queen's Gambit",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
        bigPoster:
          "https://www.slashfilm.com/wp/wp-content/images/the-queens-gambit.jpg",
        trailerUrl: "https://youtu.be/CDrieqwSdgI",
        description:
          "Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.",
      },
      {
        id: "0l",
        name: "kingdom",
        displayPoster:
          "https://vignette.wikia.nocookie.net/kaminokuni/images/0/09/Kingdom_Poster.png/revision/latest?cb=20190825132107",
        bigPoster: "https://wallpapercave.com/wp/wp7413681.jpg",
        trailerUrl: "https://youtu.be/4l-yByZpaaM",
        description:
          "The deceased king rises and a mysterious plague begins to spread; the prince must face a new breed of enemies to unveil the evil scheme and save his people.",
      },
      {
        id: "0m",
        name: "#Alive",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BZTMwNDUxNjItMDgzNS00MjU3LTllZTktOGVmZGM4N2FmYmYzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
        bigPoster:
          "https://i.insider.com/5f5bd3c8e6ff30001d4e86a4?width=1100&format=jpeg&auto=webp",
        trailerUrl: "https://youtu.be/jQ8CCg1tOqc",
        description:
          "As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out. Starring:Yoo Ah-in, Park Shin-hye. “#Alive” is one of those zombie movies that simply looks at the apocalypse as a test about choosing hope—sometimes they struggle with it",
      },
      {
        id: "0n",
        name: "drive",
        displayPoster:
          "https://upload.wikimedia.org/wikipedia/en/7/76/Drive_Netflix_Film.jpg",
        bigPoster:
          "https://www.socialnews.xyz/wp-content/uploads/2019/11/02/Drive-Netflix-poster.jpg",
        trailerUrl: "https://youtu.be/7ZU6X0wyzgc",
        description:
          "A notorious thief allies with a street racer for a grand heist involving an elaborate game of deceit with authorities, who have their own dirty secrets.",
      },
      {
        id: "0o",
        name: "jamtara - sabka number ayega",
        displayPoster:
          "https://m.media-amazon.com/images/M/MV5BNWM1OGE2MmItZWUzZi00OGY5LThhMmQtZmJjZmJlYmQ5NTkwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        bigPoster:
          "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/o1rfx0bznpleipnh_1578652740.jpeg?tr=w-812,h-464",
        trailerUrl: "https://youtu.be/GoXd_sESBBI",
        description:
          "A group of small-town young men run a lucrative phishing operation, until a corrupt politician wants in on their scheme -- and a cop wants to fight it. Cousins, Sunny and Rocky, along with their school dropout friends, run a wildly successful phishing scam from the remote village of Jamtara in Jharkhand. Things go awry when the scam gets ousted in a news report.",
      },
    ],
  },
  {
    id: 1,
    name: "Top Trending",
    movies: [
      {
        id: "1a",
        name: "OMG: OH MY GOD",
        displayPoster:
          "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/33/20/0_5o783214_1572408348457_l_medium.jpg",
        trailerUrl: "https://youtu.be/8nUwpoTrWFk",
      },
      {
        id: "1b",
        name: "Andhadhun",
        displayPoster:
          "https://filmspell.com/wp-content/uploads/2018/10/Andhadhun-2018-HD-Poster.jpg",
        trailerUrl: "https://youtu.be/2iVYI99VGaw",
      },
      {
        id: "1c",
        name: "Drishyam",
        displayPoster:
          "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZnqiiq3IsmJ8FqPUYey8DqELi_7Zo43KuseSDuReHbCK5dtM0Kkf9XGotSjJCgSRK9Jjegp-Gq-TM9jMbtnlGPFTLAN.jpg?r=7ad",
        trailerUrl: "https://youtu.be/AuuX2j14NBg",
      },
      {
        id: "1d",
        name: "Stree",
        displayPoster:
          "https://res.cloudinary.com/quackreview/images/f_auto,q_auto/v1599923502/stree-poster_13179a6e37/stree-poster_13179a6e37.jpg",
        trailerUrl: "https://youtu.be/gzeaGcLLl_A",
      },
      {
        id: "1e",
        name: "Aquaman",
        displayPoster:
          "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GB/wb-2045078_6000112291-Full-Image_GalleryCover-en-GB-1553902089109._UY500_UX667_RI_V7nBbHZMa73ozrAw4zsThVW7TayOqR4Wt_TTW_.jpg",
        trailerUrl: "https://youtu.be/WDkg3h8PCVU",
      },
      {
        id: "1f",
        name: "Article 15",
        displayPoster:
          "https://www.heavenofhorror.com/wp-content/uploads/2019/09/article-15-review.jpg",
        trailerUrl: "https://youtu.be/HKOJY0cU63E",
      },
      {
        id: "1g",
        name: "PK",
        displayPoster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_jARRmrOGQ9Ovs13cwClRUxeroamtqbEsg&usqp=CAU",
        trailerUrl: "https://youtu.be/SOXWc32k4zA",
      },
      {
        id: "1h",
        name: "Spider-Man: Homecoming",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd1w8W49P0Wyw4a1J6rZctn6LXdOijFz_16gM388Kcr00GrX5zaOlZb7aH_0dLAv30Y05ILHnQieq6oulNxzdiGtnwU.jpg?r=16b",
        trailerUrl: "https://youtu.be/39udgGPyYMg",
      },
      {
        id: "1i",
        name: "Gangs of Wasseypur",
        displayPoster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtbUj69KXfXUQzfSwl7dZis-kWjBQADvbvQ&usqp=CAU",
        trailerUrl: "https://youtu.be/j-AkWDkXcMY",
      },
      {
        id: "1j",
        name: "Transformers",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTpcNqdaxysPhqw77scLS_CMPftYmlyi4SPynLeOwr36-2RAqd3CxmQ6p0WfY8sCsVAuhG_JcxzM3VEpH08ID4Km3wE.jpg?r=81b",
        trailerUrl: "https://youtu.be/dxQxgAfNzyE",
      },
      {
        id: "1k",
        name: "Fast and Furious 7",
        displayPoster:
          "https://www.simpletelly.com/wp-content/uploads/2015/03/FURIOUS7.jpg",
        trailerUrl: "https://youtu.be/Skpu5HaVkOc",
      },
      {
        id: "1l",
        name: "2012",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRNE-yELjAQoxWpP6jjg_VTKbyHo2ckjsXSBo4AftqMIiG0eqPZuwpfMYb9pHCAw9HO9KH5gkaaXxww2L63YmZqKxhU.jpg?r=e90",
        trailerUrl: "https://youtu.be/ce0N3TEcFw0",
      },
      {
        id: "1m",
        name: "Bulbbul",
        displayPoster:
          "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/pjimage-9-1591763950.jpg",
        trailerUrl: "https://youtu.be/4MGReT9-cAg",
      },
      {
        id: "1n",
        name: "300: Rise of an Empire",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcOgzzXvvwCxFPOKeAWkKRPtMgWIBHiroWdU5EYLg7u9TTjLBqTHM8V-D0YV9FK-cMjvzpEvnLq5MVcUTHEDLM44YWs.jpg?r=3b7",
        trailerUrl: "https://youtu.be/2zqy21Z29ps",
      },
    ],
  },
  {
    id: 2,
    name: "Action Movies",
    movies: [
      {
        id: "2a",
        name: "John Wick",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdIgevNNAL-UcewatQHC7cPfvwm8CuHAXHTBGXxn_-gbJ2D-8mMtoa40SvaosRDVzPHOYh6exb775b2GGv8kcaTUROU.jpg?r=2c1",
        trailerUrl: "https://youtu.be/C0BMx-qxsP4",
      },
      {
        id: "2b",
        name: "Saaho",
        displayPoster:
          "https://www.dekhnews.com/entertainment/wp-content/uploads/2019/11/Saaho-New-Poster-Feature.jpg",
        trailerUrl: "https://youtu.be/lD0-ztCFydA",
      },
      {
        id: "2c",
        name: "Happy New Year",
        displayPoster:
          "https://i.pinimg.com/originals/2a/34/18/2a3418054e591a06f2a3eab6e524b3dd.jpg",
        trailerUrl: "https://youtu.be/JGHwANkQFrg",
      },
      {
        id: "2d",
        name: "The Matrix",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSof4o_SiVBC6yxgJpJc0bF7k4ynzleLB3dT66KogcjzaagAm_8cuEE2fHIMDsxfwWie42gmKlkzV-Ac59rIjL-37V0.jpg?r=ce8",
        trailerUrl: "https://youtu.be/vKQi3bBA1y8",
      },
      {
        id: "2e",
        name: "The Amazing Spider-Man",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZGYSToVQc-zxEzN4we_OSaap722CgvuUVDLISWEFQ0VbNMzGsbU22kl2O2rqL97y2uQLsjpVeu3ev4dBMB19kE0964.jpg?r=632",
        trailerUrl: "https://youtu.be/-tnxzJ0SSOw",
      },
      {
        id: "2f",
        name: "Don 2",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYNdhEtSFrEofGb1BNS0cwF9fX0le8sx6h9gOll5mnvKI1aCiquQfkGqk2nVJOPKVopduLP_P0LlowIROYVwGAqHOzw.jpg?r=d10",
        trailerUrl: "https://youtu.be/_X5w-6PqoZ0",
      },
      {
        id: "2g",
        name: "Mohenjo Daro",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSkquTV7Hjm5tWHpzl3gbVGxbyFeRrV0qKAvN-5ZJDe9D6B15i8jSCtxRUbcyHPhKBcusIRn6G2fbj0Byzww9XR3nNA.jpg?r=c6f",
        trailerUrl: "https://youtu.be/UPZ5FKEB02I",
      },
      {
        id: "2h",
        name: "Brothers",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe9cqdmC4L1MjoHuBnpxdR0iBF_DFGkNOVF3lOWxUnvHjLn0AHaqlxEkDLyX0v2kQR8A3jXI-jtXMiVB7JsCpnt6tFY.jpg?r=416",
        trailerUrl: "https://youtu.be/QuRSCU0tOKs",
      },
      {
        id: "2i",
        name: "Sherlock Holmes",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABds5qLCSVCONxy845fmAXy70iMLXyzUqKgszH2dikpdClvQpixEGdoz-JiOXodF9YaItOkuK1k9g3pgrmkHoO35XWmY.jpg?r=5ec",
        trailerUrl: "https://youtu.be/J7nJksXDBWc",
      },
      {
        id: "2j",
        name: "Assassin's Creed",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmnHCOCcotIQuo3lHK_D0J9cEob2V297aiUWaZNhC2agB16ovejngmvy3bdySPzxlmKQUCD-8wOWm_1Bc2m0GmdbxY.jpg?r=0b1",
        trailerUrl: "https://youtu.be/4haJD6W136c",
      },
      {
        id: "2k",
        name: "Baaghi",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcSFpz6NRJfRRFuQCtJIsdy0VvO4AXSYlmUrSC9HS8-4q1HkD4BFh4TgZFMZ-oaiiEfiz_HHzJ3EhHR5Fkh9wmtTMB4.jpg?r=13b",
        trailerUrl: "https://youtu.be/FV-3avN3Oxc",
      },
      {
        id: "2l",
        name: "Agneepath (2012)",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfhc2kNOjyo_sSI9I_8XKyOygHDWJ0ig0yRroeQphQtPbkqgfwYF3b-xb3yrLwX9nDoSf-q1iLW3OQVZGZx5bpSkyT4.jpg?r=49b",
        trailerUrl: "https://youtu.be/z0KPQstwMQw",
      },
      {
        id: "2m",
        name: "Journey-2: The mysterious Island",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWYvSd57jZwpPUYLeBjv-IDEbTNa-zK8nLWKt3z7ptIqCllZ1Fn4VN_CVI4SZ1yYNl1EAhC-6MpdU6mm9T8MnfEZACI.jpg?r=3b9",
        trailerUrl: "https://youtu.be/qdFCjwcK8IE",
      },
    ],
  },
  {
    id: 3,
    name: "Comedies",
    movies: [
      {
        id: "3a",
        name: "3 Idoits",
        displayPoster:
          "https://vistapointe.net/images/3-idiots-wallpaper-3.jpg",
        trailerUrl: "https://youtu.be/K0eDlFX9GMc",
      },
      {
        id: "3b",
        name: "Stuart Little 2",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZ3EkFaiTb01jxmOnxCpYnMI-1W66A-bJN7txq7IaSJgmGa4H0OgQPUd43SC7BG_FKAM81xuhS6Siy-7U0HxIabwiI.jpg?r=5b5",
        trailerUrl: "https://youtu.be/IDbsJeOgItw",
      },
      {
        id: "3c",
        name: "Megamind",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdLBnOZZy4dkhYoBekQVfmCephgnBa5WmQnvDZM0KVQWWnzWKNxFjTck79dYxBe31-t-pzrfYauv6_CXXRTPqkUfqkw.jpg?r=509",
        trailerUrl: "https://youtu.be/6CJUQr4Vs40",
      },
      {
        id: "3d",
        name: "Munna Bhai MBBS",
        displayPoster:
          "https://www.filmcompanion.in/wp-content/uploads/2017/12/Film_Companion-Munnabhai-mbbs-scripts-Lead-image-1.jpg",
        trailerUrl: "https://youtu.be/6lCGvu-hwX4",
      },
      {
        id: "3e",
        name: "Bhagam Bhag",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSupLho74JTw_A3WkhpuGl9_j06NkLdJADHlxVbO30GL4PRaM_aV49MY_3RxTiHCNalR2T4AD_HGEmNcLRB8yswf4Ig.jpg?r=e0f",
        trailerUrl: "https://youtu.be/JO_Ks9cZMKU",
      },
      {
        id: "3f",
        name: "Welcome",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXFid9mtpdCkwUjvlcd7wCZ6kKlLPvnE1AQRVVAu-Xkn4cr_Ub2mZW-CggBxYTgoWbwl5R-c6nAvEFj2kFIILNcoGiE.jpg?r=2ed",
        trailerUrl: "https://youtu.be/SIKfSPbsuyw",
      },
      {
        id: "3g",
        name: "Kung Fu Panda: Holiday",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbIqTX-voLI4gCfAvwutK60drCMI_u6BOrMlHpSBdqg64FL8kpbqJ0W-UNwuQURzsvVFXPTWacxUS4NQgDRRKjm8eOM.jpg?r=5f8",
        trailerUrl: "https://youtu.be/H1fyrAyP_BI",
      },
      {
        id: "3h",
        name: "Dhamaal",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQB4n2SWlHqhPe0jfSlhoJSsSCnlG_q5bsR98dStztA-axfPjdO17U9uHp_0t5lgDJv-JYuJNp7Xbe9Cnqb_Xs6A3Xo.jpg?r=48c",
        trailerUrl: "https://youtu.be/LZX2NAR_QlY",
      },
      {
        id: "3i",
        name: "Phir Hera Pheri",
        displayPoster:
          "https://img.reelgood.com/content/movie/5188ac20-3131-4070-b441-cafdf346bf54/backdrop-1920.jpg",
        trailerUrl: "https://youtu.be/1rJQQCZcq2s",
      },
      {
        id: "3j",
        name: "Rowdy Rathore",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUwNJ6h4I325fYNDMcY2vJBXdEUGj0X0bocE7_demcQcVZs-X4sLQYIGOPOPphKPYesvUFklfFhRTFYd7gGry_sKq8w.jpg?r=68c",
        trailerUrl: "https://youtu.be/ZYMWRrpea_g",
      },
      {
        id: "3k",
        name: "Madagascar: Escape 2 Africa",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe6NelDv8fdIzHAVmsTfo2In6i3y7sy31w7MQWqywsf8hocP2jeBpD7LChL45yWPz6R-lhn-z80gFZCLwjf4iz_41uY.jpg?r=148",
        trailerUrl: "https://youtu.be/hLVjIhPYq7s",
      },
    ],
  },
  {
    id: 4,
    name: "Horror Movies",
    movies: [
      {
        id: "4a",
        name: "Stree",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS63C9WxuBBqZuDbysz7dzx3a2km3dRVZqBS8rnqnb8DyUTMRNl8tVEfjS26rP7U1rIF5gTrWnmsKiHHFhyfQgsAX-w.jpg?r=d64",
        trailerUrl: "https://youtu.be/gzeaGcLLl_A",
      },
      {
        id: "4b",
        name: "Lupt",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUq4DsaXYfGxpBj93aWl_nb7TYgh65OVeyDpBevV7IZrbHwSThCBXRE2SheUzjCmglMYrgk-wFsvTsRzA_MboUORSN0.jpg?r=96d",
        trailerUrl: "https://youtu.be/FxhUuHzULcM",
      },
      {
        id: "4c",
        name: "Don't Listen",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmrO6z2fM_vRTifHg_mETh2v0tdZwtXs1_I72pHpyeStCWu-UBjN0JuzhZXX2hIZf1QUIjcqR17fJzHsGsmGbK0NxPUwFYLIaWqdgIOEXTgsrBCG8wNuUvvF6jk.jpg?r=ad8",
        trailerUrl: "https://youtu.be/XvrDkxVopiQ",
      },
      {
        id: "4d",
        name: "Nobody Sleeps in the Woods Tonight",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABefseUU_v7ZNu995DBnrnZnReEHodqEfin557OJnJinLZXiT4ZLLmxZDm7fgqI206fgNxFzk_6nd-XDOBa7GsebzT-GsCg09EHEfK1MCgJbhVpWj-SkXfIi9Zp4R.jpg?r=5b6",
        trailerUrl: "https://youtu.be/RdSvaEhqMcM",
      },
      {
        id: "4e",
        name: "#Alive",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWwjB0gPhss9coE4tlz6za8g9KuYfE3DDUBBTwxVyw00EBroYZsrBb9dkBsrYvjkcXyHbWrRZPKFCmxwSaYr_mISnvYQtxmD0UUF_HswsD5vNLyCY8CZ2MviecHv.jpg?r=400",
        trailerUrl: "https://youtu.be/jQ8CCg1tOqc",
      },
      {
        id: "4f",
        name: "Horror Story",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbLtLASOm9MD6RVc5a_ybZB0dPoREI5HRx0eBWJvGDe6tStlwOywwWpGls23QjvKuKcnL_DNoyU-qi3UzBldX0bCAzY.jpg?r=b7b",
        trailerUrl: "https://youtu.be/pdljX50YAZ0",
      },
      {
        id: "4g",
        name: "Bhoot Returns",
        displayPoster:
          "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/18/51/c5b60f21775411e6b879b77c8bf4d3fc_1581945832220_l_medium.jpg",
        trailerUrl: "https://youtu.be/zhn2aBvv2BQ",
      },
      {
        id: "4h",
        name: "Bulbbul",
        displayPoster:
          "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/pjimage-9-1591763950.jpg",
        trailerUrl: "https://youtu.be/4MGReT9-cAg",
      },
      {
        id: "4i",
        name: "Train To Busan",
        displayPoster:
          "https://cima4uonline.com/social-thumb.php?vid=2b6d22f47",
        trailerUrl: "https://youtu.be/pyWuHv2-Abk",
      },
      {
        id: "4j",
        name: "Peninsula",
        displayPoster:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fpeninsula-official-first-trailer-watch-online-train-to-busan-yeon-sang-ho-0.jpg?w=960&cbr=1&q=90&fit=max",
        trailerUrl: "https://youtu.be/eI0RUX5-1jI",
      },
      {
        id: "4k",
        name: "Eerie",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW7ke9mX3H1UBOVMhCGdPVQWuWztaDbqaIyCfFLVgy0-phKADH0ePD0Rp4sXsiNjVmeM4YySqeFGw-SsAWcFzLUVInU.jpg?r=c7d",
        trailerUrl: "https://youtu.be/XHHtvCft9IU",
      },
    ],
  },
  {
    id: 5,
    name: "Thriller Movies",
    movies: [
      {
        id: "5a",
        name: "Ittefaq",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWq0JejaXNPutdDHt-bF3Rs2kD8KRpDCokEVxji4GmnHnG27bqOhCcfe7j1JOrhK4W2B1AG3DUyMTT9hiIrNpWFYnRY.jpg?r=306",
        trailerUrl: "https://youtu.be/mvfvoCdPrII",
      },
      {
        id: "5b",
        name: "The Possession",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbVPrrNIa0ogHpCTF-aqtLdE9QF9_knqWaGiLBeQHNUC92UBD78JnhwrMl7QQtVWyFlx4TzXJHRYQEQ3fdREZxxaAwE.jpg?r=c77",
        trailerUrl: "https://youtu.be/WVjggWQRlQQ",
      },
      {
        id: "5c",
        name: "Drishyam",
        displayPoster:
          "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZnqiiq3IsmJ8FqPUYey8DqELi_7Zo43KuseSDuReHbCK5dtM0Kkf9XGotSjJCgSRK9Jjegp-Gq-TM9jMbtnlGPFTLAN.jpg?r=7ad",
        trailerUrl: "https://youtu.be/AuuX2j14NBg",
      },
      {
        id: "5d",
        name: "Badla",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTrl6243PER0l6_Zem5sCwm998k5gzydFrW8TfWSStV8JRGwMomvFGVC5XY-7j8IuU_hJjrA_tFqM9LemcdPTudgFZo.jpg?r=858",
        trailerUrl: "https://youtu.be/mSlgu8AQAd4",
      },
      {
        id: "5e",
        name: "Final Destination 5",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDMVTV_ij06H86vufWi_8ampH77sm3OYlt_nUhFYb_nhPR6xHPy1Gn9lIu9cCG-LKH9PDjHUiQafIX3Xgr1MtZgwuQ.jpg?r=887",
        trailerUrl: "https://youtu.be/PI87-0g_SI8",
      },
      {
        id: "5f",
        name: "Death Note",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfVDvTCJIKYNy15W-tAr3oKLzao7GvODTE9VRGVx6XlTEW_Fh_MMltBbzlJP1Z2emwbnKROsjGI7eaGJshNUsr5LXqqoYEAWs4_xpITSiXRnozXLGfwwDY_GcgT9.jpg?r=0df",
        trailerUrl: "https://youtu.be/NlJZ-YgAt-c",
      },
      {
        id: "5g",
        name: "Raman Raghav 2.0",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABevAVohkE5QdYvLKovNPcFFs2wovqultAz_jMiAYO-93sWR-ONRXKhCa8oXXKKO35sx2PX3PKLJsoWdB0N77AHIZul4.jpg?r=03f",
        trailerUrl: "https://youtu.be/xq1cEmhVa68",
      },
      {
        id: "5h",
        name: "Sinister",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdCn3fPZEGGwgaff8sypOtvQnEAOmkds-CrcKA6WDaV1sfIJFb1vpRgtoQ-bX17FyOYwb6PFl9oYwFNc-rBoJ0tfdwM.jpg?r=13d",
        trailerUrl: "https://youtu.be/_kbQAJR9YWQ",
      },
      {
        id: "5i",
        name: "Paranormal Activity: The Marked One",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHB43iCg19wpFIZzksGFnq7-aCDfx1vE9BSSTvRsynR5f7rVqoilCfs_iO9ES7QlGmmRiOW5_k_BT81Kwkeq15zVVA.jpg?r=8b6",
        trailerUrl: "https://youtu.be/ccE9LeAbPU4",
      },
      {
        id: "5j",
        name: "Sabrina",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjSHa0U8Optl-P09AqfvZGHHGXqJGJmcu96Bj-QflF7yqiXVIGQtNQbVJmO3UKl1iZ6FAlbpDhxjFcf8p3k1xQR7zERVuWinaTxtfRQ7EZL-3mO_febgGdn_SdY.jpg?r=5a3",
        trailerUrl: "https://youtu.be/pL4_hLGajaE",
      },
      {
        id: "5k",
        name: "Madras cafe",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ2lrT2Kc2KG8Hs_IH0wv5b7ZvcVFvTBsctusQp0-iFyLZ8Kd1LkYCrF508o2bWV6C3B3laIphe4ua6t2XLqdMJFKRI.jpg?r=cb0",
        trailerUrl: "https://youtu.be/hnkKI01I0Ac",
      },
      {
        id: "5l",
        name: "Kaal",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYvGnEoznB_lJcKNZYLbbCoE2DSbN6f3faPVyjlOQlL-mm2oUOIm7uecE1GSqaEBhwk9TPqs2LLqU6adO-ywOX0QTow.jpg?r=baa",
        trailerUrl: "https://youtu.be/XQf_nbORaZ0",
      },
    ],
  },
  {
    id: 6,
    name: "Romantic Movies",
    movies: [
      {
        id: "6a",
        name: "Kabir Singh",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWadYXStw2ZnQ_axSEOnYS2ArPuWmgyJWb6bWPVr54h4K-IpahkMKU2ga7s2l_k81y1k_f26unSmE32hhx18jtSkZI.jpg?r=d71",
        trailerUrl: "https://youtu.be/RiANSSgCuJk",
      },
      {
        id: "6b",
        name: "Bareilly Ki Barfi",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnphpOPqhXj7UszFAooSSVvu7xUIX9xvkKwvI7mCxo1PPwZJRi0-zyvBD_fDPYcnzIg44snfa4Y1XJVgUIQsgAVcIg.jpg?r=0f2",
        trailerUrl: "https://youtu.be/Ds2JXPKZB6s",
      },
      {
        id: "6c",
        name: "Om Shanti Om",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacJCe8UgRJtbxJI4L7tOgbWjXLQE4-aU6SSdl8hFBkyGVgOxXmmLaeXuaDZVDql6eDlOsWuNpLwG73dRLAj_jI-xmk.jpg?r=a30",
        trailerUrl: "https://youtu.be/9oeGoQGt7Ao",
      },
      {
        id: "6d",
        name: "Beautiful Creatures",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdDVxh7uOPXFi4jJXr-0OAyjEItZ6JxHgPUcEP92i-2wwfGQH529sgyTCv7nLwMR1Fpy0ucdF_DrGIEhx39F2BLYL7M.jpg?r=a32",
        trailerUrl: "https://youtu.be/eLDL5mxgYNY",
      },
      {
        id: "6e",
        name: "Toilet: Ek Prem Katha",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRUTfzsuPmWId2-MEAiqG7tq8KhnpEIKwhqBjVTKsV8ReZgKPEZtYhYLFWs2MWOA5w08u6uMoc-xalYWgCG6hozLxXw.jpg?r=c2b",
        trailerUrl: "https://youtu.be/ym4EJQ7XORk",
      },
      {
        id: "6f",
        name: "Lakshya",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1M2zGft9w4WP1dJzIPfM7BPmPVZNwzWoGxiM67yZvRa9IwMvpq7j5OPafTW6Ft7cY6Gvg5KgjOG3U3lQ9cFe_nv6Q.jpg?r=2b0",
        trailerUrl: "https://youtu.be/8DMF0U6xV78",
      },
      {
        id: "6g",
        name: "Barfi!",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYBUM6wedDOdNEU-BsYWwYoZFpVAsu1UZ44O_wACENlJ7da9fDKO3eFbasXuVCokDM0Jc0SRQuV9Fzu6F-IiOMBrPPw.jpg?r=1df",
        trailerUrl: "https://youtu.be/nQ3FYUgSjC8",
      },
      {
        id: "6h",
        name: "Dilwale",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSpBYDCuQM0NQNJHrIsDLWyRe4RsiUFGQ9rUZTvNTOe-VPTsRgFvLFhAm9kS14gAwHjAlY1kzj0WDkjGFTlghYNLVuA.jpg?r=a12",
        trailerUrl: "https://youtu.be/AHuOo1DLcRc",
      },
      {
        id: "6i",
        name: "Luka Chuppi",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQlIR2OwtdA9X36EeVxV3a-e66smisSfNJ5zW17fie03Gqvx5ED8-LBrLCIiwoM829Dn7AYh4Rzv7Ykh5JOAUyHqydM.jpg?r=23c",
        trailerUrl: "https://youtu.be/SVj26LvQMPA",
      },
      {
        id: "6j",
        name: "Lage Raho Munna Bhai",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdYvfUVq-gIhrdwtYm7WM_xMOUg-9CFqpUsOThS_AOt_fBrltW5Ux3rSOHcbltahYAVWUXYyNf6VyHGOtthMiWkTsWI.jpg?r=5c8",
        trailerUrl: "https://youtu.be/6ETg_mDL1VM",
      },
      {
        id: "6k",
        name: "Student of the Year",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVKqn_t4JNh68KieMpiq6uWqQK2dHCh_3VdqOAyGJ7vs6xBipvf8Ff9c9bXeLfxKlgFC1tvJxd-u5Awy88Ql4nxq4a8.jpg?r=d42",
        trailerUrl: "https://youtu.be/fivOhPjX9YM",
      },
      {
        id: "6l",
        name: "Zero",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWCCUBJCuVDEfN01in9HA-CVsHu83jKfY3sRx5zqdNg1YzF73TKC1rMxb6UknJkyrDYZUZxEAdP2Rdn3uFoVW-qUhfI.jpg?r=c9b",
        trailerUrl: "https://youtu.be/Ru4lEmhHTF4",
      },
    ],
  },
  {
    id: "7",
    name: "Made in India",
    movies: [
      {
        id: "7a",
        name: "Guru",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdGnANEUVhi6bK11z-B-8GgHOQX_CowsCleHr2wTxwNJ8V7-ZsiY-A-rsDWwacrLhoP6MYCD8yHazz7lhrIvw1DeYMI.jpg?r=fbf",
        trailerUrl: "https://youtu.be/bYwDP9FN95U",
      },
      {
        id: "7b",
        name: "Baazaar",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWMoy-q4bIAyA5Zii8PNyhbxXZWKSZCrap2qQ4hm9-JnJU4NX0uzxqoHPQ_dGR1YdYpkhAAmSBS6tY6DX7jD8g4WYw.jpg?r=242",
        trailerUrl: "https://youtu.be/Pb7iJnIWzNk",
      },
      {
        id: "7c",
        name: "Kai Po Che!",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWsGNUKZwB9TABPScWEmLBMhA9kUGz73FNc6S9DsoPyvBjkL2XPMTHwsIIaZuwqDx1QOIHR1-vmQLLuJbsrU_A9ejVY.jpg?r=37e",
        trailerUrl: "https://youtu.be/nGSyqEOo8k8",
      },
      {
        id: "7d",
        name: "Gangs Of Wasseypur: Part 2",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbwPjGXZnpkyDrnaApkgiB5J0MA6GJvFrOX4ouH0d0fjFD4-iKxy8lpGgY1qaQ5H0Gg1w1Nto-TMAjVjbUaGjgaCnx0.jpg?r=0f5",
        trailerUrl: "https://youtu.be/GT41HOs7ccg",
      },
      {
        id: "7e",
        name: "Om Shanti Om",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacJCe8UgRJtbxJI4L7tOgbWjXLQE4-aU6SSdl8hFBkyGVgOxXmmLaeXuaDZVDql6eDlOsWuNpLwG73dRLAj_jI-xmk.jpg?r=a30",
        trailerUrl: "https://youtu.be/9oeGoQGt7Ao",
      },
      {
        id: "7f",
        name: "Thackeray(Hindi)",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0lik2-5xPbo0xWKEONo2JBrq47YLjHvHWOuHb3rHDDWUrraYvDHDeAhKQY_prgv5o8OZz8-Vj23NkBT_G3emKxZmA.jpg?r=c1f",
        trailerUrl: "https://youtu.be/Qqpl_sAcQF8",
      },
      {
        id: "7g",
        name: "Stree",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS63C9WxuBBqZuDbysz7dzx3a2km3dRVZqBS8rnqnb8DyUTMRNl8tVEfjS26rP7U1rIF5gTrWnmsKiHHFhyfQgsAX-w.jpg?r=d64",
        trailerUrl: "https://youtu.be/gzeaGcLLl_A",
      },
      {
        id: "7h",
        name: "Sanju",
        displayPoster:
          "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2018/04/30/682219-sanju.jpg",
        trailerUrl: "https://youtu.be/1J76wN0TPI4",
      },
      {
        id: "7i",
        name: "Romeo Akbar Walter",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABReIWVsmhQR7mGZAfaDMjW5ycleNY_KfMJ5QsQj_vjt4SBs82tEsBNYeVJtDr48QHBSL8-D3ABxu6GlHLCFrL1NDU70.jpg?r=ceb",
        trailerUrl: "https://youtu.be/HSHjC8VdzCM",
      },
      {
        id: "7j",
        name: "Phir Hera Pheri",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbN_vilQ8BtlSn55FW-KfL79auo48RBnFabgY30nI9zjDMDDXmnwqg0tlXiNKZo9XllAVD8jMcJ0wbJlm5Rtz8IZtfU.jpg?r=93f",
        trailerUrl: "https://youtu.be/PopO5a9a6qM?t=10",
      },
      {
        id: "7k",
        name: "Padman",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQr57QRB5_LL05F-fxg6N88jC_VXXGRaHJZ2WDxlLpCkXcFDQzS1W_bIboZdD-5EuEExh4v7qiBqcNl9kMqGm25wOVM.jpg?r=f15",
        trailerUrl: "https://youtu.be/-K9ujx8vO_A",
      },
      {
        id: "7l",
        name: "Raees",
        displayPoster:
          "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTIvURpZmdPluxvquLS9gu2Eld-qbVWImdm543-8T76Dze4HMg9fqmxu5fYgXHDx7z3OfkPmw-MOxz2pucB2L5kaJeI.jpg?r=d27",
        trailerUrl: "https://youtu.be/J7_1MU3gDk0",
      },
    ],
  },
];

export default moviesContainer;
