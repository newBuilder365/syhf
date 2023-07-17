import React, { memo } from 'react';
import { Icon, Input, Popover } from '@sy/framework/lib/widget';
import './index.less';
const { TextArea } = Input;

const CustomInput = (props) => {
  const { showBigArea = false, ...restProps } = props;
  const { disabled } = restProps;
  const Content = () => {
    return <TextArea rows={3} {...restProps} />;
  };

  const suffix = () => (
    <Popover content={Content()} trigger="click" overlayClassName="customInput">
      <Icon type="fullscreen" style={{ fontSize: 12, color: '#08c' }} />
    </Popover>
  );

  return (
    <Input {...restProps} suffix={disabled || !showBigArea ? null : suffix()} />
  );
};

export default memo(CustomInput);
