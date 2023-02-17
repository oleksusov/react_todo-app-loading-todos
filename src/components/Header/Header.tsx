import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  query: string,
  setQuery: (query: string) => void,
};

export const Header: React.FC<Props> = ({
  todos,
  query,
  setQuery,
}) => {
  return (
    <header className="todoapp__header">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className={
          classNames(
            'todoapp__toggle-all',
            {
              active: todos.some(todo => !todo.completed),
            },
          )
        }
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery('');
        }}
      >
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </form>
    </header>
  );
};