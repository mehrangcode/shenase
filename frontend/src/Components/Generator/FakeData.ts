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
            tooltip: "Row",
            id: "el01",
            type: "div",
            style: null,
            className: "row",
            children: [
                {tooltip: "Col", id: "el02", type: "div", style: null, className:"col-4", children:[
                    {tooltip: "contentBox", id: "el03", 
                    type:"contentBox", 
                    style: null, 
                    className: "contentBox", 
                    content: "Name : ", 
                    contentName: "name"}
                ]},
                {tooltip: "Col", id: "el03", type: "div", style: null, className:"col-8", children:[
                    {tooltip: "contentBox", id: "el03", 
                    type:"contentBox", 
                    style: null, 
                    className: "contentBox", 
                    content: "<p> Profile: </p>", 
                    contentName: "aboutMe"},
                    {
                        tooltip: "Skills", id: "skill",
                        type: "skills", className: "row",
                        style: null, content: "Skills:",
                        cols: 3,
                    }

                ]}
            ]
        }
    ]
}