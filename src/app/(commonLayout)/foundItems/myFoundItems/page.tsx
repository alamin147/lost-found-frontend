"use client";
import { Button, Card, Spinner, Modal, Label, TextInput } from "flowbite-react";
import img from "@/app/assets/3576506_65968.jpg";
import {
  useDeleteMyFoundItemMutation,
  useEditMyFoundItemMutation,
  useGetMyFoundItemQuery,
} from "@/app/redux/api/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Modals from "@/app/components/modal/Modal";
import { ToastContainer } from "react-toastify";

const MyFoundItems = () => {
  const router = useRouter();
  const { data: myFoundItems, isLoading } = useGetMyFoundItemQuery({});
  const [deleteMyFoundItem] = useDeleteMyFoundItemMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem]: any = useState(null);
  const [currId, setCurrId]: any = useState();
  //   console.log(myFoundItems);
  const handleDelete = async (id: string) => {
    // console.log(id)
    const res = await deleteMyFoundItem(id);
    // console.log(res);
    if (res?.data?.statusCode == 200) {
      Modals({ message: res?.data?.message, status: true });
      router.refresh();
    } else {
      Modals({ message: "Failed to delete", status: false });
    }
  };

  const [editMyFoundItem] = useEditMyFoundItemMutation();

  const openModal = (item: any) => {
    setCurrentItem(item);
    setIsOpen(true);
    setCurrId(item?.id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentItem(null);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    data.id = currId;
    data.date = new Date(data?.date).toISOString();

    const res = await editMyFoundItem(data);
    if (res?.data?.statusCode == 200) {
      Modals({ message: res?.data?.message, status: true });
      router.refresh();
    } else {
      Modals({ message: "Failed to update", status: false });
    }

    // console.log( res);
    closeModal();
  };

  if (isLoading)
    return (
      <div className="min-h-screen text-center bg-gray-900 pt-10">
        <Spinner size="lg" />
      </div>
    );

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-6 lg:px-6">
        <div className="mx-auto text-center lg:mb-1 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-7 md:mt-16">
            My Found Item Reports
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
            These are the my found item reports
          </p>
        </div>
      </div>
      {/* card items */}
      <div className="container mx-auto">
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-4 ">
          {myFoundItems?.data?.map((myFoundItem: any) => {
            return (
              <Card
                key={myFoundItem.id}
                className="max-w-sm mx-auto"
                imgAlt="found item image"
                imgSrc={myFoundItem?.img || img}
              >
                <a>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {myFoundItem?.foundItemName}
                  </h5>
                </a>
                <div className="flex items-center">
                  <p className="text-white">
                    <span className="text-gray-400">Description: </span>
                    {myFoundItem?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    <span className="text-gray-400">Status: </span>
                    {myFoundItem?.isClaimed === false ? (
                      <span className="text-red-400">Rejected</span>
                    ) : (
                      <span className="text-green-400">Approved</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    <span className="text-gray-400">Location: </span>
                    {myFoundItem?.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    <span className="text-gray-400">Date: </span>
                    {myFoundItem?.date.split("T")[0]}
                  </span>
                </div>
               
                <div className="flex items-center gap-5">
                  <Button color="yellow" onClick={() => openModal(myFoundItem)}>
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(myFoundItem.id)}
                    color="red"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal show={isOpen} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit Found Item
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <Label htmlFor="description" value="Description" />
                <TextInput
                  id="description"
                  defaultValue={currentItem?.description}
                  {...register("description", { required: true })}
                  className="mt-1 block w-full"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <Label htmlFor="location" value="Location" />
                <TextInput
                  id="location"
                  defaultValue={currentItem?.location}
                  {...register("location", { required: true })}
                  className="mt-1 block w-full"
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <Label htmlFor="date" value="Date" />
                <TextInput
                  type="date"
                  id="date"
                  defaultValue={currentItem?.date.split("T")[0]}
                  {...register("date", { required: true })}
                  className="mt-1 block w-full"
                />
                {errors.date && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="submit">Save</Button>
                <Button color="gray" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default MyFoundItems;
