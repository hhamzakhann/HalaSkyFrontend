import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import SearchInput from "@/app/_components/formControls/SearchInput";
import ModerationFilter from "@/app/_components/ModerationFilter";
import Card from "@/app/_components/Card";
import { Divider } from "antd";
import LinkButton from "@/app/_components/LinkButton";
import ButtonCustom from "@/app/_components/Button";

export default function Page() {
  return (
    <>
      <DashboardHeader title="Post & Comment Moderation">
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
          <div className="columns-3 gap-x-4 gap-y-4">
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
                  It's not only writers who can benefit from this free online
                  tool. If you're a programmer who's working on a project where
                  blocks of text are needed, this tool can be a great way to get
                  that. It's a good way to test your programming and that the
                  tool being
                </figcaption>
                <div className="grid md:grid-cols-2 gap-3">
                  <LinkButton className="!text-slate-900">Delete</LinkButton>
                  <ButtonCustom varient="gray">Approve</ButtonCustom>
                  <ButtonCustom varient="gray" className="col-span-full">
                    Issued Warning
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
