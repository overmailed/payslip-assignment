import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_PAGE_SIZE } from '../constants/common';
import { Payslip } from '../models';

const API_DELAY = 300;
const API_MAX_PAGES = 5;
const DATE_SHIFT = 30 * 24 * 360 * 10000;

const MOCK_FILE_PATH = 'https://picsum.photos/id/48/5000/3333';
const MOCK_FILE_NAME = 'payslip-example.png';
const MOCK_FILE_MIME = 'image/png';

type PayslipPagination = {
  page: number;
  pageSize: number;
  totalPages: number;
}

export type PayslipsReslut = {
  items: Payslip[];
} & PayslipPagination;

// fake DB
const fakeStorage: Record<string, Payslip> = {};

// fake API call
export const getPayslipListPage = async (
  page: number = 0,
  pageSize: number = DEFAULT_PAGE_SIZE,
): Promise<PayslipsReslut> => {
  const fakeItems = new Array<unknown>(pageSize).fill(undefined).map<Payslip>((item, index) => ({
    id: uuidv4(),
    fromDate: new Date(Date.now() - ( page * pageSize + index) * DATE_SHIFT),
    toDate: new Date(Date.now() - (page * pageSize + index + 1) * DATE_SHIFT),
    fileUrl: MOCK_FILE_PATH,
    fileName: MOCK_FILE_NAME,
    fileMimeType: MOCK_FILE_MIME,
  }));

  fakeItems.forEach((item) => {
    fakeStorage[item.id] = item;
  })

  return new Promise((resolve) => setTimeout(() => resolve({
    items: fakeItems,
    page,
    pageSize,
    totalPages: API_MAX_PAGES,
  }), API_DELAY));
}

// fake API call
export const getPayslipById = (id: string): Promise<Payslip> => new Promise(
  (resolve, reject) => setTimeout(() => fakeStorage[id] ? resolve(fakeStorage[id]) : reject(), API_DELAY),
);
