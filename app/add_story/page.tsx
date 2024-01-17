"use client";

import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Input, Textarea } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
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
        <Card className="mt-5 h-screen">
          <Card className="my-5 mx-10 py-10">
            <div className="ml-10 flex justify-evenly">
              <div>
                <p>Title</p>
                <Input size="sm" type="email" placeholder="Enter your title" />
              </div>
              <p>Writer Name</p>
            </div>
          </Card>
          <Card className="my-5 mx-10 py-10">
            <div className="ml-10 flex justify-around">
              <div>
                <p>Synopsis</p>
                <Textarea placeholder="Enter your synopsis" className="max-w-xs" />
              </div>
            </div>
          </Card>
          <div className="ml-10 flex gap-10">
            <p>Category</p>
            <p>Tags/Keyword Story</p>
          </div>
          <div className="ml-10 flex gap-10">
            <p>Cover Image</p>
            <p>Status</p>
          </div>
          <Divider className="my-4" />
          <div className="flex justify-end mx-10 my-10">
            <Link href={"/add_chapter"}>
              <Button color="default" size="md">
                Add Chapter
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
