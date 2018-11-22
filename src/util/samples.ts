export const queryGql = {
  query: `query getUser($name: String){
    user(name: $name) {
      id
      firstName
      lastName
    }
  }`,
  variables: {
    name: 'Clara',
  },
};

export const mutationGql = {
  query: `mutation AddUser($name: String){
    addUser(name: $name) {
      name
    }
  }`,
  variables: {
    name: 'Clara',
  },
};

export const queryOperation = {
  key: '2',
  operationName: 'query',
  options: {},
  ...queryGql,
};

export const mutationOperation = {
  key: JSON.stringify(mutationGql),
  operationName: 'mutation',
  options: {},
  ...mutationGql,
};

export const queryResponse = {
  operation: {
    key: queryOperation.key,
    operationName: 'query',
  },
  data: {
    user: {
      name: 'Clive',
    },
  },
};

export const mutationResponse = {
  operation: {
    key: queryOperation.key,
    operationName: 'mutation',
  },
  data: {},
};