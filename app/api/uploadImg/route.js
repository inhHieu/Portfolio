import { NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir } from "fs/promises";

// Define the image types in the desired order
const imageTypes = ["titleimg", "coverimg", "other"];

export const POST = async (req, res) => {
  const formData = await req.formData();
  const files = formData.getAll("file");

  if (!files || files.length === 0) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const formName = formData.get("name");
  const folderPath = path.join(process.cwd(), "public/img", formName);

  try {
    // Create the folder if it doesn't exist
    await mkdir(folderPath, { recursive: true });

    const uploadPromises = files.map(async (file, index) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const imageType = getImageType(index);
      const filename = generateFilename(file.name, imageType, formName, index);
      const filePath = path.join(folderPath, filename);
      await writeFile(filePath, buffer);
    });

    await Promise.all(uploadPromises);

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occurred", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

function getImageType(index) {
  // Retrieve the image type based on the index
  if (index < imageTypes.length) {
    return imageTypes[index];
  } else {
    return "other";
  }
}

function generateFilename(originalFilename, imageType, formName, index) {
  switch (imageType) {
    case "titleimg":
      return "poster.jpg";
    case "coverimg":
      return "lposter.jpg";
    // Add more cases for other image types as needed
    default:
      return `${formName}_${index - 2}.jpg`;
  }
}
