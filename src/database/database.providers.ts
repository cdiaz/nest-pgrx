import * as pgrx from 'pg-reactive';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      const dbConnection = new pgrx('postgres://postgres@localhost/test');
      return dbConnection;
    },
  },
];
