export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

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

export const handleEventByIdFulfilled = (state, { payload }) => {
  state.currentEvent_ = payload;
  state.error = null;
  state.isLoading = false;
};
