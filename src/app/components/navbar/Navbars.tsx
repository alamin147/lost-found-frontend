"use client";

import { Button, Navbar } from "flowbite-react";

export function Navbars() {
  return (
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
    </Navbar>
  );
}
