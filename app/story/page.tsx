"use client";

import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import Link from "next/link";

export default function StoryPage() {
  return (
    <>
      <div className="flex flex-row justify-between mx-auto">
        <div className={title()}>List Story</div>
        <div className="flex flex-row items-center gap-3">
          <Input className="w-64" type="text" label="Search" placeholder="Search by writer's name/title story" />
          <Link href={"/add_story"}>
            <Button color="default">Add Story</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Writes</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Tags</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
              <TableCell>Paused</TableCell>
              <TableCell>Paused</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
