'use strict';

import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

// 下一句中的ToastExample即对应上文
// public String getName()中返回的字符串

var iface = {
    name: 'Calendar',
    propTypes: {
        date: PropTypes.string,
        ...View.propTypes // 包含默认的View的属性
    },
};
module.exports = requireNativeComponent('NativeCalendar', iface);