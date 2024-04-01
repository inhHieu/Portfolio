import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";

export async function POST(request, response) {
  try {
    const requestData = await request.json();
    const dataFilePath = "./public/data/data.json";
    const dataFileContents = await fsPromises.readFile(dataFilePath, "utf-8");
    const jsonData = JSON.parse(dataFileContents);

    const sampleObject = jsonData.manga[0];
    const sampleKeys = Object.keys(sampleObject);
    const extraKeys = Object.keys(requestData).filter(
      (key) => !sampleObject.hasOwnProperty(key)
    );

    if (extraKeys.length > 0) {
      return NextResponse.json({
        error: "Invalid data format",
        status: 400,
      });
    }

    // Convert name to lowercase and remove spaces and special characters
    const name = requestData.name
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s/g, "");

    // Check if the name already exists
    const nameExists = jsonData.manga.some(
      (item) =>
        item.name
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s/g, "") === name
    );

    if (nameExists) {
      return NextResponse.json({ error: "Name already exists", status: 400 });
    }

    const lastId =
      jsonData.manga.length > 0
        ? jsonData.manga[jsonData.manga.length - 1].id
        : 0;
    const newId = lastId + 1;
    requestData.id = newId;

    const missingKeys = sampleKeys.filter(
      (key) => !requestData.hasOwnProperty(key)
    );
    missingKeys.forEach(
      (key) => (requestData[key] = getBlankValueWithType(sampleObject[key]))
    );

    const orderedData = Object.fromEntries(
      sampleKeys.map((key) => [key, requestData[key]])
    );
    jsonData.manga.push(orderedData);

    await fsPromises.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({
      message: "Data appended successfully",
      status: 200,
    });
  } catch (error) {
    response.status(500).send({ error: "failed hehe" });
  }
}

function getBlankValueWithType(value) {
  if (Array.isArray(value)) return [];
  else if (typeof value === "object") return {};
  else if (typeof value === "number") return 0;
  else if (typeof value === "boolean") return true;
  else return "";
}
