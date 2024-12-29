import addTeam from "./actions/addTeam";

export default function TeamForm() {
  return (
    <form action={addTeam} className="flex flex-col space-y-4 p-4">
      <input
        name="name"
        type="text"
        placeholder="Team Name"
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Team
      </button>
    </form>
  );
}
