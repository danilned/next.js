import "@/styles/globals.scss";

export const metadata = {
  title: "D42",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
