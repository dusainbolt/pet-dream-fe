import {
  AddPetStartAction,
  GetMyPetsStartAction,
  UpdateAvatarPetStartAction,
  UpdateCoverPetStartAction,
} from '@redux/actions/petAction';
import { closeDrawerApp } from '@redux/slices/layoutSlice';
import {
  addPetError,
  addPetStart,
  addPetSuccess,
  getMyPetsError,
  getMyPetsStart,
  getMyPetsSuccess,
  updateAvatarPetError,
  updateAvatarPetStart,
  updateAvatarPetSuccess,
  updateCoverPetError,
  updateCoverPetStart,
  updateCoverPetSuccess,
} from '@redux/slices/petSlice';
import { PetRequest } from '@request/petRequest';
import Constant from '@utils/constant';
import Helper from '@utils/helper';
import { toast } from 'react-toastify';
import { delay, put, takeLatest } from 'redux-saga/effects';

function* watchGetMyPets({ payload }: GetMyPetsStartAction) {
  try {
    const response = yield PetRequest.getMyPets(payload);
    yield delay(Constant.delayAPI);
    if (Helper.isOkResponse(response)) {
      yield put(getMyPetsSuccess(response.data));
    } else {
      yield put(getMyPetsError(response));
    }
  } catch (error: any) {
    yield put(getMyPetsError(null as any));
  }
}

function* watchAddPet({ payload }: AddPetStartAction) {
  try {
    const response = yield PetRequest.addPet(payload);
    yield delay(Constant.delayAPI);
    if (Helper.isOkResponse(response)) {
      toast.success('Thêm pet thành công');
      yield put(addPetSuccess(response.data));
      yield put(closeDrawerApp());
    } else {
      yield put(addPetError(response));
    }
  } catch (error: any) {
    yield put(addPetError(null as any));
  }
}

function* watchUpdateAvatarPet({ payload }: UpdateAvatarPetStartAction) {
  try {
    const response = yield PetRequest.updateAvatar(payload.petId, payload.body);
    yield delay(Constant.delayAPI);
    if (Helper.isOkResponse(response)) {
      toast.success('Chỉnh sửa ảnh đại diện thành công');
      yield put(updateAvatarPetSuccess(response.data));
    } else {
      yield put(updateAvatarPetError(response));
    }
  } catch (error: any) {
    yield put(updateAvatarPetError(null as any));
  }
}

function* watchUpdateCoverPet({ payload }: UpdateCoverPetStartAction) {
  try {
    const response = yield PetRequest.updateCover(payload.petId, payload.body);
    yield delay(Constant.delayAPI);
    if (Helper.isOkResponse(response)) {
      toast.success('Chỉnh sửa ảnh đại diện thành công');
      yield put(updateCoverPetSuccess(response.data));
    } else {
      yield put(updateCoverPetError(response));
    }
  } catch (error: any) {
    yield put(updateCoverPetError(null as any));
  }
}

export default function* petSaga(): any {
  yield takeLatest(getMyPetsStart, watchGetMyPets);
  yield takeLatest(addPetStart, watchAddPet);
  yield takeLatest(updateAvatarPetStart, watchUpdateAvatarPet);
  yield takeLatest(updateCoverPetStart, watchUpdateCoverPet);
}
