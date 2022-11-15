import styled from 'styled-components';
import { Spacing } from '../../../../../design-system/tokens/';

export const ChatHolder = styled.div`
  flex-grow: 1;
  height: 0px;
  overflow-y: auto;
  margin-top: ${Spacing.Micro};

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const ActionHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Spacing.Medium};
  width: 100%;
`;

export const ChatBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 80%;
`;
