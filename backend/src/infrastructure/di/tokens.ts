export const TOKENS = {
  User: {
    Controller: Symbol("UserController"),
    RegisterUseCase: Symbol("RegisterUserUseCase"),
  },
  Services: {
    Security: {
      HashService: Symbol("HashService"),
    },
  },
  Database: {
    Prisma: Symbol("Prisma"),
    UserRepository: Symbol("UserRepository"),
  },
};
