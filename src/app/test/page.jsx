import React from "react";
import data from "../../../data/A.json"; // Adjust path based on your setup
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Test = () => {
  return (
    <div>
      <Button>Click me</Button>
      <table>
        <caption>Problem List</caption>
        <thead>
          <tr>
            <th>Problem Name</th>
            <th>Problem Code URL</th>
            <th>Problem Code Label</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item["Problem Name"]}</td>
              <td>
                <Link href={item["Problem Code URL"]}>
                  {item["Problem Code URL"]}
                </Link>{" "}
              </td>
              <td>{item["Problem Code Label"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
