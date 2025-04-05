export interface User {
    email: string;
    password: string; // Hashed password
  }
  
  export const fakeUsers: User[] = [
    {
      email: "test@example.com",
      password: "$2a$10$5OqIZSRQF2.dC6yUpuTq0u8BYOaBaE9Ome2U94toJ7aNnR6y5PhkW", // "password123"
    },
  ];
  