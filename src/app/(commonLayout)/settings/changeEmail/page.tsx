"use client";
import { Button, Spinner } from "flowbite-react";
import { removeUserLocalStorage, useUserVerification } from "@/app/auth/auth";
import avatar from "@/app/assets/avatar.jpg";
import { useChangeEmailMutation } from "@/app/redux/api/api";
import { useForm } from "react-hook-form";
import Modals from "@/app/components/modal/Modal";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Page = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const users: any = useUserVerification();
  // console.log(users?.userImg);
  const [changeEmail, { isLoading }]: any = useChangeEmailMutation();

  const onSubmit = async (data: any) => {
    try {
      const email = data.email;
      const res: any = await changeEmail({ email });
      console.log(res);
      if (res?.error?.data?.message) {
        Modals({ message: res?.error?.data?.message, status: false });
        return;
      }
      if (res?.data?.statusCode == 200) {
        Modals({
          message: `${res?.data?.message}. Your new email is ${email}. Now Please login again`,
          status: true,
        });
        reset();
        removeUserLocalStorage();
        router.push("/login");
      }
    } catch (err: any) {
      // console.log("errorrrrr", err);
      Modals({ message: "Failed to change email.", status: false });
    }
  };

  return (
    <>
      <div className="bg-gray-900 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-white">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a
              href="/settings/changeEmail"
              className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full"
            >
              Change email
            </a>
            <a
              href="/settings/changePassword"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-gray-500 hover:rounded-full"
            >
              Change Password
            </a>
            <a
              href="/settings/changeUsername"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-gray-500 hover:rounded-full"
            >
              Change Username
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Profile</h2>

              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  {/* <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={users?.userImg ? users?.userImg : avatar}
                    alt="Bordered avatar"
                  /> */}
                  <Image
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={users?.userImg ? users?.userImg : avatar}
                    alt="Bordered avatar"
                    width= {500}
                    height={500}
                    quality={100}
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      disabled
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Change picture
                    </button>
                    <button
                      disabled
                      type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Delete picture
                    </button>
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  {/* email part */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6 ">
                      <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                          Email
                        </label>
                        <input
                          type="text"
                          {...register("email", {
                            required: "Email is required",
                          })}
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Your email"
                        />
                        {errors.email && (
                          <p className="text-red-600">
                            {errors.email?.message as string}
                          </p>
                        )}
                      </div>
                    </div>
                    {isLoading ? (
                      <div className="text-center mb-24">
                        <Spinner aria-label="Large spinner example" size="lg" />
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        href=""
                        className="w-1/2 me-2 mb-20"
                      >
                        Change email
                      </Button>
                    )}
                  </form>

                  <div className="flex justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ToastContainer />
    </>
  );
};
export default Page;
