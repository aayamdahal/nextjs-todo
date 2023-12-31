import Link from 'next/link';
import { prisma } from '../db';
import { redirect } from 'next/navigation';

const createTodo = async (data: FormData) => {
  'use server';
  const title = data.get('title')?.valueOf();

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Title is required');
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });

  // after creating a todo, redirect to the index page
  redirect('/');
};

export default function New() {
  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form className='flex gap-2 flex-col' action={createTodo}>
        <input
          type='text'
          name='title'
          className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
        />
        <div className='flex gap-1 justify-end mt-2'>
          <Link
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus:within:bg-slate-700 outline-none'
            href='..'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus:within:bg-slate-700 outline-none '
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
