import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "./Post";
import Paging from "./Paging";
import { pageNumber } from "../../App";

function PageNation() {
  const { postsPerPage, setPostsPerPage, filter, setfilter } =
    useContext(pageNumber);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({});
  }
  console.log(filter);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues?per_page=100&sort=${filter}`
      );
      console.log(filter);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [filter]);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Post posts={currentPosts} loading={loading} />
      <Paging
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
}
export default PageNation;
