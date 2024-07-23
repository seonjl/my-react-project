import { listOrganizations } from "@/graphql/queries";
import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import { generateClient } from "aws-amplify/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const client = generateClient();

export default function MainPage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [rankedOrganizations, setRankedOrganizations] = useState<any>([]);
  const [searchedOrganizations, setSearchedOrganizations] = useState<any>([]);

  async function listOrganization(searchName: string = "") {
    let variables = {};

    if (searchName) {
      variables = {
        filter: {
          name: {
            contains: searchName,
          },
        },
      };
    }

    return client.graphql({
      query: listOrganizations,
      variables,
    });
  }

  async function handleSearchValueChange(searchValue: string) {
    setSearchValue(searchValue);

    if (searchValue === "") {
      return;
    }

    const response = await listOrganization(searchValue);
    setSearchedOrganizations(response.data.listOrganizations?.items);
  }

  useEffect(() => {
    void listOrganization().then((response) => {
      setRankedOrganizations(response.data.listOrganizations?.items);
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-center border-b pb-4">
          {/* back button */}
          <div className="absolute left-12">
            <button
              onClick={() => {
                router.back();
              }}
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-lg font-semibold">탐색</h1>
        </div>
        <div className="xmt-4">
          <h1 className="text-lg font-semibold mb-2 text-center">
            가입하고 싶으신 파티를 찾아보세요!
          </h1>

          <h2 className="text-sm text-gray-600">
            나와 가장 잘 맞는 파티를 찾아보세요. 같은 관심사를 가진 사람들과
            소통해보세요.
          </h2>

          {/* if searchValue is exist searchInterface else nothing */}
          <div className="bg-white text-gray-900 p-5">
            <div className="max-w-lg mx-auto">
              <div className="flex items-center mb-4">
                <form className="max-w-md w-full mx-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      {/* 인원 수 아이콘 */}
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-wh-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="가입하려는 파티를 입력해주세요."
                      required
                      value={searchValue}
                      onChange={async (e) => {
                        void handleSearchValueChange(e.target.value);
                      }}
                    />
                    {searchValue !== "" && (
                      <div className="mt-4">
                        <div className="row-gap-4 space-y-4">
                          <OrganizationItem
                            key={"dummy"}
                            oid={"dummy"}
                            name={"dummy"}
                            memberCount={"1"}
                          />
                          {searchedOrganizations.map((organization: any) => (
                            <OrganizationItem
                              key={organization.id}
                              oid={organization.id}
                              name={organization.name}
                              memberCount={"1"}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="xmt-4">
            <h2 className="text-sm text-gray-600">이러한 파티들은 어떠세요?</h2>
            {rankedOrganizations.map((organization: any) => (
              <OrganizationItem
                key={organization.id}
                oid={organization.id}
                name={organization.name}
                memberCount={"1"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
MainPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};

export function OrganizationItem({
  oid,
  name,
  memberCount,
}: {
  oid: string;
  name: string;
  memberCount: string;
}) {
  return (
    <Link href="/organizations/[oid]" as={`/organizations/${oid}`}>
      <div className="flex items-center">
        <img
          src={`https://via.placeholder.com/50/${"FFA500"}/000000?text=${name}`}
          alt={name}
          className="mr-3"
        />
        <div>
          <div className="font-semibold">{name}</div>
          <div className={`rating ${"text-yellow-500"}`}> {memberCount} 명</div>
        </div>
      </div>
    </Link>
  );
}
