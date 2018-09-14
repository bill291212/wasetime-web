import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { InvisibleButton } from '../../styled-components/Button';
import { RowWrapper } from '../../styled-components/Wrapper';
import { media } from '../../utils/styledComponents';

const ExtendedRowWrapper = RowWrapper.extend`
  flex: none;
  justify-content: center;
  font-size: 1.3em;
  ${media.phone`
    font-size: 1.1em;
  `};
  padding: 0.5em;
`;

const ExtendedInvisibleButton = InvisibleButton.extend`
  &:hover {
    color: #b51e36;
  }
`;

const SemesterTitle = styled('div')`
  width: 10em;
  text-align: center;
`;

const SemesterSwitcher = ({
  semesterTitle,
  handleIncreaseSemesterIndex,
  handleDecreaseSemesterIndex
}) => {
  return (
    <ExtendedRowWrapper>
      <ExtendedInvisibleButton onClick={handleIncreaseSemesterIndex}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />
      </ExtendedInvisibleButton>
      <SemesterTitle>{semesterTitle}</SemesterTitle>
      <ExtendedInvisibleButton onClick={handleIncreaseSemesterIndex}>
        <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
      </ExtendedInvisibleButton>
    </ExtendedRowWrapper>
  );
};

export default SemesterSwitcher;