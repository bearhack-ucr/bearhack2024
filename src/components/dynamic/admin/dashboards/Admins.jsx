"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Admins.js";
import Table from "./dashboard/Dashboard";

const Admin = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        searchParams={searchParams}
        title="Admins"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Admin;
