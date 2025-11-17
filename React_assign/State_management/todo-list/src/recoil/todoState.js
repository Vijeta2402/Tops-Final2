import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const completedCountState = selector({
  key: "completedCountState",
  get: ({ get }) => {
    const list = get(todoListState);
    return list.filter((item) => item.isComplete).length;
  },
});
