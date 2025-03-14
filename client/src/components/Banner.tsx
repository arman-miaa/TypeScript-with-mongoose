import { Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FormEventHandler, useState } from "react";

interface Card {
  _id: string;
  title: string;
  description: string;
}

// ✅ Corrected fetchData function with TypeScript
const fetchData = async (): Promise<Card[]> => {
  const response = await axios.get(`http://localhost:3000/api/getAllCards`);
  return response.data.data; // Ensure only data is returned
};

// POST method

const addPost = (post: { title: string; description: string }) => {
  return axios.post("http://localhost:3000/api/card", post);
};

function Banner() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchData,
  });

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newData) => {
      console.log(newData.data, "new data"); // Check if newData.data is the actual post object

      queryClient.setQueryData(["cards"], (oldQueryData: { data: Card[] }) => {
        console.log(oldQueryData, "old data");
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, newData.data.data], // Directly append newData.data if it's the correct data object
        };
      });
    },
  });

  const handlePost: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const post = { title, description };

    mutate(post);
    setTitle("");
    setDescription("");
  };

  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="mt-20">
      <form onSubmit={handlePost}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          value={title}
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter post body"
          value={description}
        />
        <Button type="submit" variant="contained">
          Post
        </Button>
      </form>
      <div className="text-center">
        {data?.map((item: any) => (
          <div key={item._id}>
            <p>{item.title}</p>
          </div>
        ))}

        <Button variant="contained" onClick={() => refetch()}>
          Refetch
        </Button>
      </div>
    </div>
  );
}

export default Banner;
