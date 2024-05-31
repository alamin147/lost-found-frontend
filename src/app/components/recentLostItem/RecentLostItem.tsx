"use client";
import { Card } from "flowbite-react";
import img from "@/app/assets/3576506_65968.jpg";
import { lostItem } from "@/app/types/types";
import { useGetLostItemsQuery } from "@/app/redux/api/api";

const RecentLostItem = () => {
  // const res = await fetch("http://localhost:5000/api/found-items");

  // const lostItems = await res.json();

  const { data: lostItems, isLoading } = useGetLostItemsQuery({});
  console.log(lostItems);

  if (isLoading) return <p>loading</p>;
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-6 lg:px-6">
        <div className="mx-auto text-center lg:mb-1 mb-8">
          <hr />
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-7 md:mt-16">
            Recent Lost Items
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
            These are the recent lost item reports
          </p>
        </div>
      </div>
      {/* card items */}
      <div className="container mx-auto">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-4 ">
          {lostItems?.data?.slice(0, 5).map((lostItem: lostItem) => {
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
                    {lostItem?.isFound ? <span className="text-green-400">Found</span> : <span className="text-red-400">Not Found</span>}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    See details
                  </a>
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
