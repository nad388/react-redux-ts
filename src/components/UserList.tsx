import React from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  return <div></div>;
};

export default UserList;
