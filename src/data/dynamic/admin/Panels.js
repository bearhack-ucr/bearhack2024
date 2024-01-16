import View from "@/components/dynamic/admin/dashboards/dashboard/View";
import { PANELISTS } from "../form/Panels";
import { generatePanelist, generateSelect, generateStatus } from "./Columns";

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};

export const TAGS = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-2/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  generatePanelist(PANELISTS),
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    width: "w-1/12",
    enableSorting: false,
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
