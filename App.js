import React from 'react';
import AgoraUIKit from 'agora-rn-uikit';

function App() {
  let rtcProps = {
    appId: 'fb10b64d97294a37bb03b1706c94181f',
    channel: 'test',
  };

  return <AgoraUIKit rtcProps={rtcProps} />;
}

export default App;
