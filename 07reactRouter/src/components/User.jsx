import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function User() {
  const { username } = useParams();
  const [data, setData] = useState();

  //   const githubInfo = useLoaderData();

  //   loads the component after the first render and keeps reloading the component when dependency [] changes
  useEffect(() => {
    fetch("https://api.github.com/users/manthan-ks-66")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <div className="flex flex-col items-center py-12">
      <div className="max-w-lg text-center">
        <img
          src="/manthanImage.jpg"
          alt="User Profile"
          className="rounded-full border-4 border-gray-600 shadow-lg mb-4"
        />
        <h2 className="text-3xl font-semibold">Welcome {username}</h2>
        <p className="text-gray-400 mt-2">
          Frontend Developer | React Enthusiast
        </p>
        <div className="mt-4">
          <a
            target="_blank"
            href="https://github.com/manthan-ks-66"
            className="text-blue-400 hover:underline mx-2"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manthan-srivastava-644a8927b/"
            className="text-blue-400 hover:underline mx-2"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p className="text-gray-400 mt-2">
            Following: {data?.following} | Followers: {data?.followers}
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;

// export const githubInfoLoader = async () => {
//   const res = await fetch("https://api.github.com/users/manthan-ks-66");
//   return res.json();
// };
