import {
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksLoading,
  selectTasks,
  setTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksToLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler(tasks) {
  try {
    yield put(fetchExampleTasksLoading());
    yield delay(700);
    const exampleTasks = yield call(getExampleTasks, tasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong...");
  }
}

export function* saveTasksToLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksToLocalStorageHandler);
}
