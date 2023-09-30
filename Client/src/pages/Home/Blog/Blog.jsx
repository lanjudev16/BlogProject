import { useGetPostQuery } from "../../../features/api/PostsApi";
import SignleBookMark from "./SignleBookMark";
const Blog = () => {
  const {data:blogPost}=useGetPostQuery()
  return (
    <div className="lg:w-[1140px] mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-black uppercase mb-10 ">Recent Blog</h2>
      <div className="grid lg:grid-cols-2 items-center gap-5">
        {blogPost?.map((singleBlogPost, index) => (
          <SignleBookMark key={index} singleBlogPost={singleBlogPost}></SignleBookMark>
        ))}
      </div>
    </div>
  );
};

export default Blog;
