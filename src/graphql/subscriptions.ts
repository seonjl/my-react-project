/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMember = /* GraphQL */ `subscription OnCreateMember(
  $id: ID
  $organizationId: ID
  $userId: ID
  $role: String
  $name: String
) {
  onCreateMember(
    id: $id
    organizationId: $organizationId
    userId: $userId
    role: $role
    name: $name
  ) {
    id
    organizationId
    userId
    role
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemberSubscriptionVariables,
  APITypes.OnCreateMemberSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onCreateOrganization(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onCreatePost(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $id: ID
  $name: String
  $mobile: String
  $email: String
  $pid: String
) {
  onCreateUser(
    id: $id
    name: $name
    mobile: $mobile
    email: $email
    pid: $pid
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteMember = /* GraphQL */ `subscription OnDeleteMember(
  $id: ID
  $organizationId: ID
  $userId: ID
  $role: String
  $name: String
) {
  onDeleteMember(
    id: $id
    organizationId: $organizationId
    userId: $userId
    role: $role
    name: $name
  ) {
    id
    organizationId
    userId
    role
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemberSubscriptionVariables,
  APITypes.OnDeleteMemberSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onDeleteOrganization(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onDeletePost(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $id: ID
  $name: String
  $mobile: String
  $email: String
  $pid: String
) {
  onDeleteUser(
    id: $id
    name: $name
    mobile: $mobile
    email: $email
    pid: $pid
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateMember = /* GraphQL */ `subscription OnUpdateMember(
  $id: ID
  $organizationId: ID
  $userId: ID
  $role: String
  $name: String
) {
  onUpdateMember(
    id: $id
    organizationId: $organizationId
    userId: $userId
    role: $role
    name: $name
  ) {
    id
    organizationId
    userId
    role
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemberSubscriptionVariables,
  APITypes.OnUpdateMemberSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onUpdateOrganization(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $id: ID
  $name: String
  $description: String
  $createdAt: AWSDateTime
  $updatedAt: AWSDateTime
) {
  onUpdatePost(
    id: $id
    name: $name
    description: $description
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $id: ID
  $name: String
  $mobile: String
  $email: String
  $pid: String
) {
  onUpdateUser(
    id: $id
    name: $name
    mobile: $mobile
    email: $email
    pid: $pid
  ) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
