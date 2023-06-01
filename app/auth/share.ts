type Params = Record<string, string>;
export const post_form = async (url: string, params?: Params) => {
  await fetch(url);
};

export const return_back = () => {
  const back = sessionStorage.getItem("back") || window.location.origin;
  window.location.href = back;
};
