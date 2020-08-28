import React from "react";
import Link from "next/link";

import { IListItemProps } from "./IListItemProps";

const ListItem = ({ data }: IListItemProps) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
