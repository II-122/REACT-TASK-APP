import React, { act, FC, useRef, useState } from 'react';
import clsx from 'clsx';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import { GoSignOut } from "react-icons/go";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title
} from './BoardList.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

type TBoardListProps = {
  activeBoardId : string;
  setActiveBoardId : React.Dispatch<React.SetStateAction<string>>
}

const BoardList : FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {
  const dispatch = useTypedDispatch();
  const { boardArray } = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    // setTimeout(() => {
    //   // input 등록 이후에 호출
    //   inputRef.current?.focus();
    // }, 0);
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then(userCredential => {
      console.log(userCredential);
      dispatch(
        setUser({
          email: userCredential.user.email,
          id: userCredential.user.uid,
        })
      );
    }).catch(error => {
      console.error(error);
    });
  };

  const { isAuth } = useAuth();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(
        removeUser()
      );
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className={container}>
      <div className={title}>
        게시판 : 
      </div>
      {boardArray.map((board, index) => (
        <div key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={
            clsx(
              {
                [boardItemActive] :
                boardArray.findIndex(b => b.boardId === activeBoardId) === index
              },
              {
                [boardItem] :
                boardArray.findIndex(b => b.boardId === activeBoardId) !== index
              }
            )
          }
        >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ?
            <SideForm
              // inputRef={inputRef}
              setIsFormOpen={setIsFormOpen}
            />
            :
            <FiPlusCircle
              className={addButton}
              onClick={handleClick}
            />
        }
        {
          isAuth
          ? <GoSignOut className={addButton} onClick={handleSignOut} />
          : <FiLogIn className={addButton} onClick={handleLogin} />
        }
      </div>
    </div>
  );
}

export default BoardList;
