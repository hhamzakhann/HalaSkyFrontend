import { poppinsFont, spartanFont } from "@/app/font";
import ButtonCustom from "@/app/_components/Button";
import Card from "@/app/_components/Card";
import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <DashboardHeader title="Content Management" />
      <DashboardMainContainer>
        <p className="mb-3 font-medium text-sm text-gray">10 Blog Found</p>
        <div className="space-y-4 overflow-auto">
          <Card
            varient="large"
            className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-14"
          >
            <div className="grid sm:grid-cols-[250px_1fr] gap-5">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src="/image-skeleton.jpg"
                />
              </div>
              <div className={`flex flex-col ${spartanFont.className}`}>
                <div className="space-y-2">
                  <h2 className="font-medium text-2xl">Blog Title</h2>
                  <h3 className="font-light text-sm">Author &bull; Category</h3>
                  <p
                    className={`${poppinsFont.className} font-light text-sm text-slate-600 leading-7`}
                  >
                    Its not only writers who can benefit from this free online
                    tool. If youre a programmer whos working on a project where
                    blocks of text are needed, this tool can be a great way to
                    get that. Its a good way to test your programming and that
                    the tool being
                  </p>
                </div>
                <p className="mt-auto font-light text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[auto_auto_auto] gap-5 h-full content-center justify-center">
                <ButtonCustom varient="gray">
                  <img src="/edit-icon.svg" />
                  Edit
                </ButtonCustom>
                <ButtonCustom varient="danger">
                  <img src="/trash-icon.svg" />
                  Remove
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/eye-icon.svg" />
                </ButtonCustom>
                <ButtonCustom varient="gray" className="col-span-full">
                  <img src="/globe-icon.svg" />
                  Publish
                </ButtonCustom>
                <div className="col-span-full flex items-center justify-between font-light text-sm">
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    105 Click
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    1,902 Impression
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card
            varient="large"
            className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-14"
          >
            <div className="grid sm:grid-cols-[250px_1fr] gap-5">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src="/image-skeleton.jpg"
                />
              </div>
              <div className={`flex flex-col ${spartanFont.className}`}>
                <div className="space-y-2">
                  <h2 className="font-medium text-2xl">Blog Title</h2>
                  <h3 className="font-light text-sm">Author &bull; Category</h3>
                  <p
                    className={`${poppinsFont.className} font-light text-sm text-slate-600 leading-7`}
                  >
                    Its not only writers who can benefit from this free online
                    tool. If youre a programmer whos working on a project where
                    blocks of text are needed, this tool can be a great way to
                    get that. Its a good way to test your programming and that
                    the tool being
                  </p>
                </div>
                <p className="mt-auto font-light text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[auto_auto_auto] gap-5 h-full content-center justify-center">
                <ButtonCustom varient="gray">
                  <img src="/edit-icon.svg" />
                  Edit
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/trash-icon.svg" />
                  Remove
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/eye-icon.svg" />
                </ButtonCustom>
                <ButtonCustom varient="gray" className="col-span-full">
                  <img src="/globe-icon.svg" />
                  Publish
                </ButtonCustom>
                <div className="col-span-full flex items-center justify-between font-light text-sm">
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    105 Click
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    1,902 Impression
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card
            varient="large"
            className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-14"
          >
            <div className="grid sm:grid-cols-[250px_1fr] gap-5">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src="/image-skeleton.jpg"
                />
              </div>
              <div className={`flex flex-col ${spartanFont.className}`}>
                <div className="space-y-2">
                  <h2 className="font-medium text-2xl">Blog Title</h2>
                  <h3 className="font-light text-sm">Author &bull; Category</h3>
                  <p
                    className={`${poppinsFont.className} font-light text-sm text-slate-600 leading-7`}
                  >
                    Its not only writers who can benefit from this free online
                    tool. If youre a programmer whos working on a project where
                    blocks of text are needed, this tool can be a great way to
                    get that. Its a good way to test your programming and that
                    the tool being
                  </p>
                </div>
                <p className="mt-auto font-light text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[auto_auto_auto] gap-5 h-full content-center justify-center">
                <ButtonCustom varient="gray">
                  <img src="/edit-icon.svg" />
                  Edit
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/trash-icon.svg" />
                  Remove
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/eye-icon.svg" />
                </ButtonCustom>
                <ButtonCustom varient="gray" className="col-span-full">
                  <img src="/globe-icon.svg" />
                  Publish
                </ButtonCustom>
                <div className="col-span-full flex items-center justify-between font-light text-sm">
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    105 Click
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    1,902 Impression
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card
            varient="large"
            className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-14"
          >
            <div className="grid sm:grid-cols-[250px_1fr] gap-5">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src="/image-skeleton.jpg"
                />
              </div>
              <div className={`flex flex-col ${spartanFont.className}`}>
                <div className="space-y-2">
                  <h2 className="font-medium text-2xl">Blog Title</h2>
                  <h3 className="font-light text-sm">Author &bull; Category</h3>
                  <p
                    className={`${poppinsFont.className} font-light text-sm text-slate-600 leading-7`}
                  >
                    Its not only writers who can benefit from this free online
                    tool. If youre a programmer whos working on a project where
                    blocks of text are needed, this tool can be a great way to
                    get that. Its a good way to test your programming and that
                    the tool being
                  </p>
                </div>
                <p className="mt-auto font-light text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[auto_auto_auto] gap-5 h-full content-center justify-center">
                <ButtonCustom varient="gray">
                  <img src="/edit-icon.svg" />
                  Edit
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/trash-icon.svg" />
                  Remove
                </ButtonCustom>
                <ButtonCustom varient="gray">
                  <img src="/eye-icon.svg" />
                </ButtonCustom>
                <ButtonCustom varient="gray" className="col-span-full">
                  <img src="/globe-icon.svg" />
                  Publish
                </ButtonCustom>
                <div className="col-span-full flex items-center justify-between font-light text-sm">
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    105 Click
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="/impressions-icon.svg" />
                    1,902 Impression
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </DashboardMainContainer>
    </div>
  );
}
