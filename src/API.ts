/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  sei?: string | null,
  email?: string | null,
  gender?: string | null,
  age?: string | null,
  tel?: string | null,
  sns?: string | null,
  sns_name?: string | null,
  pref?: string | null,
  profile?: string | null,
  category?: string | null,
  image_type?: string | null,
};

export type ModelUserConditionInput = {
  sei?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelStringInput | null,
  tel?: ModelStringInput | null,
  sns?: ModelStringInput | null,
  sns_name?: ModelStringInput | null,
  pref?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image_type?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  sei?: string | null,
  email?: string | null,
  gender?: string | null,
  age?: string | null,
  tel?: string | null,
  sns?: string | null,
  sns_name?: string | null,
  pref?: string | null,
  profile?: string | null,
  category?: string | null,
  image_type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  sei?: string | null,
  email?: string | null,
  gender?: string | null,
  age?: string | null,
  tel?: string | null,
  sns?: string | null,
  sns_name?: string | null,
  pref?: string | null,
  profile?: string | null,
  category?: string | null,
  image_type?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateEventMasterInput = {
  id?: string | null,
  dateTime?: string | null,
  name?: string | null,
  members?: string | null,
  venue?: string | null,
  rule?: string | null,
  detail?: string | null,
  owner?: string | null,
  isActive?: string | null,
};

export type ModelEventMasterConditionInput = {
  dateTime?: ModelStringInput | null,
  name?: ModelStringInput | null,
  members?: ModelStringInput | null,
  venue?: ModelStringInput | null,
  rule?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  isActive?: ModelStringInput | null,
  and?: Array< ModelEventMasterConditionInput | null > | null,
  or?: Array< ModelEventMasterConditionInput | null > | null,
  not?: ModelEventMasterConditionInput | null,
};

export type EventMaster = {
  __typename: "EventMaster",
  id?: string | null,
  dateTime?: string | null,
  name?: string | null,
  members?: string | null,
  venue?: string | null,
  rule?: string | null,
  detail?: string | null,
  owner?: string | null,
  isActive?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventMasterInput = {
  id: string,
  dateTime?: string | null,
  name?: string | null,
  members?: string | null,
  venue?: string | null,
  rule?: string | null,
  detail?: string | null,
  owner?: string | null,
  isActive?: string | null,
};

export type DeleteEventMasterInput = {
  id: string,
};

export type CreateEventInput = {
  id: string,
  user_id: string,
  event_id: string,
};

export type ModelEventConditionInput = {
  user_id?: ModelStringInput | null,
  event_id?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  user_id: string,
  event_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  user_id?: string | null,
  event_id?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  sei?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelStringInput | null,
  tel?: ModelStringInput | null,
  sns?: ModelStringInput | null,
  sns_name?: ModelStringInput | null,
  pref?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image_type?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type ModelEventMasterFilterInput = {
  id?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  name?: ModelStringInput | null,
  members?: ModelStringInput | null,
  venue?: ModelStringInput | null,
  rule?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  isActive?: ModelStringInput | null,
  and?: Array< ModelEventMasterFilterInput | null > | null,
  or?: Array< ModelEventMasterFilterInput | null > | null,
  not?: ModelEventMasterFilterInput | null,
};

export type ModelEventMasterConnection = {
  __typename: "ModelEventMasterConnection",
  items:  Array<EventMaster >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelStringInput | null,
  user_id?: ModelStringInput | null,
  event_id?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMasterMutationVariables = {
  input: CreateEventMasterInput,
  condition?: ModelEventMasterConditionInput | null,
};

export type CreateEventMasterMutation = {
  createEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMasterMutationVariables = {
  input: UpdateEventMasterInput,
  condition?: ModelEventMasterConditionInput | null,
};

export type UpdateEventMasterMutation = {
  updateEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMasterMutationVariables = {
  input: DeleteEventMasterInput,
  condition?: ModelEventMasterConditionInput | null,
};

export type DeleteEventMasterMutation = {
  deleteEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sei?: string | null,
      email?: string | null,
      gender?: string | null,
      age?: string | null,
      tel?: string | null,
      sns?: string | null,
      sns_name?: string | null,
      pref?: string | null,
      profile?: string | null,
      category?: string | null,
      image_type?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetEventMasterQueryVariables = {
  id: string,
};

export type GetEventMasterQuery = {
  getEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventMastersQueryVariables = {
  filter?: ModelEventMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventMastersQuery = {
  listEventMasters?:  {
    __typename: "ModelEventMasterConnection",
    items:  Array< {
      __typename: "EventMaster",
      id?: string | null,
      dateTime?: string | null,
      name?: string | null,
      members?: string | null,
      venue?: string | null,
      rule?: string | null,
      detail?: string | null,
      owner?: string | null,
      isActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      user_id: string,
      event_id: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type EventByUserIdQueryVariables = {
  user_id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventByUserIdQuery = {
  eventByUserId?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      user_id: string,
      event_id: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type EventByEventIdQueryVariables = {
  event_id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventByEventIdQuery = {
  eventByEventId?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      user_id: string,
      event_id: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    sei?: string | null,
    email?: string | null,
    gender?: string | null,
    age?: string | null,
    tel?: string | null,
    sns?: string | null,
    sns_name?: string | null,
    pref?: string | null,
    profile?: string | null,
    category?: string | null,
    image_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventMasterSubscription = {
  onCreateEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventMasterSubscription = {
  onUpdateEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventMasterSubscription = {
  onDeleteEventMaster?:  {
    __typename: "EventMaster",
    id?: string | null,
    dateTime?: string | null,
    name?: string | null,
    members?: string | null,
    venue?: string | null,
    rule?: string | null,
    detail?: string | null,
    owner?: string | null,
    isActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    user_id: string,
    event_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
