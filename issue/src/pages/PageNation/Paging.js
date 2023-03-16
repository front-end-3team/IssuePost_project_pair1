import styled from "styled-components";

function Paging({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <Ul>
        {pageNumbers.map((number) => (
          <Li key={number}>
            <A onClick={() => paginate(number)} href="/">
              {number}
            </A>
          </Li>
        ))}
      </Ul>
    </nav>
  );
}
export default Paging;

const Ul = styled.ul`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: gray;
  margin-bottom: 100px;
`;
const Li = styled.li`
  margin: 30px;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
  opacity: 0.5;
`;
