// "use client";
// import { Card, Spinner } from "flowbite-react";
// import img from "@/app/assets/3576506_65968.jpg";
// import { lostItem } from "@/app/types/types";
// import { useGetLostItemsQuery } from "@/app/redux/api/api";
// import Link from "next/link";

// const RecentLostItem = () => {
//   const { data: lostItems, isLoading } = useGetLostItemsQuery({});
//   // console.log(lostItems);

//   if (isLoading) {
//     return (
//       <div className="min-h- text-center bg-gray-900 pt-10">
//         <Spinner size="lg" />
//       </div>
//     );
//   }
//   return (
//     <div className="bg-white dark:bg-gray-900">
//       <div className="px-4 mx-auto max-w-screen-2xl sm:py-6 lg:px-6">
//         <div className="mx-auto text-center ">
//           {/* <hr /> */}
//           <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white pt-20 md:pt-16">
//             Recent Lost Items
//           </h2>
//           <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
//             These are the recent lost item reports
//           </p>
//         </div>
//       </div>
//       {/* card items */}
//       <div className="container mx-auto flex justify-center">
//         <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
//           {lostItems?.data?.slice(0, 9).map((lostItem: lostItem) => {
//             return (
//               // <Card
//               //   key={lostItem.id}
//               //   className="max-w-sm mx-auto"
//               //   imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
//               //   imgSrc={lostItem?.img}
//               // >
//               //   <a>
//               //     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               //       {lostItem?.lostItemName}
//               //     </h5>
//               //   </a>
//               //   <div className=" flex items-center">
//               //     <p className="text-white">
//               //       <span className="text-gray-400">Description: </span>{" "}
//               //       {lostItem.description}
//               //     </p>
//               //   </div>
//               //   <div className=" flex items-center">
//               //     <p className="text-white">
//               //       <span className="text-gray-400">Date: </span>{" "}
//               //       {lostItem?.date.split("T")[0]}
//               //     </p>
//               //   </div>
//               //   <div className="flex items-center justify-between">
//               //     <span className=" text-gray-900 dark:text-white">
//               //       <span className="text-gray-400">Location: </span>
//               //       {lostItem.location}
//               //     </span>
//               //   </div>
//               //   <div className="flex items-center justify-between">
//               //     <span className=" text-gray-900 dark:text-white">
//               //       <span className="text-gray-400">Status: </span>
//               //       {lostItem?.isFound ? (
//               //         <span className="text-green-400">Found</span>
//               //       ) : (
//               //         <span className="text-red-400">Not Found</span>
//               //       )}
//               //     </span>
//               //   </div>

//               //   <div className="flex items-center justify-between">
//               //     <Link
//               //       href={`/lostItems/${lostItem?.id}`}
//               //       className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//               //     >
//               //       See details
//               //     </Link>
//               //   </div>
//               // </Card>
//               <div
//                 key={`${lostItem?.id}127`}
//                 className="bg-gray-800 rounded-lg overflow-hidden shadow-lg ring-opacity-40 max-w-sm text-white"
//               >
//                 <div className="relative">
//                   <div className="h-64 w-full overflow-hidden">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={lostItem?.img}
//                       alt={lostItem?.lostItemName}
//                     />
//                   </div>

//                   {lostItem?.isFound ? (
//                     <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
//                       Found
//                     </div>
//                   ) : (
//                     <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
//                       Not Found
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-medium mb-2">
//                     {lostItem?.lostItemName}
//                   </h3>
//                   <p className="text-gray-300 text-sm mb-4">
//                     {lostItem?.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <p>
//                       <span className="text-gray-400">Date: </span>
//                       {lostItem?.date.split("T")[0]}
//                       <br />
//                       <span className="text-gray-400">Location: </span>
//                       <span>{lostItem.location}</span>
//                     </p>
//                     <Link href={`/lostItems/${lostItem?.id}`}>
//                       <button
//                         className="

//                       rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800
//                       "
//                       >
//                         See Details
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentLostItem;

"use client";
import { Card, Spinner } from "flowbite-react";
import img from "@/app/assets/3576506_65968.jpg";
import { lostItem } from "@/app/types/types";
import {
  useGetFoundItemsQuery,
  useGetLostItemsQuery,
} from "@/app/redux/api/api";
import Link from "next/link";
import Image from "next/image";

const RecentLostItem = () => {
  const { data: lostItems, isLoading } = useGetLostItemsQuery({});
  // console.log(lostItems);
  const { data: foundItems } = useGetFoundItemsQuery({});
  if (isLoading) {
    return (
      <div className="min-h- text-center bg-gray-900 pt-10">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto maxw-screen-2xl sm:py-6 lg:px-6">
        <div className="mx-auto text-center ">
          {/* <hr /> */}
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white pt-20 md:pt-16">
            Recent Lost Items
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
            These are the recent lost item reports
          </p>
        </div>
      </div>
      {/* card items */}
      <div className="container mx-auto flex justify-center mb-10">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {lostItems?.data?.slice(0, 9).map((lostItem: lostItem) => {
            return (
              <div
                key={`${lostItem?.id}127`}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg ring-opacity-40 max-w-sm text-white"
              >
                <div className="relative">
                  <div className="h-64 w-full overflow-hidden">
                    {/* <img
                      className="w-full h-full object-cover"
                      src={lostItem?.img}
                      alt={lostItem?.lostItemName}
                    /> */}
                    <Image
                      className="w-full h-full object-cover"
                      src={lostItem?.img}
                      alt={lostItem?.lostItemName}
                      width= {500}
                      height={500}
                      quality={100}
                    />
                  </div>

                  {lostItem?.isFound ? (
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      Found
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      Not Found
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {lostItem?.lostItemName}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {lostItem?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-gray-400">Date: </span>
                      {lostItem?.date.split("T")[0]}
                      <br />
                      <span className="text-gray-400">Location: </span>
                      <span>{lostItem.location}</span>
                    </p>
                    <Link href={`/lostItems/${lostItem?.id}`}>
                      <button
                        className=" 
                      
                      rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800
                      "
                      >
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto md:ms-0">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {foundItems?.data?.map((foundItem: any) => {
            return (
              // <Card
              //   key={foundItem.id}
              //   className="max-w-xs mx-auto"
              //   imgAlt="foundItem"
              //   imgSrc={foundItem?.img }
              // >
              //   <a>
              //     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              //       {foundItem?.foundItemName}
              //     </h5>
              //   </a>
              //   <div className=" flex items-center">
              //     <p className="text-white">
              //       <span className="text-gray-400">Description: </span>{" "}
              //       {foundItem.description}
              //     </p>
              //   </div>
              //   <div className=" flex items-center">
              //     <p className="text-white">
              //       <span className="text-gray-400">Date: </span>{" "}
              //       {foundItem?.date
              //         ? foundItem?.date?.split("T")[0]
              //         : foundItem?.createdAt?.split("T")[0]}
              //     </p>
              //   </div>
              //   <div className="flex items-center justify-between">
              //     <span className=" text-gray-900 dark:text-white">
              //       <span className="text-gray-400">Location: </span>
              //       {foundItem.location}
              //     </span>
              //   </div>
              //   <div className="flex items-center justify-between">
              //     <span className=" text-gray-900 dark:text-white">
              //       <span className="text-gray-400">Claimed: </span>
              //       {foundItem?.isClaimed ? (
              //         <span className="text-green-400">Claimed</span>
              //       ) : (
              //         <span className="text-red-400">Not Claimed</span>
              //       )}
              //     </span>
              //   </div>

              //   <div className="flex items-center justify-between">
              //     <Link
              //       href={`/foundItems/${foundItem?.id}`}
              //       className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              //     >
              //       See details
              //     </Link>
              //   </div>
              // </Card>
              <div
                key={foundItem.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg ring-opacity-40 max-w-sm text-white"
              >
                <div className="relative">
                  <div className="h-64 w-full overflow-hidden">
                    {/* <img
                      className="w-full h-full object-cover"
                      src={foundItem?.img}
                      alt={foundItem?.foundItemName}
                    /> */}
                    <Image
                      className="w-full h-full object-cover"
                      src={foundItem?.img}
                      alt={foundItem?.foundItemName}
                      width= {500}
                      height={500}
                      quality={100}
                    />
                  </div>

                  {foundItem?.isClaimed ? (
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      Claimed
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      Not Claimed
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {foundItem?.foundItemName}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {foundItem?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-gray-400">Date: </span>
                      {foundItem?.date
                        ? foundItem?.date?.split("T")[0]
                        : foundItem?.createdAt?.split("T")[0]}
                      <br />
                      <span className="text-gray-400">Location: </span>
                      <span>{foundItem?.location}</span>
                    </p>
                    <Link href={`/foundItems/${foundItem?.id}`}>
                      <button
                        className=" 
                      
                      rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800
                      "
                      >
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentLostItem;
