import { useContext, useState } from "react";
import styled from "styled-components";
import { pageNumber } from "../../App";
function Buttons() {
  const { setPostsPerPage, setFilter } = useContext(pageNumber);

  const recentData = (e) => {
    setFilter(e.target.value);
  };
  const selectNumber = (e) => {
    setPostsPerPage(e.target.value);
  };

  return (
    <Div>
      <select onChange={recentData}>
        <option value="created">생성순</option>
        <option value="updated">업데이트순</option>
        <option value="comments">댓글순</option>
      </select>
      <select onChange={selectNumber}>
        <option value="10">10개</option>
        <option value="20">20개</option>
        <option value="50">50개</option>
      </select>
    </Div>
  );
}
export default Buttons;

const Div = styled.div`
  display: flex;
`;
