import { Container, Header } from "@/components";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
