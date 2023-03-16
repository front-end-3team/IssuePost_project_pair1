import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <>
      {id}
      <h1>상세페이지당~~~~~</h1>
    </>
  );
}
export default Detail;
