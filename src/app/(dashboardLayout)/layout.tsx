"use client";
import { ReactNode } from "react";
import { useUserVerification } from "../auth/auth";
import { Navbars } from "../components/navbar/Navbars";
import { useAdminStatsQuery, useBlockUserMutation } from "../redux/api/api";
import { Spinner } from "flowbite-react";
import Modals from "../components/modal/Modal";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const users: any = useUserVerification();
  const { data: adminStats, isLoading } = useAdminStatsQuery({});
  const [blockUser, { isLoading: blockLoading }] = useBlockUserMutation({});
  console.log(adminStats?.data?.userData);

  if (isLoading) {
    return (
      <div className="min-h-screen text-center bg-gray-900 pt-10">
        <Spinner size="lg" />
      </div>
    );
  }

  const handleBlock = async (id: string) => {
    const res = await blockUser(id);
    // console.log(res);
    if (res?.data?.statusCode == 200) {
      Modals({ message: res?.data?.message, status: true });
      router.refresh();
    } else {
      Modals({ message: "Failed to Block", status: false });
    }
  };

  return (
    <div className="">
      <Navbars />

      <div className="bg-gray-900  w-full  flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our service statistics
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
            <div className="overflow-hidden shadow sm:rounded-lg bg-gray-900">
              <div className="bg-gray-800 border rounded-lg px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-400 truncate ">
                    Total items reported
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                    {adminStats?.data?.total}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-lg bg-gray-900">
              <div className="bg-gray-800 border rounded-lg px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-400 truncate ">
                    Total Lost items reported
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                    {adminStats?.data?.lostItems}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-lg bg-gray-900">
              <div className="bg-gray-800 border rounded-lg px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-400 truncate ">
                    Total Found items reported
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                    {adminStats?.data?.foundItems}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-lg bg-gray-900">
              <div className="bg-gray-800 border rounded-lg px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-400 truncate ">
                    Total users
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                    {adminStats?.data?.totalUsers}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-900 p-3 sm:p-5 min-h-screen">
        {users?.role == "ADMIN" ? (
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white my-10">
              User Management
            </h2>
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Username
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Role
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Activated
                      </th>
                      <th scope="col" className="px-4 py-3 text-center">
                        Block/Activate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminStats?.data?.userData?.map((user: any) => {
                      return (
                        <tr
                          key={user?.id}
                          className="border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {user?.username}
                          </th>
                          <td className="px-4 py-3">{user?.email}</td>
                          <td className="px-4 py-3">{user?.role}</td>
                          <td className="px-4 py-3">
                            {user?.activated ? (
                              <p className="text-green-400">Active</p>
                            ) : (
                              <p className="text-red-400">Blocked</p>
                            )}
                          </td>
                          <th scope="col" className="p-4">
                            <div className="flex items-center">
                              {blockLoading ? (
                                <Spinner />
                              ) : (
                                <input
                                  type="checkbox"
                                  onClick={() => handleBlock(user?.id)}
                                  className="mx-auto w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              )}
                            </div>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight  sm:text-4xl text-red-400 my-10">
              Unauthorize user
            </h2>
          </div>
        )}
      </section>
      <ToastContainer />
    </div>
  );
};
export default Layout;
