import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_PAGE_SIZE } from '../constants/common';
import { Payslip } from '../models/Payslip';

const API_DELAY = 300;
const API_MAX_PAGES = 5;

type PayslipPagination = {
  page: number;
  pageSize: number;
  totalPages: number;
}

export type PayslipsReslut = {
  items: Payslip[];
} & PayslipPagination;

// fake API call
export const getPayslipListPage = async (
  page: number = 0,
  pageSize: number = DEFAULT_PAGE_SIZE,
): Promise<PayslipsReslut> => {
  const fakeItems = new Array<unknown>(pageSize).fill(undefined).map<Payslip>((item, index) => ({
    id: uuidv4(),
    fromDate: new Date(Date.now() - ( page * pageSize + index) * 86400000),
    toDate: new Date(Date.now() - (page * pageSize + index + 1) * 86400000),
    file: "somefile.file",
  }));

  return new Promise((resolve) => setTimeout(() => resolve({
    items: fakeItems,
    page,
    pageSize,
    totalPages: API_MAX_PAGES,
  }), API_DELAY));
}