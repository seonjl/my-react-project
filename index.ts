import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerMemberModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly organizationId: string;
  readonly role: string;
  readonly updatedAt: string;
  readonly userId: string;
}

type LazyMemberModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly organizationId: string;
  readonly role: string;
  readonly updatedAt: string;
  readonly userId: string;
}

export declare type MemberModel = LazyLoading extends LazyLoadingDisabled ? EagerMemberModel : LazyMemberModel

export declare const MemberModel: (new (init: ModelInit<MemberModel>) => MemberModel)

type EagerMemberConnectionModel = {
  readonly items?: (Member | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyMemberConnectionModel = {
  readonly items?: (Member | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type MemberConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerMemberConnectionModel : LazyMemberConnectionModel

export declare const MemberConnectionModel: (new (init: ModelInit<MemberConnectionModel>) => MemberConnectionModel)

type EagerOrganizationModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

type LazyOrganizationModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

export declare type OrganizationModel = LazyLoading extends LazyLoadingDisabled ? EagerOrganizationModel : LazyOrganizationModel

export declare const OrganizationModel: (new (init: ModelInit<OrganizationModel>) => OrganizationModel)

type EagerOrganizationConnectionModel = {
  readonly items?: (Organization | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyOrganizationConnectionModel = {
  readonly items?: (Organization | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type OrganizationConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerOrganizationConnectionModel : LazyOrganizationConnectionModel

export declare const OrganizationConnectionModel: (new (init: ModelInit<OrganizationConnectionModel>) => OrganizationConnectionModel)

type EagerPostModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

type LazyPostModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

export declare type PostModel = LazyLoading extends LazyLoadingDisabled ? EagerPostModel : LazyPostModel

export declare const PostModel: (new (init: ModelInit<PostModel>) => PostModel)

type EagerPostConnectionModel = {
  readonly items?: (Post | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyPostConnectionModel = {
  readonly items?: (Post | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type PostConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerPostConnectionModel : LazyPostConnectionModel

export declare const PostConnectionModel: (new (init: ModelInit<PostConnectionModel>) => PostConnectionModel)

type EagerUserModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

type LazyUserModel = {
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel)

type EagerUserConnectionModel = {
  readonly items?: (User | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyUserConnectionModel = {
  readonly items?: (User | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type UserConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerUserConnectionModel : LazyUserConnectionModel

export declare const UserConnectionModel: (new (init: ModelInit<UserConnectionModel>) => UserConnectionModel)

const { Member, MemberConnection, Organization, OrganizationConnection, Post, PostConnection, User, UserConnection } = initSchema(schema) as {
  Member: PersistentModelConstructor<MemberModel>;
  MemberConnection: PersistentModelConstructor<MemberConnectionModel>;
  Organization: PersistentModelConstructor<OrganizationModel>;
  OrganizationConnection: PersistentModelConstructor<OrganizationConnectionModel>;
  Post: PersistentModelConstructor<PostModel>;
  PostConnection: PersistentModelConstructor<PostConnectionModel>;
  User: PersistentModelConstructor<UserModel>;
  UserConnection: PersistentModelConstructor<UserConnectionModel>;
};

export {
  
};