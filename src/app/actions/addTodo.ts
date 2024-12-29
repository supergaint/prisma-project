'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addTodo(FormData) {
const title = FormData.get('title');
const content = FormData.get('content') || '';
try{
    await prisma.todo.create({
        data: {
            title,
            content,
        },
    });
    revalidatePath('/');
} catch (error) {
    console.log(error);
}
}