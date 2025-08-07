import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/utils.css";

export const metadata = {
  title: "Josh Mock",
  description: "Check out my web developer portfolio",
};

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="general-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
