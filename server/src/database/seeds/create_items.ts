import Knex from "knex";
export async function seed(knex: Knex) {
  knex("items").insert([{ title: "Lâmpadas", image: "lampadas.svg" }]);
  knex("items").insert([{ title: "Pilhas e baterias", image: "baterias.svg" }]);
  knex("items").insert([
    { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
  ]);
  knex("items").insert([
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
  ]);
  knex("items").insert([
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
  ]);
  knex("items").insert([{ title: "Óleo de cozinha", image: "oleo.svg" }]);
}
