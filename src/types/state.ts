export type Banner = {
  title: string;
  description: string;
  link: string;
  img: string;
  bgColor: string;
  icon?: string;
};

export const initBannerState = {
  title: "Memer",
  description: "Rick roll the world, in a few clicks",
  link: "https://memer.shobhitnagpal.com",
  img: "/opengraph-image.png",
  bgColor: "#002679",
};
