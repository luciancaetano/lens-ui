import { GridBreakpointsType } from './Grid.types';

const bpSortOrder = ['xs', 'sm', 'md', 'lg'];

export function sortBreakpoints(a: GridBreakpointsType, b: GridBreakpointsType) {
  return bpSortOrder.indexOf(a) - bpSortOrder.indexOf(b);
}
