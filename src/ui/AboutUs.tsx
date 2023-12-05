export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-bold text-green-900 ">Welcome to Verdant</h1>
      <h2 className="m-4 text-center text-2xl font-bold capitalize tracking-wide text-green-800 ">
        About us
      </h2>
      <p className="indent-8 text-xl font-semibold md:text-center">
        Verdant was founded by{" "}
        <span className="px rounded bg-amber-100 px-1 text-lg font-bold text-green-800">
          Chef Verdant Greenfield
        </span>
        , It is a vibrant ode to sustainable, plant-based living in the heart of
        the city. Born from a passion for fresh, wholesome ingredients and a
        dream to redefine culinary experiences. Our carefully curated menu, from
        the nutrient-packed Quinoa Power Bowl to the savory Mushroom and Lentil
        Stuffed Peppers, embodies the rich tapestry of plant-based flavors. We
        invite you to explore the magic of vegan cuisine in a warm and serene
        setting.
      </p>
    </div>
  );
}
