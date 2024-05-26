export const handlePhotosFulfilled = (state, { payload }) => {
  state.currentEvent.photos = payload;
  state.error = null;
  state.isLoading = false;
};
