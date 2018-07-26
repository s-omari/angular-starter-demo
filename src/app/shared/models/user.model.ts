
// interface Iuser {
//   token: string;
//   user: {
//     id: number;
//     role_id: number;
//     name: string;
//     email: string
//     avatar: string;
//     settings: any;
//     created_at: number;
//     updated_at: number;
//     provider: any;
//     provider_id: any;
//   };
// }

export class Iuser {

    id?: any;
    role_id?: string;
    name: string;
    email: string;
    password?: string;
    avatar?: string;
    settings?: any;
    created_at?: number;
    updated_at?: number;
    provider?: string;
    provider_id?: any;
    token?: string;


 //   id: string;

//    photoUrl: string;
    firstName?: string;
    lastName?: string;
    authToken?: string;
    idToken?: string;
}



export class User implements Iuser {
  role_id: string;
  name: string;
  email: string;
  password?: string;

  constructor(name? , email? , role_id? , password?) {
      this.name = name ?  name :  null;
      this.email = email ?  email : null;
      this.role_id = role_id ?  role_id : null;
      this.password = password ?  password : null;
  }
}
