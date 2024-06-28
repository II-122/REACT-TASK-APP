import React, { FC } from 'react';
import { IList } from '../../types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListsContainer.css';

type TListsContainerProps = {
  boardId : string;
  lists : IList[];
};

const ListsContainer : FC<TListsContainerProps> = ({
  boardId,
  lists
}) => {
  return (
    <div className={listsContainer}>
      {
        lists.map(list => (
          <List
            key={list.listId}
            list={list}
            boardId={boardId}
          />
        ))
      }
      <ActionButton
        boardId={boardId}
        listId={""}
        list  // 같은 컴포넌트 분기 처리
      />
    </div>
  );
}

export default ListsContainer;