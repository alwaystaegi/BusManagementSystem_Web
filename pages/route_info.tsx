import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

import $ from "jquery";
import { Table } from "antd";

interface Route {
  id: string;
  Enterprise_name: string;
  route_name: string;
  route: string;
  travel_time: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function route_info(react: any) {
  const [route, setRoute] = useState<Route[]>([]);

  useEffect(() => {
    fetch("/api/get_route_info")
      .then((response) => response.json())
      .then(({ result }) => {
        setRoute(result);

        console.log(result[0].id);
      });
  }, []);

  return (
    <div>
      <Table
        key={1}
        dataSource={route}
        columns={[
          { title: "id", dataIndex: "id", key: "id" },
          {
            title: "기업명",
            dataIndex: "Enterprise_name",
            key: "Enterprise_name",
          },
          {
            title: "노선명",
            dataIndex: "route_name",
            key: "route_name",
          },
          {
            title: "노선",
            dataIndex: "route",
            key: "route",
          },
          {
            title: "운행시간",
            dataIndex: "travel_time",
            key: "travel_time",
          },
        ]}
      />
    </div>
  );
}
