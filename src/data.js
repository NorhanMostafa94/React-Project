export const categories = [
    {
        id: 1,
        name: 'Economics',
        books: [
            {
                id: 1,
                name: 'b1',
                author: 'a1'
            },
            {
                id: 2,
                name: 'b2',
                author: 'a2'
            },
            {
                id: 3,
                name: 'b3',
                author: 'a3'
            },
            {
                id: 4,
                name: 'b4',
                author: 'a4'
            }
        ]
    },
    {
        id: 2,
        name: 'Sport',
        books: [
            {
                id: 1,
                name: 'sports',
                author: 'a1'
            },
            {
                id: 2,
                name: 'b2',
                author: 'a2'
            },
            {
                id: 3,
                name: 'b3',
                author: 'a3'
            },
            {
                id: 4,
                name: 'b4',
                author: 'a4'
            }
        ]
    },
    {
        id: 3,
        name: 'Society'
    },
    {
        id: 4,
        name: 'Art'
    },
    {
        id: 5,
        name: 'Horror'
    },
    {
        id: 6,
        name: 'Panoramal'
    },
    {
        id: 7,
        name: 'Fantasy'
    },
    {
        id: 8,
        name: 'Romance'
    }
]

export const authors = [
    {
        id: 1,
        name: 'a1',
        cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
        bio:"dfghjkl;'rtyuiop[cvbjkldfghjklrtyuio"
    },
    {
        id: 2,
        name: 'a2'
    },
    {
        id: 3,
        name: 'a3'
    }
]

export const books = [
    {
        id: 1,
        title: 'Harry Potter and the Sorcerer Stone',
        author: 'Rowling, J.K.',
        cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
    },
    {
        id: 2,
        title: 'Fifty Shades',
        author: 'James, E.L.',
        cover: "https://images.gr-assets.com/books/1433182986s/25644601.jpg",
    },
    {
        id: 3,
        title: 'The Hate U Give',
        author: 'Thomas, Angie',
        cover: "https://images.gr-assets.com/books/1507662994s/32024902.jpg",
    },
    {
        id: 4,
        title: 'Poison Study',
        author: 'Snyder, Maria V.',
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
    },
    {
        id: 5,
        title: 'The Hate U Give',
        author: 'Thomas, Angie'
    },
    {
        id: 11,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
        title: "Sharp Objects",
        author: "by Gillian Flynn",
        category: "Fantasy",
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

export const AllBooks = [
    {
        id: 1,
        cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
        title: "Harry Potter and the Sorcerer's Stone ",
        author: "Rowling, J.K.*",
        avgrating: "4.6",
        rating: "5 ",
        status: "to-read"
    },
    {
        id: 2,
        cover: "https://images.gr-assets.com/books/1433182986s/25644601.jpg",
        title: "Fifty Shades ",
        author: "James, E.L.*",
        avgrating: "3.76",
        rating: "3 ",
        status: "to-read"
    },
    {
        id: 3,
        cover: "https://images.gr-assets.com/books/1507662994s/32024902.jpg",
        title: "Darker ",
        author: "James, E.L.*",
        avgrating: "4.11",
        rating: "3",
        status: "read"
    },
    {
        id: 4,
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
        title: "The Hate U Give",
        author: "Thomas, Angie *",
        avgrating: "4",
        rating: "4 ",
        status: "currently-reading"
    },
    {
        id: 5,
        cover: "https://images.gr-assets.com/books/1388519019s/60510.jpg",
        title: "Poison Study",
        author: "Snyder, Maria V. *",
        avgrating: "3.54",
        rating: "3",
        "status": "currently-reading"
    },
    {
        id: 6,
        cover: "https://images.gr-assets.com/books/1328559506s/13335037.jpg",
        title: "Divergent",
        author: "Roth, Veronica ",
        avgrating: "5",
        rating: "5",
        "status": "currently-reading"
    },
    {
        id: 7,
        cover: "https://images.gr-assets.com/books/1359823945s/6004909.jpg",
        title: "حلقة الرعب",
        author: "احمد خالد توفيق",
        avgrating: "3.25",
        rating: "3",
        status: "read"
    },
    {
        id: 8,
        cover: "https://images.gr-assets.com/books/1545930757s/43373530.jpg",
        title: "قبر من الملح",
        author: "امل العلي",
        avgrating: "2.54",
        rating: "2",
        status: "read"
    },
    {
        id: 9,
        cover: "https://images.gr-assets.com/books/1400091510s/22087871.jpg",
        title: "المعذبون في الأرض",
        author: "طه حسين",
        avgrating: "4.54",
        rating: "5",
        status: "to-read"
    },
    {
        id: 10,
        cover: "https://images.gr-assets.com/books/1492239430s/19486412.jpg",
        title: " by Big Little Lies",
        author: "Moriarty, Liane *",
        category: "Fantasy",
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
        category: "Fantasy",
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

export const users=[
    {firstname:'Sarah',lastname:'Refaat', password:'12345',admin : true,id:1}
    ,
     {firstname:'Mohammad',lastname:'Refaat', password:'1234',admin : false,id:2},
]