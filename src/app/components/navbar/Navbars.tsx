"use client";

import { signOut, useUserVerification } from "@/app/auth/auth";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import Modals from "../modal/Modal";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export function Navbars() {
  const router = useRouter();
  const users: any = useUserVerification();
  // console.log(users);
  const handleSignOut = () => {
    signOut();
    Modals({ message: "Log out successfully", status: true });
    router.refresh();
    router.push("/");
  };

  // console.log(users);
  return (
    <>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Lost & Found
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {users?.email ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={users?.userImg} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {users?.email ? users?.email : "User"}
                </span>
                <span className="block truncate text-sm font-medium"></span>
              </Dropdown.Header>
              {users?.role == "ADMIN" && (
                <Dropdown.Item>
                  <Link href="/dashboard">Dashboard</Link>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <Link href="/settings/changeEmail">Settings</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/lostItems/myLostItems">My lost items</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/foundItems/myFoundItems">My found items</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/myClaimRequest">My claims</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="flex gap-2">
              <Link href="/login">
                {" "}
                <Button color="dark">Login</Button>
              </Link>
              <Link href="/register">
                {" "}
                <Button>Register</Button>
              </Link>
            </div>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#aboutUs">About us</Navbar.Link>
          <Navbar.Link href="/lostItems">Lost items</Navbar.Link>
          <Navbar.Link href="/foundItems">Found items</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <ToastContainer />
    </>
  );
}
