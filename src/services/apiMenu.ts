import supabase from "./supabase.js";

export async function getMenu() {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) {
    console.log(error);

    throw new Error("The menu could not be loadad");
  }

  return menu;
}
