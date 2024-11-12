// src/components/StreamerItem.tsx
import React from 'react';
import styled from 'styled-components';
import { Streamer } from '../types';
import { ScoreUpdate } from '../styles';

interface StreamerItemProps {
  streamer: Streamer;
}

const StreamerItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
`;

const SequenceNumber = styled.span`
  width: 30px;
  font-weight: bold;
  text-align: center;
  color: #4f46e5;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 15px;
`;

const Name = styled.span`
  flex-grow: 1;
  font-size: 1.2em;
`;

const AnimatedScore = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  animation: ${ScoreUpdate} 0.5s ease;
`;

const StreamerItem: React.FC<StreamerItemProps> = ({ streamer }) => (
  <StreamerItemContainer>
    <SequenceNumber>{streamer.sequenceNumber}</SequenceNumber> {/* Fixed sequence number */}
    <Avatar />
    <Name>{streamer.displayName}</Name>
    <AnimatedScore>{streamer.score}</AnimatedScore>
  </StreamerItemContainer>
);

export default StreamerItem;
