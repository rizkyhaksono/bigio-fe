"use client";

import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import { DotIcon } from "@/components/icons";
import { useGetStoryQuery } from "@/redux/api/storiesApi";
import { useGetStatusQuery } from "@/redux/api/statusesApi";
import { useGetTagsQuery } from "@/redux/api/tagsApi";
import { useGetStoryTagQuery } from "@/redux/api/storyTagApi";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { useMemo, useState } from "react";

export default function StoryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: dataStories, error: errorStories, isLoading: loadingStories } = useGetStoryQuery(arguments);
  const { data: dataStatus, error: errorStatus, isLoading: loadingStatus } = useGetStatusQuery(arguments);
  const { data: dataTags, error: errorTags, isLoading: loadingTags } = useGetTagsQuery(arguments);
  const { data: dataStoryTags, error: errorStoryTag, isLoading: loadingStoryTag } = useGetStoryTagQuery(arguments);

  const statuses = dataStatus && dataStatus.data;
  const tags = dataTags && dataTags.data;
  const storyTags = dataStoryTags && dataStoryTags.data;

  const [selectedKeys, setSelectedKeys] = useState(new Set(["Technology"]));
  const [selectedStatus, setSelectedStatus] = useState(new Set(["Publish"]));

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
    setSelectedStatus(keys);
  };

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);
  const selectedStatusValue = useMemo(() => Array.from(selectedStatus).join(", ").replaceAll("_", " "), [selectedStatus]);

  return (
    <>
      <Breadcrumbs className="mb-10">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Story</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-row justify-between mx-auto">
        <div className={title()}>List Story</div>
        <div className="flex flex-row items-center gap-3">
          <Input className="w-64" size="sm" type="text" placeholder="Search by writer's name/title story" />
          <Button color="default" size="lg" onPress={onOpen}>
            Filter
          </Button>
          <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Filter</ModalHeader>
                  <div className="flex flex-col">
                    <p className="ml-10">Category</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="capitalize mx-10">
                          {selectedValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu onSelectionChange={() => handleSelectionChange} aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedKeys}>
                        <DropdownItem key="technology">Technology</DropdownItem>
                        <DropdownItem key="financial">Financial</DropdownItem>
                        <DropdownItem key="health">Health</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="flex flex-col mt-5">
                    <p className="ml-10">Status</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="capitalize mx-10">
                          {selectedStatusValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu onSelectionChange={() => handleSelectionChange} aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedStatus}>
                        <DropdownItem key="publish">Publish</DropdownItem>
                        <DropdownItem key="draft">Draft</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <ModalFooter className="mt-16">
                    <Button color="default" variant="light" onPress={onClose}>
                      Reset
                    </Button>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Filter
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Link href={"/add_story"}>
            <Button color="default" size="lg">
              Add Story
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        {(loadingStories || loadingStatus || loadingTags || loadingTags || loadingStoryTag) && (
          <div>
            <Skeleton className="h-3 w-3/5 rounded-lg mt-5" />
            <Skeleton className="h-3 w-4/5 rounded-lg mt-5" />
            <Skeleton className="h-3 w-5/5 rounded-lg mt-5" />
          </div>
        )}

        {(errorStories || errorStatus || errorTags || errorStoryTag) && <div>Error: {JSON.stringify({ errorStories, errorStatus, errorTags, errorStoryTag })}</div>}

        {dataStories && (
          <Table aria-label="Story List Table">
            <TableHeader>
              <TableColumn>Title</TableColumn>
              <TableColumn>Writer</TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Tags</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {dataStories.data[0].map((story: any) => (
                <TableRow key={story.story_id}>
                  <TableCell>{story.title}</TableCell>
                  <TableCell>{story.author}</TableCell>
                  <TableCell>{story.category}</TableCell>
                  <TableCell>{statuses && statuses.find((status: any) => status.status_id === story.status_id)?.status_name}</TableCell>
                  <TableCell>
                    {storyTags &&
                      storyTags
                        .filter((storyTag: any) => storyTag.story_id === story.story_id)
                        .map((storyTag: any) => (
                          <span className="bg-slate-100 dark:bg-gray-800 py-1 px-4 rounded-lg text-black dark:text-white" key={storyTag.tag_id}>
                            {tags && tags.filter((tag: any) => tag.tag_id === storyTag.tag_id).map((matchingTag: any) => matchingTag.tag_name)}
                            {", "}
                          </span>
                        ))}
                  </TableCell>
                  <TableCell>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="ghost">
                          <DotIcon />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="story-detail">Story Detail</DropdownItem>
                        <DropdownItem key="edit-story">Edit Story</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
}
