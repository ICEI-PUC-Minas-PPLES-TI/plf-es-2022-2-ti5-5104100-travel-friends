import { useCallback } from 'react';
import { getAllRoadmap } from '../../services/api/Requests/roadmap';
import { CardBox, FallbackWrapper, Navigation } from '../../components';
import { usePromise } from '../../hooks';
import { Container } from 'react-bootstrap';
import React from 'react';
import { userHook } from 'src/context/userData';

const Roadmap = () => {
  const { userData } = userHook(); 

  const getRoadMaps = useCallback(async () => {
    return getAllRoadmap();
  }, []);

  const { data, ...promiseStatus } = usePromise(getRoadMaps);

  const renderContent = () => {
    const meRoadmaps = data?.filter((item) => (item.idCreator === userData.id));

    return (
      <Navigation>
        <Container className='p-5'>
        <CardBox data={meRoadmaps} />
        </Container>
      </Navigation>
    );
  };

  return (
    <FallbackWrapper
      renderContent={renderContent}
      {...promiseStatus}
    />
  );
}

export default Roadmap;
