/* eslint-disable no-undef */
import { NativeModules as RNNativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

__DEV__ = 0;

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return {
    ...navigation,
    useNavigation: jest.fn(),
    useIsFocused: jest.fn(),
  };
});
jest.mock('expo');
jest.mock('@expo/vector-icons', () => ({
  Feather: '',
  FontAwesome: '',
  MaterialIcons: '',
}));
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const asyncFn = (response) => () =>
  jest.fn(() => {
    return Promise.resolve(response);
  });
const syncFn = (response) => () => jest.fn(() => response);
const makeFns = (response) => [asyncFn(response), syncFn(response)];

const [stringFnAsync, stringFnSync] = makeFns('unknown');
const [numberFnAsync, numberFnSync] = makeFns(-1);
const [arrayFnAsync, arrayFnSync] = makeFns([]);
const [booleanFnAsync, booleanFnSync] = makeFns(false);
const [objectFnAsync, objectFnSync] = makeFns({});

const RNDeviceInfo = {};
const stringKeys = [
  'deviceId',
  'model',
  'brand',
  'systemName',
  'systemVersion',
  'bundleId',
  'appName',
  'buildNumber',
  'appVersion',
  'deviceType',
];

for (const key of stringKeys) {
  RNDeviceInfo[key] = 'unknown-test';
}

const booleanKeys = ['isTablet'];
for (const key of booleanKeys) {
  RNDeviceInfo[key] = true;
}

RNDeviceInfo.syncUniqueId = stringFnAsync();
RNDeviceInfo.getDeviceToken = stringFnSync();

// string getters
const stringFnNames = [
  'getUniqueId',
  'getInstanceId',
  'getSerialNumber',
  'getAndroidId',
  'getIpAddress',
  'getMacAddress',
  'getSystemManufacturer',
  'getBuildId',
  'getInstallerPackageName',
  'getDeviceName',
  'getUserAgent',
  'getBootloader',
  'getDevice',
  'getDisplay',
  'getFingerprint',
  'getHardware',
  'getHost',
  'getProduct',
  'getTags',
  'getType',
  'getBaseOs',
  'getSecurityPatch',
  'getCodename',
  'getIncremental',
  'getPhoneNumber',
  'getCarrier',
  'getInstallReferrer',
];
for (const name of stringFnNames) {
  RNDeviceInfo[name] = stringFnAsync();
  RNDeviceInfo[`${name}Sync`] = stringFnSync();
}

// boolean getters
const booleanFnNames = [
  'isCameraPresent',
  'isEmulator',
  'isPinOrFingerprintSet',
  'isBatteryCharging',
  'isAirplaneMode',
  'hasSystemFeature',
  'isLocationEnabled',
  'isHeadphonesConnected',
];
for (const name of booleanFnNames) {
  RNDeviceInfo[name] = booleanFnAsync();
  RNDeviceInfo[`${name}Sync`] = booleanFnSync();
}

// number getters
const numberFnNames = [
  'getUsedMemory',
  'getFontScale',
  'getApiLevel',
  'getPreviewSdkInt',
  'getFirstInstallTime',
  'getLastUpdateTime',
  'getTotalMemory',
  'getMaxMemory',
  'getTotalDiskCapacity',
  'getTotalDiskCapacityOld',
  'getFreeDiskStorage',
  'getFreeDiskStorageOld',
  'getBatteryLevel',
];
for (const name of numberFnNames) {
  RNDeviceInfo[name] = numberFnAsync();
  RNDeviceInfo[`${name}Sync`] = numberFnSync();
}

const objectFnNames = ['getPowerState', 'getAvailableLocationProviders'];
for (const name of objectFnNames) {
  RNDeviceInfo[name] = objectFnAsync();
  RNDeviceInfo[`${name}Sync`] = objectFnSync();
}

const arrayFnNames = [
  'getSupportedAbis',
  'getSupported32BitAbis',
  'getSupported64BitAbis',
  'getSystemAvailableFeatures',
];
for (const name of arrayFnNames) {
  RNDeviceInfo[name] = arrayFnAsync();
  RNDeviceInfo[`${name}Sync`] = arrayFnSync();
}

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native'); // use original implementation, which comes with mocks out of the box

  // mock modules/components created by assigning to NativeModules
  RN.NativeModules.RNDeviceInfo = RNDeviceInfo;

  jest.spyOn(RN.Platform, 'select').mockImplementation((obj) => {
    return obj[RN.Platform.OS] || obj.default || obj.android || obj.ios || obj.windows || obj.web;
  });

  return RN;
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
