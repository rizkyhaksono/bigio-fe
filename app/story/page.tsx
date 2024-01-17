"use client";

import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import { DotIcon } from "@/components/icons";
import { useGetStoryQuery } from "@/redux/api/storiesApi";
import { useGetStatusesQuery } from "@/redux/api/statusesApi";
import { useGetTagsQuery } from "@/redux/api/tagsApi";
import { useGetStoryTagQuery } from "@/redux/api/storyTagApi";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

export default function StoryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: dataStories, error: errorStories, isLoading: loadingStories } = useGetStoryQuery(arguments);
  const { data: dataStatus, error: errorStatus, isLoading: loadingStatus } = useGetStatusesQuery(arguments);
  const { data: dataTags, error: errorTags, isLoading: loadingTags } = useGetTagsQuery(arguments);
  const { data: dataStoryTags, error: errorStoryTag, isLoading: loadingStoryTag } = useGetStoryTagQuery(arguments);

  const statuses = dataStatus && dataStatus.data;
  const tags = dataTags && dataTags.data;
  const storyTags = dataStoryTags && dataStoryTags.data;

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
                  <ModalBody>
                    <p>Categories</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat">Categories</Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="financial">Financial</DropdownItem>
                        <DropdownItem key="technology">Technology</DropdownItem>
                        <DropdownItem key="health">Health</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <p className="mt-2">Status</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat">Status</Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="financial">Publish</DropdownItem>
                        <DropdownItem key="technology">Draft</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ModalBody>
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
        {(loadingStories || loadingStatus || loadingTags || loadingTags) && (
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
              <TableColumn>Writes</TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Tags</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {dataStories.data.map((story: any) => (
                <TableRow key={story.StoryID}>
                  <TableCell>{story.Title}</TableCell>
                  <TableCell>{story.Author}</TableCell>
                  <TableCell>{story.Category}</TableCell>
                  <TableCell>{statuses && statuses.filter((status: any) => status.StatusID === story.StatusID).map((filteredStatus: any) => filteredStatus.StatusName)}</TableCell>
                  <TableCell>
                    {storyTags &&
                      storyTags
                        .filter((storyTag: any) => storyTag.StoryID === story.StoryID)
                        .map((storyTag: any) =>
                          tags && tags.find((tag: any) => tag.TagID === storyTag.TagID) ? (
                            <span className="bg-slate-100 dark:bg-gray-800 py-1 px-4 rounded-lg text-black dark:text-white" key={storyTag.TagID}>
                              {tags.find((tag: any) => tag.TagID === storyTag.TagID)?.TagName},{" "}
                            </span>
                          ) : null
                        )}
                  </TableCell>
                  <TableCell>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="ghost">
                          <DotIcon />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="financial">Story Detail</DropdownItem>
                        <DropdownItem key="technology">Edit Story</DropdownItem>
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
