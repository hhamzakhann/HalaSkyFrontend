import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/app/_styles/global.css";
import { poppinsFont } from "./font";

// import { Poppins, League_Spartan } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const spartan = League_Spartan({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export const spartanFont = spartan.className;

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | Halasky",
    default: "Welcome | Halasky",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className}`}>
        <main>
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
}
