import { selector } from "./instance"
import { TRootState } from '../index'

const getOpenAdd = (state: TRootState): boolean => state.UI.openAdd
export const selectOpenAdd = selector<boolean>(getOpenAdd)