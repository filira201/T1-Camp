import { Outlet } from "react-router";

import { Container, Header } from "@/components";

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
