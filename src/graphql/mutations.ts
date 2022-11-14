/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEventMaster = /* GraphQL */ `
  mutation CreateEventMaster(
    $input: CreateEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    createEventMaster(input: $input, condition: $condition) {
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
export const updateEventMaster = /* GraphQL */ `
  mutation UpdateEventMaster(
    $input: UpdateEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    updateEventMaster(input: $input, condition: $condition) {
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
export const deleteEventMaster = /* GraphQL */ `
  mutation DeleteEventMaster(
    $input: DeleteEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    deleteEventMaster(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
