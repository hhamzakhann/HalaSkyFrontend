import ButtonCustom from "@/app/_components/Button";
import { DashboardHeader } from "@/app/_components/UI";
import { spartanFont } from "@/app/font";

export default function Page() {
  return (
    <>
      <DashboardHeader title="Automated FAQ Management">
        <ButtonCustom className={`ml-auto ${spartanFont.className}`}>
          <img src="/edit-icon.svg" />
          <span>Create FAQ</span>
        </ButtonCustom>
      </DashboardHeader>
    </>
  );
}
