import React from 'react';

import { ChatEngine } from 'react-chat-engine';

const Support = () => {
  return (
    <><div>Support Admin</div><ChatEngine
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Amanda'
      userSecret='Amanda'
      height='calc(100vh - 12px)' /></>
  );
};

export default Support; 