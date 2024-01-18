"use client";

import { subtitle, title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Input, Textarea } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import Link from "next/link";

export default function AddStory() {
  return (
    <>
      <div>
        <Breadcrumbs className="mb-10">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/story">Story</BreadcrumbItem>
          <BreadcrumbItem>Add Story</BreadcrumbItem>
        </Breadcrumbs>

        <div className={title()}>Add Story</div>
        <Card className="mt-5">
          <Card className="my-5 mx-10 py-10">
            <div className="flex flex-row gap-3 mx-10">
              <div className="w-full">
                <p className={subtitle()}>Title</p>
                <Input fullWidth size="sm" type="email" placeholder="Enter your title" />
              </div>
              <div className="w-full">
                <p className={subtitle()}>Writer Name</p>
                <Input fullWidth size="sm" type="email" placeholder="Enter your title" />
              </div>
            </div>
          </Card>
          <Card className="mb-5 mx-10 py-10">
            <div className="flex flex-row gap-3 mx-10">
              <div className="w-full">
                <p className={subtitle()}>Synopsis</p>
                <Textarea fullWidth placeholder="Enter your synopsis" className="mt-2" />
              </div>
            </div>
          </Card>
          <Card className="mb-5 mx-10 py-10">
            <div className="flex flex-row gap-3 mx-10">
              <div className="w-full">
                <p className={subtitle()}>Synopsis</p>
                <Textarea fullWidth placeholder="Enter your synopsis" className="mt-2" />
              </div>
            </div>
          </Card>
          <div className="flex justify-end">
            <Button type="submit" color="default" size="md" className="mr-10">
              Send Data
            </Button>
          </div>
          <Divider className="my-4" />
          <div className="flex justify-end mx-10">
            <Link href={"/add_chapter"}>
              <Button color="default" size="md">
                Add Chapter
              </Button>
            </Link>
          </div>
          <Table className="px-10 py-10" aria-label="Example empty table">
            <TableHeader>
              <TableColumn>Title</TableColumn>
              <TableColumn>Last Updated</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
