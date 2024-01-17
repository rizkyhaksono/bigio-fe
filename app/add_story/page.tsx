import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AddStory() {
  return (
    <>
      <div>
        <div className={title()}>Add Chapter</div>
        <Card className="mt-5 h-screen">
          <div className="ml-10 flex gap-10">
            <p>Title</p>
            <p>Writer Name</p>
          </div>
          <div className="ml-10 flex gap-10">
            <p>Synopsis</p>
          </div>
          <div className="ml-10 flex gap-10">
            <p>Category</p>
            <p>Tags/Keyword Story</p>
          </div>
          <div className="ml-10 flex gap-10">
            <p>Cover Image</p>
            <p>Status</p>
          </div>
        </Card>
      </div>
    </>
  );
}
