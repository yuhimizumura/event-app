export type stateType = {
  all:allStateType,
  currentUser:currentStateType,
  businessMemoWrite:businessMemoWriteType,
  detail:detailType,
  doctor:object,
  isFilter:isFilterType,
  isModalPatient:isModalPatientType,
  isAnimated:isAnimated
  layout:layoutType,
  memo:memoType,
  memoWrite:memoWriteType,
  navbar:navbarType,
  receptionsState:receptionsStoreType,
  receptionsAnimated:receptionsAnimatedType,
  receptionsIsFilter:object,
  timeLine:timeLineType,
  userDetail:userDetailType,
  userIdsDetail:userIdsDetailType
  newDate:{date:Date}
  reCall:{payload:number}
}

export type memoType = {
  memoData: Array<number>
}

export type memoWriteType = {
  isMemoWrite: boolean
}

// all
export type allStateType = {
  resourceType: string,
  id: number,
  active: boolean,
  displayName: string,
  kanaName: string,
  role:string,
  telecom: [{
    system:string,
    value:string,
    use:string,
    rank:number,
    isContactable:boolean
  }]
}

// currentUser
export type currentStateType = {
  name:string
  id:string
  role:string
}

// businessMemoWrite
export type businessMemoWriteType = {
  isBusinessMemoWrite: boolean
}

// detail
export type detailType = {
  payload: Array<number>
}

// isFilter
export type isFilterType = {
  date: boolean
}

// isModalPatient
export type isModalPatientType = {
  isModal:boolean
}

export type isAnimated = boolean

// layout
export type layoutType = {
  contentWidth: string,
  isRTL: boolean,
  menuCollapsed: false,
  menuHidden: false
}

export type navbarType = {
  bookmarks:object,
  query: string,
  suggestions: object
}

//patient
export type receptionsStoreType = {
  data:[
    receptionsType
  ]
}

export type fetchDoctorType = {
  id?: string
  adminTodo: adminTodoType,
  medicalTodo: medicalTodoType
  state:doctorsStateType
}

export type doctorsType = [fetchDoctorType]

export type adminTodoType = todoType

export type medicalTodoType = todoType

export type todoType = {
  date: string,
  doctorId: string,
  patientId: string,
  resourceType: string,
  stateSelections?: Array<string> | [],
  todoCount: number,
  todoDoneCount: number,
  todoItems: todoItemsType | []
}

export type todoItemsType = [todoItemType]

export type todoItemType = {
  title: string
  state?: string
  patientId: string
  departmentName:string
  doctorId:string
  doctorName:string
  note:string
}

export type doctorsStateType = {
  appointmentDate: string
  appointmentTime: string
  buttonsToShow: null | Array<string>
  date: string
  departmentName: string
  doctorId: string
  doctorStateId:string
  doctorName: string
  doctorState: string
  estimatedWaitingMinutes: null | number
  examOrder: number
  patientId: string
  paymentType: string
  receptionPurpose: string
  resourceType: string
  waitingOrder: number
  waitingMinutes: number
  startTime: string
  endTime: string
}

//reception
export type receptionsType = {
  appointmentDate: string,
  appointmentTime: string,
  appointmentAMPM?: string,
  doctors: doctorsType,
  patientId: string,
  patient: {
    extra: {
      id: string,
      specialKeys: specialKeysType,
      stars: number
    },
    id:string
    main: receptionsMainType
    state: receptionsStateType,
  }
  receptionDate: string,
  receptionTime: string,
  receptionType: string,
  uuid:string,
  resourceType: string
}

export type specialKeysType = [object]

//receptions

export type receptionsMainType = {
  active: string
  address: [{
    isMailable: boolean
    postalCode: string
    text: string
    use: string
  }]
  age: number
  birthDate: string
  email:string
  gender: string
  id: string
  kanaName:string
  kanjiName:string
  maritalStatus: string
  name: [{
    text: string
    family: string
    use: string
    given: Array<string>
    isKana: boolean
  }]
  telecom: Array<TelecomTypes>
}

export type TelecomTypes = {
  isContactable: boolean
  system: string
  use: string
  value: string
}

export type receptionsStateType = {
  date: string,
  id: string,
  nextEvents:Array<{
    eventId: number
    eventName: string
  }>
  patientState: string,
  resourceType: string,
  todoCount: number
  todoDoneCount: number,
  totalWaitingMinutes: number
  currentState: {
    label:string
  }
}

// receptionsAnimated
export type receptionsAnimatedType = {
  isAnimated: boolean
}

// userDetail
export type userDetailType = {
  patientId: string,
  payload: object,
  resourceType: string
  cards: cardsType
}

// cards
export type cardsType = {
  cardType: string,
  patientId: string,
  main: receptionsMainType,
  extra: {
    id: string,
    specialKeys: specialKeysType,
    stars: number
  }
}

// userIdsDetail
export type userIdsDetailType = {
  dId: string,
  pId: string
  payload : object
}

// timeline
export type timeLineType = {
  timeLineData: Array<number>
}

export type confType = {
  method: string,
  mode: string,
  headers: {
    'Content-Type': string,
    'Authorization': string,
    'Access-Control-Request-Method': string
  }

}

export type confBodyType = {
  method: string,
  mode: string,
  headers: {
    'Content-Type': string,
    'Authorization': string,
    'Access-Control-Request-Method': string
  },
  body?:string
}

export type awsmobileTypes = {
  local: awsmobileType
  dev: awsmobileType
  stg: awsmobileType
  production: awsmobileType
}

export type awsmobileType = {
  aws_project_region: string
  aws_content_delivery_bucket: string
  aws_content_delivery_bucket_region: string
  aws_content_delivery_url: string
  aws_cognito_identity_pool_id: string
  aws_cognito_region: string
  aws_user_pools_id: string
  aws_user_pools_web_client_id: string
  oauth: object
  aws_cognito_username_attributes: Array<string>
  aws_cognito_social_providers: Array<any>
  aws_cognito_signup_attributes: Array<string>
  aws_cognito_mfa_configuration: string,
  aws_cognito_mfa_types: Array<string>
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: number,
    passwordPolicyCharacters: Array<any>
  }
  aws_cognito_verification_mechanisms: Array<string>
}
