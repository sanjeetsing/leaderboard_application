// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Streamer } from './types';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import { LeaderboardContainer } from './styles';

const initialStreamers: Streamer[] = [
  { userID: "u-1", displayName: "Jone", picture: "", score: 157000, sequenceNumber: 1 },
  { userID: "u-2", displayName: "Victoria", picture: "", score: 46200, sequenceNumber: 2 },
  { userID: "u-3", displayName: "Joy", picture: "", score: 38800, sequenceNumber: 3 },
  { userID: "u-4", displayName: "Quinn", picture: "", score: 33400, sequenceNumber: 4 },
  { userID: "u-5", displayName: "Sheenalo", picture: "", score: 31600, sequenceNumber: 5 },
  { userID: "u-6", displayName: "Charlene", picture: "", score: 30800, sequenceNumber: 6 },
  { userID: "u-7", displayName: "LeonaBaby", picture: "", score: 22300, sequenceNumber: 7 },
  { userID: "u-8", displayName: "Sunny", picture: "", score: 17800, sequenceNumber: 8 },
  { userID: "u-9", displayName: "ImWord", picture: "", score: 17300, sequenceNumber: 9 },
  { userID: "u-10", displayName: "Dophine", picture: "", score: 15400, sequenceNumber: 10 },
];

const App: React.FC = () => {
  const [streamers, setStreamers] = useState<Streamer[]>(initialStreamers);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStreamers((prevStreamers) => {
        const updatedStreamers = prevStreamers.map((streamer) => ({
          ...streamer,
          score: streamer.score + Math.floor(Math.random() * 1000),
        }));
        return updatedStreamers.sort((a, b) => b.score - a.score);
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <LeaderboardContainer>
        <Leaderboard streamers={streamers} />
      </LeaderboardContainer>
    </>
  );
};

export default App;
