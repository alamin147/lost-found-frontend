"use client";
import {
  useGetSingleFoundItemQuery,
  useCreateClaimMutation,
} from "@/app/redux/api/api";
import { Button, Spinner, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = ({ params }: { params: any }) => {
  const { data: singleFoundItem, isLoading } = useGetSingleFoundItemQuery(
    params?.foundItem
  );
  const [createClaim, { isLoading: claimLoading }] = useCreateClaimMutation();
  // console.log(params);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClaimModal = () => {
    setIsClaimModalOpen(true);
  };

  const onSubmit = async (data: any) => {
    // Handle claim submission logic here
    // console.log(data);
    setIsClaimModalOpen(false);

    const claimData = {
      foundItemId: params?.foundItem,
      distinguishingFeatures: data.distinguishingFeatures,
      lostDate: new Date(data.lostDate).toISOString(),
    };
    // console.log(claimData);
    const res = await createClaim(claimData);
    console.log(res);
  };

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen text-center bg-gray-900">
        <Spinner size="lg" />
      </div>
    );
  }

  const foundItem = singleFoundItem?.data;

  return (
    <>
      <div className="pt-40 pb-40 bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 flex flex-col md:flex-row items-center justify-center mx-auto">
            <div className="px-4">
              <div className="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {/* <img
                  className="w-96"
                  src={foundItem?.img}
                  alt={foundItem?.foundItemName}
                /> */}
                <Image
                  className="w-96"
                  src={foundItem?.img}
                  alt={foundItem?.foundItemName}
                  width= {500}
                  height={500}
                  quality={100}
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
              <Button className="me-2 mt-5" onClick={handleClaimModal}>
                Claim
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Modal */}
      <Modal show={isClaimModalOpen} onClose={() => setIsClaimModalOpen(false)}>
        <Modal.Header>Claim Process</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Lost Date
              </label>
              <input
                type="date"
                {...register("lostDate", { required: "Lost date is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.lostDate && (
                <p className="text-red-600">
                  {errors.lostDate.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Distinguishing Features
              </label>
              <input
                type="text"
                {...register("distinguishingFeatures", {
                  required: "Distinguishing features are required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.distinguishingFeatures && (
                <p className="text-red-600">
                  {errors.distinguishingFeatures.message as string}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
