import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://7fdojjp966.execute-api.ap-northeast-2.amazonaws.com",
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const getOrganization = async (oid: string) => {
  const { data } = await httpClient.get(`/v1/organizations/${oid}`);
  return data;
};

export const getOrganizations = async () => {
  const { data } = await httpClient.get("/v1/organizations");
  return data;
};

export const getOrganizationsByUser = async (uid: string) => {
  const { data } = await httpClient.get(`/v1/users/${uid}/organizations`);
  return data;
};

export const getOrganizationMembers = async (oid: string) => {
  const { data } = await httpClient.get(`/v1/organizations/${oid}/members`);
  return data;
};

export const getOrganizationMember = async (oid: string, uid: string) => {
  const { data } = await httpClient.get(
    `/v1/organizations/${oid}/members/${uid}`
  );
  return data;
};

export const getOrganizationPosts = async (oid: string) => {
  const { data } = await httpClient.get(`/v1/organizations/${oid}/posts`);
  return data;
};

export const getOrganizationPost = async (oid: string, pid: string) => {
  const { data } = await httpClient.get(
    `/v1/organizations/${oid}/posts/${pid}`
  );
  return data;
};
