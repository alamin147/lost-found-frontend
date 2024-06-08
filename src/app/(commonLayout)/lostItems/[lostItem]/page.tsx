"use client";
import { useGetSingleLostItemQuery } from "@/app/redux/api/api";
import { Spinner } from "flowbite-react";

const Page = ({ params }: { params: any }) => {
  const { data: singleLostItem, isLoading } = useGetSingleLostItemQuery(
    params?.lostItem
  );

  console.log(singleLostItem?.data);

  if (isLoading) {
    return (
      <div className="pt-16 text-center bg-gray-900">
        <Spinner size="lg" />
      </div>
    );
  }
  const lostItem = singleLostItem?.data;
  const {
    lostItemName,
    date,
    isFound,
    img,
    description,
    location,
    user,
    category,
  } = lostItem;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 items-center">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={lostItemName}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {lostItemName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Date:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {new Date(date).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Status:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {isFound ? (
                    <span className="text-green-400">Found</span>
                  ) : (
                    <span className="text-red-400">Not Found</span>
                  )}
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Location: {location}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Category: {category.name}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Reported by: {user.username}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
