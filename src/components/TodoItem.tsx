'use client';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        id='id'
        type='checkbox'
        className='cursor-pointer peer'
      />
      <label
        htmlFor='id'
        className='peer-checked:line-through cursor-pointer peer-checked:text-slate-500'
      >
        {title}
      </label>
    </li>
  );
}
