export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const handleNewsFulfilled = (state, { payload }) => {
  state.news = payload;
  state.error = null;
  state.isLoading = false;
};

export const handleNewsByIdFulfilled = (state, { payload }) => {
  state.currentNews = payload;
  state.error = null;
  state.isLoading = false;
};
