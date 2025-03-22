import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { FormStep } from "../../types";

const getFormSteps = async (): Promise<FormStep[]> => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "steps.json");

  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data;
};

export default getFormSteps;
