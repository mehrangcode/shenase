export const fakeData = {
    title: "Page 1",
    lead: "lead",
    children: [
        {
            id: "id1",
            type: "div",
            className: "row",
            style: {
                // color: "orange"
            },
            children: [
                {
                    id: "id2",
                    type: "contentBox",
                    className: "col-3",
                    style: {
                        border: "1px solid #777"
                    },
                    content: "Hi Im Mehran"
                },
                {
                    id: "id27482",
                    type: "contentBox",
                    className: "col-3",
                    style: {
                        border: "1px solid #777"
                    },
                    content: "Hi Im Col"
                },
                {
                    id: "id2658",
                    type: "contentBox",
                    className: "col-3",
                    style: {
                        border: "1px solid #777"
                    },
                    content: "Hi Im Ganjgahi"
                },
                {
                    id: "id3",
                    type: "div",
                    className: "col-3",
                    style: {
                        border: "1px solid #777"
                    },
                    children: [
                        {
                            id: "id4",
                            type: "div",
                            className: "row",
                            style: null,
                            children: [
                                {
                                    id: "1d54",
                                    type: "contentBox",
                                    className: "col-6",
                                    style: null,
                                    content: "COL - 6"
                                },
                                {
                                    id: "id5",
                                    type: "contentBox",
                                    className: "col-6",
                                    style: {
                                        backgroundColor: "white",
                                        color: "red"
                                    },
                                    content: "COL - 6"
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
}

export const CVTemplate = {
    initialData: {
        theme: {
            name: "Theme 01",
            style: {
                backgroundColor: "royalblue",
                color: "black"
            }
        },
        personalInfo: {
            name: "Mehan Ganjgahi",
            contact: {
                email: "mehran@mail.com",
                phone: "902-758-40-46",
                website: "",
                address: "",

            },
            aboutMe: "About Me",
            skills: [
                { id: "1", title: "CSS", rate: 5 },
                { id: "1", title: "JS", rate: 5 },
                { id: "1", title: "ReactJs", rate: 5 },
                { id: "1", title: "PHP", rate: 3 },
            ],
            education: [],
            experience: [
                {
                    from: "2018-02-02",
                    to: "2020-02-02",
                    company: "Barin",
                    post: "Developer",
                    description: "Description for experience"
                }
            ]
        }

    },
    children: [
        {
            placeHolder: "Add Item", tooltip: "Row",
            id: "el01",
            type: "div",
            style: null,
            className: "row",
            children: [
                {placeHolder: "Add Item", tooltip: "Col", id: "el02", type: "div", style: null, className:"col-4", children:[
                    {placeHolder: "Add Item", tooltip: "contentBox", id: "el03", 
                    type:"contentBox", 
                    style: null, 
                    className: "contentBox", 
                    content: "Name : ", 
                    contentName: "name"}
                ]},
                {placeHolder: "Add Item", tooltip: "Col", id: "el03", type: "div", style: null, className:"col-8", children:[
                    {
                        placeHolder: "Add Item", tooltip: "Profile", id: "profile",
                        type: "contentBox", className: "mb-2",
                        style: null, content: "Profile:"
                    },
                    {placeHolder: "Add Item", tooltip: "contentBox", id: "el03", 
                    type:"contentBox", 
                    style: null, 
                    className: "contentBox",
                    contentName: "aboutMe"},
                    {
                        placeHolder: "Add Item", tooltip: "Title", id: "skillTitle",
                        type: "contentBox", className: "mv-2",
                        style: {color: "red", fontWeight: "bold"}, content: "Skills:"
                    },
                    {
                        placeHolder: "Add Item", tooltip: "Skills", id: "skill",
                        type: "skills", className: "row",
                        style: null,
                        cols: 3,
                    }

                ]}
            ]
        }
    ]
}

export const Blank = {
    title: "Title",
    children: [
        {
            id: "id001",
            placeHolder: "Add Item", tooltip: "Row",
            type: "row",
            className: "row",
            style: null,
            cols: 2,
            children: [
                {
                    id: "id002345po",
                    placeHolder: "Add Item", tooltip: "Row IN Row",
                    type: "row",
                    className: "row col-6",

                    children: [
                        {
                            id: "id00234567",
                            placeHolder: "Add Item", tooltip: "Col",
                            type: "col",
                            className: "col-6 mb-2",
                            style: null,
                            content: "COL In Row"
                        },
                    ]
                },
                {
                    id: "id002",
                    placeHolder: "Add Item", tooltip: "Col",
                    type: "col",
                    className: "col-6 mb-2",
                    style: null,
                    content: "COL 01"
                },
                {
                    id: "id002365",
                    placeHolder: "Add Item", tooltip: "Col",
                    type: "col",
                    className: "col-6",
                    style: null,
                    content: "COL 02"
                },
                {
                    id: "id003",
                    placeHolder: "Add Item", tooltip: "Col",
                    type: "col",
                    className: "col-6",
                    style: null,
                   
                    children: [
                        {
                            id: "id004",
                            placeHolder: "Add Item", tooltip: "contentBox",
                            type: "contentBox",
                            className: "col-6",
                            style: null,
                            content: "contentBox 03"
                        },
                        {
                            id: "id005",
                            placeHolder: "Add Item", tooltip: "contentBox",
                            type: "contentBox",
                            className: "col-6",
                            style: null,
                            content: "contentBox"
                        },
                    ]
                },
            ]
        },
    ]
}