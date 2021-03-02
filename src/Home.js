import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:3000/blogs"
  );

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <h2>Failed to load or data not found</h2>}
      {isPending && <h2>Loading...</h2>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
