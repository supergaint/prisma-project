"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function addPlayer(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const teamId = formData.get("teamId") as string;

  await prisma.player.create({
    data: { name, role, teamId },
  });
}
