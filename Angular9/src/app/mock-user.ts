import {User} from './user';
export const USERS:User[]=[
    {
        id:1,
        name:'Văn A',
        age:22,
        skills:[
            {
                idSkill:1,
                nameSkill:'Tiếng Anh'
            },
            {
                idSkill:2,
                nameSkill:'Tiếng Trung'
            }
        ]
    },
    {
        id:2,
        name:'Văn B',
        age:22,
        skills:[
            {
                idSkill:3,
                nameSkill:'Tiếng Pháp'
            },
            {
                idSkill:4,
                nameSkill:'Tiếng Nhật'
            }
        ]
    }
];