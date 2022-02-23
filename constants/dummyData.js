const colleges = [
    {
        name: 'UIET, CSJMU',
        id: '1',
        teachers: [
            {
                id: '1',
                name: 'shesh mani',
                course: ['sb'],
            },
            {
                id: '2',
                name: 'alok kumar',
                course: ['ML'],
            },
            {
                id: '3',
                name: 'deepak verma',
                course: ['dbms'],
            },
        ],
        courses: [
            {
                id: '1',
                name: 'cse',
                duration: '4',
                fees: '85000',
                images: [], // images link
                comments: 'no comments'
            }
        ]
    },
    {
        name: 'BIET, Jhansi',
        id: '2',
        teachers: [
            {
                id: '1',
                name: 'kirti mishra',
                course: ['sb'],
            },
            {
                id: '2',
                name: 'alok kumar biet',
                course: ['ML'],
            },
            {
                id: '3',
                name: 'deepak verma biet',
                course: ['dbms'],
            },
        ],
        courses: [
            {
                id: '1',
                name: 'cse biet',
                duration: '4',
                fees: '95000',
                images: [], // images link
                comments: 'no comments'
            }
        ]
    }
]

const documentOf = [
    {
        id: '1',
        value: 'Mid Sem',
    },
    {
        id: '2',
        value: 'End Sem',
    },
    {
        id: '3',
        value: 'Quiz 1',
    },
    {
        id: '4',
        value: 'Quiz 2',
    },
    {
        id: '5',
        value: 'notes'
    }
]

const document = [
    {
        id: '1',
        title: 'CSE-206 Mid',
        year: '2018',
        sem: '5',
        teacher: 'Random',
        college: 'CSJM University',
        link: 'somethink here',
        rating: '4.5',
        comments: 'no comments',
        uploadedById: '2',
        uploadedByName: 'random guy',
    },
    {
        id: '2',
        title: 'CSE-207 Mid',
        year: '2018',
        sem: '5',
        teacher: 'Random',
        college: 'CSJM University',
        link: 'somethink here',
        rating: '4.5',
        comments: 'no comments',
        uploadedById: '2',
        uploadedByName: 'random guy',
    },
    {
        id: '3',
        title: 'CSE-208 Mid',
        year: '2018',
        sem: '5',
        teacher: 'Random',
        college: 'CSJM University',
        link: 'somethink here',
        rating: '4.5',
        comments: 'no comments',
        uploadedById: '2',
        uploadedByName: 'random guy',
    },
    {
        id: '4',
        title: 'CSE-204 Mid',
        year: '2018',
        sem: '5',
        teacher: 'Random',
        college: 'CSJM University',
        link: 'somethink here',
        rating: '4.5',
        comments: 'no comments',
        uploadedById: '2',
        uploadedByName: 'random guy',
    },
    {
        id: '5',
        title: 'CSE-202 Mid',
        year: '2018',
        sem: '5',
        teacher: 'Random',
        college: 'CSJM University',
        link: 'somethink here',
        rating: '4.5',
        comments: 'no comments',
        uploadedById: '2',
        uploadedByName: 'random guy',
    },
]

const admin = {
    name: 'Shivesh Tiwari',
    id: '1',
    college: 'CSJM University',
    uploads: [], // document id
    hasPermission: true // true or false
}

const recentUploads = [
    {
        id: '1',
        title: 'first',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '2',
        title: 'second',
        uploadedById: '052',
        uploadedByName: 'shivesh tiwari',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '3',
        title: 'third',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '4',
        title: 'fourth',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '1',
        title: 'first',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '2',
        title: 'second',
        uploadedById: '052',
        uploadedByName: 'shivesh tiwari',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '3',
        title: 'third',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '4',
        title: 'fourth',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '1',
        title: 'first',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '2',
        title: 'second',
        uploadedById: '052',
        uploadedByName: 'shivesh tiwari',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '3',
        title: 'third',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
    {
        id: '4',
        title: 'fourth',
        uploadedById: '055',
        uploadedByName: 'shreya sonkar',
        course: 'btech',
        // courseId: '1',
        college: 'csjmu',
        // collegeId: '',
    },
]

/* 
    college id -> 
        PAR
        CLG -> denotes teacher
        001 -> count, kaun se number pe hai ye
*/
const collegeDropdown = [
    { label: 'UIET, CSJMU', value: 'PARCLG001'},
    { label: 'BIET Jhansi', value: 'PARCLG002' }
]

const departmentDropdown = [
    { label: 'CSE', value: 'cse'},
    { label: 'ECE', value: 'ece' },
    { label: 'BCA', value: 'bca' },
    { label: 'B. Pharma', value: 'pharam' },
    { label: 'MEE', value: 'mee' },
    { label: 'MSME', value: 'msme' },
    { label: 'MCA', value: 'mca' },
    { label: 'AI', value: 'ai' },
]

/* 
    teacher id -> 
        PAR
        T -> denotes teacher
        ID -> upload krne waale ki id
        001 -> count, kaun se number pe hai ye
*/
const teacherDropdown = [
    {label: 'Alok Kumar', value: 'PARTID001'},
    {label: 'Sheshmani Tiwari', value: 'PARTID002'},
    {label: 'Deepak Verma', value: 'PARTID003'},
    {label: 'Preeti Mam', value: 'PARTID004'},
    {label: 'Mohd Shah Alam', value: 'PARTID005'},
    {label: 'RN Katiyar', value: 'PARTID006'},
    {label: 'Shisuhpal Sir', value: 'PARTID007'},
    {label: 'Dhirendra Singh', value: 'PARTID008'},
]


/*
subject id->
    par
    s: denotes subject
    collegeID
    subject id
*/
const subjectDropdown = [
    {label: 'MTH-S504 Probability & Statistics', value: 'PARSPARCLG001MTHS504' },
    {label: 'CSE-S504 Computer ka kuch', value: 'PARSPARCLG001CSES504' },
    {label: 'ECE-S504 ECE ka kuch', value: 'PARSPARCLG001ECES504' },
    {label: 'MEE-S504 MEE ka kuch', value: 'PARSPARCLG001MEES504' },
]

//

const documentFor = [
    {label: 'Mid Sem', value: 'mid'},
    {label: 'End Sem', value: 'end'},
    {label: 'Quiz 1', value: 'Quiz1'},
    {label: 'Quiz 2', value: 'Quiz2'},
]

const userProfile = {
    name: 'Shivesh Tiwari',
    college: 'UIET, CSJMU',
    department: 'CSE',
    batch: '2019',
    uploads: [
        {
            id: '1',
            title: 'CSE-206 Mid',
            year: '2018',
            sem: '5',
            teacher: 'Random',
            department: 'CSE',
            college: 'CSJM University',
            link: 'somethink here',
            rating: '4.5',
            comments: "I am trying to create a UI in react native, the UI contains a box with outer shadow. using the image I have done that, but is there any ... 4 answersTop answer: You will have to use different style props for iOS and Android. Android It",
        },
        {
            id: '2',
            title: 'CSE-207 Mid',
            year: '2018',
            sem: '5',
            department: 'ECE',
            teacher: 'Random',
            college: 'CSJM University',
            link: 'somethink here',
            rating: '4.5',
            comments: 'I am trying to create a UI in react native, the UI contains a box with outer shadow. using the image I have done that, but is there any ... 4 answersTop answer: ',
        },
        {
            id: '3',
            title: 'CSE-208 Mid',
            year: '2018',
            sem: '5',
            teacher: 'Random',
            college: 'CSJM University',
            link: 'somethink here',
            rating: '4.5',
            department: 'CSE',
            comments: 'I am trying to create a UI in react native, the UI contains a box with outer shadow. using the image I have done that, but is there any ... 4 answersTop answer: ',
        },
        {
            id: '4',
            title: 'CSE-204 Mid',
            year: '2018',
            sem: '5',
            teacher: 'Random',
            college: 'CSJM University',
            link: 'somethink here',
            rating: '4.5',
            department: 'CSE',
            comments: 'ave done that, but is there any ... 4 answersTop answer: ',
        },
        {
            id: '5',
            title: 'CSE-202 Mid',
            year: '2018',
            sem: '5',
            teacher: 'Random',
            college: 'CSJM University',
            link: 'somethink here',
            rating: '4.5',
            department: 'CSE',
            comments: 'e UI contains a box with outer shadow. using the image I have done that, but is there any ... 4 answersTop answer: ',
        },
    ]
}


export default { 
    colleges, 
    documentOf, 
    document, 
    admin, 
    recentUploads,
    userProfile,

    // dropdowns
    collegeDropdown,
    departmentDropdown,
    teacherDropdown,
    subjectDropdown,
    documentFor,
}