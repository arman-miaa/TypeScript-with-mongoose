import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Card {
  _id: string;
  title: string;
  description: string;
}

// ✅ Corrected fetchData function with TypeScript
const fetchData = async ({ pageParam = 1 }: { pageParam: number }) => {
  const response = await axios.get(
    `http://localhost:5000/api/getAllCards?page=${pageParam}&limit=5`
  );
  return response.data; // Ensure only data is returned
};

function Banner() {
  const {data, isLoading, isError, error, fetchNextPage,  isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextPage : undefined;
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  },[fetchNextPage,inView])

  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="text-center">
      {data?.pages.map((page) =>
        page.data.map((item: Card) => (
          <div key={item._id} className="mt-4 p-4 border">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))
      )}

      <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
    </div>
  );
}

export default Banner;
