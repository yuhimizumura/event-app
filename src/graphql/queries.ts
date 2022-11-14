/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sei
      email
      gender
      age
      tel
      sns
      sns_name
      pref
      profile
      category
      image_type
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sei
        email
        gender
        age
        tel
        sns
        sns_name
        pref
        profile
        category
        image_type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventMaster = /* GraphQL */ `
  query GetEventMaster($id: ID!) {
    getEventMaster(id: $id) {
      id
      dateTime
      name
      members
      venue
      rule
      detail
      owner
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listEventMasters = /* GraphQL */ `
  query ListEventMasters(
    $filter: ModelEventMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateTime
        name
        members
        venue
        rule
        detail
        owner
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        event_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
