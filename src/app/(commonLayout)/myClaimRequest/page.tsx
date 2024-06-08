"use client";
import { Card, Spinner } from "flowbite-react";
import { useMyClaimsQuery } from "@/app/redux/api/api";
import Link from "next/link";

const Page = () => {
  const { data: myClaims, isLoading } = useMyClaimsQuery({});
  // console.log(myClaims);

  if (isLoading)
    return (
      <div className="min-h-screen text-center bg-gray-900 pt-10">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-6 lg:px-6">
        <div className="mx-auto text-center lg:mb-1 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-7 md:mt-16">
            My claims
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
            These are the my claims
          </p>
        </div>
      </div>
      {/* card items */}
      <div className="container mx-auto">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-4 ">
          {myClaims?.data?.map((myClaim: any) => {
            return (
              <Card
                key={myClaim.id}
                className="max-w-sm mx-auto"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={myClaim?.foundItem?.img}
              >
                <a>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {myClaim?.foundItem?.foundItemName}
                  </h5>
                </a>
                <div className=" flex items-center">
                  <p className="text-white">
                    <span className="text-gray-400">Description: </span>{" "}
                    {myClaim?.foundItem?.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">
                    <span className="text-gray-400">Status: </span>
                    {myClaim?.status == "PENDING" ? (
                      <span className="text-yellow-400">Pending</span>
                    ) : myClaim?.status == "REJECTED" ? (
                      <span className="text-red-400">Rejected</span>
                    ) : (
                      <span className="text-green-400">Aceepted</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">
                    <span className="text-gray-400">Found by: </span>
                    {myClaim?.user?.username}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">
                    <span className="text-gray-400">Email: </span>
                    {myClaim?.user?.email}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/foundItems/${myClaim?.foundItem?.id}`}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    See details
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
