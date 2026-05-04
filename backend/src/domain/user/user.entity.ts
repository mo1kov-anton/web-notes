export class User {
  constructor(
    private readonly _username: string,
    private readonly _email: string,
    private readonly _passwordHash: string,
    private readonly _id?: string,
    private readonly _createdAt?: Date,
    private readonly _updatedAt?: Date,
  ) {}

  static create(username: string, email: string, passwordHash: string) {
    return new User(username, email, passwordHash);
  }

  static restore(
    username: string,
    email: string,
    passwordHash: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    return new User(username, email, passwordHash, id, createdAt, updatedAt);
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get passwordHash() {
    return this._passwordHash;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
