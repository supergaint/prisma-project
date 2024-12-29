"use server"

import { PrismaClient } from "@prisma/client";
import addTodo from "./actions/addTodo";
import deleteTodo from "./actions/deleteTodo";
import TeamForm from "@/app/TeamForm";
import PlayerForm from "./PlayerForm";
import TeamList from "./TeamList";

const prisma = new PrismaClient();


export default async function Home() {

  const todos = await prisma.todo.findMany();


  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
  {/* Header */}
  <h1 className="text-3xl font-bold text-gray-800 mb-6">Todos</h1>

  {/* Add Todo Form */}
  <form action={addTodo} className="w-full max-w-md flex items-center space-x-2 mb-6">
    <input
    name="title"
      type="text"
      placeholder="Add Todo"
      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Add Todo
    </button>
  </form>

  {/* Todos List */}
  <ul className="w-full max-w-md bg-white shadow-md rounded-lg divide-y divide-gray-200">
    {todos.map((todo) => (
      <li key={todo.id} className="p-4 flex justify-between items-center">
        {/* Todo Text */}
        <span className="text-gray-800">{todo.title}</span>

        {/* Delete Form */}
        <form action={deleteTodo} className="flex items-center">
          <input type="hidden" name="id" value={todo.id} />
          <button
            type="submit"
            className="text-red-500 hover:text-red-700 transition"
          >
            Delete
          </button>
        </form>
      </li>
    ))}
  </ul>
  <TeamForm/>
  <PlayerForm/>
  <TeamList/>
</main>

  );
}
