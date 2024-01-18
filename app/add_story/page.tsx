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
import { useGetStoryQuery, usePostStoryMutation, usePutStoryMutation, useDeleteStoryMutation } from "@/redux/api/storiesApi";
import { Skeleton } from "@nextui-org/skeleton";
import { useGetChapterQuery } from "@/redux/api/chapterApi";
import { useEffect, useMemo, useState } from "react";
import { Chip } from "@nextui-org/chip";

export default function AddStory() {
  const { data: dataStory, error: errorStory, isLoading: loadingStory } = useGetStoryQuery(arguments);
  const { data: dataChapter, error: errorChapter, isLoading: loadingChapter } = useGetChapterQuery(arguments);

  const [postStoryMutation] = usePostStoryMutation();
  const [putStoryMutation] = usePutStoryMutation();
  const [deleteStoryMutation] = useDeleteStoryMutation();

  const [selectedKeys, setSelectedKeys] = useState(new Set(["Technology"]));
  const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const renderContent = () => {
    if (loadingChapter || loadingStory) {
      return (
        <div>
          <Skeleton className="h-3 w-3/5 rounded-lg mt-5" />
          <Skeleton className="h-3 w-4/5 rounded-lg mt-5" />
          <Skeleton className="h-3 w-5/5 rounded-lg mt-5" />
        </div>
      );
    }

    if (errorChapter || errorStory) {
      return <div>Error: {JSON.stringify({ errorChapter, errorStory })}</div>;
    }

    return (
      <div>
        <div className={title()}>Add Story</div>
        <Card className="mt-5">
          <Card className="my-5 mx-10 py-10">
            <div className="flex flex-row gap-3 mx-10">
              <div className="w-full">
                <p className={subtitle()}>Title</p>
                <Input fullWidth size="sm" type="text" placeholder="Enter your title" />
              </div>
              <div className="w-full">
                <p className={subtitle()}>Writer Name</p>
                <Input fullWidth size="sm" type="text" placeholder="Enter your writer" />
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
                <p className={subtitle()}>Categories</p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedKeys} onSelectionChange={() => setSelectedKeys}>
                    <DropdownItem key="technology">Technology</DropdownItem>
                    <DropdownItem key="financial">Financial</DropdownItem>
                    <DropdownItem key="health">Health</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="w-full">
                <p className={subtitle()}>Tags</p>
                <Chip>Chip</Chip>
              </div>
            </div>
            <div className="flex flex-row gap-3 mx-10">
              <div className="w-full">
                <p className={subtitle()}>Image</p>
                <input
                  className="block mt-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div className="w-full">
                <p className={subtitle()}>Status</p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedKeys} onSelectionChange={() => setSelectedKeys}>
                    <DropdownItem key="technology">Technology</DropdownItem>
                    <DropdownItem key="financial">Financial</DropdownItem>
                    <DropdownItem key="health">Health</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </Card>
          <div className="flex justify-end">
            <Button type="submit" color="default" size="md" className="mr-10">
              Send Data
            </Button>
          </div>
          <Divider className="my-6" />
          <div className="flex justify-end mx-10">
            <Link href={"/add_chapter"}>
              <Button color="default" size="md">
                Add Chapter
              </Button>
            </Link>
          </div>
          <Table className="px-10 py-10" aria-label="Chapter Table">
            <TableHeader>
              <TableColumn>Title</TableColumn>
              <TableColumn>Last Updated</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {dataChapter.data.map((chapter: any) => (
                <TableRow key={chapter.chapter_id}>
                  <TableCell>{chapter.title}</TableCell>
                  <TableCell>{formatDate(chapter.updated_at)}</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div>
        <Breadcrumbs className="mb-10">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/story">Story</BreadcrumbItem>
          <BreadcrumbItem>Add Story</BreadcrumbItem>
        </Breadcrumbs>
        {renderContent()}
      </div>
    </>
  );
}
