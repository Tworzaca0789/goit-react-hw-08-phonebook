export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectCurrentUser = state => state.auth.isFetchCurrent;

export const selectUserName = state => state.auth.user.name;
