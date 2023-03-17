import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {id}
      <h1>상세페이지당~~~~~</h1>
    </>
  );
}
export default Detail;
