#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../node_modules/@zip.js/zip.js/lib/core/constants.js
var MAX_32_BITS, MAX_16_BITS, MAX_8_BITS, COMPRESSION_METHOD_DEFLATE, COMPRESSION_METHOD_DEFLATE_64, COMPRESSION_METHOD_STORE, COMPRESSION_METHOD_AES, LOCAL_FILE_HEADER_SIGNATURE, SPLIT_ZIP_FILE_SIGNATURE, TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE, DATA_DESCRIPTOR_RECORD_SIGNATURE, ARCHIVE_EXTRA_DATA_SIGNATURE, DIGITAL_SIGNATURE_RECORD_SIGNATURE, CENTRAL_FILE_HEADER_SIGNATURE, END_OF_CENTRAL_DIR_SIGNATURE, ZIP64_END_OF_CENTRAL_DIR_SIGNATURE, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE, CENTRAL_FILE_HEADER_LENGTH, END_OF_CENTRAL_DIR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH, DATA_DESCRIPTOR_RECORD_LENGTH, DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH, DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH, SPLIT_ZIP_FILE_SIGNATURE_LENGTH, EXTRAFIELD_TYPE_ZIP64, EXTRAFIELD_TYPE_AES, EXTRAFIELD_TYPE_NTFS, EXTRAFIELD_TYPE_NTFS_TAG1, EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP, EXTRAFIELD_TYPE_UNICODE_PATH, EXTRAFIELD_TYPE_UNICODE_COMMENT, EXTRAFIELD_TYPE_USDZ, EXTRAFIELD_TYPE_INFOZIP, EXTRAFIELD_TYPE_UNIX, EXTRAFIELD_TYPE_UNIX_TYPE1, EXTRAFIELD_TYPE_PKWARE_UNIX, BITFLAG_ENCRYPTED, BITFLAG_LEVEL, BITFLAG_LEVEL_MAX_MASK, BITFLAG_LEVEL_FAST_MASK, BITFLAG_LEVEL_SUPER_FAST_MASK, BITFLAG_DATA_DESCRIPTOR, BITFLAG_COMPRESSED_PATCHED_DATA, BITFLAG_STRONG_ENCRYPTION, BITFLAG_LANG_ENCODING_FLAG, BITFLAG_MASKED_LOCAL_HEADERS, FILE_ATTR_MSDOS_DIR_MASK, FILE_ATTR_MSDOS_READONLY_MASK, FILE_ATTR_MSDOS_HIDDEN_MASK, FILE_ATTR_MSDOS_SYSTEM_MASK, FILE_ATTR_MSDOS_ARCHIVE_MASK, FILE_ATTR_UNIX_TYPE_MASK, FILE_ATTR_UNIX_TYPE_DIR, FILE_ATTR_UNIX_TYPE_SYMLINK, FILE_ATTR_UNIX_TYPE_FILE, FILE_ATTR_UNIX_EXECUTABLE_MASK, FILE_ATTR_UNIX_DEFAULT_MASK, FILE_ATTR_UNIX_SETUID_MASK, FILE_ATTR_UNIX_SETGID_MASK, FILE_ATTR_UNIX_STICKY_MASK, VERSION_STORE, VERSION_DEFLATE, VERSION_ZIP64, VERSION_AES, VERSION_MADE_BY_MSDOS, VERSION_MADE_BY_UNIX, DIRECTORY_SIGNATURE, HEADER_SIZE, HEADER_OFFSET_VERSION, HEADER_OFFSET_SIGNATURE, HEADER_OFFSET_COMPRESSED_SIZE, HEADER_OFFSET_UNCOMPRESSED_SIZE, HEADER_OFFSET_FILENAME_LENGTH, HEADER_OFFSET_EXTRAFIELD_LENGTH, LOCAL_HEADER_COMMON_OFFSET, MAX_DATE, MIN_DATE, UNDEFINED_VALUE, INFINITY_VALUE, ERR_LOCAL_FILE_HEADER_NOT_FOUND, ERR_OVERLAPPING_ENTRY, ERR_EXTRAFIELD_ZIP64_NOT_FOUND, UNDEFINED_TYPE, FUNCTION_TYPE, OBJECT_TYPE, STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE, EMPTY_UINT8_ARRAY, SYMBOL_ASYNC_DISPOSE;
var init_constants = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/constants.js"() {
    MAX_32_BITS = 4294967295;
    MAX_16_BITS = 65535;
    MAX_8_BITS = 255;
    COMPRESSION_METHOD_DEFLATE = 8;
    COMPRESSION_METHOD_DEFLATE_64 = 9;
    COMPRESSION_METHOD_STORE = 0;
    COMPRESSION_METHOD_AES = 99;
    LOCAL_FILE_HEADER_SIGNATURE = 67324752;
    SPLIT_ZIP_FILE_SIGNATURE = 134695760;
    TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE = 808471376;
    DATA_DESCRIPTOR_RECORD_SIGNATURE = SPLIT_ZIP_FILE_SIGNATURE;
    ARCHIVE_EXTRA_DATA_SIGNATURE = 134630224;
    DIGITAL_SIGNATURE_RECORD_SIGNATURE = 84233040;
    CENTRAL_FILE_HEADER_SIGNATURE = 33639248;
    END_OF_CENTRAL_DIR_SIGNATURE = 101010256;
    ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792;
    ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008;
    CENTRAL_FILE_HEADER_LENGTH = 46;
    END_OF_CENTRAL_DIR_LENGTH = 22;
    ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
    ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
    ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH = END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LENGTH;
    DATA_DESCRIPTOR_RECORD_LENGTH = 12;
    DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH = 20;
    DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH = 4;
    SPLIT_ZIP_FILE_SIGNATURE_LENGTH = 4;
    EXTRAFIELD_TYPE_ZIP64 = 1;
    EXTRAFIELD_TYPE_AES = 39169;
    EXTRAFIELD_TYPE_NTFS = 10;
    EXTRAFIELD_TYPE_NTFS_TAG1 = 1;
    EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589;
    EXTRAFIELD_TYPE_UNICODE_PATH = 28789;
    EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461;
    EXTRAFIELD_TYPE_USDZ = 6534;
    EXTRAFIELD_TYPE_INFOZIP = 30837;
    EXTRAFIELD_TYPE_UNIX = 30805;
    EXTRAFIELD_TYPE_UNIX_TYPE1 = 22613;
    EXTRAFIELD_TYPE_PKWARE_UNIX = 13;
    BITFLAG_ENCRYPTED = 1;
    BITFLAG_LEVEL = 6;
    BITFLAG_LEVEL_MAX_MASK = 2;
    BITFLAG_LEVEL_FAST_MASK = 4;
    BITFLAG_LEVEL_SUPER_FAST_MASK = 6;
    BITFLAG_DATA_DESCRIPTOR = 8;
    BITFLAG_COMPRESSED_PATCHED_DATA = 32;
    BITFLAG_STRONG_ENCRYPTION = 64;
    BITFLAG_LANG_ENCODING_FLAG = 2048;
    BITFLAG_MASKED_LOCAL_HEADERS = 8192;
    FILE_ATTR_MSDOS_DIR_MASK = 16;
    FILE_ATTR_MSDOS_READONLY_MASK = 1;
    FILE_ATTR_MSDOS_HIDDEN_MASK = 2;
    FILE_ATTR_MSDOS_SYSTEM_MASK = 4;
    FILE_ATTR_MSDOS_ARCHIVE_MASK = 32;
    FILE_ATTR_UNIX_TYPE_MASK = 61440;
    FILE_ATTR_UNIX_TYPE_DIR = 16384;
    FILE_ATTR_UNIX_TYPE_SYMLINK = 40960;
    FILE_ATTR_UNIX_TYPE_FILE = 32768;
    FILE_ATTR_UNIX_EXECUTABLE_MASK = 73;
    FILE_ATTR_UNIX_DEFAULT_MASK = 420;
    FILE_ATTR_UNIX_SETUID_MASK = 2048;
    FILE_ATTR_UNIX_SETGID_MASK = 1024;
    FILE_ATTR_UNIX_STICKY_MASK = 512;
    VERSION_STORE = 10;
    VERSION_DEFLATE = 20;
    VERSION_ZIP64 = 45;
    VERSION_AES = 51;
    VERSION_MADE_BY_MSDOS = 20;
    VERSION_MADE_BY_UNIX = 768;
    DIRECTORY_SIGNATURE = "/";
    HEADER_SIZE = 30;
    HEADER_OFFSET_VERSION = 0;
    HEADER_OFFSET_SIGNATURE = 10;
    HEADER_OFFSET_COMPRESSED_SIZE = 14;
    HEADER_OFFSET_UNCOMPRESSED_SIZE = 18;
    HEADER_OFFSET_FILENAME_LENGTH = 22;
    HEADER_OFFSET_EXTRAFIELD_LENGTH = 24;
    LOCAL_HEADER_COMMON_OFFSET = 4;
    MAX_DATE = new Date(2107, 11, 31, 23, 59, 58);
    MIN_DATE = new Date(1980, 0, 1);
    UNDEFINED_VALUE = void 0;
    INFINITY_VALUE = Infinity;
    ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
    ERR_OVERLAPPING_ENTRY = "Overlapping entry found";
    ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
    UNDEFINED_TYPE = "undefined";
    FUNCTION_TYPE = "function";
    OBJECT_TYPE = "object";
    STRING_TYPE = "string";
    NUMBER_TYPE = "number";
    BOOLEAN_TYPE = "boolean";
    EMPTY_UINT8_ARRAY = new Uint8Array();
    SYMBOL_ASYNC_DISPOSE = Symbol.asyncDispose || /* @__PURE__ */ Symbol();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/options.js
function checkFunctionOption(value) {
  if (value && typeof value != FUNCTION_TYPE) {
    throw new Error(ERR_INVALID_FUNCTION_OPTION);
  }
  return value;
}
function checkReaderOptionsObject(readerOptions) {
  if (readerOptions && (typeof readerOptions != OBJECT_TYPE || Array.isArray(readerOptions))) {
    throw new Error(ERR_INVALID_READER_OPTIONS);
  }
  return readerOptions;
}
function checkSignalOption(signal) {
  if (signal && (typeof signal.addEventListener != FUNCTION_TYPE || typeof signal.aborted != BOOLEAN_TYPE)) {
    throw new Error(ERR_INVALID_SIGNAL);
  }
  return signal || UNDEFINED_VALUE;
}
function throwIfAborted(signal) {
  if (signal && signal.aborted) {
    throw signal.reason === UNDEFINED_VALUE ? new DOMException(ERR_ABORTED, ABORT_ERROR_NAME) : signal.reason;
  }
}
function checkPasswordOption(password, rawPassword) {
  if (password && typeof password != STRING_TYPE || rawPassword && !(rawPassword instanceof Uint8Array)) {
    throw new Error(ERR_INVALID_PASSWORD_TYPE);
  }
}
function checkPassThroughOption(passThrough) {
  if (passThrough !== UNDEFINED_VALUE && typeof passThrough != BOOLEAN_TYPE && passThrough !== PASS_THROUGH_COMPRESSED) {
    throw new Error(ERR_INVALID_PASS_THROUGH_VALUE);
  }
  return passThrough;
}
function checkInteger(value, maxValue, errorMessage) {
  if (!Number.isInteger(value) || value < 0 || value > maxValue) {
    throw new Error(errorMessage);
  }
}
function checkIntegerOption(value, maxValue, errorMessage) {
  if (value !== UNDEFINED_VALUE) {
    checkInteger(value, maxValue, errorMessage);
  }
}
function toNumber(value) {
  return typeof value == STRING_TYPE && value.trim() ? Number(value) : value;
}
var OPTION_FILENAME_ENCODING, OPTION_COMMENT_ENCODING, OPTION_DECODE_TEXT, OPTION_EXTRACT_PREPENDED_DATA, OPTION_EXTRACT_APPENDED_DATA, OPTION_PASSWORD, OPTION_RAW_PASSWORD, OPTION_PASS_THROUGH, OPTION_SIGNAL, OPTION_CHECK_PASSWORD_ONLY, OPTION_CHECK_OVERLAPPING_ENTRY_ONLY, OPTION_CHECK_OVERLAPPING_ENTRY, OPTION_CHECK_AMBIGUITY, OPTION_CHECK_LOCAL_DIRECTORY, OPTION_CHECK_LOCAL_FILENAME, OPTION_CHECK_SIGNATURE, OPTION_CHECK_CRC32, OPTION_CHECK_AUTHENTICATION_CODE, OPTION_USE_WEB_WORKERS, OPTION_USE_COMPRESSION_STREAM, OPTION_PREVENT_CLOSE, OPTION_ENCRYPTION_STRENGTH, OPTION_EXTENDED_TIMESTAMP, OPTION_NTFS_TIMESTAMP, OPTION_KEEP_ORDER, OPTION_LEVEL, OPTION_BUFFERED_WRITE, OPTION_CREATE_TEMP_STREAM, OPTION_DATA_DESCRIPTOR_SIGNATURE, OPTION_USE_UNICODE_FILE_NAMES, OPTION_DATA_DESCRIPTOR, OPTION_SUPPORT_ZIP64_SPLIT_FILE, OPTION_ENCODE_TEXT, OPTION_OFFSET, OPTION_USDZ, OPTION_UNIX_EXTRA_FIELD_TYPE, OPTION_LOCAL_EXTRA_FIELD, OPTION_CENTRAL_EXTRA_FIELD, OPTION_STRICTNESS, OPTION_FILENAME_VALIDATION, OPTION_NORMALIZE_FILENAME, OPTION_MAX_APPENDED_DATA_SIZE, OPTION_DECRYPT_CENTRAL_DIRECTORY, OPTION_SIGN_CENTRAL_DIRECTORY, OPTION_ENTRY, TEXT_TYPE_FILENAME, TEXT_TYPE_COMMENT, STRICTNESS_STRICT, STRICTNESS_BALANCED, STRICTNESS_TOLERANT, PASS_THROUGH_COMPRESSED, ERR_INVALID_FUNCTION_OPTION, ERR_INVALID_SIGNAL, ERR_INVALID_PASSWORD_TYPE, ERR_INVALID_PASS_THROUGH_VALUE, ERR_INVALID_READER_OPTIONS, ERR_ABORTED, ABORT_ERROR_NAME;
var init_options = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/options.js"() {
    init_constants();
    OPTION_FILENAME_ENCODING = "filenameEncoding";
    OPTION_COMMENT_ENCODING = "commentEncoding";
    OPTION_DECODE_TEXT = "decodeText";
    OPTION_EXTRACT_PREPENDED_DATA = "extractPrependedData";
    OPTION_EXTRACT_APPENDED_DATA = "extractAppendedData";
    OPTION_PASSWORD = "password";
    OPTION_RAW_PASSWORD = "rawPassword";
    OPTION_PASS_THROUGH = "passThrough";
    OPTION_SIGNAL = "signal";
    OPTION_CHECK_PASSWORD_ONLY = "checkPasswordOnly";
    OPTION_CHECK_OVERLAPPING_ENTRY_ONLY = "checkOverlappingEntryOnly";
    OPTION_CHECK_OVERLAPPING_ENTRY = "checkOverlappingEntry";
    OPTION_CHECK_AMBIGUITY = "checkAmbiguity";
    OPTION_CHECK_LOCAL_DIRECTORY = "checkLocalDirectory";
    OPTION_CHECK_LOCAL_FILENAME = "checkLocalFilename";
    OPTION_CHECK_SIGNATURE = "checkSignature";
    OPTION_CHECK_CRC32 = "checkCrc32";
    OPTION_CHECK_AUTHENTICATION_CODE = "checkAuthenticationCode";
    OPTION_USE_WEB_WORKERS = "useWebWorkers";
    OPTION_USE_COMPRESSION_STREAM = "useCompressionStream";
    OPTION_PREVENT_CLOSE = "preventClose";
    OPTION_ENCRYPTION_STRENGTH = "encryptionStrength";
    OPTION_EXTENDED_TIMESTAMP = "extendedTimestamp";
    OPTION_NTFS_TIMESTAMP = "ntfsTimestamp";
    OPTION_KEEP_ORDER = "keepOrder";
    OPTION_LEVEL = "level";
    OPTION_BUFFERED_WRITE = "bufferedWrite";
    OPTION_CREATE_TEMP_STREAM = "createTempStream";
    OPTION_DATA_DESCRIPTOR_SIGNATURE = "dataDescriptorSignature";
    OPTION_USE_UNICODE_FILE_NAMES = "useUnicodeFileNames";
    OPTION_DATA_DESCRIPTOR = "dataDescriptor";
    OPTION_SUPPORT_ZIP64_SPLIT_FILE = "supportZip64SplitFile";
    OPTION_ENCODE_TEXT = "encodeText";
    OPTION_OFFSET = "offset";
    OPTION_USDZ = "usdz";
    OPTION_UNIX_EXTRA_FIELD_TYPE = "unixExtraFieldType";
    OPTION_LOCAL_EXTRA_FIELD = "localExtraField";
    OPTION_CENTRAL_EXTRA_FIELD = "centralExtraField";
    OPTION_STRICTNESS = "strictness";
    OPTION_FILENAME_VALIDATION = "filenameValidation";
    OPTION_NORMALIZE_FILENAME = "normalizeFilename";
    OPTION_MAX_APPENDED_DATA_SIZE = "maxAppendedDataSize";
    OPTION_DECRYPT_CENTRAL_DIRECTORY = "decryptCentralDirectory";
    OPTION_SIGN_CENTRAL_DIRECTORY = "signCentralDirectory";
    OPTION_ENTRY = "entry";
    TEXT_TYPE_FILENAME = "filename";
    TEXT_TYPE_COMMENT = "comment";
    STRICTNESS_STRICT = "strict";
    STRICTNESS_BALANCED = "balanced";
    STRICTNESS_TOLERANT = "tolerant";
    PASS_THROUGH_COMPRESSED = "compressed";
    ERR_INVALID_FUNCTION_OPTION = "Invalid option (must be a function)";
    ERR_INVALID_SIGNAL = "Invalid signal (must be an AbortSignal instance)";
    ERR_INVALID_PASSWORD_TYPE = "Invalid password (password must be a string, rawPassword must be a Uint8Array)";
    ERR_INVALID_PASS_THROUGH_VALUE = "Invalid passThrough option (must be a boolean or 'compressed')";
    ERR_INVALID_READER_OPTIONS = "Invalid readerOptions (must be an object)";
    ERR_ABORTED = "The operation was aborted";
    ABORT_ERROR_NAME = "AbortError";
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/configuration.js
function getConfiguration() {
  return config;
}
function getChunkSize(config2) {
  return normalizeChunkSize(config2.chunkSize);
}
function normalizeChunkSize(chunkSize) {
  chunkSize = toNumber(chunkSize);
  return Number.isInteger(chunkSize) && chunkSize >= MINIMUM_PROPERTY_VALUE ? Math.max(chunkSize, MINIMUM_CHUNK_SIZE) : DEFAULT_CHUNK_SIZE;
}
function checkConfiguration(configuration) {
  const checkedConfiguration = {};
  for (const propertyName of CONFIGURABLE_PROPERTY_NAMES) {
    const propertyValue = configuration[propertyName];
    if (propertyValue !== UNDEFINED_VALUE) {
      checkedConfiguration[propertyName] = checkPropertyValue(propertyName, propertyValue);
    }
  }
  return checkedConfiguration;
}
function checkPropertyValue(propertyName, propertyValue) {
  if (NUMBER_PROPERTY_NAMES.includes(propertyName)) {
    propertyValue = toNumber(propertyValue);
    if (propertyName == PROPERTY_NAME_MAX_WORKERS && (!Number.isInteger(propertyValue) || propertyValue < MINIMUM_PROPERTY_VALUE)) {
      throw new Error(ERR_INVALID_MAX_WORKERS);
    }
  } else if (FUNCTION_PROPERTY_NAMES.includes(propertyName)) {
    checkFunctionOption(propertyValue);
  } else if (propertyName == PROPERTY_NAME_BASE_URI) {
    if (propertyValue && typeof propertyValue != STRING_TYPE) {
      throw new Error(ERR_INVALID_BASE_URI);
    }
  } else if (URI_PROPERTY_NAMES.includes(propertyName)) {
    if (propertyValue && typeof propertyValue != STRING_TYPE && typeof propertyValue != FUNCTION_TYPE) {
      throw new Error(ERR_INVALID_URI);
    }
  }
  return propertyValue;
}
function normalizeConfiguration(configuration) {
  configuration = configuration || {};
  const { CompressionStreamZlib, DecompressionStreamZlib } = configuration;
  if (CompressionStreamZlib === UNDEFINED_VALUE && DecompressionStreamZlib === UNDEFINED_VALUE) {
    return configuration;
  }
  const normalizedConfiguration = Object.assign({}, configuration);
  if (normalizedConfiguration.CompressionStreamFallback === UNDEFINED_VALUE) {
    normalizedConfiguration.CompressionStreamFallback = CompressionStreamZlib;
  }
  if (normalizedConfiguration.DecompressionStreamFallback === UNDEFINED_VALUE) {
    normalizedConfiguration.DecompressionStreamFallback = DecompressionStreamZlib;
  }
  return normalizedConfiguration;
}
function setDefaultConfiguration(configuration) {
  const checkedConfiguration = checkConfiguration(normalizeConfiguration(configuration));
  Object.assign(DEFAULT_CONFIGURATION, checkedConfiguration);
  Object.assign(config, checkedConfiguration);
}
var DEFAULT_CHUNK_SIZE, MINIMUM_CHUNK_SIZE, MINIMUM_PROPERTY_VALUE, ERR_INVALID_MAX_WORKERS, ERR_INVALID_BASE_URI, ERR_INVALID_URI, maxWorkers, DEFAULT_CONFIGURATION, PROPERTY_NAME_MAX_WORKERS, PROPERTY_NAME_BASE_URI, URI_PROPERTY_NAMES, BOOLEAN_PROPERTY_NAMES, NUMBER_PROPERTY_NAMES, FUNCTION_PROPERTY_NAMES, CONFIGURABLE_PROPERTY_NAMES, config;
var init_configuration = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/configuration.js"() {
    init_constants();
    init_options();
    DEFAULT_CHUNK_SIZE = 256 * 1024;
    MINIMUM_CHUNK_SIZE = 64;
    MINIMUM_PROPERTY_VALUE = 1;
    ERR_INVALID_MAX_WORKERS = "Invalid maxWorkers (must be an integer greater than 0)";
    ERR_INVALID_BASE_URI = "Invalid baseURI (must be a string)";
    ERR_INVALID_URI = "Invalid URI (must be a string or a function returning a string)";
    maxWorkers = 2;
    try {
      if (typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency) {
        maxWorkers = navigator.hardwareConcurrency;
      }
    } catch {
    }
    DEFAULT_CONFIGURATION = {
      workerURI: "./core/web-worker-wasm.js",
      wasmURI: "./core/streams/zlib-wasm/zlib-streams.wasm",
      chunkSize: DEFAULT_CHUNK_SIZE,
      maxWorkers,
      terminateWorkerTimeout: 5e3,
      workerStarvationTimeout: 5e3,
      workerStartupTimeout: 5e3,
      useWebWorkers: true,
      useCompressionStream: true,
      CompressionStream: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
      DecompressionStream: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
    };
    PROPERTY_NAME_MAX_WORKERS = "maxWorkers";
    PROPERTY_NAME_BASE_URI = "baseURI";
    URI_PROPERTY_NAMES = [
      "wasmURI",
      "workerURI"
    ];
    BOOLEAN_PROPERTY_NAMES = [
      "useCompressionStream",
      "useWebWorkers"
    ];
    NUMBER_PROPERTY_NAMES = [
      "chunkSize",
      PROPERTY_NAME_MAX_WORKERS,
      "terminateWorkerTimeout",
      "workerStarvationTimeout",
      "workerStartupTimeout"
    ];
    FUNCTION_PROPERTY_NAMES = [
      "createWorker",
      "CompressionStream",
      "DecompressionStream",
      "CompressionStreamFallback",
      "DecompressionStreamFallback"
    ];
    CONFIGURABLE_PROPERTY_NAMES = [
      PROPERTY_NAME_BASE_URI,
      ...URI_PROPERTY_NAMES,
      ...BOOLEAN_PROPERTY_NAMES,
      ...NUMBER_PROPERTY_NAMES,
      ...FUNCTION_PROPERTY_NAMES
    ];
    config = { ...DEFAULT_CONFIGURATION };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/array.js
function concat(first, second) {
  const result = new Uint8Array(first.length + second.length);
  result.set(first);
  result.set(second, first.length);
  return result;
}
function toExactUint8Array(array) {
  return array.byteOffset || array.byteLength != array.buffer.byteLength ? new Uint8Array(array) : array;
}
function getDataView(array) {
  return new DataView(array.buffer, array.byteOffset, array.byteLength);
}
var init_array = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/array.js"() {
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/error.js
function isErrorObject(error) {
  return Boolean(error) && typeof error == "object";
}
var init_error = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/error.js"() {
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js
var T, T0, T1, T2, T3, T4, T5, T6, T7, Crc32;
var init_crc32 = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js"() {
    T = [[], [], [], [], [], [], [], []];
    for (let n = 0; n < 256; n++) {
      let t = n;
      for (let j2 = 0; j2 < 8; j2++) {
        t = t & 1 ? t >>> 1 ^ 3988292384 : t >>> 1;
      }
      T[0][n] = t;
    }
    for (let n = 0; n < 256; n++) {
      for (let k2 = 1; k2 < 8; k2++) {
        const previous = T[k2 - 1][n];
        T[k2][n] = previous >>> 8 ^ T[0][previous & 255];
      }
    }
    [T0, T1, T2, T3, T4, T5, T6, T7] = T;
    Crc32 = class {
      constructor(crc) {
        this.crc = crc || -1;
      }
      append(data) {
        let crc = this.crc | 0;
        const length = data.length | 0;
        let offset = 0;
        if (length >= 8 && data.buffer) {
          const view = new DataView(data.buffer, data.byteOffset, length);
          const end = length - 8;
          for (; offset <= end; offset += 8) {
            const a = crc ^ view.getInt32(offset, true);
            const b = view.getInt32(offset + 4, true);
            crc = T7[a & 255] ^ T6[a >>> 8 & 255] ^ T5[a >>> 16 & 255] ^ T4[a >>> 24 & 255] ^ T3[b & 255] ^ T2[b >>> 8 & 255] ^ T1[b >>> 16 & 255] ^ T0[b >>> 24 & 255];
          }
        }
        for (; offset < length; offset++) {
          crc = crc >>> 8 ^ T0[(crc ^ data[offset]) & 255];
        }
        this.crc = crc;
      }
      get() {
        return ~this.crc;
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js
var Crc32Stream;
var init_crc32_stream = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js"() {
    init_crc32();
    Crc32Stream = class extends TransformStream {
      constructor() {
        let stream;
        const crc32 = new Crc32();
        super({
          transform(chunk, controller) {
            crc32.append(chunk);
            controller.enqueue(chunk);
          },
          flush() {
            const value = new Uint8Array(4);
            const dataView = new DataView(value.buffer);
            dataView.setUint32(0, crc32.get());
            stream.value = value;
          }
        });
        stream = this;
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/encode-text.js
function encodeText(value) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    value = unescape(encodeURIComponent(value));
    const result = new Uint8Array(value.length);
    for (let i = 0; i < result.length; i++) {
      result[i] = value.charCodeAt(i);
    }
    return result;
  } else {
    return new TextEncoder().encode(value);
  }
}
var init_encode_text = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/encode-text.js"() {
    init_constants();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/codecs/aes-hmac-sha1.js
function createEngine(key, authenticationKey) {
  initTables();
  const roundKeys = new Int32Array(ROUND_KEYS_LENGTH);
  const rounds = expandKey(key, roundKeys);
  const keystream = new Int32Array(BLOCK_LENGTH / 4);
  const hmac = createHmac(authenticationKey);
  let counter0 = 0;
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  return {
    process(data, decrypt2) {
      if (decrypt2) {
        hmac.update(data, 0, data.length);
      }
      encrypt2(data);
      if (!decrypt2) {
        hmac.update(data, 0, data.length);
      }
    },
    digest() {
      return hmac.digest();
    }
  };
  function encrypt2(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const length = data.length;
    let offset = 0;
    for (; offset + BLOCK_LENGTH <= length; offset += BLOCK_LENGTH) {
      nextKeystream();
      view.setInt32(offset, view.getInt32(offset) ^ keystream[0]);
      view.setInt32(offset + 4, view.getInt32(offset + 4) ^ keystream[1]);
      view.setInt32(offset + 8, view.getInt32(offset + 8) ^ keystream[2]);
      view.setInt32(offset + 12, view.getInt32(offset + 12) ^ keystream[3]);
    }
    if (offset < length) {
      nextKeystream();
      for (let indexByte = 0; offset < length; offset++, indexByte++) {
        data[offset] ^= keystream[indexByte >> 2] >>> 24 - 8 * (indexByte & 3);
      }
    }
  }
  function nextKeystream() {
    counter0 = counter0 + 1 | 0;
    if (!counter0) {
      counter1 = counter1 + 1 | 0;
      if (!counter1) {
        counter2 = counter2 + 1 | 0;
        if (!counter2) {
          counter3 = counter3 + 1 | 0;
        }
      }
    }
    let s0 = swapBytes(counter0) ^ roundKeys[0];
    let s1 = swapBytes(counter1) ^ roundKeys[1];
    let s2 = swapBytes(counter2) ^ roundKeys[2];
    let s3 = swapBytes(counter3) ^ roundKeys[3];
    let t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[4];
    let t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[5];
    let t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[6];
    let t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[7];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[8];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[9];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[10];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[11];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[12];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[13];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[14];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[15];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[16];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[17];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[18];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[19];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[20];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[21];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[22];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[23];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[24];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[25];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[26];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[27];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[28];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[29];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[30];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[31];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[32];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[33];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[34];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[35];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[36];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[37];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[38];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[39];
    let indexKey = 40;
    if (rounds > 10) {
      s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[40];
      s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[41];
      s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[42];
      s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[43];
      t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[44];
      t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[45];
      t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[46];
      t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[47];
      indexKey = 48;
    }
    if (rounds > 12) {
      s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[48];
      s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[49];
      s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[50];
      s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[51];
      t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[52];
      t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[53];
      t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[54];
      t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[55];
      indexKey = 56;
    }
    keystream[0] = (S_BOX[t0 >>> 24] << 24 | S_BOX[t1 >>> 16 & 255] << 16 | S_BOX[t2 >>> 8 & 255] << 8 | S_BOX[t3 & 255]) ^ roundKeys[indexKey];
    keystream[1] = (S_BOX[t1 >>> 24] << 24 | S_BOX[t2 >>> 16 & 255] << 16 | S_BOX[t3 >>> 8 & 255] << 8 | S_BOX[t0 & 255]) ^ roundKeys[indexKey + 1];
    keystream[2] = (S_BOX[t2 >>> 24] << 24 | S_BOX[t3 >>> 16 & 255] << 16 | S_BOX[t0 >>> 8 & 255] << 8 | S_BOX[t1 & 255]) ^ roundKeys[indexKey + 2];
    keystream[3] = (S_BOX[t3 >>> 24] << 24 | S_BOX[t0 >>> 16 & 255] << 16 | S_BOX[t1 >>> 8 & 255] << 8 | S_BOX[t2 & 255]) ^ roundKeys[indexKey + 3];
  }
}
function pbkdf2(password, salt, iterations, length) {
  const hmac = createHmac(password);
  const result = new Uint8Array(length);
  const block = new Uint8Array(salt.length + 4);
  const blockView = new DataView(block.buffer);
  block.set(salt);
  for (let indexBlock = 1, offset = 0; offset < length; indexBlock++, offset += SHA1_DIGEST_LENGTH) {
    blockView.setUint32(salt.length, indexBlock);
    hmac.update(block, 0, block.length);
    let previous = hmac.digest();
    const output = previous.slice();
    for (let iteration = 1; iteration < iterations; iteration++) {
      hmac.update(previous, 0, SHA1_DIGEST_LENGTH);
      previous = hmac.digest();
      for (let indexByte = 0; indexByte < SHA1_DIGEST_LENGTH; indexByte++) {
        output[indexByte] ^= previous[indexByte];
      }
    }
    result.set(output.subarray(0, Math.min(SHA1_DIGEST_LENGTH, length - offset)), offset);
  }
  return result;
}
function createHmac(key) {
  const sha1 = createSha1();
  const innerKey = new Uint8Array(SHA1_BLOCK_LENGTH);
  const outerKey = new Uint8Array(SHA1_BLOCK_LENGTH);
  if (key.length > SHA1_BLOCK_LENGTH) {
    sha1.update(key, 0, key.length);
    key = sha1.digest();
  }
  for (let indexByte = 0; indexByte < SHA1_BLOCK_LENGTH; indexByte++) {
    const keyByte = indexByte < key.length ? key[indexByte] : 0;
    innerKey[indexByte] = keyByte ^ HMAC_INNER_PADDING;
    outerKey[indexByte] = keyByte ^ HMAC_OUTER_PADDING;
  }
  sha1.update(innerKey, 0, SHA1_BLOCK_LENGTH);
  return {
    update(data, offset, length) {
      sha1.update(data, offset, length);
    },
    digest() {
      const innerDigest = sha1.digest();
      sha1.update(outerKey, 0, SHA1_BLOCK_LENGTH);
      sha1.update(innerDigest, 0, SHA1_DIGEST_LENGTH);
      const result = sha1.digest();
      sha1.update(innerKey, 0, SHA1_BLOCK_LENGTH);
      return result;
    }
  };
}
function createSha1() {
  const state = new Int32Array(SHA1_INITIAL_STATE);
  const schedule = new Int32Array(SHA1_SCHEDULE_LENGTH);
  const block = new Uint8Array(SHA1_BLOCK_LENGTH);
  const blockView = new DataView(block.buffer);
  const lengthBytes = new Uint8Array(8);
  let blockLength = 0;
  let totalLength = 0;
  return {
    update,
    digest
  };
  function update(data, offset, length) {
    const end = offset + length;
    totalLength += length;
    if (blockLength) {
      while (offset < end && blockLength < SHA1_BLOCK_LENGTH) {
        block[blockLength++] = data[offset++];
      }
      if (blockLength == SHA1_BLOCK_LENGTH) {
        compress(blockView, 0);
        blockLength = 0;
      }
    }
    if (offset + SHA1_BLOCK_LENGTH <= end) {
      const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
      for (; offset + SHA1_BLOCK_LENGTH <= end; offset += SHA1_BLOCK_LENGTH) {
        compress(view, offset);
      }
    }
    while (offset < end) {
      block[blockLength++] = data[offset++];
    }
  }
  function digest() {
    const bits = totalLength * 8;
    const high = Math.floor(bits / 4294967296);
    const low = bits >>> 0;
    update(SHA1_PADDING, 0, 1);
    while (blockLength != SHA1_LENGTH_OFFSET) {
      update(SHA1_ZERO, 0, 1);
    }
    lengthBytes[0] = high >>> 24;
    lengthBytes[1] = high >>> 16;
    lengthBytes[2] = high >>> 8;
    lengthBytes[3] = high;
    lengthBytes[4] = low >>> 24;
    lengthBytes[5] = low >>> 16;
    lengthBytes[6] = low >>> 8;
    lengthBytes[7] = low;
    update(lengthBytes, 0, 8);
    const result = new Uint8Array(SHA1_DIGEST_LENGTH);
    const resultView = new DataView(result.buffer);
    for (let indexWord = 0; indexWord < state.length; indexWord++) {
      resultView.setInt32(4 * indexWord, state[indexWord]);
    }
    state.set(SHA1_INITIAL_STATE);
    blockLength = 0;
    totalLength = 0;
    return result;
  }
  function compress(view, offset) {
    for (let index = 0; index < 16; index++) {
      schedule[index] = view.getInt32(offset + 4 * index);
    }
    let a = state[0];
    let b = state[1];
    let c = state[2];
    let d = state[3];
    let e = state[4];
    let t;
    for (let index = 0; index < 15; index += 5) {
      e = (a << 5 | a >>> 27) + ((c ^ d) & b ^ d) + e + 1518500249 + schedule[index] | 0;
      b = b << 30 | b >>> 2;
      d = (e << 5 | e >>> 27) + ((b ^ c) & a ^ c) + d + 1518500249 + schedule[index + 1] | 0;
      a = a << 30 | a >>> 2;
      c = (d << 5 | d >>> 27) + ((a ^ b) & e ^ b) + c + 1518500249 + schedule[index + 2] | 0;
      e = e << 30 | e >>> 2;
      b = (c << 5 | c >>> 27) + ((e ^ a) & d ^ a) + b + 1518500249 + schedule[index + 3] | 0;
      d = d << 30 | d >>> 2;
      a = (b << 5 | b >>> 27) + ((d ^ e) & c ^ e) + a + 1518500249 + schedule[index + 4] | 0;
      c = c << 30 | c >>> 2;
    }
    e = (a << 5 | a >>> 27) + ((c ^ d) & b ^ d) + e + 1518500249 + schedule[15] | 0;
    b = b << 30 | b >>> 2;
    t = schedule[13] ^ schedule[8] ^ schedule[2] ^ schedule[0];
    t = t << 1 | t >>> 31;
    schedule[0] = t;
    d = (e << 5 | e >>> 27) + ((b ^ c) & a ^ c) + d + 1518500249 + t | 0;
    a = a << 30 | a >>> 2;
    t = schedule[14] ^ schedule[9] ^ schedule[3] ^ schedule[1];
    t = t << 1 | t >>> 31;
    schedule[1] = t;
    c = (d << 5 | d >>> 27) + ((a ^ b) & e ^ b) + c + 1518500249 + t | 0;
    e = e << 30 | e >>> 2;
    t = schedule[15] ^ schedule[10] ^ schedule[4] ^ schedule[2];
    t = t << 1 | t >>> 31;
    schedule[2] = t;
    b = (c << 5 | c >>> 27) + ((e ^ a) & d ^ a) + b + 1518500249 + t | 0;
    d = d << 30 | d >>> 2;
    t = schedule[0] ^ schedule[11] ^ schedule[5] ^ schedule[3];
    t = t << 1 | t >>> 31;
    schedule[3] = t;
    a = (b << 5 | b >>> 27) + ((d ^ e) & c ^ e) + a + 1518500249 + t | 0;
    c = c << 30 | c >>> 2;
    for (let index = 20; index < 40; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b ^ c ^ d) + e + 1859775393 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a ^ b ^ c) + d + 1859775393 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e ^ a ^ b) + c + 1859775393 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d ^ e ^ a) + b + 1859775393 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c ^ d ^ e) + a + 1859775393 + t | 0;
      c = c << 30 | c >>> 2;
    }
    for (let index = 40; index < 60; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b & c | (b | c) & d) + e + 2400959708 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a & b | (a | b) & c) + d + 2400959708 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e & a | (e | a) & b) + c + 2400959708 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d & e | (d | e) & a) + b + 2400959708 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c & d | (c | d) & e) + a + 2400959708 + t | 0;
      c = c << 30 | c >>> 2;
    }
    for (let index = 60; index < 80; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b ^ c ^ d) + e + 3395469782 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a ^ b ^ c) + d + 3395469782 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e ^ a ^ b) + c + 3395469782 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d ^ e ^ a) + b + 3395469782 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c ^ d ^ e) + a + 3395469782 + t | 0;
      c = c << 30 | c >>> 2;
    }
    state[0] = state[0] + a | 0;
    state[1] = state[1] + b | 0;
    state[2] = state[2] + c | 0;
    state[3] = state[3] + d | 0;
    state[4] = state[4] + e | 0;
  }
}
function initTables() {
  if (!tablesInitialized) {
    let p2 = 1;
    let q2 = 1;
    do {
      p2 = (p2 ^ p2 << 1 ^ (p2 & 128 ? 27 : 0)) & 255;
      q2 = (q2 ^ q2 << 1) & 255;
      q2 = (q2 ^ q2 << 2) & 255;
      q2 = (q2 ^ q2 << 4) & 255;
      if (q2 & 128) {
        q2 ^= 9;
      }
      S_BOX[p2] = (q2 ^ (q2 << 1 | q2 >> 7) ^ (q2 << 2 | q2 >> 6) ^ (q2 << 3 | q2 >> 5) ^ (q2 << 4 | q2 >> 4) ^ 99) & 255;
    } while (p2 != 1);
    S_BOX[0] = 99;
    for (let index = 0; index < 256; index++) {
      const s = S_BOX[index];
      const s2 = multiplyByTwo(s);
      const t = s2 << 24 | s << 16 | s << 8 | s2 ^ s;
      T02[index] = t;
      T12[index] = t >>> 8 | t << 24;
      T22[index] = t >>> 16 | t << 16;
      T32[index] = t >>> 24 | t << 8;
    }
    tablesInitialized = true;
  }
}
function expandKey(key, roundKeys) {
  const keyWords = key.length >> 2;
  const rounds = keyWords + 6;
  const total = 4 * (rounds + 1);
  let roundConstant = 1;
  for (let index = 0; index < keyWords; index++) {
    roundKeys[index] = key[4 * index] << 24 | key[4 * index + 1] << 16 | key[4 * index + 2] << 8 | key[4 * index + 3];
  }
  for (let index = keyWords; index < total; index++) {
    let word = roundKeys[index - 1];
    if (index % keyWords == 0) {
      word = substituteWord(word << 8 | word >>> 24) ^ roundConstant << 24;
      roundConstant = multiplyByTwo(roundConstant);
    } else if (keyWords > 6 && index % keyWords == 4) {
      word = substituteWord(word);
    }
    roundKeys[index] = roundKeys[index - keyWords] ^ word;
  }
  return rounds;
}
function substituteWord(word) {
  return S_BOX[word >>> 24] << 24 | S_BOX[word >>> 16 & 255] << 16 | S_BOX[word >>> 8 & 255] << 8 | S_BOX[word & 255];
}
function swapBytes(value) {
  return value << 24 | (value & 65280) << 8 | value >>> 8 & 65280 | value >>> 24;
}
function multiplyByTwo(value) {
  return (value << 1 ^ (value >> 7) * 27) & 255;
}
var BLOCK_LENGTH, ROUND_KEYS_LENGTH, SHA1_BLOCK_LENGTH, SHA1_DIGEST_LENGTH, SHA1_SCHEDULE_LENGTH, SHA1_LENGTH_OFFSET, SHA1_PADDING, SHA1_ZERO, SHA1_INITIAL_STATE, HMAC_INNER_PADDING, HMAC_OUTER_PADDING, S_BOX, T02, T12, T22, T32, tablesInitialized;
var init_aes_hmac_sha1 = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/codecs/aes-hmac-sha1.js"() {
    BLOCK_LENGTH = 16;
    ROUND_KEYS_LENGTH = 60;
    SHA1_BLOCK_LENGTH = 64;
    SHA1_DIGEST_LENGTH = 20;
    SHA1_SCHEDULE_LENGTH = 16;
    SHA1_LENGTH_OFFSET = 56;
    SHA1_PADDING = new Uint8Array([128]);
    SHA1_ZERO = new Uint8Array(1);
    SHA1_INITIAL_STATE = new Int32Array([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    HMAC_INNER_PADDING = 54;
    HMAC_OUTER_PADDING = 92;
    S_BOX = new Uint8Array(256);
    T02 = new Int32Array(256);
    T12 = new Int32Array(256);
    T22 = new Int32Array(256);
    T32 = new Int32Array(256);
    tablesInitialized = false;
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js
function getRandomValues(array) {
  if (GET_RANDOM_VALUES_SUPPORTED) {
    return crypto.getRandomValues(array);
  } else {
    throw new Error(ERR_UNSUPPORTED_CRYPTO_API);
  }
}
var GET_RANDOM_VALUES_SUPPORTED, ERR_INVALID_PASSWORD, ERR_INVALID_AUTHENTICATION_CODE, ERR_ABORT_CHECK_PASSWORD, ERR_UNSUPPORTED_CRYPTO_API;
var init_common_crypto = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js"() {
    init_constants();
    GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE;
    ERR_INVALID_PASSWORD = "Invalid password";
    ERR_INVALID_AUTHENTICATION_CODE = "Invalid authentication code";
    ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
    ERR_UNSUPPORTED_CRYPTO_API = "Crypto API not supported";
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js
function initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength) {
  Object.assign(aesCrypto, {
    ready: new Promise((resolve2) => aesCrypto.resolveReady = resolve2),
    password: encodePassword(password, rawPassword),
    strength: encryptionStrength - 1,
    pendingInput: EMPTY_UINT8_ARRAY,
    discarded: false
  });
}
function setDisposingReadable(stream, aesCrypto) {
  const reader = stream.readable.getReader();
  const readable = new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        disposeEngine(aesCrypto);
        reader.cancel(error).catch(() => {
        });
        throw error;
      }
    },
    cancel(reason) {
      disposeEngine(aesCrypto);
      return reader.cancel(reason);
    }
  });
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function append(aesCrypto, input, output, paddingStart, paddingEnd, decrypt2) {
  const {
    engine,
    pendingInput
  } = aesCrypto;
  if (pendingInput.length) {
    input = concat(pendingInput, input);
  }
  const inputLength = input.length - paddingEnd;
  const alignedLength = inputLength - inputLength % BLOCK_LENGTH2;
  output = expand(output, paddingStart + alignedLength);
  if (alignedLength) {
    const chunk = subarray(output, paddingStart, paddingStart + alignedLength);
    chunk.set(subarray(input, 0, alignedLength));
    engine.process(chunk, decrypt2);
  }
  aesCrypto.pendingInput = subarray(input, alignedLength);
  return output;
}
async function createDecryptionKeys(decrypt2, strength, password, preamble) {
  const passwordVerificationKey = await createKeys(decrypt2, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
  const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
  if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) {
    disposeEngine(decrypt2);
    throw new Error(ERR_INVALID_PASSWORD);
  }
}
function disposeEngine(aesCrypto) {
  const { engine } = aesCrypto;
  aesCrypto.discarded = true;
  if (engine && engine.dispose) {
    engine.dispose();
  }
}
async function createEncryptionKeys(encrypt2, strength, password) {
  const salt = getRandomValues(new Uint8Array(SALT_LENGTH[strength]));
  const passwordVerification = await createKeys(encrypt2, strength, password, salt);
  return concat(salt, passwordVerification);
}
async function createKeys(aesCrypto, strength, password, salt) {
  aesCrypto.password = null;
  const keyLength = KEY_LENGTH[strength];
  const compositeKey = await deriveKey(password, salt, keyLength * 2 + PASSWORD_VERIFICATION_LENGTH);
  aesCrypto.engine = createEngine2(subarray(compositeKey, 0, keyLength), subarray(compositeKey, keyLength, keyLength * 2));
  if (aesCrypto.discarded) {
    disposeEngine(aesCrypto);
  }
  return subarray(compositeKey, keyLength * 2);
}
async function deriveKey(password, salt, length) {
  if (DERIVE_BITS_SUPPORTED) {
    try {
      const baseKey = await subtle.importKey(RAW_FORMAT, password, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
      return new Uint8Array(await subtle.deriveBits(Object.assign({ salt }, DERIVED_BITS_ALGORITHM), baseKey, length * 8));
    } catch {
      DERIVE_BITS_SUPPORTED = false;
    }
  }
  return pbkdf2(password, salt, PBKDF2_ITERATIONS, length);
}
function encodePassword(password, rawPassword) {
  if (rawPassword === UNDEFINED_VALUE) {
    return encodeText(password);
  } else {
    return rawPassword;
  }
}
function expand(inputArray, length) {
  if (length && length > inputArray.length) {
    const array = inputArray;
    inputArray = new Uint8Array(length);
    inputArray.set(array, 0);
  }
  return inputArray;
}
function subarray(array, begin, end) {
  return array.subarray(begin, end);
}
var BLOCK_LENGTH2, RAW_FORMAT, PBKDF2_ALGORITHM, HASH_ALGORITHM, HASH_FUNCTION, PBKDF2_ITERATIONS, BASE_KEY_ALGORITHM, DERIVED_BITS_ALGORITHM, DERIVED_BITS_USAGE, SALT_LENGTH, KEY_LENGTH, AUTHENTICATION_CODE_LENGTH, PASSWORD_VERIFICATION_LENGTH, CRYPTO_API_SUPPORTED, subtle, SUBTLE_API_SUPPORTED, DERIVE_BITS_SUPPORTED, createEngine2, AESDecryptionStream, AESEncryptionStream;
var init_aes_crypto_stream = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js"() {
    init_constants();
    init_encode_text();
    init_array();
    init_aes_hmac_sha1();
    init_common_crypto();
    BLOCK_LENGTH2 = 16;
    RAW_FORMAT = "raw";
    PBKDF2_ALGORITHM = { name: "PBKDF2" };
    HASH_ALGORITHM = { name: "HMAC" };
    HASH_FUNCTION = "SHA-1";
    PBKDF2_ITERATIONS = 1e3;
    BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM);
    DERIVED_BITS_ALGORITHM = Object.assign({ iterations: PBKDF2_ITERATIONS, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM);
    DERIVED_BITS_USAGE = ["deriveBits"];
    SALT_LENGTH = [8, 12, 16];
    KEY_LENGTH = [16, 24, 32];
    AUTHENTICATION_CODE_LENGTH = 10;
    PASSWORD_VERIFICATION_LENGTH = 2;
    CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
    subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
    SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
    DERIVE_BITS_SUPPORTED = SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE && typeof subtle.deriveBits == FUNCTION_TYPE;
    createEngine2 = createEngine;
    AESDecryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, encryptionStrength, checkPasswordOnly, checkAuthenticationCode = true }) {
        const aesCrypto = {};
        super({
          start() {
            initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength);
          },
          async transform(chunk, controller) {
            const {
              password: password2,
              strength,
              resolveReady,
              ready
            } = aesCrypto;
            if (password2) {
              await createDecryptionKeys(aesCrypto, strength, password2, subarray(chunk, 0, SALT_LENGTH[strength] + PASSWORD_VERIFICATION_LENGTH));
              chunk = subarray(chunk, SALT_LENGTH[strength] + PASSWORD_VERIFICATION_LENGTH);
              if (checkPasswordOnly) {
                disposeEngine(aesCrypto);
                controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
              } else {
                resolveReady();
              }
            } else {
              await ready;
            }
            if (aesCrypto.discarded) {
              return;
            }
            const output = new Uint8Array(chunk.length - AUTHENTICATION_CODE_LENGTH - (chunk.length - AUTHENTICATION_CODE_LENGTH) % BLOCK_LENGTH2);
            controller.enqueue(append(aesCrypto, chunk, output, 0, AUTHENTICATION_CODE_LENGTH, true));
          },
          async flush(controller) {
            const {
              engine,
              pendingInput,
              ready
            } = aesCrypto;
            if (engine) {
              await ready;
              if (aesCrypto.discarded) {
                return;
              }
              const originalAuthenticationCode = subarray(pendingInput, pendingInput.length - AUTHENTICATION_CODE_LENGTH);
              const decryptedChunkArray = new Uint8Array(subarray(pendingInput, 0, pendingInput.length - AUTHENTICATION_CODE_LENGTH));
              engine.process(decryptedChunkArray, true);
              const authenticationCode = engine.digest();
              let invalidAuthenticationCode = pendingInput.length < AUTHENTICATION_CODE_LENGTH ? 1 : 0;
              for (let indexByte = 0; indexByte < AUTHENTICATION_CODE_LENGTH; indexByte++) {
                invalidAuthenticationCode |= authenticationCode[indexByte] ^ originalAuthenticationCode[indexByte];
              }
              if (invalidAuthenticationCode && checkAuthenticationCode) {
                controller.error(new Error(ERR_INVALID_AUTHENTICATION_CODE));
                return;
              }
              controller.enqueue(decryptedChunkArray);
            }
          }
        });
        setDisposingReadable(this, aesCrypto);
      }
    };
    AESEncryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, encryptionStrength }) {
        const aesCrypto = {};
        super({
          start() {
            initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength);
          },
          async transform(chunk, controller) {
            const {
              password: password2,
              strength,
              resolveReady,
              ready
            } = aesCrypto;
            let preamble = EMPTY_UINT8_ARRAY;
            if (password2) {
              preamble = await createEncryptionKeys(aesCrypto, strength, password2);
              resolveReady();
            } else {
              await ready;
            }
            if (aesCrypto.discarded) {
              return;
            }
            const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH2);
            output.set(preamble, 0);
            controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0, false));
          },
          async flush(controller) {
            const {
              engine,
              pendingInput,
              ready
            } = aesCrypto;
            if (engine) {
              await ready;
              if (aesCrypto.discarded) {
                return;
              }
              const encryptedChunkArray = new Uint8Array(pendingInput);
              engine.process(encryptedChunkArray, false);
              const authenticationCode = subarray(engine.digest(), 0, AUTHENTICATION_CODE_LENGTH);
              controller.enqueue(concat(encryptedChunkArray, authenticationCode));
            }
          }
        });
        setDisposingReadable(this, aesCrypto);
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js
function initZipCrypto(zipCrypto, password, rawPassword, passwordVerification) {
  Object.assign(zipCrypto, {
    password,
    rawPassword,
    passwordVerification
  });
  createKeys2(zipCrypto, password, rawPassword);
}
function decrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, output[index]);
  }
  return output;
}
function encrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, input[index]);
  }
  return output;
}
function createKeys2(target, password, rawPassword) {
  const cryptoKeys = [305419896, 591751049, 878082192];
  Object.assign(target, {
    cryptoKeys,
    crcKey0: new Crc32(cryptoKeys[0]),
    crcKey2: new Crc32(cryptoKeys[2])
  });
  if (rawPassword) {
    for (let index = 0; index < rawPassword.length; index++) {
      updateKeys(target, rawPassword[index]);
    }
  } else {
    for (let index = 0; index < password.length; index++) {
      updateKeys(target, password.charCodeAt(index));
    }
  }
}
function updateKeys(target, byte) {
  let [, key1] = target.cryptoKeys;
  target.crcKey0.append([byte]);
  const key0 = ~target.crcKey0.get();
  key1 = getInt32(Math.imul(getInt32(key1 + getInt8(key0)), 134775813) + 1);
  target.crcKey2.append([key1 >>> 24]);
  const key2 = ~target.crcKey2.get();
  target.cryptoKeys = [key0, key1, key2];
}
function getByte(target) {
  const temp = target.cryptoKeys[2] | 2;
  return getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt8(number) {
  return number & 255;
}
function getInt32(number) {
  return number & 4294967295;
}
var HEADER_LENGTH, ZipCryptoDecryptionStream, ZipCryptoEncryptionStream;
var init_zip_crypto_stream = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js"() {
    init_crc32();
    init_common_crypto();
    HEADER_LENGTH = 12;
    ZipCryptoDecryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, passwordVerification, checkPasswordOnly }) {
        super({
          start() {
            initZipCrypto(this, password, rawPassword, passwordVerification);
          },
          transform(chunk, controller) {
            const zipCrypto = this;
            if (zipCrypto.password || zipCrypto.rawPassword) {
              const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
              zipCrypto.password = zipCrypto.rawPassword = null;
              if ((decryptedHeader[HEADER_LENGTH - 1] ^ zipCrypto.passwordVerification) != 0) {
                throw new Error(ERR_INVALID_PASSWORD);
              }
              chunk = chunk.subarray(HEADER_LENGTH);
            }
            if (checkPasswordOnly) {
              controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
            } else {
              controller.enqueue(decrypt(zipCrypto, chunk));
            }
          }
        });
      }
    };
    ZipCryptoEncryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, passwordVerification }) {
        super({
          start() {
            initZipCrypto(this, password, rawPassword, passwordVerification);
          },
          transform(chunk, controller) {
            const zipCrypto = this;
            let output;
            let offset;
            if (zipCrypto.password || zipCrypto.rawPassword) {
              zipCrypto.password = zipCrypto.rawPassword = null;
              const header = getRandomValues(new Uint8Array(HEADER_LENGTH));
              header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
              output = new Uint8Array(chunk.length + header.length);
              output.set(encrypt(zipCrypto, header), 0);
              offset = HEADER_LENGTH;
            } else {
              output = new Uint8Array(chunk.length);
              offset = 0;
            }
            output.set(encrypt(zipCrypto, chunk), offset);
            controller.enqueue(output);
          }
        });
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/compatible-streams.js
function toCompatibleReadable(readable) {
  if (readable instanceof ReadableStream) {
    return readable;
  }
  const reader = readable.getReader();
  return new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        reader.cancel(error).catch(() => {
        });
        throw error;
      }
    },
    cancel(reason) {
      return reader.cancel(reason);
    }
  });
}
function streamToBlob(readable, contentType) {
  readable = toCompatibleReadable(readable);
  const blobOptions = contentType ? { type: contentType } : {};
  if (responseSupportsGlobalReadable()) {
    return new Response(readable).blob().then((blob) => contentType ? new Blob([blob], blobOptions) : blob);
  }
  const chunks = [];
  return readable.pipeTo(new WritableStream({
    write(chunk) {
      chunks.push(chunk);
    }
  })).then(() => new Blob(chunks, blobOptions));
}
function responseSupportsGlobalReadable() {
  return typeof Blob.prototype.stream != FUNCTION_TYPE || new Blob([]).stream() instanceof ReadableStream;
}
function toCompatibleWritable(writable) {
  if (writable instanceof WritableStream) {
    return writable;
  }
  const writer = writable.getWriter();
  return new WritableStream({
    write(chunk) {
      return writer.write(chunk);
    },
    close() {
      return writer.close();
    },
    abort(reason) {
      return writer.abort(reason);
    }
  });
}
var init_compatible_streams = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/compatible-streams.js"() {
    init_constants();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/codec-registry.js
function getRegisteredCodec(compressionMethod) {
  return registeredCodecs.get(compressionMethod);
}
function getCodecStreams(format) {
  return codecStreams.get(format);
}
function setCodecStreams(format, streams) {
  const { CompressionStream: CompressionStream2, DecompressionStream: DecompressionStream2 } = streams;
  if (typeof CompressionStream2 != FUNCTION_TYPE && typeof DecompressionStream2 != FUNCTION_TYPE) {
    throw new Error(ERR_INVALID_CODEC_MODULE);
  }
  codecStreams.set(format, { CompressionStream: CompressionStream2, DecompressionStream: DecompressionStream2 });
}
async function ensureCodecStreams(format, codecURI) {
  if (!codecStreams.has(format) && codecURI) {
    setCodecStreams(format, await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      codecURI
    ));
  }
}
var ERR_INVALID_CODEC_MODULE, ERR_UNSUPPORTED_COMPRESSION, registeredCodecs, codecStreams;
var init_codec_registry = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/codec-registry.js"() {
    init_constants();
    ERR_INVALID_CODEC_MODULE = "Invalid codec module";
    ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
    registeredCodecs = /* @__PURE__ */ new Map();
    codecStreams = /* @__PURE__ */ new Map();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js
function pipeThroughGzipDecompressionStream(readable, gzipStream, outputSize, crc32, sourceErrors) {
  const writer = gzipStream.writable.getWriter();
  const reader = gzipStream.readable.getReader();
  const outputCrc32 = crc32 === UNDEFINED_VALUE ? new Crc32() : UNDEFINED_VALUE;
  let outputLength = 0;
  let trailerWritten = false;
  let settled = false;
  let resolvePull, controller;
  const output = new ReadableStream({
    start(streamController) {
      controller = streamController;
    },
    pull() {
      resumePump();
    },
    cancel(reason) {
      settled = true;
      resumePump();
      return reader.cancel(reason);
    }
  });
  pump();
  drain();
  return output;
  async function pump() {
    const inputReader = readable.getReader();
    try {
      const header = new Uint8Array(GZIP_HEADER_LENGTH);
      header.set(GZIP_HEADER_BYTES);
      await writer.write(header);
      for (; ; ) {
        await outputCapacity();
        await writer.ready;
        const { value, done } = await readSource(inputReader, sourceErrors);
        if (done) {
          break;
        }
        await writer.write(value);
      }
      if (outputCrc32) {
        await writer.write(new Uint8Array(0));
      }
      const trailer = new Uint8Array(GZIP_TRAILER_LENGTH);
      const dataView = getDataView(trailer);
      dataView.setUint32(0, outputCrc32 ? outputCrc32.get() : crc32, true);
      dataView.setUint32(4, outputSize, true);
      trailerWritten = true;
      await writer.write(trailer);
      await writer.close();
    } catch (error) {
      await abort(writer, error);
      await cancel(inputReader, error);
    }
  }
  async function drain() {
    try {
      for (; ; ) {
        const { value, done } = await read();
        if (done) {
          break;
        }
        outputLength += value.length;
        if (outputLength > outputSize) {
          throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE);
        }
        if (outputCrc32) {
          outputCrc32.append(value);
        }
        controller.enqueue(value);
      }
      if (!settled) {
        settled = true;
        controller.close();
      }
    } catch (error) {
      fail(error);
      await cancel(reader, error);
    }
  }
  function read() {
    return reader.read().catch((error) => {
      if (trailerWritten) {
        if (!outputCrc32) {
          throw mapError(error, ERR_INVALID_CRC32);
        }
        if (outputLength != outputSize) {
          throw mapError(error, ERR_INVALID_UNCOMPRESSED_SIZE);
        }
        return { done: true };
      }
      throw mapCodecError(error, sourceErrors);
    });
  }
  function outputCapacity() {
    if (!settled && controller.desiredSize <= 0) {
      return new Promise((resolve2) => resolvePull = resolve2);
    }
  }
  function resumePump() {
    if (resolvePull) {
      const resolve2 = resolvePull;
      resolvePull = UNDEFINED_VALUE;
      resolve2();
    }
  }
  function fail(error) {
    if (!settled) {
      settled = true;
      controller.error(error);
      resumePump();
    }
  }
}
function supportsFormat(StreamClass, format) {
  if (!StreamClass) {
    return false;
  }
  let supportByFormat = formatSupportByStream.get(StreamClass);
  if (!supportByFormat) {
    supportByFormat = /* @__PURE__ */ new Map();
    formatSupportByStream.set(StreamClass, supportByFormat);
  }
  let supported = supportByFormat.get(format);
  if (supported === UNDEFINED_VALUE) {
    try {
      new StreamClass(format);
      supported = true;
    } catch {
      supported = false;
    }
    supportByFormat.set(format, supported);
  }
  return supported;
}
function supportsDeflateRaw(StreamClass) {
  return supportsFormat(StreamClass, FORMAT_DEFLATE_RAW);
}
function supportsGzip(StreamClass) {
  return supportsFormat(StreamClass, FORMAT_GZIP);
}
function setReadable(stream, readable, flush) {
  readable = pipeThrough(readable, new TransformStream({ flush }));
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function createCodecStream(CodecStreamClass, format, options) {
  if (!CodecStreamClass) {
    throw new Error(ERR_UNSUPPORTED_COMPRESSION);
  }
  return new CodecStreamClass(format, options);
}
function getGzipCodecStream(useCompressionStream, CodecStreamNative, CodecStreamFallback) {
  if (useCompressionStream && CodecStreamNative) {
    return CodecStreamNative;
  } else if (CodecStreamFallback && CodecStreamFallback.requiresModule) {
    return CodecStreamFallback;
  }
}
function pipeThroughCompressionStream(readable, useCompressionStream, options, CompressionStreamNative, CompressionStreamFallback, sourceErrors) {
  const Stream2 = useCompressionStream && CompressionStreamNative ? CompressionStreamNative : CompressionStreamFallback || CompressionStreamNative;
  const format = options.deflate64 ? FORMAT_DEFLATE64_RAW : FORMAT_DEFLATE_RAW;
  let codecStream;
  try {
    codecStream = new Stream2(format, options);
  } catch (error) {
    if (useCompressionStream && CompressionStreamFallback && Stream2 != CompressionStreamFallback) {
      codecStream = new CompressionStreamFallback(format, options);
    } else {
      throw error;
    }
  }
  return pipeThroughBackpressured(readable, codecStream, sourceErrors);
}
function pipeThrough(readable, transformStream) {
  return toCompatibleReadable(readable).pipeThrough(transformStream);
}
function pipeThroughBackpressured(readable, transformStream, sourceErrors) {
  const writer = transformStream.writable.getWriter();
  const reader = readable.getReader();
  pump();
  return transformStream.readable;
  async function pump() {
    try {
      for (; ; ) {
        await writer.ready;
        const result = await readSource(reader, sourceErrors);
        if (result.done) {
          await writer.close();
          break;
        }
        await writer.write(result.value);
      }
    } catch (error) {
      await abort(writer, error);
      await cancel(reader, error);
    }
  }
}
async function abort(writer, error) {
  try {
    await writer.abort(error);
  } catch {
  }
}
async function cancel(reader, error) {
  try {
    await reader.cancel(error);
  } catch {
  }
}
function readSource(reader, sourceErrors) {
  const result = reader.read();
  return sourceErrors ? result.catch((error) => {
    sourceErrors.add(error);
    throw error;
  }) : result;
}
function mapCodecError(error, sourceErrors) {
  if (sourceErrors.has(error)) {
    return error;
  }
  return mapError(error, isMemoryError(error) ? ERR_CODEC_OUT_OF_MEMORY : ERR_INVALID_COMPRESSED_DATA);
}
function mapMemoryError(error) {
  return isMemoryError(error) ? mapError(error, ERR_CODEC_OUT_OF_MEMORY) : error;
}
function isMemoryError(error) {
  return isErrorObject(error) && error.code == Z_MEM_ERROR_CODE;
}
function mapError(error, message) {
  const mappedError = new Error(message);
  mappedError.cause = error;
  return mappedError;
}
function mapInflateStreamError(readable, sourceErrors) {
  const reader = readable.getReader();
  return new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        await cancel(reader, error);
        throw mapCodecError(error, sourceErrors);
      }
    },
    cancel(reason) {
      return reader.cancel(reason);
    }
  });
}
var ERR_INVALID_UNCOMPRESSED_SIZE, ERR_INVALID_COMPRESSED_DATA, ERR_CODEC_OUT_OF_MEMORY, ERR_INVALID_CRC32, Z_MEM_ERROR_CODE, FORMAT_DEFLATE_RAW, FORMAT_DEFLATE64_RAW, FORMAT_GZIP, GZIP_HEADER_LENGTH, GZIP_TRAILER_LENGTH, GZIP_HEADER_BYTES, DeflateStream, GzipToRawDeflateStream, InflateStream, formatSupportByStream;
var init_zip_entry_stream = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js"() {
    init_crc32();
    init_crc32_stream();
    init_aes_crypto_stream();
    init_zip_crypto_stream();
    init_common_crypto();
    init_constants();
    init_array();
    init_compatible_streams();
    init_error();
    init_codec_registry();
    ERR_INVALID_UNCOMPRESSED_SIZE = "Invalid uncompressed size";
    ERR_INVALID_COMPRESSED_DATA = "Invalid compressed data";
    ERR_CODEC_OUT_OF_MEMORY = "Codec out of memory";
    ERR_INVALID_CRC32 = "Invalid CRC32";
    Z_MEM_ERROR_CODE = "Z_MEM_ERROR";
    FORMAT_DEFLATE_RAW = "deflate-raw";
    FORMAT_DEFLATE64_RAW = "deflate64-raw";
    FORMAT_GZIP = "gzip";
    GZIP_HEADER_LENGTH = 10;
    GZIP_TRAILER_LENGTH = 8;
    GZIP_HEADER_BYTES = [31, 139, 8];
    DeflateStream = class extends TransformStream {
      constructor(options, { chunkSize, CompressionStreamFallback, CompressionStream: CompressionStream2 }) {
        super({});
        const { compressed, encrypted, useCompressionStream, zipCrypto, computeCrc32, level, deflate64, format, compressionMethod, inputSize } = options;
        const stream = this;
        let crc32Stream, encryptionStream, gzipCrc32Stream;
        let readable = super.readable;
        const codecStreams2 = format && getCodecStreams(format);
        const GzipCompressionStream = getGzipCodecStream(useCompressionStream, CompressionStream2, CompressionStreamFallback);
        const useGzipCrc32 = computeCrc32 && compressed && !deflate64 && !codecStreams2 && (!encrypted || zipCrypto) && Boolean(GzipCompressionStream);
        if ((!encrypted || zipCrypto) && computeCrc32 && !useGzipCrc32) {
          crc32Stream = new Crc32Stream();
          readable = pipeThrough(readable, crc32Stream);
        }
        if (compressed) {
          if (codecStreams2) {
            readable = pipeThroughBackpressured(readable, createCodecStream(codecStreams2.CompressionStream, format, { level, chunkSize, compressionMethod, uncompressedSize: inputSize }));
          } else if (useGzipCrc32) {
            gzipCrc32Stream = new GzipToRawDeflateStream();
            readable = pipeThroughBackpressured(readable, new GzipCompressionStream(FORMAT_GZIP, { level, chunkSize }));
            readable = pipeThrough(readable, gzipCrc32Stream);
          } else {
            try {
              readable = pipeThroughCompressionStream(readable, useCompressionStream, { level, chunkSize }, CompressionStream2, CompressionStreamFallback);
            } catch (error) {
              if (!useCompressionStream && CompressionStreamFallback) {
                throw mapMemoryError(error);
              }
              let gzipStream;
              try {
                gzipStream = new CompressionStream2(FORMAT_GZIP);
              } catch {
                throw mapMemoryError(error);
              }
              readable = pipeThroughBackpressured(readable, gzipStream);
              readable = pipeThrough(readable, new GzipToRawDeflateStream());
            }
          }
        }
        if (encrypted) {
          if (zipCrypto) {
            readable = pipeThrough(readable, new ZipCryptoEncryptionStream(options));
          } else {
            encryptionStream = new AESEncryptionStream(options);
            readable = pipeThrough(readable, encryptionStream);
          }
        }
        setReadable(stream, readable, () => {
          if ((!encrypted || zipCrypto) && computeCrc32) {
            stream.crc32 = useGzipCrc32 ? gzipCrc32Stream.crc32 : new DataView(crc32Stream.value.buffer).getUint32(0);
          }
        });
      }
    };
    GzipToRawDeflateStream = class extends TransformStream {
      constructor() {
        let stream;
        let headerBytesLeft = GZIP_HEADER_LENGTH;
        let trailerCandidate = new Uint8Array(0);
        super({
          transform(chunk, controller) {
            if (headerBytesLeft) {
              const droppedLength = Math.min(headerBytesLeft, chunk.length);
              headerBytesLeft -= droppedLength;
              chunk = chunk.subarray(droppedLength);
              if (!chunk.length) {
                return;
              }
            }
            const availableLength = trailerCandidate.length + chunk.length;
            if (availableLength <= GZIP_TRAILER_LENGTH) {
              trailerCandidate = concat(trailerCandidate, chunk);
              return;
            }
            const emitLength = availableLength - GZIP_TRAILER_LENGTH;
            const emittedFromTrailer = Math.min(emitLength, trailerCandidate.length);
            controller.enqueue(concat(
              trailerCandidate.subarray(0, emittedFromTrailer),
              chunk.subarray(0, emitLength - emittedFromTrailer)
            ));
            trailerCandidate = concat(
              trailerCandidate.subarray(emittedFromTrailer),
              chunk.subarray(emitLength - emittedFromTrailer)
            );
          },
          flush() {
            const dataView = getDataView(trailerCandidate);
            stream.crc32 = dataView.getUint32(0, true);
            stream.uncompressedSize = dataView.getUint32(4, true);
          }
        });
        stream = this;
      }
    };
    InflateStream = class extends TransformStream {
      constructor(options, { chunkSize, DecompressionStreamFallback, DecompressionStream: DecompressionStream2 }) {
        super({});
        const { zipCrypto, encrypted, checkCrc32, crc32, compressed, useCompressionStream, deflate64, format, compressionMethod, rawBitFlag, outputSize } = options;
        let crc32Stream, decryptionStream, gzipCrc32;
        let readable = super.readable;
        if (encrypted) {
          if (zipCrypto) {
            readable = pipeThrough(readable, new ZipCryptoDecryptionStream(options));
          } else {
            decryptionStream = new AESDecryptionStream(options);
            readable = pipeThrough(readable, decryptionStream);
          }
        }
        if (compressed) {
          const sourceErrors = /* @__PURE__ */ new Set();
          const codecStreams2 = format && getCodecStreams(format);
          let gzipStream;
          if (codecStreams2) {
            readable = pipeThroughBackpressured(readable, createCodecStream(codecStreams2.DecompressionStream, format, { chunkSize, compressionMethod, rawBitFlag, uncompressedSize: outputSize }), sourceErrors);
          } else {
            const GzipDecompressionStream = getGzipCodecStream(useCompressionStream, DecompressionStream2, DecompressionStreamFallback);
            if (checkCrc32 && !deflate64 && crc32 !== UNDEFINED_VALUE && outputSize !== UNDEFINED_VALUE && GzipDecompressionStream) {
              try {
                gzipStream = new GzipDecompressionStream(FORMAT_GZIP, { chunkSize });
              } catch {
                gzipStream = UNDEFINED_VALUE;
              }
            }
            if (!gzipStream) {
              try {
                readable = pipeThroughCompressionStream(readable, useCompressionStream, { chunkSize, deflate64 }, DecompressionStream2, DecompressionStreamFallback, sourceErrors);
              } catch (error) {
                if (deflate64 || outputSize === UNDEFINED_VALUE || !useCompressionStream && DecompressionStreamFallback) {
                  throw mapMemoryError(error);
                }
                try {
                  gzipStream = new DecompressionStream2(FORMAT_GZIP);
                } catch {
                  throw mapMemoryError(error);
                }
              }
            }
          }
          if (gzipStream) {
            gzipCrc32 = true;
            readable = pipeThroughGzipDecompressionStream(readable, gzipStream, outputSize, crc32, sourceErrors);
          } else {
            readable = mapInflateStreamError(readable, sourceErrors);
          }
        }
        if (checkCrc32 && !gzipCrc32) {
          crc32Stream = new Crc32Stream();
          readable = pipeThrough(readable, crc32Stream);
        }
        setReadable(this, readable, () => {
          if (crc32Stream) {
            const computedCrc32 = new DataView(crc32Stream.value.buffer).getUint32(0, false);
            if (crc32 != computedCrc32) {
              throw new Error(ERR_INVALID_CRC32);
            }
          }
        });
      }
    };
    formatSupportByStream = /* @__PURE__ */ new Map();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js
var DEFAULT_CHUNK_SIZE2, MESSAGE_EVENT_TYPE, MESSAGE_START, MESSAGE_PULL, MESSAGE_DATA, MESSAGE_ACK_DATA, MESSAGE_CLOSE, CODEC_DEFLATE, CODEC_INFLATE, CodecStream, ChunkStream;
var init_codec_stream = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js"() {
    init_constants();
    init_zip_entry_stream();
    DEFAULT_CHUNK_SIZE2 = 256 * 1024;
    MESSAGE_EVENT_TYPE = "message";
    MESSAGE_START = "start";
    MESSAGE_PULL = "pull";
    MESSAGE_DATA = "data";
    MESSAGE_ACK_DATA = "ack";
    MESSAGE_CLOSE = "close";
    CODEC_DEFLATE = "deflate";
    CODEC_INFLATE = "inflate";
    CodecStream = class extends TransformStream {
      constructor(options, config2) {
        super({});
        const codec = this;
        const { codecType } = options;
        let Stream2;
        if (codecType.startsWith(CODEC_DEFLATE)) {
          Stream2 = DeflateStream;
        } else if (codecType.startsWith(CODEC_INFLATE)) {
          Stream2 = InflateStream;
        }
        codec.outputSize = 0;
        let inputSize = 0;
        const stream = new Stream2(options, config2);
        const readable = super.readable;
        const inputSizeStream = new TransformStream({
          transform(chunk, controller) {
            if (chunk && chunk.length) {
              inputSize += chunk.length;
              controller.enqueue(chunk);
            }
          },
          flush() {
            Object.assign(codec, {
              inputSize
            });
          }
        });
        const outputSizeStream = new TransformStream({
          transform(chunk, controller) {
            if (chunk && chunk.length) {
              controller.enqueue(chunk);
              codec.outputSize += chunk.length;
              if (options.outputSize !== UNDEFINED_VALUE && codec.outputSize > options.outputSize) {
                throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE);
              }
            }
          },
          flush() {
            const { crc32 } = stream;
            Object.assign(codec, {
              crc32,
              inputSize
            });
          }
        });
        Object.defineProperty(codec, "readable", {
          get() {
            return readable.pipeThrough(inputSizeStream).pipeThrough(stream).pipeThrough(outputSizeStream);
          }
        });
      }
    };
    ChunkStream = class extends TransformStream {
      constructor(chunkSize) {
        const pendingChunks = [];
        let pendingLength = 0;
        let outputSize = 0;
        if (!Number.isFinite(chunkSize) || chunkSize < 1) {
          chunkSize = DEFAULT_CHUNK_SIZE2;
        }
        super({
          transform(chunk, controller) {
            pendingChunks.push(chunk);
            pendingLength += chunk.length;
            while (pendingLength > chunkSize) {
              outputSize += chunkSize;
              controller.enqueue(shiftChunk());
            }
          },
          flush(controller) {
            if (pendingLength) {
              outputSize += pendingLength;
              controller.enqueue(concatChunks(pendingChunks, pendingLength));
            }
          }
        });
        Object.defineProperty(this, "outputSize", {
          get: () => outputSize
        });
        function shiftChunk() {
          const result = new Uint8Array(chunkSize);
          let resultOffset = 0;
          while (resultOffset < chunkSize) {
            const firstChunk = pendingChunks[0];
            const remainingLength = chunkSize - resultOffset;
            if (firstChunk.length <= remainingLength) {
              result.set(firstChunk, resultOffset);
              resultOffset += firstChunk.length;
              pendingChunks.shift();
            } else {
              result.set(firstChunk.subarray(0, remainingLength), resultOffset);
              pendingChunks[0] = firstChunk.subarray(remainingLength);
              resultOffset += remainingLength;
            }
          }
          pendingLength -= chunkSize;
          return result;
        }
        function concatChunks(chunks, length) {
          const result = new Uint8Array(length);
          let offset = 0;
          for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
          }
          return result;
        }
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/codec-worker.js
function setWebWorkerBackend(backend) {
  webWorkerBackend = backend;
}
async function supportsDeflate(config2) {
  const { CompressionStream: NativeStream, CompressionStreamFallback: FallbackStream } = config2;
  if (FallbackStream && !FallbackStream.requiresModule) {
    return true;
  }
  if (supportsDeflateRaw(NativeStream) || supportsGzip(NativeStream)) {
    return true;
  }
  if (FallbackStream) {
    return await loadModule(config2);
  }
  return false;
}
async function loadModule(config2) {
  if (initModule) {
    try {
      await initModule(config2);
      return true;
    } catch {
    }
  }
  return false;
}
function disableWebWorker(workerData) {
  if (workerData.createWorker) {
    createWorkerFailed = true;
  } else {
    webWorkerSupported = false;
  }
}
async function callHandler(handler, ...parameters) {
  try {
    await handler(...parameters);
  } catch {
  }
}
function createWorkerInterface(workerData, config2) {
  return {
    run: () => runWorker(workerData, config2)
  };
}
async function runWorker({ options, readable, writable, onTaskFinished, workerOptions }, config2) {
  let codecStream, chunkStream, modulePromise;
  try {
    if (options.compressed && !options.format) {
      const deflate = options.codecType.startsWith(CODEC_DEFLATE);
      const FallbackStream = deflate ? config2.CompressionStreamFallback : config2.DecompressionStreamFallback;
      const NativeStream = deflate ? config2.CompressionStream : config2.DecompressionStream;
      if (!options.useCompressionStream) {
        if (!await moduleLoaded() && (!FallbackStream || FallbackStream.requiresModule)) {
          options.useCompressionStream = true;
        }
      } else if (FallbackStream && FallbackStream.requiresModule && !supportsDeflateRaw(NativeStream)) {
        await moduleLoaded();
      }
    }
    if (options.encrypted && !options.zipCrypto) {
      await moduleLoaded();
    }
    codecStream = new CodecStream(options, config2);
    chunkStream = new ChunkStream(getChunkSize(config2));
    const { signal } = workerOptions.streamOptions;
    await readable.pipeThrough(codecStream).pipeThrough(chunkStream).pipeTo(writable, { preventClose: true, preventAbort: true, signal });
    const {
      crc32,
      inputSize,
      outputSize
    } = codecStream;
    return {
      crc32,
      inputSize,
      outputSize
    };
  } catch (error) {
    if (codecStream) {
      const outputSize = chunkStream ? chunkStream.outputSize : 0;
      workerOptions.outputSize = outputSize;
      if (isErrorObject(error)) {
        try {
          error.outputSize = outputSize;
        } catch {
        }
      }
    }
    throw error;
  } finally {
    onTaskFinished();
  }
  function moduleLoaded() {
    if (!modulePromise) {
      modulePromise = loadModule(config2);
    }
    return modulePromise;
  }
}
var ERR_WORKER_STARTUP_TIMEOUT, webWorkerSupported, createWorkerFailed, webWorkerBackend, initModule, CodecWorker, ProgressWatcherStream;
var init_codec_worker = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/codec-worker.js"() {
    init_constants();
    init_configuration();
    init_error();
    init_codec_stream();
    ERR_WORKER_STARTUP_TIMEOUT = "Worker startup timeout";
    initModule = () => {
    };
    CodecWorker = class {
      constructor(workerData, { readable, writable }, workerOptions, onTaskFinished) {
        const { options, config: config2, streamOptions, useWebWorkers, workerURI } = workerOptions;
        let { createWorker } = workerOptions;
        const { signal } = streamOptions;
        if (createWorkerFailed) {
          createWorker = UNDEFINED_VALUE;
        }
        Object.assign(workerData, {
          busy: true,
          generation: (workerData.generation || 0) + 1,
          readable: readable.pipeThrough(new ChunkStream(getChunkSize(config2))).pipeThrough(new ProgressWatcherStream(streamOptions), { signal }),
          writable,
          options: Object.assign({}, options),
          workerOptions,
          workerURI,
          createWorker,
          terminate() {
            return new Promise((resolve2) => {
              const { worker, busy } = workerData;
              if (busy) {
                workerData.terminateResolvers = workerData.terminateResolvers || [];
                workerData.terminateResolvers.push(resolve2);
              } else {
                if (worker) {
                  worker.terminate();
                  workerData.worker = null;
                }
                resolve2();
              }
              workerData.interface = null;
            });
          },
          onTaskFinished() {
            if (workerData.busy) {
              const { terminateResolvers, worker } = workerData;
              if (terminateResolvers) {
                workerData.terminateResolvers = null;
                if (worker) {
                  workerData.terminated = true;
                  worker.terminate();
                }
              }
              workerData.busy = false;
              const pendingTasks = onTaskFinished(workerData);
              if (terminateResolvers) {
                terminateResolvers.forEach((resolve2) => resolve2(pendingTasks));
              }
            }
          }
        });
        if (webWorkerSupported === UNDEFINED_VALUE) {
          webWorkerSupported = typeof Worker != UNDEFINED_TYPE;
        }
        return (useWebWorkers && webWorkerBackend && (webWorkerSupported && workerURI || createWorker) ? webWorkerBackend : createWorkerInterface)(workerData, config2);
      }
    };
    ProgressWatcherStream = class extends TransformStream {
      constructor({ onstart, onprogress, size, onend }) {
        let chunkOffset = 0;
        super({
          async start() {
            if (onstart) {
              await callHandler(onstart, size);
            }
          },
          async transform(chunk, controller) {
            chunkOffset += chunk.length;
            if (onprogress) {
              await callHandler(onprogress, chunkOffset, size);
            }
            controller.enqueue(chunk);
          },
          async flush() {
            if (onend) {
              await callHandler(onend, chunkOffset);
            }
          }
        });
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/codec-pool.js
async function runWorker2(stream, workerOptions) {
  const { options, config: config2 } = workerOptions;
  const { useWebWorkers, useCompressionStream, compressed, checkCrc32, computeCrc32, encrypted, format, codecURI } = options;
  const { workerURI, createWorker, maxWorkers: maxWorkers2 } = config2;
  if (format) {
    if (codecURI) {
      options.codecURI = resolveCodecURI(codecURI, config2.baseURI);
    }
    await ensureCodecStreams(format, options.codecURI);
  }
  const streamCopy = !compressed && !checkCrc32 && !computeCrc32 && !encrypted;
  const workerSupported = format === UNDEFINED_VALUE || Boolean(options.codecURI);
  workerOptions.useWebWorkers = !streamCopy && workerSupported && (useWebWorkers || useWebWorkers === UNDEFINED_VALUE && config2.useWebWorkers);
  workerOptions.workerURI = workerOptions.useWebWorkers && workerURI ? workerURI : UNDEFINED_VALUE;
  workerOptions.createWorker = workerOptions.useWebWorkers && createWorker ? createWorker : UNDEFINED_VALUE;
  options.useCompressionStream = useCompressionStream || useCompressionStream === UNDEFINED_VALUE && config2.useCompressionStream;
  return (await getWorker()).run();
  async function getWorker() {
    const workerData = pool.find((workerData2) => !workerData2.busy);
    if (workerData) {
      clearTerminateTimeout(workerData);
      return new CodecWorker(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers2) {
      const workerData2 = { indexWorker };
      indexWorker++;
      pool.push(workerData2);
      return new CodecWorker(workerData2, stream, workerOptions, onTaskFinished);
    } else {
      return new Promise((resolve2) => {
        pendingRequests.push({ resolve: resolve2, stream, workerOptions });
        starvationDelay = config2.workerStarvationTimeout;
        armStarvationTimeout();
      });
    }
  }
  function onTaskFinished(workerData) {
    clearStarvationTimeout();
    if (workerData.terminated) {
      workerData.terminated = false;
      return runPendingRequestsInline();
    } else if (pendingRequests.length) {
      const [{ resolve: resolve2, stream: stream2, workerOptions: workerOptions2 }] = pendingRequests.splice(0, 1);
      resolve2(new CodecWorker(workerData, stream2, workerOptions2, onTaskFinished));
      armStarvationTimeout();
    } else if (workerData.worker) {
      clearTerminateTimeout(workerData);
      terminateWorker2(workerData, workerOptions);
    } else {
      pool = pool.filter((data) => data != workerData);
    }
  }
}
function resolveCodecURI(codecURI, baseURI) {
  try {
    return new URL(codecURI, baseURI).toString();
  } catch {
    return codecURI;
  }
}
function armStarvationTimeout() {
  if (!starvationTimeout && pendingRequests.length && Number.isFinite(starvationDelay) && starvationDelay >= 0) {
    starvationTimeout = setTimeout(onWorkerStarvation, starvationDelay);
  }
}
function clearStarvationTimeout() {
  if (starvationTimeout) {
    clearTimeout(starvationTimeout);
    starvationTimeout = null;
  }
}
function onWorkerStarvation() {
  starvationTimeout = null;
  if (pendingRequests.length) {
    const [{ resolve: resolve2, stream, workerOptions }] = pendingRequests.splice(0, 1);
    resolve2(new CodecWorker({}, stream, getInlineWorkerOptions(workerOptions), onInlineTaskFinished));
    armStarvationTimeout();
  }
}
function runPendingRequestsInline() {
  const tasks = pendingRequests.splice(0).map(({ resolve: resolve2, stream, workerOptions }) => new Promise((resolveTask) => {
    resolve2(new CodecWorker({}, stream, getInlineWorkerOptions(workerOptions), () => {
      onInlineTaskFinished();
      resolveTask();
    }));
  }));
  clearStarvationTimeout();
  return Promise.all(tasks);
}
function getInlineWorkerOptions(workerOptions) {
  return Object.assign({}, workerOptions, { useWebWorkers: false, workerURI: UNDEFINED_VALUE, createWorker: UNDEFINED_VALUE });
}
function onInlineTaskFinished() {
  clearStarvationTimeout();
  armStarvationTimeout();
}
function terminateWorker2(workerData, workerOptions) {
  const { config: config2 } = workerOptions;
  const { terminateWorkerTimeout } = config2;
  if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) {
    workerData.terminateTimeout = setTimeout(async () => {
      pool = pool.filter((data) => data != workerData);
      try {
        await workerData.terminate();
      } catch {
      }
    }, terminateWorkerTimeout);
  }
}
function clearTerminateTimeout(workerData) {
  const { terminateTimeout } = workerData;
  if (terminateTimeout) {
    clearTimeout(terminateTimeout);
    workerData.terminateTimeout = null;
  }
}
var pool, pendingRequests, starvationTimeout, starvationDelay, indexWorker;
var init_codec_pool = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/codec-pool.js"() {
    init_constants();
    init_codec_stream();
    init_codec_registry();
    init_codec_worker();
    pool = [];
    pendingRequests = [];
    indexWorker = 0;
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/decode-cp437.js
function decodeCP437(stringValue) {
  let result = "";
  for (let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++) {
    result += CP437[stringValue[indexCharacter]];
  }
  return result;
}
var CP437;
var init_decode_cp437 = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/decode-cp437.js"() {
    CP437 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0\xA0".split("");
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/decode-text.js
function decodeText(value, encoding) {
  return decode(value, encoding, true);
}
function isUTF8Text(value) {
  if (value.some((byte) => byte > 127)) {
    try {
      new TextDecoder("utf-8", { fatal: true }).decode(value);
      return true;
    } catch {
      return false;
    }
  } else {
    return false;
  }
}
function decode(value, encoding, ignoreBOM) {
  if (encoding && encoding.trim().toLowerCase() == "cp437") {
    return decodeCP437(value);
  } else {
    return new TextDecoder(encoding, { ignoreBOM }).decode(value);
  }
}
var init_decode_text = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/decode-text.js"() {
    init_decode_cp437();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/io.js
function probeBlobSliceReliability() {
  blobSliceProbe = (async () => {
    try {
      const slicedBlob = new Blob([new Uint8Array(3)]).slice(1, 2);
      const streamReader = slicedBlob.stream().getReader();
      let streamedLength = 0;
      let result = await streamReader.read();
      while (!result.done) {
        streamedLength += result.value.length;
        result = await streamReader.read();
      }
      blobSliceReliable = streamedLength == 1;
    } catch {
      blobSliceReliable = false;
    }
  })();
}
function ownsWritable(writer) {
  return Boolean(writer && writer.getData);
}
async function initStream(stream, initSize) {
  if (stream.init && !stream.initialized) {
    await stream.init(initSize);
  } else {
    return Promise.resolve();
  }
}
async function initDiskReader(diskReader) {
  diskReader = new GenericReader(diskReader);
  await initStream(diskReader);
  if (diskReader.size === UNDEFINED_VALUE || !diskReader.readUint8Array) {
    diskReader = new BlobReader(await streamToBlob(diskReader.readable));
    await initStream(diskReader);
  }
  return diskReader;
}
function readUint8Array(reader, offset, size) {
  return reader.readUint8Array(offset, size);
}
function createReadable(reader, options) {
  if (reader.createReadable) {
    return reader.createReadable(options);
  } else if (reader.readUint8Array) {
    return Reader.prototype.createReadable.call(reader, options);
  } else {
    return reader.readable;
  }
}
var ERR_ITERATOR_COMPLETED_TOO_SOON, ERR_WRITER_SIZE_NOT_WRITABLE, DEFAULT_BUFFER_SIZE, DEFAULT_MAXIMUM_RANGE_SIZE, END_OF_CENTRAL_DIR_SEARCH_LENGTH, PROPERTY_NAME_WRITABLE, DISK_BOUNDARY, Stream, Reader, blobSliceReliable, blobSliceProbe, BlobReader, SplitDataReader, SplitDataWriter, GenericReader, GenericWriter;
var init_io = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/io.js"() {
    init_constants();
    init_configuration();
    init_array();
    init_compatible_streams();
    init_decode_text();
    ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
    ERR_WRITER_SIZE_NOT_WRITABLE = "Invalid writer (size must be writable)";
    DEFAULT_BUFFER_SIZE = 256 * 1024;
    DEFAULT_MAXIMUM_RANGE_SIZE = 16 * 1024 * 1024;
    END_OF_CENTRAL_DIR_SEARCH_LENGTH = END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS;
    PROPERTY_NAME_WRITABLE = "writable";
    DISK_BOUNDARY = /* @__PURE__ */ Symbol();
    Stream = class {
      constructor() {
        this.size = 0;
      }
      init() {
        this.initialized = true;
      }
    };
    Reader = class extends Stream {
      get readable() {
        return this.createReadable();
      }
      createReadable({ offset = 0, size, chunkSize = getChunkSize(getConfiguration()) } = {}) {
        const reader = this;
        let chunkOffset = 0;
        chunkSize = normalizeChunkSize(chunkSize);
        return new ReadableStream({
          async pull(controller) {
            const dataSize = size === UNDEFINED_VALUE ? chunkSize : Math.min(chunkSize, size - chunkOffset);
            const data = await readUint8Array(reader, offset + chunkOffset, dataSize);
            if (data.length) {
              controller.enqueue(data);
              chunkOffset += data.length;
            }
            if (size !== UNDEFINED_VALUE && chunkOffset >= size || !data.length && dataSize) {
              controller.close();
            }
          }
        });
      }
    };
    BlobReader = class extends Reader {
      constructor(blob) {
        super();
        Object.assign(this, {
          sourceBlob: blob,
          size: blob.size
        });
        if (!blobSliceProbe) {
          probeBlobSliceReliability();
        }
      }
      createReadable(options) {
        const reader = this;
        const { sourceBlob, size } = reader;
        const { offset = 0, size: readSize = size - offset } = options || {};
        if (typeof sourceBlob.stream == FUNCTION_TYPE) {
          if (!offset && readSize >= size) {
            return toCompatibleReadable(sourceBlob.stream());
          }
          if (blobSliceReliable) {
            return toCompatibleReadable(sourceBlob.slice(offset, offset + readSize).stream());
          }
        }
        return super.createReadable(options);
      }
      async readUint8Array(offset, length) {
        const reader = this;
        const offsetEnd = offset + length;
        const readsWholeBlob = !offset && offsetEnd >= reader.size;
        const blob = readsWholeBlob ? reader.sourceBlob : reader.sourceBlob.slice(offset, offsetEnd);
        let arrayBuffer = await blob.arrayBuffer();
        const sliceIgnoredByBuggyImplementation = arrayBuffer.byteLength > length;
        if (sliceIgnoredByBuggyImplementation) {
          arrayBuffer = arrayBuffer.slice(offset, offsetEnd);
        }
        return new Uint8Array(arrayBuffer);
      }
    };
    SplitDataReader = class extends Reader {
      constructor(readers) {
        super();
        this.readers = readers;
      }
      async init() {
        const reader = this;
        reader.lastDiskNumber = 0;
        const readers = reader.readers = await Promise.all(reader.readers.map(initDiskReader));
        reader.diskOffsets = readers.map((diskReader) => {
          const diskOffset = reader.size;
          reader.size += diskReader.size;
          return diskOffset;
        });
        super.init();
      }
      getDiskOffset(diskNumber) {
        const { diskOffsets, size } = this;
        const diskOffset = diskOffsets[diskNumber];
        return diskOffset === UNDEFINED_VALUE ? size : diskOffset;
      }
      async readUint8Array(offset, length) {
        const reader = this;
        const { readers } = this;
        let result;
        let currentDiskNumber = 0;
        let currentReaderOffset = offset;
        while (readers[currentDiskNumber] && currentReaderOffset >= readers[currentDiskNumber].size) {
          currentReaderOffset -= readers[currentDiskNumber].size;
          currentDiskNumber++;
        }
        const currentReader = readers[currentDiskNumber];
        if (currentReader) {
          const currentReaderSize = currentReader.size;
          if (currentReaderOffset + length <= currentReaderSize) {
            result = await readUint8Array(currentReader, currentReaderOffset, length);
          } else {
            const chunkLength = currentReaderSize - currentReaderOffset;
            const firstPart = await readUint8Array(currentReader, currentReaderOffset, chunkLength);
            const secondPart = await reader.readUint8Array(offset + chunkLength, length - chunkLength);
            result = concat(firstPart, secondPart);
          }
        } else {
          result = EMPTY_UINT8_ARRAY;
        }
        reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
        return result;
      }
    };
    SplitDataWriter = class extends Stream {
      constructor(writerGenerator, maxSize = 4294967295) {
        super();
        const writer = this;
        Object.assign(writer, {
          diskNumber: 0,
          diskOffset: 0,
          size: 0,
          maxSize,
          availableSize: maxSize
        });
        let diskSourceWriter, diskWritable, diskWriter;
        const writable = new WritableStream({
          async write(chunk) {
            if (chunk === DISK_BOUNDARY) {
              if (diskWriter) {
                await endDisk();
              }
              return;
            }
            const { availableSize } = writer;
            if (!diskWriter) {
              const { value, done } = await writerGenerator.next();
              if (done && !value) {
                throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
              } else {
                diskSourceWriter = value;
                diskSourceWriter.size = 0;
                if (diskSourceWriter.maxSize) {
                  writer.maxSize = diskSourceWriter.maxSize;
                }
                writer.availableSize = writer.maxSize;
                await initStream(diskSourceWriter);
                diskWritable = value.writable;
                diskWriter = diskWritable.getWriter();
              }
              await this.write(chunk);
            } else if (chunk.length >= availableSize) {
              await writeChunk(chunk.subarray(0, availableSize));
              await endDisk();
              if (chunk.length > availableSize) {
                await this.write(chunk.subarray(availableSize));
              }
            } else {
              await writeChunk(chunk);
            }
          },
          async close() {
            if (diskWriter) {
              await diskWriter.ready;
              await closeDiskWriter();
            }
          },
          async abort(reason) {
            if (diskWriter) {
              await diskWriter.abort(reason);
            }
          }
        });
        Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
          get() {
            return writable;
          }
        });
        async function writeChunk(chunk) {
          const chunkLength = chunk.length;
          if (chunkLength) {
            await diskWriter.ready;
            await diskWriter.write(chunk);
            diskSourceWriter.size += chunkLength;
            writer.availableSize -= chunkLength;
          }
        }
        async function endDisk() {
          await closeDiskWriter();
          writer.diskOffset += diskSourceWriter.size;
          writer.diskNumber++;
          diskWriter = null;
          writer.availableSize = writer.maxSize;
        }
        async function closeDiskWriter() {
          await diskWriter.close();
        }
      }
      async closeDisk() {
        const streamWriter = this.writable.getWriter();
        try {
          await streamWriter.ready;
          await streamWriter.write(DISK_BOUNDARY);
        } finally {
          streamWriter.releaseLock();
        }
      }
    };
    GenericReader = class {
      constructor(reader) {
        if (Array.isArray(reader)) {
          reader = new SplitDataReader(reader);
        }
        if (reader instanceof ReadableStream || typeof reader.getReader == FUNCTION_TYPE) {
          reader = {
            readable: toCompatibleReadable(reader)
          };
        }
        return reader;
      }
    };
    GenericWriter = class {
      constructor(writer) {
        if (writer.writable === UNDEFINED_VALUE && typeof writer.next == FUNCTION_TYPE) {
          writer = new SplitDataWriter(writer);
        }
        if (writer instanceof WritableStream || typeof writer.getWriter == FUNCTION_TYPE) {
          writer = {
            writable: toCompatibleWritable(writer)
          };
        }
        try {
          writer.size = writer.size === UNDEFINED_VALUE ? 0 : writer.size;
        } catch {
          throw new Error(ERR_WRITER_SIZE_NOT_WRITABLE);
        }
        return writer;
      }
    };
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/util/warnings.js
function addWarning(warnings, reason, filename) {
  if (!warnings.some((warning) => warning.reason == reason)) {
    const warning = { reason };
    if (filename !== UNDEFINED_VALUE) {
      warning.filename = filename;
    }
    warnings.push(warning);
  }
}
var init_warnings = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/util/warnings.js"() {
    init_constants();
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/zip-entry.js
function getUserExtraField(extraField) {
  if (extraField) {
    const userExtraField = /* @__PURE__ */ new Map();
    extraField.forEach((field, type) => {
      if (!INTERPRETED_EXTRA_FIELD_TYPES.has(type)) {
        userExtraField.set(type, field.data);
      }
    });
    if (userExtraField.size) {
      return userExtraField;
    }
  }
}
function getEncryptionOverhead(encrypted, zipCrypto, encryptionStrength) {
  return encrypted ? zipCrypto ? 12 : 16 + encryptionStrength * 4 : 0;
}
var PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, PROPERTY_NAME_UNCOMPRESSED_SIZE, PROPERTY_NAME_COMPRESSED_SIZE, PROPERTY_NAME_OFFSET, PROPERTY_NAME_DISK_NUMBER_START, PROPERTY_NAME_LAST_MODIFICATION_DATE, PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE, PROPERTY_NAME_LAST_ACCESS_DATE, PROPERTY_NAME_RAW_LAST_ACCESS_DATE, PROPERTY_NAME_CREATION_DATE, PROPERTY_NAME_RAW_CREATION_DATE, PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES, PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES, PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW, PROPERTY_NAME_MSDOS_ATTRIBUTES, PROPERTY_NAME_MS_DOS_COMPATIBLE, PROPERTY_NAME_ZIP64, PROPERTY_NAME_ENCRYPTED, PROPERTY_NAME_VERSION, PROPERTY_NAME_VERSION_MADE_BY, PROPERTY_NAME_ZIPCRYPTO, PROPERTY_NAME_DIRECTORY, PROPERTY_NAME_EXECUTABLE, PROPERTY_NAME_SYMLINK, PROPERTY_NAME_COMPRESSION_METHOD, PROPERTY_NAME_SIGNATURE, PROPERTY_NAME_CRC32, PROPERTY_NAME_EXTRA_FIELD, PROPERTY_NAME_EXTRA_FIELD_INFOZIP, PROPERTY_NAME_EXTRA_FIELD_UNIX, PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1, PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX, PROPERTY_NAME_UID, PROPERTY_NAME_GID, PROPERTY_NAME_UNIX_MODE, PROPERTY_NAME_SETUID, PROPERTY_NAME_SETGID, PROPERTY_NAME_STICKY, PROPERTY_NAME_BITFLAG, PROPERTY_NAME_RAW_BITFLAG, PROPERTY_NAME_FILENAME_LENGTH, PROPERTY_NAME_EXTRA_FIELD_LENGTH, PROPERTY_NAME_UNIX_EXTERNAL_UPPER, PROPERTY_NAME_FILENAME_UTF8, PROPERTY_NAME_COMMENT_UTF8, PROPERTY_NAME_RAW_EXTRA_FIELD, PROPERTY_NAME_EXTRA_FIELD_ZIP64, PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH, PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT, PROPERTY_NAME_EXTRA_FIELD_AES, PROPERTY_NAME_EXTRA_FIELD_NTFS, PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP, PROPERTY_NAME_EXTRA_FIELD_USDZ, PROPERTY_NAMES, Entry, INTERPRETED_EXTRA_FIELD_TYPES;
var init_zip_entry = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/zip-entry.js"() {
    init_constants();
    PROPERTY_NAME_FILENAME = "filename";
    PROPERTY_NAME_RAW_FILENAME = "rawFilename";
    PROPERTY_NAME_COMMENT = "comment";
    PROPERTY_NAME_RAW_COMMENT = "rawComment";
    PROPERTY_NAME_UNCOMPRESSED_SIZE = "uncompressedSize";
    PROPERTY_NAME_COMPRESSED_SIZE = "compressedSize";
    PROPERTY_NAME_OFFSET = "offset";
    PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart";
    PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate";
    PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate";
    PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate";
    PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate";
    PROPERTY_NAME_CREATION_DATE = "creationDate";
    PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate";
    PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES = "internalFileAttributes";
    PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES = "externalFileAttributes";
    PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW = "msdosAttributesRaw";
    PROPERTY_NAME_MSDOS_ATTRIBUTES = "msdosAttributes";
    PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible";
    PROPERTY_NAME_ZIP64 = "zip64";
    PROPERTY_NAME_ENCRYPTED = "encrypted";
    PROPERTY_NAME_VERSION = "version";
    PROPERTY_NAME_VERSION_MADE_BY = "versionMadeBy";
    PROPERTY_NAME_ZIPCRYPTO = "zipCrypto";
    PROPERTY_NAME_DIRECTORY = "directory";
    PROPERTY_NAME_EXECUTABLE = "executable";
    PROPERTY_NAME_SYMLINK = "symlink";
    PROPERTY_NAME_COMPRESSION_METHOD = "compressionMethod";
    PROPERTY_NAME_SIGNATURE = "signature";
    PROPERTY_NAME_CRC32 = "crc32";
    PROPERTY_NAME_EXTRA_FIELD = "extraField";
    PROPERTY_NAME_EXTRA_FIELD_INFOZIP = "extraFieldInfoZip";
    PROPERTY_NAME_EXTRA_FIELD_UNIX = "extraFieldUnix";
    PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1 = "extraFieldUnixType1";
    PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX = "extraFieldPkwareUnix";
    PROPERTY_NAME_UID = "uid";
    PROPERTY_NAME_GID = "gid";
    PROPERTY_NAME_UNIX_MODE = "unixMode";
    PROPERTY_NAME_SETUID = "setuid";
    PROPERTY_NAME_SETGID = "setgid";
    PROPERTY_NAME_STICKY = "sticky";
    PROPERTY_NAME_BITFLAG = "bitFlag";
    PROPERTY_NAME_RAW_BITFLAG = "rawBitFlag";
    PROPERTY_NAME_FILENAME_LENGTH = "filenameLength";
    PROPERTY_NAME_EXTRA_FIELD_LENGTH = "extraFieldLength";
    PROPERTY_NAME_UNIX_EXTERNAL_UPPER = "unixExternalUpper";
    PROPERTY_NAME_FILENAME_UTF8 = "filenameUTF8";
    PROPERTY_NAME_COMMENT_UTF8 = "commentUTF8";
    PROPERTY_NAME_RAW_EXTRA_FIELD = "rawExtraField";
    PROPERTY_NAME_EXTRA_FIELD_ZIP64 = "extraFieldZip64";
    PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH = "extraFieldUnicodePath";
    PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT = "extraFieldUnicodeComment";
    PROPERTY_NAME_EXTRA_FIELD_AES = "extraFieldAES";
    PROPERTY_NAME_EXTRA_FIELD_NTFS = "extraFieldNTFS";
    PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP = "extraFieldExtendedTimestamp";
    PROPERTY_NAME_EXTRA_FIELD_USDZ = "extraFieldUSDZ";
    PROPERTY_NAMES = [
      PROPERTY_NAME_FILENAME,
      PROPERTY_NAME_RAW_FILENAME,
      PROPERTY_NAME_UNCOMPRESSED_SIZE,
      PROPERTY_NAME_COMPRESSED_SIZE,
      PROPERTY_NAME_LAST_MODIFICATION_DATE,
      PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
      PROPERTY_NAME_COMMENT,
      PROPERTY_NAME_RAW_COMMENT,
      PROPERTY_NAME_LAST_ACCESS_DATE,
      PROPERTY_NAME_RAW_LAST_ACCESS_DATE,
      PROPERTY_NAME_CREATION_DATE,
      PROPERTY_NAME_RAW_CREATION_DATE,
      PROPERTY_NAME_OFFSET,
      PROPERTY_NAME_DISK_NUMBER_START,
      PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES,
      PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES,
      PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW,
      PROPERTY_NAME_MSDOS_ATTRIBUTES,
      PROPERTY_NAME_MS_DOS_COMPATIBLE,
      PROPERTY_NAME_ZIP64,
      PROPERTY_NAME_ENCRYPTED,
      PROPERTY_NAME_VERSION,
      PROPERTY_NAME_VERSION_MADE_BY,
      PROPERTY_NAME_ZIPCRYPTO,
      PROPERTY_NAME_DIRECTORY,
      PROPERTY_NAME_EXECUTABLE,
      PROPERTY_NAME_SYMLINK,
      PROPERTY_NAME_COMPRESSION_METHOD,
      PROPERTY_NAME_SIGNATURE,
      PROPERTY_NAME_CRC32,
      PROPERTY_NAME_EXTRA_FIELD,
      PROPERTY_NAME_EXTRA_FIELD_UNIX,
      PROPERTY_NAME_EXTRA_FIELD_INFOZIP,
      PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1,
      PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX,
      PROPERTY_NAME_UID,
      PROPERTY_NAME_GID,
      PROPERTY_NAME_UNIX_MODE,
      PROPERTY_NAME_UNIX_EXTERNAL_UPPER,
      PROPERTY_NAME_SETUID,
      PROPERTY_NAME_SETGID,
      PROPERTY_NAME_STICKY,
      PROPERTY_NAME_BITFLAG,
      PROPERTY_NAME_RAW_BITFLAG,
      PROPERTY_NAME_FILENAME_LENGTH,
      PROPERTY_NAME_EXTRA_FIELD_LENGTH,
      PROPERTY_NAME_FILENAME_UTF8,
      PROPERTY_NAME_COMMENT_UTF8,
      PROPERTY_NAME_RAW_EXTRA_FIELD,
      PROPERTY_NAME_EXTRA_FIELD_ZIP64,
      PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH,
      PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT,
      PROPERTY_NAME_EXTRA_FIELD_AES,
      PROPERTY_NAME_EXTRA_FIELD_NTFS,
      PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP,
      PROPERTY_NAME_EXTRA_FIELD_USDZ
    ];
    Entry = class {
      constructor(data) {
        PROPERTY_NAMES.forEach((name) => this[name] = data[name]);
      }
    };
    INTERPRETED_EXTRA_FIELD_TYPES = /* @__PURE__ */ new Set([
      EXTRAFIELD_TYPE_ZIP64,
      EXTRAFIELD_TYPE_AES,
      EXTRAFIELD_TYPE_NTFS,
      EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP,
      EXTRAFIELD_TYPE_UNICODE_PATH,
      EXTRAFIELD_TYPE_UNICODE_COMMENT,
      EXTRAFIELD_TYPE_USDZ,
      EXTRAFIELD_TYPE_INFOZIP,
      EXTRAFIELD_TYPE_UNIX,
      EXTRAFIELD_TYPE_UNIX_TYPE1,
      EXTRAFIELD_TYPE_PKWARE_UNIX
    ]);
  }
});

// ../../../node_modules/@zip.js/zip.js/lib/core/zip-reader.js
var zip_reader_exports = {};
__export(zip_reader_exports, {
  ERR_AMBIGUOUS_ARCHIVE: () => ERR_AMBIGUOUS_ARCHIVE,
  ERR_BAD_FORMAT: () => ERR_BAD_FORMAT,
  ERR_CENTRAL_DIRECTORY_NOT_FOUND: () => ERR_CENTRAL_DIRECTORY_NOT_FOUND,
  ERR_CODEC_OUT_OF_MEMORY: () => ERR_CODEC_OUT_OF_MEMORY,
  ERR_ENCRYPTED: () => ERR_ENCRYPTED,
  ERR_ENCRYPTED_CENTRAL_DIRECTORY: () => ERR_ENCRYPTED_CENTRAL_DIRECTORY,
  ERR_ENTRY_DATA_OUT_OF_BOUNDS: () => ERR_ENTRY_DATA_OUT_OF_BOUNDS,
  ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: () => ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND,
  ERR_EOCDR_NOT_FOUND: () => ERR_EOCDR_NOT_FOUND,
  ERR_EXTRAFIELD_ZIP64_NOT_FOUND: () => ERR_EXTRAFIELD_ZIP64_NOT_FOUND,
  ERR_INVALID_AUTHENTICATION_CODE: () => ERR_INVALID_AUTHENTICATION_CODE,
  ERR_INVALID_COMPRESSED_DATA: () => ERR_INVALID_COMPRESSED_DATA,
  ERR_INVALID_CRC32: () => ERR_INVALID_CRC32,
  ERR_INVALID_FILENAME_VALIDATION: () => ERR_INVALID_FILENAME_VALIDATION,
  ERR_INVALID_MAX_APPENDED_DATA_SIZE: () => ERR_INVALID_MAX_APPENDED_DATA_SIZE,
  ERR_INVALID_PASSWORD: () => ERR_INVALID_PASSWORD,
  ERR_INVALID_STRICTNESS: () => ERR_INVALID_STRICTNESS,
  ERR_INVALID_UNCOMPRESSED_SIZE: () => ERR_INVALID_UNCOMPRESSED_SIZE,
  ERR_LOCAL_FILE_HEADER_NOT_FOUND: () => ERR_LOCAL_FILE_HEADER_NOT_FOUND,
  ERR_OVERLAPPING_ENTRY: () => ERR_OVERLAPPING_ENTRY,
  ERR_SPLIT_ZIP_FILE: () => ERR_SPLIT_ZIP_FILE,
  ERR_UNSAFE_FILENAME: () => ERR_UNSAFE_FILENAME,
  ERR_UNSUPPORTED_COMPRESSION: () => ERR_UNSUPPORTED_COMPRESSION,
  ERR_UNSUPPORTED_ENCRYPTION: () => ERR_UNSUPPORTED_ENCRYPTION,
  ERR_UNSUPPORTED_UINT64: () => ERR_UNSUPPORTED_UINT64,
  ERR_WORKER_STARTUP_TIMEOUT: () => ERR_WORKER_STARTUP_TIMEOUT,
  WARNING_APPENDED_DATA: () => WARNING_APPENDED_DATA,
  WARNING_COMPRESSED_PATCHED_DATA: () => WARNING_COMPRESSED_PATCHED_DATA,
  WARNING_DUPLICATE_FILENAME: () => WARNING_DUPLICATE_FILENAME,
  WARNING_MALFORMED_EXTRA_FIELD: () => WARNING_MALFORMED_EXTRA_FIELD,
  WARNING_MISMATCHED_CENTRAL_DIRECTORY_OFFSET: () => WARNING_MISMATCHED_CENTRAL_DIRECTORY_OFFSET,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME,
  WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY: () => WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY,
  WARNING_MISSING_ZIP64_EXTRA_FIELD: () => WARNING_MISSING_ZIP64_EXTRA_FIELD,
  WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY: () => WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY,
  WARNING_PREPENDED_CENTRAL_DIRECTORY: () => WARNING_PREPENDED_CENTRAL_DIRECTORY,
  WARNING_PREPENDED_DATA: () => WARNING_PREPENDED_DATA,
  WARNING_TRAILING_CENTRAL_DIRECTORY_DATA: () => WARNING_TRAILING_CENTRAL_DIRECTORY_DATA,
  WARNING_UNKNOWN_VERSION: () => WARNING_UNKNOWN_VERSION,
  WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA: () => WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA,
  WARNING_UNSORTED_CENTRAL_DIRECTORY: () => WARNING_UNSORTED_CENTRAL_DIRECTORY,
  WARNING_WRAPPED_ENTRIES_COUNT: () => WARNING_WRAPPED_ENTRIES_COUNT,
  ZipReader: () => ZipReader,
  ZipReaderStream: () => ZipReaderStream,
  getEntryDataDescriptorLength: () => getEntryDataDescriptorLength,
  isZipFile: () => isZipFile
});
function createEntryStream(entry, pendingEntries2) {
  const { readable, writable } = new TransformStream();
  let dataReader;
  const entryStream = {
    cancel: async (reason) => {
      pendingEntries2.delete(entryStream);
      await (dataReader ? dataReader.cancel(reason) : readable.cancel(reason));
    }
  };
  entryStream.readable = new ReadableStream({
    async pull(controller) {
      if (!dataReader) {
        dataReader = readable.getReader();
        pendingEntries2.add(entryStream);
        getData();
      }
      const { done, value } = await dataReader.read();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    cancel: (reason) => entryStream.cancel(reason)
  }, { highWaterMark: 0 });
  return entryStream;
  async function getData() {
    try {
      await entry.getData(writable, { preventClose: false });
    } catch (error) {
      try {
        await writable.abort(error);
      } catch {
      }
    } finally {
      pendingEntries2.delete(entryStream);
    }
  }
}
async function isZipFile(reader, options = {}) {
  reader = new GenericReader(reader);
  await initStream(reader);
  if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
    reader = new BlobReader(await streamToBlob(reader.readable));
    await initStream(reader);
  }
  if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
    return false;
  }
  const strictness = getStrictness(options, {});
  const rejectAmbiguousEndOfDirectory = strictness != STRICTNESS_TOLERANT;
  const maxAppendedDataSize = getMaxAppendedDataSize(options[OPTION_MAX_APPENDED_DATA_SIZE], strictness);
  const { endOfDirectoryInfo, endOfDirectoryReachingEndCount } = await findEndOfCentralDirectory(reader, rejectAmbiguousEndOfDirectory, maxAppendedDataSize);
  if (!endOfDirectoryInfo || strictness == STRICTNESS_STRICT && endOfDirectoryReachingEndCount > 1) {
    return false;
  }
  const commentLength = getUint16(getDataView(endOfDirectoryInfo), 20);
  const appendedDataOffset = endOfDirectoryInfo.offset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
  return reader.size - appendedDataOffset <= maxAppendedDataSize;
}
function detectEncryptedCentralDirectory(directoryView) {
  return directoryView.byteLength >= 4 && getUint32(directoryView, 0) == ARCHIVE_EXTRA_DATA_SIGNATURE;
}
function getWrappedFilesLength(directoryView, directoryArray, offset) {
  let wrappedFilesLength = 0;
  while (offset + CENTRAL_FILE_HEADER_LENGTH <= directoryArray.length && getUint32(directoryView, offset) == CENTRAL_FILE_HEADER_SIGNATURE) {
    offset += CENTRAL_FILE_HEADER_LENGTH + getUint16(directoryView, offset + 28) + getUint16(directoryView, offset + 30) + getUint16(directoryView, offset + 32);
    wrappedFilesLength++;
  }
  return wrappedFilesLength % (MAX_16_BITS + 1) ? 0 : wrappedFilesLength;
}
function pointsAtDirectory(reader, offset) {
  return startsWithSignature(reader, offset, CENTRAL_FILE_HEADER_SIGNATURE);
}
async function startsWithSignature(reader, offset, signature) {
  if (offset < 0 || offset + 4 > reader.size) {
    return false;
  }
  const signatureArray = await readUint8Array(reader, offset, 4);
  return getUint32(getDataView(signatureArray), 0) == signature;
}
async function findDigitalSignatureRecordOffset(reader, endOffset) {
  const startOffset = Math.max(0, endOffset - (6 + MAX_16_BITS));
  const tailArray = await readUint8Array(reader, startOffset, endOffset - startOffset);
  const tailView = getDataView(tailArray);
  for (let indexByte = tailArray.length - 6; indexByte >= 0; indexByte--) {
    if (getUint32(tailView, indexByte) == DIGITAL_SIGNATURE_RECORD_SIGNATURE && indexByte + 6 + getUint16(tailView, indexByte + 4) == tailArray.length) {
      return startOffset + indexByte;
    }
  }
}
async function findZip64EndOfDirectoryOffset(reader, endOffset) {
  const startOffset = Math.max(0, endOffset - (ZIP64_END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS));
  const tailArray = await readUint8Array(reader, startOffset, endOffset - startOffset);
  const tailView = getDataView(tailArray);
  for (let indexByte = tailArray.length - ZIP64_END_OF_CENTRAL_DIR_LENGTH; indexByte >= 0; indexByte--) {
    if (getUint32(tailView, indexByte) == ZIP64_END_OF_CENTRAL_DIR_SIGNATURE && indexByte + 12 + Number(tailView.getBigUint64(indexByte + 4, true)) == tailArray.length) {
      return startOffset + indexByte;
    }
  }
}
async function probeLocalHeaders(reader, directoryArray, directoryView, offsetDelta) {
  let result = { localHeaderFound: false, shiftedLocalHeaderFound: false };
  let recordOffset = 0;
  while (recordOffset + CENTRAL_FILE_HEADER_LENGTH <= directoryArray.length && getUint32(directoryView, recordOffset) == CENTRAL_FILE_HEADER_SIGNATURE) {
    const localHeaderOffset = getLocalHeaderOffset(directoryArray, directoryView, recordOffset);
    if (localHeaderOffset !== UNDEFINED_VALUE) {
      const localHeaderFound = await startsWithSignature(reader, localHeaderOffset, LOCAL_FILE_HEADER_SIGNATURE);
      const shiftedLocalHeaderFound = await startsWithSignature(reader, localHeaderOffset + offsetDelta, LOCAL_FILE_HEADER_SIGNATURE);
      if (!recordOffset) {
        result = { localHeaderFound, shiftedLocalHeaderFound };
      }
      if (localHeaderFound != shiftedLocalHeaderFound) {
        return { localHeaderFound, shiftedLocalHeaderFound };
      }
    }
    recordOffset += CENTRAL_FILE_HEADER_LENGTH + getUint16(directoryView, recordOffset + 28) + getUint16(directoryView, recordOffset + 30) + getUint16(directoryView, recordOffset + 32);
  }
  return result;
}
function getLocalHeaderOffset(directoryArray, directoryView, recordOffset) {
  const localHeaderOffset = getUint32(directoryView, recordOffset + 42);
  if (localHeaderOffset != MAX_32_BITS) {
    return localHeaderOffset;
  }
  let offsetExtraField = recordOffset + CENTRAL_FILE_HEADER_LENGTH + getUint16(directoryView, recordOffset + 28);
  const endExtraField = Math.min(offsetExtraField + getUint16(directoryView, recordOffset + 30), directoryArray.length);
  while (offsetExtraField + 4 <= endExtraField) {
    const type = getUint16(directoryView, offsetExtraField);
    const size = getUint16(directoryView, offsetExtraField + 2);
    if (type == EXTRAFIELD_TYPE_ZIP64) {
      let offsetValue = offsetExtraField + 4;
      if (getUint32(directoryView, recordOffset + 24) == MAX_32_BITS) {
        offsetValue += 8;
      }
      if (getUint32(directoryView, recordOffset + 20) == MAX_32_BITS) {
        offsetValue += 8;
      }
      return offsetValue + 8 <= endExtraField ? getBigUint64(directoryView, offsetValue) : UNDEFINED_VALUE;
    }
    offsetExtraField += 4 + size;
  }
  return UNDEFINED_VALUE;
}
function readDigitalSignature(signatureRecordArray) {
  if (signatureRecordArray.length >= 6) {
    const signatureRecordView = getDataView(signatureRecordArray);
    if (getUint32(signatureRecordView, 0) == DIGITAL_SIGNATURE_RECORD_SIGNATURE) {
      const signatureDataLength = getUint16(signatureRecordView, 4);
      if (6 + signatureDataLength <= signatureRecordArray.length) {
        return new Uint8Array(signatureRecordArray.subarray(6, 6 + signatureDataLength));
      }
    }
  }
}
function getEncryptedDirectoryDataLength(directoryEncryptionInfo, declaredDirectoryDataLength, directoryDataLength) {
  const encryptedDirectoryDataLength = directoryEncryptionInfo && directoryEncryptionInfo.compressedSize ? directoryEncryptionInfo.compressedSize : declaredDirectoryDataLength;
  return encryptedDirectoryDataLength > 0 && encryptedDirectoryDataLength <= directoryDataLength ? encryptedDirectoryDataLength : directoryDataLength;
}
function getDirectoryEncryptionInfo(rawExtensibleData) {
  const directoryEncryptionInfo = { rawExtensibleData };
  if (rawExtensibleData.length >= 28) {
    const extensibleDataView = getDataView(rawExtensibleData);
    const hashDataLength = getUint16(extensibleDataView, 26);
    Object.assign(directoryEncryptionInfo, {
      compressionMethod: getUint16(extensibleDataView, 0),
      compressedSize: getBigUint64(extensibleDataView, 2),
      uncompressedSize: getBigUint64(extensibleDataView, 10),
      encryptionAlgorithm: getUint16(extensibleDataView, 18),
      bitLength: getUint16(extensibleDataView, 20),
      flags: getUint16(extensibleDataView, 22),
      hashAlgorithm: getUint16(extensibleDataView, 24),
      hashData: rawExtensibleData.subarray(28, 28 + hashDataLength)
    });
  }
  return directoryEncryptionInfo;
}
function readCommonHeader(directory, dataView, offset) {
  const rawBitFlag = directory.rawBitFlag = getUint16(dataView, offset + 2);
  const encrypted = (rawBitFlag & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED;
  const rawLastModDate = getUint32(dataView, offset + 6);
  Object.assign(directory, {
    encrypted,
    version: getUint16(dataView, offset),
    bitFlag: {
      level: (rawBitFlag & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (rawBitFlag & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (rawBitFlag & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate,
    lastModDate: getDate(rawLastModDate),
    filenameLength: getUint16(dataView, offset + 22),
    extraFieldLength: getUint16(dataView, offset + 24)
  });
}
function readCommonFooter(fileEntry, directory, dataView, offset, localDirectory) {
  const { rawExtraField } = directory;
  const extraField = directory.extraField = /* @__PURE__ */ new Map();
  const rawExtraFieldView = getDataView(rawExtraField);
  let offsetExtraField = 0;
  let malformedExtraField = false;
  try {
    while (offsetExtraField < rawExtraField.length) {
      const type = getUint16(rawExtraFieldView, offsetExtraField);
      const size = getUint16(rawExtraFieldView, offsetExtraField + 2);
      extraField.set(type, {
        type,
        data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
      });
      offsetExtraField += 4 + size;
    }
  } catch {
    malformedExtraField = true;
  }
  if (offsetExtraField > rawExtraField.length) {
    malformedExtraField = true;
  }
  const compressionMethod = getUint16(dataView, offset + 4);
  Object.assign(directory, {
    signature: getUint32(dataView, offset + HEADER_OFFSET_SIGNATURE),
    crc32: getUint32(dataView, offset + HEADER_OFFSET_SIGNATURE),
    compressedSize: getUint32(dataView, offset + HEADER_OFFSET_COMPRESSED_SIZE),
    uncompressedSize: getUint32(dataView, offset + HEADER_OFFSET_UNCOMPRESSED_SIZE)
  });
  const extraFieldZip64 = extraField.get(EXTRAFIELD_TYPE_ZIP64);
  let extraFieldZip64Missing;
  if (extraFieldZip64) {
    if (!readExtraFieldZip64(extraFieldZip64, directory, localDirectory)) {
      malformedExtraField = true;
    }
    directory.extraFieldZip64 = extraFieldZip64;
  } else if (ZIP64_PROPERTIES.some(([propertyName, max]) => directory[propertyName] == max)) {
    if (localDirectory) {
      malformedExtraField = true;
    } else {
      extraFieldZip64Missing = true;
    }
  }
  const extraFieldUnicodePath = extraField.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  if (extraFieldUnicodePath) {
    readExtraFieldUnicode(extraFieldUnicodePath, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, directory, fileEntry);
    directory.extraFieldUnicodePath = extraFieldUnicodePath;
  }
  const extraFieldUnicodeComment = extraField.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  if (extraFieldUnicodeComment) {
    readExtraFieldUnicode(extraFieldUnicodeComment, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, directory, fileEntry);
    directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
  }
  const extraFieldAES = extraField.get(EXTRAFIELD_TYPE_AES);
  if (extraFieldAES && (compressionMethod == COMPRESSION_METHOD_AES || directory.encrypted) && extraFieldAES.data.length >= 7) {
    readExtraFieldAES(extraFieldAES, directory, compressionMethod);
    directory.extraFieldAES = extraFieldAES;
  } else {
    if (extraFieldAES) {
      malformedExtraField = true;
    }
    directory.compressionMethod = compressionMethod;
  }
  const extraFieldPkwareUnix = extraField.get(EXTRAFIELD_TYPE_PKWARE_UNIX);
  if (extraFieldPkwareUnix) {
    readExtraFieldUnixDates(extraFieldPkwareUnix, directory);
    directory.extraFieldPkwareUnix = extraFieldPkwareUnix;
  }
  const extraFieldUnixType1 = extraField.get(EXTRAFIELD_TYPE_UNIX_TYPE1);
  if (extraFieldUnixType1) {
    readExtraFieldUnixDates(extraFieldUnixType1, directory);
    directory.extraFieldUnixType1 = extraFieldUnixType1;
  }
  const extraFieldExtendedTimestamp = extraField.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  if (extraFieldExtendedTimestamp) {
    readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory);
    directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
  }
  const extraFieldNTFS = extraField.get(EXTRAFIELD_TYPE_NTFS);
  if (extraFieldNTFS) {
    readExtraFieldNTFS(extraFieldNTFS, directory);
    directory.extraFieldNTFS = extraFieldNTFS;
  }
  const extraFieldInfoZip = extraField.get(EXTRAFIELD_TYPE_INFOZIP);
  let unixIdsRead;
  if (extraFieldInfoZip) {
    unixIdsRead = readExtraFieldUnix(extraFieldInfoZip, directory, true);
    directory.extraFieldInfoZip = extraFieldInfoZip;
  }
  const extraFieldUnix = extraField.get(EXTRAFIELD_TYPE_UNIX);
  if (extraFieldUnix) {
    readExtraFieldUnix(extraFieldUnix, unixIdsRead ? {} : directory, false);
    directory.extraFieldUnix = extraFieldUnix;
  }
  const extraFieldUSDZ = extraField.get(EXTRAFIELD_TYPE_USDZ);
  if (extraFieldUSDZ) {
    directory.extraFieldUSDZ = extraFieldUSDZ;
  }
  if (extraFieldZip64Missing) {
    throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
  }
  return malformedExtraField;
}
function readExtraFieldZip64(extraFieldZip64, directory, localDirectory) {
  directory.zip64 = true;
  const extraFieldView = getDataView(extraFieldZip64.data);
  const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max]) => directory[propertyName] == max);
  const requiredLength = missingProperties.reduce((length, [, max]) => length + ZIP64_EXTRACTION[max].bytes, 0);
  if (extraFieldZip64.data.length < requiredLength) {
    if (localDirectory) {
      return false;
    }
    throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
  }
  const values = [];
  try {
    for (let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++) {
      const [, max] = missingProperties[indexMissingProperty];
      const extraction = ZIP64_EXTRACTION[max];
      values.push(extraction.getValue(extraFieldView, offset));
      offset += extraction.bytes;
    }
  } catch (error) {
    if (localDirectory) {
      return false;
    }
    throw error;
  }
  missingProperties.forEach(([propertyName], indexMissingProperty) => {
    directory[propertyName] = extraFieldZip64[propertyName] = values[indexMissingProperty];
  });
  return true;
}
function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
  if (extraFieldUnicode.data.length < 5) {
    extraFieldUnicode.valid = false;
    return;
  }
  const extraFieldView = getDataView(extraFieldUnicode.data);
  const computedCrc32 = new Crc32();
  computedCrc32.append(fileEntry[rawPropertyName]);
  const computedCrc32View = getDataView(new Uint8Array(4));
  computedCrc32View.setUint32(0, computedCrc32.get(), true);
  const nameCrc32 = getUint32(extraFieldView, 1);
  const version = getUint8(extraFieldView, 0);
  Object.assign(extraFieldUnicode, {
    version,
    [propertyName]: decodeText(extraFieldUnicode.data.subarray(5)),
    valid: version == 1 && !fileEntry.bitFlag.languageEncodingFlag && nameCrc32 == getUint32(computedCrc32View, 0)
  });
  if (extraFieldUnicode.valid) {
    directory[propertyName] = extraFieldUnicode[propertyName];
    directory[propertyName + PROPERTY_NAME_UTF8_SUFFIX] = true;
  }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
  const extraFieldView = getDataView(extraFieldAES.data);
  const strength = getUint8(extraFieldView, 4);
  Object.assign(extraFieldAES, {
    vendorVersion: getUint8(extraFieldView, 0),
    vendorId: getUint8(extraFieldView, 2),
    strength,
    originalCompressionMethod: compressionMethod,
    compressionMethod: getUint16(extraFieldView, 5)
  });
  directory.compressionMethod = extraFieldAES.compressionMethod;
  if (extraFieldAES.vendorVersion != VENDOR_VERSION_AE_1) {
    directory.crc32 = UNDEFINED_VALUE;
  }
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
  const extraFieldView = getDataView(extraFieldNTFS.data);
  let offsetExtraField = 4;
  let tag1Data;
  try {
    while (offsetExtraField < extraFieldNTFS.data.length && !tag1Data) {
      const tagValue = getUint16(extraFieldView, offsetExtraField);
      const attributeSize = getUint16(extraFieldView, offsetExtraField + 2);
      if (tagValue == EXTRAFIELD_TYPE_NTFS_TAG1) {
        tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
      }
      offsetExtraField += 4 + attributeSize;
    }
  } catch {
  }
  if (tag1Data && tag1Data.length == 24) {
    const tag1View = getDataView(tag1Data);
    const rawLastModDate = tag1View.getBigUint64(0, true);
    const rawLastAccessDate = tag1View.getBigUint64(8, true);
    const rawCreationDate = tag1View.getBigUint64(16, true);
    Object.assign(extraFieldNTFS, {
      rawLastModDate,
      rawLastAccessDate,
      rawCreationDate
    });
    const lastModDate = getDateNTFS(rawLastModDate);
    const lastAccessDate = getDateNTFS(rawLastAccessDate);
    const creationDate = getDateNTFS(rawCreationDate);
    const extraFieldData = { lastModDate, lastAccessDate, creationDate };
    Object.assign(extraFieldNTFS, extraFieldData);
    Object.assign(directory, extraFieldData, { rawLastAccessDate, rawCreationDate });
  }
}
function readExtraFieldUnixDates(extraField, directory) {
  if (extraField.data.length < 8) {
    return;
  }
  const extraFieldView = getDataView(extraField.data);
  const lastAccessDate = new Date((getUint32(extraFieldView, 0) | 0) * 1e3);
  const lastModDate = new Date((getUint32(extraFieldView, 4) | 0) * 1e3);
  const extraFieldData = { lastAccessDate, lastModDate };
  if (extraField.data.length >= 12) {
    extraFieldData.uid = getUint16(extraFieldView, 8);
    extraFieldData.gid = getUint16(extraFieldView, 10);
  }
  Object.assign(extraField, extraFieldData);
  Object.assign(directory, extraFieldData);
}
function readExtraFieldUnix(extraField, directory, isInfoZip) {
  try {
    const view = getDataView(extraField.data);
    let uid, gid;
    if (isInfoZip) {
      let offset = 0;
      const version = getUint8(view, offset++);
      const uidSize = getUint8(view, offset++);
      uid = unpackUnixId(extraField.data.subarray(offset, offset + uidSize));
      offset += uidSize;
      const gidSize = getUint8(view, offset++);
      gid = unpackUnixId(extraField.data.subarray(offset, offset + gidSize));
      Object.assign(extraField, { version, uid, gid });
    } else if (extraField.data.length >= 4) {
      uid = getUint16(view, 0);
      gid = getUint16(view, 2);
      Object.assign(extraField, { uid, gid });
    }
    if (uid !== UNDEFINED_VALUE) {
      directory.uid = uid;
    }
    if (gid !== UNDEFINED_VALUE) {
      directory.gid = gid;
    }
    return uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE;
  } catch {
  }
}
function unpackUnixId(bytes) {
  const buffer = new Uint8Array(4);
  buffer.set(bytes, 0);
  const view = new DataView(buffer.buffer, buffer.byteOffset, 4);
  return view.getUint32(0, true);
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory) {
  if (!extraFieldExtendedTimestamp.data.length) {
    return;
  }
  const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
  const flags = getUint8(extraFieldView, 0);
  const timeProperties = [];
  const timeRawProperties = [];
  if (localDirectory) {
    if ((flags & 1) == 1) {
      timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
    }
    if ((flags & 2) == 2) {
      timeProperties.push(PROPERTY_NAME_LAST_ACCESS_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE);
    }
    if ((flags & 4) == 4) {
      timeProperties.push(PROPERTY_NAME_CREATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_CREATION_DATE);
    }
  } else if (extraFieldExtendedTimestamp.data.length >= 5) {
    timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
    timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  }
  let offset = 1;
  timeProperties.forEach((propertyName, indexProperty) => {
    if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
      const time = getUint32(extraFieldView, offset);
      directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date((time | 0) * 1e3);
      const rawPropertyName = timeRawProperties[indexProperty];
      extraFieldExtendedTimestamp[rawPropertyName] = time;
    }
    offset += 4;
  });
}
async function detectOverlappingEntry({
  reader,
  fileEntry,
  index,
  offset,
  crc32,
  compressedSize,
  uncompressedSize,
  dataOffset,
  dataDescriptor,
  extraFieldZip64,
  readRanges
}) {
  let dataDescriptorLength = 0;
  if (dataDescriptor) {
    const zip64 = Boolean(extraFieldZip64);
    const localDataDescriptor = await readLocalDataDescriptor(reader, dataOffset + compressedSize, { crc32, compressedSize, uncompressedSize, zip64 });
    if (localDataDescriptor) {
      fileEntry.localDirectory.dataDescriptor = localDataDescriptor;
      dataDescriptorLength = getDataDescriptorLength(localDataDescriptor.zip64, localDataDescriptor.signature);
    } else {
      dataDescriptorLength = getDataDescriptorLength(zip64, false);
    }
  }
  const range = {
    start: offset,
    end: dataOffset + compressedSize + dataDescriptorLength,
    fileEntry
  };
  const { indexes, sortedRanges, pendingRanges } = readRanges;
  if (!indexes.has(index)) {
    const overlappingRange = findOverlappingRange(sortedRanges, range) || pendingRanges.find((otherRange) => rangesOverlap(range, otherRange));
    if (overlappingRange) {
      const error = new Error(ERR_OVERLAPPING_ENTRY);
      error.overlappingEntry = overlappingRange.fileEntry;
      throw error;
    }
    indexes.add(index);
    pendingRanges.push(range);
    if (pendingRanges.length * pendingRanges.length > sortedRanges.length) {
      pendingRanges.sort((range2, otherRange) => range2.start - otherRange.start);
      readRanges.sortedRanges = mergeRanges(sortedRanges, pendingRanges);
      pendingRanges.length = 0;
    }
  }
}
function findOverlappingRange(sortedRanges, range) {
  let low = 0;
  let high = sortedRanges.length;
  while (low < high) {
    const middle = low + high >>> 1;
    if (sortedRanges[middle].start < range.start) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  const previousRange = sortedRanges[low - 1];
  const nextRange = sortedRanges[low];
  if (previousRange && rangesOverlap(range, previousRange)) {
    return previousRange;
  }
  if (nextRange && rangesOverlap(range, nextRange)) {
    return nextRange;
  }
}
function rangesOverlap(range, otherRange) {
  return range.start < otherRange.end && otherRange.start < range.end;
}
function mergeRanges(sortedRanges, pendingRanges) {
  const mergedRanges = [];
  let indexSorted = 0;
  let indexPending = 0;
  while (indexSorted < sortedRanges.length || indexPending < pendingRanges.length) {
    if (indexPending == pendingRanges.length || indexSorted < sortedRanges.length && sortedRanges[indexSorted].start < pendingRanges[indexPending].start) {
      mergedRanges.push(sortedRanges[indexSorted++]);
    } else {
      mergedRanges.push(pendingRanges[indexPending++]);
    }
  }
  return mergedRanges;
}
async function readLocalDataDescriptor(reader, offset, { crc32, compressedSize, uncompressedSize, zip64 }) {
  const maxLength = DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH + DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH;
  const length = Math.min(maxLength, Math.max(0, reader.size - offset));
  const dataDescriptorArray = length ? await readUint8Array(reader, offset, length) : EMPTY_UINT8_ARRAY;
  const dataDescriptorView = getDataView(dataDescriptorArray);
  const candidates = [[zip64, true], [zip64, false], [!zip64, true], [!zip64, false]].map(([zip64Layout, signature]) => readDataDescriptor(dataDescriptorView, zip64Layout, signature)).filter((candidate) => candidate && candidate.compressedSize == compressedSize && candidate.uncompressedSize == uncompressedSize);
  return candidates.find((candidate) => candidate.crc32 == crc32) || candidates[0] || readDataDescriptor(dataDescriptorView, zip64, true) || readDataDescriptor(dataDescriptorView, zip64, false);
}
async function getEntryDataDescriptorLength(reader, offset, { crc32, compressedSize, uncompressedSize, extraFieldZip64 }) {
  const dataDescriptor = await readLocalDataDescriptor(reader, offset, { crc32, compressedSize, uncompressedSize, zip64: Boolean(extraFieldZip64) });
  if (dataDescriptor && dataDescriptor.compressedSize == compressedSize && dataDescriptor.uncompressedSize == uncompressedSize) {
    return getDataDescriptorLength(dataDescriptor.zip64, dataDescriptor.signature);
  }
}
function readDataDescriptor(dataDescriptorView, zip64, signature) {
  const offset = signature ? DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH : 0;
  if (dataDescriptorView.byteLength < getDataDescriptorLength(zip64, signature) || signature && getUint32(dataDescriptorView, 0) != DATA_DESCRIPTOR_RECORD_SIGNATURE) {
    return UNDEFINED_VALUE;
  }
  const crc32 = getUint32(dataDescriptorView, offset);
  let compressedSize;
  let uncompressedSize;
  try {
    if (zip64) {
      compressedSize = getBigUint64(dataDescriptorView, offset + 4);
      uncompressedSize = getBigUint64(dataDescriptorView, offset + 12);
    } else {
      compressedSize = getUint32(dataDescriptorView, offset + 4);
      uncompressedSize = getUint32(dataDescriptorView, offset + 8);
    }
  } catch {
    return UNDEFINED_VALUE;
  }
  return { signature, zip64, crc32, compressedSize, uncompressedSize };
}
function getDataDescriptorLength(zip64, signature) {
  return (zip64 ? DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH : DATA_DESCRIPTOR_RECORD_LENGTH) + (signature ? DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH : 0);
}
function getDiskOffset(reader, diskNumber) {
  return reader.getDiskOffset ? reader.getDiskOffset(diskNumber) : 0;
}
async function startsWithSplitZipSignature(reader) {
  return await getFirstSignature(reader) == SPLIT_ZIP_FILE_SIGNATURE;
}
async function startsWithSplitZipMarker(reader) {
  const signature = await getFirstSignature(reader);
  return signature == SPLIT_ZIP_FILE_SIGNATURE || signature == TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE;
}
async function getFirstSignature(reader) {
  const signatureArray = await readUint8Array(reader, 0, SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  return getUint32(getDataView(signatureArray));
}
function isStrictnessValue(value) {
  return value === STRICTNESS_STRICT || value === STRICTNESS_BALANCED || value === STRICTNESS_TOLERANT;
}
function getDecodableOutputSize(outputSize, compressedSize, compressed) {
  return Math.min(outputSize, compressed ? compressedSize * MAX_DEFLATE_EXPANSION_RATIO : compressedSize);
}
function getStrictness(options, inheritedOptions) {
  return resolveStrictness(options, resolveStrictness(inheritedOptions, STRICTNESS_BALANCED));
}
function resolveStrictness(options, inheritedStrictness) {
  const strictness = options[OPTION_STRICTNESS];
  if (strictness !== UNDEFINED_VALUE) {
    if (!isStrictnessValue(strictness)) {
      throw new Error(ERR_INVALID_STRICTNESS);
    }
    return strictness;
  }
  const checkAmbiguity = options[OPTION_CHECK_AMBIGUITY];
  if (checkAmbiguity === UNDEFINED_VALUE) {
    return inheritedStrictness;
  }
  if (checkAmbiguity) {
    return STRICTNESS_STRICT;
  }
  return inheritedStrictness == STRICTNESS_TOLERANT ? STRICTNESS_TOLERANT : STRICTNESS_BALANCED;
}
function getCheckLocalDirectory(checkLocalDirectory, strictness) {
  if (checkLocalDirectory === UNDEFINED_VALUE) {
    return strictness != STRICTNESS_TOLERANT;
  }
  return Boolean(checkLocalDirectory);
}
function getCheckLocalFilename(checkLocalFilename, strictness) {
  if (checkLocalFilename === UNDEFINED_VALUE) {
    return strictness == STRICTNESS_STRICT;
  }
  return Boolean(checkLocalFilename);
}
function getFilenameValidation(filenameValidation, strictness) {
  if (filenameValidation === UNDEFINED_VALUE) {
    return strictness;
  }
  if (!isStrictnessValue(filenameValidation)) {
    throw new Error(ERR_INVALID_FILENAME_VALIDATION);
  }
  return filenameValidation;
}
function isUnsafeFilename(filename, filenameValidation) {
  if (filenameValidation == STRICTNESS_TOLERANT) {
    return false;
  }
  const pathParts = filename.split("/");
  if (pathParts.length > 1 && pathParts[pathParts.length - 1] === "") {
    pathParts.pop();
  }
  if (PARENT_DIRECTORY_REGEXP.test(filename) || filename.startsWith("/") || filename.startsWith("\\") || DRIVE_LETTER_REGEXP.test(filename)) {
    return true;
  }
  return filenameValidation == STRICTNESS_STRICT && (pathParts.includes(".") || pathParts.includes("") || filename.includes("\0"));
}
function getMaxAppendedDataSize(maxAppendedDataSize, strictness) {
  if (maxAppendedDataSize !== UNDEFINED_VALUE) {
    const size = toNumber(maxAppendedDataSize);
    if (typeof size != NUMBER_TYPE || Number.isNaN(size) || size < 0) {
      throw new Error(ERR_INVALID_MAX_APPENDED_DATA_SIZE);
    }
    return size;
  }
  if (strictness == STRICTNESS_STRICT) {
    return 0;
  }
  if (strictness == STRICTNESS_TOLERANT) {
    return Infinity;
  }
  return MAX_16_BITS;
}
async function findEndOfCentralDirectory(reader, rejectAmbiguous, maxAppendedDataSize) {
  const { size } = reader;
  const anchoredLength = Math.min(size, END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS);
  const remoteProbeBudget = { remaining: MAX_END_OF_CENTRAL_DIR_PROBES };
  let endOfDirectoryInfo;
  let plausibleEndOfDirectoryInfo;
  let endOfDirectoryReachingEndCount = 0;
  for await (const [anchoredView, anchoredOffset, anchoredArray, indexByte, offset] of scanEndOfCentralDirectory(reader, anchoredLength)) {
    const commentLength = getUint16(anchoredView, indexByte + 20);
    if (offset + END_OF_CENTRAL_DIR_LENGTH + commentLength == size) {
      const reachability = await getCentralDirectoryReachability(reader, anchoredView, anchoredOffset, indexByte, offset, size, remoteProbeBudget);
      if (reachability == CENTRAL_DIRECTORY_REACHABLE) {
        if (!endOfDirectoryInfo) {
          endOfDirectoryInfo = getEndOfCentralDirectoryInfo(anchoredArray, indexByte, offset);
        }
        endOfDirectoryReachingEndCount++;
        if (!rejectAmbiguous || endOfDirectoryReachingEndCount > 1) {
          break;
        }
      } else if (reachability == CENTRAL_DIRECTORY_PLAUSIBLE && !plausibleEndOfDirectoryInfo) {
        plausibleEndOfDirectoryInfo = getEndOfCentralDirectoryInfo(anchoredArray, indexByte, offset);
      }
    }
  }
  if (!endOfDirectoryInfo) {
    endOfDirectoryInfo = plausibleEndOfDirectoryInfo;
  }
  if (!endOfDirectoryInfo) {
    endOfDirectoryInfo = await seekEndOfCentralDirectory(reader, maxAppendedDataSize, remoteProbeBudget);
  }
  return { endOfDirectoryInfo, endOfDirectoryReachingEndCount };
}
async function seekEndOfCentralDirectory(reader, maxAppendedDataSize, remoteProbeBudget) {
  const { size } = reader;
  const searchLength = Math.min(size, maxAppendedDataSize == Infinity ? size : END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS + maxAppendedDataSize);
  let firstSignatureInfo, plausibleInfo;
  for await (const [searchView, searchOffset, searchArray, indexByte, offset] of scanEndOfCentralDirectory(reader, searchLength)) {
    const record2 = getEndOfCentralDirectoryInfo(searchArray, indexByte, offset);
    if (!firstSignatureInfo) {
      firstSignatureInfo = record2;
    }
    const reachability = await getCentralDirectoryReachability(reader, searchView, searchOffset, indexByte, offset, size, remoteProbeBudget);
    if (reachability == CENTRAL_DIRECTORY_REACHABLE) {
      return record2;
    }
    if (reachability == CENTRAL_DIRECTORY_PLAUSIBLE && !plausibleInfo) {
      plausibleInfo = record2;
    }
  }
  return plausibleInfo || firstSignatureInfo;
}
async function* scanEndOfCentralDirectory(reader, scanLength) {
  const scanOffset = reader.size - scanLength;
  const scanArray = await readUint8Array(reader, scanOffset, scanLength);
  const scanView = getDataView(scanArray);
  for (let indexByte = scanArray.length - END_OF_CENTRAL_DIR_LENGTH; indexByte >= 0; indexByte--) {
    if (getUint32(scanView, indexByte) == END_OF_CENTRAL_DIR_SIGNATURE) {
      yield [scanView, scanOffset, scanArray, indexByte, scanOffset + indexByte];
    }
  }
}
function getEndOfCentralDirectoryInfo(scanArray, indexByte, offset) {
  return { offset, buffer: new Uint8Array(scanArray.subarray(indexByte, indexByte + END_OF_CENTRAL_DIR_LENGTH)).buffer };
}
async function getCentralDirectoryReachability(reader, view, anchoredOffset, indexByte, offset, size, remoteProbeBudget) {
  const filesLength = getUint16(view, indexByte + 10);
  const directoryDataLength = getUint32(view, indexByte + 12);
  const directoryDataOffset = getUint32(view, indexByte + 16);
  if (filesLength == MAX_16_BITS || directoryDataLength == MAX_32_BITS || directoryDataOffset == MAX_32_BITS) {
    const locatorSignature = await readSignature(reader, view, anchoredOffset, offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, size, remoteProbeBudget);
    return locatorSignature == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE ? CENTRAL_DIRECTORY_REACHABLE : CENTRAL_DIRECTORY_UNREACHABLE;
  }
  if (!filesLength && !directoryDataLength) {
    return CENTRAL_DIRECTORY_PLAUSIBLE;
  }
  const directoryDiskNumber = getUint16(view, indexByte + 6);
  for (const centralDirectoryOffset of [offset - directoryDataLength, getDiskOffset(reader, directoryDiskNumber) + directoryDataOffset]) {
    if (await readSignature(reader, view, anchoredOffset, centralDirectoryOffset, size, remoteProbeBudget) == CENTRAL_FILE_HEADER_SIGNATURE) {
      return CENTRAL_DIRECTORY_REACHABLE;
    }
  }
  return CENTRAL_DIRECTORY_UNREACHABLE;
}
async function readSignature(reader, view, anchoredOffset, signatureOffset, size, remoteProbeBudget) {
  if (signatureOffset < 0 || signatureOffset + 4 > size) {
    return UNDEFINED_VALUE;
  }
  if (signatureOffset >= anchoredOffset) {
    return getUint32(view, signatureOffset - anchoredOffset);
  }
  if (remoteProbeBudget.remaining > 0) {
    remoteProbeBudget.remaining--;
    const signatureArray = await readUint8Array(reader, signatureOffset, 4);
    return getUint32(getDataView(signatureArray), 0);
  }
  return UNDEFINED_VALUE;
}
function validateLocalDirectory(zipEntry, localDirectory, rawLocalFilename, checkLocalFilename, warnings) {
  const { rawFilename } = zipEntry;
  const reject = !warnings;
  const maskedLocalDirectory = zipEntry.decryptedDirectory && (localDirectory.rawBitFlag & BITFLAG_MASKED_LOCAL_HEADERS) == BITFLAG_MASKED_LOCAL_HEADERS;
  if (checkLocalFilename && !maskedLocalDirectory && (rawLocalFilename.length != rawFilename.length || rawLocalFilename.some((byteValue, indexByte) => byteValue != rawFilename[indexByte]))) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME);
  }
  if ((localDirectory.rawBitFlag & BITFLAG_AMBIGUITY_MASK) != (zipEntry.rawBitFlag & BITFLAG_AMBIGUITY_MASK)) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG);
  }
  if (localDirectory.compressionMethod != zipEntry.compressionMethod) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD);
  }
  if (!localDirectory.bitFlag.dataDescriptor && !maskedLocalDirectory && (localDirectory.crc32 || localDirectory.compressedSize || localDirectory.uncompressedSize) && (localDirectory.crc32 != zipEntry.crc32 || localDirectory.compressedSize != zipEntry.compressedSize || localDirectory.uncompressedSize != zipEntry.uncompressedSize)) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES);
  }
}
function validateDataDescriptor(zipEntry, localDirectory, warnings) {
  const { dataDescriptor } = localDirectory;
  const maskedLocalDirectory = zipEntry.decryptedDirectory && (localDirectory.rawBitFlag & BITFLAG_MASKED_LOCAL_HEADERS) == BITFLAG_MASKED_LOCAL_HEADERS;
  if (dataDescriptor && !maskedLocalDirectory && (zipEntry.crc32 !== UNDEFINED_VALUE && dataDescriptor.crc32 != zipEntry.crc32 || dataDescriptor.compressedSize != zipEntry.compressedSize || dataDescriptor.uncompressedSize != zipEntry.uncompressedSize)) {
    reportAmbiguity(!warnings, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES);
  }
}
function reportAmbiguity(reject, warnings, reason) {
  if (reject) {
    throwAmbiguousArchive(reason);
  } else {
    addWarning(warnings, reason);
  }
}
function throwAmbiguousArchive(reason) {
  const error = new Error(ERR_AMBIGUOUS_ARCHIVE);
  error.reason = reason;
  throw error;
}
function getOptionValue(zipReader, options, name) {
  return options[name] === UNDEFINED_VALUE ? zipReader.options[name] : options[name];
}
function getFunctionOptionValue(zipReader, options, name) {
  return checkFunctionOption(getOptionValue(zipReader, options, name));
}
function getDate(timeRaw) {
  const date = (timeRaw & 4294901760) >> 16, time = timeRaw & MAX_16_BITS;
  const result = new Date(1980 + ((date & 65024) >> 9), ((date & 480) >> 5) - 1, date & 31, (time & 63488) >> 11, (time & 2016) >> 5, (time & 31) * 2, 0);
  return result < MIN_DATE ? MIN_DATE : result;
}
function getDateNTFS(timeRaw) {
  return new Date(Number(timeRaw / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(view, offset) {
  return view.getUint8(offset);
}
function getUint16(view, offset) {
  return view.getUint16(offset, true);
}
function getUint32(view, offset) {
  return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
  const value = view.getBigUint64(offset, true);
  if (value > MAX_SAFE_UINT64) {
    throw new Error(ERR_UNSUPPORTED_UINT64);
  }
  return Number(value);
}
var ERR_BAD_FORMAT, ERR_EOCDR_NOT_FOUND, ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND, ERR_CENTRAL_DIRECTORY_NOT_FOUND, ERR_ENCRYPTED, ERR_UNSUPPORTED_ENCRYPTION, ERR_SPLIT_ZIP_FILE, ERR_ENTRY_DATA_OUT_OF_BOUNDS, ERR_AMBIGUOUS_ARCHIVE, ERR_ENCRYPTED_CENTRAL_DIRECTORY, ERR_UNSAFE_FILENAME, ERR_INVALID_STRICTNESS, ERR_INVALID_FILENAME_VALIDATION, ERR_INVALID_MAX_APPENDED_DATA_SIZE, ERR_UNSUPPORTED_UINT64, WARNING_UNSORTED_CENTRAL_DIRECTORY, WARNING_UNKNOWN_VERSION, WARNING_COMPRESSED_PATCHED_DATA, WARNING_MALFORMED_EXTRA_FIELD, WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA, WARNING_WRAPPED_ENTRIES_COUNT, WARNING_APPENDED_DATA, WARNING_PREPENDED_DATA, WARNING_PREPENDED_CENTRAL_DIRECTORY, WARNING_TRAILING_CENTRAL_DIRECTORY_DATA, WARNING_MISMATCHED_CENTRAL_DIRECTORY_OFFSET, WARNING_MISSING_ZIP64_EXTRA_FIELD, WARNING_DUPLICATE_FILENAME, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY, WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY, WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME, WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG, WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD, WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES, MAX_KNOWN_VERSION, DRIVE_LETTER_REGEXP, PARENT_DIRECTORY_REGEXP, CHARSET_UTF8, PROPERTY_NAME_UTF8_SUFFIX, CHARSET_CP437, BITFLAG_AMBIGUITY_MASK, VENDOR_VERSION_AE_1, ZIP64_PROPERTIES, ZIP64_EXTRACTION, MAX_SAFE_UINT64, MAX_END_OF_CENTRAL_DIR_PROBES, MAX_DEFLATE_EXPANSION_RATIO, CENTRAL_DIRECTORY_UNREACHABLE, CENTRAL_DIRECTORY_PLAUSIBLE, CENTRAL_DIRECTORY_REACHABLE, ZipReader, ZipReaderStream, ZipEntry;
var init_zip_reader = __esm({
  "../../../node_modules/@zip.js/zip.js/lib/core/zip-reader.js"() {
    init_constants();
    init_configuration();
    init_codec_registry();
    init_codec_pool();
    init_io();
    init_decode_text();
    init_array();
    init_warnings();
    init_compatible_streams();
    init_error();
    init_crc32();
    init_zip_entry();
    init_options();
    ERR_BAD_FORMAT = "File format is not recognized";
    ERR_EOCDR_NOT_FOUND = "End of central directory not found";
    ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
    ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
    ERR_ENCRYPTED = "File contains encrypted entry";
    ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
    ERR_SPLIT_ZIP_FILE = "Split zip file";
    ERR_ENTRY_DATA_OUT_OF_BOUNDS = "Entry data out of bounds";
    ERR_AMBIGUOUS_ARCHIVE = "Ambiguous archive";
    ERR_ENCRYPTED_CENTRAL_DIRECTORY = "Encrypted central directory is not supported";
    ERR_UNSAFE_FILENAME = "Unsafe filename";
    ERR_INVALID_STRICTNESS = "Invalid strictness (must be 'strict', 'balanced' or 'tolerant')";
    ERR_INVALID_FILENAME_VALIDATION = "Invalid filenameValidation (must be 'strict', 'balanced' or 'tolerant')";
    ERR_INVALID_MAX_APPENDED_DATA_SIZE = "Invalid maxAppendedDataSize (must be a number greater than or equal to 0)";
    ERR_UNSUPPORTED_UINT64 = "64-bit value exceeds Number.MAX_SAFE_INTEGER";
    WARNING_UNSORTED_CENTRAL_DIRECTORY = "unsorted central directory";
    WARNING_UNKNOWN_VERSION = "unknown version needed to extract";
    WARNING_COMPRESSED_PATCHED_DATA = "compressed patched data";
    WARNING_MALFORMED_EXTRA_FIELD = "malformed extra field";
    WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA = "unknown zip64 extensible data";
    WARNING_WRAPPED_ENTRIES_COUNT = "wrapped entries count";
    WARNING_APPENDED_DATA = "appended data";
    WARNING_PREPENDED_DATA = "prepended data";
    WARNING_PREPENDED_CENTRAL_DIRECTORY = "prepended central directory";
    WARNING_TRAILING_CENTRAL_DIRECTORY_DATA = "trailing central directory data";
    WARNING_MISMATCHED_CENTRAL_DIRECTORY_OFFSET = "mismatched central directory offset";
    WARNING_MISSING_ZIP64_EXTRA_FIELD = "missing zip64 extra field";
    WARNING_DUPLICATE_FILENAME = "duplicate filename";
    WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY = "mismatched zip64 end of central directory record";
    WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY = "multiple end of central directory records";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME = "mismatched local file header (filename)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG = "mismatched local file header (general purpose bit flag)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD = "mismatched local file header (compression method)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES = "mismatched local file header (crc32 or sizes)";
    MAX_KNOWN_VERSION = 63;
    DRIVE_LETTER_REGEXP = /^[a-zA-Z]:/;
    PARENT_DIRECTORY_REGEXP = /(^|[\\/])\.\.([\\/]|$)/;
    CHARSET_UTF8 = "utf-8";
    PROPERTY_NAME_UTF8_SUFFIX = "UTF8";
    CHARSET_CP437 = "cp437";
    BITFLAG_AMBIGUITY_MASK = BITFLAG_ENCRYPTED | BITFLAG_DATA_DESCRIPTOR | BITFLAG_STRONG_ENCRYPTION | BITFLAG_LANG_ENCODING_FLAG;
    VENDOR_VERSION_AE_1 = 1;
    ZIP64_PROPERTIES = [
      [PROPERTY_NAME_UNCOMPRESSED_SIZE, MAX_32_BITS],
      [PROPERTY_NAME_COMPRESSED_SIZE, MAX_32_BITS],
      [PROPERTY_NAME_OFFSET, MAX_32_BITS],
      [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
    ];
    ZIP64_EXTRACTION = {
      [MAX_16_BITS]: {
        getValue: getUint32,
        bytes: 4
      },
      [MAX_32_BITS]: {
        getValue: getBigUint64,
        bytes: 8
      }
    };
    MAX_SAFE_UINT64 = BigInt(Number.MAX_SAFE_INTEGER);
    MAX_END_OF_CENTRAL_DIR_PROBES = 64;
    MAX_DEFLATE_EXPANSION_RATIO = 1032;
    CENTRAL_DIRECTORY_UNREACHABLE = 0;
    CENTRAL_DIRECTORY_PLAUSIBLE = 1;
    CENTRAL_DIRECTORY_REACHABLE = 2;
    ZipReader = class {
      constructor(reader, options = {}) {
        Object.assign(this, {
          reader: new GenericReader(reader),
          options: options || {},
          readRanges: { indexes: /* @__PURE__ */ new Set(), sortedRanges: [], pendingRanges: [] },
          entriesMissingZip64ExtraField: /* @__PURE__ */ new WeakSet()
        });
      }
      async *getEntriesGenerator(options = {}) {
        const zipReader = this;
        let { reader } = zipReader;
        await initStream(reader);
        if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
          reader = new BlobReader(await streamToBlob(reader.readable));
          await initStream(reader);
        }
        if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
          throw new Error(ERR_BAD_FORMAT);
        }
        const warnings = zipReader.warnings = [];
        const strictness = getStrictness(options, zipReader.options);
        const checkAmbiguity = strictness == STRICTNESS_STRICT;
        const rejectAmbiguousEndOfDirectory = strictness != STRICTNESS_TOLERANT;
        const maxAppendedDataSize = getMaxAppendedDataSize(getOptionValue(zipReader, options, OPTION_MAX_APPENDED_DATA_SIZE), strictness);
        const filenameValidation = getFilenameValidation(getOptionValue(zipReader, options, OPTION_FILENAME_VALIDATION), strictness);
        const normalizeFilename = getOptionValue(zipReader, options, OPTION_NORMALIZE_FILENAME);
        const { endOfDirectoryInfo, endOfDirectoryReachingEndCount } = await findEndOfCentralDirectory(reader, rejectAmbiguousEndOfDirectory, maxAppendedDataSize);
        if (!endOfDirectoryInfo) {
          if (await startsWithSplitZipSignature(reader)) {
            throw new Error(ERR_SPLIT_ZIP_FILE);
          } else {
            throw new Error(ERR_EOCDR_NOT_FOUND);
          }
        }
        if (rejectAmbiguousEndOfDirectory && endOfDirectoryReachingEndCount > 1) {
          throwAmbiguousArchive(WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY);
        }
        const endOfDirectoryView = getDataView(endOfDirectoryInfo);
        let directoryDataLength = getUint32(endOfDirectoryView, 12);
        let directoryDataOffset = getUint32(endOfDirectoryView, 16);
        const commentOffset = endOfDirectoryInfo.offset;
        const commentLength = getUint16(endOfDirectoryView, 20);
        const appendedDataOffset = commentOffset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
        const appendedDataLength = reader.size - appendedDataOffset;
        if (appendedDataLength > maxAppendedDataSize) {
          throwAmbiguousArchive(WARNING_APPENDED_DATA);
        }
        if (appendedDataLength > 0) {
          addWarning(warnings, WARNING_APPENDED_DATA);
        }
        let lastDiskNumber = getUint16(endOfDirectoryView, 4);
        const expectedLastDiskNumber = reader.lastDiskNumber || 0;
        let diskNumber = getUint16(endOfDirectoryView, 6);
        let filesLength = getUint16(endOfDirectoryView, 10);
        let prependedDataLength = 0;
        let prependedCentralDirectory;
        let startOffset;
        let zip64EndOfDirectory;
        let zip64EndOfDirectoryVersion2;
        let zip64EndOfDirectoryLength = ZIP64_END_OF_CENTRAL_DIR_LENGTH;
        let directoryEncryptionInfo;
        const requiresZip64 = directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || filesLength == MAX_16_BITS || diskNumber == MAX_16_BITS;
        if (directoryDataOffset != MAX_32_BITS && diskNumber != MAX_16_BITS) {
          directoryDataOffset += getDiskOffset(reader, diskNumber);
        }
        if (requiresZip64) {
          const endOfDirectoryLocatorArray = endOfDirectoryInfo.offset >= ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH ? await readUint8Array(reader, endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH) : EMPTY_UINT8_ARRAY;
          const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
          if (endOfDirectoryLocatorArray.length == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH && getUint32(endOfDirectoryLocatorView, 0) == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
            directoryDataOffset = getDiskOffset(reader, getUint32(endOfDirectoryLocatorView, 4)) + getBigUint64(endOfDirectoryLocatorView, 8);
            let endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH);
            let endOfDirectoryView2 = getDataView(endOfDirectoryArray);
            if (endOfDirectoryArray.length < ZIP64_END_OF_CENTRAL_DIR_LENGTH || getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
              const locatorOffset = endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH;
              let expectedDirectoryDataOffset = locatorOffset - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
              if (!await startsWithSignature(reader, expectedDirectoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_SIGNATURE)) {
                expectedDirectoryDataOffset = await findZip64EndOfDirectoryOffset(reader, locatorOffset);
              }
              if (expectedDirectoryDataOffset !== UNDEFINED_VALUE && expectedDirectoryDataOffset >= 0 && directoryDataOffset != expectedDirectoryDataOffset) {
                const originalDirectoryDataOffset = directoryDataOffset;
                directoryDataOffset = expectedDirectoryDataOffset;
                if (directoryDataOffset > originalDirectoryDataOffset) {
                  prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
                }
                endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH);
                endOfDirectoryView2 = getDataView(endOfDirectoryArray);
              }
            }
            if (endOfDirectoryArray.length < ZIP64_END_OF_CENTRAL_DIR_LENGTH || getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
              throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
            }
            zip64EndOfDirectory = true;
            zip64EndOfDirectoryVersion2 = getBigUint64(endOfDirectoryView2, 4) > ZIP64_END_OF_CENTRAL_DIR_LENGTH - 12;
            if (zip64EndOfDirectoryVersion2) {
              const extensibleDataLength = Math.min(
                getBigUint64(endOfDirectoryView2, 4) - (ZIP64_END_OF_CENTRAL_DIR_LENGTH - 12),
                reader.size - directoryDataOffset - ZIP64_END_OF_CENTRAL_DIR_LENGTH
              );
              if (extensibleDataLength > 0) {
                zip64EndOfDirectoryLength += extensibleDataLength;
                const rawExtensibleData = await readUint8Array(reader, directoryDataOffset + ZIP64_END_OF_CENTRAL_DIR_LENGTH, extensibleDataLength);
                directoryEncryptionInfo = getDirectoryEncryptionInfo(rawExtensibleData);
              }
            }
            if (lastDiskNumber == MAX_16_BITS) {
              lastDiskNumber = getUint32(endOfDirectoryView2, 16);
            } else if (lastDiskNumber != getUint32(endOfDirectoryView2, 16)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (diskNumber == MAX_16_BITS) {
              diskNumber = getUint32(endOfDirectoryView2, 20);
            } else if (diskNumber != getUint32(endOfDirectoryView2, 20)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (filesLength == MAX_16_BITS) {
              filesLength = getBigUint64(endOfDirectoryView2, 32);
            } else if (filesLength != getBigUint64(endOfDirectoryView2, 32)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (directoryDataLength == MAX_32_BITS) {
              directoryDataLength = getBigUint64(endOfDirectoryView2, 40);
            } else if (directoryDataLength != getBigUint64(endOfDirectoryView2, 40)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            directoryDataOffset = getDiskOffset(reader, diskNumber) + getBigUint64(endOfDirectoryView2, 48) + prependedDataLength;
          } else if (directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || diskNumber == MAX_16_BITS) {
            throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
          }
        }
        let declaredDirectoryDataLength = directoryDataLength;
        const centralDirectoryEndOffset = endOfDirectoryInfo.offset - (zip64EndOfDirectory ? zip64EndOfDirectoryLength + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH : 0);
        if (expectedLastDiskNumber != lastDiskNumber) {
          throw new Error(ERR_SPLIT_ZIP_FILE);
        }
        if (directoryDataOffset < 0) {
          throw new Error(ERR_BAD_FORMAT);
        }
        let offset = 0;
        let directoryArray = directoryDataOffset < reader.size ? await readUint8Array(reader, directoryDataOffset, directoryDataLength) : EMPTY_UINT8_ARRAY;
        let directoryView = getDataView(directoryArray);
        if (directoryDataLength) {
          let expectedDirectoryDataOffset = centralDirectoryEndOffset - directoryDataLength;
          if (directoryDataOffset != expectedDirectoryDataOffset && diskNumber == lastDiskNumber) {
            const storedPointsAtDirectory = directoryArray.length >= 4 && (getUint32(directoryView, offset) == CENTRAL_FILE_HEADER_SIGNATURE || Boolean(directoryEncryptionInfo && directoryEncryptionInfo.compressedSize) || detectEncryptedCentralDirectory(directoryView));
            if (!storedPointsAtDirectory && expectedDirectoryDataOffset < 0) {
              throw new Error(ERR_BAD_FORMAT);
            }
            let reconcile = !storedPointsAtDirectory;
            if (expectedDirectoryDataOffset >= 0 && expectedDirectoryDataOffset + 4 <= reader.size) {
              let expectedPointsAtDirectory = await pointsAtDirectory(reader, expectedDirectoryDataOffset);
              if (!expectedPointsAtDirectory) {
                const signatureRecordOffset = await findDigitalSignatureRecordOffset(reader, centralDirectoryEndOffset);
                const signedDirectoryDataOffset = signatureRecordOffset - directoryDataLength;
                if (signatureRecordOffset !== UNDEFINED_VALUE && signedDirectoryDataOffset >= 0 && await pointsAtDirectory(reader, signedDirectoryDataOffset)) {
                  expectedDirectoryDataOffset = signedDirectoryDataOffset;
                  expectedPointsAtDirectory = true;
                }
              }
              if (storedPointsAtDirectory) {
                reconcile = expectedPointsAtDirectory;
              }
            }
            if (reconcile && expectedDirectoryDataOffset != directoryDataOffset) {
              const originalDirectoryDataOffset = directoryDataOffset;
              directoryDataOffset = expectedDirectoryDataOffset;
              directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength);
              directoryView = getDataView(directoryArray);
              const offsetDelta = directoryDataOffset - originalDirectoryDataOffset;
              const { localHeaderFound, shiftedLocalHeaderFound } = await probeLocalHeaders(reader, directoryArray, directoryView, offsetDelta);
              if (offsetDelta > 0 && !(localHeaderFound && !shiftedLocalHeaderFound)) {
                prependedDataLength += offsetDelta;
                prependedCentralDirectory = storedPointsAtDirectory;
              } else {
                reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_CENTRAL_DIRECTORY_OFFSET);
                if (offsetDelta < 0 && !localHeaderFound && shiftedLocalHeaderFound) {
                  prependedDataLength += offsetDelta;
                }
              }
            }
          }
          if (directoryArray.length < 4) {
            throw new Error(ERR_BAD_FORMAT);
          }
        } else if (!filesLength && directoryDataOffset < centralDirectoryEndOffset && diskNumber == lastDiskNumber) {
          prependedDataLength += centralDirectoryEndOffset - directoryDataOffset;
          directoryDataOffset = centralDirectoryEndOffset;
        }
        const expectedDirectoryDataLength = centralDirectoryEndOffset - directoryDataOffset;
        if (directoryDataLength != expectedDirectoryDataLength && expectedDirectoryDataLength >= 0 && diskNumber == lastDiskNumber) {
          directoryDataLength = expectedDirectoryDataLength;
          directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength);
          directoryView = getDataView(directoryArray);
        }
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) {
          throw new Error(ERR_BAD_FORMAT);
        }
        zipReader.directoryOffset = directoryDataOffset;
        zipReader.directoryLength = declaredDirectoryDataLength;
        const decryptCentralDirectory = getFunctionOptionValue(zipReader, options, OPTION_DECRYPT_CENTRAL_DIRECTORY);
        let decryptedDirectory, dataAfterEncryptedDirectory;
        if (decryptCentralDirectory && filesLength && directoryArray.length >= 4 && getUint32(directoryView, 0) != CENTRAL_FILE_HEADER_SIGNATURE && (zip64EndOfDirectoryVersion2 || detectEncryptedCentralDirectory(directoryView))) {
          const encryptedDirectoryDataLength = getEncryptedDirectoryDataLength(directoryEncryptionInfo, declaredDirectoryDataLength, directoryArray.length);
          dataAfterEncryptedDirectory = directoryArray.subarray(encryptedDirectoryDataLength);
          directoryArray = await decryptCentralDirectory(directoryArray.subarray(0, encryptedDirectoryDataLength), directoryEncryptionInfo);
          directoryView = getDataView(directoryArray);
          declaredDirectoryDataLength = directoryArray.length;
          decryptedDirectory = true;
        }
        if (directoryEncryptionInfo && !decryptedDirectory && (directoryArray.length < 4 || getUint32(directoryView, 0) == CENTRAL_FILE_HEADER_SIGNATURE)) {
          addWarning(warnings, WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA);
        }
        startOffset = directoryDataOffset;
        const filenameEncoding = getOptionValue(zipReader, options, OPTION_FILENAME_ENCODING);
        const commentEncoding = getOptionValue(zipReader, options, OPTION_COMMENT_ENCODING);
        const filenames = /* @__PURE__ */ new Set();
        let duplicateFilename;
        let previousEntryPosition = -Infinity;
        const recoverWrappedFilesLength = !checkAmbiguity && !zip64EndOfDirectory;
        if (!filesLength && recoverWrappedFilesLength) {
          filesLength = getWrappedFilesLength(directoryView, directoryArray, offset);
          if (filesLength) {
            addWarning(warnings, WARNING_WRAPPED_ENTRIES_COUNT);
          }
        }
        const entryOptions = Object.assign({}, zipReader.options, options, { [OPTION_STRICTNESS]: strictness });
        delete entryOptions[OPTION_CHECK_AMBIGUITY];
        for (let indexFile = 0; indexFile < filesLength; indexFile++) {
          const fileEntry = new ZipEntry(reader, entryOptions);
          if (offset + CENTRAL_FILE_HEADER_LENGTH > directoryArray.length || getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE) {
            if (indexFile == 0 && !decryptedDirectory && (zip64EndOfDirectoryVersion2 || detectEncryptedCentralDirectory(directoryView))) {
              throw new Error(ERR_ENCRYPTED_CENTRAL_DIRECTORY);
            }
            throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
          }
          readCommonHeader(fileEntry, directoryView, offset + 6);
          const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
          const filenameOffset = offset + CENTRAL_FILE_HEADER_LENGTH;
          const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
          const commentOffset2 = extraFieldOffset + fileEntry.extraFieldLength;
          const versionMadeBy = getUint16(directoryView, offset + 4);
          const msDosCompatible = versionMadeBy >> 8 == 0;
          const unixCompatible = versionMadeBy >> 8 == 3;
          const commentLength2 = getUint16(directoryView, offset + 32);
          const endOffset = commentOffset2 + commentLength2;
          const rawEntryData = new Uint8Array(directoryArray.subarray(filenameOffset, endOffset));
          const rawFilename = rawEntryData.subarray(0, fileEntry.filenameLength);
          const rawComment = rawEntryData.subarray(fileEntry.filenameLength + fileEntry.extraFieldLength);
          const filenameUTF8 = languageEncodingFlag || !filenameEncoding && isUTF8Text(rawFilename);
          const commentUTF8 = languageEncodingFlag || !commentEncoding && isUTF8Text(rawComment);
          const externalFileAttributes = getUint32(directoryView, offset + 38);
          const msdosAttributesRaw = externalFileAttributes & MAX_8_BITS;
          const msdosAttributes = {
            readOnly: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_READONLY_MASK),
            hidden: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_HIDDEN_MASK),
            system: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_SYSTEM_MASK),
            directory: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_DIR_MASK),
            archive: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_ARCHIVE_MASK)
          };
          const offsetFileEntry = getUint32(directoryView, offset + 42);
          const decode2 = getFunctionOptionValue(zipReader, options, OPTION_DECODE_TEXT) || decodeText;
          const rawFilenameEncoding = filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437;
          const rawCommentEncoding = commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437;
          let filename = decode2(rawFilename, rawFilenameEncoding, TEXT_TYPE_FILENAME);
          if (filename === UNDEFINED_VALUE) {
            filename = decodeText(rawFilename, rawFilenameEncoding);
          }
          let comment = decode2(rawComment, rawCommentEncoding, TEXT_TYPE_COMMENT);
          if (comment === UNDEFINED_VALUE) {
            comment = decodeText(rawComment, rawCommentEncoding);
          }
          Object.assign(fileEntry, {
            index: indexFile,
            decryptedDirectory,
            versionMadeBy,
            msDosCompatible,
            zip64: false,
            compressedSize: 0,
            uncompressedSize: 0,
            commentLength: commentLength2,
            offset: offsetFileEntry,
            diskNumberStart: getUint16(directoryView, offset + 34),
            internalFileAttributes: getUint16(directoryView, offset + 36),
            externalFileAttributes,
            msdosAttributesRaw,
            msdosAttributes,
            rawFilename,
            filenameUTF8,
            commentUTF8,
            rawExtraField: rawEntryData.subarray(fileEntry.filenameLength, fileEntry.filenameLength + fileEntry.extraFieldLength),
            rawComment,
            filename,
            comment
          });
          let malformedExtraField;
          try {
            malformedExtraField = readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
          } catch (error) {
            if (checkAmbiguity || error.message != ERR_EXTRAFIELD_ZIP64_NOT_FOUND) {
              throw error;
            }
            fileEntry.zip64ExtraFieldMissing = true;
            addWarning(warnings, WARNING_MISSING_ZIP64_EXTRA_FIELD, fileEntry.filename);
          }
          filename = fileEntry.filename;
          if (normalizeFilename) {
            const normalizedFilename = normalizeFilename(filename);
            if (normalizedFilename !== UNDEFINED_VALUE) {
              filename = fileEntry.filename = normalizedFilename;
            }
          }
          if (isUnsafeFilename(filename, filenameValidation)) {
            const error = new Error(ERR_UNSAFE_FILENAME);
            error.filename = filename;
            throw error;
          }
          if (malformedExtraField) {
            addWarning(warnings, WARNING_MALFORMED_EXTRA_FIELD, filename);
          }
          if (fileEntry.zip64ExtraFieldMissing && fileEntry.offset == MAX_32_BITS) {
            startOffset = 0;
          } else {
            fileEntry.offset += prependedDataLength;
            const entryPosition = getDiskOffset(reader, fileEntry.diskNumberStart) + fileEntry.offset;
            startOffset = Math.min(entryPosition, startOffset);
            if (entryPosition < previousEntryPosition) {
              addWarning(warnings, WARNING_UNSORTED_CENTRAL_DIRECTORY, filename);
            }
            previousEntryPosition = entryPosition;
          }
          if ((fileEntry.version & MAX_8_BITS) > MAX_KNOWN_VERSION) {
            addWarning(warnings, WARNING_UNKNOWN_VERSION, filename);
          }
          if ((fileEntry.rawBitFlag & BITFLAG_COMPRESSED_PATCHED_DATA) == BITFLAG_COMPRESSED_PATCHED_DATA) {
            addWarning(warnings, WARNING_COMPRESSED_PATCHED_DATA, filename);
          }
          if (filenames.has(fileEntry.filename)) {
            duplicateFilename = true;
          }
          filenames.add(fileEntry.filename);
          const unixExternalUpper = fileEntry.externalFileAttributes >> 16 & MAX_16_BITS;
          if (fileEntry.unixMode === UNDEFINED_VALUE && (unixExternalUpper & (FILE_ATTR_UNIX_DEFAULT_MASK | FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_TYPE_DIR)) != 0) {
            fileEntry.unixMode = unixExternalUpper;
          }
          const setuid = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_SETUID_MASK);
          const setgid = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_SETGID_MASK);
          const sticky = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_STICKY_MASK);
          const unixType = fileEntry.unixMode === UNDEFINED_VALUE ? unixExternalUpper : fileEntry.unixMode;
          const symlink = (unixType & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_SYMLINK;
          const modeIsDir = fileEntry.unixMode !== UNDEFINED_VALUE && (fileEntry.unixMode & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_DIR;
          const upperIsDir = (unixExternalUpper & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_DIR;
          const directory = modeIsDir || upperIsDir || msDosCompatible && msdosAttributes.directory || fileEntry.filename.endsWith(DIRECTORY_SIGNATURE);
          const executable = !symlink && !directory && (fileEntry.unixMode !== UNDEFINED_VALUE ? (fileEntry.unixMode & FILE_ATTR_UNIX_EXECUTABLE_MASK) != 0 : unixCompatible && (unixExternalUpper & FILE_ATTR_UNIX_EXECUTABLE_MASK) != 0);
          Object.assign(fileEntry, {
            setuid,
            setgid,
            sticky,
            symlink,
            unixExternalUpper,
            executable,
            directory,
            zipCrypto: fileEntry.encrypted && !fileEntry.extraFieldAES
          });
          const entry = new Entry(fileEntry);
          if (fileEntry.zip64ExtraFieldMissing) {
            zipReader.entriesMissingZip64ExtraField.add(entry);
          }
          entry.getData = (writer, options2) => fileEntry.getData(writer, entry, zipReader, options2);
          entry.arrayBuffer = async (options2) => {
            const writer = new TransformStream();
            const arrayBufferPromise = streamToBlob(writer.readable).then((blob) => blob.arrayBuffer());
            arrayBufferPromise.catch(() => {
            });
            await fileEntry.getData(
              writer,
              entry,
              zipReader,
              Object.assign({}, options2, { preventClose: false })
            );
            return arrayBufferPromise;
          };
          offset = endOffset;
          if (indexFile == filesLength - 1 && recoverWrappedFilesLength) {
            const wrappedFilesLength = getWrappedFilesLength(directoryView, directoryArray, offset);
            if (wrappedFilesLength) {
              filesLength += wrappedFilesLength;
              addWarning(warnings, WARNING_WRAPPED_ENTRIES_COUNT);
            }
          }
          const { onprogress } = options;
          if (onprogress) {
            try {
              await onprogress(indexFile + 1, filesLength, new Entry(fileEntry));
            } catch {
            }
          }
          yield entry;
        }
        let offsetAfterSignature = offset;
        let digitalSignature = readDigitalSignature(directoryArray.subarray(offset)) || (decryptedDirectory ? readDigitalSignature(dataAfterEncryptedDirectory) : UNDEFINED_VALUE);
        if (!digitalSignature && !decryptedDirectory) {
          const signatureRecordOffset = directoryDataOffset + offset;
          const signatureRecordLength = Math.min(centralDirectoryEndOffset - signatureRecordOffset, 6 + MAX_16_BITS);
          if (signatureRecordLength >= 6) {
            digitalSignature = readDigitalSignature(await readUint8Array(reader, signatureRecordOffset, signatureRecordLength));
          }
        }
        if (digitalSignature) {
          zipReader.digitalSignature = digitalSignature;
          offsetAfterSignature = offset + 6 + digitalSignature.length;
        }
        if (offset != declaredDirectoryDataLength && offsetAfterSignature != declaredDirectoryDataLength || !decryptedDirectory && offset != directoryDataLength && offsetAfterSignature != directoryDataLength) {
          reportAmbiguity(checkAmbiguity, warnings, WARNING_TRAILING_CENTRAL_DIRECTORY_DATA);
        }
        if (duplicateFilename) {
          reportAmbiguity(checkAmbiguity, warnings, WARNING_DUPLICATE_FILENAME);
        }
        const extractPrependedData = getOptionValue(zipReader, options, OPTION_EXTRACT_PREPENDED_DATA);
        const extractAppendedData = getOptionValue(zipReader, options, OPTION_EXTRACT_APPENDED_DATA);
        const splitZipSignatureLength = (checkAmbiguity || extractPrependedData) && filesLength && startOffset == SPLIT_ZIP_FILE_SIGNATURE_LENGTH && await startsWithSplitZipMarker(reader) ? SPLIT_ZIP_FILE_SIGNATURE_LENGTH : 0;
        if (checkAmbiguity && (prependedDataLength > 0 || filesLength && startOffset > splitZipSignatureLength)) {
          throwAmbiguousArchive(WARNING_PREPENDED_DATA);
        }
        if (prependedDataLength > 0 || filesLength && startOffset > SPLIT_ZIP_FILE_SIGNATURE_LENGTH) {
          addWarning(warnings, WARNING_PREPENDED_DATA);
        }
        if (prependedCentralDirectory) {
          addWarning(warnings, WARNING_PREPENDED_CENTRAL_DIRECTORY);
        }
        if (extractPrependedData) {
          zipReader.prependedData = startOffset > splitZipSignatureLength ? await readUint8Array(reader, splitZipSignatureLength, startOffset - splitZipSignatureLength) : EMPTY_UINT8_ARRAY;
        }
        zipReader.comment = commentLength ? await readUint8Array(reader, commentOffset + END_OF_CENTRAL_DIR_LENGTH, commentLength) : EMPTY_UINT8_ARRAY;
        if (extractAppendedData) {
          zipReader.appendedData = appendedDataOffset < reader.size ? await readUint8Array(reader, appendedDataOffset, reader.size - appendedDataOffset) : EMPTY_UINT8_ARRAY;
        }
        return true;
      }
      async getEntries(options = {}) {
        const entries = [];
        for await (const entry of this.getEntriesGenerator(options)) {
          entries.push(entry);
        }
        return entries;
      }
      async close() {
        const { reader } = this;
        if (!reader.readUint8Array && reader.readable && !reader.readable.locked) {
          await reader.readable.cancel();
        }
      }
      [SYMBOL_ASYNC_DISPOSE]() {
        return this.close();
      }
    };
    ZipReaderStream = class {
      constructor(options = {}) {
        let sourceController;
        const { readable, writable } = new TransformStream({
          start(controller) {
            sourceController = controller;
          }
        });
        const zipReader = new ZipReader(readable, options);
        const gen = zipReader.getEntriesGenerator();
        const pendingEntries2 = /* @__PURE__ */ new Set();
        this.readable = new ReadableStream({
          async pull(controller) {
            const { done, value } = await gen.next();
            if (done)
              return controller.close();
            const entryStream = createEntryStream(value, pendingEntries2);
            const chunk = {
              ...value,
              readable: entryStream.readable
            };
            delete chunk.getData;
            Object.defineProperties(chunk, {
              localDirectory: {
                get: () => value.localDirectory,
                enumerable: true
              },
              warnings: {
                get: () => value.warnings,
                enumerable: true
              }
            });
            controller.enqueue(chunk);
          },
          async cancel(reason) {
            const entryStreams = Array.from(pendingEntries2);
            pendingEntries2.clear();
            sourceController.error(reason);
            await Promise.allSettled(entryStreams.map((entryStream) => entryStream.cancel(reason)));
            await Promise.allSettled([gen.return(), zipReader.close()]);
          }
        });
        this.writable = writable;
      }
    };
    ZipEntry = class {
      constructor(reader, options) {
        Object.assign(this, {
          reader,
          options
        });
      }
      async getData(writer, fileEntry, zipReader, options = {}) {
        const zipEntry = this;
        const { readRanges, directoryOffset } = zipReader;
        if (zipEntry.zip64ExtraFieldMissing) {
          throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
        }
        const config2 = getConfiguration();
        const {
          reader,
          index,
          offset,
          diskNumberStart,
          extraFieldAES,
          extraFieldZip64,
          compressionMethod,
          bitFlag,
          rawBitFlag,
          crc32,
          rawLastModDate,
          uncompressedSize,
          compressedSize
        } = zipEntry;
        const {
          dataDescriptor
        } = bitFlag;
        const localDirectory = fileEntry.localDirectory = {};
        const warnings = fileEntry.warnings = [];
        const localHeaderOffset = getDiskOffset(reader, diskNumberStart) + offset;
        const dataArray = await readUint8Array(reader, localHeaderOffset, HEADER_SIZE);
        const dataView = getDataView(dataArray);
        let password = getOptionValue(zipEntry, options, OPTION_PASSWORD);
        let rawPassword = getOptionValue(zipEntry, options, OPTION_RAW_PASSWORD);
        const passThrough = checkPassThroughOption(getOptionValue(zipEntry, options, OPTION_PASS_THROUGH));
        const passThroughCompression = Boolean(passThrough);
        const passThroughEncryption = passThrough === true;
        checkPasswordOption(password, rawPassword);
        password = password && password.length ? password : UNDEFINED_VALUE;
        rawPassword = rawPassword && rawPassword.length ? rawPassword : UNDEFINED_VALUE;
        if (extraFieldAES) {
          if (extraFieldAES.originalCompressionMethod != COMPRESSION_METHOD_AES) {
            throw new Error(ERR_UNSUPPORTED_COMPRESSION);
          }
        }
        if (dataArray.length < HEADER_SIZE || getUint32(dataView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
          throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
        }
        readCommonHeader(localDirectory, dataView, 4);
        const {
          extraFieldLength,
          filenameLength
        } = localDirectory;
        const dataOffset = localDirectory.dataOffset = localHeaderOffset + HEADER_SIZE + filenameLength + extraFieldLength;
        const checkLocalDirectoryOption = getOptionValue(zipEntry, options, OPTION_CHECK_LOCAL_DIRECTORY);
        const entryStrictness = getStrictness(options, zipEntry.options);
        const checkLocalDirectory = getCheckLocalDirectory(checkLocalDirectoryOption, entryStrictness);
        const checkLocalFilenameOption = getOptionValue(zipEntry, options, OPTION_CHECK_LOCAL_FILENAME);
        const checkLocalFilename = getCheckLocalFilename(
          checkLocalFilenameOption === UNDEFINED_VALUE ? checkLocalDirectoryOption : checkLocalFilenameOption,
          entryStrictness
        );
        let rawLocalFilename = EMPTY_UINT8_ARRAY;
        if (checkLocalFilename && (filenameLength || extraFieldLength)) {
          const trailingDataArray = await readUint8Array(reader, localHeaderOffset + HEADER_SIZE, filenameLength + extraFieldLength);
          rawLocalFilename = trailingDataArray.subarray(0, filenameLength);
          localDirectory.rawExtraField = trailingDataArray.subarray(filenameLength);
        } else {
          localDirectory.rawExtraField = extraFieldLength ? await readUint8Array(reader, localHeaderOffset + HEADER_SIZE + filenameLength, extraFieldLength) : EMPTY_UINT8_ARRAY;
        }
        if (checkLocalFilename) {
          localDirectory.rawFilename = rawLocalFilename;
        }
        if (readCommonFooter(zipEntry, localDirectory, dataView, 4, true)) {
          addWarning(warnings, WARNING_MALFORMED_EXTRA_FIELD);
        }
        validateLocalDirectory(zipEntry, localDirectory, rawLocalFilename, checkLocalFilename, checkLocalDirectory ? UNDEFINED_VALUE : warnings);
        const { lastAccessDate, creationDate, uid, gid } = localDirectory;
        if (lastAccessDate && fileEntry.lastAccessDate === UNDEFINED_VALUE) {
          fileEntry.lastAccessDate = lastAccessDate;
        }
        if (creationDate && fileEntry.creationDate === UNDEFINED_VALUE) {
          fileEntry.creationDate = creationDate;
        }
        if (uid !== UNDEFINED_VALUE && fileEntry.uid === UNDEFINED_VALUE) {
          fileEntry.uid = uid;
        }
        if (gid !== UNDEFINED_VALUE && fileEntry.gid === UNDEFINED_VALUE) {
          fileEntry.gid = gid;
        }
        const checkPasswordOnly = getOptionValue(zipEntry, options, OPTION_CHECK_PASSWORD_ONLY);
        const encrypted = zipEntry.encrypted && (!passThroughEncryption || checkPasswordOnly);
        const zipCrypto = encrypted && !extraFieldAES;
        if (!passThroughEncryption) {
          fileEntry.zipCrypto = zipCrypto;
        }
        if (encrypted && (zipEntry.rawBitFlag & BITFLAG_STRONG_ENCRYPTION) == BITFLAG_STRONG_ENCRYPTION) {
          throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
        }
        const registeredCodec = passThroughCompression ? UNDEFINED_VALUE : getRegisteredCodec(compressionMethod);
        if (compressionMethod != COMPRESSION_METHOD_STORE && compressionMethod != COMPRESSION_METHOD_DEFLATE && compressionMethod != COMPRESSION_METHOD_DEFLATE_64 && !registeredCodec && !passThroughCompression) {
          throw new Error(ERR_UNSUPPORTED_COMPRESSION);
        }
        if (encrypted) {
          if (!zipCrypto && (extraFieldAES.strength < 1 || extraFieldAES.strength > 3)) {
            throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
          } else if (!password && !rawPassword) {
            throw new Error(ERR_ENCRYPTED);
          }
        }
        if (dataOffset + compressedSize > Math.min(reader.size, directoryOffset)) {
          throw new Error(ERR_ENTRY_DATA_OUT_OF_BOUNDS);
        }
        const size = compressedSize;
        const signal = checkSignalOption(getOptionValue(zipEntry, options, OPTION_SIGNAL));
        throwIfAborted(signal);
        let checkOverlappingEntry = getOptionValue(zipEntry, options, OPTION_CHECK_OVERLAPPING_ENTRY);
        const checkOverlappingEntryOnly = getOptionValue(zipEntry, options, OPTION_CHECK_OVERLAPPING_ENTRY_ONLY);
        if (checkOverlappingEntryOnly) {
          checkOverlappingEntry = true;
        }
        const { onstart, onprogress, onend } = options;
        const compressed = compressionMethod != COMPRESSION_METHOD_STORE && !passThroughCompression;
        const outputSize = passThroughCompression ? compressedSize - getEncryptionOverhead(encrypted, zipCrypto, extraFieldAES && extraFieldAES.strength) : uncompressedSize;
        const deflate64 = compressionMethod == COMPRESSION_METHOD_DEFLATE_64;
        let useCompressionStream = getOptionValue(zipEntry, options, OPTION_USE_COMPRESSION_STREAM);
        if (deflate64) {
          useCompressionStream = false;
        }
        const checkCrc32Option = getOptionValue(zipEntry, options, OPTION_CHECK_CRC32);
        const checkCrc32 = (checkCrc32Option === UNDEFINED_VALUE ? getOptionValue(zipEntry, options, OPTION_CHECK_SIGNATURE) : checkCrc32Option) && !passThroughCompression && (!encrypted || zipCrypto || extraFieldAES && extraFieldAES.vendorVersion == VENDOR_VERSION_AE_1);
        const workerOptions = {
          options: {
            codecType: CODEC_INFLATE,
            password,
            rawPassword,
            zipCrypto,
            encryptionStrength: extraFieldAES && extraFieldAES.strength,
            checkCrc32,
            checkAuthenticationCode: getOptionValue(zipEntry, options, OPTION_CHECK_AUTHENTICATION_CODE),
            passwordVerification: zipCrypto && (dataDescriptor ? rawLastModDate >>> 8 & MAX_8_BITS : crc32 >>> 24 & MAX_8_BITS),
            outputSize,
            crc32,
            compressed,
            encrypted,
            useWebWorkers: getOptionValue(zipEntry, options, OPTION_USE_WEB_WORKERS),
            useCompressionStream,
            deflate64,
            format: registeredCodec ? registeredCodec.format : UNDEFINED_VALUE,
            codecURI: registeredCodec ? registeredCodec.codecURI : UNDEFINED_VALUE,
            compressionMethod,
            rawBitFlag,
            checkPasswordOnly
          },
          config: config2,
          streamOptions: { signal, size, onstart, onprogress, onend }
        };
        if (checkOverlappingEntry) {
          await detectOverlappingEntry({
            reader,
            fileEntry,
            index,
            offset: localHeaderOffset,
            crc32,
            compressedSize,
            uncompressedSize,
            dataOffset,
            dataDescriptor: dataDescriptor || localDirectory.bitFlag.dataDescriptor,
            extraFieldZip64: extraFieldZip64 || localDirectory.extraFieldZip64,
            readRanges
          });
          validateDataDescriptor(zipEntry, localDirectory, checkLocalDirectory ? UNDEFINED_VALUE : warnings);
        }
        let writable, abortError2, aborted;
        try {
          if (!checkOverlappingEntryOnly) {
            if (checkPasswordOnly) {
              writer = new WritableStream();
            }
            writer = new GenericWriter(writer);
            await initStream(writer, getDecodableOutputSize(outputSize, compressedSize, compressed));
            ({ writable } = writer);
            const readable = toCompatibleReadable(reader.createReadable({ offset: dataOffset, size }));
            const { outputSize: writtenSize } = await runWorker2({ readable, writable }, workerOptions);
            throwIfAborted(signal);
            if (writtenSize != outputSize) {
              throw Object.assign(new Error(ERR_INVALID_UNCOMPRESSED_SIZE), { outputSize: writtenSize });
            }
            writer.size += writtenSize;
          }
        } catch (error) {
          if (isErrorObject(error) && error.outputSize !== UNDEFINED_VALUE) {
            writer.size += error.outputSize;
          }
          if (!checkPasswordOnly || !isErrorObject(error) || error.message != ERR_ABORT_CHECK_PASSWORD) {
            abortError2 = error;
            aborted = true;
            throw error;
          }
        } finally {
          const preventClose = !ownsWritable(writer) && getOptionValue(zipEntry, options, OPTION_PREVENT_CLOSE);
          if (!preventClose && writable && !writable.locked) {
            const writableWriter = writable.getWriter();
            if (aborted) {
              try {
                await writableWriter.abort(abortError2);
              } catch {
              }
            } else {
              await writableWriter.close();
            }
          }
        }
        return checkPasswordOnly || checkOverlappingEntryOnly ? UNDEFINED_VALUE : writer.getData ? writer.getData() : writable;
      }
    };
  }
});

// src/engine/cli.ts
import { openAsBlob, statSync, writeFileSync } from "node:fs";
import { basename as basename2 } from "node:path";

// src/engine/types.ts
var SCHEMA_VERSION = 1;

// src/engine/format.ts
function formatInt(value) {
  const rounded = Math.round(Number.isFinite(value) ? value : 0);
  const digits = Math.abs(rounded).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return rounded < 0 ? `-${digits}` : digits;
}
function formatAverage(value) {
  const v = Number.isFinite(value) ? value : 0;
  return v < 9.95 ? v.toFixed(1) : formatInt(v);
}
function formatRate(value) {
  const v = Number.isFinite(value) ? value : 0;
  if (v >= 0.095 || v === 0) return v >= 99.95 ? formatInt(v) : v.toFixed(1);
  return v.toFixed(2);
}
function formatPercent(share) {
  const v = Number.isFinite(share) ? share : 0;
  const percent = v * 100;
  if (percent > 0 && percent < 1) return "<1%";
  return `${Math.round(percent)}%`;
}
function plural(count, singular, pluralForm = `${singular}s`) {
  return `${formatInt(count)} ${Math.round(count) === 1 ? singular : pluralForm}`;
}
function formatDelay(seconds) {
  const s = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  if (s < 60) return `${Math.max(1, Math.round(s))} sec`;
  if (s < 3600) return `${Math.round(s / 60)} min`;
  return `${Math.round(s / 3600)} hr`;
}
function round1(value) {
  return Number.isFinite(value) ? Math.round(value * 10) / 10 : 0;
}
function round2(value) {
  return Number.isFinite(value) ? Math.round(value * 100) / 100 : 0;
}
function round4(value) {
  return Number.isFinite(value) ? Math.round(value * 1e4) / 1e4 : 0;
}

// src/engine/awards.ts
var AWARD_CATALOG = {
  yapper: { title: "The Yapper", emoji: "\u{1F5E3}\uFE0F", tone: "wholesome", category: "volume", tagline: "sent the most messages" },
  novelist: { title: "The Novelist", emoji: "\u{1F4DA}", tone: "wholesome", category: "style", tagline: "wrote the longest messages" },
  minimalist: { title: "The Minimalist", emoji: "\u{1F90F}", tone: "wholesome", category: "style", tagline: "said it in the fewest words" },
  "night-owl": { title: "The Night Owl", emoji: "\u{1F989}", tone: "wholesome", category: "timing", tagline: "posted the most after 10pm" },
  "early-bird": { title: "The Early Bird", emoji: "\u{1F305}", tone: "wholesome", category: "timing", tagline: "posted the most before 8am" },
  "weekend-warrior": { title: "The Weekend Warrior", emoji: "\u{1F3D5}\uFE0F", tone: "spicy", category: "timing", tagline: "posted the most on weekends" },
  "first-responder": { title: "The First Responder", emoji: "\u{1F691}", tone: "wholesome", category: "social", tagline: "was first to reply more often than anyone" },
  "thread-starter": { title: "The Conversation Starter", emoji: "\u{1F9F5}", tone: "wholesome", category: "social", tagline: "started the most threads" },
  "hype-person": { title: "The Hype Person", emoji: "\u{1F4E3}", tone: "wholesome", category: "social", tagline: "gave the most reactions" },
  "crowd-favorite": { title: "The Crowd Favorite", emoji: "\u{1F31F}", tone: "wholesome", category: "social", tagline: "earned the most reactions per message" },
  "emoji-artist": { title: "The Emoji Artist", emoji: "\u{1F3A8}", tone: "wholesome", category: "style", tagline: "used the widest range of emoji" },
  interviewer: { title: "The Interviewer", emoji: "\u{1F3A4}", tone: "wholesome", category: "style", tagline: "asked the most questions" },
  "link-librarian": { title: "The Link Librarian", emoji: "\u{1F517}", tone: "wholesome", category: "craft", tagline: "shared the most links" },
  "meme-dealer": { title: "The Meme Dealer", emoji: "\u{1F5BC}\uFE0F", tone: "wholesome", category: "craft", tagline: "posted the most images" },
  "town-crier": { title: "The Town Crier", emoji: "\u{1F514}", tone: "spicy", category: "social", tagline: "rang the @channel bell the most" },
  editor: { title: "The Perfectionist", emoji: "\u270F\uFE0F", tone: "spicy", category: "craft", tagline: "edited the most messages" },
  "caps-lock-captain": { title: "The Caps Lock Captain", emoji: "\u{1F4E2}", tone: "spicy", category: "style", tagline: "wrote the most messages IN ALL CAPS" },
  connector: { title: "The Connector", emoji: "\u{1F578}\uFE0F", tone: "wholesome", category: "social", tagline: "@mentioned teammates the most" },
  "most-wanted": { title: "Most Wanted", emoji: "\u{1F3AF}", tone: "wholesome", category: "social", tagline: "got @mentioned the most" },
  explorer: { title: "The Explorer", emoji: "\u{1F9ED}", tone: "wholesome", category: "craft", tagline: "was active in the most channels" },
  "channel-founder": { title: "The Channel Founder", emoji: "\u{1F3D7}\uFE0F", tone: "wholesome", category: "craft", tagline: "created the most channels" },
  "streak-master": { title: "The Streak Master", emoji: "\u{1F525}", tone: "wholesome", category: "timing", tagline: "kept the longest weekday streak" },
  "huddle-hero": { title: "The Huddle Hero", emoji: "\u{1F3A7}", tone: "wholesome", category: "social", tagline: "spent the most time in huddles" },
  "gratitude-champion": { title: "The Gratitude Champion", emoji: "\u{1F64F}", tone: "wholesome", category: "social", tagline: "said thanks the most" },
  "most-thanked": { title: "The Most Thanked", emoji: "\u{1F490}", tone: "wholesome", category: "social", tagline: "got thanked the most" },
  "laugh-track": { title: "The Laugh Track", emoji: "\u{1F602}", tone: "wholesome", category: "style", tagline: "laughed the most" },
  "monologue-master": { title: "The Monologue Master", emoji: "\u{1F3AD}", tone: "spicy", category: "style", tagline: "posted the most messages in a row" },
  opener: { title: "The Opener", emoji: "\u2600\uFE0F", tone: "wholesome", category: "timing", tagline: "had the first word of the day most often" },
  closer: { title: "The Closer", emoji: "\u{1F319}", tone: "wholesome", category: "timing", tagline: "had the last word of the day most often" },
  rookie: { title: "Rookie of the Year", emoji: "\u{1F331}", tone: "wholesome", category: "volume", tagline: "sent the most messages of anyone who joined this year" },
  "emoji-connoisseur": { title: "The Custom Emoji Connoisseur", emoji: "\u{1F99C}", tone: "wholesome", category: "style", tagline: "used the most custom emoji" }
};
var FINALE = ["first-responder", "crowd-favorite", "hype-person", "yapper"];
var CATEGORY_ORDER = ["craft", "style", "timing", "social", "volume"];
var AWARD_ORDER = (() => {
  const ids = Object.keys(AWARD_CATALOG);
  const body = ids.filter((id) => !FINALE.includes(id));
  const wholesome = CATEGORY_ORDER.flatMap(
    (category) => body.filter((id) => AWARD_CATALOG[id].tone === "wholesome" && AWARD_CATALOG[id].category === category)
  );
  const spicy = body.filter((id) => AWARD_CATALOG[id].tone === "spicy");
  return [...wholesome, ...spicy, ...FINALE];
})();
var times = (n) => plural(n, "time");
function rules(context) {
  const s = (p2) => p2.stats;
  return {
    yapper: {
      value: (p2) => s(p2).messages,
      eligible: () => true,
      display: (v) => plural(v, "message")
    },
    novelist: {
      value: (p2) => s(p2).words / s(p2).messages,
      eligible: (p2) => s(p2).messages >= 50,
      display: (v) => `${formatAverage(v)} words per message`
    },
    minimalist: {
      value: (p2) => s(p2).words / s(p2).messages,
      eligible: (p2) => s(p2).messages >= 100,
      display: (v) => `${formatAverage(v)} words per message`,
      lowest: true
    },
    "night-owl": {
      value: (p2) => s(p2).nightMessages,
      eligible: (p2) => s(p2).nightMessages >= 15,
      display: (v) => `${plural(v, "message")} after 10pm`
    },
    "early-bird": {
      value: (p2) => s(p2).earlyMessages,
      eligible: (p2) => s(p2).earlyMessages >= 15,
      display: (v) => `${plural(v, "message")} before 8am`
    },
    "weekend-warrior": {
      value: (p2) => s(p2).weekendMessages,
      eligible: (p2) => s(p2).weekendMessages >= 15,
      display: (v) => plural(v, "weekend message")
    },
    "first-responder": {
      value: (p2) => s(p2).firstReplies,
      eligible: (p2) => s(p2).firstReplies >= 10,
      display: (v, p2) => {
        const median2 = s(p2).medianReplySeconds;
        const base = `first to reply ${times(v)}`;
        return median2 === void 0 ? base : `${base}, usually within ${formatDelay(median2)}`;
      }
    },
    "thread-starter": {
      value: (p2) => s(p2).threadsStarted,
      eligible: (p2) => s(p2).threadsStarted >= 10,
      display: (v) => `started ${plural(v, "thread")}`
    },
    "hype-person": {
      value: (p2) => s(p2).reactionsGiven,
      eligible: (p2) => s(p2).reactionsGiven >= 50,
      display: (v) => `gave ${plural(v, "reaction")}`
    },
    "crowd-favorite": {
      value: (p2) => s(p2).reactionsReceived / s(p2).messages,
      eligible: (p2) => s(p2).messages >= 100 && s(p2).reactionsReceived > 0,
      display: (v) => `${formatRate(v)} reactions per message`
    },
    "emoji-artist": {
      value: (p2) => s(p2).distinctEmoji,
      eligible: (p2) => s(p2).distinctEmoji >= 20,
      display: (v) => `used ${formatInt(v)} different emoji`
    },
    interviewer: {
      value: (p2) => s(p2).questions,
      eligible: (p2) => s(p2).questions >= 30,
      display: (v) => `asked ${plural(v, "question")}`
    },
    "link-librarian": {
      value: (p2) => s(p2).links,
      eligible: (p2) => s(p2).links >= 20,
      display: (v) => `shared ${plural(v, "link")}`
    },
    "meme-dealer": {
      value: (p2) => s(p2).images,
      eligible: (p2) => s(p2).images >= 15,
      display: (v) => `posted ${plural(v, "image")}`
    },
    "town-crier": {
      value: (p2) => s(p2).broadcasts,
      eligible: (p2) => s(p2).broadcasts >= 5,
      display: (v) => `rang the bell ${times(v)}`
    },
    editor: {
      value: (p2) => s(p2).edits,
      eligible: (p2) => s(p2).edits >= 20,
      display: (v) => `edited ${plural(v, "message")}`
    },
    "caps-lock-captain": {
      value: (p2) => s(p2).shouts,
      eligible: (p2) => s(p2).shouts >= 10,
      display: (v) => `SHOUTED ${formatInt(v)} ${Math.round(v) === 1 ? "TIME" : "TIMES"}`
    },
    connector: {
      value: (p2) => s(p2).mentionsMade,
      eligible: (p2) => s(p2).mentionsMade >= 30,
      display: (v) => `mentioned teammates ${times(v)}`
    },
    "most-wanted": {
      value: (p2) => s(p2).mentionsReceived,
      eligible: (p2) => s(p2).mentionsReceived >= 20,
      display: (v) => `was @mentioned ${times(v)}`
    },
    explorer: {
      value: (p2) => s(p2).channelsActive,
      eligible: (p2) => s(p2).channelsActive >= 5,
      display: (v) => `posted in ${plural(v, "channel")}`
    },
    "channel-founder": {
      value: (p2) => s(p2).channelsCreated,
      eligible: (p2) => s(p2).channelsCreated >= 2,
      display: (v) => `created ${plural(v, "channel")}`
    },
    "streak-master": {
      value: (p2) => s(p2).longestStreak,
      eligible: (p2) => s(p2).longestStreak >= 10,
      display: (v) => `${formatInt(v)} weekdays in a row`
    },
    "huddle-hero": {
      value: (p2) => s(p2).huddleMinutes,
      eligible: (p2) => s(p2).huddleMinutes >= 60,
      display: (v) => v >= 120 ? `${plural(Math.round(v / 60), "hour")} in huddles` : `${plural(v, "minute")} in huddles`
    },
    "gratitude-champion": {
      value: (p2) => s(p2).thanksGiven,
      eligible: (p2) => s(p2).thanksGiven >= 15,
      display: (v) => `said thanks ${times(v)}`
    },
    "most-thanked": {
      value: (p2) => s(p2).thanksReceived,
      eligible: (p2) => s(p2).thanksReceived >= 10,
      display: (v) => `was thanked ${times(v)}`
    },
    "laugh-track": {
      value: (p2) => s(p2).laughs,
      eligible: (p2) => s(p2).laughs >= 20,
      display: (v) => `laughed ${times(v)}`
    },
    "monologue-master": {
      value: (p2) => s(p2).longestMonologue,
      eligible: (p2) => s(p2).longestMonologue >= 6,
      display: (v) => `${formatInt(v)} messages in a row`
    },
    opener: {
      value: (p2) => s(p2).dayStarters,
      eligible: (p2) => s(p2).dayStarters >= 10,
      display: (v) => `had the first word ${times(v)}`
    },
    closer: {
      value: (p2) => s(p2).dayClosers,
      eligible: (p2) => s(p2).dayClosers >= 10,
      display: (v) => `had the last word ${times(v)}`
    },
    rookie: {
      value: (p2) => s(p2).messages,
      eligible: (p2) => p2.joinedInPeriod && s(p2).messages >= 30,
      display: (v, p2) => {
        const arrival = context.arrival.get(p2.id);
        return arrival === void 0 ? `${plural(v, "message")} since joining` : `${arrival}, ${plural(v, "message")} since`;
      }
    },
    "emoji-connoisseur": {
      value: (p2) => s(p2).customEmojiUses,
      eligible: (p2) => s(p2).customEmojiUses >= 15,
      display: (v) => `used custom emoji ${times(v)}`
    }
  };
}
function minimumMessages(totalMessages) {
  return totalMessages < 2e3 ? 10 : 25;
}
function computeAwards(people, context) {
  const floor = minimumMessages(context.totalMessages);
  const inTheRunning = people.filter((p2) => p2.stats.messages >= floor);
  const ruleBook = rules(context);
  const awards = [];
  for (const id of AWARD_ORDER) {
    const rule = ruleBook[id];
    const scored = [];
    for (const person of inTheRunning) {
      if (!rule.eligible(person)) continue;
      const value = rule.value(person);
      if (!Number.isFinite(value)) continue;
      if (!rule.lowest && value <= 0) continue;
      scored.push({ person, value });
    }
    if (scored.length === 0) continue;
    scored.sort((a, b) => (rule.lowest ? a.value - b.value : b.value - a.value) || a.person.rank - b.person.rank);
    const entries = scored.slice(0, 3).map(({ person, value }) => ({
      person: person.id,
      value: Number.isInteger(value) ? value : round2(value),
      display: rule.display(value, person)
    }));
    const info = AWARD_CATALOG[id];
    awards.push({
      id,
      title: info.title,
      emoji: info.emoji,
      tone: info.tone,
      category: info.category,
      tagline: info.tagline,
      winner: entries[0],
      runnersUp: entries.slice(1),
      featured: false
    });
  }
  chooseFeatured(awards);
  return awards;
}
var MAX_FEATURED_WHOLESOME = 12;
var MAX_FEATURED_SPICY = 3;
var MAX_FEATURED_PER_WINNER = 2;
function chooseFeatured(awards) {
  const byId = /* @__PURE__ */ new Map();
  for (const award of awards) {
    award.featured = false;
    byId.set(award.id, award);
  }
  const held = /* @__PURE__ */ new Map();
  let wholesome = 0;
  const feature = (award) => {
    award.featured = true;
    wholesome++;
    held.set(award.winner.person, (held.get(award.winner.person) ?? 0) + 1);
  };
  for (const id of ["yapper", "hype-person", "first-responder", "crowd-favorite"]) {
    const award = byId.get(id);
    if (award) feature(award);
  }
  const owl = byId.get("night-owl");
  const bird = byId.get("early-bird");
  if (owl && bird) feature(bird.winner.value > owl.winner.value ? bird : owl);
  else if (owl) feature(owl);
  else if (bird) feature(bird);
  for (const award of awards) {
    if (wholesome >= MAX_FEATURED_WHOLESOME) break;
    if (award.featured || award.tone !== "wholesome") continue;
    if ((held.get(award.winner.person) ?? 0) < MAX_FEATURED_PER_WINNER) feature(award);
  }
  const spicyWinners = /* @__PURE__ */ new Set();
  for (const award of awards) {
    if (spicyWinners.size >= MAX_FEATURED_SPICY) break;
    if (award.tone !== "spicy" || spicyWinners.has(award.winner.person)) continue;
    award.featured = true;
    spicyWinners.add(award.winner.person);
  }
}

// src/engine/time.ts
var DAY = 86400;
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function dayNumberFromIso(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const ms = Date.UTC(year, month - 1, day);
  const back = new Date(ms);
  if (back.getUTCFullYear() !== year || back.getUTCMonth() !== month - 1 || back.getUTCDate() !== day) return null;
  return ms / 864e5;
}
function isoFromDayNumber(dayNumber) {
  return new Date(dayNumber * 864e5).toISOString().slice(0, 10);
}
function weekdayOfDayNumber(dayNumber) {
  return ((dayNumber + 3) % 7 + 7) % 7;
}
function monthName(monthIndex) {
  return MONTHS[monthIndex] ?? "";
}
function weekdayName(weekdayIndex) {
  return WEEKDAYS[weekdayIndex] ?? "";
}
function longDate(dayNumber) {
  const d = new Date(dayNumber * 864e5);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
function hourLabel(hour) {
  const h = (Math.round(hour) % 24 + 24) % 24;
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}${h < 12 ? "am" : "pm"}`;
}
function isValidTimeZone(zone) {
  if (typeof zone !== "string" || zone === "") return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone });
    return true;
  } catch {
    return false;
  }
}
function offsetReader(zone) {
  if (zone === "UTC" || zone === "Etc/UTC") return () => 0;
  const format = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return (utcSeconds) => {
    let year = 1970;
    let month = 1;
    let day = 1;
    let hour = 0;
    let minute = 0;
    let second = 0;
    for (const part of format.formatToParts(utcSeconds * 1e3)) {
      switch (part.type) {
        case "year":
          year = Number(part.value);
          break;
        case "month":
          month = Number(part.value);
          break;
        case "day":
          day = Number(part.value);
          break;
        case "hour":
          hour = Number(part.value) % 24;
          break;
        case "minute":
          minute = Number(part.value);
          break;
        case "second":
          second = Number(part.value);
          break;
      }
    }
    return Math.round(Date.UTC(year, month - 1, day, hour, minute, second) / 1e3) - utcSeconds;
  };
}
function buildZoneTable(zone, firstDay, lastDay) {
  const read = offsetReader(zone);
  const rows = Math.max(1, lastDay - firstDay + 1);
  const dayOffset = new Int32Array(rows);
  const switchAt = new Float64Array(rows);
  const switchOffset = new Int32Array(rows);
  let current = read(firstDay * DAY);
  for (let i = 0; i < rows; i++) {
    dayOffset[i] = current;
    const dayStart = (firstDay + i) * DAY;
    const next = read(dayStart + DAY);
    if (next !== current) {
      let lo = dayStart;
      let hi = dayStart + DAY;
      while (hi - lo > 1) {
        const mid = Math.floor((lo + hi) / 2);
        if (read(mid) === current) lo = mid;
        else hi = mid;
      }
      switchAt[i] = hi;
      switchOffset[i] = next;
    }
    current = next;
  }
  return { zone, firstDay, dayOffset, switchAt, switchOffset };
}
function offsetAt(table, ts) {
  const rows = table.dayOffset.length;
  let i = Math.floor(ts / DAY) - table.firstDay;
  if (i < 0) return table.dayOffset[0];
  if (i >= rows) i = rows - 1;
  const at2 = table.switchAt[i];
  return at2 !== 0 && ts >= at2 ? table.switchOffset[i] : table.dayOffset[i];
}

// src/engine/channel-awards.ts
var CHANNEL_AWARD_CATALOG = {
  busiest: { title: "The Main Stage", emoji: "\u{1F3AA}", tagline: "where most of the talking happened" },
  "night-shift": { title: "The Night Shift", emoji: "\u{1F303}", tagline: "came alive after dark" },
  "thread-city": { title: "Thread City", emoji: "\u{1F3D9}\uFE0F", tagline: "where every message grows a thread" },
  "reaction-magnet": { title: "The Reaction Magnet", emoji: "\u{1F9F2}", tagline: "pulled in the most reactions per message" },
  newcomer: { title: "Best New Channel", emoji: "\u{1F423}", tagline: "the busiest brand-new channel" },
  "ghost-town": { title: "The Ghost Town", emoji: "\u{1F47B}", tagline: "opened with high hopes, then went quiet" },
  "tight-knit": { title: "The Tight-Knit Crew", emoji: "\u{1F91D}", tagline: "had the most conversation per person" }
};
var MAX_AWARDS_PER_CHANNEL = 2;
var GHOST_TOWN_MIN_AGE_DAYS = 30;
function createdMonth(channel, context) {
  const day = context.createdDay.get(channel.id);
  if (day === void 0) return void 0;
  return monthName(new Date(day * 864e5).getUTCMonth());
}
function computeChannelAwards(channels, context) {
  const held = /* @__PURE__ */ new Map();
  const awards = [];
  const give = (id, ranked2, display) => {
    const channel = ranked2.find((c) => (held.get(c.id) ?? 0) < MAX_AWARDS_PER_CHANNEL);
    if (!channel) return;
    held.set(channel.id, (held.get(channel.id) ?? 0) + 1);
    awards.push({ id, ...CHANNEL_AWARD_CATALOG[id], channel: { id: channel.id, name: channel.name }, display: display(channel) });
  };
  const ranked = (pool2, score) => pool2.map((channel, index) => ({ channel, index, value: score(channel) })).sort((a, b) => b.value - a.value || a.index - b.index).map((entry) => entry.channel);
  give("busiest", [...channels], (c) => plural(c.messages, "message"));
  give(
    "night-shift",
    ranked(channels.filter((c) => c.messages >= 200 && c.nightShare > 0), (c) => c.nightShare),
    (c) => `${formatPercent(c.nightShare)} of messages after 10pm`
  );
  give(
    "thread-city",
    ranked(channels.filter((c) => c.messages >= 200 && c.threadShare > 0), (c) => c.threadShare),
    (c) => `${formatPercent(c.threadShare)} of messages in threads`
  );
  give(
    "reaction-magnet",
    ranked(channels.filter((c) => c.messages >= 100 && c.reactionsPerMessage > 0), (c) => c.reactionsPerMessage),
    (c) => `${formatRate(c.reactionsPerMessage)} reactions per message`
  );
  const born = channels.filter((c) => c.createdInPeriod);
  give("newcomer", born, (c) => {
    const month = createdMonth(c, context);
    return month === void 0 ? plural(c.messages, "message") : `created in ${month}, ${plural(c.messages, "message")} since`;
  });
  const ageOf = (c) => context.endDay - (context.createdDay.get(c.id) ?? context.endDay);
  give(
    "ghost-town",
    born.filter((c) => c.messages < 15 && ageOf(c) >= GHOST_TOWN_MIN_AGE_DAYS).sort((a, b) => a.messages - b.messages || ageOf(b) - ageOf(a)),
    (c) => {
      const month = createdMonth(c, context);
      return month === void 0 ? plural(c.messages, "message") : `${plural(c.messages, "message")} since ${month}`;
    }
  );
  give(
    "tight-knit",
    ranked(channels.filter((c) => c.people >= 3 && c.messages >= 200), (c) => c.messages / c.people),
    (c) => `${formatInt(Math.round(c.messages / c.people))} messages per person`
  );
  return awards;
}

// src/engine/data/emoji-shortcodes.json
var emoji_shortcodes_default = { "100": "\u{1F4AF}", "1234": "\u{1F522}", "+1": "\u{1F44D}", "-1": "\u{1F44E}", "8ball": "\u{1F3B1}", a: "\u{1F170}\uFE0F", ab: "\u{1F18E}", abacus: "\u{1F9EE}", abc: "\u{1F524}", abcd: "\u{1F521}", accept: "\u{1F251}", accordion: "\u{1FA97}", adhesive_bandage: "\u{1FA79}", admission_tickets: "\u{1F39F}\uFE0F", adult: "\u{1F9D1}", aerial_tramway: "\u{1F6A1}", airplane: "\u2708\uFE0F", airplane_arriving: "\u{1F6EC}", airplane_departure: "\u{1F6EB}", alarm_clock: "\u23F0", alembic: "\u2697\uFE0F", alien: "\u{1F47D}", ambulance: "\u{1F691}", amphora: "\u{1F3FA}", anatomical_heart: "\u{1FAC0}", anchor: "\u2693", angel: "\u{1F47C}", anger: "\u{1F4A2}", angry: "\u{1F620}", anguished: "\u{1F627}", ant: "\u{1F41C}", apple: "\u{1F34E}", aquarius: "\u2652", aries: "\u2648", arrow_backward: "\u25C0\uFE0F", arrow_double_down: "\u23EC", arrow_double_up: "\u23EB", arrow_down: "\u2B07\uFE0F", arrow_down_small: "\u{1F53D}", arrow_forward: "\u25B6\uFE0F", arrow_heading_down: "\u2935\uFE0F", arrow_heading_up: "\u2934\uFE0F", arrow_left: "\u2B05\uFE0F", arrow_lower_left: "\u2199\uFE0F", arrow_lower_right: "\u2198\uFE0F", arrow_right: "\u27A1\uFE0F", arrow_right_hook: "\u21AA\uFE0F", arrow_up: "\u2B06\uFE0F", arrow_up_down: "\u2195\uFE0F", arrow_up_small: "\u{1F53C}", arrow_upper_left: "\u2196\uFE0F", arrow_upper_right: "\u2197\uFE0F", arrows_clockwise: "\u{1F503}", arrows_counterclockwise: "\u{1F504}", art: "\u{1F3A8}", articulated_lorry: "\u{1F69B}", artist: "\u{1F9D1}\u200D\u{1F3A8}", astonished: "\u{1F632}", astronaut: "\u{1F9D1}\u200D\u{1F680}", athletic_shoe: "\u{1F45F}", atm: "\u{1F3E7}", atom_symbol: "\u269B\uFE0F", auto_rickshaw: "\u{1F6FA}", avocado: "\u{1F951}", axe: "\u{1FA93}", b: "\u{1F171}\uFE0F", baby: "\u{1F476}", baby_bottle: "\u{1F37C}", baby_chick: "\u{1F424}", baby_symbol: "\u{1F6BC}", back: "\u{1F519}", bacon: "\u{1F953}", badger: "\u{1F9A1}", badminton_racquet_and_shuttlecock: "\u{1F3F8}", bagel: "\u{1F96F}", baggage_claim: "\u{1F6C4}", baguette_bread: "\u{1F956}", bald_man: "\u{1F468}\u200D\u{1F9B2}", bald_person: "\u{1F9D1}\u200D\u{1F9B2}", bald_woman: "\u{1F469}\u200D\u{1F9B2}", ballet_dancer: "\u{1F9D1}\u200D\u{1FA70}", ballet_shoes: "\u{1FA70}", balloon: "\u{1F388}", ballot_box_with_ballot: "\u{1F5F3}\uFE0F", ballot_box_with_check: "\u2611\uFE0F", bamboo: "\u{1F38D}", banana: "\u{1F34C}", bangbang: "\u203C\uFE0F", banjo: "\u{1FA95}", bank: "\u{1F3E6}", bar_chart: "\u{1F4CA}", barber: "\u{1F488}", barely_sunny: "\u{1F325}\uFE0F", baseball: "\u26BE", basket: "\u{1F9FA}", basketball: "\u{1F3C0}", bat: "\u{1F987}", bath: "\u{1F6C0}", bathtub: "\u{1F6C1}", battery: "\u{1F50B}", beach_with_umbrella: "\u{1F3D6}\uFE0F", beans: "\u{1FAD8}", bear: "\u{1F43B}", bearded_person: "\u{1F9D4}", beaver: "\u{1F9AB}", bed: "\u{1F6CF}\uFE0F", bee: "\u{1F41D}", beer: "\u{1F37A}", beers: "\u{1F37B}", beetle: "\u{1FAB2}", beginner: "\u{1F530}", bell: "\u{1F514}", bell_pepper: "\u{1FAD1}", bellhop_bell: "\u{1F6CE}\uFE0F", bento: "\u{1F371}", beverage_box: "\u{1F9C3}", bicyclist: "\u{1F6B4}", bike: "\u{1F6B2}", bikini: "\u{1F459}", billed_cap: "\u{1F9E2}", biohazard_sign: "\u2623\uFE0F", bird: "\u{1F426}", birthday: "\u{1F382}", bison: "\u{1F9AC}", biting_lip: "\u{1FAE6}", black_bird: "\u{1F426}\u200D\u2B1B", black_cat: "\u{1F408}\u200D\u2B1B", black_circle: "\u26AB", black_circle_for_record: "\u23FA\uFE0F", black_heart: "\u{1F5A4}", black_joker: "\u{1F0CF}", black_large_square: "\u2B1B", black_left_pointing_double_triangle_with_vertical_bar: "\u23EE\uFE0F", black_medium_small_square: "\u25FE", black_medium_square: "\u25FC\uFE0F", black_nib: "\u2712\uFE0F", black_right_pointing_double_triangle_with_vertical_bar: "\u23ED\uFE0F", black_right_pointing_triangle_with_double_vertical_bar: "\u23EF\uFE0F", black_small_square: "\u25AA\uFE0F", black_square_button: "\u{1F532}", black_square_for_stop: "\u23F9\uFE0F", "blond-haired-man": "\u{1F471}\u200D\u2642\uFE0F", "blond-haired-woman": "\u{1F471}\u200D\u2640\uFE0F", blossom: "\u{1F33C}", blowfish: "\u{1F421}", blue_book: "\u{1F4D8}", blue_car: "\u{1F699}", blue_heart: "\u{1F499}", blueberries: "\u{1FAD0}", blush: "\u{1F60A}", boar: "\u{1F417}", boat: "\u26F5", bomb: "\u{1F4A3}", bone: "\u{1F9B4}", book: "\u{1F4D6}", bookmark: "\u{1F516}", bookmark_tabs: "\u{1F4D1}", books: "\u{1F4DA}", boom: "\u{1F4A5}", boomerang: "\u{1FA83}", boot: "\u{1F462}", bouquet: "\u{1F490}", bow: "\u{1F647}", bow_and_arrow: "\u{1F3F9}", bowl_with_spoon: "\u{1F963}", bowling: "\u{1F3B3}", boxing_glove: "\u{1F94A}", boy: "\u{1F466}", brain: "\u{1F9E0}", bread: "\u{1F35E}", "breast-feeding": "\u{1F931}", bricks: "\u{1F9F1}", bride_with_veil: "\u{1F470}", bridge_at_night: "\u{1F309}", briefcase: "\u{1F4BC}", briefs: "\u{1FA72}", broccoli: "\u{1F966}", broken_chain: "\u26D3\uFE0F\u200D\u{1F4A5}", broken_heart: "\u{1F494}", broom: "\u{1F9F9}", brown_heart: "\u{1F90E}", brown_mushroom: "\u{1F344}\u200D\u{1F7EB}", bubble_tea: "\u{1F9CB}", bubbles: "\u{1FAE7}", bucket: "\u{1FAA3}", bug: "\u{1F41B}", building_construction: "\u{1F3D7}\uFE0F", bulb: "\u{1F4A1}", bullettrain_front: "\u{1F685}", bullettrain_side: "\u{1F684}", burrito: "\u{1F32F}", bus: "\u{1F68C}", busstop: "\u{1F68F}", bust_in_silhouette: "\u{1F464}", busts_in_silhouette: "\u{1F465}", butter: "\u{1F9C8}", butterfly: "\u{1F98B}", cactus: "\u{1F335}", cake: "\u{1F370}", calendar: "\u{1F4C6}", call_me_hand: "\u{1F919}", calling: "\u{1F4F2}", camel: "\u{1F42B}", camera: "\u{1F4F7}", camera_with_flash: "\u{1F4F8}", camping: "\u{1F3D5}\uFE0F", cancer: "\u264B", candle: "\u{1F56F}\uFE0F", candy: "\u{1F36C}", canned_food: "\u{1F96B}", canoe: "\u{1F6F6}", capital_abcd: "\u{1F520}", capricorn: "\u2651", car: "\u{1F697}", card_file_box: "\u{1F5C3}\uFE0F", card_index: "\u{1F4C7}", card_index_dividers: "\u{1F5C2}\uFE0F", carousel_horse: "\u{1F3A0}", carpentry_saw: "\u{1FA9A}", carrot: "\u{1F955}", cat: "\u{1F431}", cat2: "\u{1F408}", cd: "\u{1F4BF}", chains: "\u26D3\uFE0F", chair: "\u{1FA91}", champagne: "\u{1F37E}", chart: "\u{1F4B9}", chart_with_downwards_trend: "\u{1F4C9}", chart_with_upwards_trend: "\u{1F4C8}", checkered_flag: "\u{1F3C1}", cheese_wedge: "\u{1F9C0}", cherries: "\u{1F352}", cherry_blossom: "\u{1F338}", chess_pawn: "\u265F\uFE0F", chestnut: "\u{1F330}", chicken: "\u{1F414}", child: "\u{1F9D2}", children_crossing: "\u{1F6B8}", chipmunk: "\u{1F43F}\uFE0F", chocolate_bar: "\u{1F36B}", chopsticks: "\u{1F962}", christmas_tree: "\u{1F384}", church: "\u26EA", cinema: "\u{1F3A6}", circus_tent: "\u{1F3AA}", city_sunrise: "\u{1F307}", city_sunset: "\u{1F306}", cityscape: "\u{1F3D9}\uFE0F", cl: "\u{1F191}", clap: "\u{1F44F}", clapper: "\u{1F3AC}", classical_building: "\u{1F3DB}\uFE0F", clinking_glasses: "\u{1F942}", clipboard: "\u{1F4CB}", clock1: "\u{1F550}", clock10: "\u{1F559}", clock1030: "\u{1F565}", clock11: "\u{1F55A}", clock1130: "\u{1F566}", clock12: "\u{1F55B}", clock1230: "\u{1F567}", clock130: "\u{1F55C}", clock2: "\u{1F551}", clock230: "\u{1F55D}", clock3: "\u{1F552}", clock330: "\u{1F55E}", clock4: "\u{1F553}", clock430: "\u{1F55F}", clock5: "\u{1F554}", clock530: "\u{1F560}", clock6: "\u{1F555}", clock630: "\u{1F561}", clock7: "\u{1F556}", clock730: "\u{1F562}", clock8: "\u{1F557}", clock830: "\u{1F563}", clock9: "\u{1F558}", clock930: "\u{1F564}", closed_book: "\u{1F4D5}", closed_lock_with_key: "\u{1F510}", closed_umbrella: "\u{1F302}", cloud: "\u2601\uFE0F", clown_face: "\u{1F921}", clubs: "\u2663\uFE0F", cn: "\u{1F1E8}\u{1F1F3}", coat: "\u{1F9E5}", cockroach: "\u{1FAB3}", cocktail: "\u{1F378}", coconut: "\u{1F965}", coffee: "\u2615", coffin: "\u26B0\uFE0F", coin: "\u{1FA99}", cold_face: "\u{1F976}", cold_sweat: "\u{1F630}", collision: "\u{1F4A5}", comet: "\u2604\uFE0F", compass: "\u{1F9ED}", compression: "\u{1F5DC}\uFE0F", computer: "\u{1F4BB}", confetti_ball: "\u{1F38A}", confounded: "\u{1F616}", confused: "\u{1F615}", congratulations: "\u3297\uFE0F", construction: "\u{1F6A7}", construction_worker: "\u{1F477}", control_knobs: "\u{1F39B}\uFE0F", convenience_store: "\u{1F3EA}", cook: "\u{1F9D1}\u200D\u{1F373}", cookie: "\u{1F36A}", cooking: "\u{1F373}", cool: "\u{1F192}", cop: "\u{1F46E}", copyright: "\xA9\uFE0F", coral: "\u{1FAB8}", corn: "\u{1F33D}", couch_and_lamp: "\u{1F6CB}\uFE0F", couple: "\u{1F46B}", couple_with_heart: "\u{1F491}", couplekiss: "\u{1F48F}", cow: "\u{1F42E}", cow2: "\u{1F404}", crab: "\u{1F980}", credit_card: "\u{1F4B3}", crescent_moon: "\u{1F319}", cricket: "\u{1F997}", cricket_bat_and_ball: "\u{1F3CF}", crocodile: "\u{1F40A}", croissant: "\u{1F950}", crossed_fingers: "\u{1F91E}", crossed_flags: "\u{1F38C}", crossed_swords: "\u2694\uFE0F", crown: "\u{1F451}", crutch: "\u{1FA7C}", cry: "\u{1F622}", crying_cat_face: "\u{1F63F}", crystal_ball: "\u{1F52E}", cucumber: "\u{1F952}", cup_with_straw: "\u{1F964}", cupcake: "\u{1F9C1}", cupid: "\u{1F498}", curling_stone: "\u{1F94C}", curly_haired_man: "\u{1F468}\u200D\u{1F9B1}", curly_haired_person: "\u{1F9D1}\u200D\u{1F9B1}", curly_haired_woman: "\u{1F469}\u200D\u{1F9B1}", curly_loop: "\u27B0", currency_exchange: "\u{1F4B1}", curry: "\u{1F35B}", custard: "\u{1F36E}", customs: "\u{1F6C3}", cut_of_meat: "\u{1F969}", cyclone: "\u{1F300}", dagger_knife: "\u{1F5E1}\uFE0F", dancer: "\u{1F483}", dancers: "\u{1F46F}", dango: "\u{1F361}", dark_sunglasses: "\u{1F576}\uFE0F", dart: "\u{1F3AF}", dash: "\u{1F4A8}", date: "\u{1F4C5}", de: "\u{1F1E9}\u{1F1EA}", deaf_man: "\u{1F9CF}\u200D\u2642\uFE0F", deaf_person: "\u{1F9CF}", deaf_woman: "\u{1F9CF}\u200D\u2640\uFE0F", deciduous_tree: "\u{1F333}", deer: "\u{1F98C}", department_store: "\u{1F3EC}", derelict_house_building: "\u{1F3DA}\uFE0F", desert: "\u{1F3DC}\uFE0F", desert_island: "\u{1F3DD}\uFE0F", desktop_computer: "\u{1F5A5}\uFE0F", diamond_shape_with_a_dot_inside: "\u{1F4A0}", diamonds: "\u2666\uFE0F", disappointed: "\u{1F61E}", disappointed_relieved: "\u{1F625}", disguised_face: "\u{1F978}", distorted_face: "\u{1FAEA}", diving_mask: "\u{1F93F}", diya_lamp: "\u{1FA94}", dizzy: "\u{1F4AB}", dizzy_face: "\u{1F635}", dna: "\u{1F9EC}", do_not_litter: "\u{1F6AF}", dodo: "\u{1F9A4}", dog: "\u{1F436}", dog2: "\u{1F415}", dollar: "\u{1F4B5}", dolls: "\u{1F38E}", dolphin: "\u{1F42C}", donkey: "\u{1FACF}", door: "\u{1F6AA}", dotted_line_face: "\u{1FAE5}", double_vertical_bar: "\u23F8\uFE0F", doughnut: "\u{1F369}", dove_of_peace: "\u{1F54A}\uFE0F", dragon: "\u{1F409}", dragon_face: "\u{1F432}", dress: "\u{1F457}", dromedary_camel: "\u{1F42A}", drooling_face: "\u{1F924}", drop_of_blood: "\u{1FA78}", droplet: "\u{1F4A7}", drum_with_drumsticks: "\u{1F941}", duck: "\u{1F986}", dumpling: "\u{1F95F}", dvd: "\u{1F4C0}", "e-mail": "\u{1F4E7}", eagle: "\u{1F985}", ear: "\u{1F442}", ear_of_rice: "\u{1F33E}", ear_with_hearing_aid: "\u{1F9BB}", earth_africa: "\u{1F30D}", earth_americas: "\u{1F30E}", earth_asia: "\u{1F30F}", egg: "\u{1F95A}", eggplant: "\u{1F346}", eight: "8\uFE0F\u20E3", eight_pointed_black_star: "\u2734\uFE0F", eight_spoked_asterisk: "\u2733\uFE0F", eject: "\u23CF\uFE0F", electric_plug: "\u{1F50C}", elephant: "\u{1F418}", elevator: "\u{1F6D7}", elf: "\u{1F9DD}", email: "\u2709\uFE0F", empty_nest: "\u{1FAB9}", end: "\u{1F51A}", envelope: "\u2709\uFE0F", envelope_with_arrow: "\u{1F4E9}", es: "\u{1F1EA}\u{1F1F8}", euro: "\u{1F4B6}", european_castle: "\u{1F3F0}", european_post_office: "\u{1F3E4}", evergreen_tree: "\u{1F332}", exclamation: "\u2757", exploding_head: "\u{1F92F}", expressionless: "\u{1F611}", eye: "\u{1F441}\uFE0F", "eye-in-speech-bubble": "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", eyeglasses: "\u{1F453}", eyes: "\u{1F440}", face_exhaling: "\u{1F62E}\u200D\u{1F4A8}", face_holding_back_tears: "\u{1F979}", face_in_clouds: "\u{1F636}\u200D\u{1F32B}\uFE0F", face_palm: "\u{1F926}", face_vomiting: "\u{1F92E}", face_with_bags_under_eyes: "\u{1FAE9}", face_with_cowboy_hat: "\u{1F920}", face_with_diagonal_mouth: "\u{1FAE4}", face_with_finger_covering_closed_lips: "\u{1F92B}", face_with_hand_over_mouth: "\u{1F92D}", face_with_head_bandage: "\u{1F915}", face_with_monocle: "\u{1F9D0}", face_with_one_eyebrow_raised: "\u{1F928}", face_with_open_eyes_and_hand_over_mouth: "\u{1FAE2}", face_with_open_mouth_vomiting: "\u{1F92E}", face_with_peeking_eye: "\u{1FAE3}", face_with_raised_eyebrow: "\u{1F928}", face_with_rolling_eyes: "\u{1F644}", face_with_spiral_eyes: "\u{1F635}\u200D\u{1F4AB}", face_with_symbols_on_mouth: "\u{1F92C}", face_with_thermometer: "\u{1F912}", facepunch: "\u{1F44A}", factory: "\u{1F3ED}", factory_worker: "\u{1F9D1}\u200D\u{1F3ED}", fairy: "\u{1F9DA}", falafel: "\u{1F9C6}", fallen_leaf: "\u{1F342}", family: "\u{1F46A}", family_adult_adult_child: "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}", family_adult_adult_child_child: "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}", family_adult_child: "\u{1F9D1}\u200D\u{1F9D2}", family_adult_child_child: "\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}", farmer: "\u{1F9D1}\u200D\u{1F33E}", fast_forward: "\u23E9", fax: "\u{1F4E0}", fearful: "\u{1F628}", feather: "\u{1FAB6}", feet: "\u{1F43E}", "female-artist": "\u{1F469}\u200D\u{1F3A8}", "female-astronaut": "\u{1F469}\u200D\u{1F680}", "female-construction-worker": "\u{1F477}\u200D\u2640\uFE0F", "female-cook": "\u{1F469}\u200D\u{1F373}", "female-detective": "\u{1F575}\uFE0F\u200D\u2640\uFE0F", "female-doctor": "\u{1F469}\u200D\u2695\uFE0F", "female-factory-worker": "\u{1F469}\u200D\u{1F3ED}", "female-farmer": "\u{1F469}\u200D\u{1F33E}", "female-firefighter": "\u{1F469}\u200D\u{1F692}", "female-guard": "\u{1F482}\u200D\u2640\uFE0F", "female-judge": "\u{1F469}\u200D\u2696\uFE0F", "female-mechanic": "\u{1F469}\u200D\u{1F527}", "female-office-worker": "\u{1F469}\u200D\u{1F4BC}", "female-pilot": "\u{1F469}\u200D\u2708\uFE0F", "female-police-officer": "\u{1F46E}\u200D\u2640\uFE0F", "female-scientist": "\u{1F469}\u200D\u{1F52C}", "female-singer": "\u{1F469}\u200D\u{1F3A4}", "female-student": "\u{1F469}\u200D\u{1F393}", "female-teacher": "\u{1F469}\u200D\u{1F3EB}", "female-technologist": "\u{1F469}\u200D\u{1F4BB}", female_elf: "\u{1F9DD}\u200D\u2640\uFE0F", female_fairy: "\u{1F9DA}\u200D\u2640\uFE0F", female_genie: "\u{1F9DE}\u200D\u2640\uFE0F", female_mage: "\u{1F9D9}\u200D\u2640\uFE0F", female_sign: "\u2640\uFE0F", female_superhero: "\u{1F9B8}\u200D\u2640\uFE0F", female_supervillain: "\u{1F9B9}\u200D\u2640\uFE0F", female_vampire: "\u{1F9DB}\u200D\u2640\uFE0F", female_zombie: "\u{1F9DF}\u200D\u2640\uFE0F", fencer: "\u{1F93A}", ferris_wheel: "\u{1F3A1}", ferry: "\u26F4\uFE0F", field_hockey_stick_and_ball: "\u{1F3D1}", fight_cloud: "\u{1FAEF}", file_cabinet: "\u{1F5C4}\uFE0F", file_folder: "\u{1F4C1}", film_frames: "\u{1F39E}\uFE0F", film_projector: "\u{1F4FD}\uFE0F", fingerprint: "\u{1FAC6}", fire: "\u{1F525}", fire_engine: "\u{1F692}", fire_extinguisher: "\u{1F9EF}", firecracker: "\u{1F9E8}", firefighter: "\u{1F9D1}\u200D\u{1F692}", fireworks: "\u{1F386}", first_place_medal: "\u{1F947}", first_quarter_moon: "\u{1F313}", first_quarter_moon_with_face: "\u{1F31B}", fish: "\u{1F41F}", fish_cake: "\u{1F365}", fishing_pole_and_fish: "\u{1F3A3}", fist: "\u270A", five: "5\uFE0F\u20E3", "flag-ac": "\u{1F1E6}\u{1F1E8}", "flag-ad": "\u{1F1E6}\u{1F1E9}", "flag-ae": "\u{1F1E6}\u{1F1EA}", "flag-af": "\u{1F1E6}\u{1F1EB}", "flag-ag": "\u{1F1E6}\u{1F1EC}", "flag-ai": "\u{1F1E6}\u{1F1EE}", "flag-al": "\u{1F1E6}\u{1F1F1}", "flag-am": "\u{1F1E6}\u{1F1F2}", "flag-ao": "\u{1F1E6}\u{1F1F4}", "flag-aq": "\u{1F1E6}\u{1F1F6}", "flag-ar": "\u{1F1E6}\u{1F1F7}", "flag-as": "\u{1F1E6}\u{1F1F8}", "flag-at": "\u{1F1E6}\u{1F1F9}", "flag-au": "\u{1F1E6}\u{1F1FA}", "flag-aw": "\u{1F1E6}\u{1F1FC}", "flag-ax": "\u{1F1E6}\u{1F1FD}", "flag-az": "\u{1F1E6}\u{1F1FF}", "flag-ba": "\u{1F1E7}\u{1F1E6}", "flag-bb": "\u{1F1E7}\u{1F1E7}", "flag-bd": "\u{1F1E7}\u{1F1E9}", "flag-be": "\u{1F1E7}\u{1F1EA}", "flag-bf": "\u{1F1E7}\u{1F1EB}", "flag-bg": "\u{1F1E7}\u{1F1EC}", "flag-bh": "\u{1F1E7}\u{1F1ED}", "flag-bi": "\u{1F1E7}\u{1F1EE}", "flag-bj": "\u{1F1E7}\u{1F1EF}", "flag-bl": "\u{1F1E7}\u{1F1F1}", "flag-bm": "\u{1F1E7}\u{1F1F2}", "flag-bn": "\u{1F1E7}\u{1F1F3}", "flag-bo": "\u{1F1E7}\u{1F1F4}", "flag-bq": "\u{1F1E7}\u{1F1F6}", "flag-br": "\u{1F1E7}\u{1F1F7}", "flag-bs": "\u{1F1E7}\u{1F1F8}", "flag-bt": "\u{1F1E7}\u{1F1F9}", "flag-bv": "\u{1F1E7}\u{1F1FB}", "flag-bw": "\u{1F1E7}\u{1F1FC}", "flag-by": "\u{1F1E7}\u{1F1FE}", "flag-bz": "\u{1F1E7}\u{1F1FF}", "flag-ca": "\u{1F1E8}\u{1F1E6}", "flag-cc": "\u{1F1E8}\u{1F1E8}", "flag-cd": "\u{1F1E8}\u{1F1E9}", "flag-cf": "\u{1F1E8}\u{1F1EB}", "flag-cg": "\u{1F1E8}\u{1F1EC}", "flag-ch": "\u{1F1E8}\u{1F1ED}", "flag-ci": "\u{1F1E8}\u{1F1EE}", "flag-ck": "\u{1F1E8}\u{1F1F0}", "flag-cl": "\u{1F1E8}\u{1F1F1}", "flag-cm": "\u{1F1E8}\u{1F1F2}", "flag-cn": "\u{1F1E8}\u{1F1F3}", "flag-co": "\u{1F1E8}\u{1F1F4}", "flag-cp": "\u{1F1E8}\u{1F1F5}", "flag-cr": "\u{1F1E8}\u{1F1F7}", "flag-cu": "\u{1F1E8}\u{1F1FA}", "flag-cv": "\u{1F1E8}\u{1F1FB}", "flag-cw": "\u{1F1E8}\u{1F1FC}", "flag-cx": "\u{1F1E8}\u{1F1FD}", "flag-cy": "\u{1F1E8}\u{1F1FE}", "flag-cz": "\u{1F1E8}\u{1F1FF}", "flag-de": "\u{1F1E9}\u{1F1EA}", "flag-dg": "\u{1F1E9}\u{1F1EC}", "flag-dj": "\u{1F1E9}\u{1F1EF}", "flag-dk": "\u{1F1E9}\u{1F1F0}", "flag-dm": "\u{1F1E9}\u{1F1F2}", "flag-do": "\u{1F1E9}\u{1F1F4}", "flag-dz": "\u{1F1E9}\u{1F1FF}", "flag-ea": "\u{1F1EA}\u{1F1E6}", "flag-ec": "\u{1F1EA}\u{1F1E8}", "flag-ee": "\u{1F1EA}\u{1F1EA}", "flag-eg": "\u{1F1EA}\u{1F1EC}", "flag-eh": "\u{1F1EA}\u{1F1ED}", "flag-england": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", "flag-er": "\u{1F1EA}\u{1F1F7}", "flag-es": "\u{1F1EA}\u{1F1F8}", "flag-et": "\u{1F1EA}\u{1F1F9}", "flag-eu": "\u{1F1EA}\u{1F1FA}", "flag-fi": "\u{1F1EB}\u{1F1EE}", "flag-fj": "\u{1F1EB}\u{1F1EF}", "flag-fk": "\u{1F1EB}\u{1F1F0}", "flag-fm": "\u{1F1EB}\u{1F1F2}", "flag-fo": "\u{1F1EB}\u{1F1F4}", "flag-fr": "\u{1F1EB}\u{1F1F7}", "flag-ga": "\u{1F1EC}\u{1F1E6}", "flag-gb": "\u{1F1EC}\u{1F1E7}", "flag-gd": "\u{1F1EC}\u{1F1E9}", "flag-ge": "\u{1F1EC}\u{1F1EA}", "flag-gf": "\u{1F1EC}\u{1F1EB}", "flag-gg": "\u{1F1EC}\u{1F1EC}", "flag-gh": "\u{1F1EC}\u{1F1ED}", "flag-gi": "\u{1F1EC}\u{1F1EE}", "flag-gl": "\u{1F1EC}\u{1F1F1}", "flag-gm": "\u{1F1EC}\u{1F1F2}", "flag-gn": "\u{1F1EC}\u{1F1F3}", "flag-gp": "\u{1F1EC}\u{1F1F5}", "flag-gq": "\u{1F1EC}\u{1F1F6}", "flag-gr": "\u{1F1EC}\u{1F1F7}", "flag-gs": "\u{1F1EC}\u{1F1F8}", "flag-gt": "\u{1F1EC}\u{1F1F9}", "flag-gu": "\u{1F1EC}\u{1F1FA}", "flag-gw": "\u{1F1EC}\u{1F1FC}", "flag-gy": "\u{1F1EC}\u{1F1FE}", "flag-hk": "\u{1F1ED}\u{1F1F0}", "flag-hm": "\u{1F1ED}\u{1F1F2}", "flag-hn": "\u{1F1ED}\u{1F1F3}", "flag-hr": "\u{1F1ED}\u{1F1F7}", "flag-ht": "\u{1F1ED}\u{1F1F9}", "flag-hu": "\u{1F1ED}\u{1F1FA}", "flag-ic": "\u{1F1EE}\u{1F1E8}", "flag-id": "\u{1F1EE}\u{1F1E9}", "flag-ie": "\u{1F1EE}\u{1F1EA}", "flag-il": "\u{1F1EE}\u{1F1F1}", "flag-im": "\u{1F1EE}\u{1F1F2}", "flag-in": "\u{1F1EE}\u{1F1F3}", "flag-io": "\u{1F1EE}\u{1F1F4}", "flag-iq": "\u{1F1EE}\u{1F1F6}", "flag-ir": "\u{1F1EE}\u{1F1F7}", "flag-is": "\u{1F1EE}\u{1F1F8}", "flag-it": "\u{1F1EE}\u{1F1F9}", "flag-je": "\u{1F1EF}\u{1F1EA}", "flag-jm": "\u{1F1EF}\u{1F1F2}", "flag-jo": "\u{1F1EF}\u{1F1F4}", "flag-jp": "\u{1F1EF}\u{1F1F5}", "flag-ke": "\u{1F1F0}\u{1F1EA}", "flag-kg": "\u{1F1F0}\u{1F1EC}", "flag-kh": "\u{1F1F0}\u{1F1ED}", "flag-ki": "\u{1F1F0}\u{1F1EE}", "flag-km": "\u{1F1F0}\u{1F1F2}", "flag-kn": "\u{1F1F0}\u{1F1F3}", "flag-kp": "\u{1F1F0}\u{1F1F5}", "flag-kr": "\u{1F1F0}\u{1F1F7}", "flag-kw": "\u{1F1F0}\u{1F1FC}", "flag-ky": "\u{1F1F0}\u{1F1FE}", "flag-kz": "\u{1F1F0}\u{1F1FF}", "flag-la": "\u{1F1F1}\u{1F1E6}", "flag-lb": "\u{1F1F1}\u{1F1E7}", "flag-lc": "\u{1F1F1}\u{1F1E8}", "flag-li": "\u{1F1F1}\u{1F1EE}", "flag-lk": "\u{1F1F1}\u{1F1F0}", "flag-lr": "\u{1F1F1}\u{1F1F7}", "flag-ls": "\u{1F1F1}\u{1F1F8}", "flag-lt": "\u{1F1F1}\u{1F1F9}", "flag-lu": "\u{1F1F1}\u{1F1FA}", "flag-lv": "\u{1F1F1}\u{1F1FB}", "flag-ly": "\u{1F1F1}\u{1F1FE}", "flag-ma": "\u{1F1F2}\u{1F1E6}", "flag-mc": "\u{1F1F2}\u{1F1E8}", "flag-md": "\u{1F1F2}\u{1F1E9}", "flag-me": "\u{1F1F2}\u{1F1EA}", "flag-mf": "\u{1F1F2}\u{1F1EB}", "flag-mg": "\u{1F1F2}\u{1F1EC}", "flag-mh": "\u{1F1F2}\u{1F1ED}", "flag-mk": "\u{1F1F2}\u{1F1F0}", "flag-ml": "\u{1F1F2}\u{1F1F1}", "flag-mm": "\u{1F1F2}\u{1F1F2}", "flag-mn": "\u{1F1F2}\u{1F1F3}", "flag-mo": "\u{1F1F2}\u{1F1F4}", "flag-mp": "\u{1F1F2}\u{1F1F5}", "flag-mq": "\u{1F1F2}\u{1F1F6}", "flag-mr": "\u{1F1F2}\u{1F1F7}", "flag-ms": "\u{1F1F2}\u{1F1F8}", "flag-mt": "\u{1F1F2}\u{1F1F9}", "flag-mu": "\u{1F1F2}\u{1F1FA}", "flag-mv": "\u{1F1F2}\u{1F1FB}", "flag-mw": "\u{1F1F2}\u{1F1FC}", "flag-mx": "\u{1F1F2}\u{1F1FD}", "flag-my": "\u{1F1F2}\u{1F1FE}", "flag-mz": "\u{1F1F2}\u{1F1FF}", "flag-na": "\u{1F1F3}\u{1F1E6}", "flag-nc": "\u{1F1F3}\u{1F1E8}", "flag-ne": "\u{1F1F3}\u{1F1EA}", "flag-nf": "\u{1F1F3}\u{1F1EB}", "flag-ng": "\u{1F1F3}\u{1F1EC}", "flag-ni": "\u{1F1F3}\u{1F1EE}", "flag-nl": "\u{1F1F3}\u{1F1F1}", "flag-no": "\u{1F1F3}\u{1F1F4}", "flag-np": "\u{1F1F3}\u{1F1F5}", "flag-nr": "\u{1F1F3}\u{1F1F7}", "flag-nu": "\u{1F1F3}\u{1F1FA}", "flag-nz": "\u{1F1F3}\u{1F1FF}", "flag-om": "\u{1F1F4}\u{1F1F2}", "flag-pa": "\u{1F1F5}\u{1F1E6}", "flag-pe": "\u{1F1F5}\u{1F1EA}", "flag-pf": "\u{1F1F5}\u{1F1EB}", "flag-pg": "\u{1F1F5}\u{1F1EC}", "flag-ph": "\u{1F1F5}\u{1F1ED}", "flag-pk": "\u{1F1F5}\u{1F1F0}", "flag-pl": "\u{1F1F5}\u{1F1F1}", "flag-pm": "\u{1F1F5}\u{1F1F2}", "flag-pn": "\u{1F1F5}\u{1F1F3}", "flag-pr": "\u{1F1F5}\u{1F1F7}", "flag-ps": "\u{1F1F5}\u{1F1F8}", "flag-pt": "\u{1F1F5}\u{1F1F9}", "flag-pw": "\u{1F1F5}\u{1F1FC}", "flag-py": "\u{1F1F5}\u{1F1FE}", "flag-qa": "\u{1F1F6}\u{1F1E6}", "flag-re": "\u{1F1F7}\u{1F1EA}", "flag-ro": "\u{1F1F7}\u{1F1F4}", "flag-rs": "\u{1F1F7}\u{1F1F8}", "flag-ru": "\u{1F1F7}\u{1F1FA}", "flag-rw": "\u{1F1F7}\u{1F1FC}", "flag-sa": "\u{1F1F8}\u{1F1E6}", "flag-sark": "\u{1F1E8}\u{1F1F6}", "flag-sb": "\u{1F1F8}\u{1F1E7}", "flag-sc": "\u{1F1F8}\u{1F1E8}", "flag-scotland": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", "flag-sd": "\u{1F1F8}\u{1F1E9}", "flag-se": "\u{1F1F8}\u{1F1EA}", "flag-sg": "\u{1F1F8}\u{1F1EC}", "flag-sh": "\u{1F1F8}\u{1F1ED}", "flag-si": "\u{1F1F8}\u{1F1EE}", "flag-sj": "\u{1F1F8}\u{1F1EF}", "flag-sk": "\u{1F1F8}\u{1F1F0}", "flag-sl": "\u{1F1F8}\u{1F1F1}", "flag-sm": "\u{1F1F8}\u{1F1F2}", "flag-sn": "\u{1F1F8}\u{1F1F3}", "flag-so": "\u{1F1F8}\u{1F1F4}", "flag-sr": "\u{1F1F8}\u{1F1F7}", "flag-ss": "\u{1F1F8}\u{1F1F8}", "flag-st": "\u{1F1F8}\u{1F1F9}", "flag-sv": "\u{1F1F8}\u{1F1FB}", "flag-sx": "\u{1F1F8}\u{1F1FD}", "flag-sy": "\u{1F1F8}\u{1F1FE}", "flag-sz": "\u{1F1F8}\u{1F1FF}", "flag-ta": "\u{1F1F9}\u{1F1E6}", "flag-tc": "\u{1F1F9}\u{1F1E8}", "flag-td": "\u{1F1F9}\u{1F1E9}", "flag-tf": "\u{1F1F9}\u{1F1EB}", "flag-tg": "\u{1F1F9}\u{1F1EC}", "flag-th": "\u{1F1F9}\u{1F1ED}", "flag-tj": "\u{1F1F9}\u{1F1EF}", "flag-tk": "\u{1F1F9}\u{1F1F0}", "flag-tl": "\u{1F1F9}\u{1F1F1}", "flag-tm": "\u{1F1F9}\u{1F1F2}", "flag-tn": "\u{1F1F9}\u{1F1F3}", "flag-to": "\u{1F1F9}\u{1F1F4}", "flag-tr": "\u{1F1F9}\u{1F1F7}", "flag-tt": "\u{1F1F9}\u{1F1F9}", "flag-tv": "\u{1F1F9}\u{1F1FB}", "flag-tw": "\u{1F1F9}\u{1F1FC}", "flag-tz": "\u{1F1F9}\u{1F1FF}", "flag-ua": "\u{1F1FA}\u{1F1E6}", "flag-ug": "\u{1F1FA}\u{1F1EC}", "flag-um": "\u{1F1FA}\u{1F1F2}", "flag-un": "\u{1F1FA}\u{1F1F3}", "flag-us": "\u{1F1FA}\u{1F1F8}", "flag-uy": "\u{1F1FA}\u{1F1FE}", "flag-uz": "\u{1F1FA}\u{1F1FF}", "flag-va": "\u{1F1FB}\u{1F1E6}", "flag-vc": "\u{1F1FB}\u{1F1E8}", "flag-ve": "\u{1F1FB}\u{1F1EA}", "flag-vg": "\u{1F1FB}\u{1F1EC}", "flag-vi": "\u{1F1FB}\u{1F1EE}", "flag-vn": "\u{1F1FB}\u{1F1F3}", "flag-vu": "\u{1F1FB}\u{1F1FA}", "flag-wales": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", "flag-wf": "\u{1F1FC}\u{1F1EB}", "flag-ws": "\u{1F1FC}\u{1F1F8}", "flag-xk": "\u{1F1FD}\u{1F1F0}", "flag-ye": "\u{1F1FE}\u{1F1EA}", "flag-yt": "\u{1F1FE}\u{1F1F9}", "flag-za": "\u{1F1FF}\u{1F1E6}", "flag-zm": "\u{1F1FF}\u{1F1F2}", "flag-zw": "\u{1F1FF}\u{1F1FC}", flags: "\u{1F38F}", flamingo: "\u{1F9A9}", flashlight: "\u{1F526}", flatbread: "\u{1FAD3}", fleur_de_lis: "\u269C\uFE0F", flipper: "\u{1F42C}", floppy_disk: "\u{1F4BE}", flower_playing_cards: "\u{1F3B4}", flushed: "\u{1F633}", flute: "\u{1FA88}", fly: "\u{1FAB0}", flying_disc: "\u{1F94F}", flying_saucer: "\u{1F6F8}", fog: "\u{1F32B}\uFE0F", foggy: "\u{1F301}", folding_hand_fan: "\u{1FAAD}", fondue: "\u{1FAD5}", foot: "\u{1F9B6}", football: "\u{1F3C8}", footprints: "\u{1F463}", fork_and_knife: "\u{1F374}", fortune_cookie: "\u{1F960}", fountain: "\u26F2", four: "4\uFE0F\u20E3", four_leaf_clover: "\u{1F340}", fox_face: "\u{1F98A}", fr: "\u{1F1EB}\u{1F1F7}", frame_with_picture: "\u{1F5BC}\uFE0F", free: "\u{1F193}", fried_egg: "\u{1F373}", fried_shrimp: "\u{1F364}", fries: "\u{1F35F}", frog: "\u{1F438}", frowning: "\u{1F626}", fuelpump: "\u26FD", full_moon: "\u{1F315}", full_moon_with_face: "\u{1F31D}", funeral_urn: "\u26B1\uFE0F", game_die: "\u{1F3B2}", garlic: "\u{1F9C4}", gb: "\u{1F1EC}\u{1F1E7}", gear: "\u2699\uFE0F", gem: "\u{1F48E}", gemini: "\u264A", genie: "\u{1F9DE}", ghost: "\u{1F47B}", gift: "\u{1F381}", gift_heart: "\u{1F49D}", ginger_root: "\u{1FADA}", giraffe_face: "\u{1F992}", girl: "\u{1F467}", glass_of_milk: "\u{1F95B}", globe_with_meridians: "\u{1F310}", gloves: "\u{1F9E4}", goal_net: "\u{1F945}", goat: "\u{1F410}", goggles: "\u{1F97D}", golf: "\u26F3", golfer: "\u{1F3CC}\uFE0F", goose: "\u{1FABF}", gorilla: "\u{1F98D}", grapes: "\u{1F347}", green_apple: "\u{1F34F}", green_book: "\u{1F4D7}", green_heart: "\u{1F49A}", green_salad: "\u{1F957}", grey_exclamation: "\u2755", grey_heart: "\u{1FA76}", grey_question: "\u2754", grimacing: "\u{1F62C}", grin: "\u{1F601}", grinning: "\u{1F600}", grinning_face_with_one_large_and_one_small_eye: "\u{1F92A}", grinning_face_with_star_eyes: "\u{1F929}", guardsman: "\u{1F482}", guide_dog: "\u{1F9AE}", guitar: "\u{1F3B8}", gun: "\u{1F52B}", hair_pick: "\u{1FAAE}", haircut: "\u{1F487}", hairy_creature: "\u{1FAC8}", hamburger: "\u{1F354}", hammer: "\u{1F528}", hammer_and_pick: "\u2692\uFE0F", hammer_and_wrench: "\u{1F6E0}\uFE0F", hamsa: "\u{1FAAC}", hamster: "\u{1F439}", hand: "\u270B", hand_with_index_and_middle_fingers_crossed: "\u{1F91E}", hand_with_index_finger_and_thumb_crossed: "\u{1FAF0}", handbag: "\u{1F45C}", handball: "\u{1F93E}", handshake: "\u{1F91D}", hankey: "\u{1F4A9}", harp: "\u{1FA89}", hash: "#\uFE0F\u20E3", hatched_chick: "\u{1F425}", hatching_chick: "\u{1F423}", head_shaking_horizontally: "\u{1F642}\u200D\u2194\uFE0F", head_shaking_vertically: "\u{1F642}\u200D\u2195\uFE0F", headphones: "\u{1F3A7}", headstone: "\u{1FAA6}", health_worker: "\u{1F9D1}\u200D\u2695\uFE0F", hear_no_evil: "\u{1F649}", heart: "\u2764\uFE0F", heart_decoration: "\u{1F49F}", heart_eyes: "\u{1F60D}", heart_eyes_cat: "\u{1F63B}", heart_hands: "\u{1FAF6}", heart_on_fire: "\u2764\uFE0F\u200D\u{1F525}", heartbeat: "\u{1F493}", heartpulse: "\u{1F497}", hearts: "\u2665\uFE0F", heavy_check_mark: "\u2714\uFE0F", heavy_division_sign: "\u2797", heavy_dollar_sign: "\u{1F4B2}", heavy_equals_sign: "\u{1F7F0}", heavy_exclamation_mark: "\u2757", heavy_heart_exclamation_mark_ornament: "\u2763\uFE0F", heavy_minus_sign: "\u2796", heavy_multiplication_x: "\u2716\uFE0F", heavy_plus_sign: "\u2795", hedgehog: "\u{1F994}", helicopter: "\u{1F681}", helmet_with_white_cross: "\u26D1\uFE0F", herb: "\u{1F33F}", hibiscus: "\u{1F33A}", high_brightness: "\u{1F506}", high_heel: "\u{1F460}", hiking_boot: "\u{1F97E}", hindu_temple: "\u{1F6D5}", hippopotamus: "\u{1F99B}", hocho: "\u{1F52A}", hole: "\u{1F573}\uFE0F", honey_pot: "\u{1F36F}", honeybee: "\u{1F41D}", hook: "\u{1FA9D}", horse: "\u{1F434}", horse_racing: "\u{1F3C7}", hospital: "\u{1F3E5}", hot_face: "\u{1F975}", hot_pepper: "\u{1F336}\uFE0F", hotdog: "\u{1F32D}", hotel: "\u{1F3E8}", hotsprings: "\u2668\uFE0F", hourglass: "\u231B", hourglass_flowing_sand: "\u23F3", house: "\u{1F3E0}", house_buildings: "\u{1F3D8}\uFE0F", house_with_garden: "\u{1F3E1}", hugging_face: "\u{1F917}", hushed: "\u{1F62F}", hut: "\u{1F6D6}", hyacinth: "\u{1FABB}", i_love_you_hand_sign: "\u{1F91F}", ice_cream: "\u{1F368}", ice_cube: "\u{1F9CA}", ice_hockey_stick_and_puck: "\u{1F3D2}", ice_skate: "\u26F8\uFE0F", icecream: "\u{1F366}", id: "\u{1F194}", identification_card: "\u{1FAAA}", ideograph_advantage: "\u{1F250}", imp: "\u{1F47F}", inbox_tray: "\u{1F4E5}", incoming_envelope: "\u{1F4E8}", index_pointing_at_the_viewer: "\u{1FAF5}", infinity: "\u267E\uFE0F", information_desk_person: "\u{1F481}", information_source: "\u2139\uFE0F", innocent: "\u{1F607}", interrobang: "\u2049\uFE0F", iphone: "\u{1F4F1}", it: "\u{1F1EE}\u{1F1F9}", izakaya_lantern: "\u{1F3EE}", jack_o_lantern: "\u{1F383}", japan: "\u{1F5FE}", japanese_castle: "\u{1F3EF}", japanese_goblin: "\u{1F47A}", japanese_ogre: "\u{1F479}", jar: "\u{1FAD9}", jeans: "\u{1F456}", jellyfish: "\u{1FABC}", jigsaw: "\u{1F9E9}", joy: "\u{1F602}", joy_cat: "\u{1F639}", joystick: "\u{1F579}\uFE0F", jp: "\u{1F1EF}\u{1F1F5}", judge: "\u{1F9D1}\u200D\u2696\uFE0F", juggling: "\u{1F939}", kaaba: "\u{1F54B}", kangaroo: "\u{1F998}", key: "\u{1F511}", keyboard: "\u2328\uFE0F", keycap_star: "*\uFE0F\u20E3", keycap_ten: "\u{1F51F}", khanda: "\u{1FAAF}", kimono: "\u{1F458}", kiss: "\u{1F48B}", kissing: "\u{1F617}", kissing_cat: "\u{1F63D}", kissing_closed_eyes: "\u{1F61A}", kissing_heart: "\u{1F618}", kissing_smiling_eyes: "\u{1F619}", kite: "\u{1FA81}", kiwifruit: "\u{1F95D}", kneeling_person: "\u{1F9CE}", knife: "\u{1F52A}", knife_fork_plate: "\u{1F37D}\uFE0F", knot: "\u{1FAA2}", koala: "\u{1F428}", koko: "\u{1F201}", kr: "\u{1F1F0}\u{1F1F7}", lab_coat: "\u{1F97C}", label: "\u{1F3F7}\uFE0F", lacrosse: "\u{1F94D}", ladder: "\u{1FA9C}", lady_beetle: "\u{1F41E}", ladybug: "\u{1F41E}", landslide: "\u{1F6D8}", lantern: "\u{1F3EE}", large_blue_circle: "\u{1F535}", large_blue_diamond: "\u{1F537}", large_blue_square: "\u{1F7E6}", large_brown_circle: "\u{1F7E4}", large_brown_square: "\u{1F7EB}", large_green_circle: "\u{1F7E2}", large_green_square: "\u{1F7E9}", large_orange_circle: "\u{1F7E0}", large_orange_diamond: "\u{1F536}", large_orange_square: "\u{1F7E7}", large_purple_circle: "\u{1F7E3}", large_purple_square: "\u{1F7EA}", large_red_square: "\u{1F7E5}", large_yellow_circle: "\u{1F7E1}", large_yellow_square: "\u{1F7E8}", last_quarter_moon: "\u{1F317}", last_quarter_moon_with_face: "\u{1F31C}", latin_cross: "\u271D\uFE0F", laughing: "\u{1F606}", leafless_tree: "\u{1FABE}", leafy_green: "\u{1F96C}", leaves: "\u{1F343}", ledger: "\u{1F4D2}", "left-facing_fist": "\u{1F91B}", left_luggage: "\u{1F6C5}", left_right_arrow: "\u2194\uFE0F", left_speech_bubble: "\u{1F5E8}\uFE0F", leftwards_arrow_with_hook: "\u21A9\uFE0F", leftwards_hand: "\u{1FAF2}", leftwards_pushing_hand: "\u{1FAF7}", leg: "\u{1F9B5}", lemon: "\u{1F34B}", leo: "\u264C", leopard: "\u{1F406}", level_slider: "\u{1F39A}\uFE0F", libra: "\u264E", light_blue_heart: "\u{1FA75}", light_rail: "\u{1F688}", lightning: "\u{1F329}\uFE0F", lightning_cloud: "\u{1F329}\uFE0F", lime: "\u{1F34B}\u200D\u{1F7E9}", link: "\u{1F517}", linked_paperclips: "\u{1F587}\uFE0F", lion_face: "\u{1F981}", lips: "\u{1F444}", lipstick: "\u{1F484}", lizard: "\u{1F98E}", llama: "\u{1F999}", lobster: "\u{1F99E}", lock: "\u{1F512}", lock_with_ink_pen: "\u{1F50F}", lollipop: "\u{1F36D}", long_drum: "\u{1FA98}", loop: "\u27BF", lotion_bottle: "\u{1F9F4}", lotus: "\u{1FAB7}", loud_sound: "\u{1F50A}", loudspeaker: "\u{1F4E2}", love_hotel: "\u{1F3E9}", love_letter: "\u{1F48C}", low_battery: "\u{1FAAB}", low_brightness: "\u{1F505}", lower_left_ballpoint_pen: "\u{1F58A}\uFE0F", lower_left_crayon: "\u{1F58D}\uFE0F", lower_left_fountain_pen: "\u{1F58B}\uFE0F", lower_left_paintbrush: "\u{1F58C}\uFE0F", luggage: "\u{1F9F3}", lungs: "\u{1FAC1}", lying_face: "\u{1F925}", m: "\u24C2\uFE0F", mag: "\u{1F50D}", mag_right: "\u{1F50E}", mage: "\u{1F9D9}", magic_wand: "\u{1FA84}", magnet: "\u{1F9F2}", mahjong: "\u{1F004}", mailbox: "\u{1F4EB}", mailbox_closed: "\u{1F4EA}", mailbox_with_mail: "\u{1F4EC}", mailbox_with_no_mail: "\u{1F4ED}", "male-artist": "\u{1F468}\u200D\u{1F3A8}", "male-astronaut": "\u{1F468}\u200D\u{1F680}", "male-construction-worker": "\u{1F477}\u200D\u2642\uFE0F", "male-cook": "\u{1F468}\u200D\u{1F373}", "male-detective": "\u{1F575}\uFE0F\u200D\u2642\uFE0F", "male-doctor": "\u{1F468}\u200D\u2695\uFE0F", "male-factory-worker": "\u{1F468}\u200D\u{1F3ED}", "male-farmer": "\u{1F468}\u200D\u{1F33E}", "male-firefighter": "\u{1F468}\u200D\u{1F692}", "male-guard": "\u{1F482}\u200D\u2642\uFE0F", "male-judge": "\u{1F468}\u200D\u2696\uFE0F", "male-mechanic": "\u{1F468}\u200D\u{1F527}", "male-office-worker": "\u{1F468}\u200D\u{1F4BC}", "male-pilot": "\u{1F468}\u200D\u2708\uFE0F", "male-police-officer": "\u{1F46E}\u200D\u2642\uFE0F", "male-scientist": "\u{1F468}\u200D\u{1F52C}", "male-singer": "\u{1F468}\u200D\u{1F3A4}", "male-student": "\u{1F468}\u200D\u{1F393}", "male-teacher": "\u{1F468}\u200D\u{1F3EB}", "male-technologist": "\u{1F468}\u200D\u{1F4BB}", male_elf: "\u{1F9DD}\u200D\u2642\uFE0F", male_fairy: "\u{1F9DA}\u200D\u2642\uFE0F", male_genie: "\u{1F9DE}\u200D\u2642\uFE0F", male_mage: "\u{1F9D9}\u200D\u2642\uFE0F", male_sign: "\u2642\uFE0F", male_superhero: "\u{1F9B8}\u200D\u2642\uFE0F", male_supervillain: "\u{1F9B9}\u200D\u2642\uFE0F", male_vampire: "\u{1F9DB}\u200D\u2642\uFE0F", male_zombie: "\u{1F9DF}\u200D\u2642\uFE0F", mammoth: "\u{1F9A3}", man: "\u{1F468}", "man-biking": "\u{1F6B4}\u200D\u2642\uFE0F", "man-bouncing-ball": "\u26F9\uFE0F\u200D\u2642\uFE0F", "man-bowing": "\u{1F647}\u200D\u2642\uFE0F", "man-boy": "\u{1F468}\u200D\u{1F466}", "man-boy-boy": "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "man-cartwheeling": "\u{1F938}\u200D\u2642\uFE0F", "man-facepalming": "\u{1F926}\u200D\u2642\uFE0F", "man-frowning": "\u{1F64D}\u200D\u2642\uFE0F", "man-gesturing-no": "\u{1F645}\u200D\u2642\uFE0F", "man-gesturing-ok": "\u{1F646}\u200D\u2642\uFE0F", "man-getting-haircut": "\u{1F487}\u200D\u2642\uFE0F", "man-getting-massage": "\u{1F486}\u200D\u2642\uFE0F", "man-girl": "\u{1F468}\u200D\u{1F467}", "man-girl-boy": "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "man-girl-girl": "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "man-golfing": "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", "man-heart-man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}", "man-juggling": "\u{1F939}\u200D\u2642\uFE0F", "man-kiss-man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "man-lifting-weights": "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", "man-man-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}", "man-man-boy-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "man-man-girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}", "man-man-girl-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "man-man-girl-girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "man-mountain-biking": "\u{1F6B5}\u200D\u2642\uFE0F", "man-playing-handball": "\u{1F93E}\u200D\u2642\uFE0F", "man-playing-water-polo": "\u{1F93D}\u200D\u2642\uFE0F", "man-pouting": "\u{1F64E}\u200D\u2642\uFE0F", "man-raising-hand": "\u{1F64B}\u200D\u2642\uFE0F", "man-rowing-boat": "\u{1F6A3}\u200D\u2642\uFE0F", "man-running": "\u{1F3C3}\u200D\u2642\uFE0F", "man-shrugging": "\u{1F937}\u200D\u2642\uFE0F", "man-surfing": "\u{1F3C4}\u200D\u2642\uFE0F", "man-swimming": "\u{1F3CA}\u200D\u2642\uFE0F", "man-tipping-hand": "\u{1F481}\u200D\u2642\uFE0F", "man-walking": "\u{1F6B6}\u200D\u2642\uFE0F", "man-wearing-turban": "\u{1F473}\u200D\u2642\uFE0F", "man-with-bunny-ears-partying": "\u{1F46F}\u200D\u2642\uFE0F", "man-woman-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", "man-woman-boy-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "man-woman-girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", "man-woman-girl-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "man-woman-girl-girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "man-wrestling": "\u{1F93C}\u200D\u2642\uFE0F", man_and_woman_holding_hands: "\u{1F46B}", man_climbing: "\u{1F9D7}\u200D\u2642\uFE0F", man_dancing: "\u{1F57A}", man_feeding_baby: "\u{1F468}\u200D\u{1F37C}", man_in_business_suit_levitating: "\u{1F574}\uFE0F", man_in_lotus_position: "\u{1F9D8}\u200D\u2642\uFE0F", man_in_manual_wheelchair: "\u{1F468}\u200D\u{1F9BD}", man_in_manual_wheelchair_facing_right: "\u{1F468}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", man_in_motorized_wheelchair: "\u{1F468}\u200D\u{1F9BC}", man_in_motorized_wheelchair_facing_right: "\u{1F468}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", man_in_steamy_room: "\u{1F9D6}\u200D\u2642\uFE0F", man_in_tuxedo: "\u{1F935}\u200D\u2642\uFE0F", man_kneeling: "\u{1F9CE}\u200D\u2642\uFE0F", man_kneeling_facing_right: "\u{1F9CE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", man_running_facing_right: "\u{1F3C3}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", man_standing: "\u{1F9CD}\u200D\u2642\uFE0F", man_walking_facing_right: "\u{1F6B6}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", man_with_beard: "\u{1F9D4}\u200D\u2642\uFE0F", man_with_gua_pi_mao: "\u{1F472}", man_with_probing_cane: "\u{1F468}\u200D\u{1F9AF}", man_with_turban: "\u{1F473}", man_with_veil: "\u{1F470}\u200D\u2642\uFE0F", man_with_white_cane_facing_right: "\u{1F468}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", mango: "\u{1F96D}", mans_shoe: "\u{1F45E}", mantelpiece_clock: "\u{1F570}\uFE0F", manual_wheelchair: "\u{1F9BD}", maple_leaf: "\u{1F341}", maracas: "\u{1FA87}", martial_arts_uniform: "\u{1F94B}", mask: "\u{1F637}", massage: "\u{1F486}", mate_drink: "\u{1F9C9}", meat_on_bone: "\u{1F356}", mechanic: "\u{1F9D1}\u200D\u{1F527}", mechanical_arm: "\u{1F9BE}", mechanical_leg: "\u{1F9BF}", medal: "\u{1F396}\uFE0F", medical_symbol: "\u2695\uFE0F", mega: "\u{1F4E3}", melon: "\u{1F348}", melting_face: "\u{1FAE0}", memo: "\u{1F4DD}", "men-with-bunny-ears-partying": "\u{1F46F}\u200D\u2642\uFE0F", men_holding_hands: "\u{1F46C}", mending_heart: "\u2764\uFE0F\u200D\u{1FA79}", menorah_with_nine_branches: "\u{1F54E}", mens: "\u{1F6B9}", mermaid: "\u{1F9DC}\u200D\u2640\uFE0F", merman: "\u{1F9DC}\u200D\u2642\uFE0F", merperson: "\u{1F9DC}", metro: "\u{1F687}", microbe: "\u{1F9A0}", microphone: "\u{1F3A4}", microscope: "\u{1F52C}", middle_finger: "\u{1F595}", military_helmet: "\u{1FA96}", milky_way: "\u{1F30C}", minibus: "\u{1F690}", minidisc: "\u{1F4BD}", mirror: "\u{1FA9E}", mirror_ball: "\u{1FAA9}", mobile_phone_off: "\u{1F4F4}", money_mouth_face: "\u{1F911}", money_with_wings: "\u{1F4B8}", moneybag: "\u{1F4B0}", monkey: "\u{1F412}", monkey_face: "\u{1F435}", monorail: "\u{1F69D}", moon: "\u{1F314}", moon_cake: "\u{1F96E}", moose: "\u{1FACE}", mortar_board: "\u{1F393}", mosque: "\u{1F54C}", mosquito: "\u{1F99F}", mostly_sunny: "\u{1F324}\uFE0F", mother_christmas: "\u{1F936}", motor_boat: "\u{1F6E5}\uFE0F", motor_scooter: "\u{1F6F5}", motorized_wheelchair: "\u{1F9BC}", motorway: "\u{1F6E3}\uFE0F", mount_fuji: "\u{1F5FB}", mountain: "\u26F0\uFE0F", mountain_bicyclist: "\u{1F6B5}", mountain_cableway: "\u{1F6A0}", mountain_railway: "\u{1F69E}", mouse: "\u{1F42D}", mouse2: "\u{1F401}", mouse_trap: "\u{1FAA4}", movie_camera: "\u{1F3A5}", moyai: "\u{1F5FF}", mrs_claus: "\u{1F936}", muscle: "\u{1F4AA}", mushroom: "\u{1F344}", musical_keyboard: "\u{1F3B9}", musical_note: "\u{1F3B5}", musical_score: "\u{1F3BC}", mute: "\u{1F507}", mx_claus: "\u{1F9D1}\u200D\u{1F384}", nail_care: "\u{1F485}", name_badge: "\u{1F4DB}", national_park: "\u{1F3DE}\uFE0F", nauseated_face: "\u{1F922}", nazar_amulet: "\u{1F9FF}", necktie: "\u{1F454}", negative_squared_cross_mark: "\u274E", nerd_face: "\u{1F913}", nest_with_eggs: "\u{1FABA}", nesting_dolls: "\u{1FA86}", neutral_face: "\u{1F610}", new: "\u{1F195}", new_moon: "\u{1F311}", new_moon_with_face: "\u{1F31A}", newspaper: "\u{1F4F0}", ng: "\u{1F196}", night_with_stars: "\u{1F303}", nine: "9\uFE0F\u20E3", ninja: "\u{1F977}", no_bell: "\u{1F515}", no_bicycles: "\u{1F6B3}", no_entry: "\u26D4", no_entry_sign: "\u{1F6AB}", no_good: "\u{1F645}", no_mobile_phones: "\u{1F4F5}", no_mouth: "\u{1F636}", no_pedestrians: "\u{1F6B7}", no_smoking: "\u{1F6AD}", "non-potable_water": "\u{1F6B1}", nose: "\u{1F443}", notebook: "\u{1F4D3}", notebook_with_decorative_cover: "\u{1F4D4}", notes: "\u{1F3B6}", nut_and_bolt: "\u{1F529}", o: "\u2B55", o2: "\u{1F17E}\uFE0F", ocean: "\u{1F30A}", octagonal_sign: "\u{1F6D1}", octopus: "\u{1F419}", oden: "\u{1F362}", office: "\u{1F3E2}", office_worker: "\u{1F9D1}\u200D\u{1F4BC}", oil_drum: "\u{1F6E2}\uFE0F", ok: "\u{1F197}", ok_hand: "\u{1F44C}", ok_woman: "\u{1F646}", old_key: "\u{1F5DD}\uFE0F", older_adult: "\u{1F9D3}", older_man: "\u{1F474}", older_woman: "\u{1F475}", olive: "\u{1FAD2}", om_symbol: "\u{1F549}\uFE0F", on: "\u{1F51B}", oncoming_automobile: "\u{1F698}", oncoming_bus: "\u{1F68D}", oncoming_police_car: "\u{1F694}", oncoming_taxi: "\u{1F696}", one: "1\uFE0F\u20E3", "one-piece_swimsuit": "\u{1FA71}", onion: "\u{1F9C5}", open_book: "\u{1F4D6}", open_file_folder: "\u{1F4C2}", open_hands: "\u{1F450}", open_mouth: "\u{1F62E}", ophiuchus: "\u26CE", orange_book: "\u{1F4D9}", orange_heart: "\u{1F9E1}", orangutan: "\u{1F9A7}", orca: "\u{1FACD}", orthodox_cross: "\u2626\uFE0F", otter: "\u{1F9A6}", outbox_tray: "\u{1F4E4}", owl: "\u{1F989}", ox: "\u{1F402}", oyster: "\u{1F9AA}", package: "\u{1F4E6}", page_facing_up: "\u{1F4C4}", page_with_curl: "\u{1F4C3}", pager: "\u{1F4DF}", palm_down_hand: "\u{1FAF3}", palm_tree: "\u{1F334}", palm_up_hand: "\u{1FAF4}", palms_up_together: "\u{1F932}", pancakes: "\u{1F95E}", panda_face: "\u{1F43C}", paperclip: "\u{1F4CE}", parachute: "\u{1FA82}", parking: "\u{1F17F}\uFE0F", parrot: "\u{1F99C}", part_alternation_mark: "\u303D\uFE0F", partly_sunny: "\u26C5", partly_sunny_rain: "\u{1F326}\uFE0F", partying_face: "\u{1F973}", passenger_ship: "\u{1F6F3}\uFE0F", passport_control: "\u{1F6C2}", paw_prints: "\u{1F43E}", pea_pod: "\u{1FADB}", peace_symbol: "\u262E\uFE0F", peach: "\u{1F351}", peacock: "\u{1F99A}", peanuts: "\u{1F95C}", pear: "\u{1F350}", pencil: "\u{1F4DD}", pencil2: "\u270F\uFE0F", penguin: "\u{1F427}", pensive: "\u{1F614}", people_holding_hands: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}", people_hugging: "\u{1FAC2}", performing_arts: "\u{1F3AD}", persevere: "\u{1F623}", person_climbing: "\u{1F9D7}", person_doing_cartwheel: "\u{1F938}", person_feeding_baby: "\u{1F9D1}\u200D\u{1F37C}", person_frowning: "\u{1F64D}", person_in_lotus_position: "\u{1F9D8}", person_in_manual_wheelchair: "\u{1F9D1}\u200D\u{1F9BD}", person_in_manual_wheelchair_facing_right: "\u{1F9D1}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", person_in_motorized_wheelchair: "\u{1F9D1}\u200D\u{1F9BC}", person_in_motorized_wheelchair_facing_right: "\u{1F9D1}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", person_in_steamy_room: "\u{1F9D6}", person_in_tuxedo: "\u{1F935}", person_kneeling_facing_right: "\u{1F9CE}\u200D\u27A1\uFE0F", person_running_facing_right: "\u{1F3C3}\u200D\u27A1\uFE0F", person_walking_facing_right: "\u{1F6B6}\u200D\u27A1\uFE0F", person_with_ball: "\u26F9\uFE0F", person_with_blond_hair: "\u{1F471}", person_with_crown: "\u{1FAC5}", person_with_headscarf: "\u{1F9D5}", person_with_pouting_face: "\u{1F64E}", person_with_probing_cane: "\u{1F9D1}\u200D\u{1F9AF}", person_with_white_cane_facing_right: "\u{1F9D1}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", petri_dish: "\u{1F9EB}", phoenix: "\u{1F426}\u200D\u{1F525}", phone: "\u260E\uFE0F", pick: "\u26CF\uFE0F", pickup_truck: "\u{1F6FB}", pie: "\u{1F967}", pig: "\u{1F437}", pig2: "\u{1F416}", pig_nose: "\u{1F43D}", pill: "\u{1F48A}", pilot: "\u{1F9D1}\u200D\u2708\uFE0F", pinata: "\u{1FA85}", pinched_fingers: "\u{1F90C}", pinching_hand: "\u{1F90F}", pineapple: "\u{1F34D}", pink_heart: "\u{1FA77}", pirate_flag: "\u{1F3F4}\u200D\u2620\uFE0F", pisces: "\u2653", pizza: "\u{1F355}", placard: "\u{1FAA7}", place_of_worship: "\u{1F6D0}", playground_slide: "\u{1F6DD}", pleading_face: "\u{1F97A}", plunger: "\u{1FAA0}", point_down: "\u{1F447}", point_left: "\u{1F448}", point_right: "\u{1F449}", point_up: "\u261D\uFE0F", point_up_2: "\u{1F446}", polar_bear: "\u{1F43B}\u200D\u2744\uFE0F", police_car: "\u{1F693}", poodle: "\u{1F429}", poop: "\u{1F4A9}", popcorn: "\u{1F37F}", post_office: "\u{1F3E3}", postal_horn: "\u{1F4EF}", postbox: "\u{1F4EE}", potable_water: "\u{1F6B0}", potato: "\u{1F954}", potted_plant: "\u{1FAB4}", pouch: "\u{1F45D}", poultry_leg: "\u{1F357}", pound: "\u{1F4B7}", pouring_liquid: "\u{1FAD7}", pouting_cat: "\u{1F63E}", pray: "\u{1F64F}", prayer_beads: "\u{1F4FF}", pregnant_man: "\u{1FAC3}", pregnant_person: "\u{1FAC4}", pregnant_woman: "\u{1F930}", pretzel: "\u{1F968}", prince: "\u{1F934}", princess: "\u{1F478}", printer: "\u{1F5A8}\uFE0F", probing_cane: "\u{1F9AF}", punch: "\u{1F44A}", purple_heart: "\u{1F49C}", purse: "\u{1F45B}", pushpin: "\u{1F4CC}", put_litter_in_its_place: "\u{1F6AE}", question: "\u2753", rabbit: "\u{1F430}", rabbit2: "\u{1F407}", raccoon: "\u{1F99D}", racehorse: "\u{1F40E}", racing_car: "\u{1F3CE}\uFE0F", racing_motorcycle: "\u{1F3CD}\uFE0F", radio: "\u{1F4FB}", radio_button: "\u{1F518}", radioactive_sign: "\u2622\uFE0F", rage: "\u{1F621}", railway_car: "\u{1F683}", railway_track: "\u{1F6E4}\uFE0F", rain_cloud: "\u{1F327}\uFE0F", rainbow: "\u{1F308}", "rainbow-flag": "\u{1F3F3}\uFE0F\u200D\u{1F308}", raised_back_of_hand: "\u{1F91A}", raised_hand: "\u270B", raised_hand_with_fingers_splayed: "\u{1F590}\uFE0F", raised_hands: "\u{1F64C}", raising_hand: "\u{1F64B}", ram: "\u{1F40F}", ramen: "\u{1F35C}", rat: "\u{1F400}", razor: "\u{1FA92}", receipt: "\u{1F9FE}", recycle: "\u267B\uFE0F", red_car: "\u{1F697}", red_circle: "\u{1F534}", red_envelope: "\u{1F9E7}", red_haired_man: "\u{1F468}\u200D\u{1F9B0}", red_haired_person: "\u{1F9D1}\u200D\u{1F9B0}", red_haired_woman: "\u{1F469}\u200D\u{1F9B0}", registered: "\xAE\uFE0F", relaxed: "\u263A\uFE0F", relieved: "\u{1F60C}", reminder_ribbon: "\u{1F397}\uFE0F", repeat: "\u{1F501}", repeat_one: "\u{1F502}", restroom: "\u{1F6BB}", reversed_hand_with_middle_finger_extended: "\u{1F595}", revolving_hearts: "\u{1F49E}", rewind: "\u23EA", rhinoceros: "\u{1F98F}", ribbon: "\u{1F380}", rice: "\u{1F35A}", rice_ball: "\u{1F359}", rice_cracker: "\u{1F358}", rice_scene: "\u{1F391}", "right-facing_fist": "\u{1F91C}", right_anger_bubble: "\u{1F5EF}\uFE0F", rightwards_hand: "\u{1FAF1}", rightwards_pushing_hand: "\u{1FAF8}", ring: "\u{1F48D}", ring_buoy: "\u{1F6DF}", ringed_planet: "\u{1FA90}", robot_face: "\u{1F916}", rock: "\u{1FAA8}", rocket: "\u{1F680}", roll_of_paper: "\u{1F9FB}", rolled_up_newspaper: "\u{1F5DE}\uFE0F", roller_coaster: "\u{1F3A2}", roller_skate: "\u{1F6FC}", rolling_on_the_floor_laughing: "\u{1F923}", rooster: "\u{1F413}", root_vegetable: "\u{1FADC}", rose: "\u{1F339}", rosette: "\u{1F3F5}\uFE0F", rotating_light: "\u{1F6A8}", round_pushpin: "\u{1F4CD}", rowboat: "\u{1F6A3}", ru: "\u{1F1F7}\u{1F1FA}", rugby_football: "\u{1F3C9}", runner: "\u{1F3C3}", running: "\u{1F3C3}", running_shirt_with_sash: "\u{1F3BD}", sa: "\u{1F202}\uFE0F", safety_pin: "\u{1F9F7}", safety_vest: "\u{1F9BA}", sagittarius: "\u2650", sailboat: "\u26F5", sake: "\u{1F376}", salt: "\u{1F9C2}", saluting_face: "\u{1FAE1}", sandal: "\u{1F461}", sandwich: "\u{1F96A}", santa: "\u{1F385}", sari: "\u{1F97B}", satellite: "\u{1F6F0}\uFE0F", satellite_antenna: "\u{1F4E1}", satisfied: "\u{1F606}", sauropod: "\u{1F995}", saxophone: "\u{1F3B7}", scales: "\u2696\uFE0F", scarf: "\u{1F9E3}", school: "\u{1F3EB}", school_satchel: "\u{1F392}", scientist: "\u{1F9D1}\u200D\u{1F52C}", scissors: "\u2702\uFE0F", scooter: "\u{1F6F4}", scorpion: "\u{1F982}", scorpius: "\u264F", scream: "\u{1F631}", scream_cat: "\u{1F640}", screwdriver: "\u{1FA9B}", scroll: "\u{1F4DC}", seal: "\u{1F9AD}", seat: "\u{1F4BA}", second_place_medal: "\u{1F948}", secret: "\u3299\uFE0F", see_no_evil: "\u{1F648}", seedling: "\u{1F331}", selfie: "\u{1F933}", serious_face_with_symbols_covering_mouth: "\u{1F92C}", service_dog: "\u{1F415}\u200D\u{1F9BA}", seven: "7\uFE0F\u20E3", sewing_needle: "\u{1FAA1}", shaking_face: "\u{1FAE8}", shallow_pan_of_food: "\u{1F958}", shamrock: "\u2618\uFE0F", shark: "\u{1F988}", shaved_ice: "\u{1F367}", sheep: "\u{1F411}", shell: "\u{1F41A}", shield: "\u{1F6E1}\uFE0F", shinto_shrine: "\u26E9\uFE0F", ship: "\u{1F6A2}", shirt: "\u{1F455}", shit: "\u{1F4A9}", shocked_face_with_exploding_head: "\u{1F92F}", shoe: "\u{1F45E}", shopping_bags: "\u{1F6CD}\uFE0F", shopping_trolley: "\u{1F6D2}", shorts: "\u{1FA73}", shovel: "\u{1FA8F}", shower: "\u{1F6BF}", shrimp: "\u{1F990}", shrug: "\u{1F937}", shushing_face: "\u{1F92B}", sign_of_the_horns: "\u{1F918}", signal_strength: "\u{1F4F6}", singer: "\u{1F9D1}\u200D\u{1F3A4}", six: "6\uFE0F\u20E3", six_pointed_star: "\u{1F52F}", skateboard: "\u{1F6F9}", ski: "\u{1F3BF}", skier: "\u26F7\uFE0F", "skin-tone-2": "\u{1F3FB}", "skin-tone-3": "\u{1F3FC}", "skin-tone-4": "\u{1F3FD}", "skin-tone-5": "\u{1F3FE}", "skin-tone-6": "\u{1F3FF}", skull: "\u{1F480}", skull_and_crossbones: "\u2620\uFE0F", skunk: "\u{1F9A8}", sled: "\u{1F6F7}", sleeping: "\u{1F634}", sleeping_accommodation: "\u{1F6CC}", sleepy: "\u{1F62A}", sleuth_or_spy: "\u{1F575}\uFE0F", slightly_frowning_face: "\u{1F641}", slightly_smiling_face: "\u{1F642}", slot_machine: "\u{1F3B0}", sloth: "\u{1F9A5}", small_airplane: "\u{1F6E9}\uFE0F", small_blue_diamond: "\u{1F539}", small_orange_diamond: "\u{1F538}", small_red_triangle: "\u{1F53A}", small_red_triangle_down: "\u{1F53B}", smile: "\u{1F604}", smile_cat: "\u{1F638}", smiley: "\u{1F603}", smiley_cat: "\u{1F63A}", smiling_face_with_3_hearts: "\u{1F970}", smiling_face_with_smiling_eyes_and_hand_covering_mouth: "\u{1F92D}", smiling_face_with_tear: "\u{1F972}", smiling_imp: "\u{1F608}", smirk: "\u{1F60F}", smirk_cat: "\u{1F63C}", smoking: "\u{1F6AC}", snail: "\u{1F40C}", snake: "\u{1F40D}", sneezing_face: "\u{1F927}", snow_capped_mountain: "\u{1F3D4}\uFE0F", snow_cloud: "\u{1F328}\uFE0F", snowboarder: "\u{1F3C2}", snowflake: "\u2744\uFE0F", snowman: "\u2603\uFE0F", snowman_without_snow: "\u26C4", soap: "\u{1F9FC}", sob: "\u{1F62D}", soccer: "\u26BD", socks: "\u{1F9E6}", softball: "\u{1F94E}", soon: "\u{1F51C}", sos: "\u{1F198}", sound: "\u{1F509}", space_invader: "\u{1F47E}", spades: "\u2660\uFE0F", spaghetti: "\u{1F35D}", sparkle: "\u2747\uFE0F", sparkler: "\u{1F387}", sparkles: "\u2728", sparkling_heart: "\u{1F496}", speak_no_evil: "\u{1F64A}", speaker: "\u{1F508}", speaking_head_in_silhouette: "\u{1F5E3}\uFE0F", speech_balloon: "\u{1F4AC}", speedboat: "\u{1F6A4}", spider: "\u{1F577}\uFE0F", spider_web: "\u{1F578}\uFE0F", spiral_calendar_pad: "\u{1F5D3}\uFE0F", spiral_note_pad: "\u{1F5D2}\uFE0F", splatter: "\u{1FADF}", "spock-hand": "\u{1F596}", sponge: "\u{1F9FD}", spoon: "\u{1F944}", sports_medal: "\u{1F3C5}", squid: "\u{1F991}", stadium: "\u{1F3DF}\uFE0F", staff_of_aesculapius: "\u2695\uFE0F", standing_person: "\u{1F9CD}", star: "\u2B50", "star-struck": "\u{1F929}", star2: "\u{1F31F}", star_and_crescent: "\u262A\uFE0F", star_of_david: "\u2721\uFE0F", stars: "\u{1F320}", station: "\u{1F689}", statue_of_liberty: "\u{1F5FD}", steam_locomotive: "\u{1F682}", stethoscope: "\u{1FA7A}", stew: "\u{1F372}", stopwatch: "\u23F1\uFE0F", straight_ruler: "\u{1F4CF}", strawberry: "\u{1F353}", stuck_out_tongue: "\u{1F61B}", stuck_out_tongue_closed_eyes: "\u{1F61D}", stuck_out_tongue_winking_eye: "\u{1F61C}", student: "\u{1F9D1}\u200D\u{1F393}", studio_microphone: "\u{1F399}\uFE0F", stuffed_flatbread: "\u{1F959}", sun_behind_cloud: "\u{1F325}\uFE0F", sun_behind_rain_cloud: "\u{1F326}\uFE0F", sun_small_cloud: "\u{1F324}\uFE0F", sun_with_face: "\u{1F31E}", sunflower: "\u{1F33B}", sunglasses: "\u{1F60E}", sunny: "\u2600\uFE0F", sunrise: "\u{1F305}", sunrise_over_mountains: "\u{1F304}", superhero: "\u{1F9B8}", supervillain: "\u{1F9B9}", surfer: "\u{1F3C4}", sushi: "\u{1F363}", suspension_railway: "\u{1F69F}", swan: "\u{1F9A2}", sweat: "\u{1F613}", sweat_drops: "\u{1F4A6}", sweat_smile: "\u{1F605}", sweet_potato: "\u{1F360}", swimmer: "\u{1F3CA}", symbols: "\u{1F523}", synagogue: "\u{1F54D}", syringe: "\u{1F489}", "t-rex": "\u{1F996}", table_tennis_paddle_and_ball: "\u{1F3D3}", taco: "\u{1F32E}", tada: "\u{1F389}", takeout_box: "\u{1F961}", tamale: "\u{1FAD4}", tanabata_tree: "\u{1F38B}", tangerine: "\u{1F34A}", taurus: "\u2649", taxi: "\u{1F695}", tea: "\u{1F375}", teacher: "\u{1F9D1}\u200D\u{1F3EB}", teapot: "\u{1FAD6}", technologist: "\u{1F9D1}\u200D\u{1F4BB}", teddy_bear: "\u{1F9F8}", telephone: "\u260E\uFE0F", telephone_receiver: "\u{1F4DE}", telescope: "\u{1F52D}", tennis: "\u{1F3BE}", tent: "\u26FA", test_tube: "\u{1F9EA}", the_horns: "\u{1F918}", thermometer: "\u{1F321}\uFE0F", thinking_face: "\u{1F914}", third_place_medal: "\u{1F949}", thong_sandal: "\u{1FA74}", thought_balloon: "\u{1F4AD}", thread: "\u{1F9F5}", three: "3\uFE0F\u20E3", three_button_mouse: "\u{1F5B1}\uFE0F", thumbsdown: "\u{1F44E}", thumbsup: "\u{1F44D}", thunder_cloud_and_rain: "\u26C8\uFE0F", ticket: "\u{1F3AB}", tiger: "\u{1F42F}", tiger2: "\u{1F405}", timer_clock: "\u23F2\uFE0F", tired_face: "\u{1F62B}", tm: "\u2122\uFE0F", toilet: "\u{1F6BD}", tokyo_tower: "\u{1F5FC}", tomato: "\u{1F345}", tongue: "\u{1F445}", toolbox: "\u{1F9F0}", tooth: "\u{1F9B7}", toothbrush: "\u{1FAA5}", top: "\u{1F51D}", tophat: "\u{1F3A9}", tornado: "\u{1F32A}\uFE0F", tornado_cloud: "\u{1F32A}\uFE0F", trackball: "\u{1F5B2}\uFE0F", tractor: "\u{1F69C}", traffic_light: "\u{1F6A5}", train: "\u{1F68B}", train2: "\u{1F686}", tram: "\u{1F68A}", transgender_flag: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F", transgender_symbol: "\u26A7\uFE0F", treasure_chest: "\u{1FA8E}", triangular_flag_on_post: "\u{1F6A9}", triangular_ruler: "\u{1F4D0}", trident: "\u{1F531}", triumph: "\u{1F624}", troll: "\u{1F9CC}", trolleybus: "\u{1F68E}", trombone: "\u{1FA8A}", trophy: "\u{1F3C6}", tropical_drink: "\u{1F379}", tropical_fish: "\u{1F420}", truck: "\u{1F69A}", trumpet: "\u{1F3BA}", tshirt: "\u{1F455}", tulip: "\u{1F337}", tumbler_glass: "\u{1F943}", turkey: "\u{1F983}", turtle: "\u{1F422}", tv: "\u{1F4FA}", twisted_rightwards_arrows: "\u{1F500}", two: "2\uFE0F\u20E3", two_hearts: "\u{1F495}", two_men_holding_hands: "\u{1F46C}", two_women_holding_hands: "\u{1F46D}", u5272: "\u{1F239}", u5408: "\u{1F234}", u55b6: "\u{1F23A}", u6307: "\u{1F22F}", u6708: "\u{1F237}\uFE0F", u6709: "\u{1F236}", u6e80: "\u{1F235}", u7121: "\u{1F21A}", u7533: "\u{1F238}", u7981: "\u{1F232}", u7a7a: "\u{1F233}", uk: "\u{1F1EC}\u{1F1E7}", umbrella: "\u2602\uFE0F", umbrella_on_ground: "\u26F1\uFE0F", umbrella_with_rain_drops: "\u2614", unamused: "\u{1F612}", underage: "\u{1F51E}", unicorn_face: "\u{1F984}", unlock: "\u{1F513}", up: "\u{1F199}", upside_down_face: "\u{1F643}", us: "\u{1F1FA}\u{1F1F8}", v: "\u270C\uFE0F", vampire: "\u{1F9DB}", vertical_traffic_light: "\u{1F6A6}", vhs: "\u{1F4FC}", vibration_mode: "\u{1F4F3}", video_camera: "\u{1F4F9}", video_game: "\u{1F3AE}", violin: "\u{1F3BB}", virgo: "\u264D", volcano: "\u{1F30B}", volleyball: "\u{1F3D0}", vs: "\u{1F19A}", waffle: "\u{1F9C7}", walking: "\u{1F6B6}", waning_crescent_moon: "\u{1F318}", waning_gibbous_moon: "\u{1F316}", warning: "\u26A0\uFE0F", wastebasket: "\u{1F5D1}\uFE0F", watch: "\u231A", water_buffalo: "\u{1F403}", water_polo: "\u{1F93D}", watermelon: "\u{1F349}", wave: "\u{1F44B}", waving_black_flag: "\u{1F3F4}", waving_white_flag: "\u{1F3F3}\uFE0F", wavy_dash: "\u3030\uFE0F", waxing_crescent_moon: "\u{1F312}", waxing_gibbous_moon: "\u{1F314}", wc: "\u{1F6BE}", weary: "\u{1F629}", wedding: "\u{1F492}", weight_lifter: "\u{1F3CB}\uFE0F", whale: "\u{1F433}", whale2: "\u{1F40B}", wheel: "\u{1F6DE}", wheel_of_dharma: "\u2638\uFE0F", wheelchair: "\u267F", white_check_mark: "\u2705", white_circle: "\u26AA", white_flower: "\u{1F4AE}", white_frowning_face: "\u2639\uFE0F", white_haired_man: "\u{1F468}\u200D\u{1F9B3}", white_haired_person: "\u{1F9D1}\u200D\u{1F9B3}", white_haired_woman: "\u{1F469}\u200D\u{1F9B3}", white_heart: "\u{1F90D}", white_large_square: "\u2B1C", white_medium_small_square: "\u25FD", white_medium_square: "\u25FB\uFE0F", white_small_square: "\u25AB\uFE0F", white_square_button: "\u{1F533}", wilted_flower: "\u{1F940}", wind_blowing_face: "\u{1F32C}\uFE0F", wind_chime: "\u{1F390}", window: "\u{1FA9F}", wine_glass: "\u{1F377}", wing: "\u{1FABD}", wink: "\u{1F609}", wireless: "\u{1F6DC}", wolf: "\u{1F43A}", woman: "\u{1F469}", "woman-biking": "\u{1F6B4}\u200D\u2640\uFE0F", "woman-bouncing-ball": "\u26F9\uFE0F\u200D\u2640\uFE0F", "woman-bowing": "\u{1F647}\u200D\u2640\uFE0F", "woman-boy": "\u{1F469}\u200D\u{1F466}", "woman-boy-boy": "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "woman-cartwheeling": "\u{1F938}\u200D\u2640\uFE0F", "woman-facepalming": "\u{1F926}\u200D\u2640\uFE0F", "woman-frowning": "\u{1F64D}\u200D\u2640\uFE0F", "woman-gesturing-no": "\u{1F645}\u200D\u2640\uFE0F", "woman-gesturing-ok": "\u{1F646}\u200D\u2640\uFE0F", "woman-getting-haircut": "\u{1F487}\u200D\u2640\uFE0F", "woman-getting-massage": "\u{1F486}\u200D\u2640\uFE0F", "woman-girl": "\u{1F469}\u200D\u{1F467}", "woman-girl-boy": "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "woman-girl-girl": "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "woman-golfing": "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F", "woman-heart-man": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "woman-heart-woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}", "woman-juggling": "\u{1F939}\u200D\u2640\uFE0F", "woman-kiss-man": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "woman-kiss-woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}", "woman-lifting-weights": "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F", "woman-mountain-biking": "\u{1F6B5}\u200D\u2640\uFE0F", "woman-playing-handball": "\u{1F93E}\u200D\u2640\uFE0F", "woman-playing-water-polo": "\u{1F93D}\u200D\u2640\uFE0F", "woman-pouting": "\u{1F64E}\u200D\u2640\uFE0F", "woman-raising-hand": "\u{1F64B}\u200D\u2640\uFE0F", "woman-rowing-boat": "\u{1F6A3}\u200D\u2640\uFE0F", "woman-running": "\u{1F3C3}\u200D\u2640\uFE0F", "woman-shrugging": "\u{1F937}\u200D\u2640\uFE0F", "woman-surfing": "\u{1F3C4}\u200D\u2640\uFE0F", "woman-swimming": "\u{1F3CA}\u200D\u2640\uFE0F", "woman-tipping-hand": "\u{1F481}\u200D\u2640\uFE0F", "woman-walking": "\u{1F6B6}\u200D\u2640\uFE0F", "woman-wearing-turban": "\u{1F473}\u200D\u2640\uFE0F", "woman-with-bunny-ears-partying": "\u{1F46F}\u200D\u2640\uFE0F", "woman-woman-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}", "woman-woman-boy-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "woman-woman-girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}", "woman-woman-girl-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "woman-woman-girl-girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "woman-wrestling": "\u{1F93C}\u200D\u2640\uFE0F", woman_and_man_holding_hands: "\u{1F46B}", woman_climbing: "\u{1F9D7}\u200D\u2640\uFE0F", woman_feeding_baby: "\u{1F469}\u200D\u{1F37C}", woman_in_lotus_position: "\u{1F9D8}\u200D\u2640\uFE0F", woman_in_manual_wheelchair: "\u{1F469}\u200D\u{1F9BD}", woman_in_manual_wheelchair_facing_right: "\u{1F469}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", woman_in_motorized_wheelchair: "\u{1F469}\u200D\u{1F9BC}", woman_in_motorized_wheelchair_facing_right: "\u{1F469}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", woman_in_steamy_room: "\u{1F9D6}\u200D\u2640\uFE0F", woman_in_tuxedo: "\u{1F935}\u200D\u2640\uFE0F", woman_kneeling: "\u{1F9CE}\u200D\u2640\uFE0F", woman_kneeling_facing_right: "\u{1F9CE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", woman_running_facing_right: "\u{1F3C3}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", woman_standing: "\u{1F9CD}\u200D\u2640\uFE0F", woman_walking_facing_right: "\u{1F6B6}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", woman_with_beard: "\u{1F9D4}\u200D\u2640\uFE0F", woman_with_probing_cane: "\u{1F469}\u200D\u{1F9AF}", woman_with_veil: "\u{1F470}\u200D\u2640\uFE0F", woman_with_white_cane_facing_right: "\u{1F469}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", womans_clothes: "\u{1F45A}", womans_flat_shoe: "\u{1F97F}", womans_hat: "\u{1F452}", "women-with-bunny-ears-partying": "\u{1F46F}\u200D\u2640\uFE0F", women_holding_hands: "\u{1F46D}", womens: "\u{1F6BA}", wood: "\u{1FAB5}", woozy_face: "\u{1F974}", world_map: "\u{1F5FA}\uFE0F", worm: "\u{1FAB1}", worried: "\u{1F61F}", wrench: "\u{1F527}", wrestlers: "\u{1F93C}", writing_hand: "\u270D\uFE0F", x: "\u274C", "x-ray": "\u{1FA7B}", yarn: "\u{1F9F6}", yawning_face: "\u{1F971}", yellow_heart: "\u{1F49B}", yen: "\u{1F4B4}", yin_yang: "\u262F\uFE0F", "yo-yo": "\u{1FA80}", yum: "\u{1F60B}", zany_face: "\u{1F92A}", zap: "\u26A1", zebra_face: "\u{1F993}", zero: "0\uFE0F\u20E3", zipper_mouth_face: "\u{1F910}", zombie: "\u{1F9DF}", zzz: "\u{1F4A4}" };

// src/engine/emoji.ts
var SHORTCODES = emoji_shortcodes_default;
var SKIN_TONE = /[\u{1F3FB}-\u{1F3FF}]/gu;
var VARIATION_SELECTOR = /️/g;
var canonicalByName = /* @__PURE__ */ new Map();
var canonicalByChar = /* @__PURE__ */ new Map();
var charByCanonical = /* @__PURE__ */ new Map();
for (const name of Object.keys(SHORTCODES)) {
  const char = SHORTCODES[name];
  if (name.startsWith("skin-tone-")) continue;
  let canonical = canonicalByChar.get(char);
  if (canonical === void 0) {
    canonical = name;
    canonicalByChar.set(char, name);
    charByCanonical.set(name, char);
    const bare = char.replace(VARIATION_SELECTOR, "");
    if (bare !== char && !canonicalByChar.has(bare)) canonicalByChar.set(bare, name);
  }
  canonicalByName.set(name, canonical);
}
var TONE_CHARS = {
  "skin-tone-2": "\u{1F3FB}",
  "skin-tone-3": "\u{1F3FC}",
  "skin-tone-4": "\u{1F3FD}",
  "skin-tone-5": "\u{1F3FE}",
  "skin-tone-6": "\u{1F3FF}"
};
var UNICODE_EMOJI = /[\u{1F1E6}-\u{1F1FF}]{2}|[#*0-9]️?⃣|\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}]|‍\p{Extended_Pictographic})*/gu;
function canonicalEmoji(rawName) {
  const cut = rawName.indexOf("::");
  const name = cut < 0 ? rawName : rawName.slice(0, cut);
  if (name === "" || name.startsWith("skin-tone-")) return null;
  return canonicalByName.get(name) ?? name;
}
function isStandardEmoji(canonicalName) {
  return charByCanonical.has(canonicalName);
}
function emojiNameFromChar(sequence) {
  let name = canonicalByChar.get(sequence);
  if (name !== void 0) return name;
  const toneless = sequence.replace(SKIN_TONE, "");
  name = canonicalByChar.get(toneless);
  if (name !== void 0) return name;
  const bare = toneless.replace(VARIATION_SELECTOR, "");
  name = canonicalByChar.get(bare);
  if (name !== void 0) return name;
  const first = String.fromCodePoint(bare.codePointAt(0) ?? 0);
  return canonicalByChar.get(first) ?? null;
}
function emojiRef(canonicalName) {
  const char = charByCanonical.get(canonicalName);
  return char === void 0 ? { name: canonicalName } : { name: canonicalName, char };
}
function emojiChar(rawName, tone) {
  const canonical = canonicalByName.get(rawName);
  if (canonical === void 0) return void 0;
  const char = charByCanonical.get(canonical);
  const toneChar = tone === void 0 ? void 0 : TONE_CHARS[tone];
  if (toneChar === void 0) return char;
  const first = String.fromCodePoint(char.codePointAt(0) ?? 0);
  const rest = char.slice(first.length).replace(/^️/, "");
  return first + toneChar + rest;
}
var JOY = canonicalEmoji("joy") ?? "joy";
var ROFL = canonicalEmoji("rolling_on_the_floor_laughing") ?? "rolling_on_the_floor_laughing";

// src/engine/errors.ts
var SlackExportError = class extends Error {
  code;
  constructor(code, message, options) {
    super(message, options);
    this.name = "SlackExportError";
    this.code = code;
  }
};
var NotASlackExportError = class extends SlackExportError {
  constructor(message, options) {
    super("not-a-slack-export", message, options);
    this.name = "NotASlackExportError";
  }
};
var EmptyExportError = class extends SlackExportError {
  constructor(message, options) {
    super("no-messages", message, options);
    this.name = "EmptyExportError";
  }
};
function abortError(signal) {
  const reason = signal.reason;
  if (reason instanceof Error && reason.name === "AbortError") return reason;
  const message = reason instanceof Error && reason.message !== "" ? reason.message : typeof reason === "string" && reason !== "" ? reason : "The analysis was cancelled.";
  let error;
  if (typeof DOMException === "function") {
    error = new DOMException(message, "AbortError");
  } else {
    error = new Error(message);
    error.name = "AbortError";
  }
  if (reason !== void 0) Object.defineProperty(error, "cause", { value: reason, configurable: true, writable: true });
  return error;
}

// src/engine/hash.ts
var K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
function toHex(bytes) {
  let hex = "";
  for (let i = 0; i < bytes.length; i++) hex += bytes[i].toString(16).padStart(2, "0");
  return hex;
}
function sha256HexPlain(input) {
  const message = new TextEncoder().encode(input);
  const bitLength = message.length * 8;
  const padded = new Uint8Array((message.length + 8 >> 6) + 1 << 6);
  padded.set(message);
  padded[message.length] = 128;
  const view = new DataView(padded.buffer);
  view.setUint32(padded.length - 8, Math.floor(bitLength / 4294967296));
  view.setUint32(padded.length - 4, bitLength >>> 0);
  const h = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
  const w = new Uint32Array(64);
  const rotate = (x, n) => x >>> n | x << 32 - n;
  for (let block = 0; block < padded.length; block += 64) {
    for (let i = 0; i < 16; i++) w[i] = view.getUint32(block + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotate(w[i - 15], 7) ^ rotate(w[i - 15], 18) ^ w[i - 15] >>> 3;
      const s1 = rotate(w[i - 2], 17) ^ rotate(w[i - 2], 19) ^ w[i - 2] >>> 10;
      w[i] = w[i - 16] + s0 + w[i - 7] + s1 >>> 0;
    }
    let [a, b, c, d, e, f, g2, hh] = h;
    for (let i = 0; i < 64; i++) {
      const s1 = rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25);
      const choose = e & f ^ ~e & g2;
      const t1 = hh + s1 + choose + K[i] + w[i] >>> 0;
      const s0 = rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22);
      const majority = a & b ^ a & c ^ b & c;
      const t2 = s0 + majority >>> 0;
      hh = g2;
      g2 = f;
      f = e;
      e = d + t1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 >>> 0;
    }
    h[0] = h[0] + a >>> 0;
    h[1] = h[1] + b >>> 0;
    h[2] = h[2] + c >>> 0;
    h[3] = h[3] + d >>> 0;
    h[4] = h[4] + e >>> 0;
    h[5] = h[5] + f >>> 0;
    h[6] = h[6] + g2 >>> 0;
    h[7] = h[7] + hh >>> 0;
  }
  const out = new Uint8Array(32);
  const outView = new DataView(out.buffer);
  for (let i = 0; i < 8; i++) outView.setUint32(i * 4, h[i]);
  return toHex(out);
}
async function sha256Hex(input) {
  const subtle2 = typeof crypto === "undefined" ? void 0 : crypto.subtle;
  if (subtle2 === void 0) return sha256HexPlain(input);
  try {
    return toHex(new Uint8Array(await subtle2.digest("SHA-256", new TextEncoder().encode(input))));
  } catch {
    return sha256HexPlain(input);
  }
}

// src/engine/personality.ts
var MIN_MESSAGES = 50;
var THRESHOLDS = {
  nightShare: 0.1,
  earlyShare: 0.12,
  threadShare: 0.45,
  reactionsPerMessage: 1,
  typedEmojiPerMessage: 0.25,
  longAverage: 20,
  shortAverage: 7
};
function choosePersonality(input) {
  const messages = Math.max(1, input.messages);
  const nightShare = input.nightMessages / messages;
  const earlyShare = input.earlyMessages / messages;
  const threadShare = input.replies / messages;
  const reactionsPerMessage = input.reactions / messages;
  const typedEmojiPerMessage = input.typedEmoji / messages;
  const averageWords = input.words / messages;
  const peak = { label: "Peak hour", value: hourLabel(input.busiestHour) };
  const day = { label: "Busiest day", value: weekdayName(input.busiestWeekday) };
  const threads = { label: "In threads", value: formatPercent(threadShare) };
  const reactions = { label: "Reactions per message", value: formatRate(reactionsPerMessage) };
  const average = { label: "Average message", value: `${formatAverage(averageWords)} words` };
  const candidates = [
    {
      strength: nightShare / THRESHOLDS.nightShare,
      personality: {
        id: "night-owls",
        title: "The Night Owls",
        description: `Your best conversations happen after dark. ${formatPercent(nightShare)} of your messages were sent between 10pm and 5am.`,
        traits: [{ label: "After 10pm", value: formatPercent(nightShare) }, peak, day, threads]
      }
    },
    {
      strength: earlyShare / THRESHOLDS.earlyShare,
      personality: {
        id: "early-birds",
        title: "The Early Birds",
        description: `Up before the coffee is. ${formatPercent(earlyShare)} of your messages were sent before 8am.`,
        traits: [{ label: "Before 8am", value: formatPercent(earlyShare) }, peak, day, reactions]
      }
    },
    {
      strength: threadShare / THRESHOLDS.threadShare,
      personality: {
        id: "thread-heads",
        title: "The Thread-Heads",
        description: `Nothing stays in the main channel for long. ${formatPercent(threadShare)} of everything you wrote is tucked into a thread.`,
        traits: [threads, peak, day, reactions]
      }
    },
    {
      strength: reactionsPerMessage / THRESHOLDS.reactionsPerMessage,
      personality: {
        id: "hype-machine",
        title: "The Hype Machine",
        description: `Post something and the reactions roll in: ${formatRate(reactionsPerMessage)} per message. Nobody celebrates alone here.`,
        traits: [reactions, { label: "Reactions given", value: formatInt(input.reactions) }, peak, day]
      }
    },
    {
      strength: typedEmojiPerMessage / THRESHOLDS.typedEmojiPerMessage,
      personality: {
        id: "emoji-maximalists",
        title: "The Emoji Maximalists",
        description: `Why type it when you can emoji it? You used ${formatInt(input.emojiDistinct)} different emoji a total of ${formatInt(input.emojiTotal)} times.`,
        traits: [{ label: "Different emoji", value: formatInt(input.emojiDistinct) }, { label: "Emoji used", value: formatInt(input.emojiTotal) }, peak, day]
      }
    },
    {
      strength: averageWords / THRESHOLDS.longAverage,
      personality: {
        id: "novelists",
        title: "The Novelists",
        description: `Short answers are for other teams. Your average message runs ${formatAverage(averageWords)} words.`,
        traits: [average, peak, day, threads]
      }
    },
    {
      strength: averageWords > 0 ? THRESHOLDS.shortAverage / averageWords : 0,
      personality: {
        id: "rapid-fire",
        title: "The Rapid-Fire Crew",
        description: `Short, fast and constant. Your average message is ${formatAverage(averageWords)} words long.`,
        traits: [average, peak, day, reactions]
      }
    }
  ];
  let best;
  if (input.messages >= MIN_MESSAGES) {
    for (const candidate of candidates) {
      if (candidate.strength >= 1 && (best === void 0 || candidate.strength > best.strength)) best = candidate;
    }
  }
  if (best !== void 0) return best.personality;
  return {
    id: "steady-hands",
    title: "The Steady Hands",
    description: `No 3am chaos and no walls of text. Just a steady hum of conversation that peaks around ${hourLabel(input.busiestHour)}.`,
    traits: [average, peak, day, threads]
  };
}

// ../../../node_modules/@zip.js/zip.js/lib/zip-core-base.js
init_configuration();

// ../../../node_modules/@zip.js/zip.js/lib/core/codec-worker-web.js
init_constants();
init_array();
init_error();
init_codec_stream();
init_codec_worker();
var MODULE_WORKER_OPTIONS = { type: "module" };
var ERROR_EVENT_TYPE = "error";
var MESSAGE_ERROR_EVENT_TYPE = "messageerror";
var ABORT_EVENT_TYPE = "abort";
var webWorkerSource;
var webWorkerURI;
var webWorkerOptions;
setWebWorkerBackend(createWebWorkerInterface);
function createWebWorkerInterface(workerData, config2) {
  const { baseURI, chunkSize, workerStartupTimeout } = config2;
  let { wasmURI } = config2;
  if (!workerData.interface) {
    if (typeof wasmURI == FUNCTION_TYPE) {
      wasmURI = wasmURI();
    }
    let worker;
    try {
      worker = getWebWorker(workerData.workerURI, baseURI, workerData);
    } catch {
      disableWebWorker(workerData);
      return createWorkerInterface(workerData, config2);
    }
    Object.assign(workerData, {
      worker,
      workerAlive: false,
      terminated: false,
      startupError: null,
      interface: {
        run: async () => {
          try {
            return await runWebWorker(workerData, { chunkSize, wasmURI, baseURI, workerStartupTimeout });
          } catch (error) {
            if (error && error.workerStartupFailed) {
              disableWebWorker(workerData);
              releaseWorkerStreams(workerData);
              return runWorker(workerData, config2);
            }
            if (error && error.codecImportFailed) {
              if (workerData.reader) {
                releaseWorkerStreams(workerData);
                return runWorker(workerData, config2);
              }
              workerData.onTaskFinished();
            }
            throw error;
          }
        }
      }
    });
  }
  return workerData.interface;
}
async function runWebWorker(workerData, config2) {
  if (!workerData.worker) {
    const { startupError } = workerData;
    workerData.startupError = null;
    const error = startupError || new Error(ERR_WORKER_STARTUP_TIMEOUT);
    error.workerStartupFailed = true;
    throw error;
  }
  let resolveResult, rejectResult;
  const result = new Promise((resolve2, reject) => {
    resolveResult = resolve2;
    rejectResult = (error) => {
      const { outputSize, workerOptions } = workerData;
      workerOptions.outputSize = outputSize;
      if (isErrorObject(error)) {
        try {
          error.outputSize = outputSize;
        } catch {
        }
      }
      reject(error);
    };
  });
  Object.assign(workerData, {
    reader: null,
    writer: null,
    outputSize: 0,
    destinationFailed: false,
    destinationError: null,
    resolveResult,
    rejectResult,
    result
  });
  const { readable, options } = workerData;
  const { writable, closed, abortPipe } = watchClosedStream(workerData.writable, workerData);
  try {
    sendMessage({
      type: MESSAGE_START,
      options,
      config: config2
    }, workerData);
  } catch (error) {
    abortPipe();
    try {
      await closed;
    } catch {
    }
    workerData.onTaskFinished();
    throw error;
  }
  Object.assign(workerData, {
    reader: readable.getReader(),
    writer: writable.getWriter()
  });
  const { workerStartupTimeout } = config2;
  if (!workerData.workerAlive && Number.isFinite(workerStartupTimeout) && workerStartupTimeout >= 0) {
    workerData.startupTimeout = setTimeout(() => onStartupTimeout(workerData), workerStartupTimeout);
  }
  try {
    const resultValue = await result;
    await closeWritable();
    await closed;
    return resultValue;
  } catch (error) {
    await closeWritable();
    abortPipe();
    try {
      await closed;
    } catch {
    }
    const { outputSize, workerOptions, destinationFailed, destinationError } = workerData;
    workerOptions.outputSize = outputSize;
    const workerFailed = isErrorObject(error) && (error.codecImportFailed || error.workerStartupFailed);
    const reportedError = destinationFailed && !workerFailed ? destinationError : error;
    if (isErrorObject(reportedError)) {
      try {
        reportedError.outputSize = outputSize;
      } catch {
      }
    }
    throw reportedError;
  }
  async function closeWritable() {
    if (!writable.locked) {
      try {
        await writable.getWriter().close();
      } catch {
      }
    }
  }
}
function watchClosedStream(writableSource, workerData) {
  const abortController = new AbortController();
  let aborting;
  const { writable, readable } = new TransformStream({
    transform(chunk, controller) {
      workerData.outputSize += chunk.length;
      controller.enqueue(chunk);
    }
  });
  const closed = readable.pipeTo(writableSource, { preventClose: true, preventAbort: true, signal: abortController.signal });
  closed.catch((error) => {
    if (!aborting) {
      Object.assign(workerData, { destinationFailed: true, destinationError: error });
    }
  });
  const { signal } = workerData.workerOptions.streamOptions;
  if (signal) {
    const onAbort = () => abortController.abort(signal.reason);
    const removeAbortListener = () => signal.removeEventListener(ABORT_EVENT_TYPE, onAbort);
    signal.addEventListener(ABORT_EVENT_TYPE, onAbort);
    closed.then(removeAbortListener, removeAbortListener);
  }
  return {
    writable,
    closed,
    abortPipe: () => {
      aborting = true;
      abortController.abort();
    }
  };
}
function releaseWorkerStreams(workerData) {
  const { reader } = workerData;
  if (reader) {
    reader.releaseLock();
  }
  workerData.reader = null;
  workerData.writer = null;
}
function terminateWorker(workerData) {
  const { worker } = workerData;
  if (worker) {
    try {
      worker.terminate();
    } catch {
    }
  }
  workerData.interface = null;
}
function getWebWorker(url, baseURI, workerData, isModuleType, useBlobURI = true) {
  const { createWorker } = workerData;
  let worker, resolvedURI, resolvedOptions;
  if (createWorker) {
    worker = createWorker();
  } else if (webWorkerURI === UNDEFINED_VALUE || webWorkerSource !== url) {
    const isFunctionURI = typeof url == FUNCTION_TYPE;
    if (isFunctionURI) {
      resolvedURI = url(useBlobURI);
    } else {
      resolvedURI = url;
    }
    const isDataURI = resolvedURI.startsWith("data:");
    const isBlobURI = resolvedURI.startsWith("blob:");
    if (isDataURI || isBlobURI) {
      if (isModuleType === UNDEFINED_VALUE) {
        isModuleType = false;
      }
      if (isModuleType) {
        resolvedOptions = MODULE_WORKER_OPTIONS;
      }
      try {
        worker = new Worker(resolvedURI, resolvedOptions);
      } catch (error) {
        if (isBlobURI) {
          try {
            URL.revokeObjectURL(resolvedURI);
          } catch {
          }
        }
        if (isFunctionURI && isBlobURI) {
          return getWebWorker(url, baseURI, workerData, isModuleType, false);
        } else if (!isModuleType) {
          return getWebWorker(url, baseURI, workerData, true, false);
        } else {
          throw error;
        }
      }
    } else {
      if (isModuleType === UNDEFINED_VALUE) {
        isModuleType = true;
      }
      if (isModuleType) {
        resolvedOptions = MODULE_WORKER_OPTIONS;
      }
      try {
        resolvedURI = new URL(resolvedURI, baseURI);
      } catch {
      }
      try {
        worker = new Worker(resolvedURI, resolvedOptions);
      } catch (error) {
        if (isModuleType) {
          return getWebWorker(url, baseURI, workerData, false, useBlobURI);
        } else {
          throw error;
        }
      }
    }
    webWorkerSource = url;
    webWorkerURI = resolvedURI;
    webWorkerOptions = resolvedOptions;
  } else {
    worker = new Worker(webWorkerURI, webWorkerOptions);
  }
  worker.addEventListener(MESSAGE_EVENT_TYPE, (event) => {
    workerData.workerAlive = true;
    clearStartupTimeout(workerData);
    onMessage(event, workerData);
  });
  worker.addEventListener(ERROR_EVENT_TYPE, (event) => onWorkerError(event, workerData));
  worker.addEventListener(MESSAGE_ERROR_EVENT_TYPE, (event) => onWorkerError(event, workerData));
  return worker;
}
function onStartupTimeout(workerData) {
  workerData.startupTimeout = null;
  if (workerData.workerAlive) {
    return;
  }
  const { rejectResult, writer } = workerData;
  terminateWorker(workerData);
  workerData.worker = null;
  if (rejectResult) {
    const error = new Error(ERR_WORKER_STARTUP_TIMEOUT);
    error.workerStartupFailed = true;
    rejectResult(error);
    if (writer) {
      writer.releaseLock();
    }
  }
}
function clearStartupTimeout(workerData) {
  const { startupTimeout } = workerData;
  if (startupTimeout) {
    clearTimeout(startupTimeout);
    workerData.startupTimeout = null;
  }
}
function onWorkerError(event, workerData) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  clearStartupTimeout(workerData);
  const { workerAlive, rejectResult, writer, onTaskFinished } = workerData;
  terminateWorker(workerData);
  if (!workerAlive) {
    workerData.worker = null;
  }
  let error = event.error || new Error(event.message || ERROR_EVENT_TYPE);
  if (!workerAlive) {
    error = Object.assign(new Error(error.message || ERROR_EVENT_TYPE), { workerStartupFailed: true });
    workerData.startupError = error;
  }
  if (rejectResult) {
    rejectResult(error);
    if (writer) {
      writer.releaseLock();
    }
    if (workerAlive) {
      onTaskFinished();
    }
  }
}
function sendMessage(message, { worker, writer }) {
  try {
    const { value } = message;
    if (value) {
      message.value = toExactUint8Array(value);
      try {
        worker.postMessage(message, [message.value.buffer]);
      } catch {
        worker.postMessage(message);
      }
    } else {
      worker.postMessage(message);
    }
  } catch (error) {
    if (writer) {
      writer.releaseLock();
    }
    throw error;
  }
}
async function onMessage({ data }, workerData) {
  const { type, value, messageId, result, error, errorValue } = data;
  const { reader, writer, resolveResult, rejectResult, onTaskFinished, generation } = workerData;
  const stale = () => workerData.generation != generation;
  try {
    if (error) {
      fail(getResponseError(error, errorValue));
    } else {
      if (type == MESSAGE_PULL) {
        const { value: value2, done } = await reader.read();
        if (!stale()) {
          sendMessage({ type: MESSAGE_DATA, value: value2, done, messageId }, workerData);
        }
      }
      if (type == MESSAGE_DATA) {
        const chunk = new Uint8Array(value);
        await writer.ready;
        await writer.write(chunk);
        if (!stale()) {
          sendMessage({ type: MESSAGE_ACK_DATA, messageId }, workerData);
        }
      }
      if (type == MESSAGE_CLOSE) {
        succeed(result);
      }
    }
  } catch (error2) {
    if (!stale()) {
      terminateWorker(workerData);
      fail(error2);
    }
  }
  function fail(error2) {
    if (!stale()) {
      rejectResult(error2);
      releaseWriter();
      if (!(isErrorObject(error2) && error2.codecImportFailed)) {
        onTaskFinished();
      }
    }
  }
  function succeed(result2) {
    if (!stale()) {
      resolveResult(result2);
      releaseWriter();
      onTaskFinished();
    }
  }
  function releaseWriter() {
    if (writer) {
      writer.releaseLock();
    }
  }
}
function getResponseError(errorData, errorValue) {
  const { message, stack, code, name, outputSize, cause, codecImportFailed } = errorData;
  let responseError;
  if (errorValue) {
    responseError = errorValue.value;
  } else {
    responseError = Object.assign(new Error(message), { stack, code, name });
  }
  if (isErrorObject(responseError)) {
    try {
      if (outputSize !== UNDEFINED_VALUE) {
        responseError.outputSize = outputSize;
      }
      if (codecImportFailed) {
        responseError.codecImportFailed = true;
      }
      if (cause) {
        if (!isErrorObject(responseError.cause)) {
          responseError.cause = Object.assign(new Error(cause.message), { name: cause.name });
        }
        if (cause.code !== UNDEFINED_VALUE && responseError.cause.code !== cause.code) {
          responseError.cause.code = cause.code;
        }
      }
      if (errorValue) {
        if (responseError.name !== name) {
          responseError.name = name;
        }
        if (responseError.code !== code) {
          responseError.code = code;
        }
      }
    } catch {
    }
  }
  return responseError;
}

// ../../../node_modules/@zip.js/zip.js/lib/zip-core-reader.js
init_zip_reader();

// ../../../node_modules/@zip.js/zip.js/lib/core/zip-writer.js
init_constants();
init_configuration();
init_codec_registry();
init_codec_worker();
init_codec_pool();
init_io();
init_encode_text();
init_array();
init_warnings();
init_compatible_streams();
init_error();
init_zip_entry();
init_options();
var ERR_DUPLICATED_NAME = "File already exists";
var ERR_INVALID_COMMENT = "Zip file comment exceeds 64KB";
var ERR_INVALID_COMMENT_TYPE = "Invalid zip file comment (must be a Uint8Array)";
var ERR_INVALID_ENTRY_COMMENT = "File entry comment exceeds 64KB";
var ERR_INVALID_ENTRY_COMMENT_TYPE = "Invalid file entry comment (must be a string)";
var ERR_INVALID_DATE = "Invalid date (must be a valid Date instance)";
var ERR_INVALID_ENTRY_NAME = "File entry name exceeds 64KB";
var ERR_INVALID_VERSION = "Version exceeds 65535";
var ERR_INVALID_ENCRYPTION_STRENGTH = "The strength must equal 1, 2, or 3";
var ERR_UNSUPPORTED_ENCRYPTION_USDZ = "Encryption is not supported in USDZ files";
var ERR_UNSUPPORTED_SPLIT_USDZ = "Split zip files are not supported in USDZ files";
var ERR_UNSUPPORTED_ENCRYPTION_PASS_THROUGH = "Encryption is not supported when the 'passThrough' option is set to true (use 'compressed' instead)";
var ERR_INVALID_EXTRAFIELD = "Invalid extra field (must be a Map)";
var ERR_INVALID_EXTRAFIELD_TYPE = "Invalid extra field type (must be integer 0..65535)";
var ERR_INVALID_EXTRAFIELD_DATA_TYPE = "Invalid extra field data (must be a Uint8Array)";
var ERR_INVALID_EXTRAFIELD_DATA = "Extra field data exceeds 64KB";
var MIN_UNIX_TIME = -2147483648;
var MAX_UNIX_TIME = 2147483647;
var MIN_NTFS_TIME = BigInt(0);
var MAX_NTFS_TIME = BigInt("0x7fffffffffffffff");
var ERR_UNSUPPORTED_FORMAT = "Zip64 is not supported (set the 'zip64' option to 'true')";
var ERR_UNDEFINED_UNCOMPRESSED_SIZE = "Undefined uncompressed size";
var ERR_UNDEFINED_COMPRESSION_METHOD = "Undefined compression method";
var ERR_UNDEFINED_CRC32 = "Undefined CRC32";
var ERR_UNDEFINED_READER = "Undefined reader";
var ERR_INVALID_READER = "Invalid reader (must be a Reader instance, a ReadableStream instance, or an object with a 'readable' property)";
var ERR_ZIP_NOT_EMPTY = "Zip file not empty";
var ERR_INVALID_UID = "Invalid uid (must be integer 0..2^32-1)";
var ERR_INVALID_GID = "Invalid gid (must be integer 0..2^32-1)";
var ERR_INVALID_UNIX_MODE = "Invalid UNIX mode (must be integer 0..65535)";
var ERR_INVALID_UNIX_EXTRA_FIELD_TYPE = "Invalid unixExtraFieldType (must be 'infozip' or 'unix')";
var ERR_INVALID_UNIX_ID_SIZE = "uid/gid must be 0..65535 for unixExtraFieldType 'unix' (use 'infozip' for larger ids)";
var ERR_INVALID_MSDOS_ATTRIBUTES = "Invalid msdosAttributesRaw (must be integer 0..255)";
var ERR_INVALID_MSDOS_DATA = "Invalid msdosAttributes (must be an object with boolean flags)";
var ERR_INVALID_LEVEL = "Invalid level (must be integer 0..9)";
var ERR_INVALID_UNCOMPRESSED_SIZE_OPTION = "Invalid uncompressedSize option (must be a non-negative integer)";
var ERR_INVALID_SIGNATURE_DATA = "Signature data exceeds 64KB";
var ERR_INVALID_ENTRY = "Invalid entry option (must be an entry returned by ZipReader#getEntries())";
var ERR_ZIP_CRYPTO_LAST_MOD_DATE = "The last modification date of an entry encrypted with ZipCrypto cannot be changed when passThrough is set";
var WARNING_COMPRESSION_UNAVAILABLE = "compression unavailable";
var WARNING_CLAMPED_LAST_MODIFICATION_DATE = "clamped last modification date";
var EXTRAFIELD_DATA_AES = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
var EXTRAFIELD_OFFSET_AES_VENDOR_VERSION = 4;
var EXTRAFIELD_OFFSET_AES_COMPRESSION_METHOD = 9;
var EXTRAFIELD_USDZ_MAX_LENGTH = 67;
var MIN_PRINTABLE_ASCII_CHARACTER_CODE = 32;
var MAX_PRINTABLE_ASCII_CHARACTER_CODE = 126;
var VENDOR_VERSION_AE_12 = 1;
var INFOZIP_EXTRA_FIELD_TYPE = "infozip";
var UNIX_EXTRA_FIELD_TYPE = "unix";
var LEVEL_BY_BITFLAG_LEVEL = [8, 9, 5, 3];
var MAX_LEVEL = 9;
var workers = 0;
var pendingEntries = [];
var ZipWriter = class {
  constructor(writer, options = {}) {
    writer = new GenericWriter(writer);
    const { availableSize = INFINITY_VALUE, maxSize = INFINITY_VALUE } = writer;
    const addSplitZipSignature = availableSize > 0 && availableSize !== INFINITY_VALUE && maxSize > 0 && maxSize !== INFINITY_VALUE;
    if (addSplitZipSignature && options[OPTION_USDZ]) {
      throw new Error(ERR_UNSUPPORTED_SPLIT_USDZ);
    }
    Object.assign(this, {
      writer,
      addSplitZipSignature,
      options,
      fileEntries: /* @__PURE__ */ new Map(),
      filenames: /* @__PURE__ */ new Set(),
      offset: options[OPTION_OFFSET] === UNDEFINED_VALUE ? writer.size || writer.writable.size || 0 : options[OPTION_OFFSET],
      initialOffset: options[OPTION_OFFSET] === UNDEFINED_VALUE ? 0 : options[OPTION_OFFSET] - (writer.size || writer.writable.size || 0),
      pendingAddFileCalls: /* @__PURE__ */ new Set(),
      pendingErrors: [],
      warnings: [],
      bufferedWrites: 0,
      directWrites: 0,
      lastFileEntry: UNDEFINED_VALUE,
      archiveClosed: false
    });
  }
  prependZip(reader) {
    return watchPromiseError(this, prependZipEntries(this, reader));
  }
  appendZip(reader, options = {}) {
    return watchPromiseError(this, appendZipEntries(this, reader, options));
  }
  add(name = "", reader, options = {}) {
    const zipWriter = this;
    const { pendingAddFileCalls } = zipWriter;
    const promiseAddFile = addFileEntry(zipWriter, name, reader, options);
    pendingAddFileCalls.add(promiseAddFile);
    const deletePendingAddFileCall = () => pendingAddFileCalls.delete(promiseAddFile);
    Promise.prototype.then.call(promiseAddFile, deletePendingAddFileCall, deletePendingAddFileCall);
    return watchPromiseError(zipWriter, promiseAddFile);
  }
  remove(entry) {
    const { filenames, fileEntries } = this;
    if (typeof entry == STRING_TYPE) {
      entry = fileEntries.get(entry);
    }
    if (entry && entry.filename !== UNDEFINED_VALUE) {
      const { filename } = entry;
      if (filenames.has(filename) && fileEntries.has(filename)) {
        filenames.delete(filename);
        fileEntries.delete(filename);
        return true;
      }
    }
    return false;
  }
  close(comment = EMPTY_UINT8_ARRAY, options = {}) {
    const zipWriter = this;
    if (zipWriter.archiveClosed) {
      return Promise.resolve(getWriterData(zipWriter.writer));
    }
    if (!zipWriter.pendingClose) {
      zipWriter.pendingClose = closeArchive(zipWriter, comment, options).finally(() => zipWriter.pendingClose = UNDEFINED_VALUE);
    }
    return zipWriter.pendingClose;
  }
  [SYMBOL_ASYNC_DISPOSE]() {
    return this.close();
  }
};
async function closeArchive(zipWriter, comment, options) {
  const { pendingAddFileCalls, writer } = zipWriter;
  const { writable } = writer;
  if (!(comment instanceof Uint8Array)) {
    throw new Error(ERR_INVALID_COMMENT_TYPE);
  }
  if (getLength(comment) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_COMMENT);
  }
  while (pendingAddFileCalls.size) {
    await Promise.allSettled(Array.from(pendingAddFileCalls));
  }
  await Promise.allSettled(zipWriter.pendingErrors.map((watcher) => watcher.recorded));
  const unobservedWatchers = zipWriter.pendingErrors.filter((watcher) => watcher.failed && !watcher.observed);
  if (unobservedWatchers.length) {
    const unobservedErrors = unobservedWatchers.map((watcher) => watcher.error);
    unobservedWatchers.forEach((watcher) => watcher.observed = true);
    const [error] = unobservedErrors;
    try {
      error.entryErrors = unobservedErrors;
    } catch {
    }
    throw error;
  }
  await closeFile(zipWriter, comment, options);
  zipWriter.archiveClosed = true;
  const preventClose = !ownsWritable(writer) && getOptionValue2(zipWriter, options, OPTION_PREVENT_CLOSE);
  if (!preventClose) {
    await writable.getWriter().close();
  }
  return getWriterData(writer);
}
var WatchedPromise = class extends Promise {
  then(onFulfilled, onRejected) {
    const { watcher } = this;
    if (watcher) {
      watcher.observed = true;
    }
    return super.then(onFulfilled, onRejected);
  }
};
function getWriterData(writer) {
  return writer.getData ? writer.getData() : writer.writable;
}
function watchPromiseError(zipWriter, promise) {
  const watchedPromise = new WatchedPromise((resolve2, reject) => Promise.prototype.then.call(promise, resolve2, reject));
  const watcher = {};
  watchedPromise.watcher = watcher;
  watcher.recorded = Promise.prototype.then.call(
    watchedPromise,
    UNDEFINED_VALUE,
    (error) => Object.assign(watcher, { failed: true, error })
  );
  zipWriter.pendingErrors.push(watcher);
  return watchedPromise;
}
async function appendZipEntries(zipWriter, reader, options = {}) {
  const { pendingAddFileCalls, filenames, fileEntries } = zipWriter;
  const filter = checkFunctionOption(options.filter);
  const readerOptions = checkReaderOptionsObject(options.readerOptions);
  while (pendingAddFileCalls.size) {
    await Promise.allSettled(Array.from(pendingAddFileCalls));
  }
  let resolveAppendZip;
  const promiseAppendZip = new Promise((resolve2) => resolveAppendZip = resolve2);
  pendingAddFileCalls.add(promiseAppendZip);
  const appendedFilenames = [];
  let releaseLockWriter;
  try {
    reader = new GenericReader(reader);
    await initStream(reader);
    if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
      reader = new BlobReader(await streamToBlob(reader.readable));
      await initStream(reader);
    }
    const { ZipReader: ZipReader2, getEntryDataDescriptorLength: getEntryDataDescriptorLength2 } = await Promise.resolve().then(() => (init_zip_reader(), zip_reader_exports));
    const zipReader = new ZipReader2(reader, readerOptions);
    const keptEntries = [];
    let entries;
    try {
      entries = await zipReader.getEntries();
      for (const entry of entries) {
        if (!filter || await filter(entry, getExistingEntry(fileEntries, entry.filename))) {
          keptEntries.push(entry);
        }
      }
    } finally {
      await zipReader.close();
    }
    await initStream(zipWriter.writer);
    const { directoryOffset, entriesMissingZip64ExtraField } = zipReader;
    keptEntries.forEach((entry) => {
      const { filename } = entry;
      if (entriesMissingZip64ExtraField.has(entry)) {
        throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
      }
      if (filenames.has(filename)) {
        throw new Error(ERR_DUPLICATED_NAME);
      }
      filenames.add(filename);
      appendedFilenames.push(filename);
    });
    zipWriter.writerLocked = true;
    const { lockWriter } = zipWriter;
    zipWriter.lockWriter = new Promise((resolve2) => releaseLockWriter = () => {
      zipWriter.writerLocked = false;
      resolve2();
    });
    await lockWriter;
    if (zipWriter.addSplitZipSignature) {
      delete zipWriter.addSplitZipSignature;
      if (filter || !await startsWithSplitZipSignature2(reader)) {
        await writeData(zipWriter.writer, getSplitZipSignatureArray());
        zipWriter.offset += SPLIT_ZIP_FILE_SIGNATURE_LENGTH;
      }
    }
    const entryPositions = await copyZipData(zipWriter, reader, entries, keptEntries, directoryOffset, Boolean(filter), getEntryDataDescriptorLength2);
    keptEntries.forEach((entry) => {
      const {
        version,
        rawLastModDate,
        rawFilename,
        rawBitFlag,
        uncompressedSize,
        compressedSize,
        extraFieldZip64
      } = entry;
      let {
        compressionMethod,
        rawExtraField
      } = entry;
      rawExtraField = removeExtraFieldZip64(rawExtraField || EMPTY_UINT8_ARRAY);
      if (entry.extraFieldAES) {
        compressionMethod = COMPRESSION_METHOD_AES;
      }
      const extraFieldLength = getLength(rawExtraField);
      const zip64UncompressedSize = Boolean(extraFieldZip64) && extraFieldZip64.uncompressedSize !== UNDEFINED_VALUE;
      const zip64CompressedSize = Boolean(extraFieldZip64) && extraFieldZip64.compressedSize !== UNDEFINED_VALUE;
      const {
        headerArray,
        headerView
      } = getHeaderArrayData({
        version,
        bitFlag: rawBitFlag,
        compressionMethod,
        uncompressedSize,
        compressedSize,
        rawLastModDate,
        rawFilename,
        zip64CompressedSize,
        zip64UncompressedSize,
        extraFieldLength
      });
      const { crc32 } = entry;
      if (crc32 !== UNDEFINED_VALUE) {
        setUint32(headerView, HEADER_OFFSET_SIGNATURE, crc32);
      }
      const { offset, diskNumberStart } = entryPositions.get(entry);
      fileEntries.set(entry.filename, Object.assign({}, entry, {
        zip64Enabled: true,
        zip64UncompressedSize,
        zip64CompressedSize,
        offset,
        diskNumberStart,
        zip64DiskNumberStart: false,
        rawExtraFieldZip64: EMPTY_UINT8_ARRAY,
        rawExtraFieldAES: EMPTY_UINT8_ARRAY,
        rawExtraFieldExtendedTimestamp: EMPTY_UINT8_ARRAY,
        rawExtraFieldNTFS: EMPTY_UINT8_ARRAY,
        rawExtraFieldUnix: EMPTY_UINT8_ARRAY,
        rawCentralExtraFieldUnix: EMPTY_UINT8_ARRAY,
        rawExtraField,
        rawCentralExtraField: EMPTY_UINT8_ARRAY,
        headerArray,
        headerView
      }));
    });
  } catch (error) {
    appendedFilenames.forEach((filename) => filenames.delete(filename));
    throw error;
  } finally {
    resolveAppendZip();
    pendingAddFileCalls.delete(promiseAppendZip);
    if (releaseLockWriter) {
      releaseLockWriter();
    }
  }
}
function getExistingEntry(fileEntries, filename) {
  const fileEntry = fileEntries.get(filename);
  return fileEntry ? new Entry(fileEntry) : UNDEFINED_VALUE;
}
async function prependZipEntries(zipWriter, reader) {
  if (zipWriter.filenames.size) {
    throw new Error(ERR_ZIP_NOT_EMPTY);
  }
  await appendZipEntries(zipWriter, reader);
}
async function addFileEntry(zipWriter, name, reader, options) {
  options = Object.assign({}, options);
  const entry = options[OPTION_ENTRY];
  if (entry !== UNDEFINED_VALUE) {
    const { entryOptions, passThroughOptions } = getSourceEntryOptions(
      entry,
      checkPassThroughOption(getOptionValue2(zipWriter, options, OPTION_PASS_THROUGH)),
      getOptionValue2(zipWriter, options, PROPERTY_NAME_LAST_MODIFICATION_DATE)
    );
    delete options[OPTION_ENTRY];
    options = Object.assign(entryOptions, passThroughOptions, options);
  }
  if (getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY) && !name.endsWith(DIRECTORY_SIGNATURE)) {
    name += DIRECTORY_SIGNATURE;
  }
  if (zipWriter.filenames.has(name)) {
    throw new Error(ERR_DUPLICATED_NAME);
  }
  zipWriter.filenames.add(name);
  if (workers < getConfiguration().maxWorkers) {
    workers++;
  } else {
    await new Promise((resolve2) => pendingEntries.push(resolve2));
  }
  try {
    return await addFile(zipWriter, name, reader, options);
  } catch (error) {
    zipWriter.filenames.delete(name);
    throw error;
  } finally {
    const pendingEntry = pendingEntries.shift();
    if (pendingEntry) {
      pendingEntry();
    } else {
      workers--;
    }
  }
}
async function addFile(zipWriter, name, reader, options) {
  const attributesInfo = resolveAttributes(zipWriter, name, options);
  ({ name } = attributesInfo);
  const metadataInfo = resolveMetadata(zipWriter, name, options);
  const { comment } = metadataInfo;
  const extraField = options[PROPERTY_NAME_EXTRA_FIELD];
  zipWriter.fileEntries.set(name, UNDEFINED_VALUE);
  const previousFileEntry = zipWriter.lastFileEntry;
  const pendingFileEntry = {};
  let releaseLockFileEntry;
  if (metadataInfo.resolvedOptions.keepOrder) {
    pendingFileEntry.lockFileEntry = new Promise((resolve2) => releaseLockFileEntry = resolve2);
  }
  zipWriter.lastFileEntry = pendingFileEntry;
  let fileEntry;
  try {
    const { resolvedOptions } = metadataInfo;
    if (resolvedOptions.level != 0 && resolvedOptions.compressionMethod === UNDEFINED_VALUE && !resolvedOptions.passThroughCompression && !await supportsDeflate(getConfiguration())) {
      resolvedOptions.level = 0;
      addWarning(zipWriter.warnings, WARNING_COMPRESSION_UNAVAILABLE, name);
    }
    const sizesInfo = await resolveSizes(zipWriter, reader, metadataInfo, options);
    ({ reader } = sizesInfo);
    const diskOffset = getDiskOffset2(zipWriter.writer);
    const diskNumber = getDiskNumber(zipWriter.writer);
    let crc32 = options.crc32 === UNDEFINED_VALUE ? options[PROPERTY_NAME_SIGNATURE] : options.crc32;
    const storesAE2 = sizesInfo.resolvedOptions.encrypted && !resolvedOptions.zipCrypto;
    if (resolvedOptions.passThroughCompression && !resolvedOptions.passThroughEncryption && storesAE2) {
      crc32 = UNDEFINED_VALUE;
    }
    if (resolvedOptions.passThroughCompression && reader && !storesAE2 && crc32 === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_CRC32);
    }
    options = Object.assign({}, options, attributesInfo.resolvedOptions, metadataInfo.resolvedOptions, sizesInfo.resolvedOptions, {
      signature: options[PROPERTY_NAME_SIGNATURE],
      crc32,
      offset: zipWriter.offset - diskOffset,
      diskNumberStart: diskNumber,
      [OPTION_USDZ]: zipWriter.options[OPTION_USDZ]
    });
    const headerInfo = getHeaderInfo(options);
    if (headerInfo.lastModDateClamped) {
      addWarning(zipWriter.warnings, WARNING_CLAMPED_LAST_MODIFICATION_DATE, name);
    }
    const dataDescriptorInfo = getDataDescriptorInfo(options);
    const metadataSize = getLength(headerInfo.localHeaderArray, dataDescriptorInfo.dataDescriptorArray);
    fileEntry = await getFileEntry(zipWriter, name, reader, {
      headerInfo,
      dataDescriptorInfo,
      metadataSize,
      fileEntry: pendingFileEntry,
      previousFileEntry,
      releaseLockFileEntry
    }, options);
  } catch (error) {
    zipWriter.fileEntries.delete(name);
    throw error;
  } finally {
    if (releaseLockFileEntry) {
      releaseLockFileEntry(previousFileEntry && previousFileEntry.lockFileEntry);
    }
  }
  Object.assign(fileEntry, {
    name,
    comment,
    extraField
  });
  return new Entry(fileEntry);
}
function getSourceEntryOptions(entry, passThrough, lastModDateOverride) {
  if (entry === null || typeof entry != OBJECT_TYPE || Array.isArray(entry)) {
    throw new Error(ERR_INVALID_ENTRY);
  }
  const {
    externalFileAttributes,
    versionMadeBy,
    comment,
    lastModDate,
    rawLastModDate,
    creationDate,
    lastAccessDate,
    uncompressedSize,
    encrypted,
    zipCrypto,
    crc32,
    compressionMethod,
    extraFieldAES,
    extraFieldUnix,
    internalFileAttributes,
    extraField,
    bitFlag,
    directory,
    uid,
    gid
  } = entry;
  const entryOptions = {
    externalFileAttributes,
    versionMadeBy,
    comment,
    lastModDate,
    creationDate,
    lastAccessDate,
    internalFileAttributes,
    directory
  };
  if (bitFlag && bitFlag.languageEncodingFlag) {
    entryOptions[OPTION_USE_UNICODE_FILE_NAMES] = true;
  }
  const userExtraField = getUserExtraField(extraField);
  if (userExtraField) {
    entryOptions[PROPERTY_NAME_EXTRA_FIELD] = userExtraField;
  }
  if (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE) {
    Object.assign(entryOptions, {
      uid,
      gid,
      unixExtraFieldType: extraFieldUnix ? UNIX_EXTRA_FIELD_TYPE : INFOZIP_EXTRA_FIELD_TYPE
    });
  }
  const passThroughOptions = {};
  if (passThrough && !directory) {
    Object.assign(passThroughOptions, {
      uncompressedSize,
      crc32,
      compressionMethod
    });
    if (passThrough !== PASS_THROUGH_COMPRESSED) {
      Object.assign(passThroughOptions, {
        encrypted,
        zipCrypto,
        encryptionStrength: extraFieldAES ? extraFieldAES.strength : UNDEFINED_VALUE
      });
    }
    if (bitFlag) {
      passThroughOptions.dataDescriptor = bitFlag.dataDescriptor;
      passThroughOptions[OPTION_LEVEL] = LEVEL_BY_BITFLAG_LEVEL[bitFlag.level];
    }
    if (lastModDateOverride === UNDEFINED_VALUE) {
      passThroughOptions.rawLastModDate = rawLastModDate;
    } else if (passThrough !== PASS_THROUGH_COMPRESSED && zipCrypto && (!bitFlag || bitFlag.dataDescriptor) && lastModDateOverride instanceof Date && getDosTimeHighByte(lastModDateOverride) != (rawLastModDate >>> 8 & MAX_8_BITS)) {
      throw new Error(ERR_ZIP_CRYPTO_LAST_MOD_DATE);
    }
  }
  return { entryOptions, passThroughOptions };
}
function getDosTimeHighByte(lastModDate) {
  let dosLastModDate = new Date(Math.ceil(Math.floor(lastModDate.getTime() / 1e3) / 2) * 2e3);
  if (dosLastModDate < MIN_DATE) {
    dosLastModDate = MIN_DATE;
  } else if (dosLastModDate > MAX_DATE) {
    dosLastModDate = MAX_DATE;
  }
  return (dosLastModDate.getHours() << 3 | dosLastModDate.getMinutes() >> 3) & MAX_8_BITS;
}
function resolveAttributes(zipWriter, name, options) {
  let msDosCompatible = getOptionValue2(zipWriter, options, PROPERTY_NAME_MS_DOS_COMPATIBLE);
  let versionMadeBy = getOptionValue2(zipWriter, options, PROPERTY_NAME_VERSION_MADE_BY, msDosCompatible ? VERSION_MADE_BY_MSDOS : VERSION_MADE_BY_UNIX);
  const executable = getOptionValue2(zipWriter, options, PROPERTY_NAME_EXECUTABLE);
  const uid = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_UID);
  const gid = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_GID);
  let unixMode = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_UNIX_MODE);
  let unixExtraFieldType = getOptionValue2(zipWriter, options, OPTION_UNIX_EXTRA_FIELD_TYPE);
  let setuid = getOptionValue2(zipWriter, options, PROPERTY_NAME_SETUID);
  let setgid = getOptionValue2(zipWriter, options, PROPERTY_NAME_SETGID);
  let sticky = getOptionValue2(zipWriter, options, PROPERTY_NAME_STICKY);
  checkIntegerOption(uid, MAX_32_BITS, ERR_INVALID_UID);
  checkIntegerOption(gid, MAX_32_BITS, ERR_INVALID_GID);
  checkIntegerOption(unixMode, MAX_16_BITS, ERR_INVALID_UNIX_MODE);
  if (unixExtraFieldType !== UNDEFINED_VALUE && unixExtraFieldType !== INFOZIP_EXTRA_FIELD_TYPE && unixExtraFieldType !== UNIX_EXTRA_FIELD_TYPE) {
    throw new Error(ERR_INVALID_UNIX_EXTRA_FIELD_TYPE);
  }
  if (unixExtraFieldType === UNIX_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE && uid > MAX_16_BITS || gid !== UNDEFINED_VALUE && gid > MAX_16_BITS)) {
    throw new Error(ERR_INVALID_UNIX_ID_SIZE);
  }
  if (unixExtraFieldType === UNDEFINED_VALUE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
    unixExtraFieldType = INFOZIP_EXTRA_FIELD_TYPE;
  }
  let msdosAttributesRaw = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW);
  let msdosAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_MSDOS_ATTRIBUTES);
  const hasUnixMetadata = uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE || unixMode !== UNDEFINED_VALUE || unixExtraFieldType || executable;
  const hasMsDosProvided = msdosAttributesRaw !== UNDEFINED_VALUE || msdosAttributes !== UNDEFINED_VALUE;
  if (hasUnixMetadata) {
    msDosCompatible = false;
    versionMadeBy = versionMadeBy & MAX_8_BITS | VERSION_MADE_BY_UNIX;
  } else if (hasMsDosProvided) {
    msDosCompatible = true;
    versionMadeBy = versionMadeBy & MAX_8_BITS;
  }
  checkIntegerOption(msdosAttributesRaw, MAX_8_BITS, ERR_INVALID_MSDOS_ATTRIBUTES);
  if (msdosAttributes && (typeof msdosAttributes !== OBJECT_TYPE || Array.isArray(msdosAttributes))) {
    throw new Error(ERR_INVALID_MSDOS_DATA);
  }
  if (versionMadeBy > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  let externalFileAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES);
  const externalFileAttributesProvided = externalFileAttributes !== UNDEFINED_VALUE;
  if (!externalFileAttributesProvided) {
    externalFileAttributes = 0;
  }
  if (!options[PROPERTY_NAME_DIRECTORY] && name.endsWith(DIRECTORY_SIGNATURE)) {
    options[PROPERTY_NAME_DIRECTORY] = true;
  }
  const directory = getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY);
  if (directory) {
    if (!name.endsWith(DIRECTORY_SIGNATURE)) {
      name += DIRECTORY_SIGNATURE;
    }
    if (!externalFileAttributesProvided) {
      externalFileAttributes = FILE_ATTR_MSDOS_DIR_MASK;
      if (!msDosCompatible) {
        externalFileAttributes |= (FILE_ATTR_UNIX_TYPE_DIR | FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_DEFAULT_MASK) << 16;
      }
    }
  } else if (!msDosCompatible && !externalFileAttributesProvided) {
    if (executable) {
      externalFileAttributes = (FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_DEFAULT_MASK) << 16;
    } else {
      externalFileAttributes = FILE_ATTR_UNIX_DEFAULT_MASK << 16;
    }
  }
  if (!msDosCompatible) {
    const unixModeProvided = unixMode !== UNDEFINED_VALUE || Boolean(setuid || setgid || sticky);
    const defaultUnixMode = externalFileAttributes >> 16 & MAX_16_BITS;
    unixMode = unixMode === UNDEFINED_VALUE ? defaultUnixMode : unixMode & MAX_16_BITS;
    if (setuid) {
      unixMode |= FILE_ATTR_UNIX_SETUID_MASK;
    } else {
      setuid = Boolean(unixMode & FILE_ATTR_UNIX_SETUID_MASK);
    }
    if (setgid) {
      unixMode |= FILE_ATTR_UNIX_SETGID_MASK;
    } else {
      setgid = Boolean(unixMode & FILE_ATTR_UNIX_SETGID_MASK);
    }
    if (sticky) {
      unixMode |= FILE_ATTR_UNIX_STICKY_MASK;
    } else {
      sticky = Boolean(unixMode & FILE_ATTR_UNIX_STICKY_MASK);
    }
    if (!externalFileAttributesProvided || unixModeProvided) {
      if (directory) {
        unixMode = unixMode & ~FILE_ATTR_UNIX_TYPE_MASK | FILE_ATTR_UNIX_TYPE_DIR;
      } else if (!(unixMode & FILE_ATTR_UNIX_TYPE_MASK)) {
        unixMode |= FILE_ATTR_UNIX_TYPE_FILE;
      }
      externalFileAttributes = (unixMode & MAX_16_BITS) << 16 | externalFileAttributes & MAX_16_BITS;
    }
  }
  ({ msdosAttributesRaw, msdosAttributes } = normalizeMsdosAttributes(msdosAttributesRaw, msdosAttributes));
  if (hasMsDosProvided) {
    externalFileAttributes = externalFileAttributes & MAX_32_BITS | msdosAttributesRaw & MAX_8_BITS;
  }
  const unixExternalUpper = externalFileAttributes >> 16 & MAX_16_BITS;
  const symlink = unixMode !== UNDEFINED_VALUE && (unixMode & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_SYMLINK;
  return {
    name,
    resolvedOptions: {
      versionMadeBy,
      msDosCompatible: Boolean(msDosCompatible),
      externalFileAttributes,
      unixExternalUpper,
      uid,
      gid,
      unixMode,
      unixExtraFieldType,
      symlink,
      setuid,
      setgid,
      sticky,
      msdosAttributesRaw,
      msdosAttributes
    }
  };
}
function resolveMetadata(zipWriter, name, options) {
  const encode = getFunctionOptionValue2(zipWriter, options, OPTION_ENCODE_TEXT) || encodeText;
  let rawFilename = encode(name, TEXT_TYPE_FILENAME);
  if (rawFilename === UNDEFINED_VALUE) {
    rawFilename = encodeText(name);
  }
  if (getLength(rawFilename) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_NAME);
  }
  const comment = options[PROPERTY_NAME_COMMENT] || "";
  if (typeof comment != STRING_TYPE) {
    throw new Error(ERR_INVALID_ENTRY_COMMENT_TYPE);
  }
  let rawComment = encode(comment, TEXT_TYPE_COMMENT);
  if (rawComment === UNDEFINED_VALUE) {
    rawComment = encodeText(comment);
  }
  if (getLength(rawComment) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_COMMENT);
  }
  const version = getOptionValue2(zipWriter, options, PROPERTY_NAME_VERSION);
  if (version !== UNDEFINED_VALUE && version > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  const lastModDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_LAST_MODIFICATION_DATE, /* @__PURE__ */ new Date());
  const rawLastModDate = getOptionValue2(zipWriter, options, PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  const lastAccessDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_LAST_ACCESS_DATE);
  const creationDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_CREATION_DATE);
  const internalFileAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES, 0);
  const passThrough = checkPassThroughOption(getOptionValue2(zipWriter, options, OPTION_PASS_THROUGH));
  const passThroughCompression = Boolean(passThrough);
  const passThroughEncryption = passThrough === true;
  let password = getOptionValue2(zipWriter, options, OPTION_PASSWORD);
  let rawPassword = getOptionValue2(zipWriter, options, OPTION_RAW_PASSWORD);
  checkPasswordOption(password, rawPassword);
  password = password && password.length ? password : UNDEFINED_VALUE;
  rawPassword = rawPassword && rawPassword.length ? rawPassword : UNDEFINED_VALUE;
  const encryptionStrength = getNumberOptionValue(zipWriter, options, OPTION_ENCRYPTION_STRENGTH, 3);
  const zipCrypto = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIPCRYPTO);
  const extendedTimestamp = getOptionValue2(zipWriter, options, OPTION_EXTENDED_TIMESTAMP, true);
  const ntfsTimestamp = getOptionValue2(zipWriter, options, OPTION_NTFS_TIMESTAMP);
  const keepOrder = getOptionValue2(zipWriter, options, OPTION_KEEP_ORDER, true);
  const useWebWorkers = getOptionValue2(zipWriter, options, OPTION_USE_WEB_WORKERS);
  const bufferedWrite = getOptionValue2(zipWriter, options, OPTION_BUFFERED_WRITE);
  const createTempStream = getFunctionOptionValue2(zipWriter, options, OPTION_CREATE_TEMP_STREAM);
  const dataDescriptorSignature = getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR_SIGNATURE, true);
  const signal = checkSignalOption(getOptionValue2(zipWriter, options, OPTION_SIGNAL));
  throwIfAborted(signal);
  const useUnicodeFileNames = getOptionValue2(
    zipWriter,
    options,
    OPTION_USE_UNICODE_FILE_NAMES,
    !isPrintableASCIIText(rawFilename) || !isPrintableASCIIText(rawComment)
  );
  const compressionMethod = getOptionValue2(zipWriter, options, PROPERTY_NAME_COMPRESSION_METHOD);
  const registeredCodec = passThroughCompression || compressionMethod === UNDEFINED_VALUE ? UNDEFINED_VALUE : getRegisteredCodec(compressionMethod);
  if (!passThroughCompression && compressionMethod !== UNDEFINED_VALUE && compressionMethod !== COMPRESSION_METHOD_STORE && compressionMethod !== COMPRESSION_METHOD_DEFLATE && !registeredCodec) {
    throw new Error(ERR_UNSUPPORTED_COMPRESSION);
  }
  let level = getNumberOptionValue(zipWriter, options, OPTION_LEVEL);
  checkIntegerOption(level, MAX_LEVEL, ERR_INVALID_LEVEL);
  if (zipWriter.options[OPTION_USDZ]) {
    if (password !== UNDEFINED_VALUE || rawPassword !== UNDEFINED_VALUE) {
      throw new Error(ERR_UNSUPPORTED_ENCRYPTION_USDZ);
    }
    if (level === UNDEFINED_VALUE && compressionMethod === UNDEFINED_VALUE) {
      level = 0;
    }
  }
  if (passThroughCompression) {
    level = toNumber(options[OPTION_LEVEL]);
  }
  let useCompressionStream = getOptionValue2(zipWriter, options, OPTION_USE_COMPRESSION_STREAM);
  let dataDescriptor = getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR);
  if (bufferedWrite && dataDescriptor === UNDEFINED_VALUE) {
    dataDescriptor = false;
  }
  if (dataDescriptor === UNDEFINED_VALUE || zipCrypto && !passThroughEncryption) {
    dataDescriptor = true;
  }
  if (level !== UNDEFINED_VALUE && level != 6) {
    useCompressionStream = false;
  }
  const zip64 = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIP64);
  if (!zipCrypto && (password !== UNDEFINED_VALUE || rawPassword !== UNDEFINED_VALUE) && !(Number.isInteger(encryptionStrength) && encryptionStrength >= 1 && encryptionStrength <= 3)) {
    throw new Error(ERR_INVALID_ENCRYPTION_STRENGTH);
  }
  const rawExtraField = serializeExtraField(options[PROPERTY_NAME_EXTRA_FIELD]);
  const rawLocalExtraField = serializeExtraField(options[OPTION_LOCAL_EXTRA_FIELD]);
  const rawCentralExtraField = serializeExtraField(options[OPTION_CENTRAL_EXTRA_FIELD]);
  return {
    comment,
    resolvedOptions: {
      rawFilename,
      rawComment,
      version,
      lastModDate,
      rawLastModDate,
      lastAccessDate,
      creationDate,
      internalFileAttributes,
      passThroughCompression,
      passThroughEncryption,
      password,
      rawPassword,
      encryptionStrength,
      zipCrypto,
      extendedTimestamp,
      ntfsTimestamp,
      keepOrder,
      useWebWorkers,
      bufferedWrite,
      createTempStream,
      dataDescriptorSignature,
      signal,
      useUnicodeFileNames,
      compressionMethod,
      format: registeredCodec ? registeredCodec.format : UNDEFINED_VALUE,
      codecURI: registeredCodec ? registeredCodec.codecURI : UNDEFINED_VALUE,
      codecVersionNeeded: registeredCodec ? registeredCodec.versionNeeded : UNDEFINED_VALUE,
      level,
      useCompressionStream,
      dataDescriptor,
      zip64,
      rawExtraField,
      rawLocalExtraField,
      rawCentralExtraField
    }
  };
}
function serializeExtraField(extraField) {
  if (!extraField) {
    return EMPTY_UINT8_ARRAY;
  }
  if (!(extraField instanceof Map)) {
    throw new Error(ERR_INVALID_EXTRAFIELD);
  }
  let extraFieldSize = 0;
  let offset = 0;
  extraField.forEach((data, type) => {
    checkInteger(type, MAX_16_BITS, ERR_INVALID_EXTRAFIELD_TYPE);
    if (!(data instanceof Uint8Array)) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA_TYPE);
    }
    if (getLength(data) > MAX_16_BITS) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
    }
    extraFieldSize += 4 + getLength(data);
  });
  const rawExtraField = new Uint8Array(extraFieldSize);
  const rawExtraFieldView = getDataView(rawExtraField);
  extraField.forEach((data, type) => {
    setUint16(rawExtraFieldView, offset, type);
    setUint16(rawExtraFieldView, offset + 2, getLength(data));
    arraySet(rawExtraField, data, offset + 4);
    offset += 4 + getLength(data);
  });
  return rawExtraField;
}
async function resolveSizes(zipWriter, reader, { resolvedOptions: metadata }, options) {
  if (metadata.passThroughCompression && !reader && !getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY)) {
    throw new Error(ERR_UNDEFINED_READER);
  }
  let contentSize;
  if (reader) {
    reader = new GenericReader(reader);
    await initStream(reader);
    if (!reader.readUint8Array && !reader.readable) {
      throw new Error(ERR_INVALID_READER);
    }
    ({ size: contentSize } = reader);
  }
  return Object.assign({ reader }, resolveEntrySizes(zipWriter, Boolean(reader), contentSize, metadata, options));
}
function resolveEntrySizes(zipWriter, hasContent, contentSize, metadata, options) {
  const { passThroughCompression, passThroughEncryption, zipCrypto, password, rawPassword, encryptionStrength } = metadata;
  let { dataDescriptor, zip64, level, compressionMethod } = metadata;
  let maximumCompressedSize = 0;
  let uncompressedSize = 0;
  let unknownSize = false;
  const uncompressedSizeOption = toNumber(options[PROPERTY_NAME_UNCOMPRESSED_SIZE]);
  checkIntegerOption(uncompressedSizeOption, Number.MAX_SAFE_INTEGER, ERR_INVALID_UNCOMPRESSED_SIZE_OPTION);
  if (passThroughCompression && hasContent) {
    uncompressedSize = uncompressedSizeOption;
    if (uncompressedSize === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_UNCOMPRESSED_SIZE);
    }
    if (compressionMethod === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_COMPRESSION_METHOD);
    }
  }
  const zip64Enabled = zip64 === true;
  const encrypted = getOptionValue2(zipWriter, options, PROPERTY_NAME_ENCRYPTED);
  if (hasContent && passThroughEncryption && !encrypted && getLength(password, rawPassword)) {
    throw new Error(ERR_UNSUPPORTED_ENCRYPTION_PASS_THROUGH);
  }
  const encryptedEntry = hasContent && (Boolean(password && getLength(password) || rawPassword && getLength(rawPassword)) || passThroughEncryption && encrypted);
  if (!hasContent) {
    level = 0;
    compressionMethod = COMPRESSION_METHOD_STORE;
  }
  const encryptionOverhead = getEncryptionOverhead(encryptedEntry, zipCrypto, encryptionStrength);
  if (hasContent) {
    if (!passThroughCompression) {
      const expectedSize = contentSize === UNDEFINED_VALUE ? uncompressedSizeOption : contentSize;
      if (expectedSize === UNDEFINED_VALUE) {
        if (zip64 || zip64 === UNDEFINED_VALUE) {
          zip64 = unknownSize = true;
          maximumCompressedSize = MAX_32_BITS + 1;
        }
      } else {
        options.uncompressedSize = uncompressedSize = expectedSize;
        maximumCompressedSize = (isCompressed(compressionMethod, level) ? getMaximumCompressedSize(uncompressedSize) : uncompressedSize) + encryptionOverhead;
      }
    } else {
      options.uncompressedSize = uncompressedSize;
      maximumCompressedSize = contentSize === UNDEFINED_VALUE ? getMaximumCompressedSize(uncompressedSize) + encryptionOverhead : contentSize + (passThroughEncryption ? 0 : encryptionOverhead);
    }
  }
  const emptyEntry = !encryptedEntry && (!hasContent || contentSize === 0 && !passThroughCompression) && !isCompressed(compressionMethod, level);
  const crc32Provided = options.crc32 !== UNDEFINED_VALUE || options[PROPERTY_NAME_SIGNATURE] !== UNDEFINED_VALUE;
  const completeHeader = passThroughCompression && hasContent && contentSize !== UNDEFINED_VALUE && !(encryptedEntry && zipCrypto) && (crc32Provided || encryptedEntry && !zipCrypto);
  if ((emptyEntry || completeHeader) && getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR) === UNDEFINED_VALUE) {
    dataDescriptor = false;
  }
  const zip64UncompressedSize = zip64Enabled || unknownSize || uncompressedSize >= MAX_32_BITS;
  const zip64CompressedSize = zip64Enabled || maximumCompressedSize >= MAX_32_BITS;
  if (zip64UncompressedSize || zip64CompressedSize) {
    if (zip64 === false) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  }
  zip64 = zip64 || false;
  return {
    maximumCompressedSize,
    resolvedOptions: {
      dataDescriptor,
      emptyEntry,
      completeHeader,
      knownCompressedSize: completeHeader ? maximumCompressedSize : UNDEFINED_VALUE,
      zip64,
      zip64Enabled,
      unknownSize,
      zip64UncompressedSize,
      zip64CompressedSize,
      uncompressedSize,
      level,
      compressionMethod,
      encrypted: encryptedEntry
    }
  };
}
async function getFileEntry(zipWriter, name, reader, entryInfo, options) {
  const {
    fileEntries,
    writer
  } = zipWriter;
  const {
    keepOrder,
    dataDescriptor,
    emptyEntry,
    completeHeader,
    signal
  } = options;
  const {
    headerInfo,
    fileEntry: pendingFileEntry,
    previousFileEntry,
    releaseLockFileEntry
  } = entryInfo;
  const usdz = zipWriter.options[OPTION_USDZ];
  let fileEntry = pendingFileEntry;
  let bufferedWrite;
  let directWrite;
  let releaseLockWriter;
  let writingBufferedEntryData;
  let writingEntryData;
  let writerSizeBeforeEntry;
  let flushedBufferedSize = 0;
  let fileWriter;
  const lockPreviousFileEntry = keepOrder && previousFileEntry ? previousFileEntry.lockFileEntry : UNDEFINED_VALUE;
  fileEntries.set(name, fileEntry);
  try {
    if (options.bufferedWrite || !keepOrder || zipWriter.writerLocked || zipWriter.bufferedWrites || zipWriter.directWrites || !dataDescriptor && !emptyEntry && !completeHeader) {
      bufferedWrite = true;
      zipWriter.bufferedWrites++;
      if (options.createTempStream) {
        fileWriter = await options.createTempStream();
      } else {
        fileWriter = new TransformStream(UNDEFINED_VALUE, UNDEFINED_VALUE, { highWaterMark: INFINITY_VALUE });
      }
      fileWriter.size = 0;
      await initStream(writer);
    } else {
      directWrite = true;
      zipWriter.directWrites++;
      fileWriter = writer;
      await lockPreviousFileEntry;
      await requestLockWriter();
    }
    await initStream(fileWriter);
    const diskOffset = getDiskOffset2(writer);
    if (zipWriter.addSplitZipSignature && !bufferedWrite) {
      await writeSplitZipSignature(zipWriter, writer);
    }
    if (usdz && !bufferedWrite) {
      appendExtraFieldUSDZ(entryInfo, zipWriter.offset - diskOffset);
    }
    const { localHeaderArray } = headerInfo;
    if (!bufferedWrite) {
      await skipDiskIfNeeded();
    }
    const diskNumberStart = getDiskNumber(writer);
    const entryOffset = getSegmentOffset(zipWriter, writer);
    fileEntry.diskNumberStart = diskNumberStart;
    if (!bufferedWrite) {
      writingEntryData = true;
      writerSizeBeforeEntry = writer.size;
      await writeData(fileWriter, localHeaderArray);
    }
    fileEntry = await createFileEntry(reader, fileWriter, fileEntry, entryInfo, getConfiguration(), options);
    if (!bufferedWrite) {
      writingEntryData = false;
    }
    fileEntries.set(name, fileEntry);
    fileEntry.filename = name;
    if (bufferedWrite) {
      await Promise.all([fileWriter.writable.getWriter().close(), lockPreviousFileEntry]);
      await requestLockWriter();
      if (zipWriter.addSplitZipSignature) {
        await writeSplitZipSignature(zipWriter, writer);
      }
      writingBufferedEntryData = true;
      writerSizeBeforeEntry = writer.size;
      await skipDiskIfNeeded();
      fileEntry.diskNumberStart = getDiskNumber(writer);
      fileEntry.offset = getSegmentOffset(zipWriter, writer);
      if (usdz) {
        const previousMetadataSize = entryInfo.metadataSize;
        appendExtraFieldUSDZ(entryInfo, zipWriter.offset - getDiskOffset2(writer));
        fileEntry.size += entryInfo.metadataSize - previousMetadataSize;
      }
      updateLocalHeader(fileEntry, headerInfo.localHeaderView, options);
      await writeData(writer, headerInfo.localHeaderArray);
      await flushBufferedData(fileWriter.readable, writer, signal, (chunkLength) => flushedBufferedSize += chunkLength);
      writer.size += fileWriter.size;
      writingBufferedEntryData = false;
    } else {
      fileEntry.diskNumberStart = diskNumberStart;
      fileEntry.offset = entryOffset;
    }
    zipWriter.offset += fileEntry.size;
    return fileEntry;
  } catch (error) {
    if (writingBufferedEntryData || writingEntryData) {
      zipWriter.hasCorruptedEntries = true;
      if (error) {
        try {
          error.corruptedEntry = true;
        } catch {
        }
      }
      zipWriter.offset += writer.size - writerSizeBeforeEntry;
      if (bufferedWrite) {
        zipWriter.offset += flushedBufferedSize;
      }
    }
    fileEntries.delete(name);
    throw error;
  } finally {
    if (bufferedWrite) {
      zipWriter.bufferedWrites--;
    }
    if (directWrite) {
      zipWriter.directWrites--;
    }
    if (releaseLockFileEntry) {
      releaseLockFileEntry(lockPreviousFileEntry);
    }
    if (releaseLockWriter) {
      releaseLockWriter();
    }
    if (bufferedWrite && fileWriter && fileWriter.dispose) {
      try {
        await fileWriter.dispose();
      } catch {
      }
    }
  }
  async function requestLockWriter() {
    zipWriter.writerLocked = true;
    const { lockWriter } = zipWriter;
    zipWriter.lockWriter = new Promise((resolve2) => releaseLockWriter = () => {
      zipWriter.writerLocked = false;
      resolve2();
    });
    await lockWriter;
  }
  async function skipDiskIfNeeded() {
    if (exceedsAvailableSize(writer, getLength(headerInfo.localHeaderArray))) {
      await writer.closeDisk();
    }
  }
}
async function createFileEntry(reader, writer, { diskNumberStart, lockFileEntry }, entryInfo, config2, options) {
  const {
    headerInfo,
    dataDescriptorInfo,
    metadataSize
  } = entryInfo;
  const {
    headerArray,
    headerView,
    lastModDate,
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    rawExtraFieldZip64,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawCentralExtraFieldUnix,
    rawExtraFieldAES
  } = headerInfo;
  const { dataDescriptorArray } = dataDescriptorInfo;
  const {
    rawFilename,
    lastAccessDate,
    creationDate,
    password,
    rawPassword,
    level,
    useUnicodeFileNames,
    zip64,
    zip64Enabled,
    zip64UncompressedSize,
    zip64CompressedSize,
    zipCrypto,
    dataDescriptor,
    directory,
    executable,
    versionMadeBy,
    rawComment,
    rawExtraField,
    rawCentralExtraField,
    useWebWorkers,
    onstart,
    onprogress,
    onend,
    signal,
    encryptionStrength,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttributes,
    externalFileAttributes,
    uid,
    gid,
    unixMode,
    symlink,
    setuid,
    setgid,
    sticky,
    unixExternalUpper,
    msdosAttributesRaw,
    msdosAttributes,
    useCompressionStream,
    passThroughCompression,
    passThroughEncryption,
    format,
    codecURI
  } = options;
  const fileEntry = {
    lockFileEntry,
    versionMadeBy,
    zip64,
    zip64Enabled,
    directory: Boolean(directory),
    executable: Boolean(executable),
    filenameUTF8: Boolean(useUnicodeFileNames),
    rawFilename,
    commentUTF8: Boolean(useUnicodeFileNames),
    rawComment,
    rawExtraFieldZip64,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawCentralExtraFieldUnix,
    rawExtraFieldAES,
    rawExtraField,
    rawCentralExtraField,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttributes,
    externalFileAttributes,
    diskNumberStart,
    uid,
    gid,
    unixMode,
    symlink: Boolean(symlink),
    setuid,
    setgid,
    sticky,
    unixExternalUpper,
    msdosAttributesRaw,
    msdosAttributes
  };
  let {
    crc32,
    uncompressedSize
  } = options;
  let compressedSize = 0;
  if (!passThroughCompression) {
    uncompressedSize = 0;
  }
  const { writable } = writer;
  if (reader) {
    const size = reader.size;
    const readable = toCompatibleReadable(createReadable(reader, { size }));
    const workerOptions = {
      options: {
        codecType: CODEC_DEFLATE,
        inputSize: size,
        level,
        rawPassword,
        password,
        encryptionStrength,
        zipCrypto: encrypted && zipCrypto,
        passwordVerification: encrypted && zipCrypto && rawLastModDate >> 8 & MAX_8_BITS,
        computeCrc32: !passThroughCompression,
        compressed: compressed && !passThroughCompression,
        encrypted: encrypted && !passThroughEncryption,
        useWebWorkers,
        useCompressionStream,
        format,
        codecURI,
        compressionMethod
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    try {
      const result = await runWorker2({ readable, writable }, workerOptions);
      compressedSize = result.outputSize;
      writer.size += compressedSize;
      throwIfAborted(signal);
      if (!passThroughCompression) {
        uncompressedSize = result.inputSize;
        if (!encrypted || zipCrypto) {
          crc32 = result.crc32;
        }
      }
      if (!zip64CompressedSize && compressedSize >= MAX_32_BITS || !zip64UncompressedSize && uncompressedSize >= MAX_32_BITS) {
        throw new Error(ERR_UNSUPPORTED_FORMAT);
      }
    } catch (error) {
      const { outputSize: failedOutputSize } = workerOptions;
      if (failedOutputSize !== UNDEFINED_VALUE) {
        writer.size += failedOutputSize;
      } else if (isErrorObject(error) && error.outputSize !== UNDEFINED_VALUE) {
        writer.size += error.outputSize;
      }
      throw error;
    }
  }
  setEntryInfo({
    crc32,
    compressedSize,
    uncompressedSize,
    headerInfo,
    dataDescriptorInfo
  }, options);
  if (dataDescriptor) {
    await writeData(writer, dataDescriptorArray);
  }
  Object.assign(fileEntry, {
    uncompressedSize,
    compressedSize,
    lastModDate,
    rawLastModDate,
    creationDate,
    lastAccessDate,
    encrypted: Boolean(encrypted),
    zipCrypto: Boolean(zipCrypto),
    size: metadataSize + compressedSize,
    compressionMethod,
    version,
    headerArray,
    headerView,
    signature: crc32,
    crc32: encrypted && !zipCrypto && !passThroughCompression ? UNDEFINED_VALUE : crc32,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    zip64UncompressedSize,
    zip64CompressedSize
  });
  return fileEntry;
}
function getHeaderInfo(options) {
  const {
    rawFilename,
    lastModDate,
    rawLastModDate: rawLastModDateOption,
    lastAccessDate,
    creationDate,
    level,
    zip64,
    zipCrypto,
    useUnicodeFileNames,
    dataDescriptor,
    directory,
    rawExtraField,
    rawLocalExtraField,
    encryptionStrength,
    extendedTimestamp,
    ntfsTimestamp,
    passThroughCompression,
    encrypted,
    zip64UncompressedSize,
    zip64CompressedSize,
    uncompressedSize,
    knownCompressedSize,
    unknownSize,
    crc32
  } = options;
  let { version, compressionMethod } = options;
  const compressedSize = dataDescriptor ? UNDEFINED_VALUE : knownCompressedSize;
  const compressed = !directory && isCompressed(compressionMethod, level);
  let rawLocalExtraFieldZip64;
  const uncompressedFile = passThroughCompression || !compressed;
  const zip64ExtraFieldComplete = zip64 && (options.bufferedWrite || !dataDescriptor || (!zip64UncompressedSize && !zip64CompressedSize || uncompressedFile && !unknownSize));
  const writeLocalExtraFieldZip64 = zip64ExtraFieldComplete || zip64 && dataDescriptor && (zip64UncompressedSize || zip64CompressedSize);
  if (zip64 && (zip64UncompressedSize || zip64CompressedSize)) {
    const length = 4 + 16;
    const extraFieldZip64 = createRecordWriter(length);
    extraFieldZip64.writeUint16(EXTRAFIELD_TYPE_ZIP64);
    extraFieldZip64.writeUint16(length - 4);
    rawLocalExtraFieldZip64 = extraFieldZip64.array;
    if (zip64ExtraFieldComplete) {
      extraFieldZip64.writeUint64(uncompressedSize);
      if (uncompressedFile) {
        const encryptionOverhead = getEncryptionOverhead(encrypted, zipCrypto, encryptionStrength);
        extraFieldZip64.writeUint64(passThroughCompression ? compressedSize === UNDEFINED_VALUE ? 0 : compressedSize : uncompressedSize + encryptionOverhead);
      }
    }
  } else {
    rawLocalExtraFieldZip64 = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldAES;
  if (encrypted && !zipCrypto) {
    const extraFieldAES = createRecordWriter(getLength(EXTRAFIELD_DATA_AES) + 2);
    extraFieldAES.writeUint16(EXTRAFIELD_TYPE_AES);
    extraFieldAES.writeBytes(EXTRAFIELD_DATA_AES);
    rawExtraFieldAES = extraFieldAES.array;
    rawExtraFieldAES[8] = encryptionStrength;
  } else {
    rawExtraFieldAES = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldNTFS;
  let rawExtraFieldExtendedTimestamp;
  let extraFieldExtendedTimestampFlag;
  let extraFieldExtendedTimestampTime;
  if (extendedTimestamp) {
    const lastModTimeUnix = getTimeUnix(lastModDate);
    const lastModTimeUnixInRange = inUnixTimeRange(lastModTimeUnix);
    if (lastModTimeUnixInRange) {
      const extraFieldTimestampLength = 9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0);
      const extraFieldTimestamp = createRecordWriter(extraFieldTimestampLength);
      extraFieldExtendedTimestampFlag = 1 + (lastAccessDate ? 2 : 0) + (creationDate ? 4 : 0);
      extraFieldExtendedTimestampTime = lastModTimeUnix;
      extraFieldTimestamp.writeUint16(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
      extraFieldTimestamp.writeUint16(extraFieldTimestampLength - 4);
      extraFieldTimestamp.writeUint8(extraFieldExtendedTimestampFlag);
      extraFieldTimestamp.writeUint32(lastModTimeUnix);
      if (lastAccessDate) {
        extraFieldTimestamp.writeUint32(clampUnixTime(getTimeUnix(lastAccessDate)));
      }
      if (creationDate) {
        extraFieldTimestamp.writeUint32(clampUnixTime(getTimeUnix(creationDate)));
      }
      rawExtraFieldExtendedTimestamp = extraFieldTimestamp.array;
    } else {
      rawExtraFieldExtendedTimestamp = EMPTY_UINT8_ARRAY;
    }
    const writeExtraFieldNTFS = ntfsTimestamp === UNDEFINED_VALUE ? !lastModTimeUnixInRange || Boolean(lastAccessDate || creationDate) : ntfsTimestamp;
    if (writeExtraFieldNTFS) {
      try {
        const lastModTimeNTFS = getTimeNTFS(lastModDate);
        const extraFieldNTFS = createRecordWriter(36);
        extraFieldNTFS.writeUint16(EXTRAFIELD_TYPE_NTFS);
        extraFieldNTFS.writeUint16(32);
        extraFieldNTFS.skip(4);
        extraFieldNTFS.writeUint16(EXTRAFIELD_TYPE_NTFS_TAG1);
        extraFieldNTFS.writeUint16(24);
        extraFieldNTFS.writeUint64(lastModTimeNTFS);
        extraFieldNTFS.writeUint64(lastAccessDate ? getTimeNTFS(lastAccessDate) : lastModTimeNTFS);
        extraFieldNTFS.writeUint64(creationDate ? getTimeNTFS(creationDate) : lastModTimeNTFS);
        rawExtraFieldNTFS = extraFieldNTFS.array;
      } catch {
        rawExtraFieldNTFS = EMPTY_UINT8_ARRAY;
      }
    } else {
      rawExtraFieldNTFS = EMPTY_UINT8_ARRAY;
    }
  } else {
    rawExtraFieldNTFS = rawExtraFieldExtendedTimestamp = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldUnix;
  let rawCentralExtraFieldUnix;
  try {
    const { uid, gid, unixExtraFieldType } = options;
    if (unixExtraFieldType == INFOZIP_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
      const uidBytes = packUnixId(uid === UNDEFINED_VALUE ? 0 : uid);
      const gidBytes = packUnixId(gid === UNDEFINED_VALUE ? 0 : gid);
      const payloadLength = 3 + uidBytes.length + gidBytes.length;
      const extraFieldUnix = createRecordWriter(4 + payloadLength);
      extraFieldUnix.writeUint16(EXTRAFIELD_TYPE_INFOZIP);
      extraFieldUnix.writeUint16(payloadLength);
      extraFieldUnix.writeUint8(1);
      extraFieldUnix.writeUint8(uidBytes.length);
      extraFieldUnix.writeBytes(uidBytes);
      extraFieldUnix.writeUint8(gidBytes.length);
      extraFieldUnix.writeBytes(gidBytes);
      rawExtraFieldUnix = rawCentralExtraFieldUnix = extraFieldUnix.array;
    } else if (unixExtraFieldType == UNIX_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
      const extraFieldUnix = createRecordWriter(8);
      extraFieldUnix.writeUint16(EXTRAFIELD_TYPE_UNIX);
      extraFieldUnix.writeUint16(4);
      extraFieldUnix.writeUint16((uid === UNDEFINED_VALUE ? 0 : uid) & MAX_16_BITS);
      extraFieldUnix.writeUint16((gid === UNDEFINED_VALUE ? 0 : gid) & MAX_16_BITS);
      rawExtraFieldUnix = extraFieldUnix.array;
      const centralExtraFieldUnix = createRecordWriter(4);
      centralExtraFieldUnix.writeUint16(EXTRAFIELD_TYPE_UNIX);
      centralExtraFieldUnix.writeUint16(0);
      rawCentralExtraFieldUnix = centralExtraFieldUnix.array;
    } else {
      rawExtraFieldUnix = rawCentralExtraFieldUnix = EMPTY_UINT8_ARRAY;
    }
  } catch {
    rawExtraFieldUnix = rawCentralExtraFieldUnix = EMPTY_UINT8_ARRAY;
  }
  if (compressionMethod === UNDEFINED_VALUE) {
    compressionMethod = compressed ? COMPRESSION_METHOD_DEFLATE : COMPRESSION_METHOD_STORE;
  }
  if (version === UNDEFINED_VALUE) {
    version = compressionMethod == COMPRESSION_METHOD_STORE && !directory && !encrypted ? VERSION_STORE : VERSION_DEFLATE;
  }
  const { codecVersionNeeded } = options;
  if (compressed && codecVersionNeeded !== UNDEFINED_VALUE) {
    version = version > codecVersionNeeded ? version : codecVersionNeeded;
  }
  if (zip64) {
    version = version > VERSION_ZIP64 ? version : VERSION_ZIP64;
  }
  if (encrypted && !zipCrypto) {
    version = version > VERSION_AES ? version : VERSION_AES;
    if (passThroughCompression && crc32 !== UNDEFINED_VALUE) {
      rawExtraFieldAES[EXTRAFIELD_OFFSET_AES_VENDOR_VERSION] = VENDOR_VERSION_AE_12;
    }
    setUint16(getDataView(rawExtraFieldAES), EXTRAFIELD_OFFSET_AES_COMPRESSION_METHOD, compressionMethod);
    compressionMethod = COMPRESSION_METHOD_AES;
  }
  const localExtraFieldZip64Length = writeLocalExtraFieldZip64 ? getLength(rawLocalExtraFieldZip64) : 0;
  const extraFieldLength = localExtraFieldZip64Length + getLength(rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraFieldUnix, rawExtraField, rawLocalExtraField);
  const maximumUsdzExtraFieldLength = options[OPTION_USDZ] ? EXTRAFIELD_USDZ_MAX_LENGTH : 0;
  if (extraFieldLength + maximumUsdzExtraFieldLength > MAX_16_BITS) {
    throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
  }
  const dosLastModDate = new Date(Math.ceil(Math.floor(lastModDate.getTime() / 1e3) / 2) * 2e3);
  const clampedLastModDate = dosLastModDate < MIN_DATE ? MIN_DATE : dosLastModDate > MAX_DATE ? MAX_DATE : dosLastModDate;
  const storedLastModDate = getLength(rawExtraFieldExtendedTimestamp) ? new Date(getTimeUnix(lastModDate) * 1e3) : getLength(rawExtraFieldNTFS) ? lastModDate : clampedLastModDate;
  const {
    headerArray,
    headerView,
    rawLastModDate
  } = getHeaderArrayData({
    version,
    bitFlag: getBitFlag(level, useUnicodeFileNames, dataDescriptor, encrypted, compressionMethod),
    compressionMethod,
    uncompressedSize,
    compressedSize,
    lastModDate: clampedLastModDate,
    rawLastModDate: rawLastModDateOption,
    rawFilename,
    zip64CompressedSize,
    zip64UncompressedSize,
    extraFieldLength
  });
  if (compressedSize !== UNDEFINED_VALUE && passThroughCompression && crc32 !== UNDEFINED_VALUE) {
    setUint32(headerView, HEADER_OFFSET_SIGNATURE, crc32);
  }
  const localHeader = createRecordWriter(HEADER_SIZE + getLength(rawFilename) + extraFieldLength);
  const localHeaderArray = localHeader.array;
  const localHeaderView = getDataView(localHeaderArray);
  localHeader.writeUint32(LOCAL_FILE_HEADER_SIGNATURE);
  localHeader.writeBytes(headerArray);
  localHeader.writeBytes(rawFilename);
  if (writeLocalExtraFieldZip64) {
    localHeader.writeBytes(rawLocalExtraFieldZip64);
  }
  localHeader.writeBytes(rawExtraFieldAES);
  localHeader.writeBytes(rawExtraFieldExtendedTimestamp);
  localHeader.writeBytes(rawExtraFieldNTFS);
  localHeader.writeBytes(rawExtraFieldUnix);
  localHeader.writeBytes(rawExtraField);
  localHeader.writeBytes(rawLocalExtraField);
  if (dataDescriptor) {
    if (!zip64CompressedSize) {
      setUint32(localHeaderView, HEADER_OFFSET_COMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, 0);
    }
    if (!zip64UncompressedSize) {
      setUint32(localHeaderView, HEADER_OFFSET_UNCOMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, 0);
    }
  }
  return {
    localHeaderArray,
    localHeaderView,
    headerArray,
    headerView,
    lastModDate: storedLastModDate,
    lastModDateClamped: storedLastModDate === clampedLastModDate && dosLastModDate.getTime() != clampedLastModDate.getTime(),
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    rawExtraFieldZip64: EMPTY_UINT8_ARRAY,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawCentralExtraFieldUnix,
    rawExtraFieldAES,
    extraFieldLength
  };
}
function appendExtraFieldUSDZ(entryInfo, zipWriterOffset) {
  const { headerInfo } = entryInfo;
  let { localHeaderArray, extraFieldLength } = headerInfo;
  let extraBytesLength = 64 - (zipWriterOffset + getLength(localHeaderArray)) % 64;
  if (extraBytesLength < 4) {
    extraBytesLength += 64;
  }
  const rawExtraFieldUSDZ = new Uint8Array(extraBytesLength);
  const extraFieldUSDZView = getDataView(rawExtraFieldUSDZ);
  setUint16(extraFieldUSDZView, 0, EXTRAFIELD_TYPE_USDZ);
  setUint16(extraFieldUSDZView, 2, extraBytesLength - 4);
  const previousLocalHeaderArray = localHeaderArray;
  headerInfo.localHeaderArray = localHeaderArray = new Uint8Array(getLength(previousLocalHeaderArray) + extraBytesLength);
  arraySet(localHeaderArray, previousLocalHeaderArray);
  arraySet(localHeaderArray, rawExtraFieldUSDZ, getLength(previousLocalHeaderArray));
  const localHeaderArrayView = getDataView(localHeaderArray);
  setUint16(localHeaderArrayView, 28, extraFieldLength + extraBytesLength);
  headerInfo.localHeaderView = localHeaderArrayView;
  entryInfo.metadataSize += extraBytesLength;
}
function packUnixId(id) {
  const dataArray = new Uint8Array(4);
  const dataView = getDataView(dataArray);
  dataView.setUint32(0, id, true);
  let length = 4;
  while (length > 1 && dataArray[length - 1] === 0) {
    length--;
  }
  return dataArray.subarray(0, length);
}
function normalizeMsdosAttributes(msdosAttributesRaw, msdosAttributes) {
  if (msdosAttributesRaw !== UNDEFINED_VALUE) {
    msdosAttributesRaw = msdosAttributesRaw & MAX_8_BITS;
  } else if (msdosAttributes !== UNDEFINED_VALUE) {
    const { readOnly, hidden, system, directory: msdDir, archive } = msdosAttributes;
    let raw = 0;
    if (readOnly) raw |= FILE_ATTR_MSDOS_READONLY_MASK;
    if (hidden) raw |= FILE_ATTR_MSDOS_HIDDEN_MASK;
    if (system) raw |= FILE_ATTR_MSDOS_SYSTEM_MASK;
    if (msdDir) raw |= FILE_ATTR_MSDOS_DIR_MASK;
    if (archive) raw |= FILE_ATTR_MSDOS_ARCHIVE_MASK;
    msdosAttributesRaw = raw & MAX_8_BITS;
  }
  if (msdosAttributes === UNDEFINED_VALUE) {
    msdosAttributes = {
      readOnly: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_READONLY_MASK),
      hidden: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_HIDDEN_MASK),
      system: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_SYSTEM_MASK),
      directory: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_DIR_MASK),
      archive: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_ARCHIVE_MASK)
    };
  }
  return { msdosAttributesRaw, msdosAttributes };
}
function getDataDescriptorInfo({
  zip64,
  dataDescriptor,
  dataDescriptorSignature
}) {
  let dataDescriptorArray = EMPTY_UINT8_ARRAY;
  let dataDescriptorView, dataDescriptorOffset = 0;
  let dataDescriptorLength = zip64 ? DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH : DATA_DESCRIPTOR_RECORD_LENGTH;
  if (dataDescriptorSignature) {
    dataDescriptorLength += DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH;
  }
  if (dataDescriptor) {
    dataDescriptorArray = new Uint8Array(dataDescriptorLength);
    dataDescriptorView = getDataView(dataDescriptorArray);
    if (dataDescriptorSignature) {
      dataDescriptorOffset = DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH;
      setUint32(dataDescriptorView, 0, DATA_DESCRIPTOR_RECORD_SIGNATURE);
    }
  }
  return {
    dataDescriptorArray,
    dataDescriptorView,
    dataDescriptorOffset
  };
}
function setEntryInfo({
  crc32,
  compressedSize,
  uncompressedSize,
  headerInfo,
  dataDescriptorInfo
}, {
  zip64,
  zipCrypto,
  passThroughCompression,
  dataDescriptor
}) {
  const {
    headerView,
    encrypted
  } = headerInfo;
  const {
    dataDescriptorView,
    dataDescriptorOffset
  } = dataDescriptorInfo;
  if ((!encrypted || zipCrypto || passThroughCompression) && crc32 !== UNDEFINED_VALUE) {
    setUint32(headerView, HEADER_OFFSET_SIGNATURE, crc32);
    if (dataDescriptor) {
      setUint32(dataDescriptorView, dataDescriptorOffset, crc32);
    }
  }
  if (zip64) {
    if (dataDescriptor) {
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 4, BigInt(compressedSize));
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 12, BigInt(uncompressedSize));
    }
  } else {
    setUint32(headerView, HEADER_OFFSET_COMPRESSED_SIZE, compressedSize);
    setUint32(headerView, HEADER_OFFSET_UNCOMPRESSED_SIZE, uncompressedSize);
    if (dataDescriptor) {
      setUint32(dataDescriptorView, dataDescriptorOffset + 4, compressedSize);
      setUint32(dataDescriptorView, dataDescriptorOffset + 8, uncompressedSize);
    }
  }
}
function updateLocalHeader({
  rawFilename,
  encrypted,
  zip64,
  localExtraFieldZip64Length,
  crc32,
  compressedSize,
  uncompressedSize,
  zip64UncompressedSize,
  zip64CompressedSize
}, localHeaderView, { dataDescriptor, passThroughCompression }) {
  if (!dataDescriptor) {
    if (!encrypted || passThroughCompression && crc32 !== UNDEFINED_VALUE) {
      setUint32(localHeaderView, HEADER_OFFSET_SIGNATURE + LOCAL_HEADER_COMMON_OFFSET, crc32);
    }
    if (!zip64CompressedSize) {
      setUint32(localHeaderView, HEADER_OFFSET_COMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, compressedSize);
    }
    if (!zip64UncompressedSize) {
      setUint32(localHeaderView, HEADER_OFFSET_UNCOMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, uncompressedSize);
    }
  }
  if (zip64 && localExtraFieldZip64Length) {
    const localHeaderOffset = HEADER_SIZE + getLength(rawFilename) + 4;
    setBigUint64(localHeaderView, localHeaderOffset, BigInt(uncompressedSize));
    setBigUint64(localHeaderView, localHeaderOffset + 8, BigInt(compressedSize));
  }
}
async function closeFile(zipWriter, comment, options) {
  const { directoryDataLength, zip64Entries } = createDirectoryRecords(zipWriter.fileEntries);
  const { directoryStart, directoryEnd, directoryArray } = await writeDirectoryRecords(zipWriter, directoryDataLength, options);
  const signatureLength = await writeDigitalSignatureRecord(zipWriter, directoryArray, options);
  await writeEndOfDirectoryRecord(zipWriter, comment, options, { directoryStart, directoryEnd, directoryDataLength, signatureLength, zip64Entries });
}
function createDirectoryRecords(files) {
  let directoryDataLength = 0;
  let zip64Entries = false;
  for (const [, fileEntry] of files) {
    const {
      rawFilename,
      rawExtraFieldAES,
      rawComment,
      rawExtraFieldNTFS,
      rawCentralExtraFieldUnix,
      rawExtraField,
      rawCentralExtraField,
      extraFieldExtendedTimestampFlag,
      extraFieldExtendedTimestampTime,
      zip64Enabled,
      uncompressedSize,
      compressedSize
    } = fileEntry;
    let { zip64UncompressedSize, zip64CompressedSize } = fileEntry;
    if (!zip64Enabled) {
      if (zip64UncompressedSize && uncompressedSize < MAX_32_BITS) {
        zip64UncompressedSize = fileEntry.zip64UncompressedSize = false;
      }
      if (zip64CompressedSize && compressedSize < MAX_32_BITS) {
        zip64CompressedSize = fileEntry.zip64CompressedSize = false;
      }
    }
    zip64Entries = zip64Entries || zip64UncompressedSize || zip64CompressedSize;
    const zip64Offset = fileEntry.offset >= MAX_32_BITS;
    const zip64DiskNumberStart = fileEntry.diskNumberStart >= MAX_16_BITS;
    let rawExtraFieldZip64;
    if (zip64Offset || zip64DiskNumberStart || zip64UncompressedSize || zip64CompressedSize) {
      const length = 4 + (zip64UncompressedSize ? 8 : 0) + (zip64CompressedSize ? 8 : 0) + (zip64Offset ? 8 : 0) + (zip64DiskNumberStart ? 4 : 0);
      const extraFieldZip64 = createRecordWriter(length);
      extraFieldZip64.writeUint16(EXTRAFIELD_TYPE_ZIP64);
      extraFieldZip64.writeUint16(length - 4);
      if (zip64UncompressedSize) {
        extraFieldZip64.writeUint64(uncompressedSize);
      }
      if (zip64CompressedSize) {
        extraFieldZip64.writeUint64(compressedSize);
      }
      if (zip64Offset) {
        extraFieldZip64.writeUint64(fileEntry.offset);
      }
      if (zip64DiskNumberStart) {
        extraFieldZip64.writeUint32(fileEntry.diskNumberStart);
      }
      rawExtraFieldZip64 = extraFieldZip64.array;
    } else {
      rawExtraFieldZip64 = EMPTY_UINT8_ARRAY;
    }
    fileEntry.rawExtraFieldZip64 = rawExtraFieldZip64;
    fileEntry.zip64Offset = zip64Offset;
    fileEntry.zip64DiskNumberStart = zip64DiskNumberStart;
    let rawExtraFieldTimestamp;
    if (extraFieldExtendedTimestampTime === UNDEFINED_VALUE) {
      rawExtraFieldTimestamp = EMPTY_UINT8_ARRAY;
    } else {
      const extraFieldTimestamp = createRecordWriter(9);
      extraFieldTimestamp.writeUint16(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
      extraFieldTimestamp.writeUint16(5);
      extraFieldTimestamp.writeUint8(extraFieldExtendedTimestampFlag);
      extraFieldTimestamp.writeUint32(extraFieldExtendedTimestampTime);
      rawExtraFieldTimestamp = extraFieldTimestamp.array;
    }
    fileEntry.rawExtraFieldExtendedTimestamp = rawExtraFieldTimestamp;
    const extraFieldLength = getLength(
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldNTFS,
      rawCentralExtraFieldUnix,
      rawExtraFieldTimestamp,
      rawExtraField,
      rawCentralExtraField
    );
    if (extraFieldLength > MAX_16_BITS) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
    }
    directoryDataLength += CENTRAL_FILE_HEADER_LENGTH + getLength(rawFilename, rawComment) + extraFieldLength;
  }
  return { directoryDataLength, zip64Entries };
}
async function writeDirectoryRecords(zipWriter, directoryDataLength, options) {
  const { fileEntries, writer } = zipWriter;
  const directoryArray = new Uint8Array(directoryDataLength);
  await initStream(writer);
  let offset = 0;
  let directoryDiskOffset = 0;
  let directoryStartDiskNumber = getDiskNumber(writer);
  let directoryStartDiskOffset = getDiskOffset2(writer);
  let directoryEndDiskEntriesLength = 0;
  for (const [indexFileEntry, fileEntry] of Array.from(fileEntries.values()).entries()) {
    const {
      offset: fileEntryOffset,
      rawFilename,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldExtendedTimestamp,
      rawExtraFieldNTFS,
      rawCentralExtraFieldUnix,
      rawExtraField,
      rawCentralExtraField,
      rawComment,
      versionMadeBy,
      headerArray,
      headerView,
      zip64UncompressedSize,
      zip64CompressedSize,
      zip64DiskNumberStart,
      zip64Offset,
      internalFileAttributes,
      externalFileAttributes,
      diskNumberStart,
      uncompressedSize,
      compressedSize
    } = fileEntry;
    const extraFieldLength = getLength(rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawCentralExtraFieldUnix, rawExtraField, rawCentralExtraField);
    const directoryRecordLength = CENTRAL_FILE_HEADER_LENGTH + getLength(rawFilename, rawComment) + extraFieldLength;
    if (exceedsAvailableSize(writer, offset + directoryRecordLength - directoryDiskOffset)) {
      await writeData(writer, directoryArray.slice(directoryDiskOffset, offset));
      directoryDiskOffset = offset;
      directoryEndDiskEntriesLength = 0;
      await writer.closeDisk();
    }
    if (indexFileEntry == 0) {
      directoryStartDiskNumber = getDiskNumber(writer);
      directoryStartDiskOffset = getDiskOffset2(writer);
    }
    if (!zip64UncompressedSize) {
      setUint32(headerView, HEADER_OFFSET_UNCOMPRESSED_SIZE, uncompressedSize);
    }
    if (!zip64CompressedSize) {
      setUint32(headerView, HEADER_OFFSET_COMPRESSED_SIZE, compressedSize);
    }
    if ((zip64Offset || zip64DiskNumberStart) && fileEntry.version < VERSION_ZIP64) {
      setUint16(headerView, HEADER_OFFSET_VERSION, VERSION_ZIP64);
    }
    const directoryRecord = createRecordWriter(directoryRecordLength);
    directoryRecord.writeUint32(CENTRAL_FILE_HEADER_SIGNATURE);
    directoryRecord.writeUint16(versionMadeBy);
    directoryRecord.writeBytes(headerArray.subarray(0, HEADER_SIZE - 4 - 2));
    directoryRecord.writeUint16(extraFieldLength);
    directoryRecord.writeUint16(getLength(rawComment));
    directoryRecord.writeUint16(zip64DiskNumberStart ? MAX_16_BITS : diskNumberStart);
    directoryRecord.writeUint16(internalFileAttributes);
    directoryRecord.writeUint32(externalFileAttributes);
    directoryRecord.writeUint32(zip64Offset ? MAX_32_BITS : fileEntryOffset);
    directoryRecord.writeBytes(rawFilename);
    directoryRecord.writeBytes(rawExtraFieldZip64);
    directoryRecord.writeBytes(rawExtraFieldAES);
    directoryRecord.writeBytes(rawExtraFieldExtendedTimestamp);
    directoryRecord.writeBytes(rawExtraFieldNTFS);
    directoryRecord.writeBytes(rawCentralExtraFieldUnix);
    directoryRecord.writeBytes(rawExtraField);
    directoryRecord.writeBytes(rawCentralExtraField);
    directoryRecord.writeBytes(rawComment);
    arraySet(directoryArray, directoryRecord.array, offset);
    offset += directoryRecordLength;
    directoryEndDiskEntriesLength++;
    if (options.onprogress) {
      try {
        await options.onprogress(indexFileEntry + 1, fileEntries.size, new Entry(fileEntry));
      } catch {
      }
    }
  }
  await writeData(writer, directoryDiskOffset ? directoryArray.slice(directoryDiskOffset) : directoryArray);
  return {
    directoryStart: { diskNumber: directoryStartDiskNumber, diskOffset: directoryStartDiskOffset },
    directoryEnd: { diskNumber: getDiskNumber(writer), entriesLength: directoryEndDiskEntriesLength },
    directoryArray
  };
}
async function writeDigitalSignatureRecord(zipWriter, directoryArray, options) {
  const signCentralDirectory = getFunctionOptionValue2(zipWriter, options, OPTION_SIGN_CENTRAL_DIRECTORY);
  if (signCentralDirectory) {
    const signatureData = await signCentralDirectory(directoryArray);
    const signatureDataLength = getLength(signatureData);
    if (signatureDataLength > MAX_16_BITS) {
      throw new Error(ERR_INVALID_SIGNATURE_DATA);
    }
    const signatureRecord = createRecordWriter(6 + signatureDataLength);
    signatureRecord.writeUint32(DIGITAL_SIGNATURE_RECORD_SIGNATURE);
    signatureRecord.writeUint16(signatureDataLength);
    signatureRecord.writeBytes(signatureData);
    const { writer } = zipWriter;
    if (exceedsAvailableSize(writer, getLength(signatureRecord.array))) {
      await writer.closeDisk();
    }
    await writeData(writer, signatureRecord.array);
    return 6 + signatureDataLength;
  }
  return 0;
}
async function writeEndOfDirectoryRecord(zipWriter, comment, options, cdInfo) {
  const { writer } = zipWriter;
  const { directoryStart, directoryEnd, signatureLength, zip64Entries } = cdInfo;
  let { directoryDataLength } = cdInfo;
  let fileEntriesLength = zipWriter.fileEntries.size;
  let diskNumber = directoryStart.diskNumber;
  let directoryOffset = getSegmentOffset(zipWriter, directoryStart);
  const commentLength = getLength(comment);
  if (commentLength > MAX_16_BITS) {
    throw new Error(ERR_INVALID_COMMENT);
  }
  let zip64 = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIP64);
  let lastDiskNumber = getDiskNumber(writer);
  if (exceedsAvailableSize(writer, (zip64 ? ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH : END_OF_CENTRAL_DIR_LENGTH) + commentLength)) {
    lastDiskNumber++;
  }
  if (directoryOffset >= MAX_32_BITS || directoryDataLength >= MAX_32_BITS || fileEntriesLength >= MAX_16_BITS || lastDiskNumber >= MAX_16_BITS) {
    if (zip64 === false) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  } else if (zip64 === UNDEFINED_VALUE && zip64Entries) {
    zip64 = true;
  }
  const endOfdirectoryRecord = createRecordWriter(zip64 ? ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH : END_OF_CENTRAL_DIR_LENGTH);
  if (exceedsAvailableSize(writer, getLength(endOfdirectoryRecord.array) + commentLength)) {
    await writer.closeDisk();
  }
  lastDiskNumber = getDiskNumber(writer);
  let diskFileEntriesLength = lastDiskNumber == directoryEnd.diskNumber ? directoryEnd.entriesLength : 0;
  if (zip64) {
    endOfdirectoryRecord.writeUint32(ZIP64_END_OF_CENTRAL_DIR_SIGNATURE);
    endOfdirectoryRecord.writeUint64(44);
    endOfdirectoryRecord.writeUint16(45);
    endOfdirectoryRecord.writeUint16(45);
    endOfdirectoryRecord.writeUint32(lastDiskNumber);
    endOfdirectoryRecord.writeUint32(diskNumber);
    endOfdirectoryRecord.writeUint64(diskFileEntriesLength);
    endOfdirectoryRecord.writeUint64(fileEntriesLength);
    endOfdirectoryRecord.writeUint64(directoryDataLength);
    endOfdirectoryRecord.writeUint64(directoryOffset);
    endOfdirectoryRecord.writeUint32(ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE);
    endOfdirectoryRecord.writeUint32(lastDiskNumber);
    endOfdirectoryRecord.writeUint64(BigInt(getSegmentOffset(zipWriter, writer)) + BigInt(directoryDataLength) + BigInt(signatureLength));
    endOfdirectoryRecord.writeUint32(lastDiskNumber + 1);
    const supportZip64SplitFile = getOptionValue2(zipWriter, options, OPTION_SUPPORT_ZIP64_SPLIT_FILE, true);
    if (supportZip64SplitFile) {
      lastDiskNumber = MAX_16_BITS;
      diskNumber = MAX_16_BITS;
    }
    diskFileEntriesLength = MAX_16_BITS;
    fileEntriesLength = MAX_16_BITS;
    directoryOffset = MAX_32_BITS;
    directoryDataLength = MAX_32_BITS;
  }
  endOfdirectoryRecord.writeUint32(END_OF_CENTRAL_DIR_SIGNATURE);
  endOfdirectoryRecord.writeUint16(lastDiskNumber);
  endOfdirectoryRecord.writeUint16(diskNumber);
  endOfdirectoryRecord.writeUint16(diskFileEntriesLength);
  endOfdirectoryRecord.writeUint16(fileEntriesLength);
  endOfdirectoryRecord.writeUint32(directoryDataLength);
  endOfdirectoryRecord.writeUint32(directoryOffset);
  endOfdirectoryRecord.writeUint16(commentLength);
  await writeData(writer, endOfdirectoryRecord.array);
  if (commentLength) {
    await writeData(writer, comment);
  }
}
function createRecordWriter(length) {
  const array = new Uint8Array(length);
  const view = getDataView(array);
  let offset = 0;
  return {
    array,
    writeUint8: (value) => {
      setUint8(view, offset, value);
      offset += 1;
    },
    writeUint16: (value) => {
      setUint16(view, offset, value);
      offset += 2;
    },
    writeUint32: (value) => {
      setUint32(view, offset, value);
      offset += 4;
    },
    writeUint64: (value) => {
      setBigUint64(view, offset, BigInt(value));
      offset += 8;
    },
    writeBytes: (value) => {
      arraySet(array, value, offset);
      offset += getLength(value);
    },
    skip: (count) => offset += count
  };
}
function getDiskNumber(writer) {
  const { diskNumber = 0 } = writer;
  return diskNumber;
}
function getDiskOffset2(writer) {
  const { diskOffset = 0 } = writer;
  return diskOffset;
}
function exceedsAvailableSize(writer, length) {
  const { availableSize = INFINITY_VALUE } = writer;
  return length > availableSize;
}
function getSegmentOffset(zipWriter, { diskNumber = 0, diskOffset = 0 }) {
  return zipWriter.offset - diskOffset - (diskNumber ? zipWriter.initialOffset : 0);
}
async function startsWithSplitZipSignature2(reader) {
  const signatureArray = await readUint8Array(reader, 0, SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  return getUint322(getDataView(signatureArray), 0) == SPLIT_ZIP_FILE_SIGNATURE;
}
function removeExtraFieldZip64(rawExtraField) {
  const rawExtraFieldView = getDataView(rawExtraField);
  let offsetExtraField = 0;
  while (offsetExtraField + 4 <= getLength(rawExtraField)) {
    const size = 4 + getUint162(rawExtraFieldView, offsetExtraField + 2);
    if (getUint162(rawExtraFieldView, offsetExtraField) == EXTRAFIELD_TYPE_ZIP64) {
      return removeExtraFieldZip64(concat(
        rawExtraField.subarray(0, offsetExtraField),
        rawExtraField.subarray(Math.min(offsetExtraField + size, getLength(rawExtraField)))
      ));
    }
    offsetExtraField += size;
  }
  return rawExtraField;
}
async function copyZipData(zipWriter, reader, entries, keptEntries, directoryOffset, compact, getEntryDataDescriptorLength2) {
  const { writer } = zipWriter;
  const entryPositions = /* @__PURE__ */ new Map();
  if (writer.closeDisk || compact) {
    const sortedEntries = Array.from(entries).sort((firstEntry, secondEntry) => getSourceOffset(reader, firstEntry) - getSourceOffset(reader, secondEntry));
    const regionEnds = getRegionEnds(reader, sortedEntries, directoryOffset);
    const keptEntrySet = new Set(keptEntries);
    const localHeaderLengths = /* @__PURE__ */ new Map();
    for (let indexEntry = 0; indexEntry < sortedEntries.length; indexEntry++) {
      const entry = sortedEntries[indexEntry];
      if (keptEntrySet.has(entry)) {
        const sourceOffset = getSourceOffset(reader, entry);
        const localHeaderLength = await getLocalHeaderLength(reader, sourceOffset);
        if (localHeaderLength === UNDEFINED_VALUE) {
          throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
        }
        let entryEnd = sourceOffset + localHeaderLength + entry.compressedSize;
        if (entry.bitFlag.dataDescriptor) {
          const dataDescriptorLength = await getEntryDataDescriptorLength2(reader, entryEnd, entry);
          entryEnd = dataDescriptorLength === UNDEFINED_VALUE ? Math.max(entryEnd, regionEnds[indexEntry]) : entryEnd + dataDescriptorLength;
        }
        if (entryEnd > regionEnds[indexEntry]) {
          throw new Error(ERR_OVERLAPPING_ENTRY);
        }
        regionEnds[indexEntry] = entryEnd;
        localHeaderLengths.set(entry, localHeaderLength);
      }
    }
    let copiedOffset = 0;
    let lastPosition;
    for (let indexEntry = 0; indexEntry < sortedEntries.length; indexEntry++) {
      const entry = sortedEntries[indexEntry];
      if (keptEntrySet.has(entry)) {
        const sourceOffset = getSourceOffset(reader, entry);
        if (sourceOffset < copiedOffset) {
          entryPositions.set(entry, lastPosition);
        } else {
          if (!compact) {
            await copyData(zipWriter, reader, copiedOffset, sourceOffset - copiedOffset);
          }
          if (writer.closeDisk && exceedsAvailableSize(writer, localHeaderLengths.get(entry))) {
            await writer.closeDisk();
          }
          lastPosition = {
            offset: getSegmentOffset(zipWriter, writer),
            diskNumberStart: getDiskNumber(writer)
          };
          entryPositions.set(entry, lastPosition);
          await copyData(zipWriter, reader, sourceOffset, regionEnds[indexEntry] - sourceOffset);
          copiedOffset = regionEnds[indexEntry];
        }
      }
    }
    if (!compact) {
      await copyData(zipWriter, reader, copiedOffset, directoryOffset - copiedOffset);
    }
  } else {
    const baseOffset = zipWriter.offset;
    await copyData(zipWriter, reader, 0, directoryOffset);
    entries.forEach((entry) => entryPositions.set(entry, {
      offset: baseOffset + getSourceOffset(reader, entry),
      diskNumberStart: 0
    }));
  }
  return entryPositions;
}
function getRegionEnds(reader, sortedEntries, directoryOffset) {
  const regionEnds = new Array(sortedEntries.length);
  let regionEnd = directoryOffset;
  for (let indexEntry = sortedEntries.length - 1; indexEntry >= 0; indexEntry--) {
    const sourceOffset = getSourceOffset(reader, sortedEntries[indexEntry]);
    const nextEntry = sortedEntries[indexEntry + 1];
    if (nextEntry && getSourceOffset(reader, nextEntry) > sourceOffset) {
      regionEnd = Math.min(getSourceOffset(reader, nextEntry), directoryOffset);
    }
    regionEnds[indexEntry] = regionEnd;
  }
  return regionEnds;
}
async function copyData(zipWriter, reader, offset, size) {
  if (size > 0) {
    const { writer } = zipWriter;
    let copiedLength = 0;
    try {
      await flushBufferedData(createReadable(reader, { offset, size }), writer, UNDEFINED_VALUE, (chunkLength) => copiedLength += chunkLength);
    } catch (error) {
      if (copiedLength) {
        zipWriter.hasCorruptedEntries = true;
        try {
          error.corruptedEntry = true;
        } catch {
        }
      }
      throw error;
    } finally {
      writer.size += copiedLength;
      zipWriter.offset += copiedLength;
    }
  }
}
async function getLocalHeaderLength(reader, offset) {
  const headerArray = offset >= 0 && offset + HEADER_SIZE <= reader.size ? await readUint8Array(reader, offset, HEADER_SIZE) : EMPTY_UINT8_ARRAY;
  if (getLength(headerArray) < HEADER_SIZE) {
    return UNDEFINED_VALUE;
  }
  const headerView = getDataView(headerArray);
  if (getUint322(headerView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
    return UNDEFINED_VALUE;
  }
  return HEADER_SIZE + getUint162(headerView, HEADER_OFFSET_FILENAME_LENGTH + LOCAL_HEADER_COMMON_OFFSET) + getUint162(headerView, HEADER_OFFSET_EXTRAFIELD_LENGTH + LOCAL_HEADER_COMMON_OFFSET);
}
function getSourceOffset(reader, { offset, diskNumberStart }) {
  return offset + (reader.getDiskOffset ? reader.getDiskOffset(diskNumberStart) : 0);
}
function getSplitZipSignatureArray() {
  const signatureArray = new Uint8Array(SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  setUint32(getDataView(signatureArray), 0, SPLIT_ZIP_FILE_SIGNATURE);
  return signatureArray;
}
async function writeSplitZipSignature(zipWriter, writer) {
  delete zipWriter.addSplitZipSignature;
  await writeData(writer, getSplitZipSignatureArray());
  zipWriter.offset += SPLIT_ZIP_FILE_SIGNATURE_LENGTH;
}
async function writeData(writer, array) {
  const { writable } = writer;
  const streamWriter = writable.getWriter();
  try {
    await streamWriter.ready;
    writer.size += getLength(array);
    await streamWriter.write(array);
  } finally {
    streamWriter.releaseLock();
  }
}
async function flushBufferedData(readable, writer, signal, onChunkWritten) {
  const streamWriter = writer.writable.getWriter();
  try {
    await readable.pipeTo(new WritableStream({
      async write(chunk) {
        await streamWriter.ready;
        await streamWriter.write(chunk);
        onChunkWritten(getLength(chunk));
      }
    }), { preventClose: true, preventAbort: true, signal });
  } finally {
    streamWriter.releaseLock();
  }
}
function getTimeNTFS(date) {
  if (date) {
    const timeNTFS = (BigInt(date.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
    return timeNTFS < MIN_NTFS_TIME ? MIN_NTFS_TIME : timeNTFS > MAX_NTFS_TIME ? MAX_NTFS_TIME : timeNTFS;
  }
}
function getTimeUnix(date) {
  return Math.floor(date.getTime() / 1e3);
}
function inUnixTimeRange(timeUnix) {
  return timeUnix >= MIN_UNIX_TIME && timeUnix <= MAX_UNIX_TIME;
}
function clampUnixTime(timeUnix) {
  return Math.min(MAX_UNIX_TIME, Math.max(MIN_UNIX_TIME, timeUnix));
}
function getOptionValue2(zipWriter, options, name, defaultValue) {
  const result = options[name] === UNDEFINED_VALUE ? zipWriter.options[name] : options[name];
  return result === UNDEFINED_VALUE ? defaultValue : result;
}
function getDateOptionValue(zipWriter, options, name, defaultValue) {
  const date = getOptionValue2(zipWriter, options, name, defaultValue);
  if (date === null) {
    return defaultValue;
  }
  if (date !== UNDEFINED_VALUE && (typeof date.getTime != FUNCTION_TYPE || Number.isNaN(date.getTime()))) {
    throw new Error(ERR_INVALID_DATE);
  }
  return date;
}
function getFunctionOptionValue2(zipWriter, options, name) {
  return checkFunctionOption(getOptionValue2(zipWriter, options, name));
}
function getNumberOptionValue(zipWriter, options, name, defaultValue) {
  return toNumber(getOptionValue2(zipWriter, options, name, defaultValue));
}
function getMaximumCompressedSize(uncompressedSize) {
  return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}
function isCompressed(compressionMethod, level) {
  return compressionMethod === UNDEFINED_VALUE ? level === UNDEFINED_VALUE || level > 0 : compressionMethod !== COMPRESSION_METHOD_STORE;
}
function getUint162(view, offset) {
  return view.getUint16(offset, true);
}
function getUint322(view, offset) {
  return view.getUint32(offset, true);
}
function setUint8(view, offset, value) {
  view.setUint8(offset, value);
}
function setUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}
function setUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}
function setBigUint64(view, offset, value) {
  view.setBigUint64(offset, value, true);
}
function arraySet(array, typedArray, offset) {
  array.set(typedArray, offset);
}
function getLength(...arrayLikes) {
  let result = 0;
  arrayLikes.forEach((arrayLike) => arrayLike && (result += arrayLike.length));
  return result;
}
function getHeaderArrayData({
  version,
  bitFlag,
  compressionMethod,
  uncompressedSize,
  compressedSize,
  lastModDate,
  rawLastModDate,
  rawFilename,
  zip64CompressedSize,
  zip64UncompressedSize,
  extraFieldLength
}) {
  const headerRecord = createRecordWriter(HEADER_SIZE - 4);
  const headerArray = headerRecord.array;
  const headerView = getDataView(headerArray);
  headerRecord.writeUint16(version);
  headerRecord.writeUint16(bitFlag);
  headerRecord.writeUint16(compressionMethod);
  if (rawLastModDate === UNDEFINED_VALUE) {
    const dateArray = new Uint32Array(1);
    const dateView = getDataView(dateArray);
    setUint16(dateView, 0, (lastModDate.getHours() << 6 | lastModDate.getMinutes()) << 5 | lastModDate.getSeconds() / 2);
    setUint16(dateView, 2, (lastModDate.getFullYear() - 1980 << 4 | lastModDate.getMonth() + 1) << 5 | lastModDate.getDate());
    rawLastModDate = dateArray[0];
  }
  headerRecord.writeUint32(rawLastModDate);
  headerRecord.skip(4);
  if (zip64CompressedSize || compressedSize !== UNDEFINED_VALUE) {
    headerRecord.writeUint32(zip64CompressedSize ? MAX_32_BITS : compressedSize);
  } else {
    headerRecord.skip(4);
  }
  if (zip64UncompressedSize || uncompressedSize !== UNDEFINED_VALUE) {
    headerRecord.writeUint32(zip64UncompressedSize ? MAX_32_BITS : uncompressedSize);
  } else {
    headerRecord.skip(4);
  }
  headerRecord.writeUint16(getLength(rawFilename));
  headerRecord.writeUint16(extraFieldLength);
  return {
    headerArray,
    headerView,
    rawLastModDate
  };
}
function isPrintableASCIIText(rawText) {
  return rawText.every((characterCode) => characterCode >= MIN_PRINTABLE_ASCII_CHARACTER_CODE && characterCode <= MAX_PRINTABLE_ASCII_CHARACTER_CODE);
}
function getBitFlag(level, useUnicodeFileNames, dataDescriptor, encrypted, compressionMethod) {
  let bitFlag = 0;
  if (useUnicodeFileNames) {
    bitFlag = bitFlag | BITFLAG_LANG_ENCODING_FLAG;
  }
  if (dataDescriptor) {
    bitFlag = bitFlag | BITFLAG_DATA_DESCRIPTOR;
  }
  if (compressionMethod == COMPRESSION_METHOD_DEFLATE || compressionMethod == COMPRESSION_METHOD_DEFLATE_64) {
    if (level >= 0 && level <= 3) {
      bitFlag = bitFlag | BITFLAG_LEVEL_SUPER_FAST_MASK;
    }
    if (level > 3 && level <= 5) {
      bitFlag = bitFlag | BITFLAG_LEVEL_FAST_MASK;
    }
    if (level == 9) {
      bitFlag = bitFlag | BITFLAG_LEVEL_MAX_MASK;
    }
  }
  if (encrypted) {
    bitFlag = bitFlag | BITFLAG_ENCRYPTED;
  }
  return bitFlag;
}

// ../../../node_modules/@zip.js/zip.js/lib/zip-core-base.js
init_io();
init_options();
init_configuration();
init_codec_registry();

// ../../../node_modules/@zip.js/zip.js/lib/core/compression-methods.js
init_constants();
init_configuration();
init_codec_registry();
init_zip_entry_stream();

// ../../../node_modules/@zip.js/zip.js/lib/core/util/opfs-temp-stream.js
var DEFAULT_THRESHOLD = 1024 * 1024;

// ../../../node_modules/@zip.js/zip.js/lib/core/util/blob-temp-stream.js
init_compatible_streams();
var DEFAULT_THRESHOLD2 = 1024 * 1024;

// ../../../node_modules/@zip.js/zip.js/lib/core/util/sync-access-handle-temp-stream.js
var DEFAULT_THRESHOLD3 = 1024 * 1024;
var READ_CHUNK_SIZE = 512 * 1024;

// ../../../node_modules/@zip.js/zip.js/lib/zip-core-base.js
try {
  setDefaultConfiguration({ baseURI: import.meta.url });
} catch {
}

// ../../../node_modules/@zip.js/zip.js/lib/zip-module-native.js
init_configuration();

// ../../../node_modules/@zip.js/zip.js/lib/core/streams/zlib-js/zlib-streams.min.js
var { Uint8Array: p, Uint16Array: g, Int32Array: R, TransformStream: H, Math: O, Error: z, Array: k } = globalThis;
var pe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var Z = new p(0);
var qe = new g(0);
var de = [];
for (let e = 0; e < 6; e++) de.push(e, 0 == e ? 8 : 4);
de.push(0, 1);
var Se = [];
for (let e = 0; e < 14; e++) Se.push(e, 0 == e ? 4 : 2);
var Ee = new g([0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576]);
var ge = new g([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]);
function M(e, t, n, r, i) {
  if (0 == i) return;
  let f = e instanceof p ? e : new p(e.buffer, e.byteOffset, e.byteLength), l = n instanceof p ? n.subarray(r, r + i) : new p(n.buffer, n.byteOffset + r, i);
  f.set(l, t);
}
function Ve(e, t, n) {
  0 != n && (e instanceof p ? e : new p(e.buffer, e.byteOffset, e.byteLength)).fill(0, t, t + n);
}
function je() {
  return { next_in: Z, next_in_index: 0, avail_in: 0, total_in: 0, next_out: Z, next_out_index: 0, avail_out: 0, total_out: 0, msg: "", t: 0, i: 0, l: 0, _: void 0 };
}
function $e(e, t) {
  let n = 1 << t;
  return { o: e, u: new p(n), h: n, k: t, m: 0, v: 0, p: 0, T: 0 };
}
function te(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 2) {
    let r = e[n], i = e[n + 1];
    for (let e2 = 0; e2 < i; e2++) t.push(r);
  }
  return new g(t);
}
var ne = class {
  constructor(e, t) {
    this.I = e, this.M = t, this.C = 0;
  }
};
var re = class {
  constructor(e, t, n, r, i) {
    this.Z = e, this.W = t, this.q = n, this.O = r, this.S = i;
  }
};
function D_(e) {
  return J_[e < -6 || e > 2 ? 9 : 2 - e] || "";
}
function we(e, t) {
  try {
    e.msg = D_(t);
  } catch (n) {
    e.msg = "zlib error " + String(t) + " (" + n + ")";
  }
  return t;
}
function Qe(e, t) {
  let n = e >>> 0, r = 0;
  for (let e2 = 0; e2 < t; e2++) r = r << 1 | 1 & n, n >>>= 1;
  return r;
}
function T8(e, t) {
  e.D[e.j++] = t;
}
function Ae(e, t) {
  T8(e, 255 & t), T8(e, t >>> 8 & 255);
}
function e_(e, t, n) {
  let r = 255 & n, i = 65535 & t, f = e.A + e.N;
  return e.D[f] = 255 & i, e.D[f + 1] = i >>> 8 & 255, e.D[f + 2] = r, e.N += 3, i = i - 1 & 65535, e.H[__[r] + ie + 1].R++, e.J[y_(i)].R++, e.N == e.U;
}
function De(e, t) {
  let n = 255 & t, r = e.A + e.N;
  return e.D[r] = 0, e.D[r + 1] = 0, e.D[r + 2] = n, e.N += 3, e.H[n].R++, e.N == e.U;
}
function ye(e) {
  return e.h - ae;
}
function y_(e) {
  return e < 256 ? A_[e] : A_[256 + (e >> 7)];
}
function v_(e) {
  let t = Ce + 7, n = 1 << t, r = (1 << t) - 1, i = O.floor((t + I - 1) / I), f = 1 << 8 + Ce;
  return { ...$e(e, 15), o: e, Y: 42, P: 0, B: void 0, F: 32767, G: t, V: n, L: r, X: i, $: new g(32768), K: new g(n), ee: f, D: new p(32768), te: 0, ne: 32768, j: 0, re: 0, ie: 0, fe: 0, le: 0, _e: 0, oe: -2, ae: 0, ue: 0, ce: 0, se: 0, he: 0, de: 0, we: 0, be: 0, ke: 0, ge: 0, me: 0, ve: 0, pe: 0, xe: 0, Te: new R(2 * Te + 1), ye: new p(2 * Te + 1), Ie: new g(be + 1), N: 0, U: 0, Me: Z, A: 0, ze: 0, Ce: 0, Ze: 8, We: 32768, qe: 0, Oe: 0, Se: 0, H: new k(fe).fill(0).map(() => J()), J: new k(2 * me + 1).fill(0).map(() => J()), De: new k(2 * oe + 1).fill(0).map(() => J()), je: w_(), Ae: w_(), Qe: w_() };
}
function I_(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 2) {
    let r = e[n], i = e[n + 1], f = J();
    f.Ne = r, f.Re = i, t.push(f);
  }
  return t;
}
function J() {
  return { R: 0, Ne: 0, He: 0, Re: 0 };
}
function w_() {
  return new ne([], bn(null, Z, 0, 0, 0));
}
function bn(e, t, n, r, i) {
  return new re(e, t, n, r, i);
}
function Q_() {
  let e = new k(288).fill(0);
  for (let t = 0; t <= 143; t++) e[t] = 8;
  for (let t = 144; t <= 255; t++) e[t] = 9;
  for (let t = 256; t <= 279; t++) e[t] = 7;
  for (let t = 280; t <= 287; t++) e[t] = 8;
  return e;
}
function k_(e) {
  let { code: t, length: n } = sn(e), r = new g(2 * e.length), i = 0;
  for (let f = 0; f < e.length; f++) {
    let e2 = n[f] || 0, l = t[f] || 0;
    r[i++] = e2 ? Qe(l, e2) : 0, r[i++] = e2;
  }
  return new g(r);
}
function et(e, t, n) {
  let r = 0;
  for (let n2 = 0; n2 < e.length; n2++) {
    let i2 = t[n2] ? 1 << t[n2] : 1, f2 = e[n2] + i2 - 1;
    f2 > r && (r = f2);
  }
  r < n && (r = n);
  let i = new p(r + 1);
  for (let n2 = 0; n2 <= r; n2++) for (let r2 = 0; r2 < e.length; r2++) {
    let f2 = t[r2] ? 1 << t[r2] : 1, l = e[r2];
    if (n2 >= l && n2 <= l + f2 - 1) {
      i[n2] = r2;
      break;
    }
  }
  let f = 0;
  for (let n2 = 0; n2 < e.length - 1; n2++) {
    let r2 = t[n2] ? 1 << t[n2] : 1, i2 = e[n2] + r2 - 1;
    i2 > f && (f = i2);
  }
  return i[f] = e.length - 1, i;
}
function _t(e, t) {
  let n = 0;
  for (let r2 = 0; r2 < e.length; r2++) {
    let i = t[r2] ? 1 << t[r2] : 1, f = e[r2] + i - 1;
    f > n && (n = f);
  }
  let r = new p(n + 1);
  for (let i = 0; i <= n; i++) for (let n2 = 0; n2 < e.length; n2++) {
    let f = t[n2] ? 1 << t[n2] : 1, l = e[n2];
    if (i >= l && i <= l + f - 1) {
      r[i] = n2;
      break;
    }
  }
  return r;
}
function tt(e) {
  let t = new p(512), n = e.length - 1;
  for (let r = 0; r < 256; r++) t[r] = r <= n ? e[r] : e[n];
  for (let r = 256; r <= n; r++) {
    let n2 = r >> 7;
    t[256 + (n2 > 255 ? 255 : n2)] = e[r];
  }
  for (let e2 = 257; e2 < 512; e2++) 0 == t[e2] && (t[e2] = t[e2 - 1]);
  return t;
}
function sn(e) {
  let t = O.max(...e), n = new k(t + 1).fill(0);
  for (let t2 of e) t2 > 0 && n[t2]++;
  let r = new k(e.length).fill(0), i = new k(t + 1).fill(0), f = 0;
  for (let e2 = 1; e2 <= t; e2++) f = f + n[e2 - 1] << 1, i[e2] = f;
  for (let t2 = 0; t2 < e.length; t2++) {
    let n2 = e[t2];
    0 != n2 && (r[t2] = i[n2]++);
  }
  return { code: r, length: e };
}
var Ce = 8;
var I = 3;
var ee = 258;
var ae = ee + I + 1;
var nt = 4096;
var Ue = 16;
var He = ee;
var hn = 29;
var ie = 256;
var Te = ie + 1 + hn;
var me = 30;
var oe = 19;
var fe = 2 * Te + 1;
var be = 15;
var rt = 9;
var at = 255;
var it = 32;
var ot = 4;
var ve = 256;
var t_ = 16;
var n_ = 17;
var r_ = 18;
var ft = 0;
var N_ = 1;
var lt = 2;
var Q = -1;
var J_ = ["need dictionary", "stream end", "", "file error", "stream error", "data error", "insufficient memory", "buffer error", ""];
var a_ = te(de);
var i_ = te(Se);
var Be = new g(19);
Be[16] = 2, Be[17] = 3, Be[18] = 7;
var xn = k_(Q_());
var pn = k_(new k(30).fill(5));
var Fe = I_(xn);
var R_ = I_(pn);
var __ = et(ge, a_, ee);
var A_ = tt(_t(Ee, i_));
function se(e, t, n) {
  if (void 0 === t || void 0 === n) return 1;
  let r = 65535 & e, i = e >>> 16 & 65535, f = 0;
  for (; n > 0; ) {
    let e2 = n > 2e3 ? 2e3 : n;
    n -= e2;
    do {
      r = r + t[f++] | 0, i = i + r | 0;
    } while (--e2);
    r %= 65521, i %= 65521;
  }
  return (i << 16 | r) >>> 0;
}
var Ze = [[], [], [], [], [], [], [], []];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let e2 = 0; e2 < 8; e2++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
  Ze[0][e] = t;
}
for (let e = 0; e < 256; e++) for (let t = 1; t < 8; t++) {
  let n = Ze[t - 1][e];
  Ze[t][e] = n >>> 8 ^ Ze[0][255 & n];
}
var [ut, Sn, En, gn, Tn, wn, An, Dn] = Ze;
function W(e = 0, t, n) {
  if (!t) return 0;
  void 0 === n && (n = t.length);
  let r = 0 | ~e, i = 0;
  if ((n = O.min(n, t.length)) >= 8) {
    let e2 = new DataView(t.buffer, t.byteOffset, n), f = n - 8;
    for (; i <= f; i += 8) {
      let t2 = r ^ e2.getInt32(i, true), n2 = e2.getInt32(i + 4, true);
      r = Dn[255 & t2] ^ An[t2 >>> 8 & 255] ^ wn[t2 >>> 16 & 255] ^ Tn[t2 >>> 24 & 255] ^ gn[255 & n2] ^ En[n2 >>> 8 & 255] ^ Sn[n2 >>> 16 & 255] ^ ut[n2 >>> 24 & 255];
    }
  }
  for (; i < n; i++) r = r >>> 8 ^ ut[255 & (r ^ t[i])];
  return (4294967295 ^ r) >>> 0;
}
function xt(e) {
  16 == e.T ? (Ae(e, e.p), e.p = 0, e.T = 0) : e.T >= 8 && (T8(e, e.p), e.p >>= 8, e.T -= 8);
}
function pt(e) {
  e.T > 8 ? Ae(e, e.p) : e.T > 0 && T8(e, e.p), e.ze = 1 + (e.T - 1 & 7), e.p = 0, e.T = 0;
}
function yn(e, t, n) {
  let r, i, f = [], l = 0;
  for (r = 1; r <= be; r++) l = l + n[r - 1] << 1, f[r] = l;
  for (i = 0; i <= t; i++) {
    let t2 = e[i].Re;
    0 != t2 && (e[i].Ne = Qe(f[t2]++, t2));
  }
}
function C(e, t, n) {
  e.T > Ue - n ? (e.p = 65535 & (e.p | t << e.T), Ae(e, e.p), e.p = t >> Ue - e.T & 65535, e.T += n - Ue) : (e.p = 65535 & (e.p | t << e.T), e.T += n);
}
function St(e) {
  for (let t = 0; t < e.H.length; t++) e.H[t].R = 0;
  for (let t = 0; t < e.J.length; t++) e.J[t].R = 0;
  for (let t = 0; t < e.De.length; t++) e.De[t].R = 0;
  e.H[ve].R = 1, e.ie = e.fe = 0, e.N = e.le = 0;
}
function Et(e) {
  if (e.H && e.H.length >= fe) for (let t = 0; t < fe; t++) e.H[t] = J();
  else {
    e.H = [];
    for (let t = 0; t < fe; t++) e.H.push(J());
  }
  if (e.J && e.J.length >= 2 * me + 1) for (let t = 0; t < 2 * me + 1; t++) e.J[t] = J();
  else {
    e.J = [];
    for (let t = 0; t < 2 * me + 1; t++) e.J.push(J());
  }
  if (e.De && e.De.length >= 2 * oe + 1) for (let t = 0; t < 2 * oe + 1; t++) e.De[t] = J();
  else {
    e.De = [];
    for (let t = 0; t < 2 * oe + 1; t++) e.De.push(J());
  }
  e.je = new ne(e.H, new re(Fe, a_, ie + 1, Te, be)), e.Ae = new ne(e.J, new re(R_, i_, 0, me, be)), e.Qe = new ne(e.De, new re(null, Be, 0, oe, 7)), e.p = 0, e.T = 0, e.ze = 0, St(e);
}
var he = 1;
function vn(e, t, n) {
  return n = e.Te[he], e.Te[he] = e.Te[e.Oe--], z_(e, t, he), n;
}
function mt(e, t, n, r) {
  return e[t].R < e[n].R || e[t].R == e[n].R && r[t] <= r[n];
}
function z_(e, t, n) {
  let r = e.Te[n], i = n << 1;
  for (; i <= e.Oe && (i < e.Oe && mt(t, e.Te[i + 1], e.Te[i], e.ye) && i++, !mt(t, r, e.Te[i], e.ye)); ) e.Te[n] = e.Te[i], n = i, i <<= 1;
  e.Te[n] = r;
}
function In(e, t) {
  let n, r, i, f, l, _, o = t.I, a = t.C, u = t.M.Z, c = t.M.W, s = t.M.q, h = t.M.S, d = 0;
  for (f = 0; f <= be; f++) e.Ie[f] = 0;
  for (o[e.Te[e.Se]].Re = 0, n = e.Se + 1; n < fe; n++) r = e.Te[n], f = o[o[r].He].Re + 1, f > h && (f = h, d++), o[r].Re = f, !(r > a) && (e.Ie[f]++, l = 0, r >= s && (l = c[r - s]), _ = o[r].R, e.ie += _ * (f + l), u && (e.fe += _ * (u[r].Re + l)));
  if (0 != d) {
    do {
      for (f = h - 1; 0 == e.Ie[f]; ) f--;
      e.Ie[f]--, e.Ie[f + 1] += 2, e.Ie[h]--, d -= 2;
    } while (d > 0);
    for (f = h; 0 != f; f--) for (r = e.Ie[f]; 0 != r; ) i = e.Te[--n], !(i > a) && (o[i].Re != f && (e.ie += (f - o[i].Re) * o[i].R, o[i].Re = f), r--);
  }
}
function O_(e, t) {
  let n, r, i, f = t.I, l = t.M.Z, _ = t.M.O, o = -1;
  for (e.Oe = 0, e.Se = fe, n = 0; n < _; n++) 0 != f[n].R ? (e.Te[++e.Oe] = o = n, e.ye[n] = 0) : f[n].Re = 0;
  for (; e.Oe < 2; ) i = e.Te[++e.Oe] = o < 2 ? ++o : 0, f[i].R = 1, e.ye[i] = 0, e.ie--, l && (e.fe -= l[i].Re);
  for (t.C = o, n = O.floor(e.Oe / 2); n >= 1; n--) z_(e, f, n);
  i = _;
  do {
    n = vn(e, f, n), r = e.Te[he], e.Te[--e.Se] = n, e.Te[--e.Se] = r, f[i].R = f[n].R + f[r].R, e.ye[i] = (e.ye[n] >= e.ye[r] ? e.ye[n] : e.ye[r]) + 1, f[n].He = f[r].He = i, e.Te[he] = i++, z_(e, f, he);
  } while (e.Oe >= 2);
  e.Te[--e.Se] = e.Te[he], In(e, t), yn(f, t.C, e.Ie);
}
function bt(e, t, n) {
  let r, i, f = -1, l = t[0].Re, _ = 0, o = 7, a = 4;
  for (0 == l && (o = 138, a = 3), t[n + 1].Re = 65535, r = 0; r <= n; r++) i = l, l = t[r + 1].Re, !(++_ < o && i == l) && (_ < a ? e.De[i].R += _ : 0 != i ? (i != f && e.De[i].R++, e.De[t_].R++) : _ <= 10 ? e.De[n_].R++ : e.De[r_].R++, _ = 0, f = i, 0 == l ? (o = 138, a = 3) : i == l ? (o = 6, a = 3) : (o = 7, a = 4));
}
function st(e, t, n) {
  let r, i = -1, f = t[0].Re, l = 0, _ = 7, o = 4;
  0 == f && (_ = 138, o = 3);
  for (let a = 0; a <= n; a++) if (r = f, f = t[a + 1].Re, !(++l < _ && r == f)) {
    if (l < o) do {
      C(e, e.De[r].Ne, e.De[r].Re);
    } while (0 != --l);
    else 0 != r ? (r != i && (C(e, e.De[r].Ne, e.De[r].Re), l--), C(e, e.De[t_].Ne, e.De[t_].Re), C(e, l - 3, 2)) : l <= 10 ? (C(e, e.De[n_].Ne, e.De[n_].Re), C(e, l - 3, 3)) : (C(e, e.De[r_].Ne, e.De[r_].Re), C(e, l - 11, 7));
    l = 0, i = r, 0 == f ? (_ = 138, o = 3) : r == f ? (_ = 6, o = 3) : (_ = 7, o = 4);
  }
}
function kn(e) {
  let t;
  for (bt(e, e.H, e.je.C), bt(e, e.J, e.Ae.C), O_(e, e.Qe), t = oe - 1; t >= 3 && 0 == e.De[pe[t]].Re; t--) ;
  return e.ie += 3 * (t + 1) + 5 + 5 + 4, t;
}
function Nn(e, t, n, r) {
  let i;
  for (C(e, t - 257, 5), C(e, n - 1, 5), C(e, r - 4, 4), i = 0; i < r; i++) C(e, e.De[pe[i]].Re, 3);
  st(e, e.H, t - 1), st(e, e.J, n - 1);
}
function Pe(e, t, n, r, i = 0) {
  C(e, (ft << 1) + r, 3), pt(e), Ae(e, n), Ae(e, ~n), n && t && M(e.D, e.j, t, i, n), e.j += n;
}
function gt(e) {
  xt(e);
}
function Tt(e) {
  C(e, N_ << 1, 3), C(e, Fe[ve].Ne, Fe[ve].Re), xt(e);
}
function ht(e, t, n) {
  let r, i, f, l, _ = 0;
  if (0 != e.N) do {
    r = 255 & e.Me[_], r += (255 & e.Me[_ + 1]) << 8, i = e.Me[_ + 2], _ += 3, 0 == r ? C(e, t[i].Ne, t[i].Re) : (f = __[i], C(e, t[f + ie + 1].Ne, t[f + ie + 1].Re), l = a_[f], 0 != l && (i -= ge[f], C(e, i, l)), r--, f = y_(r), C(e, n[f].Ne, n[f].Re), l = i_[f], 0 != l && (r -= Ee[f], C(e, r, l)));
  } while (_ < e.N);
  C(e, t[ve].Ne, t[ve].Re);
}
function Rn(e) {
  let t, n = 4093624447;
  for (t = 0; t <= 31; t++, n >>= 1) if (1 & n && 0 != e.H[t].R) return 0;
  if (0 != e.H[9].R || 0 != e.H[10].R || 0 != e.H[13].R) return 1;
  for (t = 32; t < ie; t++) if (0 != e.H[t].R) return 1;
  return 0;
}
function wt(e, t, n, r, i = 0) {
  let f, l, _ = 0;
  e.ke > 0 ? (2 == e.o.t && (e.o.t = Rn(e)), O_(e, e.je), O_(e, e.Ae), _ = kn(e), f = e.ie + 3 + 7 >> 3, l = e.fe + 3 + 7 >> 3, (l <= f || 4 == e.ge) && (f = l)) : f = l = n + 5, n + 4 <= f && t ? Pe(e, t, n, r, i) : l == f ? (C(e, (N_ << 1) + r, 3), ht(e, Fe, R_)) : (C(e, (lt << 1) + r, 3), Nn(e, e.je.C + 1, e.Ae.C + 1, _ + 1), ht(e, e.H, e.J)), St(e), r && pt(e);
}
function vt() {
  let e = je();
  return e._ = v_(e), e;
}
var Ye = [{ Je: Ot, Ue: 0, Ee: 0, Ye: 0, Pe: 0 }, { Je: U_, Ue: 4, Ee: 4, Ye: 8, Pe: 4 }, { Je: U_, Ue: 4, Ee: 5, Ye: 16, Pe: 8 }, { Je: U_, Ue: 4, Ee: 6, Ye: 32, Pe: 32 }, { Je: Ne, Ue: 4, Ee: 4, Ye: 16, Pe: 16 }, { Je: Ne, Ue: 8, Ee: 16, Ye: 32, Pe: 32 }, { Je: Ne, Ue: 8, Ee: 16, Ye: 128, Pe: 128 }, { Je: Ne, Ue: 8, Ee: 32, Ye: 128, Pe: 256 }, { Je: Ne, Ue: 32, Ee: 128, Ye: 258, Pe: 1024 }, { Je: Ne, Ue: 32, Ee: 258, Ye: 258, Pe: 4096 }];
function At(e) {
  return 2 * e - (e > 4 ? 9 : 0);
}
function l_(e, t, n) {
  return ((t << e.X ^ n) & e.L) >>> 0;
}
function u_(e, t) {
  e.be = l_(e, e.be, e.u[t + (I - 1)]);
  let n = e.$[t & e.F] = e.K[e.be];
  return e.K[e.be] = t, n;
}
function It(e) {
  e.K[e.V - 1] = 0, Ve(e.K, 0, (e.V - 1) * e.K.BYTES_PER_ELEMENT);
}
function Bn(e) {
  let t, n, r = e.h;
  for (t = e.V; t > 0; ) t--, n = e.K[t], e.K[t] = n >= r ? n - r : 0;
  for (t = r; t > 0; ) t--, n = e.$[t], e.$[t] = n >= r ? n - r : 0;
}
function H_(e, t, n, r) {
  let i = e.avail_in;
  return i > r && (i = r), 0 == i ? 0 : (e.avail_in -= i, M(t, n, e.next_in, e.next_in_index, i), 1 == e._.P ? e.i = se(e.i, new p(t.buffer, t.byteOffset + n, i), i) : 2 == e._.P && (e.i = W(e.i, new p(t.buffer, t.byteOffset + n, i), i)), e.next_in_index += i, e.total_in += i, i);
}
function c_(e) {
  let t, n, r = e.h;
  do {
    if (n = e.We - e.ce - e.ue, 0 == n && 0 == e.ue && 0 == e.ce ? n = r : -1 == n && n--, e.ue >= r + ye(e) && (M(e.u, 0, e.u, r, r - n), e.qe -= r, e.ue -= r, e.ae -= r, e._e > e.ue && (e._e = e.ue), Bn(e), n += r), 0 == e.o.avail_in) break;
    if (t = H_(e.o, e.u, e.ue + e.ce, n), e.ce += t, e.ce + e._e >= I) {
      let t2 = e.ue - e._e;
      for (e.be = e.u[t2], e.be = l_(e, e.be, e.u[t2 + 1]); e._e && (e.be = l_(e, e.be, e.u[t2 + I - 1]), e.$[t2 & e.F] = e.K[e.be], e.K[e.be] = t2, t2++, e._e--, !(e.ce + e._e < I)); ) ;
    }
  } while (e.ce < ae && 0 != e.o.avail_in);
  if (e.m < e.We) {
    let t2, n2 = e.ue + e.ce;
    e.m < n2 ? (t2 = e.We - n2, t2 > He && (t2 = He), Ve(e.u, n2, t2), e.m = n2 + t2) : e.m < n2 + He && (t2 = n2 + He - e.m, t2 > e.We - e.m && (t2 = e.We - e.m), Ve(e.u, e.m, t2), e.m += t2);
  }
}
function kt(e, t, n = 8, r = 15, i = Ce, f = 0) {
  let l = 1;
  if (!e) return -2;
  if (e.msg = "", -1 == t && (t = 6), r < 0) {
    if (l = 0, r < -15) return -2;
    r = -r;
  } else r > 15 && (l = 2, r -= 16);
  if (i < 1 || i > rt || 8 != n || r < 8 || r > 15 || t < 0 || t > 9 || f < 0 || f > 4 || 8 == r && 1 != l) return -2;
  8 == r && (r = 9);
  let _ = v_(e);
  return _ ? (e._ = _, _.o = e, _.Y = 42, _.P = l, _.B = void 0, _.k = r, _.h = 1 << _.k, _.F = _.h - 1, _.G = i + 7, _.V = 1 << _.G, _.L = _.V - 1, _.X = (_.G + I - 1) / I, _.u = new p(2 * _.h), _.$ = new g(_.h), _.K = new g(_.V), _.m = 0, _.ee = 1 << i + 6, _.D = new p(_.ee * ot), _.ne = 4 * _.ee, _.u && _.$ && _.K && _.D ? (_.Me = _.D.subarray(_.ee), _.A = _.te + _.ee, _.U = 3 * (_.ee - 1), _.ke = t, _.ge = f, _.Ze = n, Pn(e)) : (_.Y = 666, e.msg = D_(-4), P_(e), -4)) : -4;
}
function Z_(e) {
  if (null == e) return true;
  let t = e._;
  return !t || t.o != e || 42 != t.Y && 57 != t.Y && 69 != t.Y && 73 != t.Y && 91 != t.Y && 103 != t.Y && 113 != t.Y && 666 != t.Y;
}
function Fn(e) {
  let t;
  return Z_(e) ? -2 : (e.total_in = e.total_out = 0, e.msg = "", e.t = 2, t = e._, t.j = 0, t.re = t.te, t.P < 0 && (t.P = -t.P), t.Y = 2 == t.P ? 57 : 42, e.i = 2 == t.P ? W(0) : se(0), t.oe = -2, Et(t), 0);
}
function Zn(e) {
  e.We = 2 * e.h, It(e), e.xe = Ye[e.ke].Ee, e.me = Ye[e.ke].Ue, e.ve = Ye[e.ke].Ye, e.pe = Ye[e.ke].Pe, e.ue = 0, e.ae = 0, e.ce = 0, e._e = 0, e.se = e.he = I - 1, e.we = 0, e.be = 0;
}
function Pn(e) {
  let t = Fn(e);
  return 0 == t && Zn(e._), t;
}
function Me(e, t) {
  T8(e, t >> 8), T8(e, 255 & t);
}
function q(e) {
  let t, n = e._;
  gt(n), t = n.j, t > e.avail_out && (t = e.avail_out), 0 != t && (M(e.next_out, e.next_out_index, n.D, n.re, t), e.next_out_index += t, n.re += t, e.total_out += t, e.avail_out -= t, n.j -= t, 0 == n.j && (n.re = n.te));
}
function Ie(e, t) {
  let n = e._;
  n.B && n.B.Be && (e.i = W(e.i, new p(n.D.buffer, n.te + t, n.j - t), n.j - t));
}
function Nt(e, t) {
  let n, r = e._;
  if (Z_(e) || t > 5 || t < 0) return we(e, -2);
  if (!e.next_out || 0 != e.avail_in && !e.next_in || 666 == r.Y && 4 != t) return we(e, -2);
  if (0 == e.avail_out) return we(e, -5);
  if (n = r.oe, r.oe = t, 0 != r.j) {
    if (q(e), 0 == e.avail_out) return r.oe = Q, 0;
  } else if (0 == e.avail_in && At(t) <= At(n) && 4 != t) return we(e, -5);
  if (666 == r.Y && 0 != e.avail_in) return we(e, -5);
  if (42 == r.Y && 0 == r.P && (r.Y = 113), 42 == r.Y) {
    let t2, n2 = 8 + (r.k - 8 << 4) << 8;
    if (t2 = r.ge >= 2 || r.ke < 2 ? 0 : r.ke < 6 ? 1 : 6 == r.ke ? 2 : 3, n2 |= t2 << 6, 0 != r.ue && (n2 |= it), n2 += 31 - n2 % 31, Me(r, n2), 0 != r.ue && (Me(r, e.i >> 16), Me(r, 65535 & e.i)), e.i = 1, r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (57 == r.Y) {
    if (e.i = W(0), T8(r, 31), T8(r, 139), T8(r, 8), r.B) T8(r, (r.B.Fe ? 1 : 0) + (r.B.Be ? 2 : 0) + (null == r.B.Ge ? 0 : 4) + (null == r.B.Ve ? 0 : 8) + (null == r.B.Le ? 0 : 16)), T8(r, 255 & r.B.Xe), T8(r, r.B.Xe >>> 8 & 255), T8(r, r.B.Xe >>> 16 & 255), T8(r, r.B.Xe >>> 24 & 255), T8(r, 9 == r.ke ? 2 : r.ge >= 2 || r.ke < 2 ? 4 : 0), T8(r, 255 & r.B.$e), null != r.B.Ge && (T8(r, 255 & r.B.Ke), T8(r, r.B.Ke >>> 8 & 255)), r.B.Be && (e.i = W(e.i, r.D, r.j)), r.Ce = 0, r.Y = 69;
    else if (T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 9 == r.ke ? 2 : r.ge >= 2 || r.ke < 2 ? 4 : 0), T8(r, at), r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (69 == r.Y) {
    if (r.B && null != r.B.Ge) {
      let t2 = r.j, n2 = (65535 & r.B.Ke) - r.Ce;
      for (; r.j + n2 > r.ne; ) {
        let i = r.ne - r.j;
        if (M(r.D, r.j, r.B.Ge, r.Ce, i), r.j = r.ne, Ie(e, t2), r.Ce += i, q(e), 0 != r.j) return r.oe = Q, 0;
        t2 = 0, n2 -= i;
      }
      M(r.D, r.j, r.B.Ge, r.Ce, n2), r.j += n2, Ie(e, t2), r.Ce = 0;
    }
    r.Y = 73;
  }
  if (73 == r.Y) {
    if (r.B && r.B.Ve && r.B.Ve.length) {
      let t2, n2 = r.j;
      do {
        if (r.j == r.ne) {
          if (Ie(e, n2), q(e), 0 != r.j) return r.oe = Q, 0;
          n2 = 0;
        }
        t2 = r.B.Ve[r.Ce++], T8(r, t2);
      } while (0 != t2);
      Ie(e, n2), r.Ce = 0;
    }
    r.Y = 91;
  }
  if (91 == r.Y) {
    if (r.B && r.B.Le && r.B.Le.length) {
      let t2, n2 = r.j;
      do {
        if (r.j == r.ne) {
          if (Ie(e, n2), q(e), 0 != r.j) return r.oe = Q, 0;
          n2 = 0;
        }
        t2 = r.B.Le[r.Ce++], T8(r, t2);
      } while (0 != t2);
      Ie(e, n2);
    }
    r.Y = 103;
  }
  if (103 == r.Y) {
    if (r.B && r.B.Be) {
      if (r.j + 2 > r.ne && (q(e), 0 != r.j)) return r.oe = Q, 0;
      T8(r, 255 & e.i), T8(r, e.i >>> 8 & 255), e.i = W(0);
    }
    if (r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (0 != e.avail_in || 0 != r.ce || 0 != t && 666 != r.Y) {
    let n2 = 0 == r.ke ? Ot(r, t) : 2 == r.ge ? Yn(r, t) : 3 == r.ge ? Mn(r, t) : Ye[r.ke].Je(r, t);
    if ((2 == n2 || 3 == n2) && (r.Y = 666), 0 == n2 || 2 == n2) return 0 == e.avail_out && (r.oe = Q), 0;
    if (1 == n2 && (1 == t ? Tt(r) : 5 != t && (Pe(r, null, 0, 0), 3 == t && (It(r), 0 == r.ce && (r.ue = 0, r.ae = 0, r._e = 0))), q(e), 0 == e.avail_out)) return r.oe = Q, 0;
  }
  return 4 != t ? 0 : r.P <= 0 ? 1 : (2 == r.P ? (T8(r, 255 & e.i), T8(r, e.i >>> 8 & 255), T8(r, e.i >>> 16 & 255), T8(r, e.i >>> 24 & 255), T8(r, 255 & e.total_in), T8(r, e.total_in >>> 8 & 255), T8(r, e.total_in >>> 16 & 255), T8(r, e.total_in >>> 24 & 255)) : (Me(r, e.i >>> 16 & 65535), Me(r, 65535 & e.i)), q(e), r.P > 0 && (r.P = -r.P), 0 != r.j ? 0 : 1);
}
function P_(e) {
  if (Z_(e)) return -2;
  let t = e._, n = t.Y;
  return t.u = Z, t.$ = qe, t.K = qe, t.D = Z, t.Me = Z, t.Te = new R(0), t.ye = Z, t.Ie = qe, t.H.length = 0, t.J.length = 0, t.De.length = 0, t.B = void 0, t.te = 0, t.re = 0, t.A = 0, 113 == n ? -3 : 0;
}
function Rt(e, t) {
  let n, r, i = e.pe, f = e.ue, l = e.he, _ = e.ve, o = e.ue > ye(e) ? e.ue - ye(e) : 0, a = e.$, u = e.F, c = e.u, s = e.ce, h = ee < s ? ee : s, d = c[f], w = c[f + 1], b = c[f + l - 1], k2 = c[f + l];
  l >= e.me && (i >>= 2), _ > s && (_ = s);
  do {
    if (n = t, c[n + l] != k2 || c[n + l - 1] != b || c[n] != d || c[n + 1] != w) continue;
    let i2 = 2;
    for (; i2 < h && c[f + i2] == c[n + i2]; ) i2++;
    if (r = i2, r > l) {
      if (e.qe = t, l = r, r >= _) break;
      b = c[f + l - 1], k2 = c[f + l];
    }
  } while ((t = a[t & u]) > o && 0 != --i);
  return l <= s ? l : s;
}
function zt(e, t) {
  wt(e, e.u, e.ue - e.ae, t, e.ae), e.ae = e.ue, q(e.o);
}
function j(e, t) {
  return zt(e, t ? 1 : 0), 0 == e.o.avail_out ? t ? 2 : 0 : null;
}
var Dt = 65535;
function ke(e, t) {
  return e < t ? e : t;
}
function Ot(e, t) {
  let n, r, i, f = ke(e.ne - 5, e.h), l = 0, _ = e.o.avail_in;
  do {
    if (n = Dt, i = e.T + 42 >> 3, e.o.avail_out < i || (i = e.o.avail_out - i, r = e.ue - e.ae, n > r + e.o.avail_in && (n = r + e.o.avail_in), n > i && (n = i), n < f && (0 == n && 4 != t || 0 == t || n != r + e.o.avail_in))) break;
    l = 4 == t && n == r + e.o.avail_in ? 1 : 0, Pe(e, null, 0, l), e.D[e.j - 4] = n, e.D[e.j - 3] = n >> 8, e.D[e.j - 2] = ~n, e.D[e.j - 1] = ~n >> 8, q(e.o), r && (r > n && (r = n), M(e.o.next_out, e.o.next_out_index, e.u, e.ae, r), e.o.next_out_index += r, e.o.avail_out -= r, e.o.total_out += r, e.ae += r, n -= r), n && (H_(e.o, e.o.next_out, e.o.next_out_index, n), e.o.next_out_index += n, e.o.avail_out -= n, e.o.total_out += n);
  } while (0 == l);
  if (_ -= e.o.avail_in, _) {
    if (_ >= e.h) {
      e.le = 2;
      let t2 = e.o.next_in_index - e.h;
      M(e.u, 0, e.o.next_in, t2, e.h), e.ue = e.h, e._e = e.ue;
    } else e.We - e.ue <= _ && (e.ue -= e.h, M(e.u, 0, e.u, e.h, e.ue), e.le < 2 && e.le++, e._e > e.ue && (e._e = e.ue)), M(e.u, e.ue, e.o.next_in, e.o.next_in_index - _, _), e.ue += _, e._e += ke(_, e.h - e._e);
    e.ae = e.ue;
  }
  return e.m < e.ue && (e.m = e.ue), l ? (e.ze = 8, 3) : 0 != t && 4 != t && 0 == e.o.avail_in && e.ue == e.ae ? 1 : (i = e.We - e.ue, e.o.avail_in > i && e.ae >= e.h && (e.ae -= e.h, e.ue -= e.h, M(e.u, 0, e.u, e.h, e.ue), e.le < 2 && e.le++, i += e.h, e._e > e.ue && (e._e = e.ue)), i > e.o.avail_in && (i = e.o.avail_in), i && (H_(e.o, e.u, e.ue, i), e.ue += i, e._e += ke(i, e.h - e._e)), e.m < e.ue && (e.m = e.ue), i = e.T + 42 >> 3, i = ke(e.ne - i, Dt), f = ke(i, e.h), r = e.ue - e.ae, (r >= f || (r || 4 == t) && 0 != t && 0 == e.o.avail_in && r <= i) && (n = ke(r, i), l = 4 == t && 0 == e.o.avail_in && n == r ? 1 : 0, Pe(e, e.u, n, l, e.ae), e.ae += n, q(e.o)), l && (e.ze = 8), l ? 2 : 0);
}
function U_(e, t) {
  let n, r = false;
  for (; ; ) {
    if (e.ce < ae) {
      if (c_(e), e.ce < ae && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (n = 0, e.ce >= I && (n = u_(e, e.ue)), 0 != n && e.ue - n <= ye(e) && (e.se = Rt(e, n)), e.se >= I) if (e.ue, e.qe, e.se, r = e_(e, e.ue - e.qe, e.se - I), e.ce -= e.se, e.se <= e.xe && e.ce >= I) {
      e.se--;
      do {
        e.ue++, n = u_(e, e.ue);
      } while (0 != --e.se);
      e.ue++;
    } else e.ue += e.se, e.se = 0, e.be = e.u[e.ue], e.be = l_(e, e.be, e.u[e.ue + 1]);
    else r = De(e, e.u[e.ue]), e.ce--, e.ue++;
    if (r) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = e.ue < I - 1 ? e.ue : I - 1, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Ne(e, t) {
  let n, r = false;
  for (; ; ) {
    if (e.ce < ae) {
      if (c_(e), e.ce < ae && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (n = 0, e.ce >= I && (n = u_(e, e.ue)), e.he = e.se, e.de = e.qe, e.se = I - 1, 0 != n && e.he < e.xe && e.ue - n <= ye(e) && (e.se = Rt(e, n), e.se <= 5 && (1 == e.ge || e.se == I && e.ue - e.qe > nt) && (e.se = I - 1)), e.he >= I && e.se <= e.he) {
      let t2 = e.ue + e.ce - I;
      e.ue, e.de, e.he, r = e_(e, e.ue - 1 - e.de, e.he - I), e.ce -= e.he - 1, e.he -= 2;
      do {
        ++e.ue <= t2 && (n = u_(e, e.ue));
      } while (0 != --e.he);
      if (e.we = 0, e.se = I - 1, e.ue++, r) {
        let t3 = j(e, false);
        if (null != t3) return t3;
      }
    } else if (e.we) {
      if (r = De(e, e.u[e.ue - 1]), r && zt(e, 0), e.ue++, e.ce--, 0 == e.o.avail_out) return 0;
    } else e.we = 1, e.ue++, e.ce--;
  }
  if (e.we && (r = De(e, e.u[e.ue - 1]), e.we = 0), e._e = e.ue < I - 1 ? e.ue : I - 1, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Mn(e, t) {
  let n, r, i, f;
  for (; ; ) {
    if (e.ce <= ee) {
      if (c_(e), e.ce <= ee && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (e.se = 0, e.ce >= I && e.ue > 0 && (i = e.ue - 1, r = e.u[i], r == ++i && r == ++i && r == ++i)) {
      f = e.ue + ee;
      do {
      } while (r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && i < f);
      e.se = ee - (f - i), e.se > e.ce && (e.se = e.ce);
    }
    if (e.se >= I ? (e.ue, e.ue, e.se, n = e_(e, 1, e.se - I), e.ce -= e.se, e.ue += e.se, e.se = 0) : (n = De(e, e.u[e.ue]), e.ce--, e.ue++), n) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = 0, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Yn(e, t) {
  let n = false;
  for (; ; ) {
    if (0 == e.ce && (c_(e), 0 == e.ce)) {
      if (0 == t) return 0;
      break;
    }
    if (e.se = 0, n = De(e, e.u[e.ue]), e.ce--, e.ue++, n) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = 0, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
var ue = 852;
var d_ = 592;
var m_ = 594;
var Lt = Ee.map((e) => e + 1);
var Ct = ge.subarray(0, -1).map((e) => e + 3);
var Xn = [16, 1, 73, 1, 200, 1];
var Wn = [144, 1, 72, 1, 78, 1];
var Ut = Se.map(qt);
var Ht = Se.map(Vt);
Ut.push(64, 2), Ht.push(142, 2);
var Bt = de.slice(0, -2).map(qt);
var Ft = de.slice(0, -2).map(Vt);
Bt.push(...Xn), Ft.push(...Wn);
var Zt = new g([...Ct, 258, 0, 0]);
var Pt = new g([...Ct, 3, 0, 0]);
var Mt = te(Bt);
var Yt = te(Ft);
var Xt = new g([...Lt, 0, 0]);
var Wt = new g([...Lt, 32769, 49153]);
var Gt = te(Ut);
var Kt = te(Ht);
function qt(e, t) {
  return t % 2 ? e : e + 16;
}
function Vt(e, t) {
  return t % 2 ? e : e + 128;
}
function $t(e, t) {
  let n, r = e._, i = e.next_in_index, f = e.next_out_index, l = e.next_in, _ = e.next_out, o = r.u, a = r.p >>> 0, u = r.T >>> 0, c = r.et, s = r.tt, h = (1 << r.nt) - 1, d = (1 << r.rt) - 1, w = r.h >>> 0, b = r.m >>> 0, k2 = r.v >>> 0, g2 = r.it, m = f - (t - e.avail_out), v = f + (e.avail_out - 257), p2 = i + (e.avail_in - 5), x = 0, T9 = 0, y = 0, I2 = 0;
  e: do {
    for (; u < 15; ) {
      if (!(i < l.length)) break e;
      a += l[i++] << u, u += 8;
    }
    n = c[a & h];
    t: for (; ; ) {
      if (y = n >>> 16 & 255, a >>>= y, u -= y, y = n >>> 24, 0 == y) {
        _[f++] = 65535 & n;
        break;
      }
      if (16 & y) {
        if (x = 65535 & n, y &= 15, y) {
          for (; u < y; ) {
            if (!(i < l.length)) {
              r.ft = 16200;
              break e;
            }
            a += l[i++] << u, u += 8;
          }
          x += a & (1 << y) - 1, a >>>= y, u -= y;
        }
        for (; u < 15; ) {
          if (!(i < l.length)) {
            r.ft = 16200;
            break e;
          }
          a += l[i++] << u, u += 8;
        }
        n = s[a & d];
        n: for (; ; ) {
          if (y = n >>> 16 & 255, a >>>= y, u -= y, y = n >>> 24, 16 & y) {
            if (T9 = 65535 & n, y &= 15, y) {
              for (; u < y; ) {
                if (!(i < l.length)) {
                  r.ft = 16200;
                  break e;
                }
                a += l[i++] << u, u += 8;
              }
              T9 += a & (1 << y) - 1, a >>>= y, u -= y;
            }
            let t2 = x, c2 = f - m;
            if (T9 > c2) {
              let n2 = T9 - c2;
              if (n2 > b && g2) {
                e.msg = "invalid distance too far back", r.ft = 16209;
                break e;
              }
              if (0 == k2) {
                if (I2 = w - n2, !(n2 < t2)) {
                  for (let e2 = 0; e2 < t2; ++e2) _[f++] = o[I2++];
                  continue e;
                }
                for (let e2 = 0; e2 < n2; ++e2) _[f++] = o[I2++];
                t2 -= n2, I2 = f - T9;
              } else if (k2 < n2) {
                I2 = w + k2 - n2;
                let e2 = n2 - k2;
                if (!(e2 < t2)) {
                  for (let e3 = 0; e3 < t2; ++e3) _[f++] = o[I2++];
                  continue e;
                }
                for (let t3 = 0; t3 < e2; ++t3) _[f++] = o[I2++];
                if (t2 -= e2, I2 = 0, !(k2 < t2)) {
                  for (let e3 = 0; e3 < t2; ++e3) _[f++] = o[I2++];
                  continue e;
                }
                for (let e3 = 0; e3 < k2; ++e3) _[f++] = o[I2++];
                t2 -= k2, I2 = f - T9;
              } else {
                if (I2 = k2 - n2, !(n2 < t2)) {
                  for (let e2 = 0; e2 < t2; ++e2) _[f++] = o[I2++];
                  continue e;
                }
                for (let e2 = 0; e2 < n2; ++e2) _[f++] = o[I2++];
                t2 -= n2, I2 = f - T9;
              }
              for (; t2 > 2; ) _[f++] = _[I2++], _[f++] = _[I2++], _[f++] = _[I2++], t2 -= 3;
              t2 && (_[f++] = _[I2++], t2 > 1 && (_[f++] = _[I2++]));
            } else {
              for (I2 = f - T9; t2 > 2; ) _[f++] = _[I2++], _[f++] = _[I2++], _[f++] = _[I2++], t2 -= 3;
              t2 && (_[f++] = _[I2++], t2 > 1 && (_[f++] = _[I2++]));
            }
            break;
          }
          if (64 & y) {
            e.msg = "invalid distance code", r.ft = 16209;
            break e;
          }
          n = s[(65535 & n) + (a & (1 << y) - 1)];
          continue n;
        }
        break;
      }
      if (64 & y) {
        if (32 & y) {
          r.ft = 16191;
          break e;
        }
        e.msg = "invalid literal/length code", r.ft = 16209;
        break e;
      }
      n = c[(65535 & n) + (a & (1 << y) - 1)];
      continue t;
    }
  } while (i < p2 && f < v);
  let M2 = u >> 3;
  i -= M2, u -= M2 << 3, a &= (1 << u) - 1, e.next_in_index = i, e.next_out_index = f, e.avail_in = i < p2 ? p2 - i + 5 : 5 - (i - p2), e.avail_out = f < v ? v - f + 257 : 257 - (f - v), r.p = a >>> 0, r.T = u >>> 0;
}
var Gn = new R(0);
function M_(e, t) {
  let n = Gn, r = t ? ue + m_ : ue + d_;
  return { ...$e(e, 0), o: e, ft: 16180, lt: false, P: 0, _t: false, ot: 0, ut: 0, ct: 0, st: 0, u: Z, ht: 0, dt: 0, Ge: 0, et: n, tt: n, nt: 0, rt: 0, wt: 0, bt: 0, kt: 0, gt: 0, vt: n, xt: new g(320), Tt: new g(288), yt: new R(r), It: 0, it: true, Mt: 0, zt: 0, Ct: t };
}
function We(e, t, n) {
  return e << 24 | t << 16 | n;
}
function b_(e = 0, t = 0, n = 0) {
  return We(e, t, n);
}
function s_(e = 1) {
  return We(64, e, 0);
}
function Jt(e = 0) {
  return We(96, e, 0);
}
function Y_(e) {
  return ((255 & e) << 24 | (e >> 8 & 255) << 16 | (e >> 16 & 255) << 8 | e >> 24 & 255) >>> 0;
}
var Oe = 15;
var qn = { Ct: false, Zt, Wt: Mt, qt: Xt, Ot: Gt, St: 20, Dt: 257, jt: 0, At: d_, Qt: false, Nt: true };
var Vn = { Ct: true, Zt: Pt, Wt: Yt, qt: Wt, Ot: Kt, St: 19, Dt: 256, jt: -1, At: m_, Qt: true, Nt: false };
function Le(e, t, n, r, i, f, l, _) {
  let o, a, u, c, s, h, d, w, b, k2, m, v, p2, x, T9, y, I2, M2, z2, C2 = new g(Oe + 1), Z2 = new g(Oe + 1), W2 = _ ? Vn : qn;
  for (o = 0; o <= Oe; o++) C2[o] = 0;
  for (a = 0; a < n; a++) C2[t[a]]++;
  for (s = i.Rt, c = Oe; c >= 1 && 0 == C2[c]; c--) ;
  if (s > c && (s = c), 0 == c) return W2.Nt ? (T9 = s_(1), r.Rt[0] = T9, r.Rt[1] = T9, i.Rt = 1, 0) : -1;
  for (u = 1; u < c && 0 == C2[u]; u++) ;
  for (s < u && (s = u), w = 1, o = 1; o <= Oe; o++) if (w <<= 1, w -= C2[o], w < 0) return -1;
  if (w > 0 && (0 == e || 1 != c)) return -1;
  for (Z2[1] = 0, o = 1; o < Oe; o++) Z2[o + 1] = Z2[o] + C2[o];
  for (a = 0; a < n; a++) 0 != t[a] && (f[Z2[t[a]]++] = a);
  switch (e) {
    case 0:
      I2 = M2 = f, z2 = W2.St;
      break;
    case 1:
      I2 = W2.Zt, M2 = W2.Wt, z2 = W2.Dt;
      break;
    default:
      I2 = W2.qt, M2 = W2.Ot, z2 = W2.jt;
  }
  if (k2 = 0, a = 0, o = u, y = l.Rt, h = s, d = 0, p2 = -1, b = 1 << s, x = b - 1, 1 == e && (W2.Qt ? b >= ue : b > ue) || 2 == e && (W2.Qt ? b >= W2.At : b > W2.At)) return 1;
  for (; ; ) {
    T9 = jn(f, a, o, d, e, I2, M2, z2, W2.Ct), m = 1 << o - d, v = 1 << h, u = v;
    do {
      v -= m;
      let e2 = (k2 >> d) + v;
      r.Rt[y + e2] = T9;
    } while (0 != v);
    for (m = 1 << o - 1; k2 & m; ) m >>= 1;
    if (0 != m ? (k2 &= m - 1, k2 += m) : k2 = 0, a++, 0 == --C2[o]) {
      if (o == c) break;
      o = t[f[a]];
    }
    if (o > s && (k2 & x) != p2) {
      for (0 == d && (d = s), y += 1 << h, h = o - d, w = 1 << h; h + d < c && (w -= C2[h + d], !(w <= 0)); ) h++, w <<= 1;
      if (b += 1 << h, 1 == e && (W2.Qt ? b >= ue : b > ue) || 2 == e && (W2.Qt ? b >= W2.At : b > W2.At)) return 1;
      p2 = k2 & x, r.Rt[l.Rt + p2] = We(h, s, y - l.Rt);
    }
  }
  if (0 != k2) for (T9 = s_(o - d); 0 != k2; ) {
    for (0 != d && (k2 & x) != p2 && (d = 0, o = s, y = l.Rt, h = s, T9 = s_(o)), r.Rt[y + (k2 >> d)] = T9, m = 1 << o - 1; k2 & m; ) m >>= 1;
    0 != m ? (k2 &= m - 1, k2 += m) : k2 = 0;
  }
  return l.Rt += b, i.Rt = s, 0;
}
function jn(e, t, n, r, i, f, l, _, o) {
  let a;
  if (o ? e[t] < _ : e[t] + 1 < _) a = b_(0, n - r, e[t]);
  else if (o ? e[t] > _ : e[t] >= _) if (o && 1 == i) {
    let i2 = e[t] - 257;
    a = b_(l[i2], n - r, f[i2]);
  } else {
    let i2 = o ? e[t] : e[t] - _;
    a = b_(l[i2], n - r, f[i2]);
  }
  else a = Jt(n - r);
  return a;
}
var p_ = new R(0);
var er = { Ht: true, Jt: new R(544), Ut: p_, Et: p_ };
var _r = { Ht: true, Jt: new R(544), Ut: p_, Et: p_ };
function Qt() {
  let e = je();
  return e._ = M_(e, false), e;
}
function Ge(e) {
  let t;
  return !(e && (t = e._, !(!t || t.o != e || t.Ct && (t.ft < 16191 || t.ft > 16209) || !t.Ct && (t.ft < 16180 || t.ft > 16211))));
}
function tr(e) {
  let t;
  return Ge(e) ? -2 : (t = e._, e.total_in = e.total_out = t.st = 0, e.msg = "", t.P && (e.i = 1 & t.P), t.ft = t.Ct ? 16191 : 16180, t.lt = false, t._t = false, t.ot = -1, t.ut = t.Ct ? 65536 : 32768, delete t.B, t.p = 0, t.T = 0, t.et = t.yt, t.tt = t.yt, t.vt = t.yt, t.it = true, t.Mt = -1, 0);
}
function nr(e) {
  let t;
  return Ge(e) ? -2 : (t = e._, t.h = 0, t.m = 0, t.v = 0, tr(e));
}
function rr(e, t) {
  let n, r;
  if (Ge(e)) return -2;
  if (r = e._, t < 0) {
    if (t < -16) return -2;
    n = 0, r.Ct = -16 == t, t = -t;
  } else n = 5 + (t >> 4), r.Ct = false, t < 48 && (t &= 15);
  let i = r.Ct ? 16 : 15;
  return t && (t < 8 || t > i) ? -2 : (r.u.length > 0 && r.k != t && (r.u = Z), r.P = n, r.k = t, nr(e));
}
function en(e, t) {
  let n, r;
  if (!e) return -2;
  e.msg = "";
  let i = -16 == t;
  return r = M_(e, i), e._ = r, r.o = e, r.ft = i ? 16191 : 16180, n = rr(e, t), n;
}
function ar(e) {
  let t = e.Ct ? _r : er, n = { Rt: 0 };
  if (t.Ht) {
    let r, i, f;
    for (r = 0; r < 144; ) e.xt[r++] = 8;
    for (; r < 256; ) e.xt[r++] = 9;
    for (; r < 280; ) e.xt[r++] = 7;
    for (; r < 288; ) e.xt[r++] = 8;
    t.Jt.fill(0), f = t.Jt, t.Ut = f, i = 9;
    let l = { Rt: f }, _ = { Rt: i }, o = { Rt: 0 };
    for (Le(1, e.xt, 288, l, _, e.Tt, o, e.Ct), f = l.Rt, i = _.Rt, e.It = o.Rt, r = 0; r < 32; ) e.xt[r++] = 5;
    i = 5;
    let a = o.Rt, u = { Rt: f }, c = { Rt: i };
    n.Rt = a, Le(2, e.xt, 32, u, c, e.Tt, n, e.Ct), t.Et = f.slice(a), t.Ht = false;
  }
  e.et = t.Ut, e.nt = 9, e.tt = t.Et, e.rt = 5, e.It = n.Rt;
}
function ir(e, t, n) {
  let r = e._;
  if (!(r.u && 0 != r.u.length || (r.u = new p(1 << r.k), r.u))) return 1;
  if (0 == r.h && (r.h = 1 << r.k, r.v = 0, r.m = 0), n >= r.h) M(r.u, 0, t, t.length - r.h, r.h), r.v = 0, r.m = r.h;
  else {
    let e2 = r.h - r.v;
    e2 > n && (e2 = n), M(r.u, r.v, t, t.length - n, e2), (n -= e2) ? (M(r.u, 0, t, t.length - n, n), r.v = n, r.m = r.h) : (r.v += e2, r.v == r.h && (r.v = 0), r.m < r.h && (r.m += e2));
  }
  return 0;
}
var S_ = class extends z {
  constructor() {
    super("Need more input");
  }
};
function _n(e, t) {
  let n, r, i, f, l, _, o, a, u, c, s, h, d, w, b, k2, g2, m = new p(4);
  if (Ge(e) || !e.next_out || !e.next_in && 0 != e.avail_in) return -2;
  _ = 0, a = 0, o = 0, u = 0, r = Z, i = 0, f = Z, l = 0, n = e._, 16191 == n.ft && (n.ft = 16192), I2(), c = _, s = o, g2 = 0;
  try {
    for (; ; ) switch (n.ft) {
      case 16180:
        if (0 == n.P) {
          n.ft = 16192;
          break;
        }
        if (O2(16), 2 & n.P && 35615 == a) {
          0 == n.k && (n.k = 15), n.ct = W(0), n.ct = T9(n.ct, a), C2(), n.ft = 16181;
          break;
        }
        if (n.B && (n.B.Yt = -1), !(1 & n.P) || ((S(8) << 8) + (a >> 8)) % 31) {
          e.msg = "incorrect header check", n.ft = 16209;
          break;
        }
        if (8 != S(4)) {
          e.msg = "unknown compression method", n.ft = 16209;
          break;
        }
        if (D(4), k2 = S(4) + 8, 0 == n.k && (n.k = k2), k2 > 15 || k2 > n.k) {
          e.msg = "invalid window size", n.ft = 16209;
          break;
        }
        n.ut = 1 << k2, n.ot = 0, e.i = n.ct = se(0), n.ft = 512 & a ? 16189 : 16191, C2();
        break;
      case 16181:
        if (O2(16), n.ot = a, 8 != (255 & n.ot)) {
          e.msg = "unknown compression method", n.ft = 16209;
          break;
        }
        if (57344 & n.ot) {
          e.msg = "unknown header flags set", n.ft = 16209;
          break;
        }
        n.B && (n.B.Fe = a >> 8 & 1), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2(), n.ft = 16182;
      case 16182:
        O2(32), n.B && (n.B.Xe = a), 512 & n.ot && 4 & n.P && (n.ct = y(n.ct, a)), C2(), n.ft = 16183;
      case 16183:
        O2(16), n.B && (n.B.Pt = 255 & a, n.B.$e = a >> 8), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2(), n.ft = 16184;
      case 16184:
        1024 & n.ot ? (O2(16), n.ht = a, n.B && (n.B.Ke = a), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2()) : n.B && (n.B.Ge = Z), n.ft = 16185;
      case 16185:
        if (1024 & n.ot && (h = n.ht, h > _ && (h = _), h && (n.B && n.B.Ge && n.B.Bt && (k2 = n.B.Ke - n.ht) < n.B.Bt && M(n.B.Ge, k2, r, i, h), 512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, n.ht -= h), n.ht)) return v();
        n.ht = 0, n.ft = 16186;
      case 16186:
        if (2048 & n.ot) {
          if (0 == _) return v();
          h = 0;
          do {
            k2 = r[i + h++], n.B && n.B.Ft && n.ht < n.B.Ft && (n.B.Ve[n.ht++] = k2);
          } while (k2 && h < _);
          if (512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, k2) return v();
        } else n.B && (n.B.Ve = Z);
        n.ht = 0, n.ft = 16187;
      case 16187:
        if (4096 & n.ot) {
          if (0 == _) return v();
          h = 0;
          do {
            k2 = r[i + h++], n.B && n.B.Gt && n.ht < n.B.Gt && (n.B.Le[n.ht++] = k2);
          } while (k2 && h < _);
          if (512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, k2) return v();
        } else n.B && (n.B.Le = Z);
        n.ft = 16188;
      case 16188:
        if (512 & n.ot) {
          if (O2(16), 4 & n.P && a != (65535 & n.ct)) {
            e.msg = "header crc mismatch", n.ft = 16209;
            break;
          }
          C2();
        }
        n.B && (n.B.Be = n.ot >> 9 & 1, n.B.Yt = 1), e.i = n.ct = W(0), n.ft = 16191;
        break;
      case 16189:
        O2(32), e.i = n.ct = Y_(a), C2(), n.ft = 16190;
      case 16190:
        if (!n._t) return z2(), 2;
        e.i = n.ct = se(0), n.ft = 16191;
      case 16191:
        if (5 == t || 6 == t) return v();
      case 16192:
        if (n.lt) {
          j2(), n.ft = 16206;
          break;
        }
        switch (O2(3), n.lt = !!S(1), D(1), S(2)) {
          case 0:
            n.ft = 16193;
            break;
          case 1:
            if (ar(n), n.ft = 16199, 6 == t) return D(2), v();
            break;
          case 2:
            n.ft = 16196;
            break;
          case 3:
            e.msg = "invalid block type", n.ft = 16209;
        }
        D(2);
        break;
      case 16193:
        if (j2(), O2(32), (65535 & a) != (a >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths", n.ft = 16209;
          break;
        }
        if (n.ht = 65535 & a, C2(), n.ft = 16194, 6 == t) return v();
      case 16194:
        n.ft = 16195;
      case 16195:
        if (h = n.ht, h) {
          if (h > _ && (h = _), h > o && (h = o), 0 == h) return v();
          M(f, l, r, i, h), _ -= h, i += h, o -= h, l += h, n.ht -= h;
          break;
        }
        n.ft = 16191;
        break;
      case 16196:
        if (O2(14), n.bt = S(5) + 257, D(5), n.kt = S(5) + 1, D(5), n.wt = S(4) + 4, D(4), n.bt > 286 || !n.Ct && n.kt > 30) {
          e.msg = n.Ct ? "too many length" : "too many length or distance symbols", n.ft = 16209;
          break;
        }
        n.gt = 0, n.ft = 16197;
      case 16197:
        for (; n.gt < n.wt; ) O2(3), n.xt[pe[n.gt++]] = S(3), D(3);
        for (; n.gt < 19; ) n.xt[pe[n.gt++]] = 0;
        n.vt = n.yt, n.et = n.tt = n.vt, n.nt = 7;
        let c2 = { Rt: n.vt }, m2 = { Rt: n.nt }, p2 = { Rt: 0 };
        if (g2 = Le(0, n.xt, 19, c2, m2, n.Tt, p2, n.Ct), n.vt = c2.Rt, n.nt = m2.Rt, g2) {
          e.msg = "invalid code lengths set", n.ft = 16209;
          break;
        }
        n.gt = 0, n.ft = 16198;
      case 16198:
        for (; n.gt < n.bt + n.kt; ) {
          for (; w = n.et[S(n.nt)], !((w >>> 16 & 255) <= u); ) q2();
          if ((65535 & w) < 16) D(w >>> 16 & 255), n.xt[n.gt++] = 65535 & w;
          else {
            if (16 == (65535 & w)) {
              if (O2(2 + (w >>> 16 & 255)), D(w >>> 16 & 255), 0 == n.gt) {
                e.msg = "invalid bit length repeat", n.ft = 16209;
                break;
              }
              k2 = n.xt[n.gt - 1], h = 3 + S(2), D(2);
            } else 17 == (65535 & w) ? (O2(3 + (w >>> 16 & 255)), D(w >>> 16 & 255), k2 = 0, h = 3 + S(3), D(3)) : (O2(7 + (w >>> 16 & 255)), D(w >>> 16 & 255), k2 = 0, h = 11 + S(7), D(7));
            if (n.gt + h > n.bt + n.kt) {
              e.msg = "invalid bit length repeat", n.ft = 16209;
              break;
            }
            for (; h--; ) n.xt[n.gt++] = k2;
          }
        }
        if (16209 == n.ft) break;
        if (0 == n.xt[256]) {
          e.msg = "invalid code -- missing end-of-block", n.ft = 16209;
          break;
        }
        n.vt = n.yt, n.nt = 9;
        let A = { Rt: n.vt }, Q2 = { Rt: n.nt }, N = { Rt: 0 };
        g2 = Le(1, n.xt, n.bt, A, Q2, n.Tt, N, n.Ct), n.vt = A.Rt, n.nt = Q2.Rt;
        let R2 = N.Rt;
        if (n.et = n.vt.slice(0, R2), g2) {
          e.msg = "invalid literal/lengths set", n.ft = 16209;
          break;
        }
        n.rt = 6;
        let H2 = n.xt.subarray(n.bt, n.bt + n.kt), J2 = { Rt: n.vt }, U = { Rt: n.rt }, E = { Rt: R2 };
        if (g2 = Le(2, H2, n.kt, J2, U, n.Tt, E, n.Ct), n.vt = J2.Rt, n.rt = U.Rt, n.tt = n.vt.slice(R2), g2) {
          e.msg = "invalid distances set", n.ft = 16209;
          break;
        }
        if (n.ft = 16199, 6 == t) return v();
      case 16199:
        n.ft = 16200;
      case 16200:
        if (!n.Ct && _ >= 6 && o >= 258) {
          z2(), $t(e, s), I2(), 16191 == n.ft && (n.Mt = -1);
          break;
        }
        for (n.Mt = 0; w = n.et[S(n.nt)], !((w >>> 16 & 255) <= u); ) q2();
        if (w >>> 24 && !(w >>> 24 & 240)) {
          for (b = w; w = n.et[(65535 & b) + (S((b >>> 16 & 255) + (b >>> 24)) >> (b >>> 16 & 255))], !((b >>> 16 & 255) + (w >>> 16 & 255) <= u); ) q2();
          D(b >>> 16 & 255), n.Mt += b >>> 16 & 255;
        }
        if (D(w >>> 16 & 255), n.Mt += w >>> 16 & 255, n.ht = 65535 & w, !(w >>> 24)) {
          n.ft = 16205;
          break;
        }
        if (w >>> 24 & 32) {
          n.Mt = -1, n.ft = 16191;
          break;
        }
        if (w >>> 24 & 64) {
          e.msg = "invalid literal/length code", n.ft = 16209;
          break;
        }
        n.Ge = w >>> 24 & (n.Ct ? 31 : 15), n.ft = 16201;
      case 16201:
        n.Ge && (O2(n.Ge), n.ht += S(n.Ge), D(n.Ge), n.Mt += n.Ge), n.zt = n.ht, n.ft = 16202;
      case 16202:
        for (; w = n.tt[S(n.rt)], !((w >>> 16 & 255) <= u); ) q2();
        if (!(w >>> 24 & 240)) {
          for (b = w; w = n.tt[(65535 & b) + (S((b >>> 16 & 255) + (b >>> 24)) >> (b >>> 16 & 255))], !((b >>> 16 & 255) + (w >>> 16 & 255) <= u); ) q2();
          D(b >>> 16 & 255), n.Mt += b >>> 16 & 255;
        }
        if (D(w >>> 16 & 255), n.Mt += w >>> 16 & 255, w >>> 24 & 64) {
          e.msg = "invalid distance code", n.ft = 16209;
          break;
        }
        n.dt = 65535 & w, n.Ge = w >>> 24 & 15, n.ft = 16203;
      case 16203:
        n.Ge && (O2(n.Ge), n.dt += S(n.Ge), D(n.Ge), n.Mt += n.Ge), n.ft = 16204;
      case 16204:
        if (0 == o) return v();
        if (h = s - o, n.dt > h) {
          if (h = n.dt - h, h > n.m && n.it) {
            e.msg = "invalid distance too far back", n.ft = 16209;
            break;
          }
          h > n.v ? (h -= n.v, d = n.h - h) : d = n.v - h, h > n.ht && (h = n.ht), h > o && (h = o);
          for (let e2 = 0; e2 < h; ++e2) f[l] = 255 & n.u[d], ++l, ++d;
        } else {
          d = l - n.dt, h = n.ht, h > o && (h = o);
          for (let e2 = 0; e2 < h; ++e2) f[l] = f[d], ++l, ++d;
        }
        h > o && (h = o), o -= h, n.ht -= h, 0 == n.ht && (n.ft = 16200);
        break;
      case 16205:
        if (0 == o) return v();
        f[l++] = n.ht, o--, n.ft = 16200;
        break;
      case 16206:
        if (n.P) {
          if (O2(32), s -= o, e.total_out += s, n.st += s, 4 & n.P && s) {
            let t2 = f.subarray(l - s, l);
            e.i = n.ct = x(n.ct, t2, s);
          }
          if (s = o, 4 & n.P && (n.ot ? a : Y_(a) >>> 0) != n.ct) {
            e.msg = "incorrect data check", n.ft = 16209;
            break;
          }
          C2();
        }
        n.ft = 16207;
      case 16207:
        if (n.P && n.ot) {
          if (O2(32), 4 & n.P && a != (4294967295 & n.st)) {
            e.msg = "incorrect length check", n.ft = 16209;
            break;
          }
          C2();
        }
        n.ft = 16208;
      case 16208:
        return g2 = 1, v();
      case 16209:
        return g2 = -3, v();
      case 16210:
        return -4;
      default:
        return -2;
    }
  } catch (e2) {
    if (e2 instanceof S_) return v();
    throw e2;
  }
  function v() {
    if (z2(), n.h || s != e.avail_out && n.ft < 16209 && ((n.Ct ? n.ft < 16208 : n.ft < 16206) || 4 != t)) {
      let t2 = s - e.avail_out;
      if (ir(e, e.next_out.subarray(e.next_out_index - t2, e.next_out_index), t2)) return n.ft = 16210, -4;
    }
    return c -= e.avail_in, s -= e.avail_out, e.total_in += c, e.total_out += s, n.st += s, 4 & n.P && s && (e.i = n.ct = x(n.ct, e.next_out.subarray(e.next_out_index - s, e.next_out_index), s)), e.t = n.T + (n.lt ? 64 : 0) + (16191 == n.ft ? 128 : 0) + (16199 == n.ft || 16194 == n.ft ? 256 : 0), (0 == c && 0 == s && 0 == g2 || 4 == t && 0 == g2) && (g2 = -5), g2;
  }
  function x(e2, t2, r2) {
    return n.ot ? W(e2, t2, r2) : se(e2, t2, r2);
  }
  function T9(e2, t2) {
    return m[0] = 255 & t2, m[1] = t2 >>> 8 & 255, W(e2, m, 2) >>> 0;
  }
  function y(e2, t2) {
    return m[0] = 255 & t2, m[1] = t2 >>> 8 & 255, m[2] = t2 >>> 16 & 255, m[3] = t2 >>> 24 & 255, W(e2, m, 4) >>> 0;
  }
  function I2() {
    f = e.next_out, l = e.next_out_index, o = e.avail_out, r = e.next_in, i = e.next_in_index, _ = e.avail_in, a = n.p, u = n.T;
  }
  function z2() {
    e.next_out = f, e.next_out_index = l, e.avail_out = o, e.next_in = r, e.next_in_index = i, e.avail_in = _, n.p = a, n.T = u;
  }
  function C2() {
    a = 0, u = 0;
  }
  function q2() {
    if (0 == _) throw new S_();
    _--, a += (255 & r[i]) << u, i++, a >>>= 0, u += 8;
  }
  function O2(e2) {
    for (; u < e2; ) q2();
  }
  function S(e2) {
    return a & (1 << e2) - 1;
  }
  function D(e2) {
    a >>>= e2, u -= e2;
  }
  function j2() {
    a >>>= 7 & u, u -= 7 & u;
  }
}
function tn(e) {
  return Ge(e) ? -2 : 0;
}
var X_ = 65536;
var or = 32768;
var nn = "trailing data after the end of the stream";
var W_ = class {
  constructor(e = 16, t = X_) {
    this.Vt = [], this.Lt = e;
    for (let n = 0; n < O.min(e, 4); n++) this.Vt.push(new p(t));
  }
  acquire(e = X_) {
    for (let t = this.Vt.length - 1; t >= 0; t--) {
      let n = this.Vt[t];
      if (n.length >= e) return this.Vt.splice(t, 1), n;
    }
    return new p(e);
  }
  release(e) {
    this.Vt.length < this.Lt && this.Vt.push(e);
  }
};
function rn(e) {
  let t = new W_(32, X_), n = null;
  function r() {
    let t2 = e.Xt(), n2 = e.$t(t2);
    if (0 != n2 && 0 != n2) throw new z("init failed: " + n2);
    return { o: t2 };
  }
  function i(e2) {
    try {
      t.release(e2);
    } catch {
    }
  }
  return new H({ start() {
  }, transform(f, l) {
    n || (n = r());
    let _ = n.o;
    if (n.Kt) {
      if (f.length) throw new z(nn);
      return;
    }
    let o = 0;
    for (; o < f.length; ) {
      let r2 = O.min(f.length - o, or), a = f.subarray(o, o + r2);
      for (_.next_in = a, _.next_in_index = 0, _.avail_in = a.length; _.avail_in > 0; ) {
        let r3 = t.acquire(), f2 = false;
        try {
          _.next_out = r3, _.next_out_index = 0, _.avail_out = r3.length;
          let i2 = e.en(_, 0), o2 = r3.length - _.avail_out;
          if (o2 > 0) {
            let e2 = false, n2 = { tn: r3.subarray(0, o2), release: () => {
              e2 || (e2 = true, t.release(r3));
            } };
            f2 = true, l.enqueue(n2);
          }
          if (1 == i2) {
            n.Kt = true;
            break;
          }
          if (0 != i2) throw new z("process error: " + i2);
        } finally {
          f2 || i(r3);
        }
      }
      if (n.Kt) {
        if (_.avail_in > 0 || o + r2 < f.length) throw new z(nn);
        break;
      }
      o += r2;
    }
  }, flush(f) {
    if (n && n.Kt) return;
    n || (n = r());
    let l = n.o;
    for (; ; ) {
      let n2 = t.acquire(), r2 = false;
      try {
        l.next_out = n2, l.next_out_index = 0, l.avail_out = n2.length;
        let i2 = e.en(l, 4), _2 = n2.length - l.avail_out;
        if (_2 > 0) {
          let e2 = false, i3 = { tn: n2.subarray(0, _2), release: () => {
            e2 || (e2 = true, t.release(n2));
          } };
          r2 = true, f.enqueue(i3);
        }
        if (1 == i2) break;
        if (0 != i2) throw new z("finalization error: " + i2);
      } finally {
        r2 || i(n2);
      }
    }
    let _ = e.nn(l);
    if (0 != _ && 0 != _) throw new z("end failed: " + _);
  } });
}
function an() {
  return new H({ start() {
  }, transform(e, t) {
    try {
      t.enqueue(e.tn.slice(0));
    } finally {
      e.release();
    }
  }, flush() {
  } });
}
var fr = /* @__PURE__ */ new Map([["deflate", 15], ["gzip", 31], ["deflate-raw", -15]]);
var lr = /* @__PURE__ */ new Map([["deflate", 15], ["gzip", 31], ["deflate-raw", -15], ["deflate64-raw", -16]]);
function on(e, t) {
  let n = e.get(t);
  if (void 0 === n) throw new TypeError(`Unsupported format: ${t}`);
  return n;
}
function ur(e = "deflate", t) {
  let n = on(fr, e), r = t && "number" == typeof t.level ? t.level : -1;
  return rn({ Xt: () => vt(), $t: (e2) => kt(e2, r, 8, n, 8, 0), en: Nt, nn: P_ });
}
function cr(e = "deflate") {
  let t = on(lr, e);
  return rn({ Xt: () => Qt(), $t: (e2) => en(e2, t), en: _n, nn: tn });
}
var E_ = class {
  constructor(e = "deflate", t) {
    let n = ur(e, t);
    this.writable = n.writable, this.readable = n.readable.pipeThrough(an());
  }
};
var g_ = class {
  constructor(e = "deflate") {
    let t = cr(e);
    this.writable = t.writable, this.readable = t.readable.pipeThrough(an());
  }
};

// ../../../node_modules/@zip.js/zip.js/lib/zip-module-native.js
init_codec_pool();
setDefaultConfiguration({
  workerURI: "./core/web-worker-native.js",
  wasmURI: null,
  CompressionStreamFallback: E_,
  DecompressionStreamFallback: g_
});

// src/engine/sources.ts
var MAX_ENTRY_BYTES = 256 * 1024 * 1024;
var WINDOW_BYTES = 4 * 1024 * 1024;
function findExportRoot(paths) {
  let best = null;
  let bestDepth = Infinity;
  for (const path of paths) {
    if (path === "channels.json") return "";
    if (!path.endsWith("/channels.json")) continue;
    if (path.startsWith("__MACOSX/") || path.includes("/__MACOSX/")) continue;
    const prefix = path.slice(0, path.length - "channels.json".length);
    let depth = 0;
    for (let i = 0; i < prefix.length; i++) if (prefix.charCodeAt(i) === 47) depth++;
    if (depth < bestDepth) {
      best = prefix;
      bestDepth = depth;
    }
  }
  return best ?? "";
}
var BlobWindowReader = class extends Reader {
  blob;
  cached = null;
  loading = null;
  constructor(blob) {
    super(blob);
    this.blob = blob;
    this.size = blob.size;
  }
  async readUint8Array(offset, length) {
    const end = Math.min(offset + length, this.size);
    if (end <= offset) return new Uint8Array(0);
    if (end - offset >= WINDOW_BYTES) {
      return new Uint8Array(await this.blob.slice(offset, end).arrayBuffer());
    }
    for (; ; ) {
      const cached = this.cached;
      if (cached !== null && offset >= cached.start && end <= cached.start + cached.data.length) {
        return cached.data.slice(offset - cached.start, end - cached.start);
      }
      const loading = this.loading;
      if (loading !== null && offset >= loading.start && end <= loading.end) {
        await loading.done;
        continue;
      }
      const start = offset;
      const stop = Math.min(this.size, start + WINDOW_BYTES);
      const load = this.blob.slice(start, stop).arrayBuffer().then((buffer) => {
        const loaded = { start, data: new Uint8Array(buffer) };
        this.cached = loaded;
        return loaded;
      });
      const entry = { start, end: stop, done: load.catch(() => void 0) };
      this.loading = entry;
      try {
        const loaded = await load;
        return loaded.data.slice(offset - start, end - start);
      } finally {
        if (this.loading === entry) this.loading = null;
      }
    }
  }
};
var METHOD_STORED = 0;
var METHOD_DEFLATE = 8;
function hasNativeInflate() {
  try {
    new DecompressionStream("deflate-raw");
    return true;
  } catch {
    return false;
  }
}
async function inflate(packed, expectedSize, limit) {
  const stream = new DecompressionStream("deflate-raw");
  const writer = stream.writable.getWriter();
  writer.write(packed).catch(() => void 0);
  writer.close().catch(() => void 0);
  const reader = stream.readable.getReader();
  let out = new Uint8Array(Math.max(expectedSize, 1024));
  let length = 0;
  for (; ; ) {
    const { done, value } = await reader.read();
    if (done) break;
    if (length + value.length > limit) {
      await reader.cancel().catch(() => void 0);
      throw new Error("File is too large to read");
    }
    if (length + value.length > out.length) {
      const grown = new Uint8Array(Math.max(out.length * 2, length + value.length));
      grown.set(out.subarray(0, length));
      out = grown;
    }
    out.set(value, length);
    length += value.length;
  }
  return out.subarray(0, length);
}
async function openZip(blob, mode) {
  const names = [];
  const offsets = [];
  const packedSizes = [];
  const sizes = [];
  const methods = [];
  const kept = /* @__PURE__ */ new Map();
  const reader = new BlobWindowReader(blob);
  try {
    const zip = new ZipReader(reader, { useWebWorkers: false, filenameValidation: "tolerant" });
    for await (const entry of zip.getEntriesGenerator({ filenameValidation: "tolerant" })) {
      if (entry.directory) continue;
      const name = entry.filename;
      if (!name.endsWith(".json") || name.startsWith("__MACOSX/") || name.includes("/__MACOSX/")) continue;
      const method = entry.compressionMethod;
      const direct = mode === "direct" && !entry.encrypted && (method === METHOD_STORED || method === METHOD_DEFLATE);
      if (!direct) kept.set(names.length, entry);
      names.push(name);
      offsets.push(entry.offset);
      packedSizes.push(entry.compressedSize);
      sizes.push(entry.uncompressedSize);
      methods.push(method === METHOD_STORED ? METHOD_STORED : METHOD_DEFLATE);
    }
  } catch (cause) {
    throw new SlackExportError(
      "not-a-zip",
      "That file could not be read as a zip archive. Drop the .zip exactly as Slack gave it to you.",
      { cause }
    );
  }
  const root = findExportRoot(names);
  const index = {
    paths: [],
    lookup: /* @__PURE__ */ new Map(),
    offsets: Float64Array.from(offsets),
    packedSizes: Float64Array.from(packedSizes),
    sizes: Float64Array.from(sizes),
    methods: Uint8Array.from(methods),
    viaZipJs: kept,
    reader,
    root
  };
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!name.startsWith(root)) continue;
    const path = name.slice(root.length);
    if (!index.lookup.has(path)) index.paths.push(path);
    index.lookup.set(path, i);
  }
  return index;
}
async function readEntry(index, entry) {
  const size = index.sizes[entry];
  if (size > MAX_ENTRY_BYTES) throw new Error("File is too large to read");
  const viaZipJs = index.viaZipJs.get(entry);
  if (viaZipJs !== void 0) {
    return new Uint8Array(await viaZipJs.arrayBuffer({ useWebWorkers: false, strictness: "tolerant" }));
  }
  const offset = index.offsets[entry];
  const header = await index.reader.readUint8Array(offset, 30);
  if (header.length < 30 || header[0] !== 80 || header[1] !== 75 || header[2] !== 3 || header[3] !== 4) {
    throw new Error("Damaged zip entry");
  }
  const nameLength = header[26] | header[27] << 8;
  const extraLength = header[28] | header[29] << 8;
  const packedSize = index.packedSizes[entry];
  const packed = await index.reader.readUint8Array(offset + 30 + nameLength + extraLength, packedSize);
  if (packed.length !== packedSize) throw new Error("Damaged zip entry");
  return index.methods[entry] === METHOD_STORED ? packed : inflate(packed, size, MAX_ENTRY_BYTES);
}
function zipSourceWith(blob, label, mode) {
  let index;
  let root = "";
  const open = () => index ??= openZip(blob, mode).then((opened) => {
    root = opened.root;
    return opened;
  });
  const decoder = new TextDecoder("utf-8");
  const name = label ?? blob.name;
  const given = typeof name === "string" && name !== "" ? name : void 0;
  const source = {
    // Once the zip is open, a wrapping folder named like an export can supply the workspace name.
    get label() {
      return preferLabel(given, root);
    },
    list: async () => (await open()).paths,
    readText: async (path) => {
      const opened = await open();
      const entry = opened.lookup.get(path);
      if (entry === void 0) throw new Error(`No such file in the export: ${path}`);
      return decoder.decode(await readEntry(opened, entry));
    }
  };
  return source;
}
function zipSource(blob, label) {
  return zipSourceWith(blob, label, hasNativeInflate() ? "direct" : "zip.js");
}
function workspaceNameFromLabel(label) {
  let name = String(label ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  name = name.slice(name.lastIndexOf("/") + 1).replace(/\.zip$/i, "");
  const marker = name.search(/\s+slack\s+export\b/i);
  if (marker > 0) {
    const workspace = name.slice(0, marker).trim();
    if (workspace !== "") return workspace;
  }
  return UNKNOWN_WORKSPACE;
}
var UNKNOWN_WORKSPACE = "Your team";
function preferLabel(given, root) {
  if (root === "") return given;
  if (given !== void 0 && workspaceNameFromLabel(given) !== UNKNOWN_WORKSPACE) return given;
  const folder = root.replace(/\/+$/, "");
  return workspaceNameFromLabel(folder) === UNKNOWN_WORKSPACE ? given : folder.slice(folder.lastIndexOf("/") + 1);
}

// src/engine/stopwords.ts
var ENGLISH = `
the and for are but not you all any can had her was one our out get got has him his how its may now
off own per saw say says she too use via who why yes yet able about above across after again against
ago ahead ain't all almost along already also although always among and another any anybody anyone
anything anyway anywhere are aren't around aside ask asked away back became because become been before
behind being below beside besides between beyond both came can't cannot could couldn't did didn't does
doesn't doing don't done down during each either else enough etc even ever every everybody everyone
everything everywhere few first for from further gave get gets getting give given gives goes going gone
gonna gotta had hadn't has hasn't have haven't having he'd he'll he's hence her here here's hers herself
him himself his how how's however i'd i'll i'm i've into isn't it'd it'll it's its itself just keep
keeps kept kinda know known knows last least less let let's lets like likely look looked looking looks
lot lots made make makes making many may maybe might mine more most much must mustn't myself near need
needed needs neither never next nobody none nor not nothing now nowhere off often okay once one ones
only onto other others otherwise ought our ours ourselves out over own part past perhaps probably put
quite rather really right said same saw say saying says see seem seemed seems seen several shall shan't
she she'd she'll she's should shouldn't since some somebody someone something sometimes somewhere soon
sort still stuff such sure take taken takes taking than that that'll that's the their theirs them
themselves then there there's these they they'd they'll they're they've thing things think thinking
thinks this those though thought three through thus till together too took toward towards tried tries
try trying two under unless until upon use used uses using usually very want wanted wants was wasn't way
ways we'd we'll we're we've well went were weren't what what's whatever when where where's whether
which while who who's whoever whole whom whose why will with within without won't would wouldn't y'all
yeah yep yes yet you you'd you'll you're you've your yours yourself yourselves yup nope okie
dont doesnt didnt cant wont isnt arent wasnt werent hasnt havent hadnt couldnt wouldnt shouldnt thats
whats heres theres youre theyre ive ill youll weve youve hes shes lets gotcha wanna gimme lemme
actually basically literally guess mean means meant idk imo imho btw fyi tbh afaik iirc
http https www com org net html
`;
var SPANISH = `
que los las del una uno unos unas por con para como m\xE1s mas pero sus este esta estos estas ese esa esos
esas eso esto aquel aquella aquello entre cuando muy sin sobre tambi\xE9n tambien hasta hay donde d\xF3nde
quien qui\xE9n quienes desde todo toda todos todas nos durante les contra otro otra otros otras ante ellos
ellas antes algunos algunas algo qu\xE9 tanto tanta mucho mucha muchos muchas nada poco poca cual cu\xE1l
cuales ella nosotros nosotras vosotros ustedes usted mis tus m\xEDo m\xEDa tuyo suyo nuestro nuestra nuestros
nuestras estoy est\xE1s est\xE1 estamos est\xE1n est\xE9 est\xE9n estaba estaban estuvo estado estar haber hab\xEDa hab\xEDan
han has hemos hubo ser era eran eres fue fueron sea sean siendo sido soy son somos tener tengo tiene
tienen tenemos ten\xEDa tuvo hacer hace hacen hago hecho hizo puede pueden puedo podemos poder podr\xEDa
quiero quiere queremos vamos van voy vas creo cosa cosas aqu\xED aqui ah\xED all\xED as\xED asi bien bueno buena
vale pues entonces porque aunque mientras adem\xE1s ahora luego despu\xE9s despues todav\xEDa a\xFAn solo s\xF3lo
siempre nunca cada mismo misma tan tal vez casi tambi\xE9n tampoco seg\xFAn sino ya s\xED ser dos tres debe
deben parte tiempo dice dijo ver veo
`;
var PORTUGUESE = `
que n\xE3o nao uma umas uns com para por mais mas como dos das foi ele ela eles elas seu sua seus suas s\xE3o
sao tem t\xEAm nos nas num numa pelo pela pelos pelas isso isto esse essa esses essas este esta estes estas
aquele aquela aquilo ser est\xE1 esta est\xE3o estou estava estavam estamos era eram ter tenho tinha temos
tive teve fazer faz fazem feito fiz pode podem posso podemos vai vou vamos v\xE3o muito muita muitos muitas
pouco pouca tamb\xE9m tambem j\xE1 ainda s\xF3 quando onde quem qual quais porque pois ent\xE3o entao assim aqui ali
l\xE1 agora depois antes sempre nunca cada todo toda todos todas tudo nada algo algu\xE9m ningu\xE9m outro outra
outros outras mesmo mesma entre sobre sem at\xE9 desde contra durante voc\xEA voce voc\xEAs n\xF3s meu minha meus
minhas teu tua nosso nossa nossos nossas dele dela deles delas lhe lhes aos seja sejam sendo sido t\xE3o
bem bom boa acho coisa coisas pra pro sim dois duas tr\xEAs ver vez vezes hoje ontem amanh\xE3 gente tipo
`;
var FRENCH = `
les des est une que qui dans pour pas sur plus par avec tout fait son mais comme ont aux elle nous vous
ils elles leur leurs ces cette cet ceux celle celui cela ceci mon ton ses mes tes nos vos notre votre
\xEAtre \xE9t\xE9 \xE9tais \xE9tait \xE9taient suis sommes \xEAtes sont sera seront serait avoir avais avait avaient avons
avez aie ait eue faire fais faites font peut peux peuvent pouvons pouvez veux veut voulons vais vas
allons allez vont aller tr\xE8s tres bien bon bonne aussi alors donc car parce puis ensuite encore d\xE9j\xE0
deja toujours jamais ici o\xF9 quand quoi quel quelle quels quelles comment pourquoi dont sans sous entre
vers chez depuis pendant avant apr\xE8s apres contre tous toutes toute rien quelque quelques chose choses
autre autres m\xEAme meme m\xEAmes peu beaucoup trop moins oui non juste lui moi toi soi eux dit dire voir
faut doit dois devons ainsi cependant lors lorsque puisque afin aujourd'hui est-ce qu'est c'est j'ai
deux trois fois cas \xE7a
`;
var GERMAN = `
der die das und ist nicht ich sie mit ein eine einen einem einer eines auf f\xFCr von dem den des sich auch
als wie aus bei nach noch nur oder aber wenn dann dass da\xDF was wir ihr ihn ihm ihre ihren ihrem ihrer
uns euch mich dich mir dir mein meine meinen dein deine sein seine seinen unser unsere kann kannst
k\xF6nnen k\xF6nnte k\xF6nnten muss musst m\xFCssen musste soll sollen sollte will wollen wollte werden wird wurde
wurden worden w\xFCrde w\xFCrden hat habe haben hatte hatten hast bin bist sind seid war waren w\xE4re gewesen
sehr schon mal jetzt hier dort heute immer nie mehr viel viele wenig alle alles etwas nichts jemand man
doch denn weil also zum zur vom beim ins \xFCber unter vor zwischen durch gegen ohne bis seit w\xE4hrend
dieser diese dieses diesen diesem jener welche welcher welches wer warum wann nein gibt geht gehen
machen macht gemacht kommt kommen sagen sagt gesagt ganz gerade einfach eigentlich vielleicht dazu dabei
damit daran darauf davon daf\xFCr deshalb trotzdem sowie sowohl weder beide jeder jede jedes kein keine
keinen keinem zwei drei wieder dich euer habt lass uhr
`;
var DUTCH = `
het een van dat die niet zijn aan met als voor had maar hem dan zou wat mijn men dit door over zich bij
ook tot mij uit der daar haar naar heb hoe heeft hebben deze want nog zal zij geen omdat iets worden
toch waren veel meer doen toen moet ben zonder kan hun dus alles onder eens hier wie werd altijd doch
wordt wezen kunnen ons zelf tegen reeds wil kon niets iemand geweest andere wel was jij jullie hebt bent
gaan gaat ging komt komen maken maakt gemaakt goed even weer waar wanneer waarom welke tussen tijdens
sinds terwijl echter misschien gewoon eigenlijk heel erg nee twee drie mag moeten zullen zou zouden
kunt zit staat net dit
`;
var ITALIAN = `
che non per una uno con sono come pi\xF9 piu del della dei delle degli dal dalla dai nel nella nei nelle
sul sulla alla alle agli allo gli anche lui lei noi voi loro mio mia miei mie tuo tua suo sua suoi sue
nostro nostra vostro questo questa questi queste quello quella quelli quelle essere era erano sei siamo
siete stato stata stati sia siano avere abbiamo avete hanno aveva avevano avuto fare faccio fai
facciamo fanno fatto pu\xF2 puo possono posso possiamo potete vuole voglio vogliamo vado vai andiamo vanno
andare molto molta molti molte poco tutto tutta tutti tutte niente nulla qualcosa qualcuno nessuno
altro altra altri altre stesso stessa ancora gi\xE0 gia sempre mai ora adesso poi dopo prima qui qua
quando dove chi cosa cose quale quali perch\xE9 perch\xE8 perche quindi allora cos\xEC cosi per\xF2 pero oppure
mentre senza sotto sopra tra fra verso fino durante contro bene buon buono buona ecco solo proprio
forse cio\xE8 infatti comunque dell nell sull all dall quell bell sto sta stai stiamo stanno devo deve
dobbiamo devono c'\xE8 due tre volta
`;
function words(list) {
  return list.split(/\s+/).filter((w) => w.length >= 3);
}
var STOPWORDS = /* @__PURE__ */ new Set([
  ...words(ENGLISH),
  ...words(SPANISH),
  ...words(PORTUGUESE),
  ...words(FRENCH),
  ...words(GERMAN),
  ...words(DUTCH),
  ...words(ITALIAN)
]);

// src/engine/text.ts
var LAUGH_STYLES = ["haha", "hehe", "lol", "lmao", "rofl", "jaja", "kkk", "\u{1F602}", "\u{1F923}"];
var LAUGH_JOY = 7;
var LAUGH_ROFL = 8;
var CODE_BLOCK = /```[\s\S]*?(?:```|$)/g;
var CODE_SPAN = /`[^`\n]*`/g;
var CODE_SPAN_KEEP = /`([^`\n]*)`/g;
var ANGLE = /<([^<>]+)>/g;
var ENTITY = /&(amp|lt|gt);/g;
var SCHEME = /^[a-z][a-z0-9+.\-]*:/i;
var HTTP = /^https?:\/\//i;
var SHORTCODE = /:([\p{L}\p{N}_+'\-]+)(?:::(skin-tone-[2-6]))?:/gu;
var TOKEN = /\p{L}[\p{L}\p{M}]*(?:['’]\p{L}[\p{L}\p{M}]*)*/gu;
var DIGITS = /^\d+$/;
var WHITESPACE = /\s+/g;
var THANKS = /(?:^|[^\p{L}\p{N}])(?:thank(?:s|ed|ful|ing)?|thankyou|thx|thnx|ty|tysm|tyvm|appreciat(?:e|es|ed|ing|ion)|kudos|shout[\s-]?outs?|gracias|merci|danke(?:sch[oö]n)?|obrigad[oa]s?|grazie|bedankt)(?![\p{L}\p{N}])/u;
var HAHA = /^(?:bw?|mu|mw)?[ha]*(?:haha|ahah)[ha]*$/;
var HEHE = /^[he]*(?:hehe|eheh)[he]*$/;
var LOL = /^l+o+l+(?:o+l+)*z?$/;
var LMAO = /^lmf?a+o+$/;
var ROFL_WORD = /^rot?fl+(?:mao)?$/;
var JAJA = /^[ja]*(?:jaja|ajaj)[ja]*$/;
var KKK = /^k{3,}$/;
function decodeEntity(_whole, name) {
  return name === "amp" ? "&" : name === "lt" ? "<" : ">";
}
function isAsciiAlnum(code) {
  return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}
function laughStyle(word) {
  if (word.length < 3) return -1;
  switch (word.charCodeAt(0)) {
    case 97:
    // a
    case 98:
    // b
    case 104:
    // h
    case 109:
      if (word.indexOf("hah") >= 0) return HAHA.test(word) ? 0 : -1;
      if (word.indexOf("jaj") >= 0) return JAJA.test(word) ? 5 : -1;
      return word.indexOf("heh") >= 0 && HEHE.test(word) ? 1 : -1;
    case 101:
      return word.indexOf("heh") >= 0 && HEHE.test(word) ? 1 : -1;
    case 108: {
      const second = word.charCodeAt(1);
      if (second === 111 || second === 108) return LOL.test(word) ? 2 : -1;
      return second === 109 && LMAO.test(word) ? 3 : -1;
    }
    case 114:
      return word.charCodeAt(1) === 111 && ROFL_WORD.test(word) ? 4 : -1;
    case 106:
      return word.indexOf("jaj") >= 0 && JAJA.test(word) ? 5 : -1;
    case 107:
      return word.charCodeAt(1) === 107 && KKK.test(word) ? 6 : -1;
    default:
      return -1;
  }
}
function hostOf(url) {
  let rest = url;
  const scheme = rest.indexOf("://");
  if (scheme >= 0) {
    rest = rest.slice(scheme + 3);
    const cut = rest.search(/[/?#]/);
    if (cut >= 0) rest = rest.slice(0, cut);
    const at2 = rest.lastIndexOf("@");
    if (at2 >= 0) rest = rest.slice(at2 + 1);
  } else {
    rest = rest.slice(rest.indexOf(":") + 1);
    const cut = rest.search(/[?#]/);
    if (cut >= 0) rest = rest.slice(0, cut);
  }
  return rest.startsWith("www.") ? rest.slice(4) : rest;
}
function isProseLabel(label, target) {
  if (label === "" || label === target) return false;
  if (label.indexOf(" ") >= 0) return !HTTP.test(label);
  return label.indexOf(".") < 0 && label.indexOf("/") < 0 && label.indexOf("@") < 0;
}
function truncateText(text, limit) {
  if (text.length <= limit) return text;
  const chars = Array.from(text);
  if (chars.length <= limit) return text;
  return `${chars.slice(0, limit - 1).join("").trimEnd()}\u2026`;
}
function emptyFacts() {
  return {
    characters: 0,
    words: 0,
    question: false,
    exclaim: false,
    shout: false,
    thanks: false,
    links: 0,
    broadcasts: 0,
    mentions: [],
    emoji: [],
    laughs: 0,
    tokens: []
  };
}
function countBits(mask) {
  let n = 0;
  for (let m = mask; m !== 0; m &= m - 1) n++;
  return n;
}
var TextAnalyzer = class {
  constructor(resolver, blocked) {
    this.resolver = resolver;
    this.blocked = blocked;
  }
  resolver;
  blocked;
  facts = emptyFacts();
  scratch = emptyFacts();
  /** Outputs of `resolve`: text for people to read, and the same text with only the prose left. */
  clean = "";
  prose = "";
  /**
   * Derives every text fact for one message. The returned object is reused by the next call, so
   * read what you need from it straight away.
   */
  analyze(raw) {
    const facts = this.facts;
    facts.characters = 0;
    facts.words = 0;
    facts.question = false;
    facts.exclaim = false;
    facts.shout = false;
    facts.thanks = false;
    facts.links = 0;
    facts.broadcasts = 0;
    facts.mentions.length = 0;
    facts.emoji.length = 0;
    facts.laughs = 0;
    facts.tokens.length = 0;
    if (raw === "") return facts;
    let text = raw;
    if (text.indexOf("`") >= 0) {
      if (text.indexOf("```") >= 0) text = text.replace(CODE_BLOCK, " ");
      text = text.replace(CODE_SPAN, " ");
    }
    this.resolve(text, facts);
    facts.characters = this.clean.trim().length;
    let prose = this.prose;
    if (prose.indexOf(":") >= 0) prose = this.takeShortcodes(prose, facts);
    this.scan(prose, facts);
    const lower = prose.toLowerCase();
    facts.thanks = THANKS.test(lower);
    this.tokenize(lower, facts);
    for (let i = 0; i < facts.emoji.length; i++) {
      const name = facts.emoji[i];
      if (name === JOY) facts.laughs |= 1 << LAUGH_JOY;
      else if (name === ROFL) facts.laughs |= 1 << LAUGH_ROFL;
    }
    return facts;
  }
  /**
   * Readable text for showing a message: mentions and links resolved, standard emoji as characters,
   * code blocks dropped, whitespace collapsed, cut to `limit` characters.
   */
  display(raw, limit = 280) {
    let text = raw;
    if (text.indexOf("`") >= 0) text = text.replace(CODE_BLOCK, " ").replace(CODE_SPAN_KEEP, "$1");
    const scratch = this.scratch;
    scratch.mentions.length = 0;
    this.resolve(text, scratch);
    let out = this.clean;
    if (out.indexOf(":") >= 0) {
      out = out.replace(SHORTCODE, (whole, name, tone) => emojiChar(name, tone) ?? whole);
    }
    return truncateText(out.replace(WHITESPACE, " ").trim(), limit);
  }
  /** Resolves <…> markup and entities into `this.clean` and `this.prose`, counting links, broadcasts and mentions. */
  resolve(text, facts) {
    if (text.indexOf("<") < 0) {
      this.clean = text;
      this.prose = text;
    } else {
      let clean = "";
      let prose = "";
      let last = 0;
      ANGLE.lastIndex = 0;
      let match;
      while ((match = ANGLE.exec(text)) !== null) {
        const before = text.slice(last, match.index);
        clean += before;
        prose += before;
        last = match.index + match[0].length;
        const inner = match[1];
        const bar = inner.indexOf("|");
        const target = bar < 0 ? inner : inner.slice(0, bar);
        const label = bar < 0 ? "" : inner.slice(bar + 1);
        const kind = inner.charCodeAt(0);
        if (kind === 64) {
          const id = target.slice(1);
          clean += `@${this.resolver.userName(id) ?? (label !== "" ? label : "someone")}`;
          prose += " ";
          if (id !== "" && facts.mentions.indexOf(id) < 0) facts.mentions.push(id);
        } else if (kind === 35) {
          clean += `#${label !== "" ? label : this.resolver.channelName(target.slice(1)) ?? "channel"}`;
          prose += " ";
        } else if (kind === 33) {
          const command = target.slice(1);
          if (command === "here" || command === "channel" || command === "everyone" || command === "group") {
            facts.broadcasts++;
            clean += `@${command === "group" ? "channel" : command}`;
          } else if (label !== "") {
            clean += label;
          } else if (command.startsWith("subteam")) {
            clean += "@group";
          }
          prose += " ";
        } else if (SCHEME.test(target)) {
          if (HTTP.test(target)) facts.links++;
          clean += label !== "" ? label : hostOf(target);
          prose += isProseLabel(label, target) ? ` ${label} ` : " ";
        } else {
          clean += match[0];
          prose += match[0];
        }
      }
      const tail = text.slice(last);
      this.clean = clean + tail;
      this.prose = prose + tail;
    }
    if (this.clean.indexOf("&") >= 0) {
      this.clean = this.clean.replace(ENTITY, decodeEntity);
      this.prose = this.prose.replace(ENTITY, decodeEntity);
    }
  }
  /** Collects :shortcode: emoji from the prose and returns the prose without them. */
  takeShortcodes(prose, facts) {
    let out = "";
    let last = 0;
    let acceptedEnd = -1;
    SHORTCODE.lastIndex = 0;
    let match;
    while ((match = SHORTCODE.exec(prose)) !== null) {
      const name = match[1];
      const start = match.index;
      const end = start + match[0].length;
      const previous = start > 0 ? prose.charCodeAt(start - 1) : 32;
      const next = end < prose.length ? prose.charCodeAt(end) : 32;
      const glued = start === acceptedEnd;
      const canonical = canonicalEmoji(name);
      let accepted = false;
      if (canonical !== null) {
        if (isStandardEmoji(canonical)) {
          accepted = glued || !(DIGITS.test(name) && isAsciiAlnum(previous));
        } else {
          accepted = name.length >= 2 && !DIGITS.test(name) && name === name.toLowerCase() && (glued || previous !== 58 && !isAsciiAlnum(previous)) && !isAsciiAlnum(next);
        }
      }
      if (accepted && canonical !== null) {
        facts.emoji.push(canonical);
        out += `${prose.slice(last, start)} `;
        last = end;
        acceptedEnd = end;
      } else {
        SHORTCODE.lastIndex = start + 1;
      }
    }
    return out + prose.slice(last);
  }
  /** One pass over the prose: word count, capitals, question and exclamation marks, Unicode emoji. */
  scan(prose, facts) {
    let words2 = 0;
    let inChunk = false;
    let chunkHasWord = false;
    let upper = 0;
    let lower = 0;
    let cjk = 0;
    let maybeEmoji = false;
    const length = prose.length;
    for (let i = 0; i < length; i++) {
      const code = prose.charCodeAt(i);
      if (code <= 32 || code === 160 || code === 12288) {
        if (inChunk && chunkHasWord) words2++;
        inChunk = false;
        chunkHasWord = false;
        continue;
      }
      inChunk = true;
      if (code < 128) {
        if (code >= 97 && code <= 122) {
          lower++;
          chunkHasWord = true;
        } else if (code >= 65 && code <= 90) {
          upper++;
          chunkHasWord = true;
        } else if (code >= 48 && code <= 57) {
          chunkHasWord = true;
        } else if (code === 63) {
          facts.question = true;
        } else if (code === 33) {
          facts.exclaim = true;
        }
      } else if (code < 192) {
      } else if (code < 8192) {
        chunkHasWord = true;
        const char = prose[i];
        const asUpper = char.toUpperCase();
        if (asUpper !== char.toLowerCase()) {
          if (char === asUpper) upper++;
          else lower++;
        }
      } else if (code >= 12352 && code <= 12543 || code >= 13312 && code <= 40959) {
        cjk++;
      } else if (code === 65311) {
        facts.question = true;
      } else if (code === 65281) {
        facts.exclaim = true;
      } else if (code < 11264 || code >= 55296 && code <= 57343 || code >= 65024 && code <= 65039) {
        if (code >= 8252) maybeEmoji = true;
      } else if (code < 12352 && code >= 12288) {
      } else {
        chunkHasWord = true;
      }
    }
    if (inChunk && chunkHasWord) words2++;
    facts.words = words2 + Math.ceil(cjk / 2);
    const letters = upper + lower;
    facts.shout = letters >= 8 && upper >= letters * 0.8;
    if (maybeEmoji) {
      UNICODE_EMOJI.lastIndex = 0;
      let match;
      while ((match = UNICODE_EMOJI.exec(prose)) !== null) {
        const name = emojiNameFromChar(match[0]);
        if (name !== null) facts.emoji.push(name);
      }
    }
  }
  /** Splits lowercased prose into vocabulary words and spots laughs. */
  tokenize(lower, facts) {
    const blocked = this.blocked;
    TOKEN.lastIndex = 0;
    let match;
    while ((match = TOKEN.exec(lower)) !== null) {
      const word = match[0];
      const laugh = laughStyle(word);
      if (laugh >= 0) {
        facts.laughs |= 1 << laugh;
        continue;
      }
      if (word.length < 3 || word.length > 32) continue;
      if (word.indexOf("'") < 0 && word.indexOf("\u2019") < 0) {
        if (!blocked.has(word)) facts.tokens.push(word);
        continue;
      }
      const plain = word.replace(/’/g, "'");
      if (blocked.has(plain)) continue;
      for (const piece of plain.split("'")) {
        if (piece.length >= 3 && !blocked.has(piece)) facts.tokens.push(piece);
      }
    }
  }
};

// src/engine/vocab.ts
var Vocabulary = class {
  constructor(capacity) {
    this.capacity = capacity;
  }
  capacity;
  ids = /* @__PURE__ */ new Map();
  words = [];
  counts = [];
  /** Every vocabulary word counted so far, including words since forgotten. */
  total = 0;
  get size() {
    return this.words.length;
  }
  get full() {
    return this.words.length >= this.capacity;
  }
  /** Counts one use of `word` and returns its id. */
  add(word) {
    this.total++;
    let id = this.ids.get(word);
    if (id === void 0) {
      id = this.words.length;
      this.ids.set(word, id);
      this.words.push(word);
      this.counts.push(1);
    } else {
      this.counts[id]++;
    }
    return id;
  }
  countOf(word) {
    const id = this.ids.get(word);
    return id === void 0 ? 0 : this.counts[id];
  }
  /**
   * Forgets the rarest words, keeping at most 60% of the capacity. Returns a table from old id to
   * new id (-1 for forgotten words) so that per-person counts can be renumbered with `remapCounts`.
   */
  compact() {
    const size = this.words.length;
    const keep = Math.floor(this.capacity * 0.6);
    const remap = new Int32Array(size).fill(-1);
    let threshold = 0;
    if (size > keep) {
      const sorted = Float64Array.from(this.counts).sort();
      threshold = sorted[size - keep - 1];
    }
    const ids = /* @__PURE__ */ new Map();
    const words2 = [];
    const counts = [];
    for (let id = 0; id < size; id++) {
      const count = this.counts[id];
      if (count <= threshold) continue;
      const word = this.words[id];
      remap[id] = words2.length;
      ids.set(word, words2.length);
      words2.push(word);
      counts.push(count);
    }
    this.ids = ids;
    this.words = words2;
    this.counts = counts;
    return remap;
  }
  /** The `limit` most used words, best first. */
  top(limit) {
    const best = [];
    let floor = 0;
    for (let id = 0; id < this.words.length; id++) {
      const count = this.counts[id];
      if (best.length >= limit && count <= floor) continue;
      best.push({ word: this.words[id], count });
      best.sort((a, b) => b.count - a.count || (a.word < b.word ? -1 : 1));
      if (best.length > limit) best.length = limit;
      floor = best.length >= limit ? best[best.length - 1].count : 0;
    }
    return best;
  }
};
function remapCounts(counts, remap) {
  const next = /* @__PURE__ */ new Map();
  for (const [id, count] of counts) {
    const mapped = remap[id];
    if (mapped !== void 0 && mapped >= 0) next.set(mapped, count);
  }
  return next;
}
function pruneCounts(counts, capacity) {
  const keep = Math.floor(capacity * 0.6);
  if (counts.size <= keep) return;
  const sorted = Float64Array.from(counts.values()).sort();
  const threshold = sorted[counts.size - keep - 1];
  for (const [id, count] of counts) {
    if (count <= threshold) counts.delete(id);
  }
}

// src/engine/analyze.ts
var DEFAULT_TUNING = {
  maxVocabulary: 3e5,
  maxPersonVocabulary: 1500,
  readAhead: 4,
  progressEvery: 50
};
var SYSTEM_SUBTYPES = /* @__PURE__ */ new Set([
  "channel_join",
  "channel_leave",
  "channel_topic",
  "channel_purpose",
  "channel_name",
  "channel_archive",
  "channel_unarchive",
  "channel_posting_permissions",
  "channel_convert_to_private",
  "channel_convert_to_public",
  "channel_canvas_updated",
  "group_join",
  "group_leave",
  "group_topic",
  "group_purpose",
  "group_name",
  "group_archive",
  "group_unarchive",
  "pinned_item",
  "unpinned_item",
  "bot_add",
  "bot_remove",
  "bot_enable",
  "bot_disable",
  "reminder_add",
  "joiner_notification",
  "joiner_notification_for_inviter",
  "sh_room_created",
  "huddle_thread",
  "tombstone",
  "reply_broadcast",
  "file_comment",
  "file_mention",
  "message_changed",
  "message_deleted",
  "message_replied",
  "document_mention",
  "ekm_access_denied"
]);
var IMAGE_FILETYPES = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "heic", "heif", "bmp", "tiff", "svg", "avif"]);
var DAY_FILE = /^\d{4}-\d{2}-\d{2}\.json$/;
var NON_ASCII = /[^\x00-\x7f]/;
var NAME_PART = /\p{L}[\p{L}\p{M}]*/gu;
var SINGLE_WORD = /^\p{L}[\p{L}\p{M}]*$/u;
var UPLOAD_NOTICE = /^<@[^>]+> (?:uploaded|shared) a file: <[^>]*>(?: and commented: ([\s\S]*))?$/;
var MONOLOGUE_GAP_SECONDS = 600;
var FIRST_REPLY_WINDOW_SECONDS = 86400;
var MIN_MESSAGES_FOR_DAY_BOOKENDS = 5;
var MAX_HUDDLE_SECONDS = 86400;
var TOP_MESSAGES = 5;
var TOP_MESSAGES_PER_AUTHOR = 2;
function str(value) {
  return typeof value === "string" ? value.trim() : "";
}
function record(value) {
  return value !== null && typeof value === "object" ? value : {};
}
function isImageFile(file) {
  if (typeof file.mimetype === "string") return file.mimetype.startsWith("image/");
  return typeof file.filetype === "string" && IMAGE_FILETYPES.has(file.filetype.toLowerCase());
}
function inTimeOrder(list) {
  let previous = -Infinity;
  for (let i = 0; i < list.length; i++) {
    const m = list[i];
    const ts = m !== null && typeof m === "object" ? parseFloat(m.ts) : NaN;
    if (ts < previous) {
      const key = (item) => {
        const value = item !== null && typeof item === "object" ? parseFloat(item.ts) : NaN;
        return Number.isFinite(value) ? value : 0;
      };
      return list.map((item, index) => ({ item, index, ts: key(item) })).sort((a, b) => a.ts - b.ts || a.index - b.index).map((entry) => entry.item);
    }
    if (ts > previous) previous = ts;
  }
  return list;
}
function argMax(values) {
  let best = 0;
  for (let i = 1; i < values.length; i++) if (values[i] > values[best]) best = i;
  return best;
}
function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = sorted.length >> 1;
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}
function colorOf(id) {
  let hash = 2166136261;
  for (let i = 0; i < id.length; i++) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % 12;
}
function mostCommon(tally) {
  let best;
  let bestCount = 0;
  for (const [key, count] of tally) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best;
}
function scrub(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) value[i] = scrub(value[i]);
    return value;
  }
  if (value !== null && typeof value === "object") {
    const object = value;
    for (const key of Object.keys(object)) {
      const item = object[key];
      if (item === void 0) delete object[key];
      else object[key] = scrub(item);
    }
    return value;
  }
  if (typeof value === "number" && !Number.isFinite(value)) return 0;
  return value;
}
async function readArray(read, path) {
  try {
    const parsed = JSON.parse(await read(path));
    return Array.isArray(parsed) ? parsed.filter((item) => item !== null && typeof item === "object") : null;
  } catch {
    return null;
  }
}
async function analyze(source, options = {}, tuning = {}) {
  const limits = { ...DEFAULT_TUNING, ...tuning };
  const signal = options.signal;
  const throwIfAborted2 = () => {
    if (signal?.aborted) throw abortError(signal);
  };
  const progress = { phase: "listing", filesTotal: 0, filesDone: 0, messages: 0 };
  const report = () => {
    options.onProgress?.({ ...progress });
  };
  const warnings = [];
  throwIfAborted2();
  report();
  const listed = await source.list();
  throwIfAborted2();
  const root = findExportRoot(listed);
  const paths = root === "" ? listed : listed.filter((path) => path.startsWith(root)).map((path) => path.slice(root.length));
  const read = (path) => source.readText(root + path);
  let hasChannelsFile = false;
  let hasUsersFile = false;
  let hasGroupsFile = false;
  const folders = /* @__PURE__ */ new Map();
  for (const path of paths) {
    const slash = path.indexOf("/");
    if (slash < 0) {
      if (path === "channels.json") hasChannelsFile = true;
      else if (path === "users.json") hasUsersFile = true;
      else if (path === "groups.json") hasGroupsFile = true;
      continue;
    }
    if (path.length - slash - 1 !== 15 || !DAY_FILE.test(path.slice(slash + 1))) continue;
    const day = dayNumberFromIso(path.slice(slash + 1, slash + 11));
    if (day === null) continue;
    let folder = path.slice(0, slash);
    if (NON_ASCII.test(folder)) folder = folder.normalize("NFC");
    const files = folders.get(folder);
    if (files === void 0) folders.set(folder, [{ path, day }]);
    else files.push({ path, day });
  }
  if (!hasChannelsFile) {
    throw new NotASlackExportError(
      "This does not look like a Slack export: there is no channels.json in it. Export your workspace from Slack (Settings, then Import/Export Data) and drop that zip here unchanged."
    );
  }
  const channelRecords = await readArray(read, "channels.json");
  if (channelRecords === null) {
    throw new NotASlackExportError("The channels.json in this export could not be read, so the channels are unknown.");
  }
  const userRecords = hasUsersFile ? await readArray(read, "users.json") : null;
  if (userRecords === null) {
    warnings.push("The list of members (users.json) is missing from this export, so names come from the messages themselves.");
  }
  const wantPrivate = options.includePrivateChannels === true;
  const groupRecords = wantPrivate && hasGroupsFile ? await readArray(read, "groups.json") ?? [] : [];
  throwIfAborted2();
  const users = /* @__PURE__ */ new Map();
  const botIds = /* @__PURE__ */ new Set(["USLACKBOT"]);
  const teamIds = /* @__PURE__ */ new Map();
  const zoneTally = /* @__PURE__ */ new Map();
  const blocked = new Set(STOPWORDS);
  const blockNameParts = (value) => {
    if (typeof value !== "string" || value === "") return;
    for (const part of value.toLowerCase().match(NAME_PART) ?? []) if (part.length >= 3) blocked.add(part);
  };
  for (const user of userRecords ?? []) {
    const id = str(user.id);
    if (id === "") continue;
    const profile = record(user.profile);
    const isBot = user.is_bot === true || user.is_workflow_bot === true || id === "USLACKBOT";
    const realName = str(user.real_name) || str(profile.real_name);
    const tz = str(user.tz);
    users.set(id, {
      id,
      name: str(profile.display_name) || realName || str(user.name) || "Former member",
      realName: realName || void 0,
      title: str(profile.title) || void 0,
      avatar: str(profile.image_192) || str(profile.image_72) || str(profile.image_48) || void 0,
      tz: tz || void 0,
      isBot
    });
    const teamId2 = str(user.team_id) || str(profile.team);
    if (teamId2 !== "") teamIds.set(teamId2, (teamIds.get(teamId2) ?? 0) + 1);
    if (isBot) {
      botIds.add(id);
      continue;
    }
    if (user.deleted !== true && tz !== "") zoneTally.set(tz, (zoneTally.get(tz) ?? 0) + 1);
    blockNameParts(user.name);
    blockNameParts(user.real_name);
    blockNameParts(profile.real_name);
    blockNameParts(profile.display_name);
    blockNameParts(profile.first_name);
    blockNameParts(profile.last_name);
  }
  let teamZone = "UTC";
  for (const [zone] of [...zoneTally].sort((a, b) => b[1] - a[1])) {
    if (isValidTimeZone(zone)) {
      teamZone = zone;
      break;
    }
  }
  const channels = [];
  const channelNames = /* @__PURE__ */ new Map();
  let includesPrivate = false;
  const claimedFolders = /* @__PURE__ */ new Set();
  const addChannels = (records, isPrivate) => {
    for (const item of records) {
      const id = str(item.id);
      const name = str(item.name);
      if (id === "" || name === "" || channelNames.has(id)) continue;
      if (isPrivate && (item.is_mpim === true || name.startsWith("mpdm-"))) continue;
      const key = NON_ASCII.test(name) ? name.normalize("NFC") : name;
      const files = folders.get(key) ?? folders.get(id) ?? [];
      files.sort((a, b) => a.day - b.day);
      claimedFolders.add(files);
      const created = Number(item.created);
      channels.push({
        index: channels.length,
        id,
        name,
        created: Number.isFinite(created) && created > 0 ? created : 0,
        creator: str(item.creator) || void 0,
        purpose: str(record(item.purpose).value) || void 0,
        isGeneral: !isPrivate && item.is_general === true,
        files,
        messages: 0,
        replies: 0,
        threads: 0,
        reactions: 0,
        hours: new Uint32Array(24)
      });
      channelNames.set(id, name);
      if (isPrivate) includesPrivate = true;
      if (SINGLE_WORD.test(name) && name.length >= 3) blocked.add(name.toLowerCase());
    }
  };
  addChannels(channelRecords, false);
  addChannels(groupRecords, true);
  if (!channels.some((c) => c.isGeneral)) {
    const general = channels.find((c) => c.name === "general");
    if (general) general.isGeneral = true;
  }
  let minDay = Infinity;
  let maxDay = -Infinity;
  let totalDayFiles = 0;
  for (const channel of channels) {
    totalDayFiles += channel.files.length;
    if (channel.files.length === 0) continue;
    minDay = Math.min(minDay, channel.files[0].day);
    maxDay = Math.max(maxDay, channel.files[channel.files.length - 1].day);
  }
  if (totalDayFiles === 0) {
    throw new EmptyExportError(
      wantPrivate || !hasGroupsFile ? "This export has no messages in any channel." : "This export has no messages in public channels. Its private channels are only read when you choose to include them."
    );
  }
  let startDay;
  let endDay;
  if (options.period === void 0 || options.period === "auto") {
    const latest = new Date(maxDay * 864e5);
    let year = latest.getUTCFullYear();
    const earlyJanuary = latest.getUTCMonth() === 0 && latest.getUTCDate() <= 20;
    const januaryFirst = Date.UTC(year, 0, 1) / 864e5;
    if (earlyJanuary && minDay < januaryFirst) year -= 1;
    startDay = Date.UTC(year, 0, 1) / 864e5;
    endDay = year === latest.getUTCFullYear() ? maxDay : Date.UTC(year, 11, 31) / 864e5;
  } else {
    const from = dayNumberFromIso(String(options.period.start));
    const to = dayNumberFromIso(String(options.period.end));
    if (from === null || to === null) {
      throw new SlackExportError("invalid-period", "The period needs a start and an end date written like 2026-01-31.");
    }
    startDay = Math.min(from, to);
    endDay = Math.max(from, to);
  }
  const days = endDay - startDay + 1;
  const startYear = new Date(startDay * 864e5).getUTCFullYear();
  const endYear = new Date(endDay * 864e5).getUTCFullYear();
  const period = {
    start: isoFromDayNumber(startDay),
    end: isoFromDayNumber(endDay),
    label: startYear === endYear ? String(startYear) : `${startYear}\u2013${endYear}`,
    days,
    timezone: teamZone
  };
  const dates = new Array(days);
  const monthOfDay = new Uint8Array(days);
  for (let i = 0; i < days; i++) {
    dates[i] = isoFromDayNumber(startDay + i);
    monthOfDay[i] = new Date((startDay + i) * 864e5).getUTCMonth();
  }
  const tableFirstDay = startDay - 3;
  const tableLastDay = endDay + 3;
  const teamTable = buildZoneTable(teamZone, tableFirstDay, tableLastDay);
  const zoneTables = /* @__PURE__ */ new Map([[teamZone, teamTable]]);
  const zoneFor = (zone) => {
    if (zone === void 0) return teamTable;
    let table = zoneTables.get(zone);
    if (table === void 0) {
      table = isValidTimeZone(zone) ? buildZoneTable(zone, tableFirstDay, tableLastDay) : teamTable;
      zoneTables.set(zone, table);
    }
    return table;
  };
  const teamDayOf = (ts) => Math.floor((ts + offsetAt(teamTable, ts)) / DAY) - startDay;
  const people = /* @__PURE__ */ new Map();
  const personFor = (id) => {
    let person = people.get(id);
    if (person === void 0) {
      const info = users.get(id);
      person = {
        id,
        info,
        seenName: void 0,
        seenRealName: void 0,
        seenAvatar: void 0,
        zone: zoneFor(info?.tz),
        messages: 0,
        words: 0,
        reactionsGiven: 0,
        reactionsReceived: 0,
        threadsStarted: 0,
        replies: 0,
        firstReplies: 0,
        replyDelays: [],
        questions: 0,
        links: 0,
        files: 0,
        images: 0,
        mentionsMade: 0,
        mentionsReceived: 0,
        broadcasts: 0,
        edits: 0,
        shouts: 0,
        thanksGiven: 0,
        thanksReceived: 0,
        laughs: 0,
        longestMonologue: 0,
        huddleSeconds: 0,
        dayStarters: 0,
        dayClosers: 0,
        channelsCreated: 0,
        firstTs: Infinity,
        firstDay: 0,
        hours: null,
        weekdays: null,
        dayCounts: null,
        ownDays: null,
        channels: /* @__PURE__ */ new Map(),
        emoji: /* @__PURE__ */ new Map(),
        vocabulary: /* @__PURE__ */ new Map(),
        vocabularyTotal: 0
      };
      people.set(id, person);
    }
    return person;
  };
  const isBotUser = (id, message) => {
    if (botIds.has(id)) return true;
    return !users.has(id) && record(message.user_profile).is_bot === true;
  };
  const humanAuthor = (m) => {
    if (m.type !== void 0 && m.type !== "message") return void 0;
    const subtype = m.subtype;
    if (subtype !== void 0 && subtype !== "thread_broadcast" && subtype !== "me_message" && subtype !== "file_share") {
      return void 0;
    }
    const user = m.user;
    if (typeof user !== "string" || user === "" || m.bot_id) return void 0;
    if (m.room !== null && typeof m.room === "object") return void 0;
    return isBotUser(user, m) ? void 0 : user;
  };
  const messageText = (m) => {
    const raw = typeof m.text === "string" ? m.text : "";
    if (m.subtype === "file_share" && raw.charCodeAt(0) === 60) {
      const notice = UPLOAD_NOTICE.exec(raw);
      if (notice) return notice[1] ?? "";
    }
    return raw;
  };
  const analyzer = new TextAnalyzer(
    { userName: (id) => users.get(id)?.name ?? people.get(id)?.seenName, channelName: (id) => channelNames.get(id) },
    blocked
  );
  const shownText = (m) => {
    const shown = analyzer.display(messageText(m));
    if (shown !== "") return shown;
    const files = Array.isArray(m.files) ? m.files : m.file ? [m.file] : [];
    if (files.length === 0) return "";
    return files.some((file) => isImageFile(record(file))) ? "(shared an image)" : "(shared a file)";
  };
  const vocabulary = new Vocabulary(limits.maxVocabulary);
  const emojiIds = /* @__PURE__ */ new Map();
  const emojiNames = [];
  const emojiStandard = [];
  const emojiReactions = [];
  const emojiTyped = [];
  const emojiIdFor = (canonical) => {
    let id = emojiIds.get(canonical);
    if (id === void 0) {
      id = emojiNames.length;
      emojiIds.set(canonical, id);
      emojiNames.push(canonical);
      emojiStandard.push(isStandardEmoji(canonical));
      emojiReactions.push(0);
      emojiTyped.push(0);
    }
    return id;
  };
  const reactionIds = /* @__PURE__ */ new Map();
  const reactionEmojiId = (rawName) => {
    let id = reactionIds.get(rawName);
    if (id === void 0) {
      const canonical = canonicalEmoji(rawName);
      id = canonical === null ? -1 : emojiIdFor(canonical);
      reactionIds.set(rawName, id);
    }
    return id;
  };
  const hourGrid = new Uint32Array(days * 24);
  const laughCounts = new Array(LAUGH_STYLES.length).fill(0);
  let totalMessages = 0;
  let totalWords = 0;
  let totalCharacters = 0;
  let totalReactions = 0;
  let totalThreads = 0;
  let totalReplies = 0;
  let totalFiles = 0;
  let totalLinks = 0;
  let totalMentions = 0;
  let totalBotMessages = 0;
  let totalQuestions = 0;
  let totalExclamations = 0;
  let totalThanks = 0;
  let typedEmoji = 0;
  let messagesScanned = 0;
  let filesScanned = 0;
  let skippedFiles = 0;
  let firstTs = Infinity;
  let lastTs = -Infinity;
  const topMessages = [];
  const best = {};
  let huddleCount = 0;
  let huddleSeconds = 0;
  let longestHuddle = 0;
  const huddleRooms = /* @__PURE__ */ new Set();
  const joins = /* @__PURE__ */ new Map();
  const seenBefore = /* @__PURE__ */ new Set();
  const plan = [];
  for (const channel of channels) {
    for (const file of channel.files) {
      if (file.day >= startDay - 1 && file.day <= endDay + 1) plan.push({ kind: 0, channel, path: file.path });
    }
  }
  const periodFiles = plan.length;
  for (const channel of channels) {
    for (const file of channel.files) {
      if (file.day >= startDay - 1 && file.day <= endDay + 1) continue;
      if (channel.isGeneral) plan.push({ kind: 1, channel, path: file.path });
      else if (file.day === minDay || file.day === maxDay) plan.push({ kind: 2, channel, path: file.path });
    }
  }
  const fileMinDay = new Int32Array(periodFiles).fill(-1);
  const fileMaxDay = new Int32Array(periodFiles).fill(-1);
  progress.phase = "reading";
  progress.filesTotal = plan.length;
  report();
  let threads = /* @__PURE__ */ new Map();
  let bookends = /* @__PURE__ */ new Map();
  let runPerson = null;
  let runLength = 0;
  let runLastTs = 0;
  const threadFor = (key) => {
    let thread = threads.get(key);
    if (thread === void 0) {
      thread = {
        key,
        rootTs: parseFloat(key),
        rootSeen: false,
        rootIsMessage: false,
        rootPerson: null,
        rootUser: "",
        rootInPeriod: false,
        rootDay: 0,
        rootFile: -1,
        replyCount: 0,
        replyUsers: 0,
        observed: 0,
        firstReplyTs: Infinity,
        firstReplyPerson: null,
        firstReplyInPeriod: false,
        parentUser: "",
        participants: []
      };
      threads.set(key, thread);
    }
    return thread;
  };
  const noteRoot = (key, m, person, isMessage, inPeriod, day, fileIndex) => {
    const thread = threadFor(key);
    thread.rootSeen = true;
    thread.rootIsMessage = isMessage;
    thread.rootPerson = person;
    thread.rootUser = typeof m.user === "string" ? m.user : "";
    thread.rootInPeriod = inPeriod;
    thread.rootDay = day;
    thread.rootFile = fileIndex;
    const replyCount = Number(m.reply_count);
    thread.replyCount = replyCount > 0 ? Math.floor(replyCount) : Array.isArray(m.replies) ? m.replies.length : 0;
    const listed2 = new Set(Array.isArray(m.reply_users) ? m.reply_users : []);
    if (thread.rootUser !== "") listed2.add(thread.rootUser);
    const replyUsers = Number(m.reply_users_count);
    thread.replyUsers = Math.max(listed2.size, replyUsers > 0 ? Math.floor(replyUsers) : 0);
    return thread;
  };
  const finishChannel = (channel) => {
    for (const thread of threads.values()) {
      const replies = Math.max(thread.replyCount, thread.observed);
      const starter = thread.rootPerson;
      if (starter !== null && thread.rootInPeriod && replies > 0) {
        starter.threadsStarted++;
        channel.threads++;
        totalThreads++;
        const biggest = best.biggestThread;
        if (biggest === void 0 || replies > biggest.replies || replies === biggest.replies && thread.rootTs < biggest.thread.rootTs) {
          best.biggestThread = { thread, channel, replies };
        }
      }
      const replier = thread.firstReplyPerson;
      if (replier === null || !thread.firstReplyInPeriod || !thread.rootSeen || !thread.rootIsMessage) continue;
      const startedBy = starter !== null ? starter.id : thread.rootUser;
      if (startedBy === replier.id) continue;
      const delay = thread.firstReplyTs - thread.rootTs;
      if (delay < 0 || delay > FIRST_REPLY_WINDOW_SECONDS) continue;
      replier.firstReplies++;
      replier.replyDelays.push(delay);
    }
    for (const day of bookends.values()) {
      if (day.count < MIN_MESSAGES_FOR_DAY_BOOKENDS) continue;
      day.first.dayStarters++;
      day.last.dayClosers++;
    }
    threads = /* @__PURE__ */ new Map();
    bookends = /* @__PURE__ */ new Map();
    runPerson = null;
    runLength = 0;
    runLastTs = 0;
  };
  const recordHuddle = (room) => {
    const id = str(room.id);
    if (id !== "") {
      if (huddleRooms.has(id)) return;
      huddleRooms.add(id);
    }
    huddleCount++;
    const start = Number(room.date_start);
    const end = Number(room.date_end);
    const seconds = end > start ? Math.min(end - start, MAX_HUDDLE_SECONDS) : 0;
    if (seconds <= 0) return;
    huddleSeconds += seconds;
    if (seconds > longestHuddle) longestHuddle = seconds;
    const history = Array.isArray(room.participant_history) ? room.participant_history : [];
    const present = /* @__PURE__ */ new Set();
    for (const id2 of history) if (typeof id2 === "string" && id2 !== "") present.add(id2);
    if (present.size === 0 && typeof room.created_by === "string" && room.created_by !== "") present.add(room.created_by);
    for (const id2 of present) {
      if (!botIds.has(id2)) personFor(id2).huddleSeconds += seconds;
    }
  };
  const beats = (reactions, ts, other) => reactions > other.reactions || reactions === other.reactions && ts < other.ts;
  const offerTopMessage = (reactions, ts, person, channel, day, m) => {
    let sameAuthor = 0;
    let weakest = -1;
    for (let i = 0; i < topMessages.length; i++) {
      if (topMessages[i].person !== person) continue;
      sameAuthor++;
      weakest = i;
    }
    if (sameAuthor >= TOP_MESSAGES_PER_AUTHOR) {
      if (!beats(reactions, ts, topMessages[weakest])) return;
      topMessages.splice(weakest, 1);
    } else if (topMessages.length >= TOP_MESSAGES && !beats(reactions, ts, topMessages[topMessages.length - 1])) {
      return;
    }
    const perEmoji = /* @__PURE__ */ new Map();
    for (const reaction of m.reactions) {
      if (reaction === null || typeof reaction !== "object" || typeof reaction.name !== "string") continue;
      const id = reactionEmojiId(reaction.name);
      if (id < 0) continue;
      const count = reaction.count > 0 ? Math.floor(reaction.count) : Array.isArray(reaction.users) ? reaction.users.length : 0;
      perEmoji.set(id, (perEmoji.get(id) ?? 0) + count);
    }
    const top = [...perEmoji].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([id, count]) => ({ emoji: emojiRef(emojiNames[id]), count }));
    topMessages.push({ reactions, ts, person, channel, day, text: shownText(m), top });
    topMessages.sort((a, b) => b.reactions - a.reactions || a.ts - b.ts);
    if (topMessages.length > TOP_MESSAGES) topMessages.length = TOP_MESSAGES;
  };
  const processPeriodFile = (channel, fileIndex, body) => {
    let list;
    try {
      list = JSON.parse(body);
    } catch {
      skippedFiles++;
      return;
    }
    if (!Array.isArray(list)) {
      skippedFiles++;
      return;
    }
    filesScanned++;
    const messages = inTimeOrder(list);
    let minHumanDay = -1;
    let maxHumanDay = -1;
    for (let index = 0; index < messages.length; index++) {
      const m = messages[index];
      if (m === null || typeof m !== "object") continue;
      messagesScanned++;
      const tsKey = typeof m.ts === "string" ? m.ts : String(m.ts);
      const ts = parseFloat(tsKey);
      if (!(ts > 0)) continue;
      if (ts < firstTs) firstTs = ts;
      if (ts > lastTs) lastTs = ts;
      if (m.type !== void 0 && m.type !== "message") continue;
      const local = ts + offsetAt(teamTable, ts);
      const dayNumber = Math.floor(local / DAY);
      const day = dayNumber - startDay;
      const inPeriod = day >= 0 && day < days;
      const subtype = typeof m.subtype === "string" ? m.subtype : void 0;
      const threadKey = m.thread_ts === void 0 || m.thread_ts === null ? void 0 : String(m.thread_ts);
      const isRoot = threadKey === tsKey;
      const isReply = threadKey !== void 0 && !isRoot;
      const room = m.room;
      if (room !== null && typeof room === "object") {
        const call = room;
        if (subtype === "huddle_thread" || call.call_family === "huddle" || subtype === void 0 && call.call_family === void 0) {
          if (inPeriod) recordHuddle(call);
        }
        if (isRoot && threadKey !== void 0) noteRoot(threadKey, m, null, false, inPeriod, day, fileIndex);
        continue;
      }
      const author = humanAuthor(m);
      if (author === void 0) {
        const user = m.user;
        if (subtype === "channel_join") {
          if (channel.isGeneral && typeof user === "string" && user !== "") {
            const known = joins.get(user);
            if (known === void 0 || ts < known) joins.set(user, ts);
            if (day < 0) seenBefore.add(user);
          }
          continue;
        }
        const fromBot = (subtype === void 0 || !SYSTEM_SUBTYPES.has(subtype)) && (Boolean(m.bot_id) || subtype === "bot_message" || typeof user === "string" && isBotUser(user, m));
        if (isRoot && threadKey !== void 0) noteRoot(threadKey, m, null, fromBot, inPeriod, day, fileIndex);
        else if (isReply && fromBot) threadFor(threadKey).observed++;
        if (fromBot && inPeriod) {
          totalBotMessages++;
          if (!isReply) runPerson = null;
        }
        continue;
      }
      const person = personFor(author);
      if (person.info === void 0 && person.seenName === void 0) {
        const profile = record(m.user_profile);
        const seen = str(profile.display_name) || str(profile.real_name) || str(profile.name);
        if (seen !== "") {
          person.seenName = seen;
          person.seenRealName = str(profile.real_name) || void 0;
          person.seenAvatar = str(profile.image_72) || void 0;
        }
      }
      let thread;
      if (isRoot) {
        thread = noteRoot(threadKey, m, person, true, inPeriod, day, fileIndex);
      } else if (isReply) {
        thread = threadFor(threadKey);
        thread.observed++;
        if (thread.parentUser === "" && typeof m.parent_user_id === "string") thread.parentUser = m.parent_user_id;
        if (ts < thread.firstReplyTs) {
          thread.firstReplyTs = ts;
          thread.firstReplyPerson = person;
          thread.firstReplyInPeriod = inPeriod;
        }
        if (thread.participants.indexOf(person) < 0) thread.participants.push(person);
      }
      if (!inPeriod) {
        if (day < 0 && channel.isGeneral) seenBefore.add(author);
        continue;
      }
      const hour = Math.floor((local - dayNumber * DAY) / 3600);
      if (person.hours === null) {
        person.hours = new Uint32Array(24);
        person.weekdays = new Uint32Array(7);
        person.dayCounts = new Uint16Array(days);
        person.ownDays = new Uint8Array(days + 2);
      }
      totalMessages++;
      person.messages++;
      channel.messages++;
      channel.hours[hour]++;
      hourGrid[day * 24 + hour]++;
      if (person.dayCounts[day] < 65535) person.dayCounts[day]++;
      if (ts < person.firstTs) {
        person.firstTs = ts;
        person.firstDay = day;
      }
      person.channels.set(channel.index, (person.channels.get(channel.index) ?? 0) + 1);
      if (minHumanDay < 0 || day < minHumanDay) minHumanDay = day;
      if (day > maxHumanDay) maxHumanDay = day;
      if (person.zone === teamTable) {
        person.hours[hour]++;
        person.weekdays[(dayNumber + 3) % 7]++;
        person.ownDays[day + 1] = 1;
      } else {
        const own = ts + offsetAt(person.zone, ts);
        const ownDayNumber = Math.floor(own / DAY);
        person.hours[Math.floor((own - ownDayNumber * DAY) / 3600)]++;
        person.weekdays[(ownDayNumber + 3) % 7]++;
        const ownDay = ownDayNumber - startDay;
        if (ownDay >= -1 && ownDay <= days) person.ownDays[ownDay + 1] = 1;
      }
      let bookend = bookends.get(day);
      if (bookend === void 0) {
        bookend = { count: 0, firstTs: ts, first: person, lastTs: ts, last: person };
        bookends.set(day, bookend);
      }
      bookend.count++;
      if (ts < bookend.firstTs) {
        bookend.firstTs = ts;
        bookend.first = person;
      }
      if (ts >= bookend.lastTs) {
        bookend.lastTs = ts;
        bookend.last = person;
      }
      if (!isReply) {
        if (runPerson === person && ts - runLastTs < MONOLOGUE_GAP_SECONDS) runLength++;
        else runLength = 1;
        runPerson = person;
        runLastTs = ts;
        if (runLength > person.longestMonologue) person.longestMonologue = runLength;
      } else if (subtype === "thread_broadcast" && runPerson !== person) {
        runPerson = null;
      }
      const facts = analyzer.analyze(messageText(m));
      totalWords += facts.words;
      totalCharacters += facts.characters;
      person.words += facts.words;
      if (facts.question) {
        person.questions++;
        totalQuestions++;
      }
      if (facts.exclaim) totalExclamations++;
      if (facts.shout) person.shouts++;
      if (facts.links > 0) {
        person.links += facts.links;
        totalLinks += facts.links;
      }
      person.broadcasts += facts.broadcasts;
      let thanked = false;
      if (facts.thanks) {
        person.thanksGiven++;
        totalThanks++;
      }
      for (let i = 0; i < facts.mentions.length; i++) {
        const mentioned = facts.mentions[i];
        if (mentioned === author || botIds.has(mentioned)) continue;
        const target = personFor(mentioned);
        person.mentionsMade++;
        target.mentionsReceived++;
        totalMentions++;
        if (facts.thanks) {
          target.thanksReceived++;
          thanked = true;
        }
      }
      if (facts.thanks && !thanked && thread !== void 0 && isReply) {
        const starter = thread.rootPerson !== null ? thread.rootPerson.id : thread.rootSeen && thread.rootIsMessage ? thread.rootUser : thread.parentUser;
        if (starter !== "" && starter !== author && !botIds.has(starter)) personFor(starter).thanksReceived++;
      }
      if (facts.laughs !== 0) {
        person.laughs += countBits(facts.laughs);
        for (let style = 0; style < LAUGH_STYLES.length; style++) {
          if (facts.laughs & 1 << style) laughCounts[style]++;
        }
      }
      for (let i = 0; i < facts.emoji.length; i++) {
        const id = emojiIdFor(facts.emoji[i]);
        emojiTyped[id]++;
        typedEmoji++;
        person.emoji.set(id, (person.emoji.get(id) ?? 0) + 1);
      }
      if (facts.tokens.length > 0) {
        const own = person.vocabulary;
        for (let i = 0; i < facts.tokens.length; i++) {
          const id = vocabulary.add(facts.tokens[i]);
          own.set(id, (own.get(id) ?? 0) + 1);
        }
        person.vocabularyTotal += facts.tokens.length;
        if (own.size > limits.maxPersonVocabulary) pruneCounts(own, limits.maxPersonVocabulary);
        if (vocabulary.full) {
          const remap = vocabulary.compact();
          for (const other of people.values()) {
            if (other.vocabulary.size > 0) other.vocabulary = remapCounts(other.vocabulary, remap);
          }
        }
      }
      if (facts.words > 0 && (best.longestMessage === void 0 || facts.words > best.longestMessage.words)) {
        best.longestMessage = { person, words: facts.words, channel, day };
      }
      if (best.firstMessage === void 0 || ts < best.firstMessage.ts) {
        best.firstMessage = { ts, person, channel, day, text: shownText(m) };
      }
      if (isReply) {
        person.replies++;
        channel.replies++;
        totalReplies++;
      }
      if (Array.isArray(m.files)) {
        for (const file of m.files) {
          if (file === null || typeof file !== "object" || file.mode === "tombstone") continue;
          person.files++;
          totalFiles++;
          if (isImageFile(file)) person.images++;
        }
      } else if (m.file !== null && typeof m.file === "object") {
        person.files++;
        totalFiles++;
        if (isImageFile(m.file)) person.images++;
      }
      if (m.edited !== void 0 && m.edited !== null) person.edits++;
      const reactions = m.reactions;
      if (Array.isArray(reactions) && reactions.length > 0) {
        let received = 0;
        let own = 0;
        for (const reaction of reactions) {
          if (reaction === null || typeof reaction !== "object" || typeof reaction.name !== "string") continue;
          const id = reactionEmojiId(reaction.name);
          if (id < 0) continue;
          const givers = Array.isArray(reaction.users) ? reaction.users : [];
          const count = reaction.count > 0 ? Math.floor(reaction.count) : givers.length;
          if (!(count > 0)) continue;
          received += count;
          emojiReactions[id] += count;
          for (const giver of givers) {
            if (typeof giver !== "string" || botIds.has(giver)) continue;
            if (giver === author) own++;
            const from = giver === author ? person : personFor(giver);
            from.reactionsGiven++;
            from.emoji.set(id, (from.emoji.get(id) ?? 0) + 1);
          }
        }
        if (received > 0) {
          totalReactions += received;
          channel.reactions += received;
          person.reactionsReceived += received - own;
          offerTopMessage(received, ts, person, channel, day, m);
        }
      }
    }
    fileMinDay[fileIndex] = minHumanDay;
    fileMaxDay[fileIndex] = maxHumanDay;
  };
  const processHistoryFile = (body, joinsToo) => {
    let list;
    try {
      list = JSON.parse(body);
    } catch {
      skippedFiles++;
      return;
    }
    if (!Array.isArray(list)) {
      skippedFiles++;
      return;
    }
    filesScanned++;
    for (const m of list) {
      if (m === null || typeof m !== "object") continue;
      messagesScanned++;
      const ts = parseFloat(m.ts);
      if (!(ts > 0)) continue;
      if (ts < firstTs) firstTs = ts;
      if (ts > lastTs) lastTs = ts;
      if (!joinsToo || typeof m.user !== "string" || m.user === "") continue;
      if (m.subtype === "channel_join") {
        const known = joins.get(m.user);
        if (known === void 0 || ts < known) joins.set(m.user, ts);
      }
      if (teamDayOf(ts) < 0) seenBefore.add(m.user);
    }
  };
  const inFlight = [];
  let requested = 0;
  let current;
  for (let index = 0; index < plan.length; index++) {
    throwIfAborted2();
    while (requested < plan.length && requested - index < limits.readAhead) {
      inFlight.push(read(plan[requested].path).then((body2) => body2, () => null));
      requested++;
    }
    const item = plan[index];
    const body = await inFlight.shift();
    if (item.kind === 0 && current !== item.channel) {
      if (current !== void 0) finishChannel(current);
      current = item.channel;
    } else if (item.kind !== 0 && current !== void 0) {
      finishChannel(current);
      current = void 0;
    }
    if (body === null) skippedFiles++;
    else if (item.kind === 0) processPeriodFile(item.channel, index, body);
    else processHistoryFile(body, item.kind === 1);
    progress.filesDone = index + 1;
    progress.messages = messagesScanned;
    progress.current = item.channel.name;
    if ((index + 1) % limits.progressEvery === 0) report();
  }
  if (current !== void 0) finishChannel(current);
  throwIfAborted2();
  if (plan.length > 0 && skippedFiles >= plan.length) {
    throw new EmptyExportError("None of the day files in this export could be read.");
  }
  if (totalMessages === 0) {
    throw new EmptyExportError(
      `No messages from people were found between ${longDate(startDay)} and ${longDate(endDay)}.`
    );
  }
  progress.phase = "computing";
  delete progress.current;
  report();
  const byDayCounts = new Uint32Array(days);
  const byHour = new Array(24).fill(0);
  const byWeekday = new Array(7).fill(0);
  const byMonth = new Array(12).fill(0);
  const heatmap = Array.from({ length: 7 }, () => new Array(24).fill(0));
  let recordHourIndex = 0;
  for (let day = 0; day < days; day++) {
    const weekday = weekdayOfDayNumber(startDay + day);
    let dayTotal = 0;
    for (let hour = 0; hour < 24; hour++) {
      const count = hourGrid[day * 24 + hour];
      if (count === 0) continue;
      dayTotal += count;
      byHour[hour] += count;
      heatmap[weekday][hour] += count;
      if (count > hourGrid[recordHourIndex]) recordHourIndex = day * 24 + hour;
    }
    byDayCounts[day] = dayTotal;
    byWeekday[weekday] += dayTotal;
    byMonth[monthOfDay[day]] += dayTotal;
  }
  let activeDays = 0;
  for (let day = 0; day < days; day++) if (byDayCounts[day] > 0) activeDays++;
  const busiestDay = argMax(byDayCounts);
  let quietestWeekday = 0;
  for (let weekday = 1; weekday < 7; weekday++) {
    if (byWeekday[weekday] <= byWeekday[quietestWeekday]) quietestWeekday = weekday;
  }
  const channelPeople = channels.map(() => /* @__PURE__ */ new Map());
  const authors = [...people.values()].filter((p2) => p2.messages > 0);
  for (const person of authors) {
    for (const [channelIndex, count] of person.channels) channelPeople[channelIndex].set(person, count);
  }
  const authorIds = new Set(authors.map((p2) => p2.id));
  const createdDay = /* @__PURE__ */ new Map();
  let newChannels = 0;
  for (const channel of channels) {
    if (channel.created <= 0) continue;
    const day = teamDayOf(channel.created);
    createdDay.set(channel.id, day + startDay);
    if (day < 0 || day >= days) continue;
    newChannels++;
    if (channel.creator !== void 0) {
      const creator = people.get(channel.creator);
      if (creator !== void 0) creator.channelsCreated++;
    }
  }
  const createdInPeriod = (channel) => {
    const day = createdDay.get(channel.id);
    return day !== void 0 && day >= startDay && day <= endDay;
  };
  const channelStats = channels.filter((channel) => channel.messages > 0).sort((a, b) => b.messages - a.messages || (a.name < b.name ? -1 : 1)).map((channel) => {
    const posters = [...channelPeople[channel.index]].sort((a, b) => b[1] - a[1] || b[0].messages - a[0].messages);
    const night = channel.hours[22] + channel.hours[23] + channel.hours[0] + channel.hours[1] + channel.hours[2] + channel.hours[3] + channel.hours[4];
    const stat = {
      id: channel.id,
      name: channel.name,
      messages: channel.messages,
      people: posters.length,
      threads: channel.threads,
      reactions: channel.reactions,
      createdInPeriod: createdInPeriod(channel),
      topPeople: posters.slice(0, 3).map(([person, messages]) => ({ id: person.id, messages })),
      peakHour: argMax(channel.hours),
      nightShare: round4(night / channel.messages),
      threadShare: round4(channel.replies / channel.messages),
      reactionsPerMessage: round2(channel.reactions / channel.messages)
    };
    if (channel.creator !== void 0 && authorIds.has(channel.creator)) stat.creator = channel.creator;
    if (channel.purpose !== void 0) stat.purpose = channel.purpose;
    return stat;
  });
  const hasEarlierFiles = minDay < startDay;
  const firstDataDay = Number.isFinite(firstTs) ? Math.max(0, teamDayOf(firstTs)) : 0;
  const arrival = /* @__PURE__ */ new Map();
  const nameOf = (person) => person.info?.name ?? person.seenName ?? "Former member";
  authors.sort(
    (a, b) => b.messages - a.messages || b.words - a.words || (nameOf(a) < nameOf(b) ? -1 : nameOf(a) > nameOf(b) ? 1 : a.id < b.id ? -1 : 1)
  );
  const othersWords = (person) => vocabulary.total - person.vocabularyTotal;
  let nightTotal = 0;
  let earlyTotal = 0;
  const personList = authors.map((acc, index) => {
    const hours = acc.hours;
    const weekdays = acc.weekdays;
    const dayCounts = acc.dayCounts;
    const ownDays = acc.ownDays;
    const night = hours[22] + hours[23] + hours[0] + hours[1] + hours[2] + hours[3] + hours[4];
    const early = hours[5] + hours[6] + hours[7];
    nightTotal += night;
    earlyTotal += early;
    let active = 0;
    for (let day = 0; day < days; day++) if (dayCounts[day] > 0) active++;
    const busiest = argMax(dayCounts);
    let streak = 0;
    let longestStreak = 0;
    for (let i = 0; i < ownDays.length; i++) {
      if (weekdayOfDayNumber(startDay + i - 1) >= 5) continue;
      if (ownDays[i] === 1) {
        streak++;
        if (streak > longestStreak) longestStreak = streak;
      } else {
        streak = 0;
      }
    }
    const perChannel = [...acc.channels].sort((a, b) => b[1] - a[1]);
    let channelsActive = 0;
    for (const [, count] of perChannel) if (count >= 3) channelsActive++;
    let customEmojiUses = 0;
    for (const [id, count] of acc.emoji) if (!emojiStandard[id]) customEmojiUses += count;
    const topEmoji = [...acc.emoji].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id, count]) => ({ emoji: emojiRef(emojiNames[id]), count }));
    let fewer = 0;
    for (let j2 = authors.length - 1; j2 > index && authors[j2].messages < acc.messages; j2--) fewer++;
    const percentile = authors.length <= 1 ? 100 : Math.round(fewer / (authors.length - 1) * 100);
    const joinTs = joins.get(acc.id);
    const joinDay = joinTs === void 0 ? void 0 : teamDayOf(joinTs);
    let joinedInPeriod = false;
    if (!seenBefore.has(acc.id)) {
      if (joinDay !== void 0 && joinDay <= acc.firstDay) {
        joinedInPeriod = joinDay - firstDataDay > 30 && joinDay < days;
        if (joinedInPeriod) arrival.set(acc.id, `joined in ${monthName(monthOfDay[joinDay])}`);
      } else if (hasEarlierFiles && acc.firstDay > 60) {
        joinedInPeriod = true;
        arrival.set(acc.id, `first showed up in ${monthName(monthOfDay[acc.firstDay])}`);
      }
    }
    const stats = {
      messages: acc.messages,
      words: acc.words,
      avgWords: round1(acc.words / acc.messages),
      reactionsGiven: acc.reactionsGiven,
      reactionsReceived: acc.reactionsReceived,
      threadsStarted: acc.threadsStarted,
      replies: acc.replies,
      firstReplies: acc.firstReplies,
      questions: acc.questions,
      links: acc.links,
      files: acc.files,
      images: acc.images,
      mentionsMade: acc.mentionsMade,
      mentionsReceived: acc.mentionsReceived,
      broadcasts: acc.broadcasts,
      edits: acc.edits,
      shouts: acc.shouts,
      nightMessages: night,
      earlyMessages: early,
      weekendMessages: weekdays[5] + weekdays[6],
      activeDays: active,
      longestStreak,
      channelsActive,
      channelsCreated: acc.channelsCreated,
      distinctEmoji: acc.emoji.size,
      customEmojiUses,
      thanksGiven: acc.thanksGiven,
      thanksReceived: acc.thanksReceived,
      laughs: acc.laughs,
      longestMonologue: acc.longestMonologue,
      huddleMinutes: Math.round(acc.huddleSeconds / 60),
      dayStarters: acc.dayStarters,
      dayClosers: acc.dayClosers
    };
    if (acc.replyDelays.length > 0) stats.medianReplySeconds = Math.round(median(acc.replyDelays));
    const person = {
      id: acc.id,
      name: nameOf(acc),
      color: colorOf(acc.id),
      rank: index + 1,
      percentile,
      stats,
      topChannels: perChannel.slice(0, 3).map(([channelIndex, messages]) => {
        const channel = channels[channelIndex];
        return { id: channel.id, name: channel.name, messages };
      }),
      topEmoji,
      peakHour: argMax(hours),
      peakWeekday: argMax(weekdays),
      busiestDay: { date: dates[busiest], messages: dayCounts[busiest] },
      firstMessageDate: dates[acc.firstDay],
      joinedInPeriod,
      awards: []
    };
    const realName = acc.info?.realName ?? acc.seenRealName;
    if (realName !== void 0) person.realName = realName;
    if (acc.info?.title !== void 0) person.title = acc.info.title;
    const avatar = acc.info?.avatar ?? acc.seenAvatar;
    if (avatar !== void 0) person.avatar = avatar;
    if (acc.info?.tz !== void 0 && (acc.info.tz === teamZone || acc.zone !== teamTable)) person.tz = acc.info.tz;
    const others = othersWords(acc);
    if (others >= 50 && acc.vocabularyTotal > 0) {
      let best2;
      for (const [id, count] of acc.vocabulary) {
        if (count < 12) continue;
        const elsewhere = Math.max(0, vocabulary.counts[id] - count);
        const lift = count / acc.vocabularyTotal / ((elsewhere + 0.5) / others);
        if (lift < 4) continue;
        if (best2 === void 0 || lift > best2.lift || lift === best2.lift && count > best2.count) {
          best2 = { word: vocabulary.words[id], count, lift };
        }
      }
      if (best2 !== void 0) person.signatureWord = { word: best2.word, count: best2.count, lift: Math.min(999, round1(best2.lift)) };
    }
    return person;
  });
  const dayWords = /* @__PURE__ */ new Map();
  const dayChannels = /* @__PURE__ */ new Map();
  const dayPeople = /* @__PURE__ */ new Map();
  let dayWordTotal = 0;
  const rootThread = best.biggestThread;
  const rootKey = rootThread?.thread.key;
  const rootFile = rootThread?.thread.rootFile ?? -1;
  let rootText = "";
  for (let index = 0; index < periodFiles; index++) {
    const holdsBusiestDay = fileMinDay[index] >= 0 && fileMinDay[index] <= busiestDay && fileMaxDay[index] >= busiestDay;
    const holdsRoot = rootFile === index;
    if (!holdsBusiestDay && !holdsRoot) continue;
    throwIfAborted2();
    const item = plan[index];
    let list;
    try {
      list = JSON.parse(await read(item.path));
    } catch {
      continue;
    }
    if (!Array.isArray(list)) continue;
    for (const m of list) {
      if (m === null || typeof m !== "object") continue;
      if (holdsRoot && String(m.ts) === rootKey) rootText = shownText(m);
      if (!holdsBusiestDay) continue;
      const author = humanAuthor(m);
      const ts = parseFloat(m.ts);
      if (author === void 0 || !(ts > 0) || teamDayOf(ts) !== busiestDay) continue;
      dayChannels.set(item.channel, (dayChannels.get(item.channel) ?? 0) + 1);
      dayPeople.set(author, (dayPeople.get(author) ?? 0) + 1);
      const facts = analyzer.analyze(messageText(m));
      dayWordTotal += facts.tokens.length;
      for (const word of facts.tokens) dayWords.set(word, (dayWords.get(word) ?? 0) + 1);
    }
  }
  const restOfYearWords = vocabulary.total - dayWordTotal;
  const minDayCount = dayWordTotal >= 400 ? 3 : 2;
  const distinctive = [];
  for (const [word, count] of dayWords) {
    if (count < minDayCount) continue;
    if (restOfYearWords < 50) {
      distinctive.push({ word, score: count });
      continue;
    }
    const elsewhere = Math.max(0, vocabulary.countOf(word) - count);
    const lift = count / dayWordTotal / ((elsewhere + 0.5) / restOfYearWords);
    if (lift >= 1.5) distinctive.push({ word, score: count * Math.log(lift) });
  }
  if (distinctive.length === 0) {
    for (const [word, count] of dayWords) distinctive.push({ word, score: count });
  }
  distinctive.sort((a, b) => b.score - a.score || (a.word < b.word ? -1 : 1));
  const busiestChannel = [...dayChannels].sort((a, b) => b[1] - a[1])[0]?.[0];
  const moments = {
    busiestDay: {
      date: dates[busiestDay],
      messages: byDayCounts[busiestDay],
      topWords: distinctive.slice(0, 5).map((entry) => entry.word),
      topPeople: [...dayPeople].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => id).filter((id) => authorIds.has(id))
    },
    topMessages: topMessages.map(
      (candidate) => ({
        person: candidate.person.id,
        personName: nameOf(candidate.person),
        channelId: candidate.channel.id,
        channelName: candidate.channel.name,
        date: dates[candidate.day],
        text: candidate.text,
        reactions: candidate.reactions,
        topReactions: candidate.top
      })
    )
  };
  if (busiestChannel !== void 0) moments.busiestDay.topChannel = { id: busiestChannel.id, name: busiestChannel.name };
  if (rootThread !== void 0) {
    const { thread, channel, replies } = rootThread;
    const starter = thread.rootPerson;
    const others = thread.participants.filter((p2) => p2 !== starter).length;
    moments.biggestThread = {
      channelId: channel.id,
      channelName: channel.name,
      starter: starter.id,
      starterName: nameOf(starter),
      date: dates[thread.rootDay],
      replies,
      participants: Math.max(1 + others, thread.replyUsers),
      text: rootText
    };
  }
  const { firstMessage, longestMessage } = best;
  if (firstMessage !== void 0) {
    moments.firstMessage = {
      date: dates[firstMessage.day],
      person: firstMessage.person.id,
      personName: nameOf(firstMessage.person),
      channelName: firstMessage.channel.name,
      text: firstMessage.text
    };
  }
  if (longestMessage !== void 0) {
    moments.longestMessage = {
      person: longestMessage.person.id,
      words: longestMessage.words,
      channelName: longestMessage.channel.name,
      date: dates[longestMessage.day]
    };
  }
  if (hourGrid[recordHourIndex] > 0) {
    moments.recordHour = {
      date: dates[Math.floor(recordHourIndex / 24)],
      hour: recordHourIndex % 24,
      messages: hourGrid[recordHourIndex]
    };
  }
  const emojiOrder = emojiNames.map((_, id) => id);
  const emojiUses = (id) => emojiReactions[id] + emojiTyped[id];
  let emojiTotal = 0;
  let emojiDistinct = 0;
  for (const id of emojiOrder) {
    if (emojiUses(id) === 0) continue;
    emojiTotal += emojiUses(id);
    emojiDistinct++;
  }
  const rankedEmoji = (score, limit, only = () => true) => emojiOrder.filter((id) => score(id) > 0 && only(id)).sort((a, b) => score(b) - score(a) || (emojiNames[a] < emojiNames[b] ? -1 : 1)).slice(0, limit);
  let huddles = null;
  if (huddleCount > 0) {
    huddles = {
      count: huddleCount,
      totalMinutes: Math.round(huddleSeconds / 60),
      longestMinutes: Math.round(longestHuddle / 60),
      topPeople: authors.filter((p2) => p2.huddleSeconds > 0).sort((a, b) => b.huddleSeconds - a.huddleSeconds).slice(0, 5).map((p2) => ({ id: p2.id, minutes: Math.round(p2.huddleSeconds / 60) }))
    };
  }
  const awards = computeAwards(personList, { totalMessages, arrival });
  const peopleById = new Map(personList.map((p2) => [p2.id, p2]));
  for (const award of awards) peopleById.get(award.winner.person)?.awards.push(award.id);
  const channelAwards = computeChannelAwards(channelStats, { createdDay, endDay });
  const personality = choosePersonality({
    messages: totalMessages,
    words: totalWords,
    replies: totalReplies,
    reactions: totalReactions,
    nightMessages: nightTotal,
    earlyMessages: earlyTotal,
    typedEmoji,
    emojiDistinct,
    emojiTotal,
    busiestHour: argMax(byHour),
    busiestWeekday: argMax(byWeekday)
  });
  let otherFolders = 0;
  for (const files of folders.values()) if (!claimedFolders.has(files)) otherFolders++;
  if (!includesPrivate) {
    warnings.unshift(
      otherFolders > 0 ? "Only public channels were counted. The private channels and direct messages in this export were left out." : "This export contains public channels only. Private channels and direct messages are not part of it."
    );
  } else {
    warnings.unshift("Private channels were included because you asked for them. Direct messages are never read.");
  }
  if (Number.isFinite(firstTs)) {
    const firstDay = teamDayOf(firstTs);
    if (firstDay > 0) {
      warnings.push(`This export begins on ${longDate(firstDay + startDay)}, so nothing before that date is counted.`);
    }
  }
  if (skippedFiles > 0) {
    warnings.push(
      skippedFiles === 1 ? "1 day file could not be read and was skipped." : `${formatInt(skippedFiles)} day files could not be read and were skipped.`
    );
  }
  const teamId = mostCommon(teamIds);
  const workspaceId = (await sha256Hex(teamId ?? [...users.size > 0 ? users.keys() : people.keys()].sort().join(","))).slice(0, 32);
  const workspaceName = [str(options.workspaceName), workspaceNameFromLabel(source.label ?? ""), root === "" ? "" : workspaceNameFromLabel(root)].find(
    (name) => name !== "" && name !== UNKNOWN_WORKSPACE
  ) ?? UNKNOWN_WORKSPACE;
  const result = {
    schema: SCHEMA_VERSION,
    platform: "slack",
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    workspace: {
      id: workspaceId,
      name: workspaceName
    },
    period,
    totals: {
      messages: totalMessages,
      words: totalWords,
      characters: totalCharacters,
      reactions: totalReactions,
      threads: totalThreads,
      replies: totalReplies,
      files: totalFiles,
      links: totalLinks,
      mentions: totalMentions,
      activePeople: personList.length,
      activeChannels: channelStats.length,
      newChannels,
      botMessages: totalBotMessages,
      activeDays,
      messagesPerActiveDay: round1(totalMessages / Math.max(1, activeDays)),
      novels: round1(totalWords / 9e4)
    },
    people: personList,
    channels: channelStats,
    rhythm: {
      byMonth,
      byWeekday,
      byHour,
      heatmap,
      byDay: dates.map((date, day) => ({ date, messages: byDayCounts[day] })),
      busiestMonth: argMax(byMonth),
      busiestWeekday: argMax(byWeekday),
      busiestHour: argMax(byHour),
      quietestWeekday
    },
    moments,
    emoji: {
      top: rankedEmoji(emojiUses, 10).map((id) => ({ emoji: emojiRef(emojiNames[id]), count: emojiUses(id) })),
      topReactions: rankedEmoji((id) => emojiReactions[id], 5).map((id) => ({
        emoji: emojiRef(emojiNames[id]),
        count: emojiReactions[id]
      })),
      topCustom: rankedEmoji(emojiUses, 5, (id) => !emojiStandard[id]).map((id) => ({ name: emojiNames[id], count: emojiUses(id) })),
      distinct: emojiDistinct,
      total: emojiTotal
    },
    words: {
      top: vocabulary.top(30),
      questions: totalQuestions,
      exclamations: totalExclamations,
      laughStyles: LAUGH_STYLES.map((style, index) => ({ style, count: laughCounts[index] })).filter((entry) => entry.count > 0).sort((a, b) => b.count - a.count).slice(0, 5),
      thanks: totalThanks
    },
    huddles,
    awards,
    channelAwards,
    personality,
    coverage: {
      messagesScanned,
      filesScanned,
      skippedFiles,
      warnings,
      includesPrivate
    }
  };
  if (Number.isFinite(firstTs)) result.coverage.firstTs = Math.floor(firstTs);
  if (Number.isFinite(lastTs)) result.coverage.lastTs = Math.floor(lastTs);
  progress.phase = "done";
  report();
  return scrub(result);
}

// src/engine/index.ts
function analyzeSlackExport(source, options) {
  return analyze(source, options);
}

// src/engine/node.ts
import { readdir, readFile } from "node:fs/promises";
import { basename, join, relative, resolve, sep } from "node:path";
function dirSource(path) {
  const base = resolve(path);
  let listing;
  let wrapper = "";
  const load = async () => {
    const found = [];
    for (const entry of await readdir(base, { recursive: true, withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
      found.push(relative(base, join(entry.parentPath, entry.name)).split(sep).join("/"));
    }
    const root = findExportRoot(found);
    wrapper = root;
    return { root, paths: found.filter((file) => file.startsWith(root)).map((file) => file.slice(root.length)) };
  };
  return {
    // The folder's own name, or the inner folder's when only that one is named like an export.
    get label() {
      return preferLabel(basename(base), wrapper);
    },
    list: async () => (await (listing ??= load())).paths,
    readText: async (file) => {
      const { root } = await (listing ??= load());
      const parts = (root + file).split("/");
      if (parts.includes("..")) throw new Error(`Not a file of this export: ${file}`);
      const content = await readFile(join(base, ...parts), "utf8");
      return content.charCodeAt(0) === 65279 ? content.slice(1) : content;
    }
  };
}

// src/engine/report.ts
function pad(value, width) {
  return value.length >= width ? value : value + " ".repeat(width - value.length);
}
function padLeft(value, width) {
  return value.length >= width ? value : " ".repeat(width - value.length) + value;
}
function clip(value, width) {
  return value.length <= width ? value : `${value.slice(0, width - 1)}\u2026`;
}
function emojiLabel(emoji) {
  return emoji.char ?? `:${emoji.name}:`;
}
function renderReport(data, showText = true) {
  const out = [];
  const line = (text = "") => {
    out.push(text);
  };
  const heading = (title) => {
    line();
    line(title);
    line("-".repeat(title.length));
  };
  const names = new Map(data.people.map((p2) => [p2.id, p2.name]));
  const who = (id) => id === null ? "someone" : names.get(id) ?? id;
  const entry = (e) => `${who(e.person)} (${e.display})`;
  const { totals, period, rhythm } = data;
  line(`Team Wrapped: ${data.workspace.name}, ${period.label}`);
  line(`Period     ${period.start} to ${period.end} (${formatInt(period.days)} days, times in ${period.timezone})`);
  line(`Workspace  ${data.workspace.id}`);
  heading("Totals");
  line(`${formatInt(totals.messages)} messages from ${formatInt(totals.activePeople)} people in ${formatInt(totals.activeChannels)} channels`);
  line(`${formatInt(totals.words)} words (${totals.novels} novels), ${formatInt(totals.characters)} characters`);
  line(`${formatInt(totals.reactions)} reactions, ${formatInt(totals.threads)} threads with ${formatInt(totals.replies)} replies`);
  line(`${formatInt(totals.files)} files, ${formatInt(totals.links)} links, ${formatInt(totals.mentions)} mentions`);
  line(`${formatInt(totals.activeDays)} active days, ${totals.messagesPerActiveDay} messages per active day`);
  line(`${formatInt(totals.newChannels)} channels created, ${formatInt(totals.botMessages)} bot messages (not counted above)`);
  heading("Rhythm");
  line(`Busiest month ${monthName(rhythm.busiestMonth)}, busiest day ${weekdayName(rhythm.busiestWeekday)}, quietest ${weekdayName(rhythm.quietestWeekday)}, peak hour ${hourLabel(rhythm.busiestHour)}`);
  line(`By month   ${rhythm.byMonth.map((n) => formatInt(n)).join("  ")}`);
  line(`By weekday ${rhythm.byWeekday.map((n) => formatInt(n)).join("  ")}`);
  heading("Top 10 people (messages, words, words per message, reactions received and given)");
  line(`${pad("", 4)}${pad("name", 24)}${padLeft("messages", 9)}${padLeft("words", 10)}${padLeft("avg", 6)}${padLeft("got", 8)}${padLeft("gave", 8)}  awards`);
  for (const p2 of data.people.slice(0, 10)) {
    line(
      `${padLeft(String(p2.rank), 2)}. ${pad(clip(p2.name, 23), 24)}${padLeft(formatInt(p2.stats.messages), 9)}${padLeft(formatInt(p2.stats.words), 10)}${padLeft(String(p2.stats.avgWords), 6)}${padLeft(formatInt(p2.stats.reactionsReceived), 8)}${padLeft(formatInt(p2.stats.reactionsGiven), 8)}  ${p2.awards.join(", ")}`
    );
    const extras = [];
    if (p2.signatureWord) extras.push(`signature word "${p2.signatureWord.word}" (${p2.signatureWord.count}\xD7, lift ${p2.signatureWord.lift})`);
    if (p2.topEmoji.length > 0) extras.push(`emoji ${p2.topEmoji.map((e) => emojiLabel(e.emoji)).join(" ")}`);
    if (p2.peakHour !== void 0) extras.push(`peak ${hourLabel(p2.peakHour)}`);
    if (p2.joinedInPeriod) extras.push("joined this period");
    if (extras.length > 0) line(`    ${extras.join(" \xB7 ")}`);
  }
  heading(`Awards (${data.awards.length}; * = in the default ceremony)`);
  const describe = (award) => {
    line(`${award.featured ? "*" : " "} ${award.emoji} ${award.title} [${award.tone}, ${award.category}]`);
    line(`    ${who(award.winner.person)} ${award.tagline}: ${award.winner.display}`);
    if (award.runnersUp.length > 0) line(`    then ${award.runnersUp.map(entry).join("; ")}`);
  };
  data.awards.forEach(describe);
  if (data.awards.length === 0) line("(none: nobody met the thresholds)");
  heading("Channel awards");
  for (const award of data.channelAwards) {
    line(`${award.emoji} ${award.title}: #${award.channel.name}, ${award.tagline} (${award.display})`);
  }
  if (data.channelAwards.length === 0) line("(none)");
  heading("Top channels");
  for (const c of data.channels.slice(0, 10)) {
    line(
      `#${pad(clip(c.name, 27), 28)}${padLeft(formatInt(c.messages), 9)} messages  ${padLeft(String(c.people), 4)} people  threads ${Math.round(c.threadShare * 100)}%  night ${Math.round(c.nightShare * 100)}%  ${c.reactionsPerMessage} reactions/msg${c.createdInPeriod ? "  (new)" : ""}`
    );
  }
  heading("Moments");
  const busiest = data.moments.busiestDay;
  line(`Busiest day   ${busiest.date}: ${formatInt(busiest.messages)} messages${busiest.topChannel ? ` (mostly #${busiest.topChannel.name})` : ""}`);
  if (busiest.topWords.length > 0) line(`              words of the day: ${busiest.topWords.join(", ")}`);
  if (busiest.topPeople.length > 0) line(`              loudest: ${busiest.topPeople.map(who).join(", ")}`);
  const record2 = data.moments.recordHour;
  if (record2) line(`Record hour   ${record2.date} at ${hourLabel(record2.hour)}: ${formatInt(record2.messages)} messages`);
  const thread = data.moments.biggestThread;
  if (thread) {
    line(`Biggest thread ${formatInt(thread.replies)} replies from ${thread.participants} people in #${thread.channelName} on ${thread.date}, started by ${thread.starterName}`);
    if (showText && thread.text !== "") line(`              "${clip(thread.text, 110)}"`);
  }
  const first = data.moments.firstMessage;
  if (first) {
    line(`First message ${first.date} by ${first.personName} in #${first.channelName}`);
    if (showText && first.text !== "") line(`              "${clip(first.text, 110)}"`);
  }
  const longest = data.moments.longestMessage;
  if (longest) line(`Longest message ${formatInt(longest.words)} words by ${who(longest.person)} in #${longest.channelName} on ${longest.date}`);
  if (data.moments.topMessages.length > 0) line("Most-reacted messages");
  for (const message of data.moments.topMessages) {
    line(`  ${formatInt(message.reactions)} reactions ${message.topReactions.map((r) => `${emojiLabel(r.emoji)}\xD7${r.count}`).join(" ")}: ${message.personName} in #${message.channelName} on ${message.date}`);
    if (showText && message.text !== "") line(`      "${clip(message.text, 110)}"`);
  }
  heading("Emoji and words");
  line(`${formatInt(data.emoji.total)} emoji used, ${formatInt(data.emoji.distinct)} different`);
  line(`Top emoji     ${data.emoji.top.map((e) => `${emojiLabel(e.emoji)}\xD7${formatInt(e.count)}`).join("  ")}`);
  line(`Top reactions ${data.emoji.topReactions.map((e) => `${emojiLabel(e.emoji)}\xD7${formatInt(e.count)}`).join("  ")}`);
  if (data.emoji.topCustom.length > 0) line(`Top custom    ${data.emoji.topCustom.map((e) => `:${e.name}:\xD7${formatInt(e.count)}`).join("  ")}`);
  line(`Top words     ${data.words.top.slice(0, 20).map((w) => `${w.word} ${formatInt(w.count)}`).join(", ")}`);
  line(`${formatInt(data.words.questions)} questions, ${formatInt(data.words.exclamations)} exclamations, ${formatInt(data.words.thanks)} thank-yous`);
  if (data.words.laughStyles.length > 0) line(`Laughs        ${data.words.laughStyles.map((l) => `${l.style} ${formatInt(l.count)}`).join(", ")}`);
  if (data.huddles) {
    heading("Huddles");
    line(`${formatInt(data.huddles.count)} huddles, ${formatInt(data.huddles.totalMinutes)} minutes in total, longest ${formatInt(data.huddles.longestMinutes)} minutes`);
    if (data.huddles.topPeople.length > 0) line(`Most time: ${data.huddles.topPeople.map((p2) => `${who(p2.id)} ${formatInt(p2.minutes)} min`).join(", ")}`);
  }
  heading(`Personality: ${data.personality.title}`);
  line(data.personality.description);
  line(data.personality.traits.map((t) => `${t.label}: ${t.value}`).join(" \xB7 "));
  heading("Coverage");
  line(`${formatInt(data.coverage.filesScanned)} files and ${formatInt(data.coverage.messagesScanned)} message objects read, ${formatInt(data.coverage.skippedFiles)} files skipped`);
  if (data.coverage.firstTs !== void 0 && data.coverage.lastTs !== void 0) {
    line(`Export spans ${new Date(data.coverage.firstTs * 1e3).toISOString().slice(0, 10)} to ${new Date(data.coverage.lastTs * 1e3).toISOString().slice(0, 10)} (UTC)`);
  }
  for (const warning of data.coverage.warnings) line(`! ${warning}`);
  return out.join("\n");
}

// src/engine/cli.ts
function parseArguments(argv) {
  const parsed = { includePrivate: false, showText: true, help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const value = () => {
      const next = argv[++i];
      if (next === void 0) throw new Error(`${arg} needs a value`);
      return next;
    };
    if (arg === "--json") parsed.json = value();
    else if (arg === "--from") parsed.from = value();
    else if (arg === "--to") parsed.to = value();
    else if (arg === "--name") parsed.name = value();
    else if (arg === "--private") parsed.includePrivate = true;
    else if (arg === "--no-text") parsed.showText = false;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg.startsWith("--")) throw new Error(`Unknown option ${arg}`);
    else if (parsed.input === void 0) parsed.input = arg;
    else throw new Error(`Unexpected argument ${arg}`);
  }
  return parsed;
}
var USAGE = `Usage: slack-wrapped <export.zip | folder> [--json out.json]
       [--from 2026-01-01 --to 2026-12-31] [--private] [--name "Acme Inc"] [--no-text]
(from a source checkout: npx tsx src/engine/cli.ts <export.zip | folder> ...)`;
async function main() {
  let args;
  try {
    args = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(`${error.message}
${USAGE}`);
    return 2;
  }
  if (args.help || args.input === void 0) {
    console.log(USAGE);
    return args.help ? 0 : 2;
  }
  let isDirectory;
  try {
    isDirectory = statSync(args.input).isDirectory();
  } catch {
    console.error(`Cannot find ${args.input}`);
    return 2;
  }
  const source = isDirectory ? dirSource(args.input) : zipSource(await openAsBlob(args.input), basename2(args.input));
  const options = { includePrivateChannels: args.includePrivate };
  if (args.name !== void 0) options.workspaceName = args.name;
  if (args.from !== void 0 || args.to !== void 0) {
    if (args.from === void 0 || args.to === void 0) {
      console.error("Give both --from and --to.");
      return 2;
    }
    options.period = { start: args.from, end: args.to };
  }
  const showProgress = process.stderr.isTTY === true;
  if (showProgress) {
    options.onProgress = (p2) => {
      process.stderr.write(`\r${p2.phase} ${formatInt(p2.filesDone)}/${formatInt(p2.filesTotal)} files, ${formatInt(p2.messages)} messages   `);
    };
  }
  const started = performance.now();
  let data;
  try {
    data = await analyzeSlackExport(source, options);
  } catch (error) {
    if (showProgress) process.stderr.write("\n");
    if (error instanceof SlackExportError) {
      console.error(error.message);
      return 1;
    }
    throw error;
  }
  const seconds = (performance.now() - started) / 1e3;
  if (showProgress) process.stderr.write("\r" + " ".repeat(70) + "\r");
  console.log(renderReport(data, args.showText));
  console.log();
  console.log(`Analysed in ${seconds.toFixed(1)} s, peak memory ${Math.round(process.resourceUsage().maxRSS / 1024)} MB.`);
  if (args.json !== void 0) {
    writeFileSync(args.json, JSON.stringify(data, null, 2));
    console.log(`Wrote ${args.json}`);
  }
  return 0;
}
main().then(
  (code) => {
    process.exitCode = code;
  },
  (error) => {
    console.error(error);
    process.exitCode = 1;
  }
);
