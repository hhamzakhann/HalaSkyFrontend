import Logo from "@/app/_components/Logo";
import Container from "./Container";
import NavigationLinks from "@/app/_components/NavigationLinks";

export default function Navigation({ secondaryNav }) {
  return (
    <>
      <div className="border-b border-slate-200">
        <Container>
          <header className="flex items-center justify-between  ">
            <Logo varient="secondary" />
            <NavigationLinks />
          </header>
        </Container>
      </div>
      {secondaryNav}
    </>
  );
}
