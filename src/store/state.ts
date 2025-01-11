import { create } from "zustand";

/** 
 Banner state and store
 */

type BannerState = {
  title: string;
  description: string;
  link: string;
  img: string;
  bgColor: string;
  icon: string;
};

type BannerAction = {
  setTitle: (newTitle: BannerState["title"]) => void;
  setDescription: (newDescription: BannerState["description"]) => void;
  setLink: (newLink: BannerState["link"]) => void;
  setImg: (newImg: BannerState["img"]) => void;
  setBgColor: (newBgColor: BannerState["bgColor"]) => void;
  setIcon: (newIcon: BannerState["icon"]) => void;
};

const useBannerStore = create<BannerState & BannerAction>()((set) => ({
  title: "Quick Banner",
  description: "Make beautiful banners on the fly",
  link: "quick-banner.shobhitnagpal.com",
  img: "/opengraph-image.png",
  bgColor: "#002679",
  icon: "",
  setTitle: (newTitle) => set((state) => ({ ...state, title: newTitle })),
  setDescription: (newDescription) =>
    set((state) => ({ ...state, description: newDescription })),
  setLink: (newLink) => set((state) => ({ ...state, link: newLink })),
  setImg: (newImg) => set((state) => ({ ...state, img: newImg })),
  setBgColor: (newBgColor) =>
    set((state) => ({ ...state, bgColor: newBgColor })),
  setIcon: (newIcon) => set((state) => ({ ...state, icon: newIcon })),
}));

export { useBannerStore };
