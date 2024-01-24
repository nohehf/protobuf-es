// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Author: kenton@google.com (Kenton Varda)

// @generated by protoc-gen-es v1.7.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_no_generic_services.proto (package protobuf_unittest.no_generic_services_test, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, Extension, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.no_generic_services_test.TestEnum
 */
export declare enum TestEnum {
  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}

/**
 * @generated from message protobuf_unittest.no_generic_services_test.TestMessage
 */
export declare class TestMessage extends Message<TestMessage> {
  /**
   * @generated from field: optional int32 a = 1;
   */
  a?: number;

  constructor(data?: PartialMessage<TestMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.no_generic_services_test.TestMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage;

  static equals(a: TestMessage | PlainMessage<TestMessage> | undefined, b: TestMessage | PlainMessage<TestMessage> | undefined): boolean;
}

/**
 * @generated from extension: optional int32 test_extension = 1000;
 */
export declare const test_extension: Extension<TestMessage, number>;

