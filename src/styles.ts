// styles.ts
import styled, { keyframes } from 'styled-components';

export const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 0 0 8px 8px; /* Matches header top rounding */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const ScoreUpdate = keyframes`
  from { color: #fbbf24; }
  to { color: #000; }
`;

export {};
