/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEventMaster = /* GraphQL */ `
  subscription OnCreateEventMaster {
    onCreateEventMaster {
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
export const onUpdateEventMaster = /* GraphQL */ `
  subscription OnUpdateEventMaster {
    onUpdateEventMaster {
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
export const onDeleteEventMaster = /* GraphQL */ `
  subscription OnDeleteEventMaster {
    onDeleteEventMaster {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      user_id
      event_id
      createdAt
      updatedAt
    }
  }
`;
