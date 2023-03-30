const foods = {
    // TORONTO
    yummykorean: {
        images: [
            "https://i.ibb.co/jfyN4Xd/thumbnail-IMG-0529.jpg", 
            "https://i.ibb.co/6v1fkWL/thumbnail-IMG-0525.jpg"
        ],
        name: "Yummy Korean Food Restaurant",
        address: "710 Bloor St W",
        latlng: [43.66410542660267, -79.4178902305882],
        rating: 4.5,
        city: 1
    },
    robotboil: {
        images: [
            "https://i.ibb.co/D8ZHDW1/B25-B6-DF6-2095-4-FDA-A617-FD9-E62-FD69-C0.jpg",
            "https://i.ibb.co/th3fD5Y/IMG-6108.jpg",
            "https://i.ibb.co/GWZ6nBv/32-C799-FB-85-DC-40-DD-BA11-1-E589-E5-CD6-B3.jpg"
        ],
        name: "Robot Boil House",
        address: "895 Yonge St",
        latlng: [43.6748996557624, -79.38836093058791],
        rating: 4,
        city: 1
    },
    ramenisshin: {
        images: [
            "https://i.ibb.co/PczVmzS/4569-CBAE-0852-42-E4-9010-8-F195-F871384.jpg",
            "https://i.ibb.co/m8XFZXr/7-D4-A8-CFA-1-DC1-46-CC-8814-427-C7386-E5-FD.jpg"
        ],
        name: "Ramen Isshin",
        address: "609 Queen St W",
        latlng: [43.648338242684744, -79.40208321621364],
        rating: 3,
        city: 1
    },
    ramensansotei: {
        images: [
            "https://i.ibb.co/gdVv23x/IMG-4308.jpg",
            "https://i.ibb.co/VM7bNKc/IMG-4310.jpg"
        ],
        name: "Sansotei Ramen",
        address: "30 Adelaide St E",
        latlng: [43.65099573797868, -79.37722460545123],
        rating: 4.5,
        city: 1
    },
    sichuanrestaurant: {
        images: [
            "https://i.ibb.co/Rg7VWb1/IMG-0262.jpg",
            "https://i.ibb.co/m9s2c0c/IMG-0265.jpg",
            "https://i.ibb.co/4TRrpFg/IMG-0270.jpg"
        ],
        name: "A Sichuan Restaurant",
        address: "440 Spadina Ave",
        latlng: [43.657093360050666, -79.4001616864105],
        rating: 4,
        city: 1
    },
    pai: {
        images: [
            "https://i.ibb.co/WyjpX5Y/CD611-DFA-5-D72-46-ED-A976-3-E2-AB2-D3-F77-F.jpg",
            "https://i.ibb.co/n7fcGfC/CEBEEB49-6391-434-A-A935-D8046354758-A.jpg"
        ],
        name: "PAI Uptown",
        address: "2335 Yonge St",
        latlng: [43.70880614326854, -79.3984677287381],
        rating: 4,
        city: 1
    },
    freetimescafe: {
        images: [
            "https://i.ibb.co/N2HR7q3/03919129-881-A-4333-B3-CE-C139-B759290-C.jpg",
            "https://i.ibb.co/ZzDCpt4/IMG-0455.jpg",
            "https://i.ibb.co/sbhZzGZ/IMG-0457.jpg"
        ],
        name: "Free Times Cafe",
        address: "320 College St",
        latlng: [43.6577954100431, -79.40244408641043],
        rating: 3.5,
        city: 1
    },
    johnnyg: {
        images: [
            "https://i.ibb.co/pLWL5Zn/IMG-5661.jpg",
            "https://i.ibb.co/hm21fg2/IMG-5659.jpg",
            "https://i.ibb.co/ZWXgB4H/IMG-5660.jpg"
        ],
        name: "Johnny G's Cafe",
        address: "478 Parliament St",
        latlng: [43.6646782414198, -79.36805131154763],
        rating: 3,
        city: 1
    },
    mabu: {
        images: [
            "https://i.ibb.co/JpbpY6n/08-C0-AAA2-A4-ED-42-B1-882-C-B8983-E430-BAB.jpg",
            "https://i.ibb.co/yBPTp1k/CC7-FD9-CB-4951-4-A6-A-9608-D1827-F3-B70-FB.jpg",
            "https://i.ibb.co/6b13cHg/C29-B319-F-9323-4-C45-B87-B-F88-DAD260319.jpg"
        ],
        name: "Mabu Generation",
        address: "578 Yonge St",
        latlng: [43.66530484540348, -79.384801926838],
        rating: 4,
        city: 1
    },
    grandmalovesyou: {
        images: [
            "https://i.ibb.co/sgcXPJd/IMG-4074.jpg",
            "https://i.ibb.co/B4fNtFL/IMG-4076.jpg"
        ],
        name: "Gradma Loves You",
        address: "1084 Yonge St",
        latlng: [43.677947137154206, -79.39016569417412],
        rating: 3.5,
        city: 1
    },
    membersonly: {
        images: [
            "https://i.ibb.co/d5VmgvW/IMG-4136.jpg",
            "https://i.ibb.co/6YgqrtL/IMG-4139.jpg",
            "https://i.ibb.co/C8f5Lpg/IMG-4146.jpg"
        ],
        name: "Members Only Waffle House",
        address: "252 Queen St W",
        latlng: [43.65014390960234, -79.39143031709534],
        rating: 3.5,
        city: 1
    },
    shanghaikorean: {
        images: [
            "https://i.ibb.co/0YcV64r/FCCAB4-A8-3871-4-BFA-A076-8-EAD3-E2-AFA64.jpg",
            "https://i.ibb.co/wcjj52B/68-CD09-A6-C19-B-4-F8-C-B7-F2-251-C8-D0-CBD0-F.jpg"
        ],
        name: "Shanghai Korean Chinese Restaurant",
        address: "5451 Yonge St, North York",
        latlng: [43.77751515027922, -79.41467627291445],
        rating: 3.5,
        city: 1
    },
    //
    // cafeprincess: {
    //     images: [

    //     ],
    //     name: "Café Princess",
    //     address: "5590 Yonge St",
    //     latlng: [43.779538383219446, -79.41587315942118],
    //     rating: 2.5
    // },
    // browndonkatsu: {
    //     images: [

    //     ],
    //     name: "Brown Donkatsu",
    //     address: "6024 Yonge St",
    //     latlng: [43.78959956924908, -79.41802542503804],
    //     rating: 4.5
    // },
    // yogo: {
    //     images: [

    //     ],
    //     name: "YOGO Yogurt",
    //     address: "385 Spadina Ave",
    //     latlng: [43.65652506144644, -79.39891842873931],
    //     rating: 3.5
    // },
    // kokumi: {
    //     images: [

    //     ],
    //     name: "Kokumi Mini Hot Pot",
    //     address: "407 Spadina Ave",
    //     latlng: [43.65702960349416, -79.39928320914927],
    //     rating: 3.5
    // },


    // WATERLOO
    uki: {
        images: [
            "https://i.ibb.co/FsY2Cvm/IMG-1085.jpg",
            "https://i.ibb.co/qWywwvk/IMG-1088.jpg"
        ],
        name: "UKI Restaurant",
        address: "51 King St N",
        latlng: [43.466642386202004, -80.52299109990797],
        rating: 4,
        city: 2
    },
    pursimple: {
        images: [
            "https://i.ibb.co/pZmZyDt/IMG-1933.jpg",
            "https://i.ibb.co/3WdwLrM/IMG-2050.jpg"
        ],
        name: "Pür & Simple",
        address: "2 King St N",
        latlng: [43.46552571662715, -80.52219657292154],
        rating: 4,
        city: 2
    },
    //
    // rosecafe: {
    //     images: [

    //     ],
    //     name: "Rose Cafe",
    //     latlng: [43.44858196027331, -80.48620925942868],
    //     address: "185 King St E",
    //     rating: 3.5
    // }
}

export default foods