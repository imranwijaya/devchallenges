import { Fragment } from "react";
import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import SixDotIcon from "./components/SixDotIcon";
import RestaurantMenuIcon from "./components/RestaurantMenuIcon";
import ScheduleIcon from "./components/ScheduleIcon";
import photo1 from "@public/asset/recipe-page/photo1.png";

type Ingredient = {
  name: string;
  step: React.ReactNode[];
};

type Instruction = React.ReactNode;

const ingredients: Ingredient[] = [
  {
    name: "Graham Cracker Crust",
    step: [
      <div>
        1 and 1/2 cups (150g)&nbsp;
        <span className="font-bold">graham cracker crumbs</span>
        &nbsp;(about 10 full sheet graham crackers)
      </div>,
      <div>
        5 Tablespoons (70g)&nbsp;
        <span className="font-bold">unsalted butter</span>, melted
      </div>,
      <div>
        1/4 cup (50g)&nbsp;
        <span className="font-bold">granulated sugar</span>
      </div>,
    ],
  },
  {
    name: "Cheesecake",
    step: [
      <div>
        four 8-ounce blocks (904g) full-fat&nbsp;
        <span className="font-bold">cream cheese</span>, softened to room
        temperature
      </div>,
      <div>
        1 cup (200g) <span className="font-bold">granulated sugar</span>
      </div>,
      <div>
        1 cup (240g) full-fat <span className="font-bold">sour cream</span>, at
        room temperature
      </div>,
      <div>
        1 teaspoon <span className="font-bold">pure vanilla extract</span>
      </div>,
      <div>
        2 teaspoons <span className="font-bold">fresh lemon juice</span>
        &nbsp;(optional, but recommended)
      </div>,
      <div>
        3 large <span className="font-bold">eggs</span>, at room temperature
      </div>,
      <div>
        topping suggestions:&nbsp;
        <span className="italic">
          salted caramel, lemon curd, strawberry topping, chocolate ganache, red
          wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce
        </span>
        &nbsp;(recipe in notes)
      </div>,
    ],
  },
];

const instructions: Instruction[] = [
  <div>
    Adjust the oven rack to the lower-middle position and preheat oven to 350°F
    (177°C).
  </div>,
  <div>
    <span className="font-bold text-[#333333]">Make the crust:</span> Using a
    food processor, pulse the graham crackers into crumbs. Pour into a medium
    bowl and stir in sugar and melted butter until combined. (You can also pulse
    it all together in the food processor.) Mixture will be sandy. Press firmly
    into the bottom and slightly up the sides of a 9-inch or 10-inch springform
    pan. No need to grease the pan first. I use the bottom of a measuring cup to
    pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven
    and place the hot pan on a large piece of aluminum foil. The foil will wrap
    around the pan for the water bath in step 4. Allow crust to slightly cool as
    you prepare the filling.
  </div>,
  <div>
    <span className="font-bold text-[#333333]">Make the filling:</span> Using a
    handheld or stand mixer fitted with a paddle attachment, beat the cream
    cheese and granulated sugar together on medium-high speed in a large bowl
    until the mixture is smooth and creamy, about 2 minutes. Add the sour cream,
    vanilla extract, and lemon juice then beat until fully combined. On medium
    speed, add the eggs one at a time, beating after each addition until just
    blended. After the final egg is incorporated into the batter, stop mixing.
    To help prevent the cheesecake from deflating and cracking as it cools,
    avoid over-mixing the batter as best you can.
  </div>,
  <div>
    <span className="font-bold text-[#333333]">
      Prepare the simple water bath (see note)
    </span>
    &nbsp;Boil a pot of water. You need 1 inch of water in your roasting pan for
    the water bath, so make sure you boil enough. I use an entire kettle of hot
    water. As the water is heating up, wrap the aluminum foil around the
    springform pan. Pour the cheesecake batter on top of the crust. Use a rubber
    spatula or spoon to smooth it into an even layer. Place the pan inside of a
    large roasting pan. Carefully pour the hot water inside of the pan and place
    in the oven. (Or you can place the roasting pan in the oven first, then pour
    the hot water in. Whichever is easier for you.)
  </div>,
  <div>
    Bake cheesecake for 55-70 minutes or until the center is almost set. When
    it’s done, the center of the cheesecake will slightly wobble if you gently
    shake the pan. Turn the oven off and open the oven door slightly. Let the
    cheesecake sit in the oven in the water bath as it cools down for 1 hour.
    Remove from the oven and water bath, then cool cheesecake completely at room
    temperature. Then refrigerate the cheesecake for at least 4 hours or
    overnight.
  </div>,
  <div>
    Use a knife to loosen the chilled cheesecake from the rim of the springform
    pan, then remove the rim. Using a clean sharp knife, cut into slices for
    serving. For neat slices, wipe the knife clean and dip into warm water
    between each slice.
  </div>,
  <div>
    Serve cheesecake with desired toppings. Cover and store leftover cheesecake
    in the refrigerator for up to 5 days.
  </div>,
];

export const metadata: Metadata = {
  title: "Recipe page | Responsive Web Developer",
  description: "Recipe page | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col gap-y-3 px-3 py-8 md:px-32 lg:gap-y-12 lg:px-60 lg:pt-28">
      <div className="flex flex-col items-start gap-y-3">
        <h1 className="font-playfair-display text-2xl font-bold lg:text-5xl">
          Classic Cheesecake Recipe
        </h1>
        <div className="flex flex-row gap-x-3">
          <div className="h-2 w-[0.8125rem] py-1">
            <SixDotIcon className="text-center" />
          </div>
          <p className="text-xs font-medium italic text-[#4F4F4F] lg:w-4/6 lg:text-[0.875rem]">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
      </div>
      <div>
        <NextImage src={photo1} alt="image" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-y-7 lg:flex-row-reverse lg:justify-between lg:gap-x-14">
        <div className="">
          <div className="flex flex-col gap-y-5 whitespace-nowrap lg:gap-y-11 lg:rounded-xl lg:px-10 lg:py-14 lg:shadow-[0_0_20px_0_rgba(0,0,0,0.10)]">
            <div className="flex flex-row gap-x-1 lg:gap-x-3">
              <RestaurantMenuIcon
                className="h-5 w-5 self-center lg:h-9 lg:w-9"
                fill="#F2994A"
              />
              <div className="flex flex-col">
                <span className="text-[0.5rem] font-bold uppercase text-[#BDBDBD] lg:text-[0.625rem]">
                  Yields
                </span>
                <span className="text-[0.625rem] font-medium text-[#F2994A] lg:text-[0.875rem]">
                  12 servings
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between pr-2 lg:flex-col lg:justify-normal lg:gap-y-11 lg:pr-0">
              <div className="flex flex-row gap-x-1 lg:gap-x-3">
                <ScheduleIcon
                  className="h-5 w-5 self-center lg:h-9 lg:w-9"
                  fill="#4F4F4F"
                />
                <div className="flex flex-col">
                  <span className="text-[0.5rem] font-bold uppercase text-[#BDBDBD] lg:text-[0.625rem]">
                    Prep Time
                  </span>
                  <span className="text-[0.625rem] font-medium text-[#333333] lg:text-[0.875rem]">
                    45 minutes
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-x-1 lg:gap-x-3">
                <ScheduleIcon
                  className="h-5 w-5 self-center lg:h-9 lg:w-9"
                  fill="#4F4F4F"
                />
                <div className="flex flex-col">
                  <span className="text-[0.5rem] font-bold uppercase text-[#BDBDBD] lg:text-[0.625rem]">
                    Cook Time
                  </span>
                  <span className="text-[0.625rem] font-medium text-[#333333] lg:text-[0.875rem]">
                    1 hour
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-x-1 lg:gap-x-3">
                <ScheduleIcon
                  className="h-5 w-5 self-center lg:h-9 lg:w-9"
                  fill="#4F4F4F"
                />
                <div className="flex flex-col">
                  <span className="text-[0.5rem] font-bold uppercase text-[#BDBDBD] lg:text-[0.625rem]">
                    Total Time
                  </span>
                  <span className="text-[0.625rem] font-medium text-[#333333] lg:text-[0.875rem]">
                    7,75 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 text-[#333333]">
          <div className="flex flex-col gap-y-3 lg:gap-y-8">
            <h2 className="font-playfair-display text-lg font-bold lg:text-2xl">
              Ingredients
            </h2>
            <div className="flex flex-col gap-y-6 lg:gap-y-8">
              {ingredients.map((e, idx) => (
                <Fragment key={idx}>
                  <h3 className="font-playfair-display text-base italic lg:text-lg">
                    {e.name}
                  </h3>
                  <ul className="flex flex-col gap-y-2 text-[0.875rem] leading-6 lg:text-base">
                    {e.step.length > 0 &&
                      e.step.map((el, i) => (
                        <li
                          key={i}
                          className="flex flex-row gap-x-2 lg:gap-x-4"
                        >
                          <span>
                            <div className="h-5 w-5 rounded-[0.25rem] border border-[#828282]"></div>
                          </span>
                          {el}
                        </li>
                      ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <h2 className="font-playfair-display text-2xl font-bold">
              Instructions
            </h2>
            <div className="flex flex-col gap-y-6">
              <ul className="flex flex-col gap-y-6 text-[0.875rem] leading-6 lg:gap-y-8 lg:text-base">
                {instructions.map((e, idx) => (
                  <li key={idx} className="flex flex-row gap-x-4">
                    <span className="">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[0.38rem] bg-[#F2994A] text-center font-playfair-display text-2xl font-bold text-white">
                        {idx + 1}
                      </div>
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-xs italic text-[#BDBDBD] lg:flex-row lg:text-base">
            <span>Source:&nbsp;</span>
            <NextLink
              href="https://sallysbakingaddiction.com/classic-cheesecake/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="source"
            >
              https://sallysbakingaddiction.com/classic-cheesecake/
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
