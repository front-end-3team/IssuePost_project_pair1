import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Layout/Header/Header";

function Detail() {
  const { id } = useParams();
  const [detailPage, setDetailPage] = useState([]);
  const findDetail = detailPage.find((el) => el.id == id);
  console.log(findDetail);

  const fetchPosts = async () => {
    const res = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues?per_page=100`
    );
    console.log(res);
    setDetailPage(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {findDetail ? (
        <>
          <Header />
          <Page>
            <ListHeader>
              <ListHeaderLeft>
                <ListHeader_1>Issue Detail</ListHeader_1>
                <ListHeader_2>
                  angular / <span>angular - cli</span>
                </ListHeader_2>
              </ListHeaderLeft>
            </ListHeader>
            <List>
              <List_header>
                <div>{findDetail.id}</div>
                <div>{findDetail.title}</div>
              </List_header>
              <Body>{findDetail.body}</Body>
            </List>
          </Page>
        </>
      ) : (
        "Loading중......"
      )}
    </>
  );
}
export default Detail;
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
const List_header = styled.div`
  text-align: center;
  & div {
    font-size: 30px;
    margin: 20px 0;
  }
`;
const Body = styled.div`
  font-size: 20px;
  margin-top: 20px;
  width: 95%;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;
