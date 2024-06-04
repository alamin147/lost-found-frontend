"use client";
import avatar from "@/app/assets/avatar.jpg";

import { userVerification } from "@/app/auth/auth";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";

export function Navbars() {
  const users: any = userVerification();
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Lost & Found
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={users?.userImg} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {users?.email ? users?.email : "User"}
              </span>
              <span className="block truncate text-sm font-medium"></span>
            </Dropdown.Header>
            {/* <Dropdown.Item>Dashboard</Dropdown.Item> */}
            <Dropdown.Item>
              <Link href="/settings/changeEmail">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#aboutUs">About us</Navbar.Link>
          <Navbar.Link href="/lostItems">Lost items</Navbar.Link>
          <Navbar.Link href="foundItems">Found items</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/*   
    <Navbar fluid>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Lost & Found
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="/login" className="me-2" color="dark">
          Login
        </Button>
        <Button href="/register" className="me-2">
          Register
        </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#aboutUs">About us</Navbar.Link>

        <Navbar.Link href="/lostItems">Lost items</Navbar.Link>
        <Navbar.Link href="foundItems">Found items</Navbar.Link>
        <Navbar.Link href="">My profile</Navbar.Link>
      </Navbar.Collapse>
    </Navbar></> */}
    </>
  );
}
