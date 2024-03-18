import { useContext } from 'react';
import { TimeContext } from './TimeContext'; // Adjust the path as necessary

export const useTimeContext = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error('useTimeContext must be used within a TimeContextProvider');
  }
  return context;
};
