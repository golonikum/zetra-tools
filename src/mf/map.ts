export const MAP: Record<string, string[]> = {
  AddIncidentReportDrawer: [
    "AddIncidentReportDrawer",
    "AddIncidentReportDrawerPropsType",
    "AddIncidentReportDrawerFormValuesType",
  ],
  CreateIncidentActivityDrawer: [
    "CreateIncidentActivityDrawer",
    "CreateIncidentActivityDrawerPropsType",
  ],
  IncidentActivityListItem: [
    "IncidentActivityListItem",
    "OrderActivityDeadline",
  ],
  IncidentCard: [
    "ContactWithNotificationId",
    "ContactsNotificationDictionaryDrawer",
    "CreateIncidentNotificationCallSettings",
    "CreateIncidentNotificationCallingModeTypeEnum",
    "CreateIncidentNotificationContent",
    "CreateIncidentNotificationContentTypeEnum",
    "CreateIncidentNotificationFormType",
    "DestinationFormType",
    "ForecastListHeader",
    "ForecastListItem",
    "IncidentCardAsideComment",
    "IncidentCardAsideDescription",
    "IncidentCardAsideInfo",
    "IncidentCardAsideItemFull",
    "IncidentCardHeader",
    "IncidentEditMenu",
    "IncidentEditMenuPropsType",
    "IncidentInfoPanel",
    "IncidentInfoPanelPropsType",
    "IncidentRelatedSignalsPanel",
    "IncidentSecondaryThreatsTreeBlock",
    "IncidentSummaryInfoTab",
    "NotificationSessionCardHeader",
    "NotificationSessionCardInfo",
    "NotificationSessionProcessList",
    "NotificationSessionsList",
    "SelectDestinationsTypeEnum",
    "SelectNotificationChannel",
  ],
  common: ["OptionType", "OptionExtendedType", "SortTypes"],
  router: ["initiRouterSaga"],
  utils: [
    "getPathWithoutBasename",
    "matchPathWithBasename",
    "cookies",
    "notify",
    "query",
  ],
  styles: [
    "ChartColorsThemeType",
    "ColorsThemeType",
    "CoreGlobalStyles",
    "FontStyles",
    "SizeType",
    "SizeTypeWithBig",
    "THEMES",
    "ThemeModeType",
    "ThemeType",
    "TypeWithTheme",
    "borderDividerMixin",
    "customScrollbarStyles",
    "lineClampStyles",
    "media",
    "roundCornersPanelMixin",
    "useMedia",
  ],
  store: [
    "WSListenersMapItemType",
    "WSMessageAction",
    "CreateWsSagaArgs",
    "ErrorsStateType",
    "LoadingStateType",
    "callApiSaga",
    "clearErrorsAction",
    "createAsyncActions",
    "createRootReducer",
    "createStore",
    "createWsActionCreatorSaga",
    "createWsSaga",
    "createWsSubscribeSaga",
    "errorHandlingSaga",
    "errorsReducer",
    "initWebsocket",
    "loadingReducer",
    "processUserPushNotification",
    "removeErrorAction",
    "removeLoadingAction",
    "setErrorAction",
    "setLoadingAction",
  ],
  images: ["Images"],
  constants: [
    "FORMATS",
    "SAFETY_TYPE_CODE_ICONS",
    "DEFAULT_TITLE",
    "MASKS",
    "PAGE_SIZE",
    "COORDINATE_AFTER_POINT_MAX_LENGTH",
    "REG_EXPS",
    "MS_TIME_IN",
  ],
  hooks: [
    "useCloseByEsc",
    "useDebounceCallback",
    "useDelayUnmount",
    "useDraggableScroll",
    "useIsEllipsis",
    "useWindowResize",
    "useRegisterSwAndSubscribePush",
  ],
  layers: [
    "LayersListGroupItemPropsType",
    "SortingGroupsItemType",
    "SortingLayersItemType",
    "LayersListGroupItem",
    "LayersListItem",
  ],
  config: ["Config", "ConfigType"],
  "form/TextAreaField": ["TextAreaField", "TextAreaFormGroup"],
  form: [
    "FormContextValueType",
    "FormItemProps",
    "StyledFormItemDivProps",
    "UnitInputFieldProps",
    "WithFieldPropsType",
    "WithFormGroupOptionsType",
    "WithFormGroupProps",
    "ButtonSelectField",
    "CheckboxField",
    "InputField",
    "InputFormGroup",
    "InputLocationField",
    "InputLocationFormItem",
    "coordinatesValidationSchema",
    "InputMaskField",
    "InputNumberField",
    "InputNumberFormGroup",
    "InputPhoneField",
    "InputPhoneFormGroup",
    "PHONE_VALIDATION_ERROR_MESSAGE",
    "phoneValidationSchema",
    "LineTitleInputField",
    "LineTitleSelectField",
    "RadioButtonField",
    "SelectAsyncField",
    "SelectAsyncFormGroup",
    "SelectField",
    "SelectFormGroup",
    "SelectWithTreeField",
    "SelectWithTreeFormGroup",
    "SwitchField",
    "UnitInputField",
    "UnitInputFormItem",
    "CriticalityFormItem",
    "Form",
    "useFormContext",
    "FormContextProvider",
    "FormGroup",
    "FormItem",
    "VALIDATION_MESSAGES",
    "setValidationLocale",
    "withDatePickerField",
    "withField",
    "withFieldSelect",
    "withFormItem",
  ],
  "form/types": ["DatePickerRangeValueType"],
  "form/utils": ["getCoordinatesFromString", "defaultRangeUnitOptions"],
  selects: [
    "DropdownIndicator",
    "ButtonSelect",
    "Select",
    "SelectAsync",
    "SelectWithTree",
  ],
  Label: ["Label", "LabelColorEnum", "LabelProps"],
  SortFilter: [
    "SortFilter",
    "SortFilterIconsTypes",
    "SortFilterItemProps",
    "SortFilterItemType",
    "SortFilterProps",
    "SortFilterStyleProps",
    "SortFilterViewType",
  ],
  SelectedFiltersBlock: [
    "QuickFilterConfigType",
    "SelectedFilterConfigType",
    "SelectedFiltersBlock",
    "SelectedFiltersBlockPropsType",
  ],
  AsideMenuMinifiable: [
    "AsideMenuMinifiable",
    "DefaultNavMenu",
    "DefaultNavMenuPropsType",
    "DefaultNavMenuRouteType",
  ],
  PanelWithList: [
    "PanelWithList",
    "PanelWithListFilterPanel",
    "PanelWithListSortFilterBlock",
  ],
  Tabs: ["TabItemConfig", "Tabs", "TabsProps"],
  TreeView: [
    "TreeView",
    "TreeViewItemIdType",
    "TreeViewItemType",
    "TreeViewProps",
    "TreeViewType",
  ],
  SelectNotificationDestinationsList: [
    "SelectNotificationDestinationsList",
    "SelectNotificationDestinationsListStub",
  ],
  TableSortHeader: [
    "TableSortHeader",
    "TableSortHeaderColumnType",
    "TableSortHeaderPropsType",
  ],
  NotificationsDrawer: [
    "NotificationsDrawerBody",
    "NotificationsDrawerFilterPanelPropsType",
    "NotificationsDrawerFormFilterType",
    "NotificationsDrawerPropsTypes",
  ],
  Table: ["Table", "TableColumnConfigType"],
  Deadline: ["Deadline", "DeadlineStatusTypesEnum"],
  NavMenu: ["COMPACT_MENU_WIDTH", "MENU_WIDTH", "NavMenu"],
  ButtonTabs: ["ButtonTabItemConfig", "ButtonTabs", "ButtonTabsProps"],
  ColorPicker: [
    "ColorPicker",
    "ColorPickerProps",
    "ColorResult",
    "HsvColor",
    "HsvaColor",
    "RgbColor",
    "RgbaColor",
  ],
  SortableDragNDropList: [
    "BaseItemType",
    "DragButton",
    "MovingChainItemType",
    "SortableDragNDropItem",
    "SortableDragNDropList",
    "SortableListPropsType",
    "TestGroupType",
    "TestItemType",
  ],
  charts: [
    "DEFAULT_GANTT_CHART_PERIOD_ITEM_WIDTH_SETTINGS",
    "EventItemKindType",
    "EventItemType",
    "GanttChart",
    "GanttChartPeriodItemWithSettings",
    "GanttChartPeriodsEnum",
    "GanttChartPropsType",
    "GanttChartSettingsType",
    "HOURS_COUNT_BACK_MAP",
    "HOURS_COUNT_FORWARD_MAP",
    "HOURS_COUNT_MAP",
    "HeatMap",
    "LINEAR_TIME_HOURS_VALUE",
    "LINEAR_TIME_INTERVAL_MAX_COUNT",
    "LINEAR_TIME_INTERVAL_MIN_COUNT",
    "LINE_COUNT_IN_PERIOD",
    "MeasurementDataItemType",
    "MeasurementsBarChart",
    "MeasurementsChartType",
    "MeasurementsLineChart",
    "PIXELS",
    "PieChart",
    "PieChartItemType",
    "PrepareGanttChartItemsArgs",
    "PrepareGanttChartItemsSettings",
    "SECURITY_INDEX_COLORS",
    "SecurityIndex",
    "StackBarChart",
    "StackBarChartItemType",
    "StackBarChartLabelItemType",
    "StackBarChartLabelsType",
    "StackBarChartPropsType",
    "getGanttPlannedDateStart",
    "getHeatMapColor",
  ],
  inputs: [
    "Checkbox",
    "Input",
    "InputLocation",
    "InputMask",
    "InputNumber",
    "InputTime",
    "RadioButton",
    "Switch",
    "UnitInput",
  ],
  TextArea: ["TextArea", "CoreFieldTextAreaProps", "TextAreaProps"],
  devices: [
    "DeviceAlertsAlertsListFilterPropsType",
    "DeviceMeasurementsChartProps",
    "DeviceMeasurementsFiltersFormDataType",
    "DeviceMeasurementsFiltersPeriodsType",
    "DeviceMeasurementsFiltersPropsType",
    "DevicesListFilterPropsType",
    "ReceivedDateTimeType",
    "DeviceAlertVideoFragment",
    "DeviceCardAside",
    "DeviceCardHeader",
    "CameraEventPanel",
    "ParamCard",
    "ValueCard",
    "RelatedEntityCard",
    "DeviceAlertsDynamicLoadList",
    "DeviceAlertsListItem",
    "DeviceAlertsListFilter",
    "DeviceInfoLocation",
    "DeviceInfoMain",
    "DeviceInfoParameters",
    "DeviceMeasurementsHeader",
    "DeviceMeasurementsTable",
    "DeviceMeasurementsChart",
    "ViewChartPeriodEnum",
    "ViewChartEnum",
    "DeviceMeasurementsFilters",
    "DeviceStatusHistoryList",
    "DeviceListItem",
    "DeviceGroupListItem",
    "DevicesListFilter",
  ],
  "/devices/types": ["DevicesListFilterFormDataType", "DeviceGroupType"],
  "/devices/utils": [
    "getDeviceAddress",
    "getDevicesListFilterStatusOptionsRecord",
    "devicesListFilterStatusOptions",
  ],
  emergency: ["EmergencyFatalitiesInfo", "EmergencyUserInfo"],
  EmergencyIncidentInfoPanel: ["EmergencyIncidentInfoPanel"],
  incidents: [
    "IncidentsListCardDisplayOptionsType",
    "IncidentsListCardPropsType",
    "IncidentsListItemProps",
    "StyledIncidentsListItemType",
    "IncidentActivitiesGroup",
    "IncidentActivityListStub",
    "IncidentDateFinish",
    "IncidentDeadline",
    "IncidentEvacuationInfo",
    "IncidentPanel",
    "IncidentProductionStopInfo",
    "IncidentRespondersStatus",
    "IncidentSecondaryThreatsList",
    "IncidentSecondaryThreatsTree",
    "IncidentShortInfoDrawer",
    "IncidentsListCard",
    "IncidentsListCardMobile",
    "IncidentsListItem",
    "IncidentsListStub",
    "IncidentTabEmptyList",
  ],
  "incidents/types": [
    "ExecuterTypeEnum",
    "IncidentCreateActivityFormValuesType",
    "MyServiceReportTypeEnum",
    "IncidentUpdateInitialDataFormValuesType",
    "IncidentCardViewType",
    "IncidentViewListCardItemType",
    "IncidentViewListItemType",
  ],
  scenaries: [
    "ScenarioStepItem",
    "ScenarioStepsTreeView",
    "ScenarioTabAsideInfo",
  ],
  signals: [
    "SignalsListItemPropsType",
    "SignalBpPlansWidget",
    "SignalHeader",
    "SignalLinkedIncidentWidget",
    "SignalsListItem",
    "SignalsListStub",
    "SignalTypeItem",
  ],
  "signals/types": ["SignalViewListCardItemType"],
  SignalInfoWidget: ["SignalInfoWidget"],
  contexts: [
    "GlobalThemeContextValueType",
    "useGlobalThemeContext",
    "GlobalThemeProvider",
  ],
  templates: [
    "CardInfoLayout",
    "FullScreenListPageLayout",
    "ListPageWithCardLayout",
    "ListPageWithCardLayoutFilter",
  ],
  RootLayout: ["RootLayout"],
  videoPlayers: [
    "VideoPlayerActionBar",
    "VideoPlayerControlPanel",
    "DashVideoPlayer",
    "StreamVideoPlayer",
    "VideoPlayer",
    "WebRtcpPlayer",
  ],
  IncidentShortInfoEditDrawer: [
    "IncidentShortInfoEditDrawer",
    "IncidentShortInfoEditFormValuesType",
  ],
  "form/DatePickerField": [
    "DatePickerField",
    "DatePickerFormGroup",
    "DatePickerRangeField",
    "DatePickerRangeFormItem",
    "DatePickerFieldProps",
    "DatePickerRangeFieldProps",
    "DatePickerViewType",
  ],
  "form/FileUploadField": ["FileUploadField"],
  "form/DateRangeFieldsGroup": ["DateRangeFieldsGroup"],
  AddressSearchFieldsGroup: [
    "AddressSearchFieldsGroup",
    "CoordinatesField",
    "coordinateValidationSchema",
    "addressSearchValidationSchema",
    "addressSearchValidationSchemaRequired",
  ],
  OptionStepCard: [
    "OptionStepCard",
    "OptionStepCardPropsType",
    "OptionStepDistrict",
    "OptionStepIncidentType",
    "OptionStepThreat",
  ],
  OptionStepList: ["OptionStepList", "DEFAULT_OPTION_STEPS"],
};
