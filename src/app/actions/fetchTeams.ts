"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchTeams() {
  return await prisma.team.findMany();
}
