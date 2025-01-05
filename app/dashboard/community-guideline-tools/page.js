import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import SearchInput from "@/app/_components/formControls/SearchInput";
import ModerationFilter from "@/app/_components/ModerationFilter";
import Card from "@/app/_components/Card";
import { Divider } from "antd";
import ButtonCustom from "@/app/_components/Button";
import { SelectInput } from "@/app/_components/formControls";
import { spartanFont } from "@/app/font";

export default function Page() {
  return (
    <>
      <DashboardHeader title="Community Guidelines Enforcement Tools">
        <ButtonCustom className="ml-auto">
          <img src="/edit-icon.svg" />
          Create Warning Template
        </ButtonCustom>
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="space-y-8 divide-slate-300">
          <div className="flex items-center gap-3 max-w-3xl">
            <SearchInput />
            <ModerationFilter />
          </div>
          <Divider />
          <div className="column-1 md:columns-2 lg:columns-2 xl:columns-3 gap-x-4 gap-y-4">
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                {/* <img src="/image-skeleton.jpg" /> */}
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                {/* <img src="/image-skeleton.jpg" /> */}
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
            <Card varient="large" className="inline-block w-full mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <BadgeCustom>Post</BadgeCustom>
                <BadgeCustom>Spam</BadgeCustom>
                <BadgeCustom>
                  <img src="/flag-icon.svg" />
                  03
                </BadgeCustom>
                <BadgeCustom>
                  <img src="/bill-icon.svg" />
                  02
                </BadgeCustom>
              </div>
              <figure className="space-y-4">
                <img src="/image-skeleton.jpg" />
                <figcaption className="text-sm font-light text-slate-600">
                  Its not only writers who can benefit from this free online
                  tool. If youre a programmer whos working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. Its a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-[80fr_20fr] gap-3">
                  <h3 className="col-span-full text-xs font-medium">
                    Temporary block
                  </h3>
                  <SelectInput
                    defaultValue="24 Hours"
                    className="font-normal text-sm text-center !w-full"
                  />
                  <ButtonCustom varient="gray">
                    <img src="/check-icon.svg" />
                  </ButtonCustom>
                  <h3
                    className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
                  >
                    Or
                  </h3>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Permanent Block
                  </ButtonCustom>
                </div>
              </figure>
            </Card>
          </div>
        </div>
      </DashboardMainContainer>
    </>
  );
}
