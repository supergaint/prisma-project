"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deletePlayer(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.player.delete({
    where: { id },
  });
}
