import React, { useState } from 'react';
import { Image } from 'react-native';
import RecicledPercentatge from '../../../icons/RecicledPercentatge';
import Reciclability from '../../../icons/Reciclability';
import Biodegradability from '../../../icons/Biodegradability';

import {
  ComponentView,
  ComponentRow,
  ComponentTitle,
  ConatinerBin,
  ComponentMoreInfo,
  ComponentArrow,
} from './style';

import { SimpleArrow, SimpleArrowDown } from '../../../icons';

const bins = {
  green: require('../../../img/containers/green.svg'),
  yellow: require('../../../img/containers/yellow.png'),
  blue: require('../../../img/containers/yellow.svg'),
};

const Component = ({ component, last }) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  function clickElement() {
    setIsShowingInfo(!isShowingInfo);
  }

  return (
    <ComponentView last={last}>
      <ComponentRow onPress={clickElement}>
        {isShowingInfo ? <SimpleArrowDown /> : <SimpleArrow />}
        <ComponentTitle>{component.name}</ComponentTitle>
        <ConatinerBin
          source={bins[component.container_bin]}
          alt={`${component.container_bin} bin`}
        />
      </ComponentRow>
      <ComponentMoreInfo show={isShowingInfo}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
          }}
          source={{
            uri: component.material.image,
          }}
          alt={component.material.name}
        />
        <RecicledPercentatge
          percentage={component.recicled_percentatge}
          style={{ marginLeft: 20 }}
        />
        <Reciclability
          type={component.reciclability}
          style={{ marginLeft: 20 }}
        />
        <Biodegradability
          type={component.biodegradability}
          style={{ marginLeft: 20 }}
        />
      </ComponentMoreInfo>
    </ComponentView>
  );
};

export default Component;
