import Link from "next/link";

async function createTodo (data:FormData) {
  "use server"
}

export default function New() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-5xl">New</h1>
      </header>
      <form className="flex gap-2 flex-col">
        <input 
          type="text" 
          name="title" 
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" 
        />
      </form>
      <div className="flex gap-2 my-2 justify-end">
        <Link 
          href=".."
          className="border border-red-300 text-red-300 px-6 py-1 rounded hover:bg-red-700 focus-within:bg-red-700 outline-none"
        >
          Cancel
        </Link>
        <button 
          type="submit"
          className="border border-slate-300 text-slate-300 px-6 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Create
        </button>
      </div>
    </>
  )
}