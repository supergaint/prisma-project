"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function addTeam(formData: FormData) {
  const name = formData.get("name") as string;

  await prisma.team.create({
    data: { name },
  });
}
