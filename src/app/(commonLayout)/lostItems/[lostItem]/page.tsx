"use client";
import { useGetSingleLostItemQuery } from "@/app/redux/api/api";
import { Button, Spinner } from "flowbite-react";
import Image from "next/image";

const Page = ({ params }: { params: any }) => {
  const { data: singleLostItem, isLoading } = useGetSingleLostItemQuery(
    params?.lostItem
  );

  // console.log(singleLostItem?.data);

  if (isLoading) {
    return (
      <div className="pt-16 text-center bg-gray-900 min-h-screen">
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
    // <div className="bg-gray-100 dark:bg-gray-900 py-8">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex flex-col md:flex-row -mx-4 items-center">
    //       <div className="md:flex-1 px-4">
    //         <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
    //           <img
    //             className="w-full h-full object-cover"
    //             src={img}
    //             alt={lostItemName}
    //           />
    //         </div>
    //       </div>
    //       <div className="md:flex-1 px-4">
    //         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
    //           {lostItemName}
    //         </h2>
    //         <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
    //           {description}
    //         </p>
    //         <div className="flex mb-4">
    //           <div className="mr-4">
    //             <span className="font-bold text-gray-700 dark:text-gray-300">
    //               Date:{" "}
    //             </span>
    //             <span className="text-gray-600 dark:text-gray-300">
    //               {new Date(date).toLocaleDateString()}
    //             </span>
    //           </div>
    //           <div>
    //             <span className="font-bold text-gray-700 dark:text-gray-300">
    //               Status:{" "}
    //             </span>
    //             <span className="text-gray-600 dark:text-gray-300">
    //               {isFound ? (
    //                 <span className="text-green-400">Found</span>
    //               ) : (
    //                 <span className="text-red-400">Not Found</span>
    //               )}
    //             </span>
    //           </div>
    //         </div>
    //         <div>
    //           <span className="font-bold text-gray-700 dark:text-gray-300">
    //             Location: {location}
    //           </span>
    //           <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
    //         </div>
    //         <div>
    //           <span className="font-bold text-gray-700 dark:text-gray-300">
    //             Category: {category.name}
    //           </span>
    //           <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
    //         </div>
    //         <div>
    //           <span className="font-bold text-gray-700 dark:text-gray-300">
    //             Reported by: {user.username}
    //           </span>
    //           <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            {/* <img
              src={img}
              alt={lostItemName}
              width={600}
              height={400}
              className="rounded-lg w-full object-cover "
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
            <Image
              src={img}
              alt={lostItemName}
             
              className="rounded-lg w-full object-cover "
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
              width= {500}
              height={500}
              quality={100}
            />
          </div>
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold">{lostItemName}</h1>
              <p className="text-gray-400">
                Lost on {new Date(date)?.toLocaleDateString()} in {location}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-gray-400">{description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Details</h2>

              <div className="grid gap-2 text-gray-400">
                <p>
                  <span className="font-medium">Date Lost:</span>{" "}
                  {new Date(date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {location}
                </p>
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {category?.name}
                </p>
                <p>
                  <span className="font-medium">Reported By:</span>{" "}
                  {user?.username}
                </p>

                <p className="font-bold text-gray-700 dark:text-gray-300">
                  Status:{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    {isFound ? (
                      <span className="text-green-500">Found</span>
                    ) : (
                      <span className="text-red-500">Not Found</span>
                    )}
                  </span>
                </p>
              </div>
            </div>
            <Button className="mt-10 w-1/2">Claim</Button>
          </div>
        </div>

        {/* <div className="mt-12 md:mt-20">
    //     <h2 className="text-2xl font-bold mb-6">Report Found Item</h2>
    //     <div className="bg-white rounded-lg shadow-md p-6">
    //       <div className="grid gap-6">
    //         <div className="grid md:grid-cols-2 gap-4">
    //           <div className="grid gap-2">
    //             <label htmlFor="name" className="font-medium">
    //               Your Name
    //             </label>
    //             <input
    //               id="name"
    //               type="text"
    //               placeholder="Enter your name"
    //               className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             />
    //           </div>
    //           <div className="grid gap-2">
    //             <label htmlFor="email" className="font-medium">
    //               Your Email
    //             </label>
    //             <input
    //               id="email"
    //               type="email"
    //               placeholder="Enter your email"
    //               className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             />
    //           </div>
    //         </div>
    //         <div className="grid gap-2">
    //           <label htmlFor="phone" className="font-medium">
    //             Phone Number
    //           </label>
    //           <input
    //             id="phone"
    //             type="tel"
    //             placeholder="Enter your phone number"
    //             className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <label htmlFor="details" className="font-medium">
    //             Additional Details
    //           </label>
    //           <textarea
    //             id="details"
    //             placeholder="Provide any additional details about the found item"
    //             className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex justify-end gap-2 mt-6">
    //         <button
    //           type="button"
    //           className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="submit"
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </div>
    //   </div> */}
      </div>
    </div>
  );
};

export default Page;
