import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "../Menu/Index";
import Greeting from "../Greeting/Index";

const Main = styled(Box)(
  () => `
          margin-top: 88px;
          flex: 1 1 auto;
          overflow: auto;
          margin:100px;
  `
);
const MainContent = styled(Box)(
  () => `
          margin-top: 80px;
  `
);

const Layout = () => {
  return (
    <>
      <Main>
        <Greeting />
        <MainContent>
          <Outlet />
        </MainContent>
      </Main>
      <Header />
    </>
  );
};
export default Layout;
