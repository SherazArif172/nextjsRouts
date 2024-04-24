"use client";
import { useRouter } from "next/navigation";

const Postsbtn = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push(`/posts/${id}`)}>view posts</button>
    </div>
  );
};

export default Postsbtn;
