import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function TeamList() {
  const teams = await prisma.team.findMany({
    include: { players: true },
  });

  return (
    <div className="space-y-4 p-4">
      {teams.map((team) => (
        <div key={team.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{team.name}</h2>
          <ul className="mt-2 space-y-2">
            {team.players.map((player) => (
              <li key={player.id} className="text-gray-700">
                {player.name} - {player.role}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
