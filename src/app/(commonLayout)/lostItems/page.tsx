"use client";
import { Card, Spinner } from "flowbite-react";
import img from "@/app/assets/3576506_65968.jpg";
import { lostItem } from "@/app/types/types";
import { useGetLostItemsQuery } from "@/app/redux/api/api";
import Link from "next/link";

const RecentLostItem = () => {
  const { data: lostItems, isLoading } = useGetLostItemsQuery({});
  //   console.log(lostItems);

  if (isLoading)
    return (
      <div className="min-h-screen text-center bg-gray-900 pt-10">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-6 lg:px-6">
        <form className="max-w-md mx-auto">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="mx-auto text-center lg:mb-1 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-7 md:mt-16">
            All Lost Items
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
            These are the recent lost item reports
          </p>
        </div>
      </div>
      {/* card items */}
      <div className="container mx-auto">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-4 ">
          {lostItems?.data?.map((lostItem: lostItem) => {
            return (
              <Card
                key={lostItem.id}
                className="max-w-sm mx-auto"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={img.src}
              >
                <a>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {lostItem?.lostItemName}
                  </h5>
                </a>
                <div className=" flex items-center">
                  <p className="text-white">
                    <span className="text-gray-400">Description: </span>{" "}
                    {lostItem.description}
                  </p>
                </div>
                <div className=" flex items-center">
                  <p className="text-white">
                    <span className="text-gray-400">Date: </span>{" "}
                    {lostItem?.date.split("T")[0]}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">
                    <span className="text-gray-400">Location: </span>
                    {lostItem.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">
                    <span className="text-gray-400">Status: </span>
                    {lostItem?.isFound ? (
                      <span className="text-green-400">Found</span>
                    ) : (
                      <span className="text-red-400">Not Found</span>
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/lostItems/${lostItem?.id}`}
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

export default RecentLostItem;
