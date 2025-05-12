import { getAllExperiences } from "../../lib/experiences";

export const get = async () => {
  const experiences = await getAllExperiences();
  if (!experiences) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return new Response(JSON.stringify(experiences), {
    status: 200,
  });
};
