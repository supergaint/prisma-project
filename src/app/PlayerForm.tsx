import { PrismaClient } from "@prisma/client";
import addPlayer from "../app/actions/addPlayer";

const prisma = new PrismaClient();

export default async function PlayerForm() {
  const teams = await prisma.team.findMany();

  return (
    <form action={addPlayer} className="flex flex-col space-y-4 p-4">
      <input
        name="name"
        type="text"
        placeholder="Player Name"
        className="p-2 border rounded"
      />
      <input
        name="role"
        type="text"
        placeholder="Player Role"
        className="p-2 border rounded"
      />
      <select
        name="teamId"
        className="p-2 border rounded"
        defaultValue=""
      >
        <option value="" disabled>
          Select Team
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Player
      </button>
    </form>
  );
}
