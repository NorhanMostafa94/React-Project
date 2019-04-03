export const categories = [
    {
        id: 1,
        name: 'Horror',
        books: [
            {
                id: 7,
                title: "حلقة الرعب",
                author: "احمد خالد توفيق",
                cover: "https://images.gr-assets.com/books/1359823945s/6004909.jpg",

            },
            {
                id: 8,
                title: "يوتوبيا ",
                author: "احمد خالد توفيق",
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1214056271i/3503947._SX50_.jpg",
            },
            {
                id: 9,
                title: "السنجة",
                author: "احمد خالد توفيق",
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349778839i/16076787._SY75_.jpg",
            }
        ]
    },
    {
        id: 2,
        name: 'Fantasy',
        books: [
            {
                id: 1,
                title: 'Gingerbread',
                author: 'Helen Oyeyemi',
                cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
            },
            {
                id: 2,
                title: 'The Once and Future King',
                author: 'Helen Oyeyemi',
                cover: "https://images.gr-assets.com/books/1338741283l/43545.jpg",
            },
            {
                id: 3,
                title: 'The Bird King',
                author: 'Helen Oyeyemi',
                cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg",
            },
        ]
    },
    {
        id: 3,
        name: 'Science Fiction',
        books: [
            {
                id: 4,
                title: 'Superman: Dawnbreaker',
                author: 'Matt de la Pena ',
                cover: 'https://images.gr-assets.com/books/1529962084l/29749094.jpg',
            },
            {
                id: 5,
                title: 'Poison Study',
                author: 'Matt de la Pena',
                cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
            },
            {
                id: 6,
                title: "Sharp Objects",
                author: 'Matt de la Pena',
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",

            }
        ]
    },

]

export const authors = [
    {
        id: 1,
        name: "احمد خالد توفيق",
        Born: "June 10, 1962 ",
        Website: "http://aktowfik.blogspot.com/",
        Genre: "Fantasy, Horror, Science Fiction",
        cover: "https://images.gr-assets.com/authors/1316682283p5/1479015.jpg",
        bio: "احمد خالد توفيق فراج طبيب وأديب مصري، ويعتبر أول كاتب عربي في مجال أدب الرعب و الأشهر في مجال أدب الشباب والفانتازيا والخيال العلمي ويلقب بالعراب,ولد بمدينة طنطا عاصمة محافظة الغربية فى اليوم العاشر من شهر يونيو عام 1962، وتخرج من كلية الطب عام 1985، كما حصل على الدكتوراة فى طب المناطق الحارة عام 1997. متزوج من د منال أخصائية صدر في كلية طب طنطا – وهي من المنوفية - ولديه من الأبناء (محمد) و(مريم). بدأ أحمد خالد العمل فى المؤسسة العربية الحديثة عام 1992 ككاتب رعب لسلسلة (ما وراء الطبيعة) حيث تقدم بأولى رواياته (أسطورة مصاص الدماء) ولم تلق في البدء قبولاً في المؤسسة .يعدّ د. أحمد من الكتاب العرب النادرين الذين يكتبون في هذا المجال بمثل هذا التخصص - إن لم يكن أولهم - ( ما وراء الطبيعة ) .. تلك السلسلة التي عشقناها جميعاً ببطلها (رفعت إسماعيل) الساخر العجوز، والذى أظهر لنا د. (أحمد) عن طريقه مدى اعتزازه بعروبته، ومدى تدينه وإلتزامه وعبقريته أيضاً، بعد ذلك أخرج لنا د. (أحمد ) سلسلة (فانتازيا) الرائعة ببطلتها (عبير)، وهذه بينت لنا كم أن د. (أحمد خيالي يكره الواقع. تلتهما سلسلة (سافاري) ببطلها علاء عبد العظيم، وعرفنا من خلال تلك السلسلة المتميزة مدى حب أحمد لمهنته كطبيب، ومدى عشقه وولعه بها.",
        authorBooks: [
            {
                id: 8,
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1214056271i/3503947._SX50_.jpg",
                title: "يوتوبيا ",
                author: " أحمد خالد توفيق",
                authorID: 1,
                category: "Horror",
                categoryID: 1,
                avgrating: "3.91",
                rating: "4",
                status: "to-read"
            },
            {
                id: 9,
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349778839i/16076787._SY75_.jpg",
                title: "السنجة",
                author: " أحمد خالد توفيق",
                authorID: 1,
                category: "Horror",
                categoryID: 1,
                avgrating: "3.81",
                rating: "3 ",
                status: "to-read"
            },
            {
                id: 7,
                cover: "https://images.gr-assets.com/books/1359823945s/6004909.jpg",
                title: "حلقة الرعب",
                author: "احمد خالد توفيق",
                authorID: 1,
                category: "Horror",
                categoryID: 1,
                avgrating: "3.25",
                rating: "3",
            }
        ]
       
    },
    {
        id: 2,
        name: 'Helen Oyeyemi',
        Born: "June 10, 1962 ",
        Website: "http://aktowfik.blogspot.com/",
        Genre: "Fantasy, Horror, Science Fiction",
        cover: "https://images.gr-assets.com/authors/1483988647p5/4579328.jpg",
        bio: "Helen Oyeyemi is the New York Times best-selling, Newbery-medal-winning author of six young adult novels and four picture books. Matt received his MFA in creative writing from San Diego State University and his BA from the University of the Pacific, where he attended school on a full athletic scholarship for basketball. de la Peña currently lives in Brooklyn, NY. He teaches creative writing and visits high schools and colleges throughout the country.",
        authorBooks: [
            {
                id: 1,
                title: 'Gingerbread',
                author: 'Helen Oyeyemi',
                authorID: 2,
                category: "Fantasy",
                categoryID: 2,
                cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
                avgrating: "4.54",
                rating: "5"
            },
            {
                id: 2,
                title: 'The Once and Future King ',
                author: 'Helen Oyeyemi',
                authorID: 2,
                category: "Fantasy",
                categoryID: 2,
                cover: "https://images.gr-assets.com/books/1338741283l/43545.jpg",
                avgrating: "4.54",
                rating: "5",
            },
            {
                id: 3,
                title: 'The Bird King',
                author: 'Helen Oyeyemi',
                authorID: 2,
                category: "Fantasy",
                categoryID: 2,
                avgrating: "4.54",
                rating: "5",
                cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg",
            },


        ]
    },
    {
        id: 3,
        name: 'Matt de la Pena',
        Born: "June 10, 1962 ",
        Website: "http://aktowfik.blogspot.com/",
        Genre: "Fantasy, Horror, Science Fiction",
        cover: "https://images.gr-assets.com/authors/1383138905p5/204966.jpg",
        bio: "Matt de la Pena is the New York Times best-selling, Newbery-medal-winning author of six young adult novels and four picture books. Matt received his MFA in creative writing from San Diego State University and his BA from the University of the Pacific, where he attended school on a full athletic scholarship for basketball. de la Peña currently lives in Brooklyn, NY. He teaches creative writing and visits high schools and colleges throughout the country.",
        authorBooks: [
            {
                id: 4,
                title: 'Superman: Dawnbreaker',
                author: 'Matt de la Pena ',
                cover: 'https://images.gr-assets.com/books/1529962084l/29749094.jpg',
                authorID: 3,
                category: "Science Fiction",
                categoryID: 3,
                avgrating: "4.54",
                rating: "5",
            },
            {
                id: 5,
                title: 'Poison Study',
                author: 'Matt de la Pena',
                cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
                authorID: 3,
                category: "Science Fiction",
                categoryID: 3,
                avgrating: "4.54",
                rating: "5",
            },
            {
                id: 6,
                title: "Sharp Objects",
                author: 'Matt de la Pena',
                cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
                authorID: 3,
                category: "Science Fiction",
                categoryID: 3,
                avgrating: "4.54",
                rating: "5",
            },


        ]
    }
]

export const books = [
    {
        id: 1,
        title: 'Gingerbread',
        author: 'Helen Oyeyemi',
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
        avgrating: "4.54",
        rating: "5",
        description: "Influenced by the mysterious place gingerbread holds in classic children's stories--equal parts wholesome and uncanny, from the tantalizing witch's house in 'Hansel and Gretel' to the man-shaped confection who one day decides to run as fast as he can--beloved novelist Helen Oyeyemi invites readers into a delightful tale of a surprising family legacy, in which the inheritance is a recipe."
    },
    {
        id: 2,
        title: 'The Once and Future King ',
        author: 'Helen Oyeyemi',
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
        avgrating: "4.54",
        rating: "5",
        description: "Influenced by the mysterious place gingerbread holds in classic children's stories--equal parts wholesome and uncanny, from the tantalizing witch's house in 'Hansel and Gretel' to the man-shaped confection who one day decides to run as fast as he can--beloved novelist Helen Oyeyemi invites readers into a delightful tale of a surprising family legacy, in which the inheritance is a recipe."

    },
    {
        id: 3,
        title: 'The Bird King',
        author: 'Helen Oyeyemi',
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        avgrating: "4.54",
        rating: "5",
        cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg",
        description: "New from the award-winning author of Alif the Unseen and writer of the Ms. Marvel series, G. Willow Wilson Set in 1491 during the reign of the last sultanate in the Iberian peninsula, The Bird King is the story of Fatima, the only remaining Circassian concubine to the sultan, and her dearest friend Hassan, the palace mapmaker. Hassan has a secret--he can draw maps of places he's never seen and bend the shape of reality. When representatives of the newly formed Spanish monarchy arrive to negotiate the sultan's surrender, Fatima befriends one of the women, not realizing that she will see Hassan's gift as sorcery and a threat to Christian Spanish rule. With their freedoms at stake, what will Fatima risk to save Hassan and escape the palace walls?"
    },

    {
        id: 4,
        title: 'Superman: Dawnbreaker',
        author: 'Matt de la Pena ',
        cover: 'https://images.gr-assets.com/books/1529962084l/29749094.jpg',
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5",
        description: "Influenced by the mysterious place gingerbread holds in classic children's stories--equal parts wholesome and uncanny, from the tantalizing witch's house in 'Hansel and Gretel' to the man-shaped confection who one day decides to run as fast as he can--beloved novelist Helen Oyeyemi invites readers into a delightful tale of a surprising family legacy, in which the inheritance is a recipe."

    },
    {
        id: 5,
        title: 'Poison Study',
        author: 'Matt de la Pena',
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5",
        description: "Clark Kent has always been faster, stronger--better--than everyone around him. But he wasn't raised to show off, and drawing attention to himself could be dangerous. Plus, it's not like he's earned his powers . . . yet. But power comes with a price. Lately it's difficult to hold back and keep his heroics in the shadows. When Clark follows the sound of a girl crying, he comes across Gloria Alvarez and discovers a dark secret lurking in Smallville. Turns out, Clark's not the only one hiding something. Teaming up with his best friend, Lana Lang, he throws himself into the pursuit of the truth. What evil lies below the surface of his small town? And what will it cost Clark to learn about his past as he steps into the light to become the future Man of Steel? Because before he can save the world, he must save Smallville"
    },
    {
        id: 6,
        title: "Sharp Objects",
        author: 'Matt de la Pena',
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5",
        description: "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
        reviews: [
            {
                name: "RandomAnthony",
                cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
                rate: "4",
                review: "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
            },
            {
                name: "Emily May",
                cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
                rate: "4",
                review: "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
            }
        ]
    },
    {
        id: 7,
        cover: "https://images.gr-assets.com/books/1359823945s/6004909.jpg",
        title: "حلقة الرعب",
        author: "احمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.25",
        rating: "3",
        description: ""
    },
    {
        id: 8,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1214056271i/3503947._SX50_.jpg",
        title: "يوتوبيا ",
        author: " أحمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.91",
        rating: "4",
        status: "to-read"
    },
    {
        id: 9,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349778839i/16076787._SY75_.jpg",
        title: "السنجة",
        author: " أحمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.81",
        rating: "3 ",
        status: "to-read"
    },
]

export const AllBooks = [
    {
        id: 1,
        cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
        title: "Harry Potter and the Sorcerer's Stone ",
        author: "Rowling, J.K.*",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4.6",
        rating: "5 ",
        status: "to-read"
    },
    {
        id: 2,
        cover: "https://images.gr-assets.com/books/1433182986s/25644601.jpg",
        title: "Fifty Shades ",
        author: "James, E.L.*",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "3.76",
        rating: "3 ",
        status: "to-read"
    },
    {
        id: 3,
        cover: "https://images.gr-assets.com/books/1507662994s/32024902.jpg",
        title: "Darker ",
        author: "James, E.L.*",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4.11",
        rating: "3",
        status: "read"
    },
    {
        id: 4,
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
        title: "The Hate U Give",
        author: "Thomas, Angie *",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4",
        rating: "4 ",
        status: "currently-reading"
    },
    {
        id: 5,
        cover: "https://images.gr-assets.com/books/1388519019s/60510.jpg",
        title: "Poison Study",
        author: "Snyder, Maria V. *",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "3.54",
        rating: "3",
        "status": "currently-reading"
    },
    {
        id: 6,
        cover: "https://images.gr-assets.com/books/1328559506s/13335037.jpg",
        title: "Divergent",
        author: "Roth, Veronica ",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "5",
        rating: "5",
        "status": "currently-reading"
    },

    {
        id: 8,
        cover: "https://images.gr-assets.com/books/1545930757s/43373530.jpg",
        title: "قبر من الملح",
        author: "امل العلي",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "2.54",
        rating: "2",
        status: "read"
    },
    {
        id: 9,
        cover: "https://images.gr-assets.com/books/1400091510s/22087871.jpg",
        title: "المعذبون في الأرض",
        author: "طه حسين",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4.54",
        rating: "5",
        status: "to-read"
    },
    {
        id: 10,
        cover: "https://images.gr-assets.com/books/1492239430s/19486412.jpg",
        title: " by Big Little Lies",
        author: "Moriarty, Liane *",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4.54",
        rating: "4 ",
        status: "to-read",
        description: "Big Little Lies follows three women, each at a crossroads:Madeline is a force to be reckoned with. She’s funny and biting, passionate, she remembers everything and forgives no one. Her ex-husband and his yogi new wife have moved into her beloved beachside community, and their daughter is in the same kindergarten class as Madeline’s youngest (how is this possible?). And to top it all off, Madeline’s teenage daughter seems to be choosing Madeline’s ex-husband over her. (How. Is. This. Possible?)."
    },
    {
        id: 11,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
        title: "Sharp Objects",
        author: "by Gillian Flynn",
        authorID: 1,
        category: "Fantasy",
        categoryID: 1,
        avgrating: "4.54",
        rating: "5",
        description: "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
        reviews: [
            {
                name: "RandomAnthony",
                cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
                rate: "4",
                review: "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
            },
            {
                name: "Emily May",
                cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
                rate: "4",
                review: "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
            }
        ]
    }
]

export const users = [
    { firstname: 'Sarah', lastname: 'Refaat', password: '12345', admin: true, id: 1 }
    ,
    { firstname: 'Mohammad', lastname: 'Refaat', password: '1234', admin: false, id: 2 },
]