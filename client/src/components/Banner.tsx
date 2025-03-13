import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Card {
  _id: string;
  title: string;
  description: string;
}

function Banner() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, error } = useQuery<Card[]>({
    queryKey: ["cards", page],
    queryFn: async () => {
      const response = await axios(
        `http://localhost:5000/api/getAllCards?page=${page}&limit=5`
      );
      return response.data.data;
    },
  });

  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="">
      {data?.map((item) => (
        <div
          key={item._id}
          className="flex justify-center flex-col items-center"
        >
          <h3 className="mt-8">{item.title}</h3> <br />
          <p>{item._id}</p>
          <p>{item.description}</p>
        </div>
      ))}

      <button
        className="cursor-pointer bg-purple-400 p-2 ml-2 text-white"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
      >
        Previous Data
      </button>

      <button
        className="cursor-pointer bg-purple-400 p-2 ml-2 text-white"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={data && data.length < 5}
      >
        Next Page
      </button>
    </div>
  );
}

export default Banner;
