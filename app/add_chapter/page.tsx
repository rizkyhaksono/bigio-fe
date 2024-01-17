"use client";

import { subtitle, title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import MyEditor from "@/components/rich-text";

export default function AddChapter() {
  return (
    <>
      <div>
        <Breadcrumbs className="mb-10">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/story">Story</BreadcrumbItem>
          <BreadcrumbItem href="/add_story">Add Story</BreadcrumbItem>
          <BreadcrumbItem>Add Chapter</BreadcrumbItem>
        </Breadcrumbs>

        <div className={title()}>Add Chapter</div>
        <Card className="mt-5 h-screen">
          <Card className="my-5 mx-10 py-10">
            <div className="mx-10">
              <p className={subtitle()}>Title</p>
              <Input className="mt-2" size="sm" type="email" placeholder="Enter your title" fullWidth />
            </div>
          </Card>
          <Divider className="my-4" />
          <Card className="mx-10 px-19">
            <MyEditor />
          </Card>
          <div className="mx-10 flex gap-3 pt-10 justify-end">
            <Button color="default" variant="bordered" size="md">
              Cancel
            </Button>
            <Button color="primary" variant="shadow" size="md">
              Save
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
