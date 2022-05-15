import { createSelector } from "@ngrx/store";
import { getFlotaSatate, FlotaState } from "../index";
import { ListState } from "./list.reducers";

export const getListState = createSelector(
  getFlotaSatate,
  (state: FlotaState) => state.list
)

export const getFlota = createSelector(
  getListState,
  (state: ListState) => state.pagination
)

export const getPaginationRequest = createSelector(
  getListState,
  (state: ListState) => state.requestPagination
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)
