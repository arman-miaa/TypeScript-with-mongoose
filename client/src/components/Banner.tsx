import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

interface Card {
  _id: string;
  title: string;
  body: string;
}

// const fetchCards = async (): Promise<Card[]> => {
//   const response = await axios("http://localhost:5000/api/getAllCards");
//   if (!response) {
//     throw new Error("Failed to fetch data");
//   }



 
//   return response.data.data
// };

function Banner() {

  const { data, isLoading, isError, error } = useQuery<Card[]>({
    queryKey: ["cards"],
    queryFn: async () => {
      const response = await axios("http://localhost:5000/api/getAllCards");
      return response.data.data
    },
  });
  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Error: {error?.message}</p>;
  

  return (
    <div className="">
      {data?.map((item) => (
        <div key={item._id} className="flex justify-center flex-col items-center">
              <h3 className="mt-8">{item.title}</h3> <br />
              <Link to={`/card/${item._id}`}>
              <button className="btn bg-lime-700 p-2 text-white">Details</button>
              </Link>
              
        </div>
      ))}
    </div>
  );
}

export default Banner;
