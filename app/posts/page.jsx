import Posts from "../components/Posts";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  // return data.data;
  console.log(data.data);
  return Array.isArray(data.data) ? data.data : [data.data];
}

const page = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl text-center my-7 font-bold">Posts</h1>

      {posts.map((post) => (
        <Posts key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default page;
