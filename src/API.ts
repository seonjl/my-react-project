/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemberInput = {
  organizationId: string,
  userId: string,
  role: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  organizationId: string,
  userId: string,
  role: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateOrganizationInput = {
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type CreatePostInput = {
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type CreateUserInput = {
  name: string,
  mobile: string,
  email: string,
  pid: string,
  provider: string,
  connectedAt: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type DeleteMemberInput = {
  id: string,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateMemberInput = {
  id: string,
  organizationId?: string | null,
  userId?: string | null,
  role?: string | null,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdatePostInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  mobile?: string | null,
  email?: string | null,
  pid?: string | null,
  provider?: string | null,
  connectedAt?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type TableMemberFilterInput = {
  id?: TableIDFilterInput | null,
  organizationId?: TableIDFilterInput | null,
  userId?: TableIDFilterInput | null,
  role?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  updatedAt?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
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
  size?: ModelSizeInput | null,
};

export type MemberConnection = {
  __typename: "MemberConnection",
  items?:  Array<Member | null > | null,
  nextToken?: string | null,
};

export type TableOrganizationFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  updatedAt?: TableStringFilterInput | null,
};

export type OrganizationConnection = {
  __typename: "OrganizationConnection",
  items?:  Array<Organization | null > | null,
  nextToken?: string | null,
};

export type TablePostFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  updatedAt?: TableStringFilterInput | null,
};

export type PostConnection = {
  __typename: "PostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  mobile?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  pid?: TableStringFilterInput | null,
  provider?: TableStringFilterInput | null,
  connectedAt?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  updatedAt?: TableStringFilterInput | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
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
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: TableMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "MemberConnection",
    items?:  Array< {
      __typename: "Member",
      id: string,
      organizationId: string,
      userId: string,
      role: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: TableOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "OrganizationConnection",
    items?:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: TablePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "PostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "UserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  id?: string | null,
  organizationId?: string | null,
  userId?: string | null,
  role?: string | null,
  name?: string | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  mobile?: string | null,
  email?: string | null,
  pid?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  id?: string | null,
  organizationId?: string | null,
  userId?: string | null,
  role?: string | null,
  name?: string | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  mobile?: string | null,
  email?: string | null,
  pid?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  id?: string | null,
  organizationId?: string | null,
  userId?: string | null,
  role?: string | null,
  name?: string | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    organizationId: string,
    userId: string,
    role: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  mobile?: string | null,
  email?: string | null,
  pid?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
