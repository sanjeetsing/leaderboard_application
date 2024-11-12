// src/components/Leaderboard.tsx
import React from 'react';
import { Streamer } from '../types';
import StreamerItem from './StreamerItem';

interface LeaderboardProps {
  streamers: Streamer[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ streamers }) => (
  <div>
    {streamers.map((streamer, index) => (
      <StreamerItem key={streamer.userID} streamer={streamer} />
    ))}
  </div>
);

export default Leaderboard;
