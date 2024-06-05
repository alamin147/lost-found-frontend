"use client";

import { userVerification } from "@/app/auth/auth";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";

export function Navbars() {
  const users: any = userVerification();
  console.log(users);
  return (
    <>
      <Navbar fluid>
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
          <Navbar.Link href="/foundItems">Found items</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
