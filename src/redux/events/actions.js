export const handlePhotosFulfilled = (state, { payload }) => {
  state.currentEvent.photos = payload;
  state.error = null;
  state.isLoading = false;
};

export const handleEventsFulfilled = (state, { payload }) => {
  state.events_ = payload;
  state.error = null;
  state.isLoading = false;
};
