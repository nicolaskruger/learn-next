import { CounterProvider } from "@/components/counter-provider/counter-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
};

export default Layout;
