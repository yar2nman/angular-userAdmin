export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];
export const Users = [
  {
    id: 1,
    username: 'testuser',
    role: 'Admin',
    formation: 'formation?'
  },
  {
    id: 2,
    username: 'userA',
    role: 'User',
    formation: 'formation?'
  },
  {
    id: 3,
    username: 'userB',
    role: 'Admin',
    formation: 'formation?'
  },
  {
    id: 4,
    username: 'userC',
    role: 'User',
    formation: 'formation?'
  },
];

export interface RegisterModel {
  username: string;
  email: string;
  password1: string;
  password2: string;
}
export interface AddUserModel extends RegisterModel   {
  role: string;
  formation: string;
}

export interface SignIn {
  username: string;
  password: string;
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/