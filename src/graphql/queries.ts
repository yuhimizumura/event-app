/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const eventByUserId = /* GraphQL */ `
  query EventByUserId(
    $user_id: String
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventByUserId(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        event_id
      }
      nextToken
    }
  }
`;
export const eventByEventId = /* GraphQL */ `
  query EventByEventId(
    $event_id: String
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventByEventId(
      event_id: $event_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
