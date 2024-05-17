import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    {
      id: 1,
      title: "Jakarta sedang bagus-bagusnya",
      body: "Ini adalah artikel pertama",
      approved: true,
    },
    {
      id: 2,
      title: "Bekasi sedang panas-panasnya",
      body: "ini adalah artikel kedua",
      approved: false,
    },
    {
      id: 3,
      title: "Bogor sedang hujan-hujannya",
      body: "ini adalah artikel ketiga",
      approved: true,
    },
  ]);
}
