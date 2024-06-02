"use client";
import { useGetSingleFoundItemQuery } from "@/app/redux/api/api";
import { Button, Spinner } from "flowbite-react";

const Page = ({ params }: { params: any }) => {
  const { data: singleFoundItem, isLoading } = useGetSingleFoundItemQuery(
    params?.foundItem
  );

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen text-center bg-gray-900">
        <Spinner size="lg" />
      </div>
    );
  }

  const foundItem = singleFoundItem?.data;

  return (
    <div className="pt-40 pb-40 bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-96 flex flex-col md:flex-row  items-center justify-center mx-auto">
          <div className="px-4">
            <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-96 "
                src={foundItem?.img}
                alt={foundItem?.foundItemName}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {foundItem?.foundItemName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {foundItem?.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Date:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {new Date(foundItem?.date).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Claimed:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {foundItem?.isClaimed ? (
                    <span className="text-green-400">Claimed</span>
                  ) : (
                    <span className="text-red-400">Not Claimed</span>
                  )}
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Location: {foundItem?.location}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Category: {foundItem?.category?.name}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Found by: {foundItem?.user?.username}
              </span>
            </div>
            <Button className="me-2 mt-5">Claim</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
