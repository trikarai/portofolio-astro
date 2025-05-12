import { Experiences } from "./mongodb";

export const getAllExperiences = async () => {
  const experiencesCollection = await Experiences();

  const experiences = await experiencesCollection
    .aggregate([
      {
        $lookup: {
          from: "companies", // collection to join
          localField: "companyId", // field from experiences
          foreignField: "_id", // field from companies
          as: "company", // alias for joined data
        },
      },
      {
        $unwind: "$company", // convert array to object
      },
      {
        $project: {
          // Include all fields from experiences
          position: 1,
          type: 1,
          startDate: 1,
          endDate: 1,
          description: 1,
          companyId: 1,
          // Embed full company object
          company: "$company",
        },
      },
    ])
    .toArray();

  return experiences;
};
