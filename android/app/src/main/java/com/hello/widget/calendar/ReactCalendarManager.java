package com.hello.widget.calendar;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by 99474 on 2017/12/6 0006.
 */

public class ReactCalendarManager extends SimpleViewManager<CalendarView>{
    @Override
    public String getName() {
        return "NativeCalendar";
    }

    @Override
    protected CalendarView createViewInstance(ThemedReactContext reactContext) {
        return new CalendarView(reactContext);
    }
}
