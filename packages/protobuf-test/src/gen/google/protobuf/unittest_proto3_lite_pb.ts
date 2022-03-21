/* eslint-disable */
// @generated by protoc-gen-es v0.0.2-alpha.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_proto3_lite.proto (package proto3_lite_unittest, syntax proto3)
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, protoInt64} from "@bufbuild/protobuf";
import {ImportMessage} from "./unittest_import_pb.js";
import {PublicImportMessage} from "./unittest_import_public_pb.js";

/**
 * @generated from enum proto3_lite_unittest.ForeignEnum
 */
export enum ForeignEnum {

    /**
     * @generated from enum value: FOREIGN_ZERO = 0;
     */
    FOREIGN_ZERO = 0,

    /**
     * @generated from enum value: FOREIGN_FOO = 4;
     */
    FOREIGN_FOO = 4,

    /**
     * @generated from enum value: FOREIGN_BAR = 5;
     */
    FOREIGN_BAR = 5,

    /**
     * @generated from enum value: FOREIGN_BAZ = 6;
     */
    FOREIGN_BAZ = 6,

}

// Retrieve enum metadata with: proto3.getEnumType(ForeignEnum)
proto3.util.setEnumType(ForeignEnum, "proto3_lite_unittest.ForeignEnum", [
    {no: 0, name: "FOREIGN_ZERO"},
    {no: 4, name: "FOREIGN_FOO"},
    {no: 5, name: "FOREIGN_BAR"},
    {no: 6, name: "FOREIGN_BAZ"},
]);

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * @generated from message proto3_lite_unittest.TestAllTypes
 */
export class TestAllTypes extends Message<TestAllTypes> {

    /**
     * Singular
     *
     * @generated from field: int32 optional_int32 = 1;
     */
    optionalInt32 = 0;

    /**
     * @generated from field: int64 optional_int64 = 2;
     */
    optionalInt64 = protoInt64.zero;

    /**
     * @generated from field: uint32 optional_uint32 = 3;
     */
    optionalUint32 = 0;

    /**
     * @generated from field: uint64 optional_uint64 = 4;
     */
    optionalUint64 = protoInt64.zero;

    /**
     * @generated from field: sint32 optional_sint32 = 5;
     */
    optionalSint32 = 0;

    /**
     * @generated from field: sint64 optional_sint64 = 6;
     */
    optionalSint64 = protoInt64.zero;

    /**
     * @generated from field: fixed32 optional_fixed32 = 7;
     */
    optionalFixed32 = 0;

    /**
     * @generated from field: fixed64 optional_fixed64 = 8;
     */
    optionalFixed64 = protoInt64.zero;

    /**
     * @generated from field: sfixed32 optional_sfixed32 = 9;
     */
    optionalSfixed32 = 0;

    /**
     * @generated from field: sfixed64 optional_sfixed64 = 10;
     */
    optionalSfixed64 = protoInt64.zero;

    /**
     * @generated from field: float optional_float = 11;
     */
    optionalFloat = 0;

    /**
     * @generated from field: double optional_double = 12;
     */
    optionalDouble = 0;

    /**
     * @generated from field: bool optional_bool = 13;
     */
    optionalBool = false;

    /**
     * @generated from field: string optional_string = 14;
     */
    optionalString = "";

    /**
     * @generated from field: bytes optional_bytes = 15;
     */
    optionalBytes = new Uint8Array(0);

    /**
     * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage optional_nested_message = 18;
     */
    optionalNestedMessage?: TestAllTypes_NestedMessage;

    /**
     * @generated from field: proto3_lite_unittest.ForeignMessage optional_foreign_message = 19;
     */
    optionalForeignMessage?: ForeignMessage;

    /**
     * @generated from field: protobuf_unittest_import.ImportMessage optional_import_message = 20;
     */
    optionalImportMessage?: ImportMessage;

    /**
     * @generated from field: proto3_lite_unittest.TestAllTypes.NestedEnum optional_nested_enum = 21;
     */
    optionalNestedEnum = TestAllTypes_NestedEnum.ZERO;

    /**
     * @generated from field: proto3_lite_unittest.ForeignEnum optional_foreign_enum = 22;
     */
    optionalForeignEnum = ForeignEnum.FOREIGN_ZERO;

    /**
     * @generated from field: string optional_string_piece = 24;
     */
    optionalStringPiece = "";

    /**
     * @generated from field: string optional_cord = 25;
     */
    optionalCord = "";

    /**
     * Defined in unittest_import_public.proto
     *
     * @generated from field: protobuf_unittest_import.PublicImportMessage optional_public_import_message = 26;
     */
    optionalPublicImportMessage?: PublicImportMessage;

    /**
     * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage optional_lazy_message = 27;
     */
    optionalLazyMessage?: TestAllTypes_NestedMessage;

    /**
     * Repeated
     *
     * @generated from field: repeated int32 repeated_int32 = 31;
     */
    repeatedInt32: number[] = [];

    /**
     * @generated from field: repeated int64 repeated_int64 = 32;
     */
    repeatedInt64: bigint[] = [];

    /**
     * @generated from field: repeated uint32 repeated_uint32 = 33;
     */
    repeatedUint32: number[] = [];

    /**
     * @generated from field: repeated uint64 repeated_uint64 = 34;
     */
    repeatedUint64: bigint[] = [];

    /**
     * @generated from field: repeated sint32 repeated_sint32 = 35;
     */
    repeatedSint32: number[] = [];

    /**
     * @generated from field: repeated sint64 repeated_sint64 = 36;
     */
    repeatedSint64: bigint[] = [];

    /**
     * @generated from field: repeated fixed32 repeated_fixed32 = 37;
     */
    repeatedFixed32: number[] = [];

    /**
     * @generated from field: repeated fixed64 repeated_fixed64 = 38;
     */
    repeatedFixed64: bigint[] = [];

    /**
     * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
     */
    repeatedSfixed32: number[] = [];

    /**
     * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
     */
    repeatedSfixed64: bigint[] = [];

    /**
     * @generated from field: repeated float repeated_float = 41;
     */
    repeatedFloat: number[] = [];

    /**
     * @generated from field: repeated double repeated_double = 42;
     */
    repeatedDouble: number[] = [];

    /**
     * @generated from field: repeated bool repeated_bool = 43;
     */
    repeatedBool: boolean[] = [];

    /**
     * @generated from field: repeated string repeated_string = 44;
     */
    repeatedString: string[] = [];

    /**
     * @generated from field: repeated bytes repeated_bytes = 45;
     */
    repeatedBytes: Uint8Array[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedMessage repeated_nested_message = 48;
     */
    repeatedNestedMessage: TestAllTypes_NestedMessage[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.ForeignMessage repeated_foreign_message = 49;
     */
    repeatedForeignMessage: ForeignMessage[] = [];

    /**
     * @generated from field: repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50;
     */
    repeatedImportMessage: ImportMessage[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 51;
     */
    repeatedNestedEnum: TestAllTypes_NestedEnum[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.ForeignEnum repeated_foreign_enum = 52;
     */
    repeatedForeignEnum: ForeignEnum[] = [];

    /**
     * @generated from field: repeated string repeated_string_piece = 54;
     */
    repeatedStringPiece: string[] = [];

    /**
     * @generated from field: repeated string repeated_cord = 55;
     */
    repeatedCord: string[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedMessage repeated_lazy_message = 57;
     */
    repeatedLazyMessage: TestAllTypes_NestedMessage[] = [];

    /**
     * @generated from oneof proto3_lite_unittest.TestAllTypes.oneof_field
     */
    oneofField: {
        /**
         * @generated from field: uint32 oneof_uint32 = 111;
         */
        value: number;
        case: "oneofUint32";
    } | {
        /**
         * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage oneof_nested_message = 112;
         */
        value: TestAllTypes_NestedMessage;
        case: "oneofNestedMessage";
    } | {
        /**
         * @generated from field: string oneof_string = 113;
         */
        value: string;
        case: "oneofString";
    } | {
        /**
         * @generated from field: bytes oneof_bytes = 114;
         */
        value: Uint8Array;
        case: "oneofBytes";
    } | { case: undefined; value?: undefined } = { case: undefined };

    constructor(data?: PartialMessage<TestAllTypes>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.TestAllTypes";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */},
        {no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */},
        {no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */},
        {no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */},
        {no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */},
        {no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */},
        {no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */},
        {no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */},
        {no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */},
        {no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */},
        {no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */},
        {no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */},
        {no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */},
        {no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */},
        {no: 18, name: "optional_nested_message", kind: "message", T: TestAllTypes_NestedMessage},
        {no: 19, name: "optional_foreign_message", kind: "message", T: ForeignMessage},
        {no: 20, name: "optional_import_message", kind: "message", T: ImportMessage},
        {no: 21, name: "optional_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypes_NestedEnum)},
        {no: 22, name: "optional_foreign_enum", kind: "enum", T: proto3.getEnumType(ForeignEnum)},
        {no: 24, name: "optional_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 25, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 26, name: "optional_public_import_message", kind: "message", T: PublicImportMessage},
        {no: 27, name: "optional_lazy_message", kind: "message", T: TestAllTypes_NestedMessage},
        {no: 31, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true},
        {no: 32, name: "repeated_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true},
        {no: 33, name: "repeated_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true},
        {no: 34, name: "repeated_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true},
        {no: 35, name: "repeated_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true},
        {no: 36, name: "repeated_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true},
        {no: 37, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true},
        {no: 38, name: "repeated_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true},
        {no: 39, name: "repeated_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true},
        {no: 40, name: "repeated_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true},
        {no: 41, name: "repeated_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true},
        {no: 42, name: "repeated_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true},
        {no: 43, name: "repeated_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true},
        {no: 44, name: "repeated_string", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 45, name: "repeated_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true},
        {no: 48, name: "repeated_nested_message", kind: "message", T: TestAllTypes_NestedMessage, repeated: true},
        {no: 49, name: "repeated_foreign_message", kind: "message", T: ForeignMessage, repeated: true},
        {no: 50, name: "repeated_import_message", kind: "message", T: ImportMessage, repeated: true},
        {no: 51, name: "repeated_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypes_NestedEnum), repeated: true},
        {no: 52, name: "repeated_foreign_enum", kind: "enum", T: proto3.getEnumType(ForeignEnum), repeated: true},
        {no: 54, name: "repeated_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 55, name: "repeated_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 57, name: "repeated_lazy_message", kind: "message", T: TestAllTypes_NestedMessage, repeated: true},
        {no: 111, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field"},
        {no: 112, name: "oneof_nested_message", kind: "message", T: TestAllTypes_NestedMessage, oneof: "oneof_field"},
        {no: 113, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field"},
        {no: 114, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field"},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypes {
        return new TestAllTypes().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypes {
        return new TestAllTypes().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypes {
        return new TestAllTypes().fromJsonString(jsonString, options);
    }

    static equals(a: TestAllTypes | PlainMessage<TestAllTypes> | undefined, b: TestAllTypes | PlainMessage<TestAllTypes> | undefined): boolean {
        return proto3.util.equals(TestAllTypes, a, b);
    }

}

/**
 * @generated from enum proto3_lite_unittest.TestAllTypes.NestedEnum
 */
export enum TestAllTypes_NestedEnum {

    /**
     * @generated from enum value: ZERO = 0;
     */
    ZERO = 0,

    /**
     * @generated from enum value: FOO = 1;
     */
    FOO = 1,

    /**
     * @generated from enum value: BAR = 2;
     */
    BAR = 2,

    /**
     * @generated from enum value: BAZ = 3;
     */
    BAZ = 3,

    /**
     * Intentionally negative.
     *
     * @generated from enum value: NEG = -1;
     */
    NEG = -1,

}

// Retrieve enum metadata with: proto3.getEnumType(TestAllTypes_NestedEnum)
proto3.util.setEnumType(TestAllTypes_NestedEnum, "proto3_lite_unittest.TestAllTypes.NestedEnum", [
    {no: 0, name: "ZERO"},
    {no: 1, name: "FOO"},
    {no: 2, name: "BAR"},
    {no: 3, name: "BAZ"},
    {no: -1, name: "NEG"},
]);

/**
 * @generated from message proto3_lite_unittest.TestAllTypes.NestedMessage
 */
export class TestAllTypes_NestedMessage extends Message<TestAllTypes_NestedMessage> {

    /**
     * The field name "b" fails to compile in proto1 because it conflicts with
     * a local variable named "b" in one of the generated methods.  Doh.
     * This file needs to compile in proto1 to test backwards-compatibility.
     *
     * @generated from field: int32 bb = 1;
     */
    bb = 0;

    constructor(data?: PartialMessage<TestAllTypes_NestedMessage>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.TestAllTypes.NestedMessage";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "bb", kind: "scalar", T: 5 /* ScalarType.INT32 */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypes_NestedMessage {
        return new TestAllTypes_NestedMessage().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypes_NestedMessage {
        return new TestAllTypes_NestedMessage().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypes_NestedMessage {
        return new TestAllTypes_NestedMessage().fromJsonString(jsonString, options);
    }

    static equals(a: TestAllTypes_NestedMessage | PlainMessage<TestAllTypes_NestedMessage> | undefined, b: TestAllTypes_NestedMessage | PlainMessage<TestAllTypes_NestedMessage> | undefined): boolean {
        return proto3.util.equals(TestAllTypes_NestedMessage, a, b);
    }

}



/**
 * @generated from message proto3_lite_unittest.TestPackedTypes
 */
export class TestPackedTypes extends Message<TestPackedTypes> {

    /**
     * @generated from field: repeated int32 packed_int32 = 90 [packed = true];
     */
    packedInt32: number[] = [];

    /**
     * @generated from field: repeated int64 packed_int64 = 91 [packed = true];
     */
    packedInt64: bigint[] = [];

    /**
     * @generated from field: repeated uint32 packed_uint32 = 92 [packed = true];
     */
    packedUint32: number[] = [];

    /**
     * @generated from field: repeated uint64 packed_uint64 = 93 [packed = true];
     */
    packedUint64: bigint[] = [];

    /**
     * @generated from field: repeated sint32 packed_sint32 = 94 [packed = true];
     */
    packedSint32: number[] = [];

    /**
     * @generated from field: repeated sint64 packed_sint64 = 95 [packed = true];
     */
    packedSint64: bigint[] = [];

    /**
     * @generated from field: repeated fixed32 packed_fixed32 = 96 [packed = true];
     */
    packedFixed32: number[] = [];

    /**
     * @generated from field: repeated fixed64 packed_fixed64 = 97 [packed = true];
     */
    packedFixed64: bigint[] = [];

    /**
     * @generated from field: repeated sfixed32 packed_sfixed32 = 98 [packed = true];
     */
    packedSfixed32: number[] = [];

    /**
     * @generated from field: repeated sfixed64 packed_sfixed64 = 99 [packed = true];
     */
    packedSfixed64: bigint[] = [];

    /**
     * @generated from field: repeated float packed_float = 100 [packed = true];
     */
    packedFloat: number[] = [];

    /**
     * @generated from field: repeated double packed_double = 101 [packed = true];
     */
    packedDouble: number[] = [];

    /**
     * @generated from field: repeated bool packed_bool = 102 [packed = true];
     */
    packedBool: boolean[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.ForeignEnum packed_enum = 103 [packed = true];
     */
    packedEnum: ForeignEnum[] = [];

    constructor(data?: PartialMessage<TestPackedTypes>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.TestPackedTypes";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 90, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true},
        {no: 91, name: "packed_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true},
        {no: 92, name: "packed_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true},
        {no: 93, name: "packed_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true},
        {no: 94, name: "packed_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true},
        {no: 95, name: "packed_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true},
        {no: 96, name: "packed_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true},
        {no: 97, name: "packed_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true},
        {no: 98, name: "packed_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true},
        {no: 99, name: "packed_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true},
        {no: 100, name: "packed_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true},
        {no: 101, name: "packed_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true},
        {no: 102, name: "packed_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true},
        {no: 103, name: "packed_enum", kind: "enum", T: proto3.getEnumType(ForeignEnum), repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestPackedTypes {
        return new TestPackedTypes().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestPackedTypes {
        return new TestPackedTypes().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestPackedTypes {
        return new TestPackedTypes().fromJsonString(jsonString, options);
    }

    static equals(a: TestPackedTypes | PlainMessage<TestPackedTypes> | undefined, b: TestPackedTypes | PlainMessage<TestPackedTypes> | undefined): boolean {
        return proto3.util.equals(TestPackedTypes, a, b);
    }

}


/**
 * Explicitly set packed to false
 *
 * @generated from message proto3_lite_unittest.TestUnpackedTypes
 */
export class TestUnpackedTypes extends Message<TestUnpackedTypes> {

    /**
     * @generated from field: repeated int32 repeated_int32 = 1 [packed = false];
     */
    repeatedInt32: number[] = [];

    /**
     * @generated from field: repeated int64 repeated_int64 = 2 [packed = false];
     */
    repeatedInt64: bigint[] = [];

    /**
     * @generated from field: repeated uint32 repeated_uint32 = 3 [packed = false];
     */
    repeatedUint32: number[] = [];

    /**
     * @generated from field: repeated uint64 repeated_uint64 = 4 [packed = false];
     */
    repeatedUint64: bigint[] = [];

    /**
     * @generated from field: repeated sint32 repeated_sint32 = 5 [packed = false];
     */
    repeatedSint32: number[] = [];

    /**
     * @generated from field: repeated sint64 repeated_sint64 = 6 [packed = false];
     */
    repeatedSint64: bigint[] = [];

    /**
     * @generated from field: repeated fixed32 repeated_fixed32 = 7 [packed = false];
     */
    repeatedFixed32: number[] = [];

    /**
     * @generated from field: repeated fixed64 repeated_fixed64 = 8 [packed = false];
     */
    repeatedFixed64: bigint[] = [];

    /**
     * @generated from field: repeated sfixed32 repeated_sfixed32 = 9 [packed = false];
     */
    repeatedSfixed32: number[] = [];

    /**
     * @generated from field: repeated sfixed64 repeated_sfixed64 = 10 [packed = false];
     */
    repeatedSfixed64: bigint[] = [];

    /**
     * @generated from field: repeated float repeated_float = 11 [packed = false];
     */
    repeatedFloat: number[] = [];

    /**
     * @generated from field: repeated double repeated_double = 12 [packed = false];
     */
    repeatedDouble: number[] = [];

    /**
     * @generated from field: repeated bool repeated_bool = 13 [packed = false];
     */
    repeatedBool: boolean[] = [];

    /**
     * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 14 [packed = false];
     */
    repeatedNestedEnum: TestAllTypes_NestedEnum[] = [];

    constructor(data?: PartialMessage<TestUnpackedTypes>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.TestUnpackedTypes";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: false},
        {no: 2, name: "repeated_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true, packed: false},
        {no: 3, name: "repeated_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: false},
        {no: 4, name: "repeated_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: false},
        {no: 5, name: "repeated_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true, packed: false},
        {no: 6, name: "repeated_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true, packed: false},
        {no: 7, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: false},
        {no: 8, name: "repeated_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true, packed: false},
        {no: 9, name: "repeated_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true, packed: false},
        {no: 10, name: "repeated_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true, packed: false},
        {no: 11, name: "repeated_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true, packed: false},
        {no: 12, name: "repeated_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: false},
        {no: 13, name: "repeated_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true, packed: false},
        {no: 14, name: "repeated_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypes_NestedEnum), repeated: true, packed: false},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestUnpackedTypes {
        return new TestUnpackedTypes().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestUnpackedTypes {
        return new TestUnpackedTypes().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestUnpackedTypes {
        return new TestUnpackedTypes().fromJsonString(jsonString, options);
    }

    static equals(a: TestUnpackedTypes | PlainMessage<TestUnpackedTypes> | undefined, b: TestUnpackedTypes | PlainMessage<TestUnpackedTypes> | undefined): boolean {
        return proto3.util.equals(TestUnpackedTypes, a, b);
    }

}


/**
 * This proto includes a recursively nested message.
 *
 * @generated from message proto3_lite_unittest.NestedTestAllTypes
 */
export class NestedTestAllTypes extends Message<NestedTestAllTypes> {

    /**
     * @generated from field: proto3_lite_unittest.NestedTestAllTypes child = 1;
     */
    child?: NestedTestAllTypes;

    /**
     * @generated from field: proto3_lite_unittest.TestAllTypes payload = 2;
     */
    payload?: TestAllTypes;

    constructor(data?: PartialMessage<NestedTestAllTypes>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.NestedTestAllTypes";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "child", kind: "message", T: NestedTestAllTypes},
        {no: 2, name: "payload", kind: "message", T: TestAllTypes},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NestedTestAllTypes {
        return new NestedTestAllTypes().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NestedTestAllTypes {
        return new NestedTestAllTypes().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NestedTestAllTypes {
        return new NestedTestAllTypes().fromJsonString(jsonString, options);
    }

    static equals(a: NestedTestAllTypes | PlainMessage<NestedTestAllTypes> | undefined, b: NestedTestAllTypes | PlainMessage<NestedTestAllTypes> | undefined): boolean {
        return proto3.util.equals(NestedTestAllTypes, a, b);
    }

}


/**
 * Define these after TestAllTypes to make sure the compiler can handle
 * that.
 *
 * @generated from message proto3_lite_unittest.ForeignMessage
 */
export class ForeignMessage extends Message<ForeignMessage> {

    /**
     * @generated from field: int32 c = 1;
     */
    c = 0;

    constructor(data?: PartialMessage<ForeignMessage>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.ForeignMessage";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForeignMessage {
        return new ForeignMessage().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForeignMessage {
        return new ForeignMessage().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForeignMessage {
        return new ForeignMessage().fromJsonString(jsonString, options);
    }

    static equals(a: ForeignMessage | PlainMessage<ForeignMessage> | undefined, b: ForeignMessage | PlainMessage<ForeignMessage> | undefined): boolean {
        return proto3.util.equals(ForeignMessage, a, b);
    }

}


/**
 * TestEmptyMessage is used to test behavior of unknown fields.
 *
 * @generated from message proto3_lite_unittest.TestEmptyMessage
 */
export class TestEmptyMessage extends Message<TestEmptyMessage> {

    constructor(data?: PartialMessage<TestEmptyMessage>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "proto3_lite_unittest.TestEmptyMessage";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestEmptyMessage {
        return new TestEmptyMessage().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestEmptyMessage {
        return new TestEmptyMessage().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestEmptyMessage {
        return new TestEmptyMessage().fromJsonString(jsonString, options);
    }

    static equals(a: TestEmptyMessage | PlainMessage<TestEmptyMessage> | undefined, b: TestEmptyMessage | PlainMessage<TestEmptyMessage> | undefined): boolean {
        return proto3.util.equals(TestEmptyMessage, a, b);
    }

}


