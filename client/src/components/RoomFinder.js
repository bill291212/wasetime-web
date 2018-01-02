import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import RoomFinderNavigation from './RoomFinderNavigation';
import NishiBuildingList from '../containers/NishiBuildingList';
import ClassroomListContainer from '../containers/ClassroomListContainer';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const RoomFinder = ({ match }) => {
  return (
    <Wrapper>
      <RoomFinderNavigation />
      <Switch>
        <Route exact path={`${match.url}`} component={NishiBuildingList} />
        <Route
          path={`${match.url}/:bldgName`}
          component={ClassroomListContainer}
        />
        <Route component={NishiBuildingList} />
      </Switch>
    </Wrapper>
  );
};

export default RoomFinder;
