export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts = data;
  return new Response(JSON.stringify({ posts: posts }), {
    headers: { "Content-Type": "application/json" },
  });
}
