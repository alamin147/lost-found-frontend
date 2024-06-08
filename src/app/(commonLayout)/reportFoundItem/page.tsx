"use client";
import { useForm } from "react-hook-form";
import { Dropdown, Spinner } from "flowbite-react";
import Modals from "@/app/components/modal/Modal";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import {
  useCategoryQuery,
  useCreateFoundItemMutation,
} from "@/app/redux/api/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedMenu, setselectedMenu] = useState("");
  const [selectedMenucategoryId, setselectedMenucategoryId] = useState("");
  const handleMenuChange = (menuName: string, categoryId: string) => {
    setselectedMenu(menuName);
    setselectedMenucategoryId(categoryId);
  };
  const [createFoundItem, { isLoading }] = useCreateFoundItemMutation();
  const { data: Category } = useCategoryQuery("");

  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (data: any) => {
    try {
      const foundData = {
        img: data.imgUrl,
        categoryId: selectedMenucategoryId,
        foundItemName: data.foundItemName,
        description: data.description,
        location: data.location,
        date: startDate,
        claimProcess: data.claimProcess,
      };

      const res: any = await createFoundItem(foundData);

      if (res?.data?.success == false) {
        Modals({ message: "Failed to create Found item", status: false });
      } else {
        Modals({ message: "Found item created successfully", status: true });
        reset();
      }
    } catch (err: any) {
      Modals({ message: "Failed to create Found item", status: false });
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="pt-16 max-w-6xl mx-auto px-5">
          {/* form */}
          <h1 className="text-white text-2xl font-bold text-center mb-12">
            Found something? Report here!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Found item name
                </label>
                <input
                  {...register("foundItemName", {
                    required: "Found item name is required",
                  })}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Laptop/Phone"
                />
                {errors.foundItemName && (
                  <p className="text-red-600">
                    {errors.foundItemName?.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What device look like, color"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />{" "}
                {errors.description && (
                  <p className="text-red-600">
                    {errors.description?.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Image url
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="http://lost-image.com"
                  {...register("imgUrl", {
                    required: "Image url is required",
                  })}
                />{" "}
                {errors.imgUrl && (
                  <p className="text-red-600">
                    {errors.imgUrl?.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City, Country"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />{" "}
                {errors.location && (
                  <p className="text-red-600">
                    {errors.location?.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Claim Procecss
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City, Country"
                  {...register("claimProcess", {
                    required: "Claim Procecss is required",
                  })}
                />{" "}
                {errors.claimProcess && (
                  <p className="text-red-600">
                    {errors.claimProcess?.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date
                </label>
                <DatePicker
                  className="bg-gray-700 border-none rounded-md text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <Dropdown label={selectedMenu ? selectedMenu : "Category"}>
                  {Category?.data?.map((category: any) => {
                    return (
                      <Dropdown.Item
                        key={category.id}
                        onClick={() =>
                          handleMenuChange(
                            `${category?.name}`,
                            `${category?.id}`
                          )
                        }
                      >
                        {category?.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown>
                {!selectedMenu && (
                  <p className="text-red-600 pt-1">Category is required</p>
                )}
              </div>
            </div>

            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#128eb0] text-white"
              >
                Submit
              </button>
            )}
          </form>

          {/* form */}
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
export default Page;
