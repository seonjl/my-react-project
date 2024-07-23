/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMember = /* GraphQL */ `mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMemberMutationVariables,
  APITypes.CreateMemberMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteMember = /* GraphQL */ `mutation DeleteMember($input: DeleteMemberInput!) {
  deleteMember(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMemberMutationVariables,
  APITypes.DeleteMemberMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization($input: DeleteOrganizationInput!) {
  deleteOrganization(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateMember = /* GraphQL */ `mutation UpdateMember($input: UpdateMemberInput!) {
  updateMember(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMemberMutationVariables,
  APITypes.UpdateMemberMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization($input: UpdateOrganizationInput!) {
  updateOrganization(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
