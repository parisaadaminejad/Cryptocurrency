import styled from "styled-components";
const Style = styled.div`
  overflow: hidden;
  .header-control {
    svg {
      vertical-align: middle;
    }
  }

  .bg {
    height: 100vh;
    padding: 50px;
  }

  .btn {
    padding-top: 15px;
    cursor: pointer;
  }

  .btn-light {
    background-color: #ddd;
    color: #ffffff;
    cursor: pointer;
  }

  .btn-dark {
    background-color: #ffffff;
    color: #222;
  }
`;
export default Style;
