import styled from "styled-components";
import Buttons from "../../components/Button/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncIssue } from "../../issueSlice/issueSlice";

function ListPage() {
  const dispatch = useDispatch();

  const issues = useSelector((state) => {
    return state.asyncIssue.issues;
  });

  const status = useSelector((state) => {
    return state.asyncIssue.status;
  });

  useEffect(() => {
    dispatch(asyncIssue());
  }, []);

  console.log(issues);
  console.log(status);
  return (
    <Page>
      <ListHeader>
        <ListHeaderLeft>
          <ListHeader_1>Issue Story</ListHeader_1>
          <ListHeader_2>
            angular / <span>angular - cli</span>
          </ListHeader_2>
        </ListHeaderLeft>
        <Buttons />
      </ListHeader>
      {status === "Loading" ? (
        <h1>로딩중</h1>
      ) : (
        issues.map((el) => (
          <List>
            <ListTop>
              <h2>{el.id}</h2>
              <div>{el.title}</div>
              <span>댓글수 : {el.comments}</span>
            </ListTop>
            <ListCenter>{el.body}</ListCenter>
            <ListBottom>{el.created_at}</ListBottom>
          </List>
        ))
      )}
    </Page>
  );
}
export default ListPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 80%;
  margin: 35px 0;
`;
const ListHeaderLeft = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ListHeader_1 = styled.span`
  font-size: 45px;
  font-weight: 700;
`;
const ListHeader_2 = styled.span`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  font-size: 20px;

  & span {
    color: gray;
    font-weight: 700;
  }
`;
const List = styled.div`
  padding: 20px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  -webkit-box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  -moz-box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  border-radius: 20px;
  background-color: rgb(242, 242, 242);
  margin-bottom: 50px;
`;
const ListTop = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  max-width: 95%;
  justify-content: space-between;
  & h2 {
    font-size: 20px;
    font-weight: bold;
  }
  & div {
    font-size: 23px;
    font-weight: 600;
  }
`;
const ListCenter = styled.div`
  max-width: 85%;
`;
const ListBottom = styled.div`
  margin-top: 25px;
`;
