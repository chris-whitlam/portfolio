import { successResponse } from "@/utils";
import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  return successResponse({ message: "Success" });

}

