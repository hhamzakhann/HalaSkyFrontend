import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/app/_styles/global.css";
import "@/app/_styles/ngprogress.css"; // Import default styles
import { poppinsFont } from "./font";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./provider";
import { BlogProvider } from "./_contexts/BlogContext";

import ProgressBarLoading from "./_components/ProgressBarLoading";
import { RegisterProvider } from "./_contexts/RegisterContext";
import { ForgotPasswordProvider } from "./_contexts/ForgotPasswordContext";

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
          <Toaster />
          <AntdRegistry>
            <RegisterProvider>
              <AuthProvider>
                <BlogProvider>
                  <ForgotPasswordProvider>
                    <ProgressBarLoading />
                    {children}
                  </ForgotPasswordProvider>
                </BlogProvider>
              </AuthProvider>
            </RegisterProvider>
          </AntdRegistry>
        </main>
      </body>
    </html>
  );
}
